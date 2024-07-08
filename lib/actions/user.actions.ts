'use server';

import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { encryptId, extractCustomerIdFromUrl, parseStringify } from "../utils";
import { CountryCode, ProcessorTokenCreateRequest, ProcessorTokenCreateRequestProcessorEnum, Products } from 'plaid';
import { plaidClient } from '@/lib/plaid';
import { revalidatePath } from "next/cache";
import { addFundingSource, createDwollaCustomer } from "./dwolla.actions";

//destructure for easy integration
const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
  APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID, 
} = process.env;

//returns database user instead of session user
export const getUserInfo = async({ userId }: getUserInfoProps) => {
  try {
    //get banks from database
    //access first
    const { database } = await createAdminClient();

    const user = await database.listDocuments(
      //fetch these, only to a specific user (query)
      DATABASE_ID!,
      USER_COLLECTION_ID!,
      [Query.equal('userId', [userId])]
    )

    return parseStringify(user.documents[0]);
  } catch (error) {
    console.log(error)
  }
}

export const signIn = async ({email, password}: signInProps) =>{
    try {
        //mutation or database or make fetch
        const { account } = await createAdminClient();

        const session = await account.createEmailPasswordSession(email, password);
      
        //store in cookies, new user. need to store in database and connect to plaid.
        cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });

        const user = await getUserInfo({userId: session.userId});

        return parseStringify(user);
    } catch (error) {
        console.error('error', error);
    }
}

