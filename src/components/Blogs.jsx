import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const blogs = [
  {
    img: "/colorful-pastel-minimal-interior-design.jpg",
    category: "Power Tools",
    title: "Functional Design Trends That Blend Style And Comfort",
    description:
      "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you're...",
    author: "Admin",
  },
  {
    img: "/stylish-living-room-with-gray-sofa-modern-decor.jpg",
    category: "Electrical & Lighting",
    title: "Innovative Interior Ideas To Refresh Your Living Space",
    description:
      "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you're...",
    author: "Admin",
  },
  {
    img: "/stylish-living-room-with-gray-sofa-modern-decor.jpg",
    category: "Accessories",
    title: "Transform Your Home With The Modern Interior Design...",
    description:
      "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you're...",
    author: "Admin",
  },
];

const BlogSection = () => (
  <section className="bg-[#fafafa] w-full py-12 px-2 sm:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Newsroom badge */}
      <div className="flex items-center gap-4 mb-8">
        <span className="px-4 py-1 rounded-full bg-white shadow text-xs font-bold text-[#bfa46f] border border-gray-200">
          ● STRAIGHT FROM THE NEWSROOM
        </span>
        <div className="border-t w-full border-gray-200" />
      </div>
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
        Take A Look At{" "}
        <span className="text-[#bfa46f]">Our Latest Blog</span> & Articles.
      </h2>
      {/* Blog Swiper */}
      <Swiper
        slidesPerView={1.1}
        spaceBetween={24}
        breakpoints={{
          640: { slidesPerView: 1.8, spaceBetween: 24 },
          1024: { slidesPerView: 3,  },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="blogSwiper"
      >
        {blogs.map((blog, idx) => (
          <SwiperSlide key={idx} className="py-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col max-w-xl mx-auto">
              <div className="relative">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#bfa46f] text-[12px] font-semibold text-white px-3 py-1 rounded-full shadow">
                  {blog.category}
                </span>
              </div>
              <div className="px-6 pt-4 pb-6 flex flex-col flex-1">
                <span className="text-xs text-[#bfa46f] font-semibold mb-1">
                  By {blog.author}
                </span>
                <h3 className="font-bold text-lg leading-tight mb-2 text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm flex-1">{blog.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default BlogSection;
