import HeaderBox from '@/components/bank/HeaderBox';
import RightSideBar from '@/components/bank/RightSideBar';
import TotalBalanceBox from '@/components/bank/TotalBalanceBox';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';
import NavBar from '@/components/bank/NavBar';
import CreditQuick from '@/components/bank/CreditQuick';
import Link from 'next/link';
import RecentTransactions from '@/components/bank/TransactionsImport';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Split Financial - Account",
  description: "Finance payments for in-store purchases",
  icons: {
    icon: '/icons/testlogo4.jpeg',
  }
};

const Credit = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string || 1);

  const loggedIn = await getLoggedInUser();

  const accounts = await getAccounts({ userId: loggedIn.$id });

  if (!accounts) return;

  const accountsData = accounts?.data;

  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  const displayName = loggedIn?.firstName && loggedIn?.lastName 
    ? `${loggedIn.firstName} ${loggedIn.lastName}`
    : 'Guest';

  return (
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            {/*<HeaderBox
              type="greeting"
              title="Welcome"
              user={displayName || 'Guest'}
              subtext="Access and manage your account and transactions efficiently."
            />
            <TotalBalanceBox
              accounts={[accountsData]}
              totalBanks={accounts?.totalBanks}
              totalCurrentBalance={accounts?.totalCurrentBalance}
            />*/}
          </header>
          <RecentTransactions
            accounts={accountsData}
            transactions={account?.transactions}
            appwriteItemId={appwriteItemId}
            page={currentPage}
          />
        </div>


        {/*<RightSideBar
          user={loggedIn}
          transactions={[account?.transactions]}
          banks={accountsData?.slice(0, 2)}
        />*/}
      </section>
  );
};

export default Credit;