import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control, FieldPath, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { applicationformSchema, appformSchema } from '@/lib/utils'
import InputMask from 'react-input-mask';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Path for v2
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"; // Adjust the import based on your setup


const formSchema = applicationformSchema;

interface ApplicationInputPhoneProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder?: string;
  className?: string;
  otpStatus: boolean; // Add this prop
  id?: string;
  tooltip?: string;
}

const ApplicationInputPhone = ({ control, name, label, placeholder = "+1", id, otpStatus, tooltip }: ApplicationInputPhoneProps) => {
  const { formState: { errors } } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">
            {label}
            {tooltip && (
              <TooltipProvider>
                <span className="ml-2 cursor-pointer text-blue-900 text-sm">
                  <Tooltip>
                    <TooltipTrigger>ⓘ</TooltipTrigger>
                    <TooltipContent className="p-3 m-2 shadow-sm bg-white max-w-xs text-left">
                      <p className="text-xs">{tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </span>
              </TooltipProvider>
            )}
          </FormLabel>
          <div className='flex w-full flex-col'>
            <FormControl>
              <div className="relative">
                <InputMask
                  id={id || name}
                  mask="+1 999-999-9999"
                  placeholder={placeholder}
                  className={`input-class h-10 text-gray-900 font-smallboldish balance-text-16 px-3 py-2 text-sm ${otpStatus ? 'pr-10' : ''}`} // Add padding-right if otpStatus is true
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                {otpStatus && (
                  <CheckCircleIcon
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#006ac3]" // Position and style the icon
                    style={{ height: '20px', width: '20px' }} // Adjust size as needed
                  />
                )}
              </div>
            </FormControl>
            <FormMessage className="text-[#B5071B] mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default ApplicationInputPhone;
