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
  placeholder?: string; // Made optional since it's not used in <select>
  className?: string;
  id?: string;
}

const ApplicationInputPhone = ({ control, name, label, placeholder = "Enter your Phone Number", id }: ApplicationInputPhoneProps) => {
  const { formState: { errors } } = useFormContext();

  const isPhoneNumberValid = !errors.phoneNumber;
  
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
                mask="999-999-9999"
                placeholder={placeholder}
                className="input-class"
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
}

export default ApplicationInputPhone;