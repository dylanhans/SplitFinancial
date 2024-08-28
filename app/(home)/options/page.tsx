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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from '@/components/ui/separator';

const Apply = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardSelect = (id: string) => {
    setSelectedCard(id === selectedCard ? null : id);
  };
  const cardTypes = [
    { id: "Standard"},
    { id: "Travel and Lifestyle"},
    { id: "Student"},
    { id: "Rewards"},
    { id: "Business"}
  ];

  return (
    <main className='w-full h-full'>
      <section className='top-breadcrum-options'>
        <div className="pt-10 pb-10 pl-[300px]">
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
          <h1 className="font-bigtitle2 text-gray-900 pt-2">
              Credit Cards
          </h1>
        </div>
      </section>
      <section className='creditcard-promo bg-blue-500'>
        <img src="/icons/creditpromo.png" alt="" />
      </section>
      <section className='main-options'>
      <div className='flex flex-col pl-[300px]'> 
        <h1 className="flex font-bigtitle2 text-gray-900 pt-2">
              Featured Credit Cards
        </h1>
        <div className='flex flex-col pr-[300px]'>
          <div className="mt-4 flex flex-row"> {/* Adjust spacing as needed */}
            {cardTypes.map((cardType) => (
              <p key={cardType.id} className="font-subbed text-gray-900 flex p-4 cursor-pointer hover:text-gray-950">
                {cardType.id}
            </p>
            ))}
        </div>
        <Separator className="flex-grow border-t border-gray-300" /> {/* Line with full width */}
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
        </div>
      </section>
      <section className='w-full h-full pl-[300px] pr-[300px]'>
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </section>
    </main>
  )
}

export default Apply