'use client'
import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Progress } from "@/components/ui/progress"
import { transactionCategoryStyles } from "@/constants"
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';


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

const TransactionSheet = ({ isOpen, onClose, transactions }) => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <ResizablePanelGroup direction="vertical" className="">
        <SheetContent className="bg-[#f5f6f7] h-screen w-full">
          <div className= "clicktrans-nameid bg-white border-b border-gray-200" style={{ boxShadow: '0px -2px 2px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1)'}}>
            <SheetHeader className=" w-full ml-6 p-4 balance-text-13 font-smallboldish">
              Name of Transaction
            </SheetHeader>
            <SheetHeader className=" w-full ml-6 p-4 balance-text-13 font-smallboldish">
              Amount
            </SheetHeader>
            
          </div>
              <div className="transaction-details">
            <SheetDescription className="bg-[#f5f6f7] w-full border-gray-200 border-l p-4 mt-3 balance-text-13 font-smallbold">Transaction Details
            </SheetDescription>
              </div>
            
            <div className="bg-white transaction-details w-full" style={{ boxShadow: '0px -2px 2px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1)'}}>
              <div className="p-8">
              <ResizablePanelGroup direction="horizontal" className="flex w-full mt-own bg-white">
                <SheetDescription className="bg-white w-full border-b border-gray-200 p-2 balance-text-13 font-smallboldish">
                      Transaction Date
                </SheetDescription>
                <SheetDescription className="bg-white w-full border-b border-gray-200 p-2 other-text-13 font-smallboldish">
                      Posted Date
                </SheetDescription>
              </ResizablePanelGroup>

              <ResizablePanelGroup direction="horizontal" className="flex w-full mt-own bg-white">
                <SheetDescription className="bg-white w-full border-b border-gray-200 p-2 other-text-13 font-smallboldish">
                      Payment Method
                </SheetDescription>
                <SheetDescription className="bg-white w-full border-b border-gray-200 p-2 other-text-13 font-smallboldish">
                      Category:
                      <CategoryBadge category={status} />
                </SheetDescription>
              </ResizablePanelGroup>

              <ResizablePanelGroup direction="horizontal" className="flex w-full mt-own bg-white">
                <SheetDescription className="bg-white w-full border-b border-gray-200 p-2 other-text-13 font-smallboldish">
                      Term
                </SheetDescription>
                <SheetDescription className="bg-white w-full border-b border-gray-200 p-2 other-text-13 font-smallboldish">
                      Every
                </SheetDescription>
              </ResizablePanelGroup>

              <ResizablePanelGroup direction="horizontal" className="flex w-full mt-own bg-white">
                <ResizablePanel defaultSize={100} style={{ minWidth: '100px', maxWidth: '100%' }}>
                  <div className="bg-white pt-2 other-text-13 font-smallboldish flex justify-center items-center h-full">
                    <SheetDescription>
                      <p> Interest: <span className="font-smallbolder">$10.50</span> </p> 
                    </SheetDescription>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
              </ResizablePanelGroup>


              <ResizablePanelGroup direction="horizontal" className="flex w-full mt-own bg-white">
                <ResizablePanel defaultSize={100} style={{ minWidth: '100px', maxWidth: '100%' }}>
                  <div className="bg-white p-2 other-text-13 font-smallboldish flex justify-center items-center h-full">
                    <SheetDescription className="w-full text-center">
                      <p> Progress:</p> 
                      <Progress value={progress} className="w-full mt-2 bg-[#f5f6f7] shadow-sm"/>
                    </SheetDescription>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
              </ResizablePanelGroup>

              </div>
            </div>
            <div className="bg-white transaction-details">
              <SheetDescription className="bg-[#f5f6f7] w-full border-gray-200 border-l 0 p-4 mt-3 balance-text-13 font-smallbold">
                    Merchant Details
              </SheetDescription>
            </div>

            <div className="bg-white transaction-details" style={{ boxShadow: '0px -2px 2px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1)'}}>
              <div className="p-8">
              <SheetDescription className="bg-white w-full border-b border-gray-200 p-2 other-text-13 font-smallboldish">
                    Name
              </SheetDescription>
              <SheetDescription className="bg-white w-full p-2 other-text-13 font-smallboldish">
                    Location
              </SheetDescription>
              </div>
            </div>

            <div className="bg-white transaction-details">
              <SheetDescription className="bg-[#f5f6f7] w-full border-b border-gray-200 border-l p-4 mt-3 balance-text-13 font-smallbold">
                    Resources & Help
              </SheetDescription>
            </div>

            <div className="bg-white transaction-details" style={{ boxShadow: '0px -2px 2px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1)'}}>
              <div className="p-6">
              <SheetDescription className="bg-white w-full ml-2 p-2 mb-2 hover-card-trigger text-blue-900 cursor-pointer balance-text-14">
                    Tips for Identifying Transactions 
              </SheetDescription>
              <SheetDescription className="bg-white w-full ml-2 hover-card-trigger text-blue-900 p-2 mb-2 cursor-pointer balance-text-14">
                    Dispute this charge 
              </SheetDescription>
              </div>
            </div>
            <div className="bg-white transaction-details h-full mb-0">
              <SheetDescription className="bg-[#f5f6f7] h-full *:w-full border-gray-200 border-l p-10 mt-1">
                    
              </SheetDescription>
            </div>
          <SheetClose asChild>
            <button onClick={onClose}></button>
          </SheetClose>
        </SheetContent>
      </ResizablePanelGroup>
    </Sheet>
  );
};

export default TransactionSheet;