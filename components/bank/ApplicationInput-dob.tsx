import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control, FieldPath, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { applicationformSchema, appformSchema } from '@/lib/utils'
import InputMask from 'react-input-mask';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Path for v2


const formSchema = applicationformSchema;

interface ApplicationInputPhoneProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder?: string;
  className?: string;
  id?: string;
}

const ApplicationInputdob = ({ control, name, label, placeholder, id }: ApplicationInputPhoneProps) => {
  const { formState: { errors } } = useFormContext();

  const formatDate = (value: string) => {
    // Example function to format date input
    const date = new Date(value);
    return isNaN(date.getTime()) ? value : date.toISOString().split('T')[0];
  };

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
                id={id || name}
                placeholder={placeholder}
                className={`input-class h-10 text-gray-900 font-smallboldish balance-text-16 px-3 py-2 text-sm`}
                value={formatDate(field.value)}
                onChange={(e) => field.onChange(formatDate(e.target.value))}
              />
            </FormControl>
            <FormMessage className="text-[#B5071B] mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default ApplicationInputdob;
