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
            <div >
              <Card className="p-0">
                <CardContent className="flex items-center justify-center p-2 md:p-5">
                  <img src={`./projects/${image}`} alt={`image ${index+1}`} className="w-full h-full rounded-md"/>
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
