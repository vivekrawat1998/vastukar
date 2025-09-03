import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const projects = [
  {
    img: "/minimal-amazing-interior-design.jpg",
    tags: ["SINGLE HOME"],
    title: "Art Deco Revival",
    location: "Berlin, Germany",
    year: "2025",
  },
  {
    img: "/modern-living-room-with-blue-accents.jpg",
    tags: ["SINGLE HOME"],
    title: "Golden Ratio Residence",
    location: "Berlin, Germany",
    year: "2025",
  },
  {
    img: "/modern-minimalistic-interior-design-light-bright-monochrome-room-with-black-white-furniture-c.jpg",
    tags: ["RESIDENTIAL", "SINGLE HOME"],
    title: "Nordic Minimalist Loft",
    location: "Berlin, Germany",
    year: "2025",
  },
  {
    img: "/modern-minimalistic-interior-design-light-bright-monochrome-room-with-black-white-furniture-c.jpg",
    tags: ["RESIDENTIAL"],
    title: "Industrial Elegance Condo",
    location: "Berlin, Germany",
    year: "2025",
  },
  {
    img: "/modern-living-room-with-blue-accents.jpg",
    tags: ["RESIDENTIAL"],
    title: "Serene Space Studio",
    location: "Germany",
    year: "2025",
  },
  {
    img: "/colorful-pastel-minimal-interior-design.jpg",
    tags: ["URBAN"],
    title: "Urban Harmony Loft",
    location: "Berlin, Germany",
    year: "2025",
  },
];

const PortfolioSection = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="bg-[#fafafa] w-full py-12 lg:py-20">
      <div className="px-2 sm:px-6 lg:px-8">
        {/* Badge and Heading */}
        <div className="mb-6">
          <span className="px-3 py-1 rounded-full bg-white shadow text-xs font-bold text-[#bfa46f] border border-gray-200">
            ● OUR PROJECTS
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
          Creative{" "}
          <span className="text-[#bfa46f]">Projects That Define Our Style</span>
        </h2>
        <p className="mb-8 text-gray-600 max-w-2xl text-sm sm:text-base">
          Our portfolio showcases a diverse range of projects, from beautifully
          crafted residential spaces functional and stylish commercial interiors.
        </p>
        {/* Swiper Section */}
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          breakpoints={{
            380: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 5.5 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="portfolioSwiper"
          // navigation and pagination removed
        >
          {projects.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="flex justify-center py-8 sm:py-12 cursor-pointer"
              onClick={goNext} // click on the card advances slide
            >
              <div className="transition hover:shadow-xl flex flex-col w-[90vw] max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs lg:w-[25vw] overflow-hidden h-full">
                <div className="relative ">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full md:h-[50vh] rounded-md h-[30vh] object-cover"
                  />
                  {/* Tags */}
                  <div className="absolute top-3 left-3 flex gap-2 flex-wrap z-10">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-[#ededed] rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-semibold text-gray-900 shadow"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="absolute right-3 bottom-3 bg-black/70 text-white font-medium text-xs sm:text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition z-10">
                    View
                  </button>
                  {/* subtle overlay on hover for image dim */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                <div className="flex-1 flex flex-col px-4 pt-3 pb-4">
                  <h3 className="font-bold font-custom text-base sm:text-lg mb-2 text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                  <span className="text-xs font-Lato sm:text-sm text-gray-600">
                    {item.location}
                  </span>
                  <span className="text-xs  sm:text-sm text-gray-600">
                    {item.year}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div>
            <img src="/3d-model-house-building-removebg-preview.png" className="w-full" alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default PortfolioSection;
