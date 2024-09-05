import HeaderBox from '@/components/bank/HeaderBox'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

//pass accounts, containing data for bank accounts. Choose from which to send money from and to.
const Profile = async () => {

  const loggedIn = await getLoggedInUser();

  const accounts = await getAccounts({ userId: loggedIn.$id})

  if (!accounts) return;

  const accountsData = accounts?.data;
  
  return (
    
    <section className="payment-Profile">
      <HeaderBox 
        title="Payment Profile"
        subtext="Please provide any specific details or notes related to the payment Profile"
      />

      <section className="size-full pt-5">
        
      </section>
    </section>
  )
}

export default Profile