import { NavigationMenu, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn, formUrlQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import PlaidLink from './PlaidLink'; // Assuming PlaidLink is correctly imported
import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
interface RecentTransactionsProps {
  accounts: Account[];
  appwriteItemId: string;
  user: User; // Include user prop
}

interface BankListingProps {
  account: Account;
  appwriteItemId: string;
  user: User; // Include user prop
  setFirstAccount: (account: Account) => void; // Add setter function
}

type CombinedProps = RecentTransactionsProps & BankListingProps;

export const BankListing = ({
  account,
  appwriteItemId,
  accounts,
}: CombinedProps) => {
  const [firstAccount, setFirstAccount] = useState<Account>(account);
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
    setFirstAccount(account);
  };

  return (
    <div className="hover:bg-[#FDFEFF] cursor-pointer w-full">
      <div className="w-full">
        <p className="text-12 line-clamp-1 flex-1 font-medium text-blue-600">
          {account.name}
        </p>
      </div>
      <div>
        <p className="text-10 w-full">
          {account.subtype}
        </p>
      </div>
    </div>

  );
};