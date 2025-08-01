// my-sigma/sections/Home/CTASection.js

import React from "react";

const Cta = () => {
  return (
    <section className="bg-black text-white px-4 text-center min-h-80 mt-16 mb-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] leading-tight  font-black mb-8 pt-16">
          Your turn to make a move
        </h1>
      <a
  href="/contact"
  className="inline-block border px-6 py-3 rounded-md 
             transition duration-300
             text-[rgb(68,161,218)] border-[rgb(68,161,218)]
             hover:bg-[rgb(68,161,218)] hover:text-white"
>
  <span className="mr-5">CONTACT US</span>
  <span className="mb-4">→</span>
</a>
      </div>
    </section>
  );
};

export default Cta;
