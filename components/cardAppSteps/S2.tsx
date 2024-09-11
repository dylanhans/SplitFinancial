'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,

  AlertDialogFooter,

  AlertDialogHeader,

  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const Step2: React.FC<Step3Props> = ({ onClick, onRedirect }) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<"yes" | "no" | null>(null);
  const router = useRouter();


  const handleOptionClick = (option: "yes" | "no") => {
    setSelectedOption(option);
    if (option="yes"){
      onClick();
    }
    else 
      onRedirect();
  };


  return (
    <header className="flex flex-col gap-5  mt-10">
      <div className={`transition-all duration-300 slide-up-enter slide-up-enter-active`}>
        <div className="main-class">
          <div className="flex ml-1 flex-col gap-1">
            <h1 className="font-bigtitle2 text-gray-900">
              Are you already an SF Client?
              <p className="font-sub mt-5 text-gray-900">
                If you currently use SF Online Banking or the SF Mobile 
                  <p> app, sign in now to complete a shorter application. 
                    <TooltipProvider>
                  <span className="balance-text-13 mt-3 ml-4 font-smallboldish text-blue-900 text-sm cursor-pointer">
                    <Tooltip>
                      <TooltipTrigger>ⓘ</TooltipTrigger>
                      <TooltipContent className="p-3 m-2 shadow-sm bg-white">
                        <p className="text-xs">
                          Make sure you have your Client Card/Username and password handy, as you'll need them to sign in.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </span>
                </TooltipProvider></p>
                
                </p>
            </h1>
          </div>

          {/* "No" and "Yes" buttons */}
          <div className="flex justify-center items-center w-full gap-x-6">
            <Button
              type="button"
              onClick={() => handleOptionClick("no")}
              className={`form-btn1 mt-10 ${selectedOption === "no" ? "form-btn2" : ""}`}
            >
              No
            </Button>
            <Button
              type="button"
              onClick={() => handleOptionClick("yes")}
              className={`form-btn1 mt-10 ${selectedOption === "yes" ? "form-btn2" : ""}`}
            >
              Yes
            </Button>
          </div>

          
        </div>
      </div>
    </header>
  );
};

export default Step2;
