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
  const [isChecked, setIsChecked] = React.useState(false);
  const router = useRouter();
  const handleCancelApplication = () => {
    // setcurrentAppStep(false); // Show the form when "Get started" is clicked
    setIsAlertOpen(true);
    // router.push('/options');
  };

  const handleCheckedChange = (checked) => {
    setIsChecked(checked);
    if (checked) {
      setIsAlertOpen(true);
    }
  };
  const handleContinue = () => {
    setIsAlertOpen(false); // Close the dialog
    setIsChecked(true);
    router.push('/options')
    // Handle the continue action here
  };

  const handleCloseDialog = () => {
    setIsAlertOpen(false);
  };
  
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
      {/* cancel application */}
      <div className='cancel-app flex justify-between items-center w-full'>
                  {/* Clickable text for 'Cancel Application' */}
                  <button
                    type="button"
                    onClick={handleCancelApplication}
                    className="text-[#006ac3] mt-10" // Style as needed
                  >
                    Cancel Application
                  </button>

                  <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                    <AlertDialogContent className="bg-white">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. By cancelling this application you will lose all input data and will have to restart the application completely.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel
                          onClick={handleCloseDialog}
                        >
                          No, take me back
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={handleContinue}
                        >
                          Yes, I am sure
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
    </div>
    </header>
  )
}

export default Step2