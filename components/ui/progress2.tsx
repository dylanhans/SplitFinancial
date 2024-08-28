"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  indicatorClassName?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ indicatorClassName, className, value = 0, ...props }, ref) => {
  // Calculate the percentage based on the value prop
  const percentage = Math.round(value || 0);

  return (
    <div className="relative w-full">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-1.5 w-full overflow-hidden rounded-full bg-white",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn('h-full w-full flex-1 bg-[#0060b1] transition-all', indicatorClassName)}
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </ProgressPrimitive.Root>
      <div
        className="absolute text-[12px] mt-1 bottom-[-20px] left-0 w-full text-center text-sm text-gray-700"
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }

