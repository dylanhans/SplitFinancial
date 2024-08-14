'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { formUrlQuery, getTransactionStatus } from '@/lib/utils'
import { Separator } from "@/components/ui/separator"
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
                                <BankImport
                                    type="savings" // savings is chequing debit account
                                    header="Bank Accounts"
                                    accounts={accounts}
                                />
                                <Separator className="flex-grow border-t border-gray-300" /> {/* Line with full width */}
                                <PlaidLink 
                                    variant='bankaccount'
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
                                <BankImport
                                    type="checking" // checking is credit card account
                                    header="Credit Cards"
                                    accounts={accounts}
                                />
                                
                                <Separator className="flex-grow border-t border-gray-300" /> {/* Line with full width */}
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
                                <BankImport
                                    type={("Line" || "Loan")}
                                    header="Lines & Loans"
                                    accounts={accounts}
                                />
                                
                                <Separator className="flex-grow border-t border-gray-300" /> {/* Line with full width */}
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