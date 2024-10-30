import Image from "next/image"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

export function CarouselDemo() {
  const peluqueriaImages = [
    "/images/peluqueria1.webp",
    "/images/peluqueria2.webp",
    "/images/peluqueria3.webp",
    "/images/peluqueria4.webp",
    "/images/peluqueria5.webp",
  ]

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="flex flex-col w-full max-w-xl">
      <div className="flex flex-col relative">
        <Carousel 
          setApi={setApi}
          className="m-auto  w-full max-w-xs lg:m-7 lg:max-w-lg">
          <CarouselContent>
            {peluqueriaImages.map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent 
                      className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src={peluqueriaImages[index]}
                        width={400}
                        height={400}
                        unoptimized={false}
                        className="object-cover w-full h-full"
                        priority={true}
                        alt="Peluqueria"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
          ))}
        </CarouselContent>
            <CarouselPrevious className="hidden justify-center items-center sm:flex"/>
        <CarouselNext className="hidden justify-center items-center sm:flex"/>
      </Carousel>
      <div className="flex justify-end gap-2 lg:justify-center">
        {peluqueriaImages.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={`w-3 h-3 rounded-full p-0 ${
              current === index ? "bg-primary" : "bg-secondary"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
)
}

