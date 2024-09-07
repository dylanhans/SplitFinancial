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
import { Control } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'
import { Separator } from '@radix-ui/react-separator'
import { getNextAppStep} from '@/lib/actions/bank.actions';
import CustomInput from '../bank/CustomInput';
import ApplicationInput from '../bank/ApplicationInput';
import { appformSchema, Step5Schema, step5schema, Step6Schema, step6schema } from '@/lib/utils';
import ApplicationPhoneVerify from '../bank/ApplicationPhoneVerify';
import OTPLogin from '../bank/OTPLogin';

interface Step6Props {
  onClick: () => void;
  onBack: () => void;
  type: string;
  formData: appformSchema;
  setFormData: React.Dispatch<React.SetStateAction<appformSchema>>;
}


const Step5: React.FC<Step6Props> = ({ onClick, onBack, type, formData, setFormData }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Define form with step-specific schema
  const form = useForm<Step6Schema>({
    resolver: zodResolver(step6schema),
    defaultValues: {
      phoneNumber: formData.phoneNumber,
      code: formData.code || undefined,
    },
  }); 

  // Define a submit handler.
  const onSubmit: SubmitHandler<Step6Schema> = (data) => {
    try {
      // Destructure only the fields needed for this step
      const { code } = data;
      
      // Update formData with relevant fields
      setFormData((prevData: any) => {
        const applicationData = {
          ...prevData,
          code,
        };
        
        // Log the updated formData
        console.log("Updated Form Data:", applicationData);
        
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
  };

  const handleContinue = () => {
    setIsAlertOpen(false); // Close the dialog
    router.push('/options');
  };

  const handleCloseDialog = () => {
    setIsAlertOpen(false);
  };

  return (
    <div className="transition-all duration-500 slide-down-enter slide-down-enter-active">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pl-1 pr-1 max-h-[700px] overflow-y-auto hide-scrollbar">
          <div className="flex col gap-4">
              {/* <ApplicationPhoneVerify
                control={form.control}
                name="code"
                label="Code"
                placeholder="Code"
                id="code"
                /> */}
              <OTPLogin 
              
              />
            <div>
            <Button type="submit" className="form-btn mt-10">
              Continue
            </Button>
            </div>
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

        <button
          type="button"
          onClick={handleCancelApplication}
          className="text-[#006ac3] mt-10"
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
              <AlertDialogCancel onClick={handleCloseDialog}>No, take me back</AlertDialogCancel>
              <AlertDialogAction onClick={handleContinue}>Yes, I am sure</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
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
            