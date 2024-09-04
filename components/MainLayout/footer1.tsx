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
          <div className="w-full text-black-2">
            <ul className="flex flex-wrap">
              {/* Banking Section */}
              <li className="section-item flex-1">
                <h2 className="text-sm cursor-pointer relative">
                  Banking
                </h2>
                <ul className="text-blue-900 text-12 font-normal pt-6 space-y-6">
                  <li className='hover-card-trigger cursor-pointer'><a href="/banking-option1">Personal Banking Accounts</a></li>
                  <li className='hover-card-trigger cursor-pointer'><a href="/banking-option2">Credit Cards</a></li>
                  <li className='hover-card-trigger cursor-pointer'><a href="/banking-option3">Loans & Lines of Credit</a></li>
                  <li className='hover-card-trigger cursor-pointer'><a href="/banking-option3">Exchange Rates</a></li>

                </ul>
              </li>

              {/* Credit Financing Section */}
              <li className="section-item flex-1">
                <h2 className="text-sm  cursor-pointer relative">
                  Credit Financing
                </h2>
                <ul className="text-blue-900 text-12 font-normal pt-6 space-y-6">
                  <li className='hover-card-trigger cursor-pointer'><a href="/credit-option1">Terms and Charges</a></li>
                  <li className='hover-card-trigger cursor-pointer'><a href="/credit-option2">Credit Score</a></li>
                  <li className='hover-card-trigger cursor-pointer'><a href="/credit-option3">Financing Agreement</a></li>
                </ul>
              </li>

              {/* Investing Section */}
              <li className="section-item flex-1">
                <h2 className="text-sm  cursor-pointer relative">
                  Investing
                </h2>
                <ul className="text-blue-900 text-12 font-normal pt-6 space-y-6">
                  <li className='hover-card-trigger cursor-pointer'><a href="/investing-option1">Investing Option 1</a></li>
                  <li className='hover-card-trigger cursor-pointer'><a href="/investing-option2">Investing Option 2</a></li>
                  <li className='hover-card-trigger cursor-pointer'><a href="/investing-option3">Investing Option 3</a></li>
                </ul>
              </li>

              {/* Account Services Section */}
              <li className="section-item flex-1 ">
                <h2 className="text-sm  cursor-pointer relative">
                Account Services
                </h2>
                <ul className="text-blue-900 text-12 font-normal pt-6 space-y-6">
                  <li className='hover-card-trigger cursor-pointer'><a href="/services-option1">Services Option 1</a></li>
                  <li className='hover-card-trigger cursor-pointer'><a href="/services-option2">Services Option 2</a></li>
                  <li className='hover-card-trigger cursor-pointer'><a href="/services-option3">Services Option 3</a></li>
                </ul>
              </li>

              {/* Solutions Centre Section */}
              <li className="section-item flex-1">
                <h2 className="text-sm  cursor-pointer relative">
                  Solutions Centre
                </h2>
                <ul className="text-blue-900 text-12 font-normal pt-6 space-y-6">
                  <li className='hover-card-trigger cursor-pointer'><a href="/solutions-option1">Solutions Option 1</a></li>
                  <li className='hover-card-trigger cursor-pointer'><a href="/solutions-option2">Solutions Option 2</a></li>
                  <li className='hover-card-trigger cursor-pointer'><a href="/solutions-option3">Solutions Option 3</a></li>
                </ul>
              </li>

              {/* <li>
                <Image 
                  src="/icons/cdic.png"
                  alt="auth image"
                  width={60}
                  height={60}
                />
              </li> */}
            </ul>
            <div className="pt-6">
              <Image 
                src="/icons/cdic.png"
                alt="auth image"
                width={60}
                height={60}
              />
            </div>
          </div>
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
  <ul className="social-links pr-[20px] flex space-x-4">
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
  <Separator className="h-[30px] w-[1px] border-l border-gray-300 px-2" />
  <div className="to-topp">
    <a href="#skip-nav" className="scroll-to flex items-center">
      <img src="https://www.rbcroyalbank.com/dvl/v1.0/assets/images/ui/ui-to-top-white.svg" width="15" height="20" alt="Top"/>
      <span>
        <span className="offscreen pl-2">Top</span>
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
