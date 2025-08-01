"use client";
import Image from "next/image";
import animationImage from "@/public/images/61232-web-design-lottie-animation.gif";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function WhoWeAreSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,     // Animate only once
    threshold: 0.2         // 20% of component visible before triggering
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <section className="bg-white pt-14 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        
        {/* Left Text Content */}
        <motion.div
          ref={ref}
          className="md:w-1/2 flex flex-col justify-center space-y-6 pt-24"
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-gray-500 text-[1.1rem] font-semibold uppercase tracking-widest">Who We Are</h2>
          <h3 className="text-black text-4xl font-bold">Expert Developers</h3>
          <p className="text-gray-500 text-[1.3rem] leading-relaxed max-w-[488px]">
            Sigma is an IT Service Company and Website Development Agency with 12 years of experience in the industry. We help businesses to utilize our engineering expertise to benefit from world-class technologies. Our expert team of Website Developers will help you save money, get your product to market sooner, and boost productivity.
          </p>

          <div className="flex gap-[5.5rem] pt-8">
            <div className="space-y-1">
              <h4 className="text-black text-[2rem] leading-9 mb-2 font-bold">12+ </h4>
              <p className="text-base text-gray-500 leading-[1.2] tracking-[1px]">Years of </p>
              <p className="text-base text-gray-500 leading-[1.2] tracking-[1px]"> experience</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-black text-[2rem] leading-9 mb-2 font-bold">10x</h4>
              <p className="text-base text-gray-500 leading-[1.2] tracking-[1px] ">Builder of </p>
              <p className="text-base text-gray-500 leading-[1.2] tracking-[1px] "> the year</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image Card */}
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white p-6 md:p-8 rounded-[30px] shadow-2xl max-w-[600px] w-full">
            <Image
              src={animationImage}
              alt="Developer Illustration"
              className="rounded-[24px] w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
