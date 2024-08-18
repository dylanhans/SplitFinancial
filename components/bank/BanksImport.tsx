'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { transactionCategoryStyles } from "@/constants"
  
  import { cn, formatAmount, formUrlQuery, formatDateTime, getTransactionStatus, removePaymentCharacters, removeSpecialCharacters } from "@/lib/utils"
import { useState } from "react"
import { logoutAccount } from "@/lib/actions/user.actions"
import React from 'react'
import { BankListing } from './BankListing'
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
   

const BankImport = ({
    accounts,
    account,
    appwriteItemId,
    user,
    header,
    type,
}: BankImportProps) => {

const [isChecked, setIsChecked] = React.useState(false);
const [isAlertOpen, setIsAlertOpen] = useState(false);
const [firstAccount, setFirstAccount] = useState<Account>(accounts[0]);

const [isSheetOpen, setIsSheetOpen] = useState(false);
    
      const handleTransactionClick = () => {
        setIsSheetOpen(true);
      };

      const router = useRouter();
      const searchParams = useSearchParams();
    
      const handleLogOut = async () => {
        const loggedOut = await logoutAccount();
    
        if (loggedOut) router.push('/sign-in');
      };

      const filteredAccounts = accounts.filter(account => 
        type === 'savings' ? account.subtype === 'savings' 
        : type === 'checking' ? account.subtype === 'checking'
        : false
      );
      
      const handleBankChange = (account: { appwriteItemId: any }) => {
        const newUrl = `/account?id=${account.appwriteItemId}`;
        router.push(newUrl, { scroll: false });
      };
      

  return (
    <>
      <Table className="w-full overflow-hidden">
  <TableHeader className="bg-[#fffcfc] w-full">
    <TableRow className="w-full">
      <TableHead className="px-2 border-b-[2px] border-black-2 mr-5 balance-text-16 font-smallbold w-full">{header}</TableHead>
      <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
      <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
      <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
      <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className="w-full overflow-hidden">
    <section className="bank-listings w-full overflow-hidden">
      <Tabs defaultValue={appwriteItemId} className="w-full">
        <TabsList className="recent-transactions-tablist w-full">
          {filteredAccounts.slice(0, 2).map((account) => (
            <TabsTrigger 
              key={account.id} 
              value={account.appwriteItemId} 
              className="w-full" 
              onClick={() => handleBankChange(account)}
            >
              <BankListing 
                key={account.id}
                account={account}
                appwriteItemId={appwriteItemId}
                accounts={accounts}
                user={user}
                setFirstAccount={setFirstAccount}
              />
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </section>
  </TableBody>
</Table>


    </>
  )
}

export default BankImport