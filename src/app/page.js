import AboutDoctor from "@/components/AboutDoctor";
import AboutDoctorSection from "@/components/AboutDoctorSection";
import ExpertTeam from "@/components/ExpertTeam";
 
 
import GallerySection from "@/components/GallerySection";
 
import HeroSection from "@/components/HeroSection";
import PatientReviews from "@/components/PatientReviews";
 
 
import WhyChooseSection from "@/components/WhyChooseSection";

export const metadata = {
  title: "Best Gastroenterologist in Ajmer | Dr. Ankit Mehra - Liver & Digestive Specialist",
  description:
    "Dr. Ankit Mehra is a leading gastroenterologist in Ajmer offering expert treatment for liver diseases, digestive disorders, and endoscopic procedures. Book your appointment today.",
  keywords: [
    "best gastroenterologist in Ajmer",
    "liver specialist Ajmer",
    "digestive disorders doctor",
    "endoscopy expert Ajmer",
    "Dr. Ankit Mehra",
    "gastro clinic Ajmer",
    "hepatologist Ajmer",
    "colonoscopy specialist Ajmer",
    "stomach pain doctor Ajmer",
    "GI disorders treatment",
    "pancreatitis treatment Ajmer",
    "IBD treatment specialist",
    "gastrointestinal surgeon Ajmer",
  ],
  openGraph: {
    title: "Dr. Ankit Mehra | Best Gastroenterologist & Liver Specialist in Ajmer",
    description:
      "Advanced gastro care for liver, pancreas, and digestive system disorders with state-of-the-art treatment and high success rates.",
    images: [
      {
        url: "/images/dr-ankit-profile.jpg", // Replace with actual image path
        width: 800,
        height: 600,
        alt: "Dr. Ankit Mehra - Gastroenterologist Ajmer",
      },
    ],
    type: "website",
    url: "https://drankitmehra.com",
    siteName: "Dr. Ankit Mehra Gastro Clinic",
  },
  alternates: {
    canonical: "https://drankitmehra.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Gastroenterologist in Ajmer | Dr. Ankit Mehra",
    description:
      "Expert treatment for liver and digestive issues by Dr. Ankit Mehra in Ajmer.",
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
    "application-name": "Dr. Ankit Mehra - Gastroenterology Clinic",
    author: "Dr. Ankit Mehra",
    Publisher: "Dr. Ankit Mehra",
    "publisher-url": "https://drankitmehra.com",
    generator: "Next.js",
    "theme-color": "#ffffff",
  },
};


// Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://drvishnuagrawal.in/#organization",
      name: "Dr. Vishnu Agrawal Urology Clinic",
      url: "https://drvishnuagrawal.in",
      logo: {
        "@type": "ImageObject",
        url: "https://drvishnuagrawal.in/images/dr-vishnu-profile.jpg",
        width: 800,
        height: 600,
      },
      sameAs: ["https://drvishnuagrawal.in"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-82409-70287",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "4/172, Gyan marg, Makarwali Rd, near vinayak complex",
        addressLocality: "Panchsheel Nagar",
        addressRegion: "Rajasthan",
        postalCode: "305004",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.4499,
        longitude: 74.6399,
      },
      medicalSpecialty: "Urology",
      priceRange: "₹₹₹",
    },
    {
      "@type": "Physician",
      "@id": "https://drvishnuagrawal.in/#physician",
      name: "Dr. Vishnu Agrawal",
      givenName: "Vishnu",
      familyName: "Agrawal",
      honorificPrefix: "Dr.",
      jobTitle: "Urologist",
      medicalSpecialty: "Urology",
      worksFor: {
        "@id": "https://drvishnuagrawal.in/#organization",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Medical College",
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
          name: "M.S.",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "M.Ch. Urologist",
        },
      ],
      knowsAbout: [
        "Kidney Stone Treatment",
        "Prostate Treatment",
        "Male Infertility",
        "Urinary Disorders",
        "Erectile Dysfunction",
        "Urinary Tract Infections",
        "Pediatric Urology",
        "BPH Treatment",
      ],
      telephone: "+91-82409-70287",
      email: "agrawalclinicajmer@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4/172, Gyan marg, Makarwali Rd, near vinayak complex",
        addressLocality: "Panchsheel Nagar",
        addressRegion: "Rajasthan",
        postalCode: "305004",
        addressCountry: "IN",
      },
      availableService: [
        {
          "@type": "MedicalProcedure",
          name: "Kidney Stone Treatment",
          description: "Advanced laser treatment for kidney stones",
        },
        {
          "@type": "MedicalProcedure",
          name: "Prostate Treatment",
          description: "Treatment for prostate enlargement and related issues",
        },
        {
          "@type": "MedicalProcedure",
          name: "Male Infertility Treatment",
          description: "Comprehensive treatment for male fertility issues",
        },
        {
          "@type": "MedicalProcedure",
          name: "Urinary Disorder Treatment",
          description: "Treatment for various urinary tract disorders",
        },
      ],
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://drvishnuagrawal.in/#medicalbusiness",
      name: "Dr. Vishnu Agrawal Urology Clinic",
      image: "https://drvishnuagrawal.in/images/dr-vishnu-profile.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4/172, Gyan marg, Makarwali Rd, near vinayak complex",
        addressLocality: "Panchsheel Nagar",
        addressRegion: "Rajasthan",
        postalCode: "305004",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.4499,
        longitude: 74.6399,
      },
      telephone: "+91-82409-70287",
      email: "agrawalclinicajmer@gmail.com",
      url: "https://drvishnuagrawal.in",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Monday",
          opens: "16:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Tuesday",
          opens: "16:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Wednesday",
          opens: "16:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Thursday",
          opens: "16:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "16:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "16:00",
          closes: "19:00",
        },
      ],
      priceRange: "₹₹₹",
      paymentAccepted: ["Cash", "Credit Card", "Debit Card", "UPI"],
      currenciesAccepted: "INR",
    },
    {
      "@type": "WebSite",
      "@id": "https://drvishnuagrawal.in/#website",
      url: "https://drvishnuagrawal.in",
      name: "Dr. Vishnu Agrawal Urology Clinic",
      description:
        "Best Urologist in Ajmer providing advanced treatment for kidney stones, prostate enlargement, male infertility, and urinary disorders",
      publisher: {
        "@id": "https://drvishnuagrawal.in/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": "https://drvishnuagrawal.in/#webpage",
      url: "https://drvishnuagrawal.in",
      name: "Best Urologist in Ajmer | Dr. Vishnu Agrawal - Kidney & Prostate Specialist",
      description:
        "Dr. Vishnu Agrawal is a leading urologist in Ajmer providing advanced treatment for kidney stones, prostate enlargement, male infertility, and urinary disorders. Book your appointment today.",
      isPartOf: {
        "@id": "https://drvishnuagrawal.in/#website",
      },
      about: {
        "@id": "https://drvishnuagrawal.in/#physician",
      },
      mainEntity: {
        "@id": "https://drvishnuagrawal.in/#physician",
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function Home() {
    const slides = [
    {
      id: 1,
      image: '/images/home/woman-beauty-clinic-face-treatment-scaled.jpg',
    },
    {
      id: 2,
      image: '/images/home/doctor-performing-laser-hair-removal-patient-skin-scaled.jpg',
    },
    {
      id: 3,
      image: '/images/home/person-dealing-with-rosacea-scaled.jpg',
    },
    {
      id: 4,
      image: '/images/home/head-leaning.jpeg',
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
    <ExpertTeam/>
     
      <WhyChooseSection />
         <PatientReviews />
       <GallerySection/>
   
      
    </>
  );
}
