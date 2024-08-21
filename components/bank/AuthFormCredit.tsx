import React from 'react'
import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';
import { Checkbox } from '../ui/checkbox';

const AuthFormCredit  = ({
  type,
  subtype,
  offer,
  description,
  af,
  cl,
  car,
  pr,
  rewards,
  title,
}: AuthFormCreditProps) => {
  return (
      <section>
        <div className="py-[80px]">
          <div className="px-6 md:px-0 md:mx-auto lg:max-w-[350px] shadow-md rounded-sm w-full">
            <div className="grid grid-cols-1 gap-2 w-full p-8">
              {/* 1 Credit Card */}
              <div className="flex flex-col rounded-xl bg-white p-1">
                 <Image 
                  src="/icons/tester-card.png"
                  alt="credit card"
                  width={175}
                  height={175}
                />
                <span className="text-normal leading-8 font-semibold not-italic text text-black pt-4">
                  {subtype.toUpperCase()}
                </span>
                <span className="text-xl leading-8 font-semibold not-italic text mb-2 text-black pt-2">
                  {title}
                </span>
                <hr className="h-px border-0 bg-black" />
                <span className="text-base leading-7 font-light text-[#697780] not-italic flex-1 pt-2">
                  {description}
                </span>
                {/* Seperator */}
                <Separator className="flex-grow border-t border-gray-300 mt-4" /> {/* Line with full width */}

                {/* Fee Details */}
            <div className="mt-5 grid grid-cols-2 gap-y-4">
              <span className="text-base leading-6 font-normal not-italic text-black">
                Annual Fee
              </span>
              <span className="text-base leading-6 font-normal not-italic text-gray-500">
                {/* Replace with actual value */}
                $95
              </span>

              <span className="text-base leading-6 font-normal not-italic text-black">
                Purchase Rate
              </span>
              <span className="text-base leading-6 font-normal not-italic text-gray-500">
                {/* Replace with actual value */}
                15.99%
              </span>

              <span className="text-base leading-6 font-normal not-italic text-black">
                Cash Advance Rate
              </span>
              <span className="text-base leading-6 font-normal not-italic text-gray-500">
                {/* Replace with actual value */}
                22.99%
              </span>
            </div>

                <button
                    className="bg-transparent text-[#006aff] text-start text-base py-3 rounded font-semibold focus:ring inline-block w-auto"
                    disabled
                  >
                  <span className="inline-block leading-none"> &gt; View Card Details</span>
                </button>
                  <div className="flex ml-1 mt-1.5 space-x-2">
                    <Checkbox
                    id="terms"
                    // onCheckedChange={handleCheckboxChange2}
                    />
                    <label
                    htmlFor="terms"
                    className="font-smallboldish balance-text-small text-gray-600"
                    >
                    Compare
                    </label>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    );
  }

export default AuthFormCredit

{/* <button
                      className="bg-[#006aff] text-white cursor-pointer text-base px-5 py-3 rounded font-semibold focus:ring flex w-full"
                      disabled
                    >
                      <div className="flex space-x-xxs flex-row gap-2" style={{ alignItems: 'center' }}>
                        <span className="inline-block leading-none">Apply</span>
                        <svg
                          className="fill-black fill-white h-5 w-5 min-w-[1.25rem]"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 1 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.414 11h11.17l-4.882-4.882a1 1 0 0 1 0-1.413h.005a1 1 0 0 1 1.408 0L19.71 11.3a1 1 0 0 1 0 1.41l-6.595 6.59a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41l4.88-4.89H5.414a1 1 0 1 1 0-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </button> */}