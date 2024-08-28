import React from 'react'
import { Button } from '../ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Step3: React.FC<Step3Props> = ({ onClick, onRedirect }) => {
  
  return (
    <header className="flex flex-col gap-5 md:gap-8 mt-10">
      {/* Conditionally render the "main class" div */}
    <div className={`transition-all duration-300 slide-up-enter slide-up-enter-active`}>
          {/* // currentAppStep ? 'slide-up-enter slide-up-enter-active' : 'slide-up-exit slide-up-exit-active' */}
        <div className="main class">
          <div className="flex ml-1 flex-col gap-1 md:gap-3">
            <h1 className="font-bigtitle2 text-gray-900">
            Are you already an SF Client?
            <p className="font-sub mt-10 text-gray-900">
            If you currently use SF Online Banking or the SF Mobile app, sign in now to complete a shorter application.
            <TooltipProvider>
              <span className="balance-text-13 mt-3 ml-4 font-smallboldish text-blue-900 text-sm cursor-pointer">
                  <Tooltip>
                    <TooltipTrigger>ⓘ</TooltipTrigger>
                      <TooltipContent className="p-3 m-2 shadow-sm bg-white">
                        <p className="text-xs">Make sure you have your Client Card/Username and password handy, as you'll need them to sign in.
                        </p>
                      </TooltipContent>
                  </Tooltip>
              </span>
            </TooltipProvider>
              </p>
            </h1>
            
          </div>
          <Button type="submit" onClick={onClick} className="form-btnclient mt-10">
           No
          </Button>
          <Button type="submit" onClick={onRedirect} className="form-btnclient mt-10">
            Yes
          </Button>
       </div>
      
    </div>
    </header>
  )
}

export default Step3