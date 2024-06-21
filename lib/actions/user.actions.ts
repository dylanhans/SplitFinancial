'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
import { CountryCode, Products } from 'plaid';
import { plaidClient } from '@/lib/plaid';

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

    } catch (error) {
      console.error("An error occurred while creating exchanging token:", error);
    }
  }