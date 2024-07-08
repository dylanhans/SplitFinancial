import React from 'react';
import {
  Command,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button"; // Ensure you import your Button component
import Image from 'next/image';

const SearchTransactions = () => {
  return (
    <div className="border border-gray-400 rounded-none mt-2 mb-1">
      <div className="flex items-center">
        <Command className="flex-grow">
          <CommandInput className="flex-grow h-9 text-13" placeholder="Search by keyword" />
          <CommandList>
            {/* Your command list items */}
          </CommandList>
        </Command>
        <div className="search-button ml-2 ">
          <Button className="h-10 w-20 border border-blue-900 rounded-none bg-blue-900 hover:bg-[#2b5d96]">
            <span className="text-white text-12">Search</span>
          </Button>
        </div>
        <div className="filter-button">
          <Button className="h-10 w-20 border border-blue-900 rounded-none bg-white">
            <span className="text-blue-900 text-12">☰ Filter</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchTransactions;


