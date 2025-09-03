import React from "react";

const processSteps = [
  {
    title: "Initial Consultation",
    subtitle: "01.",
    number: "01",
    img: "/colorful-pastel-minimal-interior-design.jpg",
    desc: "We begin by understanding your vision, goals, and needs, followed Antra.",
  },
  {
    title: "Design & Planning",
    subtitle: "02.",
    number: "02",
    img: "/modern-minimalist-office.jpg",
    desc: "Our team creates detailed designs that reflect your requirements.",
  },
  {
    title: "Implementation",
    subtitle: "03.",
    number: "03",
    img: "/modern-minimalistic-interior-design-light-bright-monochrome-room-with-black-white-furniture-c.jpg",
    desc: "With carefully selected contractors, we manage every phase.",
  },
  {
    title: "Project Handover",
    subtitle: "04.",
    number: "04",
    img: "/stylish-living-room-with-gray-sofa-modern-decor.jpg",
    desc: "Upon completion, we conduct a thorough review, making sure all details.",
  },
];

const ProcessSection = () => (
  <section className="bg-[#fafafa] relative w-full overflow-hidden py-20">
    {/* Geometric faint background (can use SVG as image background) */}
    <div
      className="absolute inset-0 pointer-events-none opacity-10 bg-no-repeat bg-left-bottom bg-cover"
      style={{ backgroundImage: 'url("/images/geometry-bg.png")' }}
    />

    <div className="max-w-7xl mx-auto px-4 z-10 relative">
      {/* Badge */}
      <div className="mb-6">
        <span className="px-4 py-2 rounded-full bg-white shadow text-xs font-bold text-[#bfa46f] border border-gray-200">
          ● HOW WE WORK
        </span>
      </div>
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-3 leading-tight">
        Description <span className="text-[#bfa46f]">Architecture Process</span> For Exceptional Results.
      </h2>

      {/* Steps Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {processSteps.map((step, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md pb-4 pt-0 px-4 overflow-hidden transition group"
          >
            {/* Card Image */}
            <div className="w-full h-32 sm:h-40 md:h-44 rounded-t-2xl overflow-hidden">
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-4 flex flex-col">
              <span className="text-sm sm:text-[1.12rem] font-bold mb-1 text-[#bfa46f]">{step.subtitle}</span>
              <span className="font-bold text-base sm:text-lg text-gray-900 mb-1">{step.title}</span>
              <p className="text-gray-700 font-light mb-4 text-sm sm:text-base">{step.desc}</p>
              {/* Step Number Overlay (bottom right) */}
              <span className="ml-auto text-3xl sm:text-4xl font-bold text-[#ededed] leading-none select-none mt-auto">{step.number}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Footer text */}
      <div className="text-gray-500 text-sm text-center mt-8 font-light">
        We've been working hard to impress you.{" "}
        <span className="text-[#bfa46f] font-semibold cursor-pointer underline hover:text-[#d1a945]">
          Start Your's Today
        </span>
      </div>
    </div>
  </section>
);

export default ProcessSection;
