import { TheHeader } from '@/components/TheHeader';
import { useTranslations } from 'next-intl';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {

  const t = useTranslations('HomePage');

  return (
    <>
      <TheHeader />
      <main className='container mx-auto h-screen'>
        <section className='flex flex-col justify-center items-center'>
          <div className="flex flex-col justify-center items-center m-4 gap-2 ">
            <h1 className='scroll-m-20 text-4xl text-gold font-extrabold tracking-tight lg:text-5xl' >{t("title")}</h1>
            <p className='scroll-m-20 text-lg  lg:text-xl dark:text-white'>{t("description")}</p>
          </div>
          <div>
            <Carousel className="w-full max-w-64">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </main>
  </>
);
}
