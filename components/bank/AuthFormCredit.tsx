import React from 'react'
import Image from 'next/image';

const AuthFormCredit = () => {
  return (
      <section>
        <div className="py-[80px]">
          <div className="px-6 md:px-0 md:mx-auto md:max-w-[520px] lg:max-w-[1016px]">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {/* 1 Credit Card */}
              <div className="flex flex-col rounded-xl bg-white p-1">
                 <Image 
                  src="/icons/test-card.png"
                  alt="credit card"
                  width={175}
                  height={175}
                />
                <span className="text-2xl leading-8 font-semibold not-italic text mb-[12px] text-black py-6">
                  Split Credit
                </span>
                <hr className="h-px border-0 bg-black" />
                <span className="text-xl leading-7 font-semibold not-italic text mb-[12px] text-black  pt-8">
                  Best for everyday spending
                </span>
                <span className="text-xl leading-7 font-normal not-italic text-black">Annual Fee: $0²</span>
                <span className="text-base leading-7 md:text-lg font-light text-[#697780] not-italic flex-1 pt-2">
                  Canada&apos;s favourite cashback credit card³.
                </span>
                <div className="grid grid-cols-1 gap-1 py-8 lg:grid-cols-2">
                  <div>
                    <button
                      className="bg-[#006aff] text-white cursor-pointer text-base px-5 py-3 rounded font-semibold focus:ring flex w-full"
                      disabled
                    >
                      <div className="flex space-x-xxs flex-row gap-2" style={{ alignItems: 'center' }}>
                        <span className="inline-block leading-none">Get this card</span>
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
                    </button>
                  </div>
                  <button
                    className="bg-transparent text-[#006aff] text-start text-base px-5 py-3 rounded font-semibold focus:ring inline-block w-auto"
                    disabled
                  >
                    <span className="inline-block leading-none">Learn More</span>
                  </button>
                </div>
                <span className="text-base leading-7 md:text-lg font-semibold not-italic pt-2">Features included</span>
                <div className="relative mt-2 flex items-center gap-x-1">
                  <svg
                    className="fill-black h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base leading-6 font-normal not-italic text-black">
                    Credit limit up to $10,000
                  </span>
                </div>
                <div className="relative mt-2 flex items-center gap-x-1">
                  <svg
                    className="fill-black h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base leading-6 font-normal not-italic text-black">
                    0.5% guaranteed minimum cashback⁴
                  </span>
                </div>
                <div className="relative mt-2 flex items-center gap-x-1">
                  <svg
                    className="fill-black h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base leading-6 font-normal not-italic text-black">Get approved instantly</span>
                </div>
              </div>
  
              {/* 2 Secured Credit Card */}
              <div className="flex flex-col rounded-xl bg-white p-1">
              <Image 
                  src="/icons/tester-card.png"
                  alt="credit card"
                  width={175}
                  height={175}
                />
                <span className="text-2xl leading-8 font-semibold not-italic text mb-[12px]  py-6">
                  Split Secured Credit
                </span>
                <hr className="h-px border-0 bg-black" />
                <span className="text-xl leading-7 font-semibold not-italic text mb-[12px]  pt-8">
                  Best for building credit history¹
                </span>
                <span className="text-xl leading-7 font-normal not-italic">Annual Fee: $0²</span>
                <span className="text-base leading-7 md:text-lg font-light text-[#697780] not-italic flex-1 pt-2">
                  Build your credit history¹ and earn instant cashback.
                </span>
                <div className="grid grid-cols-1 gap-1 py-8 lg:grid-cols-2">
                  <div>
                    <button
                      className="bg-[#006aff] text-white cursor-pointer text-base px-5 py-3 rounded font-semibold focus:ring flex w-full"
                      disabled
                    >
                      <div className="flex space-x-xxs flex-row gap-2" style={{ alignItems: 'center' }}>
                        <span className="inline-block leading-none">Get this card</span>
                        <svg
                          className="  fill-white h-5 w-5 min-w-[1.25rem]"
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
                    </button>
                  </div>
                  <button
                    className="bg-transparent text-[#006aff] text-start text-base px-5 py-3 rounded font-semibold focus:ring inline-block w-auto"
                    disabled
                  >
                    <span className="inline-block leading-none">Learn More</span>
                  </button>
                </div>
                <span className="text-base leading-7 md:text-lg font-semibold not-italic pt-2">Features included</span>
                <div className="relative mt-2 flex items-center gap-x-1">
                  <svg
                    className="fill-black h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base leading-6 font-normal not-italic text-black">Guaranteed approval⁵</span>
                </div>
                <div className="relative mt-2 flex items-center gap-x-1">
                  <svg
                    className="fill-black h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base leading-6 font-normal not-italic text-black">
                    Flexible credit limit from $50-$10,000
                  </span>
                </div>
                <div className="relative mt-2 flex items-center gap-x-1">
                  <svg
                    className="fill-black h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base leading-6 font-normal not-italic text-black">
                    No hard credit check required⁶
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default AuthFormCredit