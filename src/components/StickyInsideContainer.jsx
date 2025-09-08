"use client";
import React from "react";
import ServicesTempEach from "./ServicesTempEach";
import Link from "next/link";

const StickyInsideContainer = ({ data }) =>
{
    return (
        <>
            {/* Hero Section */}
            <div className="bg-[#C28566] flex rounded-3xl py-20 md:px-8 text-white text-center md:text-left max-w-8xl mx-auto">
                <span className="flex flex-col justify-center items-center text-center w-full">
                    <h1 className="text-4xl md:text-5xl font-serif mb-3">{data.treatment.title}</h1>
                    <p className="text-sm">{data.treatment.breadcrumb}</p>
                </span>
            </div>

            {/* Main Content Section */}
            <div className="bg-gray-100 p-0 md:p-6">
                <div className="flex flex-col lg:flex-row gap-6 bg-[#fff5f5] rounded-xl shadow-lg p-4 md:p-6">

                    {/* Sidebar for large screens */}
                    <aside className="hidden lg:block lg:w-1/3">
                        <div className="sticky top-6">
                            <div className="max-w-sm mx-auto mt-6 lg:mt-10 bg-[#f9f4f4] rounded-2xl p-6 md:p-8 shadow-lg">
                                <h2 className="text-2xl font-semibold  font-serif text-[#b47a5b] mb-6 text-center">
                                    Our Services
                                </h2>
                                {data.services.map((service, idx) => (
                                    <Link key={idx} href={service.url}>
                                        <button
                                            type="button"
                                            aria-label={`${service.name} service option`}
                                            className="w-full bg-white rounded-xl px-4 py-3 mb-4 flex justify-between items-center text-gray-600 shadow-sm hover:bg-[#faf7f7] hover:shadow-md transition duration-300"
                                        >
                                            <span>{service.name}</span>
                                            <span className="text-[#b47a5b] font-bold text-xl">→</span>
                                        </button>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <ServicesTempEach data={data} />

                        {/* Sidebar for small screens */}
                        <div className="block lg:hidden mt-8">
                            <div className="max-w-sm mx-auto bg-[#f9f4f4] rounded-2xl p-6 md:p-8 shadow-lg">
                                <h2 className="text-2xl font-semibold text-[#b47a5b] mb-6 text-center">
                                    Our Services
                                </h2>
                                {data.services.map((service, idx) => (
                                    <Link key={idx} href={`${service.url}`}>
                                        <button
                                            type="button"
                                            aria-label={`${service.name} service option`}
                                            className="w-full bg-white rounded-xl px-4 py-3 mb-4 flex justify-between items-center text-gray-600 shadow-sm hover:bg-[#faf7f7] hover:shadow-md transition duration-300"
                                        >
                                            <span>{service.name}</span>
                                            <span className="text-[#b47a5b] font-bold text-xl">→</span>
                                        </button>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default StickyInsideContainer;
