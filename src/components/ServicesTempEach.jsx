"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServicesTempEach = ({ data }) =>
{
    return (
        <main className="max-w-7xl mx-auto px-0 md:px-6 py-10 text-gray-700">
            <div className="flex flex-col gap-10">
                {/* Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.images.map((img, index) => (
                        <div
                            key={index}
                            className={`relative w-full h-64 md:h-96 ${img.showOnMobile ? "block" : "hidden md:block"
                                }`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="rounded-xl object-cover"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>

                {/* Intro */}
                <div className="space-y-4 max-w-3xl   ">
                    {data.intro.map((para, idx) => (
                        <p key={idx} className="leading-relaxed">
                            {para}
                        </p>
                    ))}
                </div>

             

                {/* Section Lists (inside cards) */}
                <div className="grid grid-cols-1  lg:grid-cols-2 gap-8  w-full mx-auto">
                    {data.sections.map(
                        (section, idx) =>
                            section.lists && (
                                <div
                                    key={idx}
                                    className=" p-6 rounded-lg shadow-sm"
                                >
                                    <h2 className="font-semibold mb-4 text-gray-900">
                                        {section.title}
                                    </h2>
                                    <div className="f w-full   gap-6   text-gray-700">
                                        {section.lists.map((list, listIdx) => (
                                            <ul key={listIdx} className="space-y-2 w-min-[400px]    list-none">
                                                {list.map((item, itemIdx) => (
                                                    <li key={itemIdx} className="flex  items-start gap-2">
                                                        <span className="text-pink-400  mt-1">✔</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            )
                    )}
                </div>

                {/* Outro */}
                <div className="space-y-4 max-w-3xl  ">
                    {data.outro.map((para, idx) => (
                        <p
                            key={idx}
                            className={`${idx === data.outro.length - 1 ? "font-semibold" : "leading-relaxed"
                                }`}
                        >
                            {para}
                        </p>
                    ))}
                </div>

                {/* Button */}
                <div className="flex justify-center">
                    <Link href={'/bookconsultation'}>
                    <button
                        className="bg-gray-700 text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-900 transition-colors duration-300"
                        aria-label="Book Appointment"
                    >
                        {data.button.text}
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ServicesTempEach;
