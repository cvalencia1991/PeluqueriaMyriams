"use client";
import IconsInfiniteScroll from '@/components/IconsInfiniteScroll'
import Recomendations from './Recomendations';
import Image from 'next/image';
import Ilustrator from '../../public/assets/icons/ilustrator-hairdress.svg'
import { useTranslations } from 'next-intl';

export default function BrandSuggestions() {
  
  const t = useTranslations("HomePage.customers/brands")

  return (
    <section className="grid grid-rows-5 grid-cols-2 place-content-center w-screen h-[250vh] bg-white-bone lg:p-10 lg:grid-cols-6 lg:grid-rows-5 lg:h-screen">
      <div className="flex p-5 row-span-1 col-span-2 order-1 w-full h-full items-center justify-start align-center border-animated relative lg:col-span-4 lg:border">
          <h2 className='text-5xl text-black font-roman text-center italic'>{t("title")}</h2>
      </div>
      <div className="row-start-3 row-end-5 col-span-2 order-3 w-full p-5 h-full text-center text-black grid justify-items-center lg:order-2 lg:col-start-5 lg:row-start-1 lg:border">
        <Recomendations/>
      </div>
      <div className="row-start-2 h-[50vh]  lg:h-full order-2 flex align-center justify-center col-span-2 w-full border-animated relative lg:row-span-4 lg:row-start-2 lg:border">
        <Image
          src="/assets/images/Customers-Image.webp"
          loading="lazy"
          width={350}
          height={450}
          className='w-1/2 h-full lg:h-auto lg:m-10 lg:w-2/4 transition-transform hover:scale-110 '
          alt="Customers Image"
        />
      </div>
      <div className="row-span-1 col-span-2 order-4 flex justify-center items-center lg:row-span-4 lg:row-start-2 lg:border">
        <Ilustrator/>
      </div>
      <div className="row-span-6 col-span-2 order-4 flex items-center align-center row-span-2 w-full h-full relative lg:row-span-2 lg:col-start-5 lg:row-start-5 lg:border">
        <IconsInfiniteScroll />
      </div>
    </section>
  );
}

