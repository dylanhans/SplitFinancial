'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod"
import { TailSpin } from 'react-loader-spinner'
import { Input } from "@/components/ui/input"

import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabsearch"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import { Control } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'
import { Separator } from '@radix-ui/react-separator'
import { getNextAppStep} from '@/lib/actions/bank.actions';
import CustomInput from '../bank/CustomInput';
import ApplicationInput from '../bank/ApplicationInput';
import { appformSchema, provinceOptions, Step5Schema, step5schema, Step6Schema, step6schema, unitTypeOptions } from '@/lib/utils';
import ApplicationPhoneVerify from '../bank/ApplicationPhoneVerify';
import OTPLogin from '../bank/OTPLogin';
import { MapsLoad } from '@/googlecloud';
import { Label } from '@radix-ui/react-label';
import ApplicationInputDropdown from '../bank/ApplicationInput-Dropdown';

interface Step6Props {
  onClick: () => void;
  onBack: () => void;
  type: string;
  formData: appformSchema;
  setFormData: React.Dispatch<React.SetStateAction<appformSchema>>;
}


const Step6: React.FC<Step6Props> = ({ onClick, onBack, type, formData, setFormData }) => {
  const { isLoaded, inputRef, autocompleteRef, handlePlaceChanged } = MapsLoad();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isAutocompleteActive, setIsAutocompleteActive] = useState(true);  // true by default
  const [isManualActive, setIsManualActive] = useState(false);

  // Define form with step-specific schema
  const form = useForm<Step6Schema>({
    resolver: zodResolver(step6schema),
    defaultValues: {
      address: formData.address || '',
      city: formData.city || '',
      province: formData.province || '',
      postalCode: formData.postalCode || '',
      unitNum: formData.unitNum || '',
      address2: formData.address2 || '',
      unitType: formData.unitType || undefined,
      poBox: formData.poBox || '',
      country: 'Canada',
    },
  }); 

  // Define a submit handler.
  const onSubmit: SubmitHandler<Step6Schema> = (data) => {
    try {
      // Destructure only the fields needed for this step
      const { address, city, province, postalCode, unitNum, address2, unitType, poBox, country } = data;
      
      // Update formData with relevant fields
      setFormData((prevData: any) => {
        const applicationData = {
          ...prevData,
          address,
          city,
          province,
          postalCode,
          unitNum,
          address2,
          unitType,
          poBox,
          country,
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


  useEffect(() => {

  }, [isAutocompleteActive, isManualActive]);

  const handleTabClick = (tab: 'autocomplete' | 'manual') => {
    if (tab === 'autocomplete') {
      setIsAutocompleteActive(true);
      setIsManualActive(false);
    } else if (tab === 'manual') {
      setIsAutocompleteActive(false);
      setIsManualActive(true);
    }
  };

  useEffect(() => {
    if (isAutocompleteActive && isLoaded && inputRef.current) {
      const autocomplete = new google.maps.places.Autocomplete(inputRef.current!, {
        types: ['address'], // You can customize the types to your needs
        componentRestrictions: { country: 'ca' }, // Example: restrict to CA
      });
      autocomplete.addListener('place_changed', handlePlaceChanged);
      autocompleteRef.current = autocomplete;

      return () => {
        // Clean up previous autocomplete instance
        if (autocompleteRef.current) {
          google.maps.event.clearInstanceListeners(autocompleteRef.current);
          autocompleteRef.current = null;
        }
      };
    }
  }, [isAutocompleteActive, isLoaded]);


  return (
    <div className="transition-all duration-500 slide-down-enter slide-down-enter-active">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pl-1 pr-1 h-full pt-40 overflow-y-auto hide-scrollbar">
          <Tabs defaultValue="autocomplete" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="autocomplete"
              onClick={() => handleTabClick("autocomplete")}
              className={` ${
                isAutocompleteActive ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              Address
            </TabsTrigger>
            <TabsTrigger
              value="manual"
              onClick={() => handleTabClick("manual")}
              className={`${
                isManualActive ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              Enter manually
            </TabsTrigger>
          </TabsList>
      <TabsContent value="autocomplete">
        <Card>
          <CardContent className="p-4 space-y-4">
          {isLoaded && (
          <div className="autocomplete-container w-full flex">
            <input
              ref={inputRef}
              placeholder="Enter your specific address"
              className="autocomplete-input w-full"
            />
          </div>
          )}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="manual">
        <Card>
          <CardContent className="p-4 space-y-6">
             {/* Grid layout for Address, City, Province, Postal Code, and Unit Number */}
      {/* Address and City in the same row */}
      <div className="grid">
        <ApplicationInput 
          control={form.control}
          name="address"
          label="Home Address"
          placeholder="72 Newmarket Drive"
          id="address"
          className="flex-1" // Ensures that the input takes available space
        />
      </div>

      <div className="grid">
        <ApplicationInput 
          control={form.control}
          name="address2"
          label="Home Address 2 (optional)"
          placeholder="RR 4"
          id="address2"
          className="flex-1" // Ensures that the input takes available space
        />
        
      </div>

      <div className="grid grid-cols-2 gap-6">

        <ApplicationInput 
          control={form.control}
          name="unitNum"
          label="Unit number (optional)"
          placeholder=""
          id="unitNum"
          className="flex-1" // Ensures that the input takes available space
        />

        <ApplicationInputDropdown 
          control={form.control}
          name="unitType"
          label="Unit type (optional)"
          placeholder=""
          id="unitType"
          options={unitTypeOptions}
          className="flex-1" // Ensures that the input takes available space
        />
      </div>


      {/* Province and Postal Code in the same row */}
      <div className="grid grid-cols-2 gap-6">

      < ApplicationInput 
          control={form.control}
          name="city"
          label="City"
          placeholder="Enter your city"
          id="city"
          className="flex-1" // Ensures that the input takes available space
        />

        <ApplicationInputDropdown
          control={form.control}
          name="province"
          label="Province"
          placeholder=""
          id="province"
          options={provinceOptions}
          className="flex-1" // Ensures that the input takes available space
        />
        
      </div>
      <div className="grid grid-cols-2 gap-6">
        <ApplicationInput 
            control={form.control}
            name="postalCode"
            label="Postal Code"
            placeholder="L7K 0B5"
            id="postalCode"
            className="flex-1" // Ensures that the input takes available space
          />

          <ApplicationInput 
            control={form.control}
            name="country"
            label="Country"
            placeholder=""
            id="country"
            className="flex-1" // Ensures that the input takes available space
            readOnly // Makes the field read-only
          />
      </div>

      {/* Unit Number on its own row */}
      <div className="grid grid-cols-2 gap-6">
        <ApplicationInput 
          control={form.control}
          name="poBox"
          label="P.O. Box (optional)"
          placeholder=""
          id="poBox"
          className="flex-1" // Ensures that the input takes available space
        />
      </div>

          </CardContent>
          
        </Card>
      </TabsContent>
    </Tabs>

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
    </div>
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

export default Step6;

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
            