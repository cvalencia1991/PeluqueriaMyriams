"use client";
import { useTranslations } from 'next-intl';
import splitStringsUsingRegex from '@/utils/splitStrings';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react'
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const t = useTranslations('AboutPage');
  const heading = splitStringsUsingRegex(t("title"));
  const description = splitStringsUsingRegex(t("description"));
  const container = useRef(null)

  useGSAP(()=> {
    const tl =  gsap.timeline({
      scrollTrigger: {
        trigger: '#about-section',
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true
      }
    })

    tl.fromTo(container.current, {x:200, opacity:0}, {x:0, opacity:1})
  })

  return (
    <section id='about-section' className='grid h-screen text-black justify-end lg:grid-cols-2 lg:flex-row dark:bg-white'>
      <div className='relative pointer-events-none w-full h-full lg:bg-fixed bg-cover justify-center xl:bg-contain order-2 bg-peluqueria bg-no-repeat lg:bg-cover lg:order-1'/>
      <div ref={container} className='flex items-center justify-center order-1 p-5 items-center lg:order-2'>
        <article className='flex items-center p-5 gap-5 text-center flex-col h-auto lg:items-start'>
          <h2 className='text-subgold font-bold text-3xl lg:text-5xl'>
            {heading}
          </h2>
          <div className='flex h-1 w-1/3 bg-gold lg:hidden' />
          <p className='lg:text-left'>
            {description}
          </p>
        </article>
      </div>
    </section>
  );
}

