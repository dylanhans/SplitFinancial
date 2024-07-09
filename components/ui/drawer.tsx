'use client';

import React, { useState } from 'react';

const navItems = [
  {
    label: 'Products',
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
        category: 'Money',
        items: [
          { label: 'High Interest', href: '/products/high-interest' },
          { label: 'Money Card', href: '/products/money-card' },
        ],
      },
      {
        category: 'Invest',
        items: [
          { label: 'Managed', href: '/products/managed' },
          { label: 'Goals', href: '/products/goals' },
        ],
      },
      {
        category: 'Mortgage',
        items: [{ label: 'Mortgage', href: '/products/mortgage' }],
      },
    ],
  },
  {
    label: 'Features',
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
    label: 'Plans',
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
    label: 'Learn',
    ariaLabel: 'Learn',
    id: 'headlessui-popover-button-4',
    subitems: [
      {
        items: [
          { label: 'Podcasts', href: '/products/secured-credit' },
          { label: 'Blog', href: '/products/standard-credit' },
          { label: 'Knowledge Hub', href: '/products/standard-credit' },
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
          { label: 'Ambassordors', href: '/products/standard-credit' },
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

const drawer = ({ isOpen, toggleDrawer }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div
      className={`fixed overflow-y-scroll inset-0 z-40 flex min-h-screen flex-col bg-black py-3 lg:hidden transition-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="px-6 text-white transition-all origin-bottom duration-500 ease-out pt-16 pb-[120px] space-y-10 opacity-100">
        <div className="flex items-center justify-between">
          <a>
            <svg
              fill="none"
              height="20"
              viewBox="0 0 66 20"
              width="66"
              xmlns="http://www.w3.org/2000/svg"
              data-testid="neo-logo"
            >
              <g fill="#fff" data-testid="logo-path-group">
                <path d="m54.9843.419091c-8.5745 0-11.0148 5.839089-11.0148 9.790909 0 3.9518 2.4403 9.79 11.0148 9.79 8.5744 0 11.0157-5.8391 11.0157-9.79 0-3.95091-2.4413-9.790909-11.0157-9.790909zm0 18.189109c-3.1688 0-3.2954-3.1746-3.2954-8.3982 0-5.22364.1266-8.39909 3.2954-8.39909 3.1687 0 3.2954 3.17545 3.2954 8.39909 0 5.2236-.1267 8.3982-3.2954 8.3982z"></path>
                <path d="m43.0146 14.8664c-4.4018 2.5991-9.1346.8354-10.6866-4.1709 7.0548-1.18186 10.401-2.43095 10.401-5.06095 0-2.54546-2.3821-5.481823-7.7453-5.196368-7.9773.425454-9.8279 6.304548-9.8279 9.774518 0 6.9737 5.4057 9.7873 9.5284 9.7873 3.4405 0 6.9032-2.0573 8.7593-4.1973zm-8.0309-13.04822c1.2442 0 2.4847 1.06182 2.4847 3.02909 0 2.47909-1.0168 3.85091-5.4233 4.59-.2754-1.99909-.5971-7.61909 2.9386-7.61909z"></path>
                <path d="m10.0174 0c-2.94316 2.26501-6.36687 3.84961-10.0174 4.63636.488992.18182 3.40445 1.11819 3.40445 3.69546v7.33178c0 1.8637-.86336 2.2264-2.416299 2.4937v1.0245h12.097249v-1.0282c-1.553-.2672-2.4154-.63-2.4154-2.4936v-7.33182c0-2.77272.5361-4.68636 2.8581-4.68636 2.2555 0 2.5458 1.95727 2.5458 4.68636v10.85002h9.6485v-1.0246c-1.5529-.2672-2.4163-.63-2.4163-2.4936v-9.22636c0-3.30909-1.5122-6.014549-6.1701-6.014549-2.3341 0-5.1987.979089-7.1177 3.027269z"></path>
              </g>
            </svg>
          </a>
          <button
            type="button"
            aria-label="Close menu"
            className="relative top-0 z-30 inline-block p-3 lg:hidden"
            onClick={toggleDrawer}
          >
            <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2">
              <span className="block absolute h-0.5 w-5 bg-current transition duration-150 ease-in-out rotate-45"></span>
              <span className="block absolute h-0.5 w-5 bg-current transition duration-150 ease-in-out opacity-0"></span>
              <span className="block absolute h-0.5 w-5 bg-current transition duration-150 ease-in-out -rotate-45"></span>
            </div>
          </button>
        </div>
        <nav className="relative px-0 pt-2 text-white lg:bg-web-darkGrey lg:px-6 lg:py-1">
        <ul className="flex space-x-6 lg:mx-auto lg:max-w-7xl lg:px-0">
            <li
              aria-label="Personal"
              className="tab-item opacity-100 border-b-2 border-web-borderOverlay lg:border-0 pb-2 lg:pb-0"
            >
              <a className="text-xl lg:text-sm">Personal</a>
            </li>
            <li aria-label="Partners" className="tab-item opacity-70 border-b-2 border-transparent lg:border-0">
              <a className="text-xl lg:text-sm">Partners</a>
            </li>
            <li aria-label="Youth <18" className="tab-item opacity-70 border-b-2 border-transparent lg:border-0">
              <a className="text-xl lg:text-sm">Youth &lt;18</a>
            </li>
          </ul>
          <div
            className="tab-indicator hidden lg:block"
            style={{
              transition: 'left 0.3s ease 0s, width 0.3s ease 0s',
              position: 'absolute',
              bottom: '0px',
              height: '2px',
              backgroundColor: 'currentcolor',
              left: '0px',
              width: '74px',
            }}
          ></div>
        </nav>
        <div className="flex flex-col space-y-xxxs">
          {navItems.map((item, index) => (
            <div key={item.label} className="w-full">
              <button
                type="button"
                aria-label={item.ariaLabel}
                className="flex w-full justify-between py-4 ease-out"
                onClick={() => toggleDropdown(index)}
              >
                <span className="text-xl font-medium lg:text-base">{item.label}</span>
                <div className={`${openDropdown === index ? 'rotate-90' : '-rotate-90'}`}>
                  <svg
                    className="fill-black h-5 w-5 rotate-90 fill-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M.733 19.015a1.25 1.25 0 0 0 1.77 0l8.13-8.13a1.251 1.251 0 0 0 0-1.77L2.5.985a1.251 1.251 0 1 0-1.77 1.77L7.978 10 .733 17.245a1.253 1.253 0 0 0 0 1.77Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
              {openDropdown === index && (
                <div className="pl-6">
                  {item.subitems.map((subitem, subIndex) => (
                    <div key={subIndex}>
                      {subitem.category && <div className="font-semibold py-2">{subitem.category}</div>}
                      <ul className="space-y-2">
                        {subitem.items.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a href={link.href} className="text-white py-3 hover:text-black">
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-stretch gap-[12px] text-center lg:hidden">
          <button className="flex-1 rounded border-2 border-web-borderOnBlack py-5 text-center text-xl font-bold">
            Log In
          </button>
          <button className="flex-1 rounded border-2 border-white text-black bg-white py-5 text-center text-xl font-bold text-contentDefault">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default drawer;

