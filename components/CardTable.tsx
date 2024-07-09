import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import Image from 'next/image';

const CardTable = () => {
  return (
    <div className="w-full rounded-lg">
      {/* First Row with 4 columns */}
      <ResizablePanelGroup direction="horizontal" className="flex w-full bg-[#f3f4f5] p-1.5 border-t border-b border-gray-200" style={{ height: '130px' }}>
        <ResizablePanel defaultSize={10} style={{ height: '100%'}}>
          <div className="flex h-full w-[160px] items-center justify-center ml-3">
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
            <div className="flex h-full items-center justify-center p-6" style={{ height: '100%', boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)'}}>
              <span className="font-semibold">Current Balance</span>
            </div>

            {/* Second Row (if needed) */}
            <div className="flex h-full items-center justify-center p-2 ml-3 mr-auto border-t border-gray-200">
              {/* Content for the second row */}
              <span className="font-semibold">Credit Limit</span>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={10} style={{ height: '100%'}}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* First Row */}
            <div className="flex h-full items-center justify-center p-6 border-l" style={{ height: '100%', boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)'}}>
              <span className="font-semibold">Available Credit</span>
            </div>

            {/* Second Row (if needed) */}
            <div className="flex h-full items-center justify-center p-2 border-t border-gray-200">
              {/* Content for the second row */}
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />



        <ResizablePanel defaultSize={10} style={{ height: '100%'}} className="border-l border-gray-200">
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Last Payment</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>

      {/* Spacing */}
      <ResizablePanelGroup direction="horizontal" className="flex w-full mt-3.5 bg-white">
      </ResizablePanelGroup>
      
      {/* Third Row with 2 columns */}
      <ResizablePanelGroup direction="horizontal" className="flex w-full mt-3 bg-white">
        <ResizablePanel defaultSize={15} style={{ height: '100%', boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)' }}>
          <div className="flex h-[150px] items-center justify-center p-6">
            <span className="font-semibold">Statements</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={15} className="custom-border-left border-gray-200" style={{ height: '100%', boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)' }}>
          <div className="flex h-[150px] items-center justify-center p-6">
            <span className="font-semibold">Credit Score</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};


export default CardTable;
