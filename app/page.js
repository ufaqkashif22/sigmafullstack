'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import HeroFeaturesSection from '@/components/HeroFeaturesSection'
import Cta from '@/sections/home/Cta'
import Testimonial from '@/sections/home/Testimonial'
import Footer from '@/components/Footer'

export default function HomePage() {
  const images = [
    '/images/vadim-will-suit.jpg',
    '/images/slidr-2.jpg',
    '/images/4K-Programming-Wallpapers-Desktop-Wallpaper.jpg',
  ]

  const [activeIndex, setActiveIndex] = useState(0)
// Trigger redeploy
  return (
    <>
    <section className="min-h-screen bg-black">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-screen"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // 👈 track active slide
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen overflow-hidden bg-black">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                style={{ objectFit: 'cover', animationFillMode: 'forwards' }}
                className={index === activeIndex ? 'animate-zoom-slow' : ''}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    <HeroSection/>
    <HeroFeaturesSection /> 
    <Cta/>
      <Testimonial />
      
    </>
    
  )
}
