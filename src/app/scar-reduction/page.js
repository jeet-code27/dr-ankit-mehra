import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Effective Scar Reduction Treatments - Clear Skin | Dr. Ankit Mehra",
  description:
    "Minimize scars and restore smooth skin with advanced scar reduction therapies. Proven techniques for acne scars, injury scars, and more.",
  keywords: [
    "scar reduction treatment",
    "acne scar removal",
    "injury scar treatment",
    "scar removal Ajmer",
    "laser scar treatment",
    "dermatologist scar treatment",
    "skin resurfacing for scars",
    "advanced scar therapies",
    "Dr. Ankit Mehra scar treatment",
    "smooth skin treatments"
  ],
  openGraph: {
    title:
      "Effective Scar Reduction Treatments - Clear Skin | Dr. Ankit Mehra",
    description:
      "Minimize scars and restore smooth skin with advanced scar reduction therapies. Proven techniques for acne scars, injury scars, and more.",
    images: [
      {
        url: "/images/before-after-portrait-woman-retouched-scaled.jpg",
        width: 2560,
        height: 1707,
        alt: "Scar Reduction Treatment - Before and After",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/scar-reduction/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/scar-reduction/",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Effective Scar Reduction Treatments - Clear Skin | Dr. Ankit Mehra",
    description:
      "Minimize scars and restore smooth skin with advanced scar reduction therapies. Proven techniques for acne scars, injury scars, and more.",
    images: ["/images/before-after-portrait-woman-retouched-scaled.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": "-1",
      "max-video-preview": "-1",
    },
  },
  other: {
    "application-name": "Dr. Ankit Mehra - Scar Reduction Treatments",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const ScarReduction = () =>
{
  const skinInfo = {
    title: "Scar Reduction",
    description:
      "Scar reduction treatments can minimize scars from acne, injuries, or surgery. Methods include microneedling, laser therapy, and dermal fillers.",
    image: "/images/home/before-after-portrait-woman-retouched-760x428.jpg",
    details: [
      {
        category: "Symptoms",
        items: ["Raised or depressed scars", "Discoloration", "Rough texture"],
      },
      {
        category: "Causes",
        items: ["Skin trauma", "Inflammation", "Improper wound care", "Genetics"],
      },
      {
        category: "Risks",
        items: ["Skin sensitivity", "Irritation", "Redness", "Rare infection risk"],
      },
      {
        category: "Prevention",
        items: [
          "Avoid picking at wounds",
          "Maintain proper wound care",
          "Use sunscreen on healing scars",
          "Keep skin moisturized",
        ],
      },
    ],
  };

  const benefits = [
    "Smoothens uneven skin texture",
    "Reduces visibility of acne & injury scars",
    "Improves skin tone & discoloration",
    "Boosts collagen production for firmer skin",
    "Restores confidence with clearer skin",
    "Safe, non-surgical, and dermatologist-approved",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <Image
              src={skinInfo.image}
              alt="Scar reduction treatment showing professional procedures to minimize scars"
              className="w-full h-full object-cover"
              width={1200}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {skinInfo.title}
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Advanced Scar Reduction Treatments
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="p-6 md:p-8">
            <div className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed">
                {skinInfo.description}
              </p>
            </div>

            {/* Symptoms / Causes / Risks / Prevention */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skinInfo.details.map((section, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-indigo-100 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                    <span className="inline-block w-3 h-3 bg-indigo-600 rounded-full mr-3"></span>
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ✅ Benefits Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-indigo-800 mb-6">✨  Benefits of Scar Reduction Treatments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-xl border border-indigo-100 shadow-sm"
                  >
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 text-center">
              <Link href={"/bookconsultation"}>
                <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Book Your Scar Reduction Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Badge Section */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Professional Scar Reduction Treatments
              </h3>
              <p className="text-gray-600">
                All procedures performed by certified dermatologist
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">FDA Approved</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Safe & Effective</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScarReduction;
