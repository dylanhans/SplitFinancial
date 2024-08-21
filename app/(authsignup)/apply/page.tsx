import Navbar from '@/components/bank/NavBar';
import { Canadians } from '@/components/home/Canadians';
import { Credit } from '@/components/home/Credit';
import { CreditSecured } from '@/components/home/CreditSecured';
import { PlatformSection } from '@/components/home/PlatformSection';
import { Superpowers } from '@/components/home/Superpowers';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

import type { Metadata } from "next";
import Footer1 from '@/components/MainLayout/footer1';


export const metadata: Metadata = {
  title: "Split Financial Services",
  description: "Finance payments for in-store purchases",
  icons: {
    icon: '/icons/testlogo4.jpeg',
  }
};

const Apply = () => {

  return (
    <div>
      {/* <HeroSection /> */}
      <CreditSecured />
      <PlatformSection />
      <Superpowers />
      <Credit />
      <Canadians />
      <Footer1 />
    </div>
  )
}

export default Apply