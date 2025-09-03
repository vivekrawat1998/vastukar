import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: '/modern-minimalist-office.jpg',
    cardImage: '/modern-minimalist-office.jpg',
    heading: 'The Art of Stunning Interior Design',
    subTitle: 'FAST AND RELIABLE',
    description:
      'Whether it’s your home, office, or a commercial project, we are always dedicated to bringing your vision to life.',
    stats: '260+',
    statsText: 'Successful Projects And Counting',
    statsLines: ['Tech Specifications', 'Design Project', '3D Visualisation']
  },
  {
    image: '/stylish-living-room-with-gray-sofa-modern-decor.jpg',
    cardImage: '/stylish-living-room-with-gray-sofa-modern-decor.jpg',
    heading: 'Modern Spaces, Timeless Comfort',
    subTitle: 'FAST AND RELIABLE',
    description:
      'Crafting innovative environments that balance beauty and practicality for every lifestyle.',
    stats: '310+',
    statsText: 'Homes, Offices & More',
    statsLines: ['Detailed Planning', 'Style Consultation', 'Custom Execution']
  },
  {
    image: '/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg',
    cardImage: '/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg',
    heading: 'Inspired by Nature & Innovation',
    subTitle: 'FAST AND RELIABLE',
    description:
      'Let us transform your spaces into sanctuaries of creativity, comfort, and renewal.',
    stats: '150+',
    statsText: 'Design Awards & Accolades',
    statsLines: ['Sustainable Vision', 'Elegant Results', 'Award-Winning Team']
  }
];

const textVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const HeroSwiper = () => (
  <Swiper
    effect="fade"
    modules={[Autoplay, EffectFade]}
    autoplay={{ delay: 5000 }}
    loop={true}
    className="w-full h-[70vh] md:h-[95vh] relative"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-full">
          {/* Background */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 w-full h-full bg-black/50" />

          {/* Text + CTA with animation */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            key={index}
            className="absolute top-28 md:top-[25%] left-5 md:left-[15%] z-10 text-white max-w-[90%] md:max-w-[700px]"
          >
            {/* Subtitle */}
            <div className="text-[10px] md:text-xs font-semibold border border-white rounded-full px-4 py-1 md:px-6 md:py-2 mb-3 tracking-wide text-white/80 inline-block">
              {slide.subTitle}
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-7xl font-bold font-custom leading-snug md:leading-[80px] mb-3 drop-shadow-xl">
              {slide.heading}
            </h1>

            {/* Description */}
            <div className="mt-4 md:mt-8 text-sm sm:text-base md:text-xl mb-6 md:mb-7 font-medium text-white/90">
              {slide.description}
            </div>

            {/* CTA */}
            <button className="mt-2 px-5 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-full font-bold shadow-lg hover:bg-yellow-300 transition border border-white flex items-center gap-2 text-sm sm:text-base">
              Take Counsel
              <span className="ml-2 bg-yellow-400 rounded-full p-1 text-black">
                &#8594;
              </span>
            </button>
          </motion.div>

          {/* Stats Card */}
          <div className="absolute bottom-6 right-6 md:bottom-16 md:right-32 z-20 hidden md:flex flex-row gap-6 items-center">
            <div className="bg-neutral-900/80 rounded-2xl px-6 md:px-10 py-6 md:py-8 text-white shadow-2xl 
                  w-[260px] h-[260px] flex flex-col justify-between">
              <div>
                <div className="text-2xl md:text-4xl font-bold mb-2">{slide.stats}</div>
                <div className="text-sm md:text-base font-medium mb-4">{slide.statsText}</div>
              </div>
              <div className="text-xs font-light space-y-1">
                {slide.statsLines.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
            <img
              src={slide.cardImage}
              alt=""
              className="rounded-2xl object-cover w-[260px] h-[260px] border border-white shadow-lg"
            />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default HeroSwiper;
