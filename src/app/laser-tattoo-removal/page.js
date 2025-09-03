import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Laser Tattoo Removal In Ajmer | Dr. Ankit Mehra",
  description:
    "Remove unwanted tattoos with advanced laser technology. Precise and effective treatment for all tattoo sizes and colors.",
  keywords: [
    "laser tattoo removal Ajmer",
    "tattoo removal clinic Ajmer",
    "permanent tattoo removal Ajmer",
    "best laser tattoo removal Ajmer",
    "unwanted tattoo removal Ajmer",
    "painless tattoo removal Ajmer",
    "tattoo removal treatment Ajmer",
    "dermatologist tattoo removal Ajmer",
    "safe tattoo removal Ajmer",
    "laser treatment for tattoo removal"
  ],
  openGraph: {
    title: "Laser Tattoo Removal In Ajmer | Dr. Ankit Mehra",
    description:
      "Remove unwanted tattoos with advanced laser technology. Precise and effective treatment for all tattoo sizes and colors.",
    images: [
      {
        url: "/images/2149445992-1024x683.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Laser Tattoo Removal Treatment in Ajmer",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/laser-tattoo-removal/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/laser-tattoo-removal/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Tattoo Removal In Ajmer | Dr. Ankit Mehra",
    description:
      "Remove unwanted tattoos with advanced laser technology. Precise and effective treatment for all tattoo sizes and colors.",
    images: ["/images/2149445992-1024x683.jpg"], // Replace with actual path
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
    "application-name": "Dr. Ankit Mehra - Laser Tattoo Removal",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};


const LaserTattooRemoval= () => {
   
  const skinInfo = {
    title: "Laser Tattoo Removal",
    description: "Laser tattoo removal uses targeted laser energy to break down tattoo pigments, which are then gradually cleared by the body's natural processes.",
    image: "/images/home/laserTattooRemoval.jpg",
    details: [
      {
        category: "Symptoms",
        items: [
          "Unwanted tattoo visibility"
        ]
      },
      {
        category: "Causes",
        items: [
          "Old tattoos that are no longer wanted",
          "Unprofessional tattoos"
        ]
      },
      {
        category: "Risks",
        items: [
          "Blisters",
          "Scarring",
          "Redness",
          "Pigmentation changes",
          "Mild discomfort"
        ]
      },
      {
        category: "Prevention",
        items: [
          "Follow care instructions",
          "Avoid sun exposure",
          "Keep the area clean",
          "Do not pick at scabs"
        ]
      }
    ]
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
       
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <Image
              src={skinInfo.image} 
              alt="Laser tattoo removal procedure showing professional treatment to break down tattoo pigments"
              className="w-full h-full object-cover"
              width={1200}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{skinInfo.title}</h1>
              <p className="text-lg md:text-xl opacity-90">Advanced Tattoo Removal Solutions</p>
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
                Book Your Tattoo Removal Consultation
              </button>
              </Link>
            </div>
          </div>
        </div>
     
        <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Laser Tattoo Removal</h3>
              <p className="text-gray-600">All procedures performed by certified specialists</p>
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
export default LaserTattooRemoval;