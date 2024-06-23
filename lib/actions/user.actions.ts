'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { encryptId, parseStringify } from "../utils";
import { CountryCode, ProcessorTokenCreateRequest, ProcessorTokenCreateRequestProcessorEnum, Products } from 'plaid';
import { plaidClient } from '@/lib/plaid';
import { revalidatePath } from "next/cache";
import { addFundingSource } from "./dwolla.actions";

export const signIn = async ({email, password}: signInProps) =>{
    try {
        //mutation or database or make fetch
        const { account } = await createAdminClient();
        const response = await account.createEmailPasswordSession(email, password);
        return parseStringify(response);
    } catch (error) {
        console.error('error', error);
    }
}

export const signUp = async (userData: SignUpParams) =>{
    const { email, password, firstName, lastName} = userData;

    try {
        //mutation or database or make fetch
        //create a user account
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(ID.unique(), 
        email, 
        password, 
        `${firstName} ${lastName}`
        );

        const session = await account.createEmailPasswordSession(email, password);
      
        cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });

        return parseStringify(newUserAccount);
    } catch (error) {
        console.error('error', error);
    }
}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const user =  await account.get();
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
      client_name: user.name,
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
        sharableId: encryptId(accountData.account_id),
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