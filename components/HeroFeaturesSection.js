'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from "/public/images/girl.jpg";
import avatar1 from "/public/images/picturesofthree.png"


const HeroFeaturesSection = () => {
  return (
    <section className="w-full bg-white text-black py-16 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side */}
        <div className="relative w-full lg:w-1/2">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <Image src={heroImg} alt="Hero" className="w-full h-auto object-cover" />
          </div>

          {/* Activity Card */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute top-32 left-[21rem]  bg-white shadow-2xl rounded-2xl p-4 w-[260px] z-10 h-[250px]"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[1rem] leading-[0.4rem]">Activity</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Avatars */}
            <div className="flex items-center mb-10">
              {[avatar1].map((img, idx) => (
                <div
                  key={idx}
                  className={`w-32 h-16 rounded-full border-2 border-white overflow-hidden -ml-[0.8rem] ${idx === 0 ? "ml-0" : ""}`}
                >
                  <Image src={img} alt={`avatar-${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
              <span className="ml-2 text-green-600 font-bold text-lg"></span>
            </div>

            {/* Chart Section */}
            <div className="relative h-[90px] flex items-end justify-between gap-2">
              {[25, 50, 90, 70, 45, 65, 85].map((value, idx) => (
                <div
                  key={idx}
                  className="relative w-[10px] h-full bg-gray-100 rounded-full flex items-end justify-center"
                >
                  <div
                    className="w-full bg-blue-500 rounded-full transition-all duration-700"
                    style={{ height: `${value}%` }}
                  />
                  {idx === 2 && (
                    <div 
                       aria-label="Performance increased by 145%"
                    className="absolute -top-3 flex items-center z-10 justify-center bg-black text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg">
                  
                      145%
                    
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 p-1 w-6 h-6 text-white bg-green-600 rounded-2xl"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5 12l5-5 5 5H5z" clipRule="evenodd" 
                           transform="scale(1.3) translate(-2, -2)"
                        />
                        
                      </svg>
                      
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[42%] lg:pl-16">
          <h2 className="text-[3rem] font-bold leading-tight mb-9">
            Seriously improve your lead conversion rate
          </h2>
          <ul className="space-y-3 text-lg text-gray-600 mb-6">
            <li><span className="text-blue-600 mr-4">✓</span> Intuitive customer analytics</li>
            <li><span className="text-blue-600 mr-4">✓</span> Advertisement conversion events</li>
            <li><span className="text-blue-600 mr-4">✓</span> Automation of sales/marketing</li>
          </ul>
          <div>
            <button className="relative font-semibold text-[1.4rem] leading-tight text-red-600 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[1.5px] after:w-full after:bg-red-600 after:transition-all after:duration-300 hover:after:w-0">
              Start your trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFeaturesSection;
