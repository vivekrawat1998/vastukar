import React from "react";

const Footer = () => (
    <footer className="relative bg-black bg-opacity-80 text-white pt-16 pb-8 overflow-hidden">
        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Address Block */}
            <div className="col-span-1 flex flex-col gap-3">
                <div className="flex items-center gap-2 mb-4">
                    {/* Replace with SVG or your Logo */}
                    <img src="/Logo...jpeg-removebg-preview.png" alt="Logo" className="invert brightness-200 w-20 h-10 md:w-24 md:h-12" />
                </div>
                <p className="font-medium text-white/80 leading-tight">
                    We Transform Your Vision Into Beautifully Crafted Spaces.
                </p>
                <address className="not-italic text-sm mt-2 text-white/70">
                    5609 E Sprague Ave, Spokane Valley,<br />WA 99212, USA
                </address>
            </div>
            {/* Navigation Links 1 */}
            <div className="col-span-1 flex flex-col gap-2">
                <a href="#" className="hover:text-yellow-400 transition">About Us</a>
                <a href="#" className="hover:text-yellow-400 transition">Services</a>
                <a href="#" className="hover:text-yellow-400 transition">Careers</a>
                <a href="#" className="hover:text-yellow-400 transition font-bold">Our Team</a>
                <a href="#" className="hover:text-yellow-400 transition font-bold">Blog</a>
                <a href="#" className="hover:text-yellow-400 transition font-bold">Contact Us</a>
            </div>
            {/* Navigation Links 2 */}
            <div className="col-span-1 flex flex-col gap-2">
                <a href="#" className="hover:text-yellow-400 transition">Our Projects</a>
                <a href="#" className="hover:text-yellow-400 transition">Partners</a>
                <a href="#" className="hover:text-yellow-400 transition">Partners Program</a>
                <a href="#" className="hover:text-yellow-400 transition">Affiliate Program</a>
                <a href="#" className="hover:text-yellow-400 transition">Terms & Conditions</a>
                <a href="#" className="hover:text-yellow-400 transition font-bold">Support Center</a>
            </div>
            {/* Contact and Social */}
            <div className="col-span-1 flex flex-col gap-2 justify-between">
                <div>
                    <a href="tel:+0844560789" className="font-bold text-lg text-[#bfa46f]">
                        + (084) 456-0789
                    </a>
                </div>
                <div>
                    <a href="mailto:Support@example.com" className="font-bold text-2xl text-white block mb-6">
                        Support@example.com
                    </a>
                </div>
                <div className="flex space-x-4 text-sm">
                    <a href="#" className="hover:text-yellow-400 transition">Facebook</a>
                    <span className="text-white/50">·</span>
                    <a href="#" className="hover:text-yellow-400 transition">Instagram</a>
                    <span className="text-white/50">·</span>
                    <a href="#" className="hover:text-yellow-400 transition">YouTube</a>
                    <span className="text-white/50">·</span>
                    <a href="#" className="hover:text-yellow-400 transition">Twitter</a>
                </div>
            </div>
        </div>
        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>
        {/* Copyright and Large Text */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-white/80">
                © Copyright 2025 <span className="text-[#bfa46f] font-semibold">Vastukar</span>. All rights reserved.
            </p>
        </div>
        {/* Big 'antra' text in background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-full flex justify-center pointer-events-none select-none opacity-10">
            <span className="font-extrabold text-[8vw] lowercase leading-none">Vastukar</span>
        </div>
        {/* Optional: Put your background image here */}
        <img src="/minimal-amazing-interior-design.jpg" alt="" className="absolute inset-0 w-full h-full object-cover z-0 opacity-10" />
    </footer>
);

export default Footer;
