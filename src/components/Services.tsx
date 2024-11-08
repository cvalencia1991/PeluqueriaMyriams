"use client";
import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/routing";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Services() {
  const t = useTranslations('HomePage.services');

  const icons = [
    '/assets/icons/Hair.svg',
    '/assets/icons/Hairstyling.svg',
    '/assets/icons/facial.svg',
    '/assets/icons/makeup.svg',
  ];

  const serviceKeys = ["Full Service", "Hairstyle", "Facial", "Makeup"];

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <section className="p-5 w-screen flex flex-col items-center bg-green">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className='flex flex-row gap-5 items-center justify-center w-full'>
        <h2 className='text-gold text-4xl'>{t('title')}</h2>
      </motion.div>
      <motion.section 
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className='grid grid-cols-1 grid-rows-4 h-auto lg:grid-cols-4 lg:grid-rows-1'>
        {serviceKeys.map((key, index) => (
          <div 
            key={key} 
            className='grid grid-rows-subgrid  place-items-center row-span-2 lg:row-span-3 place-items-center text-center gap-5 p-5 border-neutral-100 text-gold '>
            <div className='flex flex-col items-center gap-5 row-span-1'>
              <Image 
                src={icons[index]} 
                alt={key} 
                width="50" 
                height="50" 
              />
              <h3 className='font-roman italic text-3xl'>{t(`${key}.title`)}</h3>
            </div>
            <p className='h-auto lg:h-full font-avenir text-lg row-span-2'>{t(`${key}.description`)}</p>
          </div>
      ))}
      <div className='cursor-pointer col-span-full text-center mx-auto w-full lg:w-auto text-gold p-5 border transition ease-in-out delay-150 border-gold hover:bg-white'>
        <Link 
          href="/services">
          All Services
        </Link>
      </div>
    </motion.section>
  </section>
);
}

