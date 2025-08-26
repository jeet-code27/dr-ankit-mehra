import Link from 'next/link';
import React from 'react';
export const metadata = {
  title: "Pigmentation Treatments for Even Skin Tone | Dr. Ankit Mehra",
  description:
    "Reduce pigmentation and achieve a balanced, glowing complexion. Advanced treatments for dark spots, melasma, and uneven skin tone.",
  keywords: [
    "pigmentation treatment",
    "melasma treatment",
    "dark spots removal",
    "skin brightening Ajmer",
    "hyperpigmentation treatment",
    "laser pigmentation removal",
    "chemical peels pigmentation",
    "even skin tone treatment",
    "Dr. Ankit Mehra pigmentation care",
    "glowing skin treatments"
  ],
  openGraph: {
    title: "Pigmentation Treatments for Even Skin Tone | Dr. Ankit Mehra",
    description:
      "Reduce pigmentation and achieve a balanced, glowing complexion. Advanced treatments for dark spots, melasma, and uneven skin tone.",
    images: [
      {
        url: "/images/woman-beauty-clinic-face-treatment-scaled.jpg", // replace with actual path
        width: 2560,
        height: 1707,
        alt: "Pigmentation Treatment - Dr. Ankit Mehra",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/pigmentation-treatment/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/pigmentation-treatment/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pigmentation Treatments for Even Skin Tone | Dr. Ankit Mehra",
    description:
      "Reduce pigmentation and achieve a balanced, glowing complexion. Advanced treatments for dark spots, melasma, and uneven skin tone.",
    images: ["/images/woman-beauty-clinic-face-treatment-scaled.jpg"], // replace with actual path
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
    "application-name": "Dr. Ankit Mehra - Pigmentation Treatments",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const SkinRejuvenationComponent = () => {
  
  const skinInfo = {
    title: "Pigmentation Treatment",
    description: "This treatment targets dark spots and uneven skin tone, often using chemical peels, laser therapy, and topical preparations.",
    image: "/images/home/woman-beauty-clinic-face-treatment-scaled.jpg",
    details: [
      {
        category: "Symptoms",
        items: [
          "Dark spots",
          "Melasma",
          "Sun spots",
          "Uneven skin tone"
        ]
      },
      {
        category: "Causes",
        items: [
          "Sun exposure",
          "Hormonal changes",
          "Aging"
        ]
      },
      {
        category: "Risks",
        items: [
          "Skin sensitivity",
          "Redness and swelling",
          "Post-treatment hyperpigmentation"
        ]
      },
      {
        category: "Prevention",
        items: [
          "Daily sun protection",
          "Avoid prolonged sun exposure",
          "Gentle skincare products",
          "Anti-inflammatory diet"
        ]
      }
    ]
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
     
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <img 
              src={skinInfo.image} 
              alt="Pigmentation treatment showing a woman receiving facial treatment with professional equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{skinInfo.title}</h1>
              <p className="text-lg md:text-xl opacity-90">Advanced Pigmentation Treatments</p>
            </div>
          </div>
        
          <div className="p-6 md:p-8">
          
            <div className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed">
                {skinInfo.description}
              </p>
            </div>
            
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
                        <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
       
            <div className="mt-10 text-center">
                <Link href={"/bookconsultation"}>
              <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Book Your Pigmentation Consultation
              </button>
              </Link>
            </div>
          </div>
        </div>
       
        <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Pigmentation Treatments</h3>
              <p className="text-gray-600">All procedures performed by certified dermatologists</p>
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
export default SkinRejuvenationComponent;