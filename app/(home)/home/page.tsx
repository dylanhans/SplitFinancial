import Navbar from '@/components/bank/NavBar';
import { Credit } from '@/components/home/Credit';
import { CreditSecured } from '@/components/home/CreditSecured';
import { PlatformSection } from '@/components/home/PlatformSection';
import { Superpowers } from '@/components/home/Superpowers';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = () => {

  return (
    <div>
      <Navbar />
      {/* <HeroSection /> */}
      <CreditSecured />
      <PlatformSection />
      <Superpowers />
      <Credit />
      {/* <Canadians /> */}
    </div>
  )
}

export default Home