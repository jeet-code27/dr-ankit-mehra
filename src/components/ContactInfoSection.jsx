import Link from 'next/link';
import React from 'react';

const ContactInfoSection = () =>
{
    return (
        <div className=" bg-[#F1D3C0] w-full">
            <section className="max-w-6xl mx-auto px-6 py-10 sm:py-14">
                <div className="flex flex-col sm:flex-row justify-between gap-y-10 text-[#967264]">
                    {/* Contact Us */}
                    <div className="flex flex-col gap-3 sm:w-1/3">
                        <div className="flex items-center gap-2 text-[#a67559] font-semibold text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#a67559"
                                strokeWidth="2"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h8l4 4v10a2 2 0 01-2 2z" />
                            </svg>
                            Contact Us
                        </div>
                        <p className='text-[#684E39]'>
                            <span className="font-semibold">Email: </span>
                            <a
                                href="mailto:ankit456.mehra@gmail.com"
                                className="text-sm   hover:underline"
                            >
                                ankit456.mehra@gmail.com
                            </a>

                        </p>
                        <p className='text-[#684E39]'>
                            <span className="font-semibold">Phone: </span>
                            <a
                                href="tel:+919697041111"
                                className="text-sm  hover:underline"
                            >
                                +91 96970 41111
                            </a>

                        </p>
                    </div>

                    {/* Our Location */}
                    <div className="flex flex-col gap-3 sm:w-1/3 border-l border-r border-[#bfb3af] px-6">
                        <div className="flex items-center gap-2 text-[#a67559] font-semibold text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#a67559"
                                strokeWidth="2"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13 21.314l-4.657-4.657A8 8 0 1117.657 16.657z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Our Location
                        </div>
                         
                        <Link href="https://www.google.com/maps/place/Dr+Ankit+Mehra(MD+Skin+%26+VD)+%E0%A4%9A%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%B0%E0%A5%8B%E0%A4%97,%E0%A4%AF%E0%A5%8C%E0%A4%A8%E0%A4%B0%E0%A5%8B%E0%A4%97+%E0%A4%8F%E0%A4%B5%E0%A4%82+%E0%A4%B8%E0%A5%8C%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%B0%E0%A5%8B%E0%A4%97+%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B7%E0%A4%9C%E0%A5%8D%E0%A4%9E(Senior+Skin+Specialist+Dermatologist+%26+Cosmetologist)/@26.4715689,74.6326362,17z/data=!3m1!4b1!4m6!3m5!1s0x396be7ec6b89ce17:0x9014bae9b1d9ff78!8m2!3d26.4715641!4d74.6352111!16s%2Fg%2F11mn889n60?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D" passHref 
                        target='_blank'
                            className='text-[#684E39]'
                        >
                           
                                62, Lane no 2, opp. Hotel Ambassador, Nagina Bagh,
                                Muslim Mochi Mohalla, Ajmer, Rajasthan 305001
                            
                        </Link>

                    </div>

                    {/* Working Hours */}
                    <div className="flex flex-col gap-3   pl-6 sm:w-1/3">
                        <div className="flex items-center gap-2  text-[#a67559] font-semibold text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#a67559"
                                strokeWidth="2"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Working Hours
                        </div>
                        <p className=" text-[#684E39] leading-relaxed text-sm sm:text-base max-w-xs sm:max-w-none">
                            Monday – Saturday : 11 am - 2 pm, 5 - 7 pm<br />
                            Sunday : 11 am - 2 pm
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactInfoSection;