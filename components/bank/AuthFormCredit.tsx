'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';
import { Checkbox } from '../ui/checkbox';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';


const AuthFormCredit: React.FC<AuthFormCreditProps> = ({
  id,
  isChecked,
  onCheckmarkClick,
  type,
  subtype,
  offer,
  description,
  af,
  cl,
  car,
  pr,
  rewards,
  img,
  title,
}) => {

  const handleApplyClick = () => {
    // Construct the URL with query parameters as a string
    const url = `/cardapp/application?id=${encodeURIComponent(id)}`;
    
    router.push(url);
  };

  const router = useRouter();


  return (
    <section>
      <div className="py-[80px] relative">
        <Separator
          className={`flex-grow mt-2 transition-color duration-300 ${
            isChecked ? ' border border-bankGradient opacity-100' : 'border opacity-100'
          }`}
        />
        <div
          className="px-6 md:px-0 md:mx-auto lg:max-w-[325px] shadow-lg rounded-sm w-full cursor-pointer"
          onClick={onCheckmarkClick}
        >
          <div className="relative">
            <div className="grid grid-cols-1 gap-2 w-full pt-8 pb-8 pl-6 pr-6">
              <div className="flex flex-col rounded-xl bg-white p-1">
                <Image src={img} alt="credit card" width={190} height={190} />
                <span className="text-normal leading-8 font-semibold text-[#333] pt-4">
                  {subtype.toUpperCase()}
                </span>
                <p className="text-xl leading-8 font-semibold text-[#333] mb-2 pt-2">
                  {title}
                  <span className="text-xs align-super">®</span>
                </p>
                <hr className="h-px border-0 bg-black" />
                <span className="text-base2 leading-7 font-light text-[#333] pt-2">
                  {description}
                </span>
                <Separator className="flex-grow border-t border-gray-300 mt-8" />
                <div className="mt-5 grid grid-cols-2 gap-y-4">
                  <span className="text-[14px] font-semibold leading-6 text-[#333]">
                    Annual Fee
                  </span>
                  <span className="text-[14px] leading-6 font-light text-[#333] text-right">
                    ${af}
                  </span>
                  <span className="text-[14px] font-semibold leading-6 text-[#333]">
                    Purchase Rate
                  </span>
                  <span className="text-[14px] leading-6 font-light text-[#333] text-right">
                    {pr}%
                  </span>
                  <span className="text-[14px] font-semibold leading-6 text-[#333]">
                    Cash Advance Rate
                  </span>
                  <span className="text-[14px] leading-6 font-light text-[#333] text-right">
                    {car}%
                  </span>
                </div>
                <div className="bg-transparent text-[#31719e] text-start text-base py-5 rounded font-semibold focus:ring flex justify-between items-center w-full">
                  <Link href="/options/learn-card">
                    <p className="inline-block leading-none text-[15px] font-semibold cursor-pointer hover-card-trigger">
                      View Card Details
                      <span className="inline-block ml-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          fill="currentColor"
                          className="bi bi-chevron-right"
                          viewBox="0 0 16 16"
                          style={{ transform: 'translateY(1px)' }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                          />
                        </svg>
                      </span>
                    </p>
                  </Link>
                  <Button
                    type="button"
                    className={`form-btn3 text-right ${isChecked ? 'enabled1' : 'disabled1'}`}
                    onClick={handleApplyClick}
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthFormCredit;
