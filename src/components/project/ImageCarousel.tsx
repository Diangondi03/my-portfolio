import * as React from "react"

import { Card, CardContent } from "../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"

interface CarouselProps {
    images: string[]
}

export function ImageCarousel({ images }: CarouselProps) {
  return (
    <Carousel className="w-3/4">
      <CarouselContent>
        {images && images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center ">
                  <img src={`./projects/${image}`} alt={`image ${index+1}`} className="w-full h-full"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="cursor-pointer"/>
      <CarouselNext className="cursor-pointer"/>
    </Carousel>
  )
}
