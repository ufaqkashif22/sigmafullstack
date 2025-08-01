'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "/app/globals.css"

const testimonials = [
  {
    quote: 'Reliable digital partner that understood our vision. They developed our software from scratch, simplifying our operations remarkably.',
    name: 'Rachel D',
    role: 'E-commerce Entrepreneur',
  },
  {
    quote: 'Top-notch IT services that go beyond expectations. Their cybersecurity solutions shielded us from potential threats.',
    name: 'Eve Crawford',
    role: 'IT Manager',
  },
  {
    quote: 'Their team seamlessly migrated our data to the cloud, ensuring data security while enabling remote work.',
    name: 'Jack Graham',
    role: 'Co-founder, Small Business',
  },
  {
    quote: 'Professional, responsive, and proactive. Their team identified our pain points and tailored a solution that transformed our workflow.',
    name: 'Alex Smith',
    role: 'COD of Secure Tech',
  },
  {
    quote: 'Amazing support and fast delivery. They remained responsive throughout, solving every issue quickly and keeping us updated along the way.',
    name: 'Lily Adams',
    role: 'Marketing Lead',
  },
  {
    quote: 'They turned our ideas into reality, fast and within budget. The collaboration was smooth and exceeded our expectations in every aspect.',
    name: 'Chris Lee',
    role: 'Founder, StartupX',
  },
];

const Testimonial = () => {
  return (
    <div className="relative w-full py-16 bg-white flex flex-col items-center">
      <Swiper
        modules={[Pagination]}
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet mx-1 !bg-gray-800 !rounded-none !w-6 !h-[4px]',
          bulletActiveClass: '!bg-[#2D9CDB]',
        }}
        className="w-full max-w-7xl"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            {({ isActive }) => (
              <div className="w-[370px] min-h-[280px]  flex flex-col items-center">
                {/* Card */}
                <div className={`relative p-6 rounded-lg text-center shadow-md transition-colors duration-300 
                  ${isActive ? 'bg-[#2D9CDB]  text-white' : 'bg-transparent text-gray-400 shadow-none'}`}>
                  <div className="text-4xl mb-4">❝</div>
                  <p className="text-base font-medium">{t.quote}</p>

                  {/* Triangle Pointer */}
                 <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 
  h-0 border-l-[14px] border-r-[14px] border-t-[14px] 
  border-l-transparent border-r-transparent
  ${isActive ? '[border-top-color:#2D9CDB]' : 'border-t-white'}`} />
                </div>

                {/* Name & Role */}
                <div className="-mt-1 text-center">
                  <p className="font-bold mt-8">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <div className="swiper-pagination pb-0 flex justify-center min-h-[24px]" />
    </div>
  );
};

export default Testimonial;

