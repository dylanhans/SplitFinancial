'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { z } from "zod"
import { TailSpin } from 'react-loader-spinner'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput'
import { authformSchema } from '@/lib/utils'
import { Control } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'
import PlaidLink from './PlaidLink'
import { Separator } from '@radix-ui/react-separator'
import AuthFormCredit from './AuthFormCredit';


const CardForm = ({type}:{type: string}) => {
    const router = useRouter();
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [isTestAccount, setIsTestAccount] = useState(false);
    const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false); // Track sign-up success
    const [isFormVisible, setIsFormVisible] = useState(false); // State for form visibility

    const handleGetStartedClick = () => {
        setIsFormVisible(true); // Show the form when "Get started" is clicked
      };

    const handleGetStartedClickBack = () => {
        setIsFormVisible(false); // Show the form when "Get started" is clicked
    };


    const formSchema = authformSchema(type);

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
      

  return (
    <section className="auth-form max-w-lg mx-auto">
    <header className="flex flex-col gap-5 md:gap-8 mt-10">
      {/* Conditionally render the "main class" div */}
    <div className={`transition-all duration-300 ${
          !isFormVisible ? 'slide-up-enter slide-up-enter-active' : 'slide-up-exit slide-up-exit-active'
        }`}>
      {!isFormVisible && (
        <div className="main class">
          <div className="flex ml-1 flex-col gap-1 md:gap-3">
            <h1 className="font-title text-gray-900">
              It's easy to apply! Get a response in less than 60 seconds.
              <p className="font-subtitle mt-1 text-gray-600">
                "You've chosen…"
              </p>
            </h1>
            <h1 className="font-title text-gray-900">
              RBC Cash Back Mastercard
            </h1>
          </div>
          <Button type="submit" onClick={handleGetStartedClick} className="form-btn mt-2">
            Get started
          </Button>
        </div>
      )}
    </div>
    </header>
    <div
        className={`transition-all duration-300 ${
          isFormVisible ? 'slide-down-enter slide-down-enter-active' : 'slide-down-exit slide-down-exit-active'
        }`}
      >
        {isFormVisible && ( // Conditionally render the form
        <>
                <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pl-1 pr-1 max-h-[600px] overflow-y-auto hide-scrollbar">
            
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

            {/* {type==='sign-up' && (
            <>
            <div className="flex items-center justify-center space-x-2">
                <Checkbox id="terms" required/>
                <label htmlFor="terms" className="cursor-pointer text-12">
                    Accept <span className="cursor-pointer text-bankGradient hover-card-trigger text-12">terms and conditions</span>
                </label>
            </div>
            </>
            )} */}
            <div className=" flex flex-col gap-2">
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
            </div>
        </form>
        </Form>

        {/* <footer className="flex justify-center gap-1 flex-col">
                 <p className="text-14 ml-1 font-normal text-gray-600">
                    {type==='sign-in'
                        ? "Don't have an account?"
                        : "Already have an account?"
                    }
                <span> <Link href={type==='sign-in' ? '/options'
                : '/sign-in'} className="form-link">
                    {type==='sign-in' ? 'Apply'
                    : 'Sign in'}
                </Link>
                </span>
                </p>

                
                <p className="text-14 ml-1 mt-1 font-normal hover-card-trigger text-bankGradient cursor-pointer">
                    {type==='sign-in'
                        ? <>
                        <Link href="/options">
                        <p>Enrol in Online Banking</p>
                        </Link>
                         </>
                        : ""
                    }
                </p>

                <p className="text-14 ml-1 font-normal mt-1 hover-card-trigger text-bankGradient cursor-pointer">
                    {type==='sign-in'
                        ? <>
                        <p>Recover an Account</p>
                         </>
                        : ""
                    }
                </p>
                s
        </footer> */}
        {isFormVisible && (
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={handleGetStartedClickBack}
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
                  d="M15 8a.5.5 0 0 1-.5.5H4.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L4.707 7.5H14.5A.5.5 0 0 1 15 8z"
                />
              </svg>
              Back
            </button>
          </div>
        )}
            </>
        )}
    </div>
        </section>
  )
}

export default CardForm