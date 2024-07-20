import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"

  type Slide = {
    title: string
    description: string
  }
  
  const slides: Slide[] = [
    { title: "Slide 1", description: "This is the first slide's description." },
    { title: "Slide 2", description: "This is the second slide's description." },
    { title: "Slide 3", description: "This is the third slide's description." }
  ]

const CreditOffer = () => {
  return (
    <Carousel className="w-[70%] items-center justify-center max-w-xs">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <h2 className="text-2xl font-semibold">{slide.title}</h2>
                  <p className="mt-2 text-lg">{slide.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CreditOffer