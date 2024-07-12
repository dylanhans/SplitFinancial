'use client'
import Link from 'next/link'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BankTabItem } from './BankTabItem'
import BankInfo from './BankInfo'
import TransactionsTable from './TransactionsTable'
import { Pagination } from './Pagination'
import PendingTransactions from './PendingTransactions'
import { getTransactionStatus } from '@/lib/utils'
import { Switch } from "@/components/ui/switch"
import CardTable from './CardTable'
import { Button } from "@/components/ui/button"
import SearchTransactions from './SearchTransactions'
import { Separator } from "@/components/ui/separator"
import { Toaster } from "@/components/ui/sonner"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { toast } from 'sonner'

const RecentTransactions = ({
    accounts,
    transactions = [],
    appwriteItemId,
    page=1,
}: RecentTransactionsProps) => {
const rowsPerPage = 20;
const totalPages = Math.ceil(transactions.length/rowsPerPage);
const [isChecked, setIsChecked] = React.useState(false);
const handleLockCardClick = () => {
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
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
                        />
                            <span className="other-text-13 font-smallboldish pt-2 bg-transparent mr-4 border-none ml-auto">
                            Lock Card
                            </span>
                            <Switch
                                checked={isChecked}
                                onCheckedChange={setIsChecked}
                                className="bg-blue-900 border-white border-1 shadow-sm mt-2"
                            />
                </TabsTrigger>
                ))}
            </TabsList>

            {accounts.slice(0, 1).map((account: Account) => (
                <TabsContent
                value={account.appwriteItemId}
                key={account.id}
            >
            <CardTable 
                    
            />
                    <div className="official-transactions ">
                        <div className="flex items-center justify-between">
                            <div className="authorized-transactions-row flex-grow">
                                <TooltipProvider>
                                    <p className="recent-transactions-label mt-8 pl-1 pr-10">
                                        Authorized Transactions{' '}
                                        <span className="text-blue-900 text-sm hover:bg-[#FDFEFF] cursor-pointer">
                                            <Tooltip>
                                                <TooltipTrigger>ⓘ</TooltipTrigger>
                                                <TooltipContent className="p-3 m-2 shadow-sm bg-white" style={{ marginLeft: '200px', position: 'relative', left: '10px' }}>
                                                    <p className="text-xs">Authorized Transactions are transactions that still need to be settled by a retailer or service provider.</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </span>
                                    </p>
                                </TooltipProvider>
                            </div>
                            <div className="ml-auto">
                                <p className="balance-label text-sm font-smallboldish pl-1 pr-3 mt-8">
                                    Total: <span className="font-smallbolder">-${totalProcessingAmount.toFixed(2)}</span>
                                </p>
                            </div>
                        </div>
                        <Separator className="flex-grow border-t border-gray-300 mt-2" /> {/* Line with full width */}
                            <div className="pending-transactions">
                                <PendingTransactions
                                    transactions={processingTransactions}
                                />
                                <div className="empty-transactions gap-3.5">
                                    {processingTransactions.length === 0 ? (
                                <p className="pl-2 pr-10 text-sm text-[#242424] mt-2.5 mb-2.5">There are currently no transactions to display.</p>
                                    ) : ''}
                                </div>
                                <Separator className="flex-grow border-t border-gray-300" /> {/* Line with full width */}
                            </div>
                    </div>
                    <div className="official-transactions">
                    <TooltipProvider>
                        <p className="recent-transactions-label mt-8 pl-1 pr-10">
                            Posted Transactions{' '}
                            <span className="text-blue-900 text-sm hover:bg-[#FDFEFF] cursor-pointer">
                            <Tooltip>
                                <TooltipTrigger>ⓘ</TooltipTrigger>
                                <TooltipContent className="p-3 m-2 shadow-sm bg-white" style={{ marginLeft: '275px', position: 'relative', left: '10px' }}>
                                <p className="text-xs">Posted Transactions are completed purchases, payments or transfers that have been settled and posted to your account.</p>
                                <p className="text-xs"> Transactions are typically posted 2-3 days after they have been authorized, and may reflect adjustments to the amount initially authorized. </p>
                                </TooltipContent>
                            </Tooltip>
                            </span>
                        </p>
                    </TooltipProvider>
                        <div className="searchable-transactions-posted">
                            <SearchTransactions 
                            />
                            <Separator className="flex-grow border-t border-gray-300 mt-3" /> {/* Line with full width */}
                            <TransactionsTable 
                                transactions={postedTransactions}
                            />
                        </div>
                    </div>
                    {totalPages > 1 && (
                        <div className="my-4 w-full">
                            <Pagination
                            totalPages={totalPages}
                            page={page}
                            />
                        </div>
                    )}
                
            </TabsContent>
            ))}
        </Tabs>

    </section>
  )
}

export default RecentTransactions