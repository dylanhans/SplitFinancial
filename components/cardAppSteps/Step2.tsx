'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
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
import { authformSchema } from '@/lib/utils'
import { Control } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'
import { Separator } from '@radix-ui/react-separator'
import { getNextAppStep} from '@/lib/actions/bank.actions';
import CustomInput from '../bank/CustomInput';


const Step2: React.FC<Step2Props> = ({ onClick, onBack, type }) => {
  const router = useRouter();
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false); // Track sign-up success
    const [currentStep, setCurrentStep] = useState(1); // Starts with the first step
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [isChecked, setIsChecked] = React.useState(false);
    const completedSteps: string[] = [];
  const formSchema = authformSchema(type);

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

    // 1. Define form.
        const form = useForm<z.infer<typeof formSchema>>({
          resolver: zodResolver(formSchema),
          defaultValues: {
            email: "",
            password: "",
          },
        })


      
        // 2. Define a submit handler.
        const onSubmit = async (data: z.infer<typeof formSchema>)=>{
          // Do something with the form values.
          // This will be type-safe and validated.
          setIsLoading(true);
          try {
            // Sign up with Appwrite & create plain link token
            
            if(type==='sign-up'){
                const userData = {
                    firstName: data.firstName!,
                    lastName: data.lastName!,
                    address1: data.address1!,
                    city: data.city!, 
                    state: data.state!,
                    postalCode: data.postalCode!,
                    dateOfBirth: data.dateOfBirth!,
                    ssn: data.ssn!,
                    email: data.email ,
                    password: data.password,
                    };
                    const newUser = await signUp(userData);
                    setUser(newUser);
                    setIsSignUpSuccessful(true); // Mark sign-up as successful
                }
            

            if(type==='sign-in'){
                const response = await signIn({
                    email:  data.email,
                    password: data.password,
                })
                if(response) router.push('/')
            } 

          } catch (error) {
            console.log(error);
          } finally {
            setIsLoading(false);
          }

        }

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
    <div
        className={`transition-all duration-500 slide-down-enter slide-down-enter-active`}
          // currentAppStep2 ? '' : 'slide-down-exit slide-down-exit-active'
      >
        <>
                <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pl-1 pr-1 max-h-[700px] overflow-y-auto hide-scrollbar">
            
            {type==='sign-up' && (
                <>
                    <div className="flex gap-4">
                    <CustomInput 
                        control={form.control}
                        name="firstName"
                        label="First Name"
                        placeholder="Jane"
                    />
                    <CustomInput 
                        control={form.control}
                        name="lastName"
                        label="Last Name"
                        placeholder="Smith"
                    />
                    </div>
                    
                    <CustomInput 
                        control={form.control}
                        name="address1"
                        label="Address"
                        placeholder="Enter your specific address"
                    />
                    <CustomInput 
                        control={form.control}
                        name="city"
                        label="City"
                        placeholder="Enter your city"
                    />
                     <div className="flex gap-4">
                    <CustomInput 
                        control={form.control}
                        name="state"
                        label="State"
                        placeholder="NY"
                    />
                    <CustomInput 
                        control={form.control}
                        name="postalCode"
                        label="Postal Code"
                        placeholder="12345"
                    />
                    </div>
                    <div className="flex gap-4">
                     <CustomInput 
                        control={form.control}
                        name="dateOfBirth"
                        label="Date of Birth"
                        placeholder="YYYY-MM-DD"
                    />
                     <CustomInput 
                        control={form.control}
                        name="ssn"
                        label="SSN"
                        placeholder="1234"
                    />
                    </div>
                </>
            )}

            <CustomInput
                control={form.control}
                name="email"
                label={type === "sign-up" ? "Email" : "Client Card or Email"}
                placeholder="Enter your email"
              />

              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />

        </form>
        </Form>

        
        <>
          <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={onBack}
                  className="bg-white text-[#0060b1] pt-1 pb-1 font-smallboldish balance-text-16 hover:text-[#0061b1cd] mt-2 flex items-center gap-2">
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
                      d="M15 8a.5.5 0 0 1-.5.5H4.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L4.707 7.5H14.5A.5.5 0 0 1 15 8z" />
                  </svg>
                  Back
                </button>
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

                    <Button type="submit" className="form-btn mt-2" disabled={isLoading}>
                        {isLoading ?(
                            <>
                                <Loader2 size={20} 
                                className="animate-spin" /> &nbsp;
                                Loading...
                            </>
                        ):type==="sign-in"
                        ? 'Next' : 'Continue'}
                    </Button>

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
            </>
            </>
    </div>
  )
}

export default Step2