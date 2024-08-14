import React from 'react';

export const Canadians = () => {
  return (
    <div
      className="grid h-[647px] grid-cols-1 bg-cover bg-[left_-10rem_top] bg-no-repeat text-contentOnColor md:bg-[left_-2rem_top] lg:grid-cols-2 lg:bg-left"
      style={{
        backgroundImage:
          'url("https://static.production.neofinancial.com/marketing-web/homepage/home-dudes-mountains.jpg")',
      }}
    >
      <div className="hidden lg:block"> </div>
      <div className="flex max-w-full flex-col items-center justify-center px-[30px] text-center lg:w-[500px] lg:items-start lg:text-left">
        <span className="text-3xl text-white leading-10 md:text-4xl font-semibold not-italic mb-[12px]">
          Join 1 million+ Canadians using Split
        </span>
        <span className="text-base  text-white leading-7 md:text-lg font-normal not-italic">
          Canadians are choosing Split to make their lives and finances easier.
        </span>
        <div className="mt-2">
          <a className="bg-[#006aff] text-contentOnColor text-base px-5 py-3 rounded font-semibold focus:ring inline-block w-auto">
            <span className="inline-block  text-white leading-none">Get Started</span>
          </a>
        </div>
      </div>
    </div>
  );
};
