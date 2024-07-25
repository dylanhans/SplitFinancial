import React from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable2';

const AccountSidebar = ({ type }: AccountSidebarProps) => {
  return (
    <div className="h-[400px] w-[350px]"> {/* Ensure the parent container has a height */}
      <ResizablePanelGroup direction="vertical" className="h-full w-full rounded-sm">
        <ResizablePanel defaultSize={50} className="flex-1 shadow-sm">
          <div className="flex flex-col w-full h-full items-start justify-center p-6 bg-white">
            <ul className="flex flex-col gap-2.5">
              <li>
                <div>
                  <p className="balance-text-13 font-smallboldish">Account Management</p>
                </div>
              </li>
              {type === 'credit' ? (
                <>
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
                </>
              ) : type === 'homepage' ? (
                <>
                  <li>
                    <div>
                      <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Pay Bills</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Transfer Funds</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Send an Interac E-transfer</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Add Payee</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Manage Postdated Transactions</p>
                    </div>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        </ResizablePanel>
      <ResizableHandle />
        <ResizablePanel defaultSize={10} className="flex-1">
          <div className="flex w-full h-[5px] items-start justify-center bg-white"></div>
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
                {type === 'credit' ? (
                  <>
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
                  </>
                ) : type === 'homepage' ? (
                  <>
                    <li>
                      <div>
                        <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Profile & Preferences</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Account Services</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Daily Transaction Limits</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">Change Account Type or Add Owners</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="hover-card-trigger text-blue-900 cursor-pointer other-text-13">View Your Credit Score</p>
                      </div>
                    </li>
                  </>
                ) : null}
              </ul>
            </div>
          </ResizablePanel>
        <ResizableHandle />
      </ResizablePanelGroup>
    </div>
  );
};

export default AccountSidebar;
