import React from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable2'


const AccountSidebar = () => {
    return (
      <div className="h-[400px] w-[350px]"> {/* Ensure the parent container has a height */}
      <ResizablePanelGroup
        direction="vertical"
        className="h-full w-full rounded-sm"
      >
        <ResizablePanel defaultSize={50} className="flex-1 shadow-sm">
          <div className="flex flex-col w-full h-full items-start justify-center p-6 bg-white">
            <ul className="flex flex-col gap-2.5">
            <li>
                <div>
                  <p className="balance-text-13 font-smallboldish">Account Management</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Financed Transactions</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Automatic Payments</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Change Credit Limit</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Dispute Credit Card Transaction</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Add Authorized Users</p>
                </div>
              </li>
            </ul>
          </div>
        </ResizablePanel>
        <ResizableHandle />

        <ResizablePanel defaultSize={10} className="flex-1">
          <div className="flex w-full h-[5px] items-start justify-center bg-white">
          </div>
        </ResizablePanel>
        <ResizableHandle />


        <ResizablePanel defaultSize={50} className="flex-1 shadow-sm">
          <div className="flex flex-col w-full h-full items-start justify-center p-6 bg-white">
            <ul className="flex flex-col gap-2.5">
              <li>
                <div>
                  <p className="balance-text-13 font-smallboldish">Security and Card Management</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Replace Card</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Report a Lost or Stolen Card</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Switch your Credit Card</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Balance Protection Insurance</p>
                </div>
              </li>
              <li>
                <div>
                  <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Purchase Foreign Cash</p>
                </div>
              </li>
            </ul>
          </div>

        </ResizablePanel>
        <ResizableHandle />
      </ResizablePanelGroup>
    </div>
      )
    }

export default AccountSidebar