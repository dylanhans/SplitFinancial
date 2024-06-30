import Link from 'next/link'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BankTabItem } from './BankTabItem'
import BankInfo from './BankInfo'
import TransactionsTable from './TransactionsTable'

const RecentTransactions = ({
    accounts,
    transactions = [],
    appwriteItemId,
    page=1,
}: RecentTransactionsProps) => {
  return (
    <section className="recent-transactions">
        <header className="flex items-center justify-between">
            <h2 className="recent-transactions-label">
                Recent Transactions
            </h2>
            {/* redirect to trans history with appwrite specific id and bank account*/}
            <Link href={`/transaction-history/?id=${appwriteItemId}`} className="view-all-btn">
                View all
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

                <TransactionsTable 
                    transactions={transactions}
                />
            </TabsContent>
            ))}
        </Tabs>

    </section>
  )
}

export default RecentTransactions