"use client";

import React from 'react';

const Appointment = () =>
{
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        // Handle form submission logic here
        const formData = new FormData(e.target);
        console.log('Form submitted with data:', Object.fromEntries(formData));
        // You can add API call or other submission logic here
    };

    const handleIframeError = (e) =>
    {
        e.target.style.display = 'none';
    };

    return (
        <div className="bg-[#faf2f0] min-h-screen flex items-center justify-center p-6">
            <main className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Contact Info + Map */}
                <section className="space-y-8">
                    <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 items-start md:items-center text-[#b9826c]">
                        {/* Address Block */}
                        <div className="flex items-start space-x-4 max-w-xs">
                            <div className="bg-[#b9826c] flex justify-center items-center rounded-lg p-3 shrink-0">
                                {/* Location Pin Icon */}
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1118 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <p className="text-sm leading-relaxed font-medium">
                                First Floor, 70/66, Madhyam Marg,<br />
                                Near Mansarovar Plaza, Above Accord showroom, Mansarovar<br />
                                Jaipur
                            </p>
                        </div>
                        {/* Phone Block */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-[#b9826c] flex justify-center items-center rounded-lg p-3 shrink-0">
                                {/* Phone Icon */}
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.1 2h3a2 2 0 012 1.72c.12.81.37 1.6.73 2.34a2 2 0 01-.45 2.11L9 9a16 16 0 006 6l1.83-1.83a2 2 0 012.11-.45c.73.36 1.52.6 2.34.72a2 2 0 011.72 2z"></path>
                                </svg>
                            </div>
                            <p className="font-semibold text-base">+91 8829900141</p>
                        </div>
                    </div>
                    {/* Embedded Google Map */}
                    <div className="w-full h-[420px] rounded-lg overflow-hidden rounded-[0.75rem] shadow-md">
                        <iframe
                            title="La Dermis Skin and Hair Clinic Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.7639232575297!2d75.79905631505765!3d26.869299483132426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39729352e2f15001%3A0x33925f915e94bb6!2sLa%20Dermis%20Skin%20and%20Hair%20Clinic!5e0!3m2!1sen!2sin!4v1696987990092!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                            onError={handleIframeError}
                        ></iframe>
                    </div>
                </section>

                {/* Right Appointment Form */}
                <section className="max-w-xl mx-auto flex flex-col justify-center space-y-6">
                    <p className="text-sm font-semibold text-[#b9826c] flex items-center space-x-2">
                        <span aria-hidden="true" className="inline-block w-2 h-2 rounded-full bg-[#b9826c]"></span>
                        <span>Book A Appointment</span>
                    </p>
                    <h1 className="text-4xl font-serif font-semibold text-[#b9826c] leading-tight">
                        Reach out to us today!
                    </h1>
                    <p className="text-gray-600 text-base max-w-lg">
                        It's time to take control of your skin health! Booking your appointment is easy and fast. Choose a time that works for you and our dermatology experts will be ready.
                    </p>
                    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            required
                            className="block w-full rounded-lg border border-gray-200 bg-white py-3 px-4 placeholder-gray-400 focus:outline-none focus:border-[#b9826c] focus:ring-1 focus:ring-[#b9826c] transition"
                            aria-label="Name"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="E-mail Address"
                                required
                                className="rounded-lg border border-gray-200 bg-white py-3 px-4 placeholder-gray-400 focus:outline-none focus:border-[#b9826c] focus:ring-1 focus:ring-[#b9826c] transition"
                                aria-label="E-mail Address"
                            />
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Phone No."
                                pattern="[0-9+ -]{7,15}"
                                className="rounded-lg border border-gray-200 bg-white py-3 px-4 placeholder-gray-400 focus:outline-none focus:border-[#b9826c] focus:ring-1 focus:ring-[#b9826c] transition"
                                aria-label="Phone Number"
                            />
                        </div>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            placeholder="Write Message"
                            className="resize-none rounded-lg border border-gray-200 bg-white py-3 px-4 placeholder-gray-400 focus:outline-none focus:border-[#b9826c] focus:ring-1 focus:ring-[#b9826c] transition"
                            aria-label="Write Message"
                        ></textarea>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6a4f3a] px-7 py-3 font-semibold text-white shadow-md transition-colors hover:bg-[#5a4232] focus:outline-none focus:ring-2 focus:ring-[#b9826c] focus:ring-offset-2"
                            aria-label="Send Message"
                        >
                            Send Message
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Appointment;