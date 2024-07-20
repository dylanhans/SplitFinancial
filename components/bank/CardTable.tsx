import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import Image from 'next/image';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import AnimatedCounter from './AnimatedCounter';
import CreditScore from './CreditScore';
import { formatAmount } from '@/lib/utils';


const CardTable: React.FC<CardTableProps> = ({ account }) => {
  const availableCredit = 15000;

  return (
    <div className="w-full rounded-lg">
      {/* First Row with 4 columns */}
      <ResizablePanelGroup direction="horizontal" className="flex w-full bg-[#f5f6f7] p-1.5 border-t border-b border-gray-200" style={{ height: '130px' }}>
        <ResizablePanel defaultSize={10} style={{ height: '100%'}}>
          <div className="flex h-full w-[150px] items-center justify-center ml-3">
            <div className="shadow-lg hover:shadow-lg">
              <Image 
                src="/icons/test-card.png"
                alt="credit card"
                width={175}
                height={175}
              />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />


        <ResizablePanel defaultSize={10} style={{ height: '100%'}}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* First Row */}
            <div className="flex flex-col h-full items-start justify-start" style={{ height: '100%', boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)' }}>
              <TooltipProvider>
                <div className="balance-text-13 mt-3 ml-4 font-smallboldish">
                  Current Balance{' '}
                  <span className="text-blue-900 text-sm cursor-pointer">
                    <Tooltip>
                      <TooltipTrigger>ⓘ</TooltipTrigger>
                      <TooltipContent className="p-3 m-2 shadow-sm bg-white">
                        <p className="text-xs">The Current Balance is the total amount owing on your credit card.</p>
                        <p className="text-xs">It includes all of your Posted Transactions plus any fees and interest.</p>
                        <p className="text-xs">Your Current Balance does not include Authorized Transactions, which may take a few days to process.</p>
                      </TooltipContent>
                    </Tooltip>
                  </span>
                </div>
              </TooltipProvider>
              <span className="balance-text-13 mt-1 ml-4 font-smallbolder">
                <AnimatedCounter amount={(account.currentBalance)} />
              </span>
            </div>
            {/* Second Row (if needed) */}
            <div className="flex h-[35px] items-center justify-start p-4 ml-0 mr-auto mt-1">
              {/* Content for the second row */}
              <div>
                  <p className="other-text-13 font-smallboldish">Credit Limit: <span className="font-smallbolder">{formatAmount(availableCredit)}</span></p>
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={10} style={{ height: '100%'}}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* First Row */}
            <div className="flex flex-col h-full items-start justify-start border-l border-gray-200" style={{ height: '100%', boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)'}}>
            <TooltipProvider>
              <span className="balance-text-13 mt-3 ml-4 font-smallboldish">Available Credit {' '}
                <span className="text-blue-900 text-sm cursor-pointer">
                  <Tooltip>
                    <TooltipTrigger>ⓘ</TooltipTrigger>
                      <TooltipContent className="p-3 m-2 shadow-sm bg-white">
                        <p className="text-xs">Your Credit Limit – (Current Balance + Authorized Transactions) = Your Available Credit</p>
                        <p className="text-xs">We may reduce the amount of credit available to you in certain circumstances, such as when payment is past due.</p>
                      </TooltipContent>
                  </Tooltip>
                </span>
              </span>
            </TooltipProvider>
            <span className="balance-text-13 mt-1 ml-4 font-smallbolder">
                <AnimatedCounter amount={(availableCredit-account.currentBalance)} />
              </span>
          </div>
            {/* Second Row (if needed) */}
            <div className="flex h-[40px] items-start justify-start p-4 ml-0 mr-auto border-t border-gray-200">
              {/* Content for the second row */}
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />



        <ResizablePanel defaultSize={10} style={{ height: '100%'}} className="border-l border-gray-200">
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* First Row */}
            <div className="flex flex-col h-full items-start justify-start border-l border-gray-200" style={{ height: '100%', boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)'}}>
              <span className="balance-text-13 mt-3 ml-4 font-smallboldish">Last Payment {' '} </span>
            <span className="balance-text-13 mt-1 ml-4 font-smallbolder">
                <AnimatedCounter amount={100} />
            </span>
            <span className="mt-1 ml-4 font-littlebold">
                June 2
            </span>
          </div>
        </div>
        </ResizablePanel>
      </ResizablePanelGroup>

      {/* Spacing */}
      <ResizablePanelGroup direction="horizontal" className="flex w-full mt-own bg-white">
      </ResizablePanelGroup>
      
      {/* Third Row with 2 columns */}
      <ResizablePanelGroup direction="horizontal" className="flex w-full mt-3 bg-white">
        <ResizablePanel defaultSize={15} style={{ height: '100%', boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)' }}>
        <div className="flex">
          {/* First column */}
          <div className="flex h-[150px] items-start justify-start ml-4 mt-1">
            <ul className="flex flex-col gap-4">
              <li>
                <div>
                  <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">View Statements</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Set Up Alerts</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Second column */}
          <div className="flex h-[150px] items-start justify-start ml-[115px] mt-1 mr-0">
            <ul className="flex flex-col gap-4">
              <li>
                <div>
                  <p className="other-text-13 font-smallboldish">Statement Balance: <span> ${((account.currentBalance)/2.00)} </span></p>
                </div>
              </li>
              <li>
                <div>
                  <p className=" other-text-13 font-smallboldish">Statement Date: <span> July 25, 2024</span></p>
                </div>
              </li>
              <li>
                <div>
                  <p className=" other-text-13 font-smallboldish">Payment Due: <span> August 3, 2024</span></p>
                </div>
              </li>
              <li>
                <div>
                  <p className="other-text-13 font-smallboldish">Minimum Payment: <span> $10.00</span></p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={15} className="custom-border-left border-gray-200" style={{ height: '100%'}}>
          <div className="flex h-[150px] items-center justify-center p-6 mr-5">
            Split Information
            {/*<CreditScore
              labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
              data={[65, 59, 80, 81, 56, 55, 40]}
            label="Credit Score"*
  />*/}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};


export default CardTable;
