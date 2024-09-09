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
        console.log("Formatted #: ", cleanedPhoneNum);
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
      }
    }, [otp]);
  
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
            onClick();
          }
        } catch (error) {
          console.error(error);
          console.log("Failed to verify OTP. Please check the OTP.");
        }
      });
    };
  

    const requestOtp = async () => {
      setResendCountdown(60);
      if (!recaptchaVerifier) {
        return setError("RecaptchaVerifier is not initialized.");
      }
      try {
        console.log('auth:', auth);
        console.log('pNumber:', pNumber);
        console.log('recaptchaVerifier:', recaptchaVerifier);
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
      <div className="flex flex-col justify-center items-center">
        <div id="recaptcha-container" />
        {confirmationResult && (
          <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        )}
        <p className="mt-5">
          {resendCountdown > 0
            ? `Resend OTP in ${resendCountdown}`
            : isPending
            ? "Sending OTP"
            : "Send OTP"}
        </p>
        {/* <div className="p-10 text-center">
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </div> */}
        
        {/* {isPending && loadingIndicator} */}
      </div>
    );
  };
  
  export default OtpLogin;