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

type StepKey = 's1' | 's2' | 's3' | 's4' | 's5';

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
    s5: { on: { BACK: 's4' } },
    redirect: { type: 'final' }, // Example of a redirect state (sign-in)
  },
});

const CardForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cardId = searchParams.get('id');
  const card = cardId ? cardsArray[cardId] : null;

  // 2. Use the state machine with useMachine
  const [current, send, service] = useMachine(formMachine);
  const [formData, setFormData] = useState({}); // Local state to store form data

  const handleNextStep = () => send({ type:'NEXT'});
  const handlePreviousStep = () => send({ type:'BACK'});
  const handleSigninRedirect = () => send({ type: 'REDIRECT' });

  // 3. Map steps to state machine states
  const steps = {
    s1: <S1 onClick={handleNextStep} card={card} />,
    s2: <S2 onClick={handleNextStep} onRedirect={handleSigninRedirect} />,
    s3: <S3 onClick={handleNextStep} onBack={handlePreviousStep} card={card} />,
    s4: <S4 onClick={handleNextStep} onBack={handlePreviousStep} type={type} formData={formData} setFormData={setFormData} />,
    s5: <S5 onClick={handleNextStep} formData={formData} setFormData={setFormData} />,
  };

  // Ensure current.value is treated as a StepKey
  const currentStepKey = current.value as StepKey;
  const totalSteps = Object.keys(steps).length;
  const currentStepIndex = Object.keys(steps).indexOf(currentStepKey) + 1;
  const progress = ((currentStepIndex - 1) / (totalSteps - 1)) * 100;

  return (
    <section className='w-full h-full'>
      <div className="absolute top-[60px] left-0 w-full bg-gray-200">
        <ProgressLoad progress={progress} />
      </div>
      <section className="card-form mx-auto">
        {steps[currentStepKey]}
      </section>
    </section>
  );
};
export default CardForm;
