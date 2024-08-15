'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { formUrlQuery, getTransactionStatus } from '@/lib/utils'
import { Separator } from "@/components/ui/separator"
  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import PlaidLink from './PlaidLink'
import BankImport from './BanksImport'

const HomeAccounts = ({
    accounts,
    transactions = [],
    appwriteItemId,
    user,
}: HomeAccountsProps) => {
const [isChecked, setIsChecked] = React.useState(false);
const [isAlertOpen, setIsAlertOpen] = useState(false);
const [firstAccount, setFirstAccount] = useState<Account>(accounts[0]);

const savingsAccounts = accounts.filter(account => account.subtype === 'savings');
const creditAccounts = accounts.filter(account => account.subtype === 'checking');
const lineLoanAccounts = accounts.filter(account => account.subtype === 'loanline');


const handleCheckedChange = (checked) => {
    setIsChecked(checked);
    if (checked) {
      setIsAlertOpen(true);
    }
  };
  return (
    <section className="recent-transactions">
                <div className="bank-accounts ">
                    <div className="flex items-center justify-between">
                        <div className="authorized-transactions-row flex-grow mt-8 pl-1 pr-10">
                        </div> 
                            
                        </div>
                        <div className="pending-transactions">
                            {savingsAccounts.length > 0 ? (
                                <>
                                    <BankImport
                                        type="savings" // savings is chequing debit account
                                        header="Bank Accounts"
                                        accounts={accounts}
                                    />
                                    <Separator className="flex-grow border-t border-gray-300" /> {/* Line with full width */}
                                </>
                            ) : 
                            <Table className="w-full">
                                <TableHeader className="bg-[#fffcfc] w-full">
                                    <TableRow className="w-full">
                                    <TableHead className="px-2 border-b-[2px] border-black-2 mr-5 balance-text-16 font-smallbold w-full">Bank Accounts</TableHead>
                                    <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
                                    <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
                                    <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
                                    <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
                                    </TableRow>
                                </TableHeader>
                            </Table>
                            }
                            <PlaidLink 
                                variant="bankaccount"
                                user={user}
                            />
                        </div>
                </div>


                <div className="credit-accounts ">
                        <div className="flex items-center justify-between">
                        <div className="authorized-transactions-row flex-grow mt-8 pl-1 pr-10">
                            </div>
                            
                            
                        </div>
                        <div className="pending-transactions">
                            {creditAccounts.length > 0 ? (
                                <>
                                    <BankImport
                                        type="checking" // savings is chequing debit account
                                        header="Credit Cards"
                                        accounts={accounts}
                                    />
                                    <Separator className="flex-grow border-t border-gray-300" /> {/* Line with full width */}
                                </>
                            ) : 
                            <Table className="w-full">
                                <TableHeader className="bg-[#fffcfc] w-full">
                                    <TableRow className="w-full">
                                    <TableHead className="px-2 border-b-[2px] border-black-2 mr-5 balance-text-16 font-smallbold w-full">Credit Cards</TableHead>
                                    <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
                                    <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
                                    <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
                                    <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
                                    </TableRow>
                                </TableHeader>
                            </Table>
                            }
                            <PlaidLink 
                                variant="credit"
                                user={user}
                            />
                        </div>
                </div>
                

                <div className="line-loan-accounts ">
                        <div className="flex items-center justify-between">
                            <div className="authorized-transactions-row flex-grow mt-8 pl-1 pr-10">
                            </div>
                            
                        </div>

                        <div className="pending-transactions">
                            {lineLoanAccounts.length > 0 ? (
                                <>
                                    <BankImport
                                        type={"Line"||"Loan"} // savings is chequing debit account
                                        header="Lines & Loans"
                                        accounts={accounts}
                                    />
                                    <Separator className="flex-grow border-t border-gray-300" /> {/* Line with full width */}
                                </>
                            ) : 
                            <Table className="w-full">
                                <TableHeader className="bg-[#fffcfc] w-full">
                                    <TableRow className="w-full">
                                    <TableHead className="px-2 border-b-[2px] border-black-2 mr-5 balance-text-16 font-smallbold w-full">Lines & Loans</TableHead>
                                    <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
                                    <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
                                    <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
                                    <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
                                    </TableRow>
                                </TableHeader>
                            </Table>
                            }
                            <PlaidLink 
                                variant="loan/line"
                                user={user}
                            />
                        </div>
                </div>
    </section>
  )
}

export default HomeAccounts