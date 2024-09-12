import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

const LangSelect = () => {
  return (
    <div>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="flex items-center">
          <img 
            src="/icons/flag.svg" 
            alt="Canada Flag" 
            className="mr-1 p-0.25 w-[30%] h-[50%]" 
          />
          <p className='text-[#006ac3] font-submore'>
            (EN)
          </p>
        </NavigationMenuTrigger>
        <NavigationMenuContent className='bg-white w-[25px] h-[25px]'>
        <NavigationMenuLink 
          className="flex w-full items-center no-underline hover:bg-[#f3f4f5] p-1"
          href="#"
          >
          <img 
            src="/icons/flag.svg" 
            alt="Canada Flag" 
            className="mr-1 w-[35%] h-[50%]" 
          />
          <p className='text-[#006ac3] font-submore'>
            (FR)
          </p>
        </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</div>
  )
}

export default LangSelect