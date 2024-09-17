'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import Drawer from '@/components/ui/drawer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { logoutAccount } from "@/lib/actions/user.actions"
import router from "next/router"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select2"

interface NavItem {
  label: string;
  ariaLabel: string;
  id: string;
  subitems: {
    category?: string;
    items: { label: string; href: string }[];
  }[];
}

const navItems: NavItem[] = [
  {
    label: 'Credit',
    ariaLabel: 'Products',
    id: 'headlessui-popover-button-1',
    subitems: [
      {
        category: 'Credit',
        items: [
          { label: 'Secured Credit', href: '/products/secured-credit' },
          { label: 'Standard Credit', href: '/products/standard-credit' },
        ],
      },
      {
        category: 'Financing',
        items: [
          { label: 'High Interest', href: '/products/high-interest' },
          { label: 'Money Card', href: '/products/money-card' },
        ],
      },
      {
        category: 'Features',
        items: [
          { label: 'Managed', href: '/products/managed' },
          { label: 'Goals', href: '/products/goals' },
        ],
      },
      {
        category: 'Company',
        items: [{ label: 'Mortgage', href: '/products/mortgage' }],
      },
    ],
  },
  {
    label: 'Financing',
    ariaLabel: 'Features',
    id: 'headlessui-popover-button-2',
    subitems: [
      {
        items: [
          { label: 'AI Insights', href: '/features/insights' },
          { label: 'Credit Score Monitoring', href: '/features/credit-score-monitoring' },
          { label: 'Balance Protection', href: '/features/balance-protection' },
        ],
      },
    ],
  },
  {
    label: 'Features',
    ariaLabel: 'Plans',
    id: 'headlessui-popover-button-3',
    subitems: [
      {
        category: 'Perks',
        items: [
          { label: 'Travel', href: '/products/secured-credit' },
          { label: 'Mind and Body', href: '/products/standard-credit' },
          { label: 'Food and Drink', href: '/products/standard-credit' },
          { label: 'Mobile and Personal Protection', href: '/products/standard-credit' },
        ],
      },
    ],
  },
  {
    label: 'Company',
    ariaLabel: 'Company',
    id: 'headlessui-popover-button-5',
    subitems: [
      {
        items: [
          { label: 'About', href: '/products/secured-credit' },
          { label: 'AI Adoption', href: '/products/standard-credit' },
          { label: 'News', href: '/products/standard-credit' },
          { label: 'Ambassadors', href: '/products/standard-credit' },
          { label: 'Careers', href: '/products/standard-credit' },
        ],
      },
    ],
  },
  {
    label: 'Support',
    ariaLabel: 'Support',
    id: 'headlessui-popover-button-6',
    subitems: [
      {
        items: [
          { label: 'Help Center', href: '/products/secured-credit' },
          { label: 'Contact', href: '/products/standard-credit' },
        ],
      },
    ],
  },
];

interface AlternateNavBarProps {
  user: User; // Adjust 'User' to the appropriate type used in your project
}

