import HeaderBox from '@/components/bank/HeaderBox';
import HomeAccounts from '@/components/bank/HomeAccounts';
import RightSideBar from '@/components/bank/RightSideBar';
import TotalBalanceBox from '@/components/bank/TotalBalanceBox';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Split Financial - Summary",
  description: "Finance payments for in-store purchases",
  icons: {
    icon: '/icons/testlogo4.jpeg',
  }
};

const Summary = async ({ searchParams: { id, page } }: SearchParamProps) => {
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

    const currentHour = new Date().getHours();

    // Determine the greeting based on the hour
    let greeting;
    if (currentHour < 12) {
      greeting = 'Good Morning,';
    } else if (currentHour < 18) {
      greeting = 'Good Afternoon,';
    } else {
      greeting = 'Good Evening,';
    }

  return (
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title={greeting}
              user={displayName || 'Guest'}
              subtext="Access and manage your account with ease."
            />
            {/*<TotalBalanceBox
              accounts={[accountsData]}
              totalBanks={accounts?.totalBanks}
              totalCurrentBalance={accounts?.totalCurrentBalance}
            />*/}
          </header>
          <HomeAccounts
            accounts={accountsData}
            transactions={account?.transactions}
            appwriteItemId={appwriteItemId}
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

export default Summary;