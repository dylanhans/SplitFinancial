import { NavigationMenu, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn, formUrlQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import PlaidLink from './PlaidLink'; // Assuming PlaidLink is correctly imported
import { useState } from "react";

interface RecentTransactionsProps {
  accounts: Account[];
  appwriteItemId: string;
  user: User; // Include user prop
}

interface BankTabItemProps {
  account: Account;
  appwriteItemId: string;
  user: User; // Include user prop
  setFirstAccount: (account: Account) => void; // Add setter function
}

type CombinedProps = RecentTransactionsProps & BankTabItemProps;

export const BankTabItem = ({
  account,
  appwriteItemId,
  accounts,
  setFirstAccount
}: CombinedProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isActive = appwriteItemId === account?.appwriteItemId;

  const handleBankChange = (account: Account) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'id',
      value: account.appwriteItemId,
    });
    router.push(newUrl, { scroll: false });
    setFirstAccount(account); // Update firstAccount state
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div
              onClick={() => handleBankChange(account)}
              className={cn(`banktab-item`, {
                'border-blue-600': isActive,
              })}>
              <p
                className={cn(`text-16 line-clamp-1 flex-1 font-medium text-gray-500`, {
                  'text-blue-600': isActive,
                })}>
                {account.name}
              </p>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {accounts.map((account: Account) => (
              <NavigationMenuLink key={account.id}>
                <div
                  onClick={() => handleBankChange(account)}
                  className={cn(`banktab-item`, {
                    'border-blue-600 bg-white': isActive,
                  })}>
                  <p
                    className={cn(`text-16 bg-white line-clamp-1 flex-1 font-medium text-gray-500`, {
                      'text-blue-600': isActive,
                    })}>
                    {account.name}
                  </p>
                </div>
              </NavigationMenuLink>
            ))}
            <NavigationMenuLink>                
                  {/*<PlaidLink user={user} /> {/* Pass user prop to PlaidLink */}
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};