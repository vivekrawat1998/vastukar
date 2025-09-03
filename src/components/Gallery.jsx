import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const galleryImages = [
  "/minimal-amazing-interior-design.jpg",
  "/modern-living-room-with-blue-accents.jpg",
  "/stylish-living-room-with-gray-sofa-modern-decor.jpg",
  "/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg",
  "/stylish-living-room-with-gray-sofa-modern-decor.jpg",
  "/colorful-pastel-minimal-interior-design.jpg",
  "/stylish-living-room-with-gray-sofa-modern-decor.jpg",
  // add more as needed
];

const GallerySection = () => (
  <section className="relative bg-[#fafafa] py-16 md:px-10 px-4 overflow-hidden w-full">
    <h2
      className="absolute inset-0 flex items-center justify-center text-[12vw] font-extrabold text-gray-100 uppercase pointer-events-none select-none z-0"
      style={{ letterSpacing: ".2em", left: 0, top: "-2vw" }}
    >
      gallery
    </h2>
    <div className="relative z-10 w-full mx-auto ">
      <Swiper
        slidesPerView={1.1}
        spaceBetween={24}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 24 },
          1024: { slidesPerView: 5,  },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="gallerySwiper"
        // No pagination or navigation!
      >
        {galleryImages.map((img, idx) => (
          <SwiperSlide key={idx} className="py-10 flex justify-center">
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="rounded-2xl h-62 w-full sm:w-[320px] object-cover shadow-lg flex-shrink-0"
              style={{ background: "#e5e5e5" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default GallerySection;
