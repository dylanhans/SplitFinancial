
import React from 'react'

import type { Metadata } from "next";
import EnrolForm from '@/components/bank/EnrolForm';


export const metadata: Metadata = {
  title: "Split - Secure Application",
  description: "Finance payments for in-store purchases",
  icons: {
    icon: '/icons/testlogo4.jpeg',
  }
};

const enrolApplication = () => {
  return (
    <section className="flex-center size-full max-sm:px-6"> 
      <EnrolForm type="enrol"/>
    </section>
  )
}

export default enrolApplication