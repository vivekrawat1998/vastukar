import React, { useState } from "react";
import CountUp from "react-countup";

const services = [
    {
        label: "Residential Interior Design",
        description: "Cozy, stylish living spaces personalized for you.",
        img: "/colorful-pastel-minimal-interior-design.jpg",
    },
    {
        label: "Outdoor & Landscape Design",
        description: "Beautiful outdoor environments and landscaping solutions.",
        img: "/modern-living-room-with-blue-accents.jpg",
    },
    {
        label: "Interior Design Consultation",
        description: "Providing professional advice on concepts, color schemes & material selection.",
        img: "/modern-minimalistic-interior-design-light-bright-monochrome-room-with-black-white-furniture-c.jpg",
    },
    {
        label: "Commercial Interior Design",
        description: "Modern workspaces for productivity and brand identity.",
        img: "/modern-minimalistic-interior-design-light-bright-monochrome-room-with-black-white-furniture-c.jpg",
    },
    {
        label: "Renovation And Remodeling",
        description: "Refresh, upgrade, and transform your spaces.",
        img: "/stylish-living-room-with-gray-sofa-modern-decor.jpg",
    },
    {
        label: "Interior 2D/3D Layouts",
        description: "Accurate plans and models for flawless execution.",
        img: "/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg",
    },
];

const stats = [
    {
        value: 13,
        title: "Years Experience",
        desc: "Improving homes with expert craftsmanship for years",
    },
    {
        value: 190,
        suffix: "+",
        title: "Projects Completed",
        desc: "Over 250 successful projects delivered with quality and care",
    },
    {
        value: 260,
        suffix: "+",
        title: "Skilled Tradespeople",
        desc: "Our team of 30 experts ensures top-quality results",
    },
    {
        value: 328,
        suffix: "+",
        title: "Client Satisfaction",
        desc: "All of our clients are satisfied with our work and service",
    },
];

const SectionServicesStats = () => {
    const [active, setActive] = useState(2);

    return (
        <section className="w-full relative md:py-44 bg-[#fafafa] pt-16 px-2 md:px-8 flex flex-col items-center min-h-[80vh]">
            {/* HEADER */}
            <div className="max-w-7xl mx-auto mb-10">
                <div className="mb-6">
                    <span className="px-3 py-1 rounded-full bg-white shadow text-xs font-bold text-[#d1a945] border border-gray-200">
                        ● OUR SERVICES
                    </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                    Explore Our <span className="text-[#d1a945]">Comprehensive Interior Design Services</span>
                </h2>
                <p className="text-gray-700 max-w-2xl text-base mb-2">
                    We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.
                </p>
            </div>

            {/* SERVICES & IMAGE */}
            <div className="flex flex-col md:flex-row w-full max-w-5xl gap-10 md:gap-16">
                {/* Left: Service image and overlay description */}
                <div className="flex-1 flex justify-center items-start">
                    <div className="relative w-full max-w-md min-h-[340px] flex items-center justify-center">
                        <img
                            src={services[active].img}
                            alt={services[active].label}
                            className="w-full h-[340px] object-cover rounded-2xl"
                        />
                        {/* Overlay for description and view button */}
                        <div className="absolute inset-x-0 bottom-6 flex flex-col items-center">
                            <button className="bg-black/80 text-white font-bold px-6 py-2 rounded-full mb-3 text-sm shadow-md">
                                View
                            </button>
                            <div className="bg-black/80 text-white rounded-xl px-5 py-3 text-center text-sm max-w-[90%] shadow-lg">
                                {services[active].description}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right: Services list */}
                <div className="flex-1 min-w-[280px] mt-8 md:mt-0">
                    {services.map((svc, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setActive(i)}
                            onClick={() => setActive(i)}
                            className={`flex items-center justify-between group px-6 py-4 cursor-pointer transition-all border-b ${active === i
                                ? 'bg-[#f7f6f1] text-[#d1a945] font-bold border-[#d1a945]'
                                : 'hover:bg-[#f4f7fa] text-gray-900 border-gray-200'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <span className={`text-xs ${active === i ? 'font-bold text-[#d1a945]' : 'text-gray-400'} mr-2`}>
                                    {`${(i + 1).toString().padStart(2, '0')}`}
                                </span>
                                <span className="text-base sm:text-lg">{svc.label}</span>
                            </div>
                            {/* Arrow or highlight */}
                            {active === i ? (
                                <button className="w-9 h-9 bg-[#d1a945] rounded-full flex items-center justify-center shadow hover:bg-yellow-600 transition-all">
                                    <span className="text-xl text-white">&#8594;</span>
                                </button>
                            ) : (
                                <span className="text-lg text-gray-400 group-hover:text-black">&#8594;</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* STATS SECTION */}
            <div className="w-full relative z-30 mt-32 max-w-7xl font-custom mx-auto flex flex-col lg:flex-row gap-10 items-center">
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-8 justify-between items-center">
                    {stats.map((item, idx) => (
                        <div key={idx} className="flex-1 text-center px-2">
                            <CountUp
                                end={item.value}
                                duration={2}
                                enableScrollSpy
                                scrollSpyOnce
                                suffix={item.suffix || ""}
                                className="text-4xl sm:text-5xl font-bold text-black mb-2"
                            />
                            <hr className="border-gray-300 my-2 max-w-[120px] mx-auto" />
                            <div className="text-lg font-bold mb-1">{item.title}</div>
                            <div className="text-gray-500 font-thin font-Lata text-sm">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-[105vh]  inset-0 z-0 flex justify-center items-center overflow-hidden pointer-events-none">
                <span className="font-bold text-[14vw] md:text-[10vw] text-gray-200 select-none  uppercase tracking-widest">
                    Vastukaar
                </span>
            </div>

        </section >
    );
};

export default SectionServicesStats;
