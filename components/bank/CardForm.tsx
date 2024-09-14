'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { z } from "zod"
import { TailSpin } from 'react-loader-spinner'
import { zodResolver } from "@hookform/resolvers/zod"
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
import { Loader2, Scale3D } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'
import PlaidLink from './PlaidLink'
import { Separator } from '@radix-ui/react-separator'
import AuthFormCredit from './AuthFormCredit';
import { getNextAppStep} from '@/lib/actions/bank.actions';
import ProgressLoad from './ProgressLoad';
import { cardsArray } from '@/constants';
import { createMachine } from 'xstate';
import { useMachine } from '@xstate/react'
import S1 from '../cardAppSteps/S1';
import S2 from '../cardAppSteps/S2';
import S3 from '../cardAppSteps/S3';
import S4 from '../cardAppSteps/S4';
import S5 from '../cardAppSteps/S5';
import S6 from '../cardAppSteps/S6';
import S7 from '../cardAppSteps/S7';
import S8 from '../cardAppSteps/S8';
import S9 from '../cardAppSteps/S9';



type StepKey = 's1' | 's2' | 's3' | 's4' | 's5' | 's6' | 's7' | 's8' | 's9';

interface Steps {
  [key: string]: JSX.Element;
}

// State Machine
const formMachine = createMachine({
  id: 'form',
  initial: 's1',
  context: { formData: {} }, // Store form data here
  states: {
    s1: { on: { NEXT: 's2' } },
    s2: { on: { NEXT: 's3', REDIRECT: 'redirect' } },
    s3: { on: { NEXT: 's4', BACK: 's2' } },
    s4: {
      on: {
        NEXT: 's5', // Default next step after s4
        UNIQUE: 's5', // If a specific option is selected, move to step 5
        BACK: 's3',
      },
    },
    s5: {
      on: {
        NEXT: 's6', // Default next step after s4
        UNIQUE: 's6', // If a specific option is selected, move to step 5
        BACK: 's4',
      },
    },
    s6: {
      on: {
        NEXT: 's7', // Default next step after s4
        UNIQUE: 's6', // If a specific option is selected, move to step 5
        BACK: 's5',
      },
    },
    s7: {
      on: {
        NEXT: 's8', // Default next step after s4
        UNIQUE: 's6', // If a specific option is selected, move to step 5
        BACK: 's6',
      },
    },
    s8: {
      on: {
        NEXT: 's9', // Default next step after s4
        UNIQUE: 's6', // If a specific option is selected, move to step 5
        BACK: 's7',
      },
    },
    
    s9: { 
      on: { 
        BACK: 's8' } },
    redirect: { type: 'final' }, // Example of a redirect state (sign-in)
  },
});

const CardForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cardId = searchParams.get('id');
  const [isChecked, setIsChecked] = React.useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [furthestStep, setFurthestStep] = useState(1); // Track the furthest step reached
  const card = cardId ? cardsArray[cardId] : null;
  const [formData, setFormData] = useState({}); // Local state to store form data


  // 2. Use the state machine with useMachine
  const [current, send, service] = useMachine(formMachine);

  const handleCancelApplication = () => {
    setIsAlertOpen(true);
  
    // Clear saved form data and step on cancel
    localStorage.removeItem('formData');
    localStorage.removeItem('currentStep');
    localStorage.removeItem('furthestStep');
  };

  const handleCloseDialog = () => {
    setIsAlertOpen(false);
  };

  const handleContinue = () => {
    setIsAlertOpen(false); // Close the dialog
    setIsChecked(true);
    router.push('/options')
    // Handle the continue action here
  };

  const handleCheckedChange = (checked: any) => {
    setIsChecked(checked);
    if (checked) {
      setIsAlertOpen(true);
    }
  };


  const handleNextStep = () => {
    const currentStepIndex = Object.keys(steps).indexOf(current.value as StepKey) + 1;
    
    send({ type: 'NEXT' });
  
    // Save the current step after moving forward
    const nextStepKey = Object.keys(steps)[currentStepIndex];
    localStorage.setItem('currentStep', nextStepKey);
  
    // Update furthest step if moving forward
    if (currentStepIndex >= furthestStep) {
      setFurthestStep(currentStepIndex + 1);
    }
  };

  useEffect(() => {
    if (formData) {
      console.log("Form Data has been updated:", JSON.stringify(formData, null, 2));
    }
  }, [formData]);

  const handlePreviousStep = () => send({ type:'BACK'});
  const handleSigninRedirect = () => send({ type: 'REDIRECT' });


  // Save the current step and formData to localStorage
  useEffect(() => {
    // Save form data
    if (formData) {
      localStorage.setItem('formData', JSON.stringify(formData));
    }

    // Save current step
    localStorage.setItem('currentStep', current.value as string);

    // Save furthest step
    localStorage.setItem('furthestStep', furthestStep.toString());
  }, [formData, current.value, furthestStep]);

  useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    const savedStep = localStorage.getItem('currentStep');
    const savedFurthestStep = localStorage.getItem('furthestStep');
  
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  
    if (savedStep) {
      send({ type: savedStep }); // Navigating back to saved step
      console.log("saved Data: ", savedFormData)
      console.log("saved Step: ", savedStep)
      console.log("saved EndPoint: ", savedFurthestStep)
    }
  
    if (savedFurthestStep) {
      setFurthestStep(parseInt(savedFurthestStep));
    }
  }, [send]);

   


  // Ensure current.value is treated as a StepKey
  const currentStepKey = current.value as StepKey;

  // 3. Map steps to state machine states
  const steps = {
    s1: <S1 onClick={handleNextStep} card={card} />,
    s2: <S2 onClick={handleNextStep} onRedirect={handleSigninRedirect} currentStep={currentStepKey} furthestStep={furthestStep}/>,
    s3: <S3 onClick={handleNextStep} onBack={handlePreviousStep} card={card} currentStep={currentStepKey} furthestStep={furthestStep}/>,
    s4: <S4 onClick={handleNextStep} onBack={handlePreviousStep} type={type} formData={formData} setFormData={setFormData} currentStep={currentStepKey} furthestStep={furthestStep}/>,
    s5: <S5 onClick={handleNextStep} onBack={handlePreviousStep} type={type} formData={formData} setFormData={setFormData} currentStep={currentStepKey} furthestStep={furthestStep}/>,
    s6: <S6 onClick={handleNextStep} onBack={handlePreviousStep} type={type} formData={formData} setFormData={setFormData} currentStep={currentStepKey} furthestStep={furthestStep}/>,
    s7: <S7 onClick={handleNextStep} onBack={handlePreviousStep} type={type} formData={formData} setFormData={setFormData} currentStep={currentStepKey} furthestStep={furthestStep}/>,
    s8: <S8 onClick={handleNextStep} onBack={handlePreviousStep} type={type} formData={formData} setFormData={setFormData} currentStep={currentStepKey} furthestStep={furthestStep}/>,
    s9: <S9 onClick={handleNextStep} onBack={handlePreviousStep} type={type} formData={formData} setFormData={setFormData} currentStep={currentStepKey} furthestStep={furthestStep} />,
  };

  const currentStepIndex = Object.keys(steps).indexOf(currentStepKey) + 1;
  const progress = ((furthestStep - 1) / (Object.keys(steps).length - 1)) * 100;

  return (
    <section className="Card">
      <div className="absolute top-[60px] left-0 w-full bg-gray-200">
        <ProgressLoad progress={progress} />
      </div>
      <section className="card-form mx-auto">
        {steps[currentStepKey]}
         {/* Cancel application and Continue buttons */}
         {currentStepIndex > 2 && currentStepIndex < 4 && (
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

          {currentStepIndex ==  3 && (
            <Button
              type="button"
              onClick={handleNextStep}
              className="form-btnclient2"
            >
              Continue
            </Button>
          )}
          </div>
         )}
      </section>
    </section>
  );
};
export default CardForm;
