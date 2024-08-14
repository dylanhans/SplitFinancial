import React from 'react';

export const Superpowers = () => {
  return (
    <section>
      <div className="px-6 md:px-0 md:mx-auto md:max-w-[520px] lg:max-w-[1016px]">
        <div className="my-[80px">
          <div className="lg:gap-[80px] grid grid-cols-1 justify-items-center rounded-xl lg:grid-cols-2 py-[40px] pt-0">
            <div className="pb-[40px] lg:pb-0 flex h-full flex-col justify-center lg:my-0 order-last lg:order-first">
              <h2 className="text-3xl leading-10 md:text-4xl text-black font-semibold not-italic mb-[12px]">
                Give yourself budgeting superpowers
              </h2>
              <span className="text-base leading-7 text-black md:text-lg font-normal not-italic">
                Understand your cash flow and spending with minimal effort thanks to AI-powered tools.
              </span>
            </div>
            <div className="w-full rounded order-last lg:order-first object-cover order-first lg:order-last">
              <div className="aspect-square lg:min-h-[468px]">
                <div className="block h-full w-full"></div>
              </div>
            </div>
          </div>
          <div className="lg:gap-[80px] grid grid-cols-1 justify-items-center rounded-xl lg:grid-cols-2 py-[40px] pt-0">
            <img
              alt="Image123"
              loading="lazy"
              width="488"
              height="488"
              decoding="async"
              data-nimg="1"
              className="w-full rounded order-last lg:order-first object-cover"
              src="/icons/home-earnreward-en.webp"
              style={{ color: 'transparent' }}
            />
            <div className="pb-xxxl lg:pb-0 flex h-full flex-col justify-center lg:my-0 order-first lg:order-last">
              <h2 className="text-3xl leading-10 md:text-4xl font-semibold not-italic text-black mb-[12px]">
                Earn rewards, your way
              </h2>
              <span className="text-base leading-7 md:text-lg font-normal text-black not-italic">
                Pay with Split and earn instant rewards at thousands of your favourite brands.
              </span>
            </div>
          </div>
          <div className="lg:gap-[80px] grid grid-cols-1 justify-items-center rounded-xl lg:grid-cols-2 py-[40px] pt-0">
            <div className="pb-xxxl lg:pb-0 flex h-full flex-col justify-center lg:my-0 order-last lg:order-first">
              <h2 className="text-3xl leading-10 md:text-4xl font-semibold not-italic mb-[12px] text-black">
                Keep your money safe
              </h2>
              <span className="text-base leading-7 md:text-lg font-normal not-italic text-black">
                World-class security infrastructure keeps your money secure.
              </span>
            </div>
            <img
              alt="Image123"
              loading="lazy"
              width="488"
              height="488"
              decoding="async"
              data-nimg="1"
              className="w-full rounded order-last lg:order-first object-cover order-first lg:order-last"
              src="/icons/home-keepmoneysafe.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
