'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Drawer from '@/components/ui/drawer';

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

export const NavBar: React.FC = () => {
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
      {/* hide on scroll down  */}
      <div className="ease-in-out transition-all duration-500 max-h-0 max-h-[10rem] delay-500">
      <div className="top cursor-pointer relative py-[12px] px-[24px] max-h duration gap-[32px] flex items-center justify-between w-full bg-gradient-to-r from-[#14315B] to-[#2757A1]">
        <Image src="/icons/headerlogo.png" height={20} width={20} alt="logo" className="shadow-sm"/>
        <span className="text-sm w-full leading-5 font-normal text-white text-center" style={{ transform: 'skewX(-5deg)' }}>
          <span className="font-bold underline text-white" style={{ transform: 'skewX(-5deg)' }}>Sign up now to claim</span> a $5,000 credit limit instantly approved
        </span>
        </div>
      </div>
      {/* hide on scroll down  */}
          
      <div className="hidden lg:block">
      <nav className="relative px-0 pt-2 text-white bg-gradient-to-b from-[#2e2d2d] to-[#0f0f0f] lg:px-6 lg:py-1">
      <ul className="flex space-x-6 lg:mx-auto lg:max-w-7xl lg:px-0">
            <li
              aria-label="Personal"
              className="tab-item cursor-pointer relative opacity-100 border-b-2 border-web-borderOverlay lg:border-0 pb-2 lg:pb-0"
            >
              <div className="text-xl lg:text-sm">Personal</div>
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
              <div className="text-xl lg:text-sm">Partners</div>
            </li>
            <li
              aria-label="Youth <18"
              className="tab-item cursor-pointer relative opacity-70 border-b-2 border-transparent lg:border-0"
            >
              <div className="text-xl lg:text-sm">Youth &lt;18</div>
            </li>
          </ul>
        </nav>
      </div>
      {/* fixed on top when scroll down */}
        <div className="z-20 py-6 w-full text-white lg:py-5 lg:px-6 transition ease-in-out duration-500 bg-[#0f0f0f]">
          <div className="relative flex items-center justify-between space-x-xxxl px-6 lg:mx-auto lg:max-w-7xl lg:px-0">
            <div className="flex items-center space-x-xxl">
              <a
                className="absolute left-5 top-0.5 z-30 lg:relative lg:left-[unset] lg:top-[unset] lg:p-0"
                target="_self"
                aria-label="Split Financial"
                href="/home"
              >
                <img
                  src="/icons/logoimage.png"
                  alt="Logo Image"
                  height="20"
                  width="66"
                  data-testid="split-logo"
                />
              </a>
              <nav className="relative hidden md:ml-7 gap-4 lg:flex lg:items-center">
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
              <div className="relative">
                <button
                  className="flex items-center gap-2 lg:rounded lg:bg-[#333333] lg:px-4 lg:py-2"
                  id="headlessui-menu-button-:rc:"
                  onClick={handleOpen}
                >
                  <div className="flex items-center gap-2">
                    <svg
                      className="fill-black h-4 w-4 fill-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10A10 10 0 0 0 12 2zm6.93 6H16a15.65 15.65 0 0 0-1.38-3.56A8 8 0 0 1 18.92 8zM12 4a14.09 14.09 0 0 1 1.91 4h-3.82A14.09 14.09 0 0 1 12 4zM4.26 14a7.82 7.82 0 0 1 0-4h3.38a16.52 16.52 0 0 0-.14 2c.006.669.053 1.337.14 2zm.82 2H8a15.651 15.651 0 0 0 1.38 3.56A8 8 0 0 1 5.08 16zM8 8H5.08a8 8 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8 8zm4 12a14.089 14.089 0 0 1-1.91-4h3.82A14.089 14.089 0 0 1 12 20zm2.34-6H9.66a14.71 14.71 0 0 1-.16-2c.007-.67.06-1.338.16-2h4.68c.1.662.153 1.33.16 2-.008.67-.061 1.338-.16 2zm.25 5.56A15.652 15.652 0 0 0 16 16h3a8 8 0 0 1-4.41 3.56zM16.36 14c.087-.663.134-1.331.14-2a16.516 16.516 0 0 0-.14-2h3.38a7.82 7.82 0 0 1 0 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="inline-block text-base font-medium">{selectedLanguage}</span>
                    <img
                      src="/icons/down.png"
                      alt=""
                      className={`transform transition-transform ${dropdown ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </div>
                </button>
                {dropdown && (
                  <div className="absolute top-0 z-10 mt-16 transform opacity-100 translate-y-0">
                    <div className="relative flex w-full min-w-[160px] flex-col lg:flex-row lg:rounded-lg lg:bg-[#0f0f0f] lg:p-3">
                      <div className="mb-8 inline-flex flex-col last:mb-0 lg:mb-0 lg:space-y-xxxs w-full">
                        <a
                          className="text-subduedInverse w-full rounded bg-transparent py-3 text-left text-lg lg:px-5 lg:text-base lg:hover:bg-[#262626] cursor-pointer"
                          onClick={() => handleSelectLanguage('English')}
                        >
                          English
                        </a>
                        <a
                          className="text-subduedInverse w-full rounded bg-transparent py-3 text-left text-lg lg:px-5 lg:text-base lg:hover:bg-[#262626] cursor-pointer"
                          onClick={() => handleSelectLanguage('French')}
                        >
                          French
                        </a>
                        {/* Add more languages here if needed */}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-stretch gap-xs text-center lg:hidden">
                {/* handle signin*/}
                <div className="flex-1 rounded border-2 border-web-borderOnBlack py-5 text-center text-xl font-bold">
                  Log In
                </div>

                {/* handle signup */}
                <div className="flex-1 rounded border-2 border-web-borderOnBlack bg-surfaceDefault py-5 text-center text-xl font-bold text-contentDefault">
                  Apply
                </div>

              </div>
              <div className="hidden lg:block">
                <div className="bg-transparent cursor-pointer text-contentDefaultInverse text-base px-4 py-2 rounded font-semibold focus:ring inline-block w-auto">
                <a href="/sign-in" className="inline-block leading-none">
                  <button>
                    Log In
                    </button>
                  </a>
                </div>
                <div className="bg-[#ffff] text-[#000] cursor-pointer text-base px-4 py-2 rounded font-semibold focus:ring inline-block w-auto">
                <a href="/options" className="inline-block leading-none">
                  <button>
                    Apply
                    </button>
                  </a>
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
    </div>
  );
};

export default NavBar;

{/*"use client"
import React from 'react';
import Image from 'next/image';
import { navLists } from '../../constants';

export const appleImg = '/icons/newlogo.png';
export const bagImg = '/icons/bag.svg';
export const searchImg = '/icons/search.svg';

const Navbar: React.FC = () => {
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