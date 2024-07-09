'use client';
import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

export const CreditSecured = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS on component mount
  }, []);
  return (
    <section>
      <div className="bg-[#000000]">
        <div className="grid grid-cols-1 bg-black md:grid-cols-2 md:items-end overflow-hidden">
          <div className="flex flex-col text-white pt-[80px] pb-[40px] px-6 justify-center md:max-w-[520px] md:m-auto lg:max-w-[540px] lg:mr-[40px] lg:ml-auto">
            <div
              className="ease-out transition-[transform opacity] duration-1000 opacity-100"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h1 className="text-4xl md:text-[3.7rem] font-semibold not-italic">
                Voted Canada’s Best Secured Credit Card¹
              </h1>
            </div>
            <div className="flex space-y-xs mt-[16px] flex-col" data-aos="fade-right" data-aos-duration="1000">
              <div className="mt-[12px] md:mt-[32px] flex flex-row delay-150 ease-out transition-[transform opacity] duration-1000 opacity-100">
                <div className="mr-[8px] mt-[2px]">
                  <svg
                    className="fill-black h-5 w-5 fill-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-xl leading-7 font-normal not-italic">Guaranteed approval²</span>
              </div>
              <div className="mt-[12px] mt-[32px] flex flex-row delay-150 ease-out transition-[transform opacity] duration-1000 opacity-100">
                <div className="mr-[8px] mt-[2px]">
                  <svg
                    className="fill-black h-5 w-5 fill-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-xl leading-7 font-normal not-italic">No hard credit check</span>
              </div>
              <div className="mt-[12px] mt-[32px] flex flex-row delay-150 ease-out transition-[transform opacity] duration-1000 opacity-100">
                <div className="mr-[8px] mt-[2px]">
                  <svg
                    className="fill-black h-5 w-5 fill-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-xl leading-7 font-normal not-italic">No annual fee³</span>
              </div>
            </div>
            <div
              className="mt-[32px] flex flex-row items-center delay-150 ease-out transition-[transform opacity] duration-1000 opacity-100"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="mr-[8px] flex flex-row items-center">
                <svg
                  className="fill-black h-[22px] w-[22px] fill-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.05c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10a10 10 0 0 0-10-10zm3.55 13.8-4.08-2.51a1 1 0 0 1-.48-.85V7.8a.77.77 0 0 1 .76-.75.76.76 0 0 1 .75.75v4.45l3.84 2.31a.76.76 0 1 1-.79 1.29z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-base leading-7 md:text-lg font-semibold not-italic">
                Complete your application in minutes.
              </span>
            </div>
            <div
              className="mt-[32px] delay-300 ease-out transition-[transform opacity] duration-1000 opacity-100"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <a className="bg-[#006aff] text-contentOnColor text-lg px-10 py-4 rounded font-semibold focus:ring inline-block w-auto">
                <span className="inline-block leading-none">Apply Now</span>
              </a>
            </div>
          </div>
          <video className="max-h-[600px] aspect-fixed" autoPlay loop muted>
            <source type="video/mp4" src="/icons/card-animation.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};
