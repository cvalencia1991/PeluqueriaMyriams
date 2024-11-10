"use client";

import React,{useState} from 'react';
import { motion, MotionConfig } from 'framer-motion';

export default function HamburgerButton(){

  const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{ 
        duration: 0.3,
          ease: 'easeInOut'
      }}
    >
      <motion.button 
        initial={false}
        className='relative w-10 h-10 
        bg-transparent bg-white/0 border-0 cursor-pointer'
        onClick = {() => setActive(prev => !prev)}
        animate={ active ? 'open' : 'closed'}
      >
        <motion.span 
          style={{ 
            left: '50%', 
              top: '35%', 
              transform: 'translate(-50%, -50%)' 
          }}
          variants={
            {
              open: { 
                rotate: ["0deg", "0eg", "-45deg"],
                  left: '45%',
              },
                closed: { 
                  rotate: ["-45deg", "0deg", "0deg"]}
            }
          }
          className='absolute h-1 w-5 bg-white'
        />
        <motion.span 
          style={{ 
            left: '50%', 
              top: '50%', 
              transform: 'translate(-50%, -50%)',

          }}
          variants={
            {
              open: { 
                rotate: ["0deg", "0eg", "45deg"],
                  top: '50%',
                  left: '5%',
              },
                closed: { 
                  rotate: ["45deg", "0deg", "0deg"],
                  top: '50%',
                  left: '0%'
                }
            }
          }
          className='absolute h-1 w-10 bg-white dark:bg-white'/>
        <motion.span 
          style={{ 
            left: "calc(50% - 10px)", 
              bottom: '35%', 
              transform: 'translate(-50%, 50%)' 
          }}
          variants={
            {
              open: { 
                rotate: ["0deg", "0eg", "-45deg"],
                  left: '12%',
                bottom: '20%',
              },
                closed: { 
                  rotate: ["45deg", "0deg", "0deg"],
                  bottom: '25%',
                  left: '0%'
                }
            }
          }
          className='absolute h-1 w-5 bg-white dark:bg-white'/>
      </motion.button>
    </MotionConfig>
  );
}
