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
  
  const CategoryBadge = ({ category }: CategoryBadgeProps) => {
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

  
  const PendingTransactions = ({ transactions }: TransactionTableProps) => {
    return (
      <Table>
        <TableHeader className="bg-[#fffcfc]">
          <TableRow>
            <TableHead className="px-2 border-b-[2px] border-gray-500 text-blue-900">Date <span className="text-blue-900 text-sm">↓</span></TableHead>
            <TableHead className="px-2 border-b-[2px] border-gray-500 mr-5">Transaction</TableHead>
            <TableHead className="px-2 border-b-[2px] border-gray-500">Debit</TableHead>
            <TableHead className="px-2 border-b-[2px] border-gray-500">Credit</TableHead>
            <TableHead className="px-2 border-b-[2px] border-gray-500">Split ✔</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((t: Transaction) => {
            const status = getTransactionStatus(new Date(t.date));
            const amount = formatAmount(t.amount);
            const isDebit = t.type === 'debit';
            const isCredit = t.type === 'credit';
            const isSplit = t.type ==='debit';
  
            return (
              <TableRow key={t.id} className={`${isDebit || amount[0] === '-' ? 'bg-[#ffffff]' : 'bg-[#ffffff]'} !over:bg-none !border-b-DEFAULT cursor-pointer hover:bg-[#FDFEFF]`}>
                <TableCell className="min-w-32 pl-2 pr-10">
                  {formatDateTime(new Date(t.date)).dateOnly}
                </TableCell>
  
                <TableCell className="max-w-[250px] pl-2 pr-10">
                  <div className="flex items-center gap-3">
                    <h1 className="text-14 truncate font-smallbold text-[#344054]">
                      {removeSpecialCharacters(t.name)}
                    </h1>
                  </div>
                </TableCell>
  
                <TableCell className={`pl-2 pr-10 font-smallbold ${
                  isDebit || amount[0] === '$' ?
                    'text-[#242424]'
                    : 'text-transparent pointer-events-none select-none'
                }`}>
                  {isCredit ? `-${amount}` : isDebit ? amount : amount}
                </TableCell>
  
                <TableCell className={`pl-2 pr-10 font-smallbold ${
                  isCredit || amount[0] === '-' ?
                    'text-[#242424]'
                    : 'text-transparent pointer-events-none select-none'
                }`}>
                  {isDebit ? '' : isCredit ? amount : amount}
                </TableCell>

                <TableCell className="pl-2 pr-10">
                <div className="flex items-center">
                  <CategoryBadge category={status} />
                  <span className="ml-5"> ›</span>
                </div>
                </TableCell>

              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    );
  };
  
  export default PendingTransactions