
import AuthForm from '@/components/bank/AuthForm'
import React from 'react'

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Split - Secure Application",
  description: "Finance payments for in-store purchases",
  icons: {
    icon: '/icons/testlogo4.jpeg',
  }
};

const cardApplication = () => {
  return (
    <section className="flex-center size-full max-sm:px-6"> 
      <AuthForm type="sign-up"/>
    </section>
  )
}

export default cardApplication