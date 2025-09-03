import React from "react";

const featuresLeft = [
    "Latest Technologies",
    "5 Years Warranty"
];
const featuresRight = [
    "High-Quality Designs",
    "Residential Design"
];

const InspiringSection = () => {
    return (
        <section
            className="relative min-h-[75vh] flex items-center"
            style={{
                backgroundImage: 'url("/modern-minimalistic-interior-design-light-bright-monochrome-room-with-black-white-furniture-c.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Overlay and branding */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-[#212121c0] to-[#212121f5] z-0" />
            <div className="absolute inset-0 z-0 flex justify-center items-center overflow-hidden pointer-events-none">
                <span className="font-bold text-[16vw] md:text-[10vw] text-white/10 select-none uppercase tracking-widest">
                    Vastukaar
                </span>
            </div>

            {/* Main content (responsive flex) */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-24 flex flex-col md:flex-row items-center md:items-start">
                {/* Left Side */}
                <div className="w-full md:w-1/2 md:pr-8 flex flex-col items-center md:items-start">
                    {/* Badge */}
                    <div className="mb-5">
                        <span className="px-4 py-2 rounded-full bg-[#232227] shadow text-xs font-semibold text-[#d1a945] border border-gray-700">
                            ● STARTED IN 1991
                        </span>
                    </div>
                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-custom leading-tight mb-3 text-white text-center md:text-left">
                        Where Spaces Inspire, And <br />
                        <span className="text-[#d1a945]">
                            Design Comes Alive
                        </span>
                    </h2>

                    {/* Features (stack or row) */}
                    <div className="flex flex-col sm:flex-row gap-6 mb-5 mt-7 font-Lata flex-wrap justify-center md:justify-start w-full">
                        <ul className="space-y-3">
                            {featuresLeft.map((feat, i) => (
                                <li key={i} className="flex items-center text-white font-medium">
                                    <span className="mr-2 text-[#d1a945] font-bold text-2xl">✓</span> {feat}
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-3">
                            {featuresRight.map((feat, i) => (
                                <li key={i} className="flex items-center text-white font-medium">
                                    <span className="mr-2 text-[#d1a945] font-bold text-2xl">✓</span> {feat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Supporting text */}
                    <p className="text-gray-300 text-base font-Lata max-w-lg mb-8 text-center md:text-left">
                        Whether it’s your home, office, or a commercial project, we are always dedicated to bringing your vision to life. Our numbers speak better than words:
                    </p>

                    {/* CTA Button */}
                    <button className="flex items-center gap-2 px-7 py-3 font-bold text-white text-base rounded-full border border-white/60 shadow bg-[#232227] hover:bg-[#d1a945] hover:text-black transition">
                        More About Us
                        <span className="bg-[#d1a945] rounded-full p-1 ml-2 text-black font-bold">&#8594;</span>
                    </button>
                </div>

                {/* Right Side Image */}
                <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
                    <div className="relative w-[90vw] max-w-[540px] h-[60vw] max-h-[540px] md:w-[540px] md:h-[540px]">
                        <img
                            src="/modern-living-room-with-blue-accents.jpg"
                            alt="Living Room"
                            className="w-full h-full object-cover rounded-[36px] shadow-2xl border border-gray-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InspiringSection;
