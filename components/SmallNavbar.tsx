"use client"
import React from 'react';
import Image from 'next/image';
import { navLists2 } from '../constants';

export const appleImg = '/icons/apple.svg';
export const bagImg = '/icons/bag.svg';
export const searchImg = '/icons/search.svg';

const SmallNavbar: React.FC = () => {
  const imageStyle = {
    cursor: 'pointer',
    transition: 'filter 0.3s',
  };

  return (
    <header className="w-full py-2 sm:px-10 px-5 flex justify-between items-center bg-black-1">
      <nav className="flex w-full screen-max-width">
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists2.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-[#E0E3E7] hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default SmallNavbar;
