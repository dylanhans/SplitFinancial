import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';


const Footer1 = () => {
  return (
<section>
<div className="">
    <nav className="relative px-0 text-white lg:bg-[#f5f6f7] lg:px-6">
      <div className="account-functions ml-[260px]">
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

<div className="">
    <div className="relative px-0 text-white lg:bg-[#323232] lg:px-6">
      <div className="account-functions ml-[260px]">

      <div className="tradecopyright flex-col">
                    
                    <p className="text-12 mt-1 font-normal text-white">
                    Split Financial Website, © 2023-2024
                    </p>
                </div>
      </div>
    </div>
    
</div>
</section>

);
};

export default Footer1;
