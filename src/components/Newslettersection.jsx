import React from "react";

const NewsletterSection = () => (
    <section className="relative py-20 flex items-center font-custom  justify-center min-h-[60vh] h-full overflow-hidden bg-[#f9f9f9]"

    >
        {/* Background architectural line art effect */}
        <div className="absolute   inset-0 w-full  pointer-events-none z-0">
            <img className="w-full h-full object-cover opacity-10 absolute right-0" src="/building.jpg" alt="" />
        </div>
        <div className="relative z-10 max-w-2xl w-full mx-auto text-center px-4">
            {/* Badge */}
            <span className="inline-block px-4 py-1 rounded-full bg-white shadow text-xs font-bold text-[#bfa46f] border border-gray-200 mb-6">
                ● SUBSCRIBE TO THE NEWSLETTER
            </span>
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Join <span className="text-[#bfa46f]">Our Newsletter</span>
                <br />
                <span className="text-[#bfa46f]">Stay</span> Up To Date
            </h2>
            {/* Description */}
            <p className="mb-10 text-gray-600 text-base text-center sm:text-lg">
                Join our newsletter. Learn something new, gain access to exclusive content,<br className="hidden sm:block" />
                and stay informed with the latest updates in the industry.
            </p>
            {/* Form */}
            <form className="max-w-md mx-auto flex items-center justify-center">
                <input
                    type="email"
                    placeholder="Email address.."
                    className="flex-1 border-b border-gray-400 bg-transparent outline-none px-4 py-2 text-base text-gray-900"
                />
                <button
                    type="submit"
                    className="ml-2 bg-[#bfa46f] hover:bg-[#a08341] text-white rounded-full w-9 h-9 flex items-center justify-center transition"
                >
                    {/* Arrow icon */}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 13L13 7M13 7V13M13 7H7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </form>
        </div>
    </section>
);

export default NewsletterSection;
