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


const AuthForm = ({type}:{type: string}) => {
    const router = useRouter();
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [isTestAccount, setIsTestAccount] = useState(false);


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
                }
                const newUser = await signUp(userData);

                setUser(newUser);
                    
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
      
        const handleCheckboxChange = (checked) => {
            setIsTestAccount(checked);
        
            if (checked) {
              form.setValue("email", "neisha.hans1@gmail.com");
              form.setValue("password", "Wonderland1");
            } else {
              form.setValue("email", "");
              form.setValue("password", "");
            }
          };

  return (
    <section className="auth-form max-w-lg mx-auto">
        <header className="flex flex-col gap-5 md:gap-8">
            {/*<Link href="/" className="cursor-pointer flex items-center gap-1">
            <Image
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt="Split logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Split</h1>
            </Link>*/}
            {/* text-24 lg:text-30 */}
            <div className="flex ml-1 flex-col gap-1 md:gap-3">
                <h1 className="font-title text-gray-900">
                    {user
                    ? 'Link Account'
                    : type==='sign-in'
                        ? 'Sign In'
                        : 'Sign Up'
                    }
                    <p className="font-subtitle mt-1 text-gray-600">
                    {user
                        ? 'Link your account to get started'
                        : type === 'sign-in'
                            ? 'Enter your banking details below'
                            : "Let's get started with an application"
                        }
                    </p>
                </h1>
            </div>
        </header>
        {user ? (
            <div className="flex flex-col gap-4">
                {/*Plaid Link*/}
               <PlaidLink user={user} variant="primary"/>
            </div>
        ): (
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

        <footer className="flex justify-center gap-1 flex-col">
                <p className="text-14 ml-1 font-normal text-gray-600">
                    {type==='sign-in'
                        ? "Don't have an account?"
                        : "Already have an account?"
                    }
                <span> <Link href={type==='sign-in' ? '/sign-up'
                : '/sign-in'} className="form-link">
                    {type==='sign-in' ? 'Sign up'
                    : 'Sign in'}
                </Link>
                </span>
                </p>
                
                <p className="text-14 mt-1 ml-1 font-normal hover-card-trigger text-bankGradient cursor-pointer">
                    {type==='sign-in'
                        ? "Recover an Account "
                        : ""
                    }
                </p>
                
                <div className={`bottom-spacing ${type === 'sign-in' ? 'mt-40' : ''}`}>


                </div>
                {type==='sign-in' && (
            <>
            <div className="flex ml-1 mt-1.5 space-x-2">
                <Checkbox
                  id="terms"
                  onCheckedChange={handleCheckboxChange}
                />
                <label
                  htmlFor="terms"
                  className="font-smallboldish balance-text-small text-gray-600"
                >
                  Test Account
                </label>
              </div>

            </>
            )}
                <Separator className="flex-grow border-t border-gray-300 mt-4" /> {/* Line with full width */}
                <div className="tradecopyright ml-1 flex-col">
                    <p className="text-12 mt-4 font-normal text-gray-600">
                    SFS Online Banking is provided by Split Financial Services.
                    </p>
                    <p className="text-12 mt-1 font-normal text-gray-600">
                    Split Financial Services Website, © 2023-2024
                    </p>
                <div className="mt-5"> 
                    <div className="text-12 mt-5 flex items-center space-x-4 font-normal text-bankGradient">
                        <p className="cursor-pointer hover-card-trigger flex items-center">
                            Legal
                            <span className="ml-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-external-link">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                    <path d="M11 13l9 -9" />
                                    <path d="M15 4h5v5" />
                                </svg>
                            </span>
                        </p> 
                        <p className="cursor-pointer hover-card-trigger flex items-center">
                            Accessibility
                            <span className="ml-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-external-link">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                    <path d="M11 13l9 -9" />
                                    <path d="M15 4h5v5" />
                                </svg>
                            </span>
                        </p> 
                        <p className="cursor-pointer hover-card-trigger flex items-center">
                            Privacy & Security
                            <span className="ml-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-external-link">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                    <path d="M11 13l9 -9" />
                                    <path d="M15 4h5v5" />
                                </svg>
                            </span>
                        </p> 
                    </div>

                    <p className="text-12 mt-1 flex font-normal text-bankGradient">
                        Advertising & Cookies 
                    </p>
                </div>

                </div>
        </footer>
            </>
        )}
        </section>
  )
}

export default AuthForm