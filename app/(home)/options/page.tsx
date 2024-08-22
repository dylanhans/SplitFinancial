'use client'
import Navbar from '@/components/bank/NavBar';
import { Canadians } from '@/components/home/Canadians';
import { Credit } from '@/components/home/Credit';
import { CreditSecured } from '@/components/home/CreditSecured';
import { PlatformSection } from '@/components/home/PlatformSection';
import { Superpowers } from '@/components/home/Superpowers';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import type { Metadata } from "next";
import Footer1 from '@/components/MainLayout/footer1';
import AuthFormCredit from '@/components/bank/AuthFormCredit';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const Apply = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardSelect = (id: string) => {
    setSelectedCard(id === selectedCard ? null : id);
  };
  
  return (
    <main>
      <div className="pt-10 pb-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="opacity-75">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/options">Options</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        </div>
      <div className="flex flex-row gap-x-8"> 
        <AuthFormCredit 
          id='card1'
          isChecked={selectedCard === 'card1'}
          onCheckmarkClick={() => handleCardSelect('card1')}
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
          id='card2'
          isChecked={selectedCard === 'card2'}
          onCheckmarkClick={() => handleCardSelect('card2')}
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
          isChecked={selectedCard === 'card3'}
          onCheckmarkClick={() => handleCardSelect('card3')}
          id='card3'
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