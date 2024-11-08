"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function CarouselImages() {
  const images = [
    '/assets/images/peluqueria7.webp',
    '/assets/images/peluqueria8.webp',
    '/assets/images/peluqueria9.webp',
    '/assets/images/peluqueria10.webp',
    '/assets/images/peluqueria11.webp',
    '/assets/images/peluqueria12.webp',
    '/assets/images/peluqueria13.webp',
  ];

  const desktopRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: desktopRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-82%"]);

  return (
    <section>
      {/* modo escritorio */}
      <div
        ref={desktopRef}
        className="relative hidden lg:block w-screen h-[150vh] bg-gradient-to-b from-green to-white-bone">
        <div className="sticky top-0 overflow-hidden flex items-center">
          <motion.div 
            style={{ x }}
            className="relative hidden p-4 md:flex gap-4">
            {images.map((image, index) => (
              <Image 
                key={`image-${index}`}
                width={350}
                height={40}
                src={image} 
                priority={true}
                className="w-auto h-auto"
                alt={`SalonImage-${index}`} 
              />
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* modo Movil */ }
      <div className="sticky w-full lg:hidden bg-gradient-to-b from-green to-white-bone">
        <motion.ul
          className="flex gap-10 flex-col p-5">
          {images.map((image,index) => (
            <li key={image}><Image 
                key={`image-${index}`}
                width={250}
                height={150}
                src={image} 
                priority={true}
                className=" w-full"
                alt={`SalonImage-${index}`} 
              />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

