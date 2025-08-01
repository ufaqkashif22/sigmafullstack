'use client';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import Lottie from "lottie-react";
import graphAnimation from "/lotties/Wyda graph animation.json"; // Adjust if needed

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-16 bg-white relative overflow-hidden">
      
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left z-10">
        <h1 data-aos="fade-up" className="text-[5rem] font-black leading-[1.15] text-black">
          WHERE <br />
          MARKETING & <br />
          AUTOMATION <br />
          <span className="relative inline-block">
            INTERSECT.
            {/* CURVED UNDERLINE */}
            <svg
              className="absolute left-0 -bottom-4 w-full h-4 z-[-1]"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0,10 C30,0 70,0 100,10"
                fill="none"
                stroke="#facc15"  // Tailwind yellow-400
                strokeWidth="3"
              />
            </svg>
          </span>
        </h1>

        <div className="flex gap-12 justify-center lg:justify-start mt-8">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600">
            GET STARTED
          </button>
          <button className="relative font-semibold text-[1.2rem] text-black after:content-[''] after:absolute after:left-0 after:bottom-[2px] after:h-[1.5px] after:w-full after:bg-black after:transition-all after:duration-300 hover:after:w-0">
            EXPLORE FEATURES
          </button>
        </div>
      </div>

      {/* Right Section */}
<div
  data-aos="zoom-in"
  data-aos-delay="500"
  className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative z-10"
>
  <div className="relative w-[600px] h-[596px] rounded-[40px] z-10">
    
    {/* Background Shape */}
    <div className="absolute inset-0 z-0">
      <svg viewBox="0 0 600 596" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFD93D" />
            <stop offset="100%" stopColor="#3F87F5" />
          </linearGradient>
        </defs>
        <rect width="600" height="596" rx="40" fill="url(#bgGradient)" />
      </svg>
    </div>

    {/* Hero Image */}
    <div className="absolute inset-x-0 bottom-0 h-[596px] z-10">
      <Image
        src="/images/sass-guy.webp"
        alt="Hero Person"
        fill
        className="object-cover object-top rounded-t-[30px]"
      />
    </div>

    {/* Revenue Card */}
    <div className="absolute top-[8rem] -left-[6rem] bg-white rounded-2xl shadow-xl px-5 py-3 text-sm z-30 w-[240px]">
      <div className="flex items-start gap-8">
        <div className="w-16 h-16">
          <Lottie animationData={graphAnimation} loop={true} />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Revenue</p>
          <p className="text-2xl font-bold text-black">$3,870.00</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 text-xs font-medium text-gray-500">
        <span className="hover:text-black cursor-pointer">Daily</span>
        <span className="text-black border-b-2 border-black pb-0.5">Weekly</span>
        <span className="hover:text-black cursor-pointer">Monthly</span>
        <div className="text-gray-400 cursor-pointer">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="9" r="8" />
            <polyline points="9 4 9 9 12 11" />
          </svg>
        </div>
      </div>
    </div>

    {/* Chat Popup */}
    <div className="absolute bottom-20 -right-4 flex items-center gap-2 bg-white pl-4 pr-12 py-2 rounded-xl shadow z-20">
      <Image
        src="/images/sass-guy.webp"
        alt="Benjamin Jones"
        width={30}
        height={30}
        className="rounded-full"
      />
      <div>
        <p className="text-xs text-gray-500">Good Evening,</p>
        <p className="text-sm font-semibold">Benjamin Jones</p>
      </div>
    </div>
  </div>
</div>
   
    </section>
  );
}
