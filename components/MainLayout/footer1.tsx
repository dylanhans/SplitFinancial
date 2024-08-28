import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';


const Footer1 = () => {
  return (
<section>
<div className="main-footer">
    <nav className="relative p-5 text-white lg:bg-[#f5f6f7]">
      <div className="account-functions pl-[235px]">
      <Tabs defaultValue="account" className="w-full text-black-2" >
        <TabsList>
          <ul className="flex space-x-2 lg:mx-auto lg:max-w-7xl lg:px-0" >
            <li
              data-value="account"
              aria-label="Personal"
              className={`tab-item cursor-pointer relative`}
            >
              <TabsTrigger value="account">
                <a href="/" className="text-xl lg:text-sm">Banking</a>
              </TabsTrigger>
            </li>
            <li
              data-value="transfer"
              aria-label="Youth <18"
              className={`tab-item cursor-pointer relative`}
            >
              <TabsTrigger value="transfer">
                <a href="/payment-transfer" className="text-xl lg:text-sm">Credit Financing</a>
              </TabsTrigger>
            </li>
            <li
              data-value="history"
              aria-label="Partners"
              className={`tab-item cursor-pointer relative`}
            >
              <TabsTrigger value="history">
                <a href="/transaction-history" className="text-xl lg:text-sm">Investing</a>
              </TabsTrigger>
            </li>
            <li
              data-value="products-services"
              aria-label="Partners"
              className={`tab-item cursor-pointer relative`}
            >
              <TabsTrigger value="products-services">
                <a href="/accounts-page" className="text-xl lg:text-sm">Account Services</a>
              </TabsTrigger>
            </li>
            <li
              data-value="help"
              aria-label="Youth <18"
              className={`tab-item cursor-pointer relative`}
            >
              <TabsTrigger value="help">
                <a href="/help" className="text-xl lg:text-sm">Solutions Centre</a>
              </TabsTrigger>
            </li>
          </ul>
          <div>
            <Image 
                src="/icons/cdic.png"
                alt="auth image"
                width={60}
                height={60}
            />
          </div>
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

<div className="lower-footer">
  <div className="relative px-0 text-white lg:bg-[#323232]">
    <div className="account-functions pl-[260px] flex w-full space-y-1 p-5">
      <div className="footer-left flex-col">
        <p className="text-12 mt-1 font-normal text-white">
          Split Financial Website, © 2023-2024
        </p>
        <div className="inner-sec flex space-x-4 mt-1 text-white">
          <p className="cursor-pointer hover-card-trigger flex underline items-center text-12 font-normal">
            Legal
            <span className="ml-2">|</span>
          </p> 
          <p className="cursor-pointer hover-card-trigger flex underline items-center text-12 font-normal">
            Accessibility
            <span className="ml-2">|</span>
          </p> 
          <p className="cursor-pointer hover-card-trigger flex underline items-center text-12 font-normal">
            Privacy & Security
            <span className="ml-2">|</span>
          </p>
          <p className="text-12 underline font-normal">
            Advertising & Cookies
          </p>
        </div>
      </div>
      <div className='footer-right pl-[700px] flex items-center'>
  <ul className="social-links pr-[30px] flex space-x-4">
    <li>
      <a href="https://www.facebook.com/rbc">
        <img src="https://www.rbcroyalbank.com/dvl/v1.0/assets/images/social/scl-facebook-master-white.svg" alt="Facebook" className="social-icon"/>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/rbc/">
        <img src="https://www.rbcroyalbank.com/dvl/v1.0/assets/images/social/scl-instagram-master-white.svg" className="social-icon" alt="Instagram"/>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/RBC">
        <img src="https://www.rbcroyalbank.com/dvl/v1.0/assets/images/social/scl-twitter-master-white.svg" className="social-icon" alt="Twitter"/>
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/user/RBC">
        <img src="https://www.rbcroyalbank.com/dvl/v1.0/assets/images/social/scl-youtube-master-white.svg" className="social-icon" alt="YouTube"/>
      </a>
    </li>
    <li>
      <a href="https://linkedin.com/company/split-financial-services">
        <img src="https://www.rbcroyalbank.com/dvl/v1.0/assets/images/social/scl-linkedin-master-white.svg" className="social-icon" alt="LinkedIn"/>
      </a>
    </li>
  </ul>
  <Separator className="h-[30px] w-[1px] border-l border-gray-300 mx-4" />
  <div className="to-topp">
    <a href="#skip-nav" className="scroll-to flex items-center">
      <img src="https://www.rbcroyalbank.com/dvl/v1.0/assets/images/ui/ui-to-top-white.svg" width="15" height="20" alt="Top"/>
      <span>
        <span className="offscreen pl-4">Top</span>
      </span>
    </a>
  </div>
</div>

    </div>
  </div>
</div>

</section>

);
};

export default Footer1;
