"use client"
import React from 'react';
import Image from 'next/image';
import { navLists } from '../constants';

export const appleImg = '/icons/newlogo.png';
export const bagImg = '/icons/bag.svg';
export const searchImg = '/icons/search.svg';

const Navbar: React.FC = () => {
  const imageStyle = {
    cursor: 'pointer',
    transition: 'filter 0.3s',
  };

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-black-2">
      <style jsx>{`
        .image-hover:hover {
          filter: brightness(0) invert(1);
        }
      `}</style>
      <nav className="flex w-full screen-max-width">
        <div style={imageStyle} className="image-hover">
          <Image src={appleImg} alt="Apple" width={40} height={40} />
        </div>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-[#E0E3E7] hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <div style={imageStyle} className="image-hover">
            <Image src={searchImg} alt="Search" width={18} height={18} />
          </div>
          <div style={imageStyle} className="image-hover">
            <Image src={bagImg} alt="Bag" width={18} height={18} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
