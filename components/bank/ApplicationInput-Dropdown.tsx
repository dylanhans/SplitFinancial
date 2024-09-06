import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { applicationformSchema, appformSchema } from '@/lib/utils'

const formSchema = applicationformSchema;

interface ApplicationInputDropDownProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder?: string; // Made optional since it's not used in <select>
  options: { value: string; label: string }[]; // New prop for dropdown options
  className?: string;
  id?: string;
}

const ApplicationInputDropDown = ({ control, name, label, placeholder = "Select", options = [], id }: ApplicationInputDropDownProps) => {
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
              <select
                id={id || name} // Use id prop if provided, otherwise fallback to name
                className="input-class" // Ensure this class is defined in your CSS or Tailwind configuration
                {...field}
                value={field.value || ""} // Ensure the value is set to "" if field.value is undefined
              >
                <option value="" disabled>{placeholder}</option> {/* Default option */}
                {options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </FormControl>
            <FormMessage className="form-message mt-2"/>
          </div>
        </div>
      )}
    />
  );
}

export default ApplicationInputDropDown;
