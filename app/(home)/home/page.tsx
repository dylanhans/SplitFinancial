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
import { HeroSection } from '@/components/home/HeroSection';


export const metadata: Metadata = {
  title: "Split Financial",
  description: "Finance payments for in-store purchases",
  icons: {
    icon: '/icons/testlogo4.jpeg',
  }
};

const Home = () => {

  return (
    <div>
      <Navbar />
      <CreditSecured />
      <PlatformSection />
      <Superpowers />
      <Canadians />
      <Footer1 />
      <div className="chatbox__button fixed z-50">
        <button>
          <img src="/icons/headerlogo.png" height={50} width={50} alt="Split Assistant" className='rounded-md bg-gradient-to-r from-[#14315B] to-[#2757A1]' />
        </button>
      </div>
    </div>
  )
}

export default Home