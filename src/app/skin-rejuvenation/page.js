import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: "Skin Rejuvenation for a Radiant, Youthful Glow | Dr. Ankit Mehra",
  description:
    "Refresh your skin with advanced rejuvenation techniques. Achieve smoother, brighter, and healthier skin at Dr. Ankit Mehra's clinic.",
  keywords: [
    "skin rejuvenation",
    "skin glow treatment Ajmer",
    "anti-aging treatments",
    "face rejuvenation",
    "laser skin rejuvenation",
    "collagen boost treatment",
    "Dr. Ankit Mehra skin clinic",
    "dermatology treatments for aging",
    "facial rejuvenation Ajmer",
    "radiant skin care solutions"
  ],
  openGraph: {
    title: "Skin Rejuvenation for a Radiant, Youthful Glow | Dr. Ankit Mehra",
    description:
      "Refresh your skin with advanced rejuvenation techniques. Achieve smoother, brighter, and healthier skin at Dr. Ankit Mehra's clinic.",
    images: [
      {
        url: "/images/young-beautiful-girl-lies-beautician-s-table-receives-procedures-scaled.jpg",
        width: 2560,
        height: 1707,
        alt: "Skin Rejuvenation - Dr. Ankit Mehra",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/skin-rejuvenation/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/skin-rejuvenation/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skin Rejuvenation for a Radiant, Youthful Glow | Dr. Ankit Mehra",
    description:
      "Refresh your skin with advanced rejuvenation techniques. Achieve smoother, brighter, and healthier skin at Dr. Ankit Mehra's clinic.",
    images: ["/images/young-beautiful-girl-lies-beautician-s-table-receives-procedures-scaled.jpg"],
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
    "application-name": "Dr. Ankit Mehra - Skin Rejuvenation",
    author: "Dr. Ankit Mehra",
    Publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const SkinRejuvenationComponent = () =>
{
  const skinInfo = {
    title: "Skin Rejuvenation",
    description:
      "Skin rejuvenation refers to treatments that aim to restore a youthful appearance to the skin by addressing issues like wrinkles, fine lines, uneven texture, and pigmentation. These treatments often involve chemical peels, laser therapy, or other advanced techniques to improve skin quality and radiance.",
    image: "/images/home/young-beautiful-girl-lies-beautician-s-table-receives-procedures-scaled-qwlpr8v570ly32hd4hh19tk1zi61z4x4ivqz277fwg.jpg",
    benefits: [
      "Improves skin texture & tone",
      "Reduces fine lines & wrinkles",
      "Minimizes pigmentation & age spots",
      "Treats acne scars & blemishes",
      "Tightens & firms the skin",
      "Shrinks pores & controls oil",
      "Boosts hydration & glow",
      "Safe & non-surgical treatments",
    ],
    details: [
      {
        category: "Symptoms",
        items: [
          "Fine lines and wrinkles",
          "Uneven skin texture",
          "Hyperpigmentation",
          "Dull complexion",
          "Loss of elasticity",
        ],
      },
      {
        category: "Causes",
        items: [
          "Aging process",
          "Sun exposure",
          "Environmental factors",
          "Genetics",
          "Lifestyle habits",
        ],
      },
      {
        category: "Risks",
        items: [
          "Temporary redness",
          "Mild swelling",
          "Sensitivity to sun",
          "Possible peeling",
          "Rare: infection or scarring",
        ],
      },
      {
        category: "Prevention",
        items: [
          "Daily sunscreen use",
          "Proper skincare routine",
          "Healthy diet",
          "Adequate hydration",
          "Avoid smoking",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <Image
              src={skinInfo.image}
              alt="Skin rejuvenation treatment showing a woman receiving facial treatment with professional equipment"
              className="w-full h-full object-cover"
              width={1200}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{skinInfo.title}</h1>
              <p className="text-lg md:text-xl opacity-90">Advanced Skin Rejuvenation Treatments</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Description */}
            <div className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed">{skinInfo.description}</p>
            </div>

            {/* Symptoms / Causes / Risks / Prevention */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Benefits Section (moved below) */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-indigo-800 mb-6">✨ Benefits of Skin Rejuvenation</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skinInfo.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-indigo-100 shadow-sm"
                  >
                    <svg
                      className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-10 text-center">
              <Link href={"/bookconsultation"}>
                <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Schedule a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Badge Section */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Professional Skin Rejuvenation Treatments
              </h3>
              <p className="text-gray-600">All procedures performed by certified dermatologist</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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

export default SkinRejuvenationComponent;