export const signUp = async ({ password, ...userData}: SignUpParams) =>{
    const { email, firstName, lastName} = userData;

    //make atomic, works or doesn't.
    let newUserAccount;

    try {
        //mutation or database or make fetch
        //create a user account
        //extract -->below account and database
        const { account, database } = await createAdminClient();

        newUserAccount = await account.create(
          ID.unique(), 
          email, 
          password, 
          `${firstName} ${lastName}`
        );

        if(!newUserAccount) throw new Error('Error creating user')

        const dwollaCustomerUrl = await createDwollaCustomer({
          //spread user data
          ...userData, 
          type: 'personal'
        })

        //check if received dwolla customer url
        if(!dwollaCustomerUrl) throw new Error('Error creating Dwolla customer')

        const dwollaCustomerId = extractCustomerIdFromUrl(dwollaCustomerUrl);

        const newUser = await database.createDocument(
          DATABASE_ID!,
          USER_COLLECTION_ID!,
          ID.unique(1),
          {
            //object containing information needed
            ...userData,
            userId: newUserAccount.$id,
            dwollaCustomerId,
            dwollaCustomerUrl,
          } 
        )

        const session = await account.createEmailPasswordSession(email, password);
      
        //store in cookies, new user. need to store in database and connect to plaid.
        cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });

        return parseStringify(newUser);
    } catch (error) {
        console.error('error', error);
    }
}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const result =  await account.get();

      const user = await getUserInfo({userId: result.$id})
      
      return parseStringify(user);
    } catch (error) {
      return null;
    }
  }
 
  export const logoutAccount = async () => {
    try {
      const { account } = await createSessionClient();
      cookies().delete('appwrite-session');

      await account.deleteSession('current')
    } catch (error) {
      return null;
    }
  }

  export const createLinkToken = async (user: User) => {
    try {
      const tokenParams = {
        user: {
        client_user_id: user.$id
      },
      client_name: `${user.firstName} ${user.lastName}`,
      products: ['auth'] as Products[],
      language: 'en',
      country_codes: ['US'] as CountryCode[],
      }

      const response = await plaidClient.linkTokenCreate(tokenParams);

      return parseStringify({linkToken: response.data.link_token})
    } catch (error) {
      console.log(error);
    }
  }

  export const createBankAccount = async ({
    accessToken,
    userId,
    accountId,
    bankId,
    fundingSourceUrl,
    shareableId,
  }: createBankAccountProps) => {
    try {
      //destructure, create bank account as document in program database (appwrite)
      const  { database } = await createAdminClient();
      // create new document and add to collection, from api appwrite
      const bankAccount = await database.createDocument(
        DATABASE_ID!, 
        BANK_COLLECTION_ID!,
        ID.unique(),
        {
          userId,
          bankId,
          accountId,
          accessToken,
          fundingSourceUrl,
          shareableId,
        }
      )

      return parseStringify(bankAccount);
    } catch (error) {
      
    }
  }

  //exchange public token for access token.
  // allows to create bank account, get that account data 
  // then connect a payment processor dwolla and allows funds to transfer between accounts

  export const exchangePublicToken = async ({
    publicToken,
    user,
  }: exchangePublicTokenProps) => {
    try {
      //exchange public token for access token and item ID which is contained within 'response'
      const response = await plaidClient.itemPublicTokenExchange({
        public_token: publicToken,
      });
      //extract information from response, access token and item ID
      const accessToken = response.data.access_token;
      const itemId = response.data.item_id;
      //get account info from Plaid using access token
      const accountsResponse = await plaidClient.accountsGet({
        access_token: accessToken,
      });

      //get account data
      const accountData = accountsResponse.data.accounts[0];
      //create processor token for dwolla using the access token and account ID
      const request: ProcessorTokenCreateRequest = {
        access_token: accessToken,
        account_id: accountData.account_id,
        processor: "dwolla" as ProcessorTokenCreateRequestProcessorEnum,
      };

      //generate processor token
      const processorTokenResponse = await plaidClient.processorTokenCreate(request);
      //assign to processorToken from response data specification
      const processorToken = processorTokenResponse.data.processor_token;
      
      //create funding source url for the account using the dwolla customer Id, processor token and bank name

      //connect payment processor function to bank account so you can send/receive funds
      const fundingSourceUrl = await addFundingSource({
        dwollaCustomerId: user.dwollaCustomerId,
        processorToken,
        bankName: accountData.name,
      });

      // if funding source url isnt created, throw error
      if (!fundingSourceUrl) throw Error;

      //if funding source exists, create bank account using user id, item id, account id, access token, funding source url, and sharable id.
      
      //await server action createBankAccount
      await createBankAccount({
        userId: user.$id,
        bankId: itemId,
        accountId: accountData.account_id,
        accessToken,
        fundingSourceUrl,
        shareableId: encryptId(accountData.account_id),
      });

      //revalidate path to reflect changes
      revalidatePath("/");

      //return success message
      return parseStringify({
        publicTokenExchange: "complete",
      });

    } catch (error) {
      console.error("An error occurred while creating exchanging token:", error);
    }
  }

  export const getBanks = async ({ userId }: getBanksProps) => {
    try {
      //get banks from database
      //access first
      const { database } = await createAdminClient();

      const banks = await database.listDocuments(
        //fetch these, only to a specific user (query)
        DATABASE_ID!,
        BANK_COLLECTION_ID!,
        [Query.equal('userId', [userId])]
      )

      return parseStringify(banks.documents);
    } catch (error) {
      console.log(error)
    }
  }


  export const getBank = async ({ documentId }: getBankProps) => {
    try {
      //get banks from database
      //access first
      const { database } = await createAdminClient();

      const bank = await database.listDocuments(
        //fetch these, only to a specific user (query)
        DATABASE_ID!,
        BANK_COLLECTION_ID!,
        [Query.equal('$id', [documentId])]
      )

      return parseStringify(bank.documents[0]);
    } catch (error) {
      console.log(error)
    }
  }

  export const getBankByAccountId = async ({ accountId }: getBankByAccountIdProps) => {
    try {
      const { database } = await createAdminClient();
  
      const bank = await database.listDocuments(
        DATABASE_ID!,
        BANK_COLLECTION_ID!,
        [Query.equal('accountId', [accountId])]
      )
  
      if(bank.total !== 1) return null;
  
      return parseStringify(bank.documents[0]);
    } catch (error) {
      console.log(error)
    }
  }

