import { NavigationMenu, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn, formUrlQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import PlaidLink from './PlaidLink'; // Assuming PlaidLink is correctly imported

interface RecentTransactionsProps {
  accounts: Account[];
  appwriteItemId: string;
  user: User; // Include user prop
}

interface BankTabItemProps {
  account: Account;
  appwriteItemId: string;
  user: User; // Include user prop
}

type CombinedProps = RecentTransactionsProps & BankTabItemProps;

export const BankTabItem = ({
  account,
  appwriteItemId,
  accounts,
  user, // Receive user prop
}: CombinedProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isActive = appwriteItemId === account?.appwriteItemId;

  const handleBankChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'id',
      value: account?.appwriteItemId,
    });
    router.push(newUrl, { scroll: false });
  };

  const firstAccount = accounts[0];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div
              onClick={() => handleBankChange()}
              className={cn(`banktab-item`, {
                'border-blue-600': isActive,
              })}>
              <p
                className={cn(`text-16 line-clamp-1 flex-1 font-medium text-gray-500`, {
                  'text-blue-600': isActive,
                })}>
                {firstAccount.name}
              </p>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {accounts.slice(1).map((acc: Account) => (
              <NavigationMenuLink key={acc.id}>
                <div
                  onClick={() => handleBankChange()}
                  className={cn(`banktab-item`, {
                    'border-blue-600 bg-white': isActive,
                  })}>
                  <p
                    className={cn(`text-16 bg-white line-clamp-1 flex-1 font-medium text-gray-500`, {
                      'text-blue-600': isActive,
                    })}>
                    {acc.name}
                  </p>
                </div>
              </NavigationMenuLink>
            ))}
            <NavigationMenuLink>                
                  <PlaidLink user={user} /> {/* Pass user prop to PlaidLink */}
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};