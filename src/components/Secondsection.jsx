import React from 'react';
import { SiAltiumdesigner } from "react-icons/si";
import { SiAffinitydesigner } from "react-icons/si";
import { FaRegBuilding } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const services = [
    {
        title: 'Architectural Design',
        description:
            "Dream it, we’ll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!",
        icon: <SiAltiumdesigner size={36} color="#d1a945" />,
    },
    {
        title: 'Interior Design & Planning',
        description:
            "Make your space shine! Our team creates inviting, beautiful interiors that reflect your style and make every room a favorite place to be.",
        icon: <SiAffinitydesigner size={36} color="#d1a945" />,
    },
    {
        title: 'Consulting Services',
        description:
            "Consider us your design whisperers! We provide expert advice to help your project sparkle with creativity, efficiency, and spot-on solutions.",
        icon: <MdCall size={36} color="#d1a945" />,
    },
    {
        title: 'Project Management',
        description:
            "We handle the hustle! From start to finish, we keep your project on track, on budget, and stress-free – so you can sit back and watch the magic happen.",
        icon: <FaRegBuilding size={36} color="#d1a945" />,
    },
];

const Section = () => (
    <section className="relative min-h-[70vh] bg-[#fafafa]">
        {/* Faint Geometric Background (absolute, use SVG or PNG as needed) */}
        <div className="absolute inset-0 pointer-events-none bg-no-repeat bg-top-center bg-cover opacity-10 "
            style={{
                backgroundImage: 'url("/building.jpg")'
            }}
        />

        {/* Centered Content Container */}
        <div className="max-w-7xl mx-auto py-24 px-4 relative z-10 flex flex-col items-center">
            {/* Badge */}
            <div className="mb-8">
                <span className="px-4 py-2 rounded-full bg-white shadow text-sm font-bold text-[#d1a945] border border-gray-200">
                    ● WHO WE ARE
                </span>
            </div>
            {/* Heading + Subheading */}
            <h2 className="text-5xl font-bold text-center mb-4">
                Experience <span className="text-secondary font-custom">The Art Of Interior Design</span>
            </h2>
            <p className="text-gray-700 text-center text-lg font-Lato max-w-2xl mb-12">
                We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.
            </p>
            {/* Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl shadow-md p-8 flex flex-col h-full"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xl font-bold font-custom text-gray-900">{service.title}</span>
                            <span>{service.icon}</span>
                        </div>
                        <hr className="my-4 border-gray-200" />
                        <p className="text-gray-600 font-Lato text-base">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Section;
