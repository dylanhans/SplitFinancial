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
    appwriteItemId,
    user,
}: HomeAccountsProps) => {
const [isChecked, setIsChecked] = React.useState(false);
const [isAlertOpen, setIsAlertOpen] = useState(false);
const [firstAccount, setFirstAccount] = useState<Account>(accounts[0]);

const savingsAccounts = accounts.filter(account => account.subtype === 'savings');
const creditAccounts = accounts.filter(account => account.subtype === 'checking');
const lineLoanAccounts = accounts.filter(account => account.subtype === 'loanline');
const InvestAccounts = accounts.filter(account => account.subtype === 'invest');

  return (
    <section className="recent-transactions">
                <div className="bank-accounts ">
                    <div className="flex items-center justify-between">
                        
                        {/* spacing */}
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
                                        appwriteItemId={appwriteItemId}
                                        user={user}
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
                        
                        <div className="authorized-transactions-row flex-grow mt-5 pl-1 pr-10">
                            </div>
                            
                            
                        </div>
                        <div className="pending-transactions">
                            {creditAccounts.length > 0 ? (
                                <>
                                    <BankImport
                                        type="checking" // savings is chequing debit account
                                        header="Credit Cards"
                                        accounts={accounts}
                                        appwriteItemId={appwriteItemId}
                                        user={user}
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
                            
                            <div className="authorized-transactions-row flex-grow mt-5 pl-1 pr-10">
                            </div>
                            
                        </div>

                        <div className="pending-transactions">
                            {lineLoanAccounts.length > 0 ? (
                                <>
                                    <BankImport
                                        type={"Line"||"Loan"} // savings is chequing debit account
                                        header="Lines & Loans"
                                        accounts={accounts}
                                        appwriteItemId={appwriteItemId}
                                        user={user}
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

                        <div className="pending-transactions">
                            {InvestAccounts.length > 0 ? (
                                <>
                                    <BankImport
                                        type={"Invest"} // savings is chequing debit account
                                        header="Investments"
                                        accounts={accounts}
                                        appwriteItemId={appwriteItemId}
                                        user={user}
                                    />
                                    <Separator className="flex-grow border-t border-gray-300" /> {/* Line with full width */}
                                </>
                            ) : 
                            <Table className="w-full mt-8">
                                <TableHeader className="bg-[#fffcfc] w-full">
                                    <TableRow className="w-full">
                                    <TableHead className="px-2 border-b-[2px] border-black-2 mr-5 balance-text-16 font-smallbold w-full">Investments</TableHead>
                                    <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
                                    <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
                                    <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
                                    <TableHead className="px-2 border-b-[2px] border-black-2 w-full"></TableHead>
                                    </TableRow>
                                </TableHeader>
                            </Table>
                            }
                            <PlaidLink 
                                variant="Invest"
                                user={user}
                            />
                        </div>
                        <div className="tradecopyright flex-col mt-10">
                            <p className="text-12 mt-4 font-er text-gray-600">
                            <span className="font-smallbold">Bank Accounts, Credit Cards, Lines </span> and <span className="font-smallbold">Loans</span> are offered by Split Financial Services.
                            </p>
                            <p className="text-12 mt-4 font-er text-gray-600">
                            <span className="font-smallbold">Investment </span> products and services may be offered by one or more of the following entities: Split Financial Services, Split Mutual Funds Inc.(“SMFI”), Split Direct Investing Inc. ("Split DI”), Split Securities Inc. ("SplitSC”), and Split SInvest Inc. These companies are separate corporate entities which are affiliated. SMFI is licensed as a financial services firm in the province of Ontario. Split DI and Split SC are Members of the Canadian Investor Protection Fund.
                            </p>
                            <p className="text-12 mt-4 font-er text-gray-600">
                            The account balances provided are for informational purposes only and do not represent an official statement of your account holdings with the applicable entity. Please consult your official account statement for information and details on your actual account holdings.
                            </p>
                        </div>
                </div>
    </section>
  )
}

export default HomeAccounts