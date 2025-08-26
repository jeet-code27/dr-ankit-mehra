import React from 'react';
import Link from "next/link";
export const metadata = {
  title: "Advanced Hair Treatments for All Hair Concerns | Dr. Ankit Mehra",
  description:
    "Get personalized hair treatments for hair loss, thinning, and more. Restore your hair health with cutting-edge techniques at Dr. Ankit Mehra's clinic.",
  keywords: [
    "hair treatment in Ajmer",
    "advanced hair treatments",
    "hair loss treatment Ajmer",
    "PRP hair therapy Ajmer",
    "hair fall solutions",
    "best dermatologist for hair Ajmer",
    "hair thinning treatment",
    "hair restoration techniques",
    "Dr. Ankit Mehra hair clinic",
    "hair regrowth therapy"
  ],
  openGraph: {
    title: "Advanced Hair Treatments for All Hair Concerns | Dr. Ankit Mehra",
    description:
      "Get personalized hair treatments for hair loss, thinning, and more. Restore your hair health with cutting-edge techniques at Dr. Ankit Mehra's clinic.",
    images: [
      {
        url: "/images/high-angle-woman-getting-scalp-prp-treatment-scaled.jpg", // replace with actual path
        width: 1200,
        height: 630,
        alt: "Advanced Hair Treatment at Dr. Ankit Mehra's Clinic",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/hair-treatments-2/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/hair-treatments-2/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Hair Treatments for All Hair Concerns | Dr. Ankit Mehra",
    description:
      "Get personalized hair treatments for hair loss, thinning, and more. Restore your hair health with cutting-edge techniques at Dr. Ankit Mehra's clinic.",
    images: ["/images/high-angle-woman-getting-scalp-prp-treatment-scaled.jpg"], // replace with actual path
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
    "application-name": "Dr. Ankit Mehra - Hair Treatments",
    author: "Dr. Ankit Mehra",
    publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const SkinTreatmentsPage = () => {
  const treatments = [
    {
      id: 1,
      title: "PRP Therapy",
      description: "Injecting your own platelet-rich plasma to promote follicle health and stimulate natural hair growth",
      image: "high-angle-woman-getting-scalp-prp-treatment-1536x1022.jpg", // Placeholder - replace with actual image
      features: ["Follicle Health", "Natural Growth Stimulation", "Uses Your Own Plasma"],
      url: "/prp-therapy"
    },
    {
      id: 2,
      title: "Hair Loss Treatments",
      description: "Comprehensive approach using medications and therapies to slow hair loss, promote growth, and increase hair volume",
      image: "mature-man-going-through-follicular-unit-extraction-process-1536x1024.jpg", // Placeholder - replace with actual image
      features: ["Slows Hair Loss", "Promotes Growth", "Increases Volume", "Medical Approach"],
      url: "/hair-loss-treatments"
    },
    {
      id: 3,
      title: "Scalp Micropigmentation",
      description: "Advanced cosmetic tattooing technique that simulates hair follicles to create the appearance of denser, fuller hair",
      image: "mature-man-going-through-follicular-unit-extraction-process-1-1-1536x1024.jpg", // Placeholder - replace with actual image
      features: ["Cosmetic Tattooing", "Simulates Follicles", "Creates Fuller Appearance", "Non-surgical"],
      url: "/scalp-micropigmentation"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Hair Treatments
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our advanced hair treatments designed to address various hair concerns with precision and long-lasting results.
        </p>
      </div>
      
      {/* Treatments Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </div>
     
     
    </div>
  );
};
const TreatmentCard = ({ treatment }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={`/images/home/${treatment.image}`} 
          alt={treatment.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {treatment.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {treatment.description}
        </p>
        
        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {treatment.features.map((feature, index) => (
              <span 
                key={index}
                className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        {/* Learn More Button */}
        <Link
href={treatment.url}
  
>
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-md transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
          <span>LEARN MORE</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        </Link>
      </div>
    </div>
  );
};
export default SkinTreatmentsPage;