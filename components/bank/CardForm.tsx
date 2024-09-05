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
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput'
import { authformSchema } from '@/lib/utils'
import { Control } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'
import PlaidLink from './PlaidLink'
import { Separator } from '@radix-ui/react-separator'
import AuthFormCredit from './AuthFormCredit';
import { getNextAppStep} from '@/lib/actions/bank.actions';
import Step1 from '../cardAppSteps/Step1';
import Step2 from '../cardAppSteps/Step2';
import Step3 from '../cardAppSteps/Step3';
import Step4 from '../cardAppSteps/Step4';
import ProgressLoad from './ProgressLoad';
import Step5 from '../cardAppSteps/Step5';
import { cardsArray } from '@/constants';


const CardForm = ({type}:{type: string}) => {
    const router = useRouter();
    const [user, setUser] = useState(null)
    const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false); // Track sign-up success
    const [currentStep, setCurrentStep] = useState(1); // Starts with the first step
    const completedSteps: string[] = [];
    const searchParams = useSearchParams();
  
    const cardId = searchParams.get('id');
    // Retrieve the card details using the 'id'
    const card = cardId ? cardsArray[cardId] : null;

  // const handleNextStep = async (currStep: string, completedSteps: string[]) => {
  //   try {
  //     // Save info/state/check input
  //     // For example, update state or save the current step
  
  //     //* Load responses into the application validation system
  //     // For example, validate the current form data
  
  //     // Set form step to increment by one
  //     const step = await getNextAppStep({currStep, completedSteps});
  
  //     // Store step value in data structure for navigation
  //     // For example, update navigation state or history
  //     return step;
  //   } catch (error) {
  //     console.error("An error occurred while handling the next step:", error);

  //   }
  // };
  

  const handleNextStep = () => {
    setCurrentStep((prevStep) => {
      const nextStep = prevStep + 1;
      return nextStep <= steps.length ? nextStep : prevStep; // Prevents going beyond the last step
    });
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1)); // Ensures the step doesn't go below 1
  };

  const handleSigninRedirect = () => {
    router.push('/sign-in');
  };


    const steps = [
      { id: 1, component: <Step1 onClick={handleNextStep} card={card}/> },
      { id: 2, component: <Step3 onClick={handleNextStep} onRedirect={handleSigninRedirect}/> },
      { id: 4, component: <Step2 onClick={handleNextStep} onBack={handlePreviousStep} type={type}/> },
      { id: 3, component: <Step4 onClick={handleNextStep} onBack={handlePreviousStep} card={card}/> },
      { id: 5, component: <Step5 onClick={handleNextStep} onBack={handlePreviousStep} /> },

      // Add more steps as needed
    ];
  
  // Calculate progress based on the current step
  const totalSteps = steps.length;
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;


  return (
    <section className='w-full h-full'>
      <div className="absolute top-[60px] left-0 w-full bg-gray-200">
              <ProgressLoad progress={progress}          />
      </div>
        <section className="card-form mx-auto">
          {steps.map(step => (
          step.id === currentStep && step.component
          ))}    
          
        </section>
   </section>
  )
}

export default CardForm