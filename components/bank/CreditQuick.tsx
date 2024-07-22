'use client'
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabspayment'

const CreditQuick = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className="QuickTransfer Main w-[350px]">
      <div className="QuickTransfer w-[350px] border-b border-gray-200 pb-1">
          <Tabs className="w-full cursor-none pointer-events-none">
            <TabsContent>
              <TabsList className="recent-transactions-tablist w-full">
                  <TabsTrigger className="flex items-center w-full">
                  <div className="banktab-item2 pt-2 bg-transparent border-blue-600">
                    <p className="balance-text-14 line-clamp-1 flex-1 font-medium text-blue-600">
                      Make a Payment
                    </p>
                  </div>
                  </TabsTrigger>
              </TabsList>
              </TabsContent>
          </Tabs>
      </div>
    <Card className="w-[350px] border-t border-gray-200">
      <CardHeader>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-3">
              <Label htmlFor="name" className="balance-text-14 font-smallboldish">Amount</Label>
              <Input id="name" placeholder="Minimum Payment $10.00" className="rounded-sm placeholder-black other-text-13 font-smallboldish"/>
            </div>
            <div className="flex flex-col space-y-3 mt-2">
              <Label htmlFor="framework" className="balance-text-14 font-smallboldish">From</Label>
              <Select>
                <SelectTrigger id="framework" className="other-text-13 font-smallboldish rounded-sm bg-white">
                  <SelectValue placeholder =" Plaid Savings (ID), (Amount) "/>
                </SelectTrigger>
                <SelectContent position="popper" className="other-text-13 font-smallboldish bg-white">
                  <SelectItem value="next">Plaid Savings (ID), (Amount)</SelectItem>
                </SelectContent>
              </Select>
            </div>
              <div className="flex flex-col space-y-3 mt-2">
              <Label htmlFor="name" className="balance-text-14 font-smallboldish">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white rounded-sm",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" strokeWidth={1.5}/>
                    <span className="other-text-13 font-smallboldish">{date ? format(date, "PPP"):''}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="other-text-13 font-smallboldish bg-white"
                  />
                </PopoverContent>
              </Popover>
            </div>
            </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="p-2 w-full">
        <Button className="bg-blue-900 text-white rounded-sm w-full">Submit</Button>
        </div>
      </CardFooter>
    </Card>
    </section>
  )
}

export default CreditQuick

{/* 
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
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div
              onClick={() => handleBankChange(firstAccount)}
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
            {accounts.slice(1).map((account: Account) => (
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
*/}