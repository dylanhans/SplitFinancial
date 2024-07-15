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
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabspayment'

const CreditQuick = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());


  //const firstAccount = accounts[0];

  return (
    <section className="QuickTransfer Title w-[350px]">
      <div className="QuickTransfer Title w-[350px]">
          <Tabs className="w-full">
            <TabsContent>
              <TabsList className="recent-transactions-tablist w-full">
                  <TabsTrigger className="flex items-center w-full">
                  <span className="balance-text-13 font-smallboldish pt-2 bg-transparent border-none">
                              Make a Payment
                  </span>
                  </TabsTrigger>
              </TabsList>
              </TabsContent>
          </Tabs>
      </div>
    <div className="QuickTransfer Title">
    <Card className="w-[350px]">
      <CardHeader>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="balance-text-13 font-smallbolder">Amount</Label>
              <Input id="name" placeholder="Minimum Payment $10.00" className="rounded-sm placeholder-black other-text-13 font-smallboldish"/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework" className="balance-text-13 font-smallbolder">From</Label>
              <Select>
                <SelectTrigger id="framework" className="other-text-13 font-smallboldish rounded-sm">
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
              <Label htmlFor="name" className="balance-text-13 font-smallbolder">Date</Label>
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
        <div className="p-2 w-full">
        <Button className="bg-blue-900 text-white rounded-sm w-full">Submit</Button>
        </div>
      </CardFooter>
    </Card>
    </div>
    </section>
  )
}

export default CreditQuick