export const AlternateNavBar: React.FC<AlternateNavBarProps> = ({ user }) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState('account');
  const [previousTab, setPreviousTab] = useState<string>('account');
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const tabsRef = useRef<HTMLUListElement>(null);
  

  useEffect(() => {
    setPreviousTab(activeTab);
  }, [activeTab]);

  useEffect(() => {
    const updateIndicator = () => {
      const activeTabElement = tabsRef.current?.querySelector(`[data-value="${activeTab}"]`);
      if (activeTabElement) {
        const { offsetLeft, clientWidth } = activeTabElement as HTMLElement;
        // Decrease width by 20 pixels (adjust as needed)
        setIndicatorStyle({
          left: offsetLeft,
          width: clientWidth,
        });
      }
    };

    updateIndicator(); // Initial update

  }, [activeTab]);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    const activeTabElement = tabsRef.current?.querySelector(`[data-value="${value}"]`);
    if (activeTabElement) {
      const { offsetLeft, clientWidth } = activeTabElement as HTMLElement;
      setIndicatorStyle({
        left: offsetLeft,
        width: clientWidth,
      });
    }
  };

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

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

    if (loggedOut) router.push('/');
  };

  

  return (
    <div className="relative">
      <div className="hidden lg:block">
      <nav className="fixed top-0 left-0 right-0 z-50 px-0 text-white bg-[#232222] lg:bg-[#232222] lg:px-6 lg:py-1">
          <ul className="flex space-x-6 lg:mx-auto lg:max-w-7xl lg:px-0">
            {/* Removed Personal, Partners, and Youth <18 sections */}
          </ul>
        </nav>
      </div>
      {/* fixed on top when scroll down */}
      <div className="z-20 py-6 w-full text-white lg:py-5 lg:px-6 transition ease-in-out duration-500 bg-[#232222]">
          <div className="relative flex items-center justify-between space-x-xxxl px-6 lg:mx-auto lg:max-w-7xl lg:px-0">
            <div className="flex items-center space-x-xxl">
              <a
                className="absolute left-5 top-0.5 z-30 lg:relative lg:left-[unset] lg:top-[unset] lg:p-0 cursor-pointer hover-card-trigger"
                target="_self"
                aria-label="Neo Financial"
                onClick={handleLogOut}
                href='/'
              >
                <img
                  src="/icons/logoimage.png"
                  alt="Logo Image"
                  height="20"
                  width="66"
                  data-testid="split-logo"
                />
              </a>
              <nav className="relative hidden md:ml-8 gap-4 lg:flex lg:items-center">
                {navItems.map((item) => (
                  <div key={item.id} data-headlessui-state="" className="relative">
                    <button
                      className="p-1 focus:outline-none focus:ring-0"
                      aria-label={item.ariaLabel}
                      type="button"
                      aria-expanded={openId === item.id}
                      id={item.id}
                      onClick={() => handleClick(item.id)}
                    >
                      <div className="flex gap-2 flex-row items-center">
                        <span className="block leading-none">{item.label}</span>
                        <div
                          className={`inline-block mt-1 transform transition-transform duration-200 ${
                            openId === item.id ? 'rotate-180' : 'rotate-0'
                          }`}
                        >
                          <img src="/icons/down.png" alt="" />
                        </div>
                      </div>
                    </button>
                    {/* subitems */}
                    {item.subitems.length > 0 && openId === item.id && (
                      <div className="absolute top-0 z-10 mt-16 transform opacity-100 translate-y-0">
                        <div className="relative flex w-full min-w-[240px] flex-col lg:flex-row lg:rounded-lg lg:bg-[#0f0f0f] lg:p-3">
                          {item.subitems.map((subitem, idx) => (
                            <div
                              key={idx}
                              className={`mb-8 inline-flex flex-col last:mb-0 lg:mb-0 ${
                                subitem.category ? 'lg:w-[180px]  ' : 'w-full'
                              } lg:space-y-xxxs w-full`}
                            >
                              {subitem.category ? (
                                <div className="inline-flex w-full items-center space-x-xs py-3 text-left lg:px-5">
                                  <span className="text-subduedInverse text-2xl font-medium lg:text-base">
                                    {subitem.category}
                                  </span>
                                  <svg
                                    className="fill-black h-4 w-4 fill-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.414 11h11.17l-4.882-4.882a1 1 0 0 1 0-1.413h.005a1 1 0 0 1 1.408 0L19.71 11.3a1 1 0 0 1 0 1.41l-6.595 6.59a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41l4.88-4.89H5.414a1 1 0 1 1 0-2z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                              ) : (
                                ''
                              )}
                              {subitem.items.map((subitemLink, linkIdx) => (
                                <a
                                  key={linkIdx}
                                  className="text-subduedInverse w-full rounded bg-transparent py-3 text-left text-lg lg:px-5 lg:text-base lg:hover:bg-[#262626] cursor-pointer"
                                  // href={subitemLink.href}
                                  // target="_self"
                                  // aria-label={subitemLink.label}
                                >
                                  {subitemLink.label}
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <div className="flex items-stretch gap-xs text-center lg:hidden">
                {/* handle signin*/}
                <div className="flex-1 rounded border-2 border-web-borderOnBlack py-5 text-center text-xl font-bold">
                 
                </div>

                {/* handle signup */}
                <div className="flex-1 rounded border-2 border-web-borderOnBlack bg-surfaceDefault py-5 text-center text-xl font-bold text-contentDefault">
                  
                </div>

              </div>
              <div className="hidden lg:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-transparent cursor-pointer text-contentDefaultInverse text-base px-4 py-2 rounded font-semibold focus:ring inline-block w-auto">
                    <Select>
                      <SelectTrigger className="w-[180px] flex items-center leading-none">
                        <span className="mr-2">
                          <Avatar>
                            <AvatarImage src="/icons/plogo.jpg" />
                          </Avatar>
                        </span>
                        <SelectValue placeholder={`${user.firstName} ${user.lastName}`} /> 
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="bg-[#232222]">
                          <SelectItem value="settings" className="text-white">Profile & Settings</SelectItem>
                          <SelectItem value="Guide" className="text-white">Guide</SelectItem>
                          {/* Add other SelectItem components as needed */}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <button onClick={handleLogOut} className="bg-[#ffff] text-[#000] cursor-pointer shadow-sm balance-text-13 font-smallbold px-4 py-2 rounded-sm flex justify-center items-center hover:bg-gray-200">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-label="Open menu"
              className="relative top-0 z-30 inline-block p-3 lg:hidden burger-menu"
              onClick={toggleDrawer}
            >
              <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2">
                <span className="block absolute h-0.5 w-5 bg-current transition duration-150 ease-in-out -translate-y-1.5"></span>
                <span className="block absolute h-0.5 w-5 bg-current transition duration-150 ease-in-out"></span>
                <span className="block absolute h-0.5 w-5 bg-current transition duration-150 ease-in-out translate-y-1.5"></span>
              </div>
            </button>
            <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          </div>
        </div>
        <div className="ease-in-out transition-all duration-500 max-h-[10rem] delay-500">
        {/* hide on scroll down  */}
            
        <div className="hidden lg:block">
        <nav className="relative px-0 text-white bg-gradient-to-b from-[#232222] to-[#3f3e3e] lg:px-6">
        <div className="account-functions ml-[260px]">
          <Tabs defaultValue="account" className="w-full" onValueChange={handleTabClick}>
            <TabsList>
              <ul className="flex space-x-2 lg:mx-auto lg:max-w-7xl lg:px-0" ref={tabsRef}>
                <li
                  data-value="account"
                  aria-label="Personal"
                  className={`tab-item cursor-pointer relative ${activeTab === 'account' ? 'opacity-100 border-b-2 border-web-borderOverlay lg:border-0 pb-2 lg:pb-0' : 'opacity-70 border-b-2 border-transparent lg:border-0'}`}
                >
                  <TabsTrigger value="accountsummary">
                    <a href="/summary" className="text-xl lg:text-sm">Accounts Summary</a>
                  </TabsTrigger>
                </li>
                <li
                  data-value="transfer"
                  aria-label="Youth <18"
                  className={`tab-item cursor-pointer relative ${activeTab === 'transfer' ? 'opacity-100 border-b-2 border-web-borderOverlay lg:border-0 pb-2 lg:pb-0' : 'opacity-70 border-b-2 border-transparent lg:border-0'}`}
                >
                  <TabsTrigger value="transfer">
                    <a href="/summary/payment-transfer" className="text-xl lg:text-sm">Transfer</a>
                  </TabsTrigger>
                </li>
                <li
                  data-value="history"
                  aria-label="Partners"
                  className={`tab-item cursor-pointer relative ${activeTab === 'history' ? 'opacity-100 border-b-2 border-web-borderOverlay lg:border-0 pb-2 lg:pb-0' : 'opacity-70 border-b-2 border-transparent lg:border-0'}`}
                >
                  <TabsTrigger value="history">
                    <a href="/summary/transaction-history" className="text-xl lg:text-sm">History</a>
                  </TabsTrigger>
                </li>
                <li
                  data-value="products-services"
                  aria-label="Partners"
                  className={`tab-item cursor-pointer relative ${activeTab === 'products-services' ? 'opacity-100 border-b-2 border-web-borderOverlay lg:border-0 pb-2 lg:pb-0' : 'opacity-70 border-b-2 border-transparent lg:border-0'}`}
                >
                  <TabsTrigger value="products-services">
                    <a href="/summary/accounts-page" className="text-xl lg:text-sm">Products & Services</a>
                  </TabsTrigger>
                </li>
                <li
                  data-value="help"
                  aria-label="Youth <18"
                  className={`tab-item cursor-pointer relative ${activeTab === 'help' ? 'opacity-100 border-b-2 border-web-borderOverlay lg:border-0 pb-2 lg:pb-0' : 'opacity-70 border-b-2 border-transparent lg:border-0'}`}
                >
                  <TabsTrigger value="help">
                    <a href="/help" className="text-xl lg:text-sm">Help</a>
                  </TabsTrigger>
                </li>
              </ul>
              <div
                className="tab-indicator hidden lg:block"
                style={{
                  ...indicatorStyle,
                  transition: `${activeTab === 'account' ? 'width 2.5s ease' : 'left 2.5s ease, width 2.5s ease'}`,
                  position: 'absolute',
                  bottom: '5px',
                  height: '2px',
                  backgroundColor: 'currentcolor',
                }}
              ></div>
            </TabsList>
            <TabsContent value="account"></TabsContent>
            <TabsContent value="transfer"></TabsContent>
            <TabsContent value="history"></TabsContent>
            <TabsContent value="products-services"></TabsContent>
            <TabsContent value="help"></TabsContent>
          </Tabs>
          </div>
        </nav>
        
    </div>
    </div>
    </div>
  );
};

export default AlternateNavBar;

{/*"use client"
import React from 'react';
import Image from 'next/image';
import { navLists } from '../../constants';

export const appleImg = '/icons/newlogo.png';
export const bagImg = '/icons/bag.svg';
export const searchImg = '/icons/search.svg';

const AlternateNavBar: React.FC = () => {
  const imageStyle = {
    cursor: 'pointer',
    transition: 'filter 0.3s',
  };

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-black-2">
      <style jsx>{`
        .image-hover:hover {
          filter: brightness(0) invert(1);
        }
      `}</style>
      <nav className="flex w-full screen-max-width">
        <div style={imageStyle} className="image-hover">
          <Image src={appleImg} alt="Apple" width={40} height={40} />
        </div>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-[#E0E3E7] hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <div style={imageStyle} className="image-hover">
            <Image src={searchImg} alt="Search" width={18} height={18} />
          </div>
          <div style={imageStyle} className="image-hover">
            <Image src={bagImg} alt="Bag" width={18} height={18} />
          </div>
        </div>
      </nav>
    </header>
  );
}
*/}