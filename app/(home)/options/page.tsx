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
import AuthFormCredit from '@/components/bank/AuthFormCredit';


export const metadata: Metadata = {
  title: "Split Financial Services",
  description: "Finance payments for in-store purchases",
  icons: {
    icon: '/icons/testlogo4.jpeg',
  }
};

const Apply = () => {

  return (
    <main>
      <div className="flex flex-row gap-x-8"> 
        <AuthFormCredit 
          type="savings"
          subtype="Cash Back"
          title="Split Secured Credit"
          description="Earn up to $950 in value in the first 12 months, including up to 45,000 bonus Scene+ points and your first annual fee waived.³"
          offer=""
          af={110}
          cl={1000}
          car={22.99}
          pr={20.99}
          rewards=""
          img="/icons/tester-card.png"
        />

        <AuthFormCredit 
          type="savings"
          subtype="Student"
          title="Split Credit"
          description="Earn up to $950 in value in the first 12 months, including up to 45,000 bonus Scene+ points and your first annual fee waived.³"
          offer=""
          af={110}
          cl={1000}
          car={22.99}
          pr={20.99}
          rewards=""
          img="/icons/test-card.png"
        />

<AuthFormCredit 
          type="savings"
          subtype="Savings"
          title="Split High-Interest Savings"
          description="Earn up to $950 in value in the first 12 months, including up to 45,000 bonus Scene+ points and your first annual fee waived.³"
          offer=""
          af={110}
          cl={1000}
          car={22.99}
          pr={20.99}
          rewards=""
          img="/icons/card2.png"
        />
      </div>
    </main>
  )
}

export default Apply