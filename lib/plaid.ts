import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';


//create plaid configuration
const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
        headers: {
            'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
            'PLAID-SECRET': process.env.PLAID_SECRET,

        }
    }
})

//create plaid client, to then call within server actions
export const plaidClient = new PlaidApi(configuration);