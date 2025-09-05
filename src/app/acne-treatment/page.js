import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Best Acne Treatment in Ajmer | Dr. Ankit Mehra (MD in Skin & VD)",
  description:
    "Get rid of acne and prevent future breakouts with targeted treatments. Best Acne Treatment in Ajmer at Dr. Ankit Mehra's clinic.",
  keywords: [
    "best acne treatment in Ajmer",
    "acne treatment Ajmer",
    "pimple treatment Ajmer",
    "acne scar removal",
    "dermatologist for acne Ajmer",
    "skin doctor Ajmer",
    "acne prevention treatments",
    "advanced acne therapy",
    "Dr. Ankit Mehra acne treatment",
    "clear skin solutions Ajmer"
  ],
  openGraph: {
    title: "Best Acne Treatment in Ajmer | Dr. Ankit Mehra (MD in Skin & VD)",
    description:
      "Get rid of acne and prevent future breakouts with targeted treatments. Best Acne Treatment in Ajmer at Dr. Ankit Mehra's clinic.",
    images: [
      {
        url: "/images/person-dealing-with-rosacea-scaled.jpg", // replace with actual path
        width: 2560,
        height: 1706,
        alt: "Acne Treatment at Dr. Ankit Mehra's Clinic",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/acne-treatment/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/acne-treatment/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Acne Treatment in Ajmer | Dr. Ankit Mehra (MD in Skin & VD)",
    description:
      "Get rid of acne and prevent future breakouts with targeted treatments. Best Acne Treatment in Ajmer at Dr. Ankit Mehra's clinic.",
    images: ["/images/person-dealing-with-rosacea-scaled.jpg"], // replace with actual path
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
    "application-name": "Dr. Ankit Mehra - Acne Treatment",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const Acnetreatment = () =>
{
  const skinInfo = {
    title: "Acne Treatment",
    description:
      "Acne treatment focuses on reducing pimples, blackheads, and other issues caused by clogged pores. Methods include topical and oral medications, chemical peels, and laser therapy to effectively manage acne and improve skin health.",
    image: "/images/home/person-dealing-with-rosacea-scaled.jpg",
    details: [
      {
        category: "Symptoms",
        items: ["Red acne", "Blackheads", "Whiteheads", "Cysts", "Sensitive skin"],
      },
      {
        category: "Causes",
        items: ["Hormonal changes", "Excess oil production", "Bacteria", "Genetics", "Specific medications"],
      },
      {
        category: "Risks",
        items: ["Skin dryness", "Irritation", "Redness", "Possible scarring", "Pigmentation issues"],
      },
      {
        category: "Prevention",
        items: ["Gentle skincare routine", "Avoid touching face", "Balanced diet", "Stress management", "Non-comedogenic products"],
      },
    ],
    benefits: [
      "Clearer, healthier-looking skin",
      "Reduced breakouts and acne scars",
      "Boosted self-confidence",
      "Custom treatment plans tailored to your skin",
      "Long-term prevention of acne recurrence",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative w-full h-[500px]">
            <Image
              src={skinInfo.image}
              alt="Acne treatment showing professional procedures to manage acne and improve skin health"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{skinInfo.title}</h1>
              <p className="text-lg md:text-xl opacity-90">Advanced Acne Treatments</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed">{skinInfo.description}</p>
            </div>

            {/* Details Section */}
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
            <div className="my-12">
              <h2 className="text-2xl font-bold text-indigo-800 mb-6">✨ Benefits of Acne Treatments</h2>
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
                  Book Your Acne Treatment Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Badge */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Acne Treatments</h3>
              <p className="text-gray-600">All procedures performed by certified dermatologist</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">FDA Approved</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default Acnetreatment;
