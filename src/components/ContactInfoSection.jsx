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
                        <p>
                            <span className="font-semibold">Email:</span> ladermisclinic@gmail.com
                        </p>
                        <p>
                            <span className="font-semibold">Phone:</span> +91 8829900141
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
                        <p className="text-[#6a5a52] leading-relaxed text-sm sm:text-base max-w-xs sm:max-w-none">
                            First Floor, 70/66, Madhyam Marg, Near Mansarovar Plaza, Above Accord showroom, Mansarovar Jaipur
                        </p>
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
                        <p className="text-[#6a5a52] leading-relaxed text-sm sm:text-base max-w-xs sm:max-w-none">
                            Monday – Saturday : 9:30 am to 8:00 pm<br />
                            Sunday : 9:30 am to 2:30 pm
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactInfoSection;