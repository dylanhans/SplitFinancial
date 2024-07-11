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

const TransactionSheet = ({ isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <ResizablePanelGroup direction="vertical" className="">
        <SheetContent className="bg-[#f5f6f7] h-screen w-full">
          <div className= "clicktrans-nameid bg-white">
            <SheetHeader className=" w-full border-b border-gray-200 ml-6 p-4">
              Name of Transaction
            </SheetHeader>
            <SheetHeader className=" w-full border-b border-gray-200 ml-6 p-4">
              Amount
            </SheetHeader>
            
          </div>
              <div className="transaction-details">
            <SheetDescription className="bg-[#f5f6f7] w-full border-gray-200 p-10">Transaction Details
            </SheetDescription>
              </div>
            
            <div className="bg-white transaction-details" style={{ boxShadow: '0px -2px 2px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1)'}}>
              <div className="p-6">
              <SheetDescription className="bg-white w-full border-b border-gray-200 p-2">
                    Transaction Date
              </SheetDescription>
              <SheetDescription className="bg-white w-full border-b border-gray-200 p-2">
                    Posted Date
              </SheetDescription>
              <SheetDescription className="bg-white w-full border-b border-gray-200 p-2">
                    Payment Method
              </SheetDescription>
              <SheetDescription className="bg-white w-full border-b border-gray-200 p-2">
                    Term
              </SheetDescription>
              <SheetDescription className="bg-white w-full border-b border-gray-200 p-2">
                    Every
              </SheetDescription>
              <SheetDescription className="bg-white w-full border-b border-gray-200 p-2">
                    Interest
              </SheetDescription>
              </div>
            </div>
            <div className="bg-white transaction-details">
              <SheetDescription className="bg-[#f5f6f7] w-full border-gray-200 p-10">
                    Merchant Details
              </SheetDescription>
            </div>

            <div className="bg-white transaction-details" style={{ boxShadow: '0px -2px 2px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1)'}}>
              <div className="p-6">
              <SheetDescription className="bg-white w-full border-b border-gray-200 p-2">
                    Name
              </SheetDescription>
              <SheetDescription className="bg-white w-full border-b border-gray-200 p-2">
                    Location
              </SheetDescription>
              </div>
            </div>

            <div className="bg-white transaction-details">
              <SheetDescription className="bg-[#f5f6f7] w-full border-b border-gray-200 p-10">
                    Resources & Help
              </SheetDescription>
            </div>

            <div className="bg-white transaction-details" style={{ boxShadow: '0px -2px 2px rgba(0, 0, 0, 0.1)'}}>
              <div className="p-6">
              <SheetDescription className="bg-white w-full border-b border-gray-200 p-2">
                    Tips
              </SheetDescription>
              <SheetDescription className="bg-white w-full border-b border-gray-200 p-2">
                    Dispute
              </SheetDescription>
              </div>
            </div>
            <div className="bg-white transaction-details h-full mb-0">
              <SheetDescription className="bg-[#f5f6f7] w-full border-gray-200 p-10">
                    
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