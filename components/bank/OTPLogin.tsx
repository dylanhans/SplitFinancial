'use client'
import React, { FormEvent, useEffect, useState, useTransition } from 'react'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
  import { useRouter } from 'next/navigation'
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
import { ConfirmationResult, getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { z } from 'zod'
import { auth } from '@/firebase'

interface OtpLoginProps {
    phoneNum: string;  // phoneNum will be a string based on the schema
    onClick: () => void;
    otpStatus: () => void;
  }
  
  const OtpLogin: React.FC<OtpLoginProps> = ({ onClick, phoneNum, otpStatus }) => {
    const router = useRouter();
    const [otp, setOtp] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    // const [success, setSuccess] = useState("");
    const [resendCountdown, setResendCountdown] = useState(0);
    const [recaptchaVerifier, setRecaptchaVerifier] = useState<RecaptchaVerifier | null>(null);
    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
    const [isPending, startTransition] = useTransition();

    const handlePhoneNumber = (phoneNum: string): string => {
      try {
        const cleanedPhoneNum = phoneNum
          .replace(/\s+/g, '')  // Remove all spaces
          .replace(/-/g, '');   // Remove all dashes
        return cleanedPhoneNum;
      } catch (error) {
        if (error instanceof z.ZodError) {
          console.error("Validation Error:", error.errors);
        } else {
          console.error("Unexpected Error:", error);
        }
        return '';
      }
    };
    
    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (resendCountdown > 0) {
        timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
      }
      return () => clearTimeout(timer);
    }, [resendCountdown]);

    const pNumber = handlePhoneNumber(phoneNum);
  
    const [isRecaptchaInitialized, setIsRecaptchaInitialized] = useState(false);

    // Automatically Initialize RecaptchaVerifier
  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );

    setRecaptchaVerifier(recaptchaVerifier);
    setIsRecaptchaInitialized(true); // Mark verifier as initialized

    return () => {
      recaptchaVerifier.clear();
    };
  }, [auth]);

  // Request OTP after RecaptchaVerifier is initialized
  useEffect(() => {
    if (isRecaptchaInitialized) {
      requestOtp();
    }
  }, [isRecaptchaInitialized]);

    useEffect(() => {
      const hasEnteredAllDigits = otp.length === 6;
      if (hasEnteredAllDigits) {
        verifyOtp();
      } else if (otp.length < 6 && errorMessage) {
        // Clear error message if otp length is less than 6
        setErrorMessage(null);
      }
    }, [otp, errorMessage]);
  
    const verifyOtp = async () => {
      startTransition(async () => {
        setError("");
        if (!confirmationResult) {
          console.log("Please request OTP first.");
          return;
        }
        try {
          const result = await confirmationResult.confirm(otp);
          if (result.user) {
            console.log("Successful");
            setErrorMessage(null);
            onClick();
          }
        } catch (error) {
          console.error(error);
          console.log("Failed to verify OTP. Please check the OTP.");
          setErrorMessage("Invalid code")
        }
      });
    };
  

    const requestOtp = async () => {
      setResendCountdown(60);
      if (!recaptchaVerifier) {
        return setError("RecaptchaVerifier is not initialized.");
      }
      try {
        // console.log('auth:', auth);
        // console.log('pNumber:', pNumber);
        // console.log('recaptchaVerifier:', recaptchaVerifier);
        const result = await signInWithPhoneNumber(auth, pNumber, recaptchaVerifier);
        otpStatus();
        setConfirmationResult(result);
        // setSuccess("OTP sent successfully.");
      } catch (err: any) {
        console.error(err);
        setResendCountdown(0);
        if (err.code === "auth/invalid-phone-number") {
          console.log("Invalid phone number. Please check the number.");
        } else if (err.code === "auth/too-many-requests") {
          console.log("Too many requests. Please try again later.");
        }else if (err.code === "auth/invalid-app-credential") {
          console.log("Invalid App Credential. Please try again later.");
        } else {
          console.log("Failed to send OTP. Please try again.");
        }
      }
    };
  
    // const loadingIndicator = (
    //   <div role="status" className="flex justify-center">
    //     {/* Loading spinner */}
    //   </div>
    // );
  
    return (
      <div className='verify flex justify-center items-center w-full'>
  {confirmationResult && (
    <div className="otp-logged flex flex-col justify-center items-center shadow-sm rounded-sm p-4">
      <div className="conresult text-center">
  <p className="font-smallboldish text-[13px]">
    Verify mobile number
  </p>
  <p className="mb-4 font-smallboldish text-[13px]">
    Enter the 6-digit code we sent to {phoneNum}
  </p>

  {/* Center the OTP input and error message within the same container */}
  <div className="flex flex-col items-center">
    {/* OTP input */}
    <div className="flex justify-center w-72">
      <InputOTP className="flex gap-2 justify-center items-center" maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
        <InputOTPGroup className="flex gap-2">
          <InputOTPSlot className="border-b-2 border-gray-300 text-center w-12 h-12" index={0} />
          <InputOTPSlot className="border-b-2 border-gray-300 text-center w-12 h-12" index={1} />
          <InputOTPSlot className="border-b-2 border-gray-300 text-center w-12 h-12" index={2} />
          <InputOTPSlot className="border-b-2 border-gray-300 text-center w-12 h-12" index={3} />
          <InputOTPSlot className="border-b-2 border-gray-300 text-center w-12 h-12" index={4} />
          <InputOTPSlot className="border-b-2 border-gray-300 text-center w-12 h-12" index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>

    {/* Error message aligned to the left with the same width */}
    <div className="w-80 p-1 text-red-500 text-xs text-left">
      {errorMessage && (
        <span>{errorMessage}</span>
      )}
    </div>

    <div className=' w-full flex flex-col text-left'>
      <p className="text-md font-smallboldish text-[13px]">
        Code sent to phone
      </p>
      <p className='text-xs font-smallboldish text-[13px]'>
        You should get a code within 20 seconds.
      </p>
    </div>
  </div>
</div>


      <p className="mt-5 text-center text-xs text-gray-400">
        {resendCountdown > 0 ? (
          `Resend code in 00:${String(resendCountdown).padStart(2, '0')}`
        ) : (
          <button 
            className="" 
            onClick={requestOtp} 
            disabled={resendCountdown > 0}
          >
            Resend code
          </button>
        )}
      </p>
    </div>
  )}

  <div id="recaptcha-container" className='opacity-0 cursor-none'/>
</div>

    );
  };
  
  export default OtpLogin;