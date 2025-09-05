import React from 'react';

const AboutUsSection = () =>
{
    return (
        <div className="bg-[#f9f0eb] min-h-screen flex items-center justify-center p-4 sm:p-6 font-serif">
            <section className="max-w-4xl w-full bg-[#f9f0eb] text-[#b97e63]">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                    {/* Left Column - Content */}
                    <div className="flex-1 w-full">
                        <p className="flex items-center text-sm mb-4">
                            <span className="block w-3 h-3 rounded-full bg-[#b97e63] mr-2"></span>
                            About Us
                        </p>
                        <h1 className="text-3xl sm:text-4xl font-serif font-semibold mb-6 max-w-full leading-snug">
                            Welcome to La Dermis Clinic
                        </h1>
                        <p className="text-[#b37f64] mb-8 leading-relaxed text-sm sm:text-base font-sans">
                            Dr. Meenal Makkar (MBBS, MD Dermatologist, Member IADVL, Affiliate member ASPD Singapore) is a renowned dermatologist with expertise in aesthetic dermatology, pediatric dermatology, hair transplantation, and dermatosurgeries. A gold medalist, she has trained at prestigious national and international institutions, specializing in advanced laser treatments, injectables, energy-based devices, and surgical hair restoration. As the Founder &amp; Director of La Dermis Clinic, Jaipur, Dr. Meenal envisions redefining dermatology and aesthetics by integrating…
                        </p>

                        <div className="flex flex-col md:flex-row gap-8 mb-10">
                            <ul className="space-y-3 text-[#6d6a6f] font-sans flex-1">
                                <li className="flex items-center gap-3">
                                    <input type="checkbox" checked disabled className="w-4 h-4 text-[#b97e63] border-[#b97e63]" />
                                    Commitment to Excellence in Skin Health
                                </li>
                                <li className="flex items-center gap-3">
                                    <input type="checkbox" checked disabled className="w-4 h-4 text-[#b97e63] border-[#b97e63]" />
                                    State-of-the-Art Facility and Technology
                                </li>
                                <li className="flex items-center gap-3">
                                    <input type="checkbox" checked disabled className="w-4 h-4 text-[#b97e63] border-[#b97e63]" />
                                    Trusted by Thousands of Satisfied Patients
                                </li>
                            </ul>

                            {/* Experience Badge - Positioned here for better alignment */}
                            <div className="flex justify-center md:justify-end">
                                <div className="bg-[#b97e63] rounded-3xl flex flex-col items-center justify-center min-w-[180px] w-full max-w-[200px] px-4 py-6 text-white select-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-14 h-14 mb-4 stroke-white"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M7 21v-2a4 4 0 0 1 3-3.87"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <p className="text-5xl font-serif font-semibold leading-none tracking-tight select-text mb-1">10+</p>
                                    <p className="text-center text-xs font-sans font-semibold leading-snug" style={{ lineHeight: '1.2' }}>
                                        Years Of<br />Experience
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 sm:gap-6">
                            <button
                                aria-label="Read More"
                                className="bg-[#4D3B2C] hover:bg-[#684e39] transition-colors duration-300 inline-flex items-center gap-2 text-white px-6 sm:px-7 py-3 rounded-md font-medium text-sm"
                            >
                                Read More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                            <button
                                aria-label="Contact Us"
                                className="border border-[#b97e63] text-[#b97e63] hover:bg-[#b97e63] hover:text-white transition-colors duration-300 rounded-md px-6 sm:px-7 py-3 font-medium text-sm"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsSection;