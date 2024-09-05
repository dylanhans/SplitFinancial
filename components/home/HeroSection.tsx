'use client';
import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

export const HeroSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="bg-black">
      <div className="relative h-[550px] overflow-hidden md:h-[700px] lg:h-[800px]">
        <img
          alt="The way money should be"
          fetchpriority="high"
          width="1279"
          height="800"
          decoding="async"
          data-nimg="1"
          className="absolute bottom-0 z-0 origin-bottom scale-150 overflow-hidden object-contain object-bottom sm:scale-125 lg:hidden"
          src="/icons/home-hero-2-en.webp"
          style={{ color: 'transparent' }}
        />
        <img
          alt="The way money should be"
          fetchpriority="high"
          decoding="async"
          data-nimg="fill"
          className="absolute z-0 hidden object-contain object-bottom lg:block"
          sizes="100vw"
          src="/icons/home-hero-2-en.webp"
          style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
        />
        <div className="z-10 flex h-full flex-col overflow-hidden p-[40px] text-center text-contentOnColor lg:pt-[80px] ease-out transition-all duration-700 transform-gpu opacity-0 scale-95 animate-fadeIn">
          <h1 className="whitespace-pre-line pb-[24px] text-5xl font-semibold sm:text-5xl md:text-7xl">
            The way money should be
          </h1>
          <h2 className="whitespace-pre-line pb-[24px] text-xl md:text-2xl">
            AI-powered accounts and tools that make life simple.
          </h2>
          <div>
            <a
              className="bg-[#006aff] text-contentOnColor text-base px-5 py-3 rounded font-semibold focus:ring inline-block w-auto"
              target="_blank"
            >
              <span className="inline-block leading-none">Get Started</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
