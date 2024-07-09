import React from 'react';

export const PlatformSection = () => {
  return (
    <section>
      <div className="bg-[#f8f9f9]">
        <div className="px-6 md:px-0 md:mx-auto md:max-w-[520px] lg:max-w-[1016px]">
          <div className="py-[80px] lg:pt-[120px]">
            <div className="flex flex-col pb-[40px] text-center lg:pb-[60px]">
              <span className="text-3xl leading-10 text-black md:text-4xl font-semibold not-italic mb-[12px]">
                An AI-enabled platform for your money
              </span>
              <span className="text-base leading-7 text-black md:text-lg font-normal not-italic">
                Everything you need to make your money work smarter.
              </span>
              <div className="mt-2">
                <a
                  className="bg-[#006aff] text-[#fff] text-base px-5 py-3 rounded font-semibold focus:ring inline-block w-auto"
                  //   target="_blank"
                  //   href="https://member.neofinancial.com/signup"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-2 flex-row" style={{ alignItems: 'center' }}>
                    <span className="inline-block leading-none">Get Started</span>
                    <svg
                      className="  fill-[#fff] h-5 w-5 min-w-[1.25rem]"
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
                </a>
              </div>
            </div>
            <div className="flex h-fit flex-col items-center justify-center lg:h-[540px] lg:flex-row lg:justify-between">
              <a
                className="mb-2 h-[280px] sm:h-[380px] md:h-[412px] w-full lg:w-[326px] bg-cover transition-[height] duration-300 bg-no-repeat bg-center md:bg-bottom rounded-xl no-underline hover:no-underline lg:h-[420px] lg:hover:h-[460px]"
                style={{
                  backgroundImage:
                    'url("https://static.production.neofinancial.com/marketing-web/homepage/home-feature-1.jpg")',
                }}
              >
                <div className="flex flex-col p-[32px] ">
                  <span className="text-3xl leading-10 md:text-4xl font-semibold text-contentOnColor not-italic pb-xs">
                    Spend
                  </span>
                  <span className="text-xl leading-7 font-normal text-contentOnColor not-italic">
                    Spend, track, and move your money with ease.
                  </span>
                </div>
              </a>
              <a
                className="mb-2 h-[280px] sm:h-[380px] md:h-[412px] w-full lg:w-[326px] bg-cover transition-[height] duration-300 bg-no-repeat bg-center md:bg-bottom rounded-xl no-underline hover:no-underline lg:h-[480px] lg:hover:h-[520px]"
                style={{
                  backgroundImage:
                    'url("https://static.production.neofinancial.com/marketing-web/homepage/home-feature-2.jpg")',
                }}
              >
                <div className="flex flex-col p-[32px] ">
                  <span className="text-3xl leading-10 md:text-4xl font-semibold text-contentOnColor not-italic pb-xs">
                    Save
                  </span>
                  <span className="text-xl leading-7 font-normal text-contentOnColor not-italic">
                    Grow your money and reach your goals with high-interest savings.
                  </span>
                </div>
              </a>
              <a
                className="mb-2 h-[280px] sm:h-[380px] md:h-[412px] w-full lg:w-[326px] bg-cover transition-[height] duration-300 bg-no-repeat bg-center md:bg-bottom rounded-xl no-underline hover:no-underline lg:h-[420px] lg:hover:h-[460px]"
                style={{
                  backgroundImage:
                    'url("https://static.production.neofinancial.com/marketing-web/homepage/home-feature-3.jpg")',
                }}
              >
                <div className="flex flex-col p-[32px] ">
                  <span className="text-3xl leading-10 md:text-4xl font-semibold text-contentOnColor not-italic pb-xs">
                    Earn
                  </span>
                  <span className="text-xl leading-7 font-normal text-contentOnColor not-italic">
                    Earn instant, unlimited rewards on all your spending.
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
