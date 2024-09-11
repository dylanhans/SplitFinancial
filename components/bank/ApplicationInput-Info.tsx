import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { applicationformSchema, step4schema, appformSchema } from '@/lib/utils'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"; // Adjust the import based on your setup

const formSchema = applicationformSchema;

interface ApplicationInputProps {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
    className?: string
    id?: string; 
    readOnly?: boolean; // Add readOnly prop
    tooltip?: string; // Add tooltip prop
}

const ApplicationInputInfo = ({ control, name, label, placeholder, id, readOnly = false, tooltip }: ApplicationInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <div className="flex items-center">
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
            
          </div>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                id={id || name}
                placeholder={placeholder}
                className="input-class"
                {...field}
                readOnly={readOnly}
              />
            </FormControl>
            <FormMessage className="text-[#B5071B] mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default ApplicationInputInfo;
