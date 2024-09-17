'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { appformSchema } from '@/lib/utils';



interface Step9Props {
  onClick: () => void;
  onBack: () => void;
  type: string;
  formData: appformSchema;
  setFormData: React.Dispatch<React.SetStateAction<appformSchema>>;
}


const Step9: React.FC<Step9Props> = ({ onClick, onBack, type, formData, setFormData}) => {
  const router = useRouter();
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleCancelApplication = () => {
    setIsAlertOpen(true);

    // Clear saved form data and step on cancel
    localStorage.removeItem('formData');
    localStorage.removeItem('currentStep');
    localStorage.removeItem('furthestStep');
  };

  const handleContinue = () => {
    setIsAlertOpen(false); // Close the dialog
    router.push('/options');
  };

  const handleCloseDialog = () => {
    setIsAlertOpen(false);
  };

  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="transition-all duration-300 slide-up-enter slide-up-enter-active">
        <div className="main-class pt-40">
          <div className="flex ml-1 flex-col gap-1">
          <p className="font-bigtitle2 text-gray-900">
              Please review the Document(s).
            </p>
            {/* <span className="font-subbed text-gray-900">
              The Information Box below shows details about the credit card you selected to apply 
              for and in some cases details for other credit cards. When you apply we'll consider 
              you for these cards based on your eligibility. At the end of this application 
              you will find out if you have been approved for the card you selected, a different 
              card, or more than one card. If we present you a card option in place of, or in addition to, the one 
              you selected to apply for, please choose the card that best suits your needs.
            </span> */}

            <p className="mt-3 text-gray-700">
              Is this the right product for you?
              <span className="block font-smallboldish">
                RBC aims to ensure the products you choose are right for you; however this isn't always possible when you use our self-serve channels. If you need help making a choice on which credit card is right for you, please contact us (opens in a new window) or use our credit card selection tool (opens in a new window).
              </span>
            </p>

            <p className="mt-3 text-gray-700">
              Credit Card Insurance Product Summary
              <span className="block font-smallboldish">
                RBC credit cards include insurance coverage. For Quebec Residents: please read the Insurance Product Summary. By continuing, you confirm that you had the opportunity to read and download the summary detailing the coverage included with this credit card.
              </span>
            </p>

            <p className="mt-3 text-gray-700">
              Below is an overview of these Terms & Conditions and what you are agreeing to:
              <ul className="cardnote-list font-smallboldish text-gray-700">
                <li>Consent to this credit card application, credit review, and annual fee</li>
                <li>Consent to the electronic delivery of the Information Box</li>
                <li>Collection, use and disclosure of personal information</li>
              </ul>
            </p>

            <p className="font-subbed mt-2 text-gray-700">
              To continue, please click and review the document(s) below.
            </p>

            <div className="pt-2 pb-2 w-full flex flex-col">
              {/* Dialog Trigger for the terms */}
              <Dialog>
                <DialogTrigger asChild>
                  <div className="documents-interactive w-full shadow-sm p-4 flex justify-between items-center cursor-pointer border border-gray-100">
                    <div className="flex items-center">
                      <img src="/icons/iconnewdocument.svg" alt="New Document Icon" />
                      <p className="ml-2 text-[#006ac3]">Application Terms and Conditions</p>
                    </div>
                    <img src="/icons/iconnewwindow.svg" alt="New Window Icon" />
                  </div>
                </DialogTrigger>

                {/* Dialog Content */}
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Application Terms and Conditions</DialogTitle>
                    <DialogDescription>
                      Please review the following terms and conditions carefully. By proceeding, you agree to the terms set out in this document.
                    </DialogDescription>
                    {/* Additional content like form data, buttons, etc., can go here */}
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <div className="documents-interactive2 w-full shadow-sm p-4 flex justify-between items-center cursor-pointer border border-gray-100">
                    <div className="flex items-center">
                      <img src="/icons/iconnewdocument.svg" alt="New Document Icon" />
                      <p className="ml-2 text-[#006ac3]">Insurance Product Summary</p>
                    </div>
                    <img src="/icons/iconnewwindow.svg" alt="New Window Icon" />
                  </div>
                </DialogTrigger>

                {/* Dialog Content */}
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Insurance</DialogTitle>
                    <DialogDescription>
                      Please review the following terms and conditions carefully. By proceeding, you agree to the terms set out in this document.
                    </DialogDescription>
                    {/* Additional content like form data, buttons, etc., can go here */}
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>

            <p className="pt-5 font-smallboldish text-gray-700">
              By selecting "Agree and Submit", I consent to be provided with the requested account(s) and have read and agree to the terms and conditions. I also consent to the privacy section.
            </p>
            
            <div className='agreement-checkmark pt-5'>
              <div className="items-top flex space-x-3">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                  >
                    Accept terms and conditions
                  </label>
                  <p className="text-sm text-muted-foreground font-smallboldish text-gray-700">
                    I have accessed, read and agree to all of the above.
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div className="flex flex-col gap-2 pt-3">
        <button
          type="button"
          onClick={onBack}
          className="bg-white text-[#0060b1] pt-1 pb-1 font-smallboldish balance-text-16 hover:text-[#0061b1cd] mt-2 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 1-.5.5H4.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L4.707 7.5H14.5A.5.5 0 0 1 15 8z"
            />
          </svg>
          Back
        </button>
      </div>

          {/* Cancel and Continue Buttons */}
          <div className="cancel-app flex justify-between items-center w-full mt-5">
            <button
              type="button"
              onClick={handleCancelApplication}
              className="text-[#006ac3] hover:text-blue-800"
            >
              Cancel Application
            </button>

            <Button
              type="submit"
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
      </div>
    </div>
  );
};

export default Step9;
