import React from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable2'


const AccountSidebar = () => {
    return (
    <div className="h-[400px] w-[350px"> {/* Ensure the parent container has a height */}
      <ResizablePanelGroup
        direction="vertical"
        className="h-full w-full rounded-sm "
      >
        <ResizablePanel defaultSize={50} className="flex-1">
          <div className="flex w-full h-full items-center justify-center p-6 bg-white">
            <span className="other-text-13 font-semiboldish">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50} className="flex-1">
        <div className="flex w-full h-full items-center justify-center p-6 bg-white">
            <span className="other-text-13 font-semiboldish">One</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
      )
    }

export default AccountSidebar