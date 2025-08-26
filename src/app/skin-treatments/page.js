import React from 'react';
 import Link from "next/link";
export const metadata = {
  title: "Comprehensive Skin Treatments for Radiant Skin | Dr. Ankit Mehra",
  description:
    "Explore skin treatments for acne, pigmentation, scars, and more. Achieve healthy, glowing skin with expert care at Dr. Ankit Mehra's clinic.",
  keywords: [
    "skin treatments",
    "acne treatment Ajmer",
    "pigmentation removal",
    "scar reduction",
    "glowing skin care",
    "Dr. Ankit Mehra skin clinic",
    "laser skin treatment",
    "dermatologist for acne",
    "skin rejuvenation Ajmer",
    "dermatology services Rajasthan",
  ],
  openGraph: {
    title: "Comprehensive Skin Treatments for Radiant Skin | Dr. Ankit Mehra",
    description:
      "Explore skin treatments for acne, pigmentation, scars, and more. Achieve healthy, glowing skin with expert care at Dr. Ankit Mehra's clinic.",
    images: [
      {
        url: "/images/freepik__expand__4159-qwlpkxdugmq9yrcq0grvg0fqvkvxehzrlpoigcnrks.png", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Skin Treatments - Dr. Ankit Mehra",
      },
    ],
    type: "article",
    url: "https://drankitmehra.com/skin-treatments/",
    siteName: "Dr. Ankit Mehra | Dermatologist in Ajmer",
  },
  alternates: {
    canonical: "https://drankitmehra.com/skin-treatments/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Skin Treatments for Radiant Skin | Dr. Ankit Mehra",
    description:
      "Explore skin treatments for acne, pigmentation, scars, and more. Achieve healthy, glowing skin with expert care at Dr. Ankit Mehra's clinic.",
    images: ["/images/freepik__expand__4159-qwlpkxdugmq9yrcq0grvg0fqvkvxehzrlpoigcnrks.png"], // Replace with actual image path
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
    "application-name": "Dr. Ankit Mehra - Skin Treatments",
    author: "Dr. Ankit Mehra",
    Publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "WordPress",
    "theme-color": "#ffffff",
  },
};

const SkinTreatmentsPage = () => {
  const treatments = [
    {
      id: 1,
      title: "Skin Rejuvenation",
      description: "Enhance your skin texture and radiance with advanced chemical peels and innovative treatments",
      image: "young-beautiful-girl-lies-beautician-s-table-receives-procedures-scaled-qwlpr8v570ly32hd4hh19tk1zi61z4x4ivqz277fwg.jpg",
      features: ["Chemical Peels", "Texture Improvement", "Radiance Boost"],
      url : "/skin-rejuvenation"
    },
    {
      id: 2,
      title: "Anti-Aging Treatments",
      description: "Combat wrinkles and fine lines with cutting-edge laser therapies and age-defying solutions",
      image: "head-leaning.jpeg",
      features: ["Laser Therapy", "Wrinkle Reduction", "Age Defying"],
         url : "/anti-aging-treatments"
    },
    {
      id: 3,
      title: "Pigmentation Treatment",
      description: "Effectively treat dark spots and uneven skin tone with specialized chemical treatments",
      image: "woman-beauty-clinic-face-treatment-scaled.jpg",
      features: ["Dark Spot Removal", "Even Tone", "Chemical Solutions"],
         url : "/pigmentation-treatment"
    },
    {
      id: 4,
      title: "Scar Reduction",
      description: "Minimize appearance of scars using advanced microneedling and targeted therapies",
      image: "surgeon-drawing-lines-womans-abdomen-liposuction-cellulite-removal-scaled-qwlnjz4s1iv4w9bhzxk8xf5v50ge06dq8mxvl8tqho.jpg",
      features: ["Microneedling", "Scar Minimization", "Skin Renewal"],
         url : "/scar-reduction"
    },
    {
      id: 5,
      title: "Acne Treatment",
      description: "Clear your skin with effective medications and specialized acne-fighting treatments",
      image: "person-dealing-with-rosacea-scaled.jpg",
      features: ["Medication", "Acne Control", "Clear Skin"],
         url : "/acne-treatment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Skin Treatments
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our comprehensive range of advanced skin treatments designed to enhance your natural beauty and address various skin concerns.
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
         <Link href={treatment.url}  >
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