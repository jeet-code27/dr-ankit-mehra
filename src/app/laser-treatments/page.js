import React from 'react';
import Link from "next/link";
export const metadata = {
  title: "Advanced Laser Treatments for Skin and Hair | Dr. Ankit Mehra",
  description:
    "Explore cutting-edge laser treatments for hair removal, skin resurfacing, scar reduction, and more. Safe and effective solutions.",
  keywords: [
    "laser skin treatments Ajmer",
    "laser hair removal Ajmer",
    "laser scar removal",
    "laser skin resurfacing Ajmer",
    "acne scar laser treatment",
    "skin pigmentation laser",
    "permanent hair reduction Ajmer",
    "dermatology laser clinic Ajmer",
    "Dr. Ankit Mehra laser treatments",
    "skin rejuvenation laser therapy"
  ],
  openGraph: {
    title: "Advanced Laser Treatments for Skin and Hair | Dr. Ankit Mehra",
    description:
      "Explore cutting-edge laser treatments for hair removal, skin resurfacing, scar reduction, and more. Safe and effective solutions.",
    images: [
      {
        url: "/images/laser-epilation-hair-removal-therapy-scaled.jpg", // replace with actual image path
        width: 1200,
        height: 630,
        alt: "Advanced Laser Treatments",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/laser-treatments/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/laser-treatments/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Laser Treatments for Skin and Hair | Dr. Ankit Mehra",
    description:
      "Explore cutting-edge laser treatments for hair removal, skin resurfacing, scar reduction, and more. Safe and effective solutions.",
    images: ["/images/laser-epilation-hair-removal-therapy-scaled.jpg"], // replace with actual image path
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
    "application-name": "Dr. Ankit Mehra - Laser Treatments",
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
      title: "Laser Hair Removal",
      description: "Target hair follicles to reduce unwanted hair with long-lasting results for multiple body areas",
      image: "leaser-hair-romover.jpg", // Placeholder - replace with actual image
      features: ["Hair Reduction", "Long-term Results", "Multiple Body Areas"],
      url: "/laser-hair-removal"
    },
    {
      id: 2,
      title: "Laser Skin Resurfacing",
      description: "Remove damaged skin layers to treat wrinkles, uneven skin tone, and sun damage while promoting collagen growth",
      image: "laserSkinResurfacing.jpg", // Placeholder - replace with actual image
      features: ["Wrinkle Treatment", "Skin Tone Correction", "Sun Damage Repair", "Collagen Stimulation"],
      url: "/laser-skin-resurfacing"
    },
    {
      id: 3,
      title: "Laser Tattoo Removal",
      description: "Break down tattoo pigment with laser technology, allowing your body to gradually eliminate the ink",
      image: "laserTattooRemoval.jpg", // Placeholder - replace with actual image
      features: ["Pigment Breakdown", "Gradual Removal", "Non-invasive"],
      url: "/laser-tattoo-removal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Laser Treatments
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our advanced laser treatments designed to address various concerns with precision and long-lasting results.
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