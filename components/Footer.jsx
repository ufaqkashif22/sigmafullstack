import React from "react";
import "/app/globals.css"
const Footer = () => {
  return (
<>
<div className="custom-shape-divider-top h-48 rotate-180" >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#111827" fillOpacity="1"
  d="M0,32L40,48C80,64,160,96,240,93.3C320,91,400,53,480,48C560,43,640,69,720,80C800,91,880,85,960,69.3C1040,53,1120,27,1200,26.7C1280,27,1360,53,1400,64L1440,75L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
</path>
  </svg>
</div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-10 relative">
        {/* Center Logo */}
        <div className="flex justify-center mb-10">
          <img
            src="/images/logo2.png" // 🔁 Replace with your actual logo path
            alt="Logo"
            className="h-40"
          />
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center  py-[1.2rem] bg-slate-950 px-6 md:px-20">
          {/* Left Text with line */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="h-px bg-white flex-1 hidden md:block"></div>
            <div className="text-sm text-gray-400 text-center md:text-left">
              Terms and Conditions &nbsp;&nbsp; Privacy Policy
            </div>
          </div>

          {/* Spacer on small screens */}
          <div className="h-6 md:hidden" />

          {/* Right Text with line */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            <div className="text-sm text-gray-400 text-center md:text-right">
              Copyright © 2025 Sigma Tech Services. All rights reserved.
            </div>
            <div className="h-px bg-white flex-1 hidden md:block"></div>
          </div>
        </div>
      </footer>
</>
  );
};

export default Footer;
