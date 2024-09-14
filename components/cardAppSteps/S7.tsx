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
import { appformSchema } from '@/lib/utils'

interface Step7Props {
  onClick: () => void;
  onBack: () => void;
  type: string;
  formData: appformSchema;
  setFormData: React.Dispatch<React.SetStateAction<appformSchema>>;
}

const Step7: React.FC<Step7Props> = ({ onClick, onBack, type, formData, setFormData }) => {
  
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<"yes" | "no" | null>(null);
  const router = useRouter();
  const handleCancelApplication = () => {
    setIsAlertOpen(true);
  };

  const handleContinue = () => {
    setIsAlertOpen(false); // Close the dialog
    router.push('/options');
  };

  const handleCloseDialog = () => {
    setIsAlertOpen(false);
  };



  const handleOptionClick = (option: "yes" | "no") => {
    setSelectedOption(option);
    if (option="yes"){
      onClick();
    }
    // else 
    //   onRedirect();
  };


  return (
    <header className="flex flex-col gap-5  mt-10">
      <div className={`transition-all duration-300 slide-up-enter slide-up-enter-active`}>
        <div className="main-class">
          <div className="flex ml-1 flex-col gap-1">
            <h1 className="font-bigtitle2 text-gray-900">
              Do you want to add a card for someone else?
              <p className="font-sub mt-5 text-gray-900">
               Add an authorized user to your account 
                  <p> and share the benefits of your card.
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
        <div className="cancel-app flex justify-between items-center w-full mt-10">
            <button
              type="button"
              onClick={handleCancelApplication}
              className="text-[#006ac3] hover:text-blue-800"
            >
              Cancel Application
            </button>

            <Button
              type="submit"
              onClick={onClick}
              className="form-btnclient2"
            >
              Continue
            </Button>

            {/* Confirmation Dialog */}
            <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
              <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. By cancelling this application, you will lose all input data and will have to restart the application completely.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={handleCloseDialog}>
                    No, take me back
                  </AlertDialogCancel>
                  <AlertDialogAction onClick={handleContinue}>
                    Yes, I am sure
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
      </div>
    </header>
  );
};

export default Step7;
