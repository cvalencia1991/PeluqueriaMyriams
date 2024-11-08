"use client";
import { motion } from "framer-motion";

export default function Copyright() {

  const variants = {
    hidden: { opacity: 0, y: 50 },  
    visible: { opacity: 1, y: 0 },  
  };

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}  
      transition={{ delay: 1, duration: 0.5 }}  
      className="text-center flex justify-center items-center flex-col lg:flex-row"
    >
      &copy; 2025 by LS Peluqueria Myriams
      <br className="lg:hidden" />
      <span className="hidden lg:block"> - </span>
      All Rights Reserved
  </motion.span>
);
}

