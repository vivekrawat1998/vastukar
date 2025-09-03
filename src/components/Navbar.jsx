import React, { useState } from 'react';

const navLinks = [
  { name: "Home" },
  { name: "Services" },
  { name: "Projects" },
  { name: "Pages" },
  { name: "Blog" },
  { name: "ContactUs" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-white fixed top-0 left-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-8 md:py-6">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-white text-lg">
          <img src="/Logo...jpeg-removebg-preview.png" alt="Logo" className="invert brightness-200 w-20 h-10 md:w-24 md:h-12" />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-white text-base">
          {navLinks.map(link => (
            <li key={link.name} className="hover:text-yellow-400 cursor-pointer flex items-center gap-1">
              {link.name}
              {link.name !== "ContactUs" && <span className="ml-1">&#9662;</span>}
            </li>
          ))}
        </ul>

        {/* Right Section Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {/* Phone */}
          <div className="flex items-center gap-2 text-white/90 text-sm font-semibold">
            <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="M22 16.92V19a2 2 0 01-2.18 2A19.88 19.88 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.12.81.26 1.6.43 2.36a2 2 0 01-.45 2L7.09 10.91a16 16 0 006.18 6.18l1.49-1.49a2 2 0 012-.45c.76.17 1.55.31 2.36.43a2 2 0 011.72 2z"/>
            </svg>
            <div>
              <span className="block text-xs font-normal text-white/70">Call Us Phone</span>
              <span className="font-bold">(+480) 123 678 900</span>
            </div>
          </div>
          {/* Quote Button */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-4 py-2 rounded-full transition focus:outline-none text-sm">
            Get A Quote!
          </button>
          {/* Search Icon */}
          <button className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center">
            <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="10" cy="10" r="8" />
              <line x1="21" y1="21" x2="15.8" y2="15.8" />
            </svg>
          </button>
          {/* More Icon */}
          <button className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center">
            <svg width="24" height="24" fill="white">
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden text-white ml-2 focus:outline-none" aria-label="Open menu">
          <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="10" x2="25" y2="10" />
            <line x1="5" y1="16" x2="25" y2="16" />
          </svg>
        </button>
      </div>

      {/* Mobile Fullscreen Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black h-screen flex flex-col text-white">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button onClick={() => setMenuOpen(false)} className="text-white focus:outline-none" aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Menu Items */}
          <nav className="flex flex-col gap-6 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold hover:text-yellow-400 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
