'use client'
import React, { useState } from 'react';
export const AccountManagement: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>(null);
    const [dropdown, setDropdown] = useState<boolean>(false);
    const [selectedLanguage, setSelectedLanguage] = useState<string>('English');
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  
    const handleClick = (id: string) => {
      setOpenId(openId === id ? null : id);
    };
  
    const handleOpen = () => {
      setDropdown((prevState) => !prevState);
    };
  
    const handleSelectLanguage = (language: string) => {
      setSelectedLanguage(language);
      setDropdown(false);
    };
  
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };
  
    return (
      <div className="relative">
        <div className="ease-in-out transition-all duration-500 max-h-0 max-h-[10rem] delay-500">
        {/* hide on scroll down  */}
            
        <div className="hidden lg:block">
          <nav className="relative px-0 pt-2 text-white lg:bg-[#1b1b1b] lg:px-6 lg:py-1">
            <ul className="flex space-x-6 lg:mx-auto lg:max-w-7xl lg:px-0">
              <li
                aria-label="Personal"
                className="tab-item cursor-pointer relative opacity-100 border-b-2 border-web-borderOverlay lg:border-0 pb-2 lg:pb-0"
              >
                <div className="text-xl lg:text-sm">Accounts</div>
                <div
                  className="tab-indicator hidden lg:block"
                  style={{
                    transition: 'left 0.3s ease 0s, width 0.3s ease 0s',
                    position: 'absolute',
                    bottom: '0px',
                    height: '2px',
                    backgroundColor: 'currentcolor',
                    left: '2px',
                    width: '100%',
                    bottom: '-4px',
                  }}
                ></div>
              </li>
              <li
                aria-label="Partners"
                className="tab-item cursor-pointer relative opacity-70 border-b-2 border-transparent lg:border-0"
              >
                <div className="text-xl lg:text-sm">Products & Services</div>
              </li>
              <li
                aria-label="Youth <18"
                className="tab-item cursor-pointer relative opacity-70 border-b-2 border-transparent lg:border-0"
              >
                <div className="text-xl lg:text-sm">Help</div>
              </li>
            </ul>
          </nav>
        </div>
        </div>
      </div>
    );
  };
  
  export default AccountManagement;