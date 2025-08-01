"use client";

import Image from "next/image";
import bannerImage from "@/public/images/aboutlogo.jpeg"; // update path if needed

export default function AboutHero() {
  return (
    <section className="relative h-96 w-full">
      {/* Background Image */}
      <Image
        src={bannerImage}
        alt="About Us Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60 z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-4">ABOUT US</h1>
        <p className="text-base md:text-lg max-w-2xl">
          Empowering businesses through innovative IT solutions.
        </p>
      </div>
    </section>
  );
}

