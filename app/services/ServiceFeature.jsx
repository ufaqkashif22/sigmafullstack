"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image from "next/image";

const ServiceFeature = ({ title, text, imageSrc, reverse }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const textContent = (
    <div className="relative w-full max-w-[516px] px-8 py-10">
      <motion.div
        className="relative z-10 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          {title}
        </h3>
        <p className="text-gray-700 text-[17px] leading-relaxed">
          {text}
        </p>
      </motion.div>

      {/* DOUBLE BORDER BOX */}
      {hasAnimated && (
        <>
          <motion.div
            className="absolute inset-0 border-2 border-blue-500 pointer-events-none z-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-[8px] border-2 border-blue-400 pointer-events-none z-0"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          />
        </>
      )}
    </div>
  );

  const imageContent = (
    <div className="w-full max-w-[605px] flex justify-center">
      <Image
        src={imageSrc}
        alt={title}
        className="w-[85%] h-auto object-contain"
        priority
      />
    </div>
  );

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center justify-between gap-14 pt-12 pb-20 px-4 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {imageContent}
      {textContent}
    </div>
  );
};

export default ServiceFeature;
