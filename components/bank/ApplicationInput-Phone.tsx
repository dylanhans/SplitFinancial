import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control, FieldPath, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { applicationformSchema, appformSchema } from '@/lib/utils'
import InputMask from 'react-input-mask';



const formSchema = applicationformSchema;

interface ApplicationInputPhoneProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder?: string;
  className?: string;
  otpStatus: boolean; // Add this prop
  id?: string;
}

const ApplicationInputPhone = ({ control, name, label, placeholder = "+1 XXX-XXX-XXXX", id, otpStatus }: ApplicationInputPhoneProps) => {
  const { formState: { errors } } = useFormContext();

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
              <InputMask
                id={id || name}
                mask="+1 999-999-9999"
                placeholder={placeholder}
                className={`input-class ${otpStatus ? 'bg-green-200' : ''}`} // Apply conditional styling
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default ApplicationInputPhone;