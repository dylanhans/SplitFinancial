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
  
  import { cn, formatAmount, formatDateTime, getTransactionStatus, removePaymentCharacters, removeSpecialCharacters } from "@/lib/utils"
import router from "next/router"
import { useState } from "react"
import { logoutAccount } from "@/lib/actions/user.actions"
import React from 'react'
import { BankListing } from './BankListing'
  
  const CategoryBadge = ({ category }: CategoryBadgeProps) => {
    const {
      borderColor,
      backgroundColor,
      textColor,
      chipBackgroundColor,
     } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default
     
    return (
      <div className={cn('category-badge', borderColor, chipBackgroundColor)}>
        <div className={cn('size-2 rounded-full', backgroundColor)} />
        <p className={cn('text-[12px] font-medium', textColor)}>{category}</p>
      </div> 
    )
  } 

const BankImport = ({
    accounts,
    transactions = [],
    appwriteItemId,
    user,
    header,
}: RecentTransactionsProps) => {
const rowsPerPage = 20;
const totalPages = Math.ceil(transactions.length/rowsPerPage);
const [isChecked, setIsChecked] = React.useState(false);
const [isAlertOpen, setIsAlertOpen] = useState(false);
const [firstAccount, setFirstAccount] = useState<Account>(accounts[0]);

const [isSheetOpen, setIsSheetOpen] = useState(false);
    
      const handleTransactionClick = () => {
        setIsSheetOpen(true);
      };
    
      const handleLogOut = async () => {
        const loggedOut = await logoutAccount();
    
        if (loggedOut) router.push('/sign-in');
      };

const handleCheckedChange = (checked) => {
    setIsChecked(checked);
    if (checked) {
      setIsAlertOpen(true);
    }
  };


  return (
    <>
      <Table>
        <TableHeader className="bg-[#fffcfc]">
          <TableRow>
            <TableHead className="px-2 border-b-[2px] border-black-2 mr-5 balance-text-16 font-smallbold">{header}</TableHead>
            <TableHead className="px-2 border-b-[2px] border-black-2"></TableHead>
            <TableHead className="px-2 border-b-[2px] border-black-2"></TableHead>
            <TableHead className="px-2 border-b-[2px] border-black-2"></TableHead>
            <TableHead className="px-2 border-b-[2px] border-black-2"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

    <section className="bank-listings">
        <Tabs defaultValue={appwriteItemId} className="w-full">
            <TabsList className="recent-transactions-tablist w-full">
            {accounts.slice(0, 1).map((account: Account) => (
                <TabsTrigger key={account.id} value={account.appwriteItemId} className="flex items-start w-full">
                    <BankListing 
                        key={account.id}
                        account={account}
                        appwriteItemId={appwriteItemId}
                        accounts={accounts}
                        user={user}
                        setFirstAccount={setFirstAccount}
                        />

                        {/* <div className="banktab-item2 pt-2 bg-transparent border-blue-600">
                                <p className="balance-text-14 line-clamp-1 flex-1 font-medium text-blue-600">
                                    Make a Payment
                                </p>
                            </div>*/}

                            <span className="other-text-13 font-smallboldish pt-2 bg-transparent mr-4 border-none ml-auto">
                                
                            </span>
                            
                </TabsTrigger>
                ))}
            </TabsList>
            
            {/*}
            {accounts.map((account: Account)=> (
                <TabsContent
                value={account.appwriteItemId}
                key={account.id}
                className="content"
            >
            </TabsContent>
            ))}
        */}

        </Tabs>
        </section>
    </TableBody>
    </Table>
    </>
  )
}

export default BankImport