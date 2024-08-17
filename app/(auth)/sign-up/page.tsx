import AuthForm from '@/components/bank/AuthForm'
//import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Split - Secure Sign Up",
  description: "Finance payments for in-store purchases",
  icons: {
    icon: '/icons/testlogo4.jpeg',
  }
};
const Signup = async() => {
  /*const loggedInUser = await getLoggedInUser();
  console.log(loggedInUser)*/

  return (
    <section className="flex-center size-full max-sm:px-6"> 
      <AuthForm type="sign-up"/>
    </section>
  )
}

export default Signup