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


const RecentTransactions = ({
    accounts,
    transactions = [],
    appwriteItemId,
    page=1,
}: RecentTransactionsProps) => {
const rowsPerPage = 10;
const totalPages = Math.ceil(transactions.length/rowsPerPage);

const indexOfLastTransaction = page * rowsPerPage;
const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

const currentTransactions = transactions.slice(
    indexOfFirstTransaction, indexOfLastTransaction
)

const processingTransactions = currentTransactions.filter(transaction => {
    const status = getTransactionStatus(new Date(transaction.date));
    return status === 'Processing';
  });

const postedTransactions = currentTransactions.filter(transaction => {
    const status = getTransactionStatus(new Date(transaction.date));
    return status === 'Success';
  });

  return (
    <section className="recent-transactions">
        <header className="flex items-center justify-between">
            {/* redirect to trans history with appwrite specific id and bank account*/}
            <Link href={`/lock-card/?id=${appwriteItemId}`} className="lock-card-all-btn">
                Lock Card
                <Switch />
            </Link>
        </header>

        <Tabs defaultValue={appwriteItemId} className="w-full">
            <TabsList className="recent-transactions-tablist">
                {/* as many triggers as bank accounts, map over each account of type Account*/}
                {accounts.map((account: Account) => (
                    //return for each mapping of account
                    <TabsTrigger key={account.id} value={account.appwriteItemId}>
                        <BankTabItem 
                            key={account.id}
                            account={account}
                            appwriteItemId={appwriteItemId}
                        />
                    </TabsTrigger>
                ))}
            </TabsList>

            {accounts.map((account: Account)=>(
            <TabsContent
                value={account.appwriteItemId}
                key={account.id}
                className="space-y-4"
            >
                <BankInfo 
                    account={account}
                    appwriteItemId={appwriteItemId}
                    type="full"
                />
                <p className="recent-transactions-label">
                    Authorized Transactions <span className="text-blue-900 text-sm">ⓘ</span>
                </p>
                <PendingTransactions
                    transactions={processingTransactions}
                />
                <p className="recent-transactions-label">
                    Posted Transactions <span className="text-blue-900 text-sm">ⓘ</span>
                </p>
                <TransactionsTable 
                    transactions={postedTransactions}
                />

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