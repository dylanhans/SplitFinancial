'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod"
import { TailSpin } from 'react-loader-spinner'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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
import { appformSchema, Step5Schema, step5schema } from '@/lib/utils';
import ApplicationInputPhone from '../bank/ApplicationInput-Phone';
import OTPLogin from '../bank/OTPLogin';
import ApplicationInputInfo from '../bank/ApplicationInput-Info';

interface Step5Props {
  onClick: () => void;
  onBack: () => void;
  type: string;
  formData: appformSchema;
  setFormData: React.Dispatch<React.SetStateAction<appformSchema>>;
}


const Step5: React.FC<Step5Props> = ({ onClick, onBack, type, formData, setFormData }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [otpStatus, setOtpStatus] = useState(false);

  const handleOtpStatus = () => {
    // Handle the status passed from OtpLogin
    setOtpStatus(true);
  };

  // Define form with step-specific schema
  const form = useForm<Step5Schema>({
    resolver: zodResolver(step5schema),
    defaultValues: {
      phoneNumber: formData.phoneNumber || '',
      email: formData.email || '',
      phoneType: formData.phoneType || 'mobile'
    },
  });

  // Define a submit handler.
  const onSubmit: SubmitHandler<Step5Schema> = (data) => {
    try {
      // Destructure only the fields needed for this step
      const { phoneNumber, email, phoneType } = data;
      
      // Update formData with relevant fields
      setFormData((prevData: any) => {
        const applicationData = {
          ...prevData,
          phoneNumber,
          email,
          phoneType,
        };
        
        return applicationData;
      });
      setIsSubmitted(true);

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
      {/* Grid for Phone and Email */}
      <div className="grid">
      <ApplicationInputInfo
          control={form.control}
          name="email"
          label="Email"
          placeholder="Enter your email"
          id="email"
          tooltip="By providing your email address, we will be able to let you know the status of your new account application as well as offer assistance, and send reminders for applications you may not have completed. If your application is approved, then your email will be used in accordance with your credit card agreement. RBC Royal Bank will never use unencrypted, regular email to ask for confidential information like your account number, PIN or password."
        />

      </div>
       <div className="grid grid-cols-2 gap-6">

       <ApplicationInputPhone
          control={form.control}
          name="phoneNumber" // Ensure this matches the field name in your schema
          label="Phone"
          id="phoneNumber"
          otpStatus={otpStatus} // Pass otpStatus as a prop
        />

          <RadioGroup
            value={form.watch('phoneType')} // Use form.watch to reflect the current value
            onValueChange={(value: "mobile" | "landline") => {
              form.setValue('phoneType', value); // Correctly update phoneType
            }}
            className="flex space-x-4 pt-5"
          >
          <div className="flex items-center align-center space-x-2">
            <RadioGroupItem value="mobile" id="mobile" />
            <Label htmlFor="mobile" className='font-bolder'>Mobile</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="landline" id="landline" />
            <Label htmlFor="landline" className='font-bolder'>Landline</Label>
          </div>
        </RadioGroup>

      </div>
      {isSubmitted && (
        <div className='opt-login'>  
          <OTPLogin 
            phoneNum={form.getValues("phoneNumber")} // Pass the phoneNumber from the form state
            onClick={onClick}
            otpStatus={handleOtpStatus}
          />
        </div> 
      )}

      {/* Cancel Application and Continue Button */}
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
          className="form-btnclient2"
        >
          Continue
        </Button>

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

export default Step5;

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
            