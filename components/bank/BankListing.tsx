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

  const newSubtype = account.subtype === 'checking' 
  ? 'Visa' 
  : account.subtype === 'savings' 
    ? 'Chequing' 
    : '';

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
    <div className="flex flex-row items-start justify-between w-full">
      <div className="flex flex-col items-start w-full">
        <p className="text-13 font-medium text-blue-600 mb-1">
          {account.officialName}
        </p>
        <p className="details text-gray-700">
          {newSubtype} 
          <span className="ml-1">
            {account.subtype === 'checking' ? '4510 **** **** 7576' : account.appwriteItemId}
          </span>
        </p>
      </div>
      <div className="content-home flex items-center">
      <div className="home-amounts mr-4">
        {account.currentBalance.toFixed(2)} <span className="text-10">CAD </span>
      </div>
        <div className="home-options ml-10">
          ⋮
        </div>
      </div>
    </div>
  </div>
  
  );
};