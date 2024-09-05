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
        <NavigationMenuTrigger className="text-blue-600 font-subbed flex items-center">
          <img 
            src="/icons/flag.svg" 
            alt="Canada Flag" 
            className="mr-1 w-[50%] h-[50%]" 
          />
          (EN)
        </NavigationMenuTrigger>
        <NavigationMenuContent className='bg-white w-full'>
          <NavigationMenuLink className="text-blue-600 font-subbed flex items-center">
          <img 
            src="/icons/flag.svg" 
            alt="Canada Flag" 
            className="mr-1 w-[50%] h-[50%]" 
          />
          (FR)
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</div>
  )
}

export default LangSelect