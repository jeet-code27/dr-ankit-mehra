import Image from 'next/image';
import Link from 'next/link';
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
                            Welcome to Dr. Ankit Mehra’s Dermatology Clinic in Ajmer
                        </h1>
                        <p className="text-gray-900 text-justify mb-8 leading-relaxed text-sm sm:text-base font-sans">
                            Where expertise, innovation, and compassionate care unite to offer comprehensive solutions for all your skin and hair needs. Dr. Ankit Mehra brings over 12 years of experience in the field, with a background as a former Assistant Professor at JLN Medical College, Ajmer.
                        </p>
                        <p className="text-gray-900 text-justify mb-8 leading-relaxed text-sm sm:text-base font-sans">
                            Having conducted over 8,000 consultations and performed more than 500 laser and skin treatments, Dr. Mehra is a trusted expert who combines clinical precision with a personalized approach to patient care.
                        </p>
                        <p className="text-gray-900 text-justify mb-8 leading-relaxed text-sm sm:text-base font-sans">
                            Our clinic specializes in diagnosing, treating, and managing a wide range of dermatological concerns. We are dedicated to enhancing your skin and hair health by utilizing advanced technology and customized treatment plans designed to boost your confidence.
                        </p>
                        <div className="flex  flex-col md:flex-row gap-8 mb-10">
                            <ul className="space-y-3 text-[#6d6a6f] font-sans flex-1">
                                <li className="flex items-center gap-3">
                                    <Image
                                        src="/images/checkmark.png"   // path in your /public folder
                                        alt="check icone"
                                        width={20}
                                        height={20}
                                    />

                                    Commitment to Excellence in Skin Health
                                </li>
                                <li className="flex items-center gap-3">
                                    <Image
                                        src="/images/checkmark.png"   // path in your /public folder
                                        alt="check icone"
                                        width={20}
                                        height={20}
                                    />
                                    State-of-the-Art Facility and Technology
                                </li>
                                <li className="flex items-center gap-3">
                                    <Image
                                        src="/images/checkmark.png"   // path in your /public folder
                                        alt="check icone"
                                        width={20}
                                        height={20}
                                    />
                                    Trusted by Thousands of Satisfied Patients
                                </li>
                            </ul>

                            {/* Experience Badge - Positioned here for better alignment */}
                            <div className="flex justify-center md:justify-end">
                                <div className="bg-[#b97e63] rounded-3xl flex flex-col items-center justify-center min-w-[180px] w-full max-w-[200px] px-4 py-6 text-white select-none">
                                    <Image
                                        src="/images/doctor.png" // put your image inside /public/images
                                        alt="Doctor icone"
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                     
                                    <p className="text-5xl font-serif font-semibold leading-none tracking-tight select-text mb-1">12+</p>
                                    <p className="text-center text-xs font-sans font-semibold leading-snug" style={{ lineHeight: '1.2' }}>
                                        Years Of<br />Experience
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex sm:justify-start justify-center flex-wrap gap-4 sm:gap-6">
                            <Link href={'/about-us'} >
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
                            </Link>
                            <Link href={'/contact-us'}>
                            <button
                                aria-label="Contact Us"
                                className="border border-[#b97e63] text-[#b97e63] hover:bg-[#b97e63] hover:text-white transition-colors duration-300 rounded-md px-6 sm:px-7 py-3 font-medium text-sm"
                            >
                                Contact Us
                            </button>
                            </Link>
                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsSection;