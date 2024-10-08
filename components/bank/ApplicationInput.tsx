import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { applicationformSchema, step4schema, appformSchema } from '@/lib/utils'

const formSchema = applicationformSchema;

interface ApplicationInputProps {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
    className?: string
    id?: string; 
    readOnly?: boolean; // Add readOnly prop
}

const ApplicationInput = ({ control, name, label, placeholder, id, readOnly = false}: ApplicationInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                id={id || name} // Use id prop if provided, otherwise fallback to name
                placeholder={placeholder}
                className="input-class" // Ensure this class is defined in your CSS or Tailwind configuration
                {...field}
                readOnly={readOnly} // Make the field read-only if true
              />
            </FormControl>
            <FormMessage className="text-[#B5071B] mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default ApplicationInput;
