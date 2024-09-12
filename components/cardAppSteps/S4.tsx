'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod"
import { TailSpin } from 'react-loader-spinner'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
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
import { Input } from "@/components/ui/input"
// import { authformSchema } from '@/lib/utils'
import { Control } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'
import { Separator } from '@radix-ui/react-separator'
import { getNextAppStep} from '@/lib/actions/bank.actions';
import CustomInput from '../bank/CustomInput';
import ApplicationInput from '../bank/ApplicationInput';
import { appformSchema, Step4Schema, step4schema, titleOptions } from '@/lib/utils';
import ApplicationInputDropdown from '../bank/ApplicationInput-Dropdown';
import ApplicationInputInfo from '../bank/ApplicationInput-Info';
import ApplicationInputdob from '../bank/ApplicationInput-dob';

interface Step4Props {
  onClick: () => void;
  onBack: () => void;
  type: string;
  formData: appformSchema;
  setFormData: React.Dispatch<React.SetStateAction<appformSchema>>;
  currentStep: string;    // Add currentStep prop
  furthestStep: number;   // Add furthestStep pro
}

const Step4: React.FC<Step4Props> = ({ onClick, onBack, type, formData, setFormData, currentStep, furthestStep }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // Define form with step-specific schema
  const form = useForm<Step4Schema>({
    resolver: zodResolver(step4schema),
    defaultValues: {
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      ssn: formData.ssn || '',
      referTitle: formData.referTitle || undefined, // use undefined for no selection
      middleName: formData.middleName || '',
      dateOfBirth: formData.dateOfBirth || '',
    },
  });

  // Define a submit handler.
  const onSubmit: SubmitHandler<Step4Schema> = (data) => {
    try {
      // Destructure only the fields needed for this step
      const { firstName, lastName, ssn, referTitle, middleName, dateOfBirth } = data;
      
      // Update formData with relevant fields
      setFormData((prevData: any) => {
        const applicationData = {
          ...prevData,
          firstName,
          lastName,
          ssn,
          referTitle,
          middleName,
          dateOfBirth,
        };
        
        // Log the updated formData
        // console.log("Current Form Data:", applicationData);
        localStorage.setItem('formData', JSON.stringify(applicationData));
        localStorage.setItem('currentStep', currentStep);  // Use currentStep prop
        localStorage.setItem('furthestStep', furthestStep.toString()); // Use furthestStep prop

        
        return applicationData;
      });

      onClick();
      // console.log("Form Data:", { firstName, lastName });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelApplication = () => {
    setIsAlertOpen(true);
  
    // Clear saved form data and step on cancel
    localStorage.removeItem('formData');
    localStorage.removeItem('currentStep');
    localStorage.removeItem('furthestStep');
  };

  const handleContinue = () => {
    setIsAlertOpen(false); // Close the dialog
    setIsChecked(true);
    router.push('/options');
  };

  const handleCloseDialog = () => {
    setIsAlertOpen(false);
  };

  return (
    <div className="transition-all duration-500 slide-down-enter slide-down-enter-active">
      <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pl-1 pr-1 max-h-[700px] overflow-y-auto hide-scrollbar">
    
    <div className="grid grid-cols-2 gap-4">
      {/* ReferTitle and Middle Name */}
        <ApplicationInputDropdown
          control={form.control}
          name="referTitle"
          label="Title (optional)"
          placeholder="Select"
          id="referTitle"
          options={titleOptions}
          className="w-full"
        />
        <ApplicationInputInfo
          control={form.control}
          name="middleName"
          label="Middle Name (optional)"
          placeholder=""
          id="middleName"
          className="w-full"
          tooltip="While adding your middle name is optional, providing it may help us verify your identity and differentiate you from customers with a similar name."
        />
      </div>

      {/* First Name and Last Name */}
      <div className="grid grid-cols-2 gap-4">
        <ApplicationInputInfo
            control={form.control}
            name="firstName"
            label="First Name"
            placeholder="Jane"
            id="firstName"
            className="w-full"
            tooltip="Enter your legal first name only as it appears on your government issued ID. This helps us find your information quickly and verify your identity."
          />
        <ApplicationInputInfo
          control={form.control}
          name="lastName"
          label="Last Name"
          placeholder="Smith"
          id="lastName"
          className="w-full"
          tooltip="Enter your legal last name only as it appears on your government issued ID. This helps us find your information quickly and verify your identity."
        />
      </div>

      {/* SSN and Date of Birth */}
      <div className="grid grid-cols-2 gap-4">
      <ApplicationInputInfo
          control={form.control}
          name="ssn"
          label="Social Insurance Number"
          placeholder=""
          id="ssn"
          className="w-full"
          tooltip="Providing your Social Insurance Number (SIN) is optional. If you provide your SIN, we may use it as an aid to verify your identity with external providers and keep your information separate from customers with a similar name."
        />
        <ApplicationInput
          control={form.control}
          name="dateOfBirth"
          label="Date of Birth"
          placeholder="YYYY-MM-DD"
          id="dob"
          className="w-full"
        />
      </div>

    {/* Cancel Application and Continue Button */}
    <div className="cancel-app flex justify-between items-center w-full mt-10">
      <button
        type="button"
        onClick={handleCancelApplication}
        className="text-[#006ac3] hover:text-blue-800"
      >
        Cancel Application
      </button>

      {/* Confirmation dialog */}
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

      <Button
        type="submit"
        className="form-btnclient2"
      >
        Continue
      </Button>
    </div>
  </form>
</Form>



      <div className="flex flex-col gap-2">
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
    </div>
  );
};

export default Step4;

// / 2. Define a submit handler.
        // const onSubmit = async (data: z.infer<typeof formSchema>)=>{
        //   // Do something with the form values.
        //   // This will be type-safe and validated.
        //   setIsLoading(true);
        //   try {
        //     // Sign up with Appwrite & create plain link token
            
        //         const userData = {
        //             firstName: data.firstName!,
        //             lastName: data.lastName!,
        //             address1: data.address1!,
        //             city: data.city!, 
        //             state: data.state!,
        //             postalCode: data.postalCode!,
        //             dateOfBirth: data.dateOfBirth!,
        //             ssn: data.ssn!,
        //             email: data.email ,
        //             password: data.password,
        //             };
        //             // const newUser = await signUp(userData);
        //             // setUser(newUser);
        //             // setIsSignUpSuccessful(true); // Mark sign-up as successful
        //         }
            