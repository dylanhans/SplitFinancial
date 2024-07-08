'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import TransactionSheet from "./TransactionSheet" 
  import { transactionCategoryStyles } from "@/constants"
  import { cn, formatAmount, formatDateTime, getTransactionStatus, removeSpecialCharacters } from "@/lib/utils"
  import { useRouter } from 'next/navigation';
  import { logoutAccount } from '@/lib/actions/user.actions'
import router from "next/router";

  
  const CategoryBadge = ({ category }: CategoryBadgeProps) => {
    const router = useRouter();

    const {
      borderColor,
      backgroundColor,
      textColor,
      chipBackgroundColor,
     } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default
     
    return (
      <div className={cn('category-badge', borderColor, chipBackgroundColor)}>
        <div className={cn('size-2 rounded-full', backgroundColor)} />
        <p className={cn('text-[12px] font-medium', textColor)}>{category}</p>
      </div> 
    )
  } 
  
  const TransactionsTable = ({ transactions }: TransactionTableProps) => {
    const handleLogOut = async () =>{
      const loggedOut = await logoutAccount();

      if(loggedOut) router.push('/sign-in')
   }
    return (
      <Table>
        <TableHeader className="bg-[#fffcfc]">
          <TableRow>
            <TableHead className="px-2 border-b-[2px] border-black-2 text-blue-900">Date <span className="text-blue-900 text-sm">↓</span></TableHead>
            <TableHead className="px-2 border-b-[2px] border-black-2 mr-5">Transaction</TableHead>
            <TableHead className="px-2 border-b-[2px] border-black-2">Debit</TableHead>
            <TableHead className="px-2 border-b-[2px] border-black-2">Credit</TableHead>
            <TableHead className="px-2 border-b-[2px] border-black-2">Split ✔</TableHead>
            <TableHead className="px-2 border-b-[2px] border-black-2"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((t: Transaction) => {
            const status = getTransactionStatus(new Date(t.date));
            const amount = formatAmount(t.amount);
            const isDebit = t.type === 'debit';
            const isCredit = t.type === 'credit';
            const isSplit = t.type === 'credit';

            return (
              <TableRow key={t.id} className={`${isDebit || amount[0] === '-' ? 'bg-[#ffffff]' : 'bg-[#ffffff]'} !over:bg-none !border-b-DEFAULT hover:bg-[#fffcfc] cursor-pointer`} onClick={handleLogOut}>
                <TableCell className="min-w-32 pl-2 pr-10" style={{ width: '225px' }}>
                  {formatDateTime(new Date(t.date)).dateOnly}
                </TableCell>
  
                <TableCell className="max-w-[250px] pl-2 pr-10">
                  <div className="flex items-center gap-3" style={{ width: '300px' }}>
                    <h1 className="text-14 truncate font-smallbold text-[#344054]">
                      {removeSpecialCharacters(t.name)}
                    </h1>
                  </div>
                </TableCell>
  
                <TableCell className={`pl-2 pr-10 font-smallbold ${
                  isDebit || amount[0] === '$' ?
                    'text-[#242424]'
                    : 'text-transparent pointer-events-none select-none'
                }`} style={{ width: '225px' }}>
                  {isCredit ? `-${amount}` : isDebit ? amount : amount}
                </TableCell>
  
                <TableCell className={`pl-2 pr-10 font-smallbold ${
                  isCredit || amount[0] === '-' ?
                    'text-[#097b24]'
                    : 'text-transparent pointer-events-none select-none'
                }`} style={{ width: '225px' }}>
                  {isDebit ? '' : isCredit ? amount : amount}
                </TableCell>

                <TableCell className="pl-2 pr-10">
                <div className="flex items-center">
                  {isSplit}
                  {/*<CategoryBadge category={status} />*/}
                </div>
                </TableCell>
                <TableCell className="p-0" style={{ width: '1px' }}>
                  <div className="flex items-center justify-center h-full">
                    <span className="mr-0">›</span>
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    );
  };
  
  export default TransactionsTable;
  