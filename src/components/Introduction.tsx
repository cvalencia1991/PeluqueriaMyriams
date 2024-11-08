"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import splitStringsUsingRegex from '@/utils/splitStrings';
import { CarouselDemo } from './Carrosuel';

const charVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Introduction() {
  const t = useTranslations('HomePage');

  const headingContent = t.rich("title", { br: () => <br /> });

  const heading = React.Children.toArray(headingContent).flatMap((child) => {
    if (typeof child === 'string') {
      return splitStringsUsingRegex(child); 
    }
    return [child]; 
  });

  const description = splitStringsUsingRegex(t("description"));

  return (
    <header 
      id="#home"
      className='container h-fit gap-5 mx-auto p-10 flex 
      flex-col justify-center items-center lg:flex-row lg:text-left lg:h-screen'>
      <div className="flex flex-col justify-center items-center m-8 gap-2 lg:w-2/4 lg:m-4">
        <motion.h1
          initial='hidden'
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.02 }}
          className='font-roman italic w-full scroll-m-20 text-5xl
          text-gold tracking-tight  lg:text-6xl'>
          {heading.map((char, index) => (
            <motion.span key={`${char}-${index}`}
              variants={charVariants}
              transition={{ duration: 0.5 }} >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial='hidden'
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.010 }}
          className='font-avenir font-light scroll-m-20 text-lg text-left md:text-left lg:text-xl dark:text-white'>
          {description.map((char, index) => (
            <motion.span key={`${char}-${index}`}
              variants={charVariants}
              transition={{ duration: 0.10 }} >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
      <div>
        <CarouselDemo />
      </div>
    </header>
  );
}

