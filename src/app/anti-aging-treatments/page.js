import Link from "next/link";
import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Anti-Aging Treatments for Youthful Appearance | Dr. Ankit Mehra",
  description:
    "Reverse signs of aging with customized anti-aging treatments. Reduce wrinkles, fine lines, and sagging skin for a refreshed look.",
  keywords: [
    "anti-aging treatments",
    "wrinkle reduction",
    "fine lines treatment",
    "sagging skin treatment",
    "botox treatment Ajmer",
    "dermal fillers",
    "skin tightening",
    "non-surgical facelift",
    "Dr. Ankit Mehra anti-aging solutions",
    "youthful skin care Ajmer",
  ],
  openGraph: {
    title: "Anti-Aging Treatments for Youthful Appearance | Dr. Ankit Mehra",
    description:
      "Reverse signs of aging with customized anti-aging treatments. Reduce wrinkles, fine lines, and sagging skin for a refreshed look.",
    images: [
      {
        url: "/images/freepik-export-20241105082539mxHQ-scaled.jpeg",
        width: 2560,
        height: 1451,
        alt: "Anti-Aging Treatments - Dr. Ankit Mehra",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/anti-aging-treatments/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/anti-aging-treatments/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anti-Aging Treatments for Youthful Appearance | Dr. Ankit Mehra",
    description:
      "Reverse signs of aging with customized anti-aging treatments. Reduce wrinkles, fine lines, and sagging skin for a refreshed look.",
    images: ["/images/freepik-export-20241105082539mxHQ-scaled.jpeg"],
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
    "application-name": "Dr. Ankit Mehra - Anti-Aging Treatments",
    author: "Dr. Ankit Mehra",
    Publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const AntiAgingTreatmentComponent = () =>
{
  const antiAgingInfo = {
    title: "Anti-Aging Treatments",
    description:
      "Anti-aging treatments are designed to combat the visible signs of aging, such as wrinkles, fine lines, and loss of skin elasticity. These procedures range from non-invasive techniques like injectables and laser therapy to more comprehensive surgical options, all aimed at restoring a more youthful appearance.",
    image: "/images/home/head-leaning.jpeg",
    benefits: [
      "Reduces fine lines & wrinkles",
      "Restores skin firmness & elasticity",
      "Improves skin texture & tone",
      "Minimizes pigmentation & age spots",
      "Non-surgical & minimally invasive",
      "Boosts collagen production",
      "Enhances natural facial contours",
      "Promotes youthful & radiant skin",
    ],
    details: [
      {
        category: "Symptoms",
        items: [
          "Wrinkles and fine lines",
          "Loss of skin elasticity",
          "Age spots and pigmentation",
          "Sagging skin",
          "Dull complexion",
          "Uneven skin texture",
        ],
      },
      {
        category: "Causes",
        items: [
          "Natural aging process",
          "Sun exposure (photoaging)",
          "Genetic factors",
          "Lifestyle choices (smoking, diet)",
          "Environmental pollutants",
          "Hormonal changes",
        ],
      },
      {
        category: "Risks",
        items: [
          "Bruising and swelling",
          "Temporary redness",
          "Sensitivity to sunlight",
          "Possible infection",
          "Allergic reactions",
          "Unsatisfactory results",
        ],
      },
      {
        category: "Prevention",
        items: [
          "Daily sunscreen application",
          "Healthy diet rich in antioxidants",
          "Adequate hydration",
          "Regular skincare routine",
          "Avoiding smoking and excessive alcohol",
          "Getting enough sleep",
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
            <div className="relative w-full h-[500px]">
              <Image
                src={antiAgingInfo.image}
                alt="Woman receiving anti-aging treatment with medical professional using injections in a clinical setting"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {antiAgingInfo.title}
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Advanced Anti-Aging Solutions
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Description */}
            <div className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed">
                {antiAgingInfo.description}
              </p>
            </div>

            {/* Symptoms / Causes / Risks / Prevention */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {antiAgingInfo.details.map((section, index) => (
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

            {/* Benefits Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-indigo-800 mb-6">
                ✨ Benefits of Anti-Aging Treatments
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {antiAgingInfo.benefits.map((benefit, index) => (
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
                  Book Your Anti-Aging Consultation
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
                Professional Anti-Aging Treatments
              </h3>
              <p className="text-gray-600">
                All procedures performed by certified medical professionals
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

export default AntiAgingTreatmentComponent;
