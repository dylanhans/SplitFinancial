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
import { Separator } from '@/components/ui/separator';

import { useRouter } from 'next/navigation';
import { appformSchema } from '@/lib/utils';


interface Step8Props {
  onClick: () => void;
  onBack: () => void;
  type: string;
  formData: appformSchema;
  setFormData: React.Dispatch<React.SetStateAction<appformSchema>>;
}

const Step8: React.FC<Step8Props> = ({ onClick, onBack, type, formData, setFormData  }) => {
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
            Let's look over your application.
          </p>
            <span className="font-subbed text-gray-900">
            Please review your information and agree to the terms and conditions to continue.
            </span>
          <div className='personal-info-confirmation'>
            <div className='pt-5 pb-5'>
              <Separator className="flex-grow border-t border-gray-300" />
                <p className="mt-3 text-gray-700 flex justify-between items-center">
                  Personal Information
                  <span className="text-right text-[#006ac3] font-smallboldish cursor-pointer hover-card-trigger">Edit</span>
                </p>
            </div>
            <div className='personal-grid grid grid-cols-3 gap-4 '>
              {/* Row 1 */}
              <div>
                <p className='text-gray-900'>
                  Name: <span className='block font-smallboldish text-gray-700'> {formData.firstName} {formData.lastName}</span>
              </p>
              </div>
              <div>
              <p className='text-gray-900'>
                  Date of Birth: <span className='block font-smallboldish text-gray-700'> {formData.dateOfBirth}</span>
              </p>
                </div>
              <div>
                <p className='text-gray-900'>
                  Email Address: <span className='block font-smallboldish text-gray-700'> {formData.email}</span>
              </p>
              </div>
              {/* Row 2 */}
              <div><p className='text-gray-900'>
                  Phone <span className='block font-smallboldish text-gray-700'> {formData.phoneNumber}</span>
              </p></div>
              <div>
                <p className='text-gray-900'>
                  Rent/Mortgage Payments <span className='block font-smallboldish text-gray-700'> </span>
              </p>
              </div>
              <div>
                <p className='text-gray-900'>
                   <span className='block font-smallboldish text-gray-700'>  </span>
              </p>
              </div>
              <div>
                <p className='text-gray-900'>
                  Home Address <span className='block font-smallboldish text-gray-700'> {formData.address} </span>
              </p>
              </div>

            </div>
          </div>

          <div className='employment-info-confirmation text-gray-700'>
            <div className='pt-5 pb-5'>
              <Separator className="flex-grow border-t border-gray-300" />
                <p className="mt-3 text-gray-700 flex justify-between items-center">
                  Employment
                  <span className="text-right text-[#006ac3] font-smallboldish cursor-pointer hover-card-trigger">Edit</span>
                </p>
                </div>
            <div className='personal-grid grid grid-cols-3 gap-4'>
              {/* Row 1 */}
              <div>Name: John Doe</div>
              <div>Age: 30</div>
              <div>Country: USA</div>
              
              {/* Row 2 */}
              <div>Email: johndoe@email.com</div>
              <div>Phone: (555) 555-5555</div>
              <div>Address: 123 Main St</div>
            </div>
          </div>

          <div className='other-info-confirmation text-gray-700'>
            <div className='pt-5 pb-5'>
              <Separator className="flex-grow border-t border-gray-300" />
                <p className="mt-3 text-gray-700 flex justify-between items-center">
                  Other
                  <span className="text-right text-[#006ac3] font-smallboldish cursor-pointer hover-card-trigger">Edit</span>
                </p>
                </div>
            <div className='personal-grid grid grid-cols-3 gap-4'>
              {/* Row 1 */}
              <div>Name: John Doe</div>
              <div>Age: 30</div>
              <div>Country: USA</div>
              
              {/* Row 2 */}
              <div>Email: johndoe@email.com</div>
              <div>Phone: (555) 555-5555</div>
              <div>Address: 123 Main St</div>
            </div>
          </div>

          <div className='pt-5'>
          <Separator className="flex-grow border-t border-gray-300" />
            <p className="mt-10 font-subbed text-gray-700">
            By selecting 'Continue', I confirm that the information provided is accurate and complete to the best of my knowledge, and I acknowledge that I have reviewed and agree to the terms and conditions, as well as the privacy policy.            </p>
          </div>
          </div>

          <div className="flex flex-col gap-2 mt-3">
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
      </div>
    </div>
  );
};

export default Step8;
