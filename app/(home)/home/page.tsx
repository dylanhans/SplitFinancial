import Navbar from '@/components/NavBar';
import SmallNavbar from '@/components/SmallNavbar';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = () => {

  return (
    <div>
      <SmallNavbar />
      <Navbar />
    </div>
  )
}

export default Home