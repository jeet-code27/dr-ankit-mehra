import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: "Laser Hair Removal in Ajmer - Hair-Free Skin | Dr. Ankit Mehra",
  description:
    "Achieve long-lasting smooth skin with laser hair removal in Ajmer. Safe, effective, and suitable for all skin types at Dr. Ankit Mehra's clinic.",
  keywords: [
    "laser hair removal Ajmer",
    "permanent hair removal Ajmer",
    "full body laser hair removal",
    "facial hair laser treatment Ajmer",
    "safe laser hair removal",
    "affordable laser hair removal Ajmer",
    "best laser hair removal clinic Ajmer",
    "dermatologist laser hair removal",
    "hair-free skin treatments Ajmer",
    "unwanted hair removal Ajmer"
  ],
  openGraph: {
    title: "Laser Hair Removal in Ajmer - Hair-Free Skin | Dr. Ankit Mehra",
    description:
      "Achieve long-lasting smooth skin with laser hair removal in Ajmer. Safe, effective, and suitable for all skin types at Dr. Ankit Mehra's clinic.",
    images: [
      {
        url: "/images/7588.jpg",
        width: 1200,
        height: 630,
        alt: "Laser Hair Removal in Ajmer",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/laser-hair-removal/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/laser-hair-removal/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Hair Removal in Ajmer - Hair-Free Skin | Dr. Ankit Mehra",
    description:
      "Achieve long-lasting smooth skin with laser hair removal in Ajmer. Safe, effective, and suitable for all skin types at Dr. Ankit Mehra's clinic.",
    images: ["/images/7588.jpg"],
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
    "application-name": "Dr. Ankit Mehra - Laser Hair Removal",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const LaserHairRemoval = () =>
{
  const skinInfo = {
    title: "Laser Hair Removal",
    description:
      "This technology targets hair follicles to reduce unwanted hair growth, providing long-term results for various body areas.",
    image: "/images/home/laserHairRemoval.jpg",
    details: [
      {
        category: "Symptoms",
        items: [
          "Dense and excess hair on face",
          "Excess hair on arms",
          "Excess hair on legs",
          "Unwanted hair in various body areas",
        ],
      },
      {
        category: "Causes",
        items: ["Genetic factors", "Hormonal factors", "Specific medical conditions"],
      },
      {
        category: "Risks",
        items: ["Redness", "Skin irritation", "Pigmentation issues", "Temporary discomfort"],
      },
      {
        category: "Prevention",
        items: [
          "Avoid sun exposure before and after treatment",
          "Proper aftercare",
          "Avoid sunscreen before treatment",
        ],
      },
    ],
    benefits: [
      "Permanent reduction of unwanted hair",
      "Smooth and hair-free skin",
      "Safe for all skin types",
      "No ingrown hairs compared to waxing/shaving",
      "Quick and effective treatment sessions",
      "Long-term cost savings compared to temporary methods",
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
              alt="Laser hair removal procedure showing professional treatment targeting hair follicles"
              className="w-full h-full object-cover"
              width={1200}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{skinInfo.title}</h1>
              <p className="text-lg md:text-xl opacity-90">Advanced Hair Removal Solutions</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed">{skinInfo.description}</p>
            </div>

            {/* Details */}
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
              <h2 className="text-2xl font-bold text-indigo-800 mb-6">
                ✨ Benefits of Laser Hair Removal
              </h2>
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
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
                  Book Your Laser Hair Removal Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Badge */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Laser Hair Removal</h3>
              <p className="text-gray-600">All procedures performed by certified specialist</p>
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

export default LaserHairRemoval;
