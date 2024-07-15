'use client'
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const HomeQuick = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card className="w-[350px]">
      <CardHeader>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Amount</Label>
              <Input id="name" placeholder="Minimum Payment $10.00" className="placeholder-black other-text-13 font-smallboldish"/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">From</Label>
              <Select>
                <SelectTrigger id="framework" className="other-text-13 font-smallboldish">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper" className="other-text-13 font-smallboldish">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" strokeWidth={1.5}/>
                    <span className="other-text-13 font-smallboldish">{date ? format(date, "PPP"):''}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="other-text-13 font-smallboldish"
                  />
                </PopoverContent>
              </Popover>
            </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Submit</Button>
      </CardFooter>
    </Card>
  )
}

export default HomeQuick