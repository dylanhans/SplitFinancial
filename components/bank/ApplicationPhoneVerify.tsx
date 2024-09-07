import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { applicationformSchema, appformSchema } from '@/lib/utils'

const formSchema = applicationformSchema;

interface ApplicationPhoneVerifyProps {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
    className?: string
    id?: string; 
}

const ApplicationPhoneVerify = ({ control, name, label, placeholder, id }: ApplicationPhoneVerifyProps) => {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label">
              {label}
            </FormLabel>
            <div className='flex w-full flex-col'>
              <FormControl>
                <Input
                  id={id || name} // Use id prop if provided, otherwise fallback to name
                  placeholder={placeholder}
                  className="input-class" // Ensure this class is defined in your CSS or Tailwind configuration
                  {...field}
                />
              </FormControl>
              <FormMessage className="form-message mt-2"/>
            </div>
          </div>
        )}
      />
    );
  }
  
  export default ApplicationPhoneVerify;
