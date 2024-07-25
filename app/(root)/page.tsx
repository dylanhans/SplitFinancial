import HeaderBox from '@/components/bank/HeaderBox';
import HomeAccounts from '@/components/bank/HomeAccounts';
import RightSideBar from '@/components/bank/RightSideBar';
import TotalBalanceBox from '@/components/bank/TotalBalanceBox';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
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
            <HeaderBox
              type="greeting"
              title="Good Evening,"
              user={displayName || 'Guest'}
              subtext="Access and manage your account and transactions efficiently."
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

export default Home;