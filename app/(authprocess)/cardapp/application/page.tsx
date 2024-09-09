
import React from 'react'

import type { Metadata } from "next";
import CardForm from '@/components/bank/CardForm';


export const metadata: Metadata = {
  title: "Split - Secure Application",
  description: "Finance payments for in-store purchases",
  icons: {
    icon: '/icons/testlogo4.jpeg',
  }
};

const cardApplication = () => {
  return (
    <section className="flex-center size-full"> 
      <CardForm type="application-process"/>
    </section>
  )
}

export default cardApplication