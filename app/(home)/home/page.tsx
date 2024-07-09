import HomeAdver from '@/components/bank/HomeAdver';
import Navbar from '@/components/bank/NavBar';
import SmallNavbar from '@/components/bank/SmallNavbar';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = () => {

  return (
    <div>
      <SmallNavbar />
      <Navbar />
      <HomeAdver />
    </div>
  )
}

export default Home