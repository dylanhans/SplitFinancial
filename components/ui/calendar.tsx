"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, DateUtils } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleDayClick = (date: Date) => {
    // Handle the date selection logic
    // For example, you could also pass the selected date to a callback or state

    // Close the DayPicker
    setIsOpen(false);
  };

  // Get today's date
  const today = new Date();

  return (
    <>
      {isOpen && (
        <DayPicker
          showOutsideDays={showOutsideDays}
          className={cn("p-3", className)}
          classNames={{
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: cn(
              buttonVariants({ variant: "outline" }),
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
            ),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell:
              "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] other-text-13 font-smallboldish",
            row: "flex w-full mt-2",
            cell:
              "h-9 w-9 text-center text-sm p-0 relative other-text-13 font-smallboldish [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: cn(
              buttonVariants({ variant: "ghost" }),
              "h-9 w-9 p-0 font-normal other-text-13 font-smallboldish",
              "hover:bg-[#FDFEFF] cursor-pointer"
            ),
            day_range_end: "day-range-end other-text-13 font-smallboldish",
            day_selected:
              "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground other-text-13 font-smallboldish",
            day_today: "bg-accent text-accent-foreground other-text-13 font-smallboldish",
            day_outside:
              "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30 other-text-13 font-smallboldish",
            day_disabled: "text-muted-foreground opacity-50 other-text-13 font-smallboldish",
            day_range_middle:
              "aria-selected:bg-accent aria-selected:text-accent-foreground other-text-13 font-smallboldish",
            day_hidden: "invisible other-text-13 font-smallboldish",
            ...classNames,
          }}
          components={{
            IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
            IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
          }}
          onDayClick={handleDayClick} // Add this to handle date selection
          disabled={{ before: today }} // Disable days before today
          {...props}
        />
      )}
    </>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
