'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BankTabItem } from './BankTabItem'
import BankInfo from './BankInfo'
import TransactionsTable from './TransactionsTable'
import { useRouter, useSearchParams } from 'next/navigation';
import { Pagination } from './Pagination'
import PendingTransactions from './PendingTransactions'
import { formUrlQuery, getTransactionStatus } from '@/lib/utils'
import { Switch } from "@/components/ui/switch"
import CardTable from './CardTable'
import { Button } from "@/components/ui/button"
import SearchTransactions from './SearchTransactions'
import { Separator } from "@/components/ui/separator"
import { Toaster } from "@/components/ui/sonner"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { toast } from 'sonner'
import { createDwollaCustomer } from '@/lib/actions/dwolla.actions'
import AccountType from './AccountType'
import PlaidLink from './PlaidLink'

const HomeAccounts = ({
    accounts,
    transactions = [],
    appwriteItemId,
    user,
    page=1,
}: HomeAccountsProps) => {
const rowsPerPage = 20;
const totalPages = Math.ceil(transactions.length/rowsPerPage);
const [isChecked, setIsChecked] = React.useState(false);
const [isAlertOpen, setIsAlertOpen] = useState(false);
const [firstAccount, setFirstAccount] = useState<Account>(accounts[0]);

const handleCheckedChange = (checked) => {
    setIsChecked(checked);
    if (checked) {
      setIsAlertOpen(true);
    }
  };

const indexOfLastTransaction = page * rowsPerPage;
const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

const currentTransactions = transactions.slice(
    indexOfFirstTransaction, indexOfLastTransaction
)
//add check if none, then return div p 'There are currently no more transactions to display.'

const processingTransactions = currentTransactions.filter(transaction => {
    const status = getTransactionStatus(new Date(transaction.date));
    return status === 'Processing';
  });

const postedTransactions = currentTransactions.filter(transaction => {
    const status = getTransactionStatus(new Date(transaction.date));
    return status === 'Success';
  });
  
const totalProcessingAmount = processingTransactions.reduce(
    (total, transaction) => total + parseFloat(transaction.amount),
    0
);



  return (
    <section className="recent-transactions">
        <Tabs defaultValue={appwriteItemId} className="w-full">
            <TabsList className="recent-transactions-tablist w-full">
            {accounts.slice(0, 1).map((account: Account) => (
                <TabsTrigger key={account.id} value={account.appwriteItemId} className="flex items-center w-full">
                    <BankTabItem 
                        key={account.id}
                        account={account}
                        appwriteItemId={appwriteItemId}
                        accounts={accounts}
                        user={user}
                        setFirstAccount={setFirstAccount}
                        />
                            <span className="other-text-13 font-smallboldish pt-2 bg-transparent mr-4 border-none ml-auto">
                            </span>
                </TabsTrigger>
                ))}
            </TabsList>

            {accounts.map((account: Account)=> (
                <TabsContent
                value={account.appwriteItemId}
                key={account.id}
                className="content"
            >
            {/*<CardTable 
                account={account}
                appwriteItemId={appwriteItemId}
                //paymentInfo={paymentInfo}
                //splitInfo={splitInfo}
                transactions={transactions}
            /> */}
                <div className="bank-accounts ">
                        <div className="flex items-center justify-between">
                        <div className="authorized-transactions-row flex-grow mt-8 pl-1 pr-10">
                            </div>
                            
                            
                        </div>
                            <div className="pending-transactions">
                                <AccountType
                                    type="debit"
                                    header="Bank Accounts"
                                    account={account}
                                    transactions={processingTransactions}
                                />
                                <Separator className="flex-grow border-t border-gray-300" /> {/* Line with full width */}
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
                                <AccountType
                                    type="credit"
                                    header="Credit Cards"
                                    account={account}
                                    transactions={processingTransactions}
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
                                <AccountType
                                    type={("Line" || "Loan")}
                                    header="Lines & Loans"
                                    account={account}
                                    transactions={processingTransactions}
                                />
                                
                                <Separator className="flex-grow border-t border-gray-300" /> {/* Line with full width */}
                                <PlaidLink 
                                    variant="loan/line"
                                    user={user}
                                />
                        </div>
                </div>
            </TabsContent>
            ))}
        </Tabs>

    </section>
  )
}

export default HomeAccounts