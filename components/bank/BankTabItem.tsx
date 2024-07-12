import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { cn, formUrlQuery } from '@/lib/utils'; // Import your utility function for classNames
import { useRouter, useSearchParams } from 'next/navigation';

interface RecentTransactionsProps {
  // Define props specific to RecentTransactions
  accounts: Account[];
  appwriteItemId: string;
}

interface BankTabItemProps {
  // Define props specific to BankTabItem
  account: Account;
  appwriteItemId: string;
}

type CombinedProps = RecentTransactionsProps & BankTabItemProps;

export const BankTabItem = ({
  account,
  appwriteItemId,
  accounts, // Include accounts prop from RecentTransactionsProps
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
    <div>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div
              onClick={() => handleBankChange()}
              className={cn(`banktab-item`, {
                'border-blue-600': isActive, // Add condition for active state if needed
              })}>
            <p
              className={cn(`text-16 line-clamp-1 flex-1 font-medium text-gray-500`, {
                'text-blue-600': isActive, // Add condition for active state if needed
              })}>
            {firstAccount.name}
            </p>
            </div>
          </NavigationMenuTrigger>
            <NavigationMenuContent>
              {accounts.slice(1).map((acc: Account) => (
                <NavigationMenuLink>
                <div
              onClick={() => handleBankChange()}
              className={cn(`banktab-item`, {
                'border-blue-600': isActive, // Add condition for active state if needed
              })}>
            <p
              className={cn(`text-16 line-clamp-1 flex-1 font-medium text-gray-500`, {
                'text-blue-600': isActive, // Add condition for active state if needed
              })}>
            {acc.name}
            </p>
            </div>
            </NavigationMenuLink>
            ))}
            </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  );
};