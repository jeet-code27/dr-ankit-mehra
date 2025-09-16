import AboutDoctor from "@/components/AboutDoctor";
import AboutDoctorSection from "@/components/AboutDoctorSection";
import ExpertCards from "@/components/ExpertCards";
 
 
import DermatologyBenefits from "@/components/DermatologyBenefits";

 
 
 
import GallerySection from "@/components/GallerySection";
 
import HeroSection from "@/components/HeroSection";
import PatientReviews from "@/components/PatientReviews";
 
 
 
import WhyChooseSection from "@/components/WhyChooseSection";

export const metadata = {
  title: "Best Dermatologist in Ajmer | Dr. Ankit Mehra",
  description:
    "Dr. Ankit Mehra (MD Skin & VD) is a senior dermatologist in Ajmer, specializing in skin, hair, venereology, and cosmetology treatments. Book an appointment for acne, hair loss, laser therapy, and aesthetic procedures.",
  keywords: [
    "best dermatologist in Ajmer",
    "skin specialist Ajmer",
    "cosmetologist in Ajmer",
    "hair loss treatment Ajmer",
    "laser skin treatment Ajmer",
    "Dr. Ankit Mehra",
    "skin doctor Ajmer",
    "acne scar treatment Ajmer",
    "skin rejuvenation Ajmer",
    "venereologist Ajmer",
    "aesthetic dermatologist Ajmer",
    "botox and fillers Ajmer",
    "pigmentation treatment Ajmer",
    "tattoo removal Ajmer",
  ],
  openGraph: {
    title: "Dr. Ankit Mehra | Best Dermatologist, Cosmetologist & Skin Specialist in Ajmer",
    description:
      "Get advanced skin, hair, laser, and cosmetology treatments with Dr. Ankit Mehra, MD Skin & VD. Trusted by thousands of patients in Ajmer for dermatology and aesthetic care.",
    images: [
      {
        url: "/images/home/dr-ankitmehra.jpeg", // Replace with actual image path
        width: 800,
        height: 600,
        alt: "Dr. Ankit Mehra - Dermatologist in Ajmer",
      },
    ],
    type: "website",
    url: "https://drankitmehra.com",
    siteName: "Dr. Ankit Mehra Skin & Cosmetology Clinic",
  },
  alternates: {
    canonical: "https://drankitmehra.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Dermatologist in Ajmer | Dr. Ankit Mehra",
    description:
      "Expert skin, hair, and cosmetology treatments by Dr. Ankit Mehra (MD Skin & VD) in Ajmer.",
    images: ["/images/dr-ankit-twitter-card.jpg"], // Replace with actual image path
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  other: {
    "application-name": "Dr. Ankit Mehra - Dermatology & Cosmetology Clinic",
    author: "Dr. Ankit Mehra",
    Publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "Next.js",
    "theme-color": "#ffffff",
  },
};



// Schema.org structured data
// Schema.org structured data for Dr. Ankit Mehra (Dermatologist)
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://drankitmehra.com/#organization",
      name: "Dr. Ankit Mehra Skin & Cosmetology Clinic",
      url: "https://drankitmehra.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://drankitmehra.com/images/home/dr-ankitmehra.jpeg",
        width: 800,
        height: 600,
      },
      sameAs: [
        "https://www.facebook.com",
        "https://www.instagram.com",
        "https://www.linkedin.com" // replace with actual profiles if available
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9697041111",
        
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "62, Lane no 2, Opp. Hotel Ambassador, Nagina Bagh, Muslim Mochi Mohalla",
        addressLocality: "Ajmer",
        addressRegion: "Rajasthan",
        postalCode: "305001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.4715641,
        longitude: 74.6352111,
      },
      medicalSpecialty: [
        "Dermatology",
        "Cosmetology",
        "Venereology",
        "Trichology"
      ],
      priceRange: "₹₹₹",
    },
    {
      "@type": "Physician",
      "@id": "https://drankitmehra.com/#physician",
      name: "Dr. Ankit Mehra",
      givenName: "Ankit",
      familyName: "Mehra",
      honorificPrefix: "Dr.",
      jobTitle: "Dermatologist, Cosmetologist & Venereologist",
      medicalSpecialty: [
        "Dermatology",
        "Cosmetic Dermatology",
        "Venereology",
        "Hair Restoration"
      ],
      worksFor: {
        "@id": "https://drankitmehra.com/#organization",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "JLN Medical College, Ajmer",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "M.B.B.S.",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "M.D. Skin & VD",
        }
      ],
      knowsAbout: [
        "Acne & Scar Treatment",
        "Pigmentation Treatment",
        "Laser Skin Therapy",
        "Hair Loss Treatment",
        "PRP Therapy",
        "Botox & Fillers",
        "Tattoo Removal",
        "Venereal Diseases"
      ],
      telephone: "+91-82409-70287",
      address: {
        "@type": "PostalAddress",
        streetAddress: "62, Lane no 2, Opp. Hotel Ambassador, Nagina Bagh, Ajmer",
        addressLocality: "Ajmer",
        addressRegion: "Rajasthan",
        postalCode: "305001",
        addressCountry: "IN",
      },
      availableService: [
        {
          "@type": "MedicalProcedure",
          name: "Acne & Scar Reduction",
          description: "Advanced treatment for acne and scar removal using lasers and medication",
        },
        {
          "@type": "MedicalProcedure",
          name: "Hair Loss Treatment",
          description: "PRP therapy and advanced trichology solutions",
        },
        {
          "@type": "MedicalProcedure",
          name: "Laser Therapy",
          description: "Tattoo removal, hair removal, pigmentation treatment, skin rejuvenation",
        },
        {
          "@type": "MedicalProcedure",
          name: "Cosmetic Dermatology",
          description: "Botox, fillers, anti-aging, and skin contouring treatments",
        }
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://drankitmehra.com/#website",
      url: "https://drankitmehra.com",
      name: "Dr. Ankit Mehra Skin & Cosmetology Clinic",
      description:
        "Best dermatologist in Ajmer providing advanced skin, hair, laser, cosmetology and venereology treatments.",
      publisher: {
        "@id": "https://drankitmehra.com/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": "https://drankitmehra.com/#webpage",
      url: "https://drankitmehra.com",
      name: "Best Dermatologist in Ajmer | Dr. Ankit Mehra - Skin, Hair & Cosmetology Specialist",
      description:
        "Dr. Ankit Mehra (MD Skin & VD) is a senior skin specialist in Ajmer offering treatments for acne, hair loss, pigmentation, laser therapy, and cosmetic dermatology.",
      isPartOf: {
        "@id": "https://drankitmehra.com/#website",
      },
      about: {
        "@id": "https://drankitmehra.com/#physician",
      },
      mainEntity: {
        "@id": "https://drankitmehra.com/#physician",
      },
      inLanguage: "en-IN",
    },
  ],
};


export default function Home() {
    const slides = [
    {
      id: 1,
      image: '/images/home/woman-beauty-clinic-face-treatment-scaled.png',
    },
    {
      id: 2,
      image: '/images/home/doctor-performing-laser-hair-removal-patient-skin-scaled.png',
    },
    {
      id: 3,
      image: '/images/home/person-dealing-with-rosacea-scaled.png',
    },
    {
      id: 4,
      image: '/images/home/head-leaning.png',
    },
  ];
  

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <HeroSection  slides={slides}/>
      <AboutDoctorSection />
      <AboutDoctor/>
      <ExpertCards/>
     <DermatologyBenefits/>
      <WhyChooseSection />
         <PatientReviews />
       <GallerySection/>
      
   
      
    </>
  );
}
