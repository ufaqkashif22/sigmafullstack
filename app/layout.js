
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Oswald } from 'next/font/google'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Poppins } from 'next/font/google'
import ClientWrapper from "@/components/ClientWrapper";
import Footer from "@/components/Footer";


const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-oswald',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'My Sigma Website',
  description: 'A services website like Sigmatech',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body
        className={"antialiased font-sans bg-white text-gray-900"} 
      >
          <Navbar />
           <ClientWrapper/>
        
        {children}
            <Footer/>
      </body>
    </html>
  );
}
