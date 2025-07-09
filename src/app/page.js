import AboutDoctorSection from "@/components/AboutDoctorSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import PatientReviews from "@/components/PatientReviews";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";

export const metadata = {
  title: 'Best Urologist in Ajmer | Dr. Vishnu Agrawal - Kidney & Prostate Specialist',
  description: 'Dr. Vishnu Agrawal is a leading urologist in Ajmer providing advanced treatment for kidney stones, prostate enlargement, male infertility, and urinary disorders. Book your appointment today.',
  keywords: [
    'best urologist in Ajmer',
    'top kidney stone specialist',
    'prostate treatment Ajmer',
    'male infertility doctor',
    'urinary problems specialist',
    'Dr. Vishnu Agrawal',
    'laser kidney stone treatment',
    'urology clinic near me',
    'best urology hospital Ajmer',
    'erectile dysfunction treatment',
    'urinary tract infection specialist',
    'pediatric urologist Ajmer',
    'BPH treatment Rajasthan'
  ],
  openGraph: {
    title: 'Dr. Vishnu Agrawal | Best Urologist & Kidney Specialist in Ajmer',
    description: 'Advanced urology care for kidney stones, prostate issues, male infertility and urinary disorders. State-of-the-art treatments with high success rates.',
    images: [
      {
        url: '/images/dr-vishnu-profile.jpg',
        width: 800,
        height: 600,
        alt: 'Dr. Vishnu Agrawal - Urologist Ajmer',
      },
    ],
    type: 'website',
    url: 'https://drvishnuagrawal.in',
    siteName: 'Dr. Vishnu Agrawal Urology Clinic',
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Urologist in Ajmer | Dr. Vishnu Agrawal',
    description: 'Specialized urology care for kidney, prostate and male health issues in Ajmer',
    images: ['/images/dr-vishnu-twitter-card.jpg'],
  },
  other: {
    'application-name': 'Dr. Vishnu Agrawal Urology Clinic',
    'author': 'Dr. Vishnu Agrawal',
    'generator': 'Next.js',
    'theme-color': '#ffffff',
  },
};

// Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://drvishnuagrawal.in/#organization",
      "name": "Dr. Vishnu Agrawal Urology Clinic",
      "url": "https://drvishnuagrawal.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://drvishnuagrawal.in/images/dr-vishnu-profile.jpg",
        "width": 800,
        "height": 600
      },
      "sameAs": [
        "https://drvishnuagrawal.in"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-82409-70287",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4/172, Gyan marg, Makarwali Rd, near vinayak complex",
        "addressLocality": "Panchsheel Nagar",
        "addressRegion": "Rajasthan",
        "postalCode": "305004",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.4499,
        "longitude": 74.6399
      },
      "medicalSpecialty": "Urology",
      "priceRange": "₹₹₹"
    },
    {
      "@type": "Physician",
      "@id": "https://drvishnuagrawal.in/#physician",
      "name": "Dr. Vishnu Agrawal",
      "givenName": "Vishnu",
      "familyName": "Agrawal",
      "honorificPrefix": "Dr.",
      "jobTitle": "Urologist",
      "medicalSpecialty": "Urology",
      "worksFor": {
        "@id": "https://drvishnuagrawal.in/#organization"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Medical College"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "M.B.B.S."
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree", 
          "name": "M.S."
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "M.Ch. Urologist"
        }
      ],
      "knowsAbout": [
        "Kidney Stone Treatment",
        "Prostate Treatment",
        "Male Infertility",
        "Urinary Disorders",
        "Erectile Dysfunction",
        "Urinary Tract Infections",
        "Pediatric Urology",
        "BPH Treatment"
      ],
      "telephone": "+91-82409-70287",
      "email": "agrawalclinicajmer@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4/172, Gyan marg, Makarwali Rd, near vinayak complex",
        "addressLocality": "Panchsheel Nagar",
        "addressRegion": "Rajasthan",
        "postalCode": "305004",
        "addressCountry": "IN"
      },
      "availableService": [
        {
          "@type": "MedicalProcedure",
          "name": "Kidney Stone Treatment",
          "description": "Advanced laser treatment for kidney stones"
        },
        {
          "@type": "MedicalProcedure", 
          "name": "Prostate Treatment",
          "description": "Treatment for prostate enlargement and related issues"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Male Infertility Treatment",
          "description": "Comprehensive treatment for male fertility issues"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Urinary Disorder Treatment",
          "description": "Treatment for various urinary tract disorders"
        }
      ]
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://drvishnuagrawal.in/#medicalbusiness",
      "name": "Dr. Vishnu Agrawal Urology Clinic",
      "image": "https://drvishnuagrawal.in/images/dr-vishnu-profile.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4/172, Gyan marg, Makarwali Rd, near vinayak complex",
        "addressLocality": "Panchsheel Nagar",
        "addressRegion": "Rajasthan",
        "postalCode": "305004",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.4499,
        "longitude": 74.6399
      },
      "telephone": "+91-82409-70287",
      "email": "agrawalclinicajmer@gmail.com",
      "url": "https://drvishnuagrawal.in",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Monday",
          "opens": "16:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Tuesday",
          "opens": "16:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Wednesday",
          "opens": "16:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Thursday",
          "opens": "16:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "16:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "16:00",
          "closes": "19:00"
        }
      ],
      "priceRange": "₹₹₹",
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI"],
      "currenciesAccepted": "INR"
    },
    {
      "@type": "WebSite",
      "@id": "https://drvishnuagrawal.in/#website",
      "url": "https://drvishnuagrawal.in",
      "name": "Dr. Vishnu Agrawal Urology Clinic",
      "description": "Best Urologist in Ajmer providing advanced treatment for kidney stones, prostate enlargement, male infertility, and urinary disorders",
      "publisher": {
        "@id": "https://drvishnuagrawal.in/#organization"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://drvishnuagrawal.in/#webpage",
      "url": "https://drvishnuagrawal.in",
      "name": "Best Urologist in Ajmer | Dr. Vishnu Agrawal - Kidney & Prostate Specialist",
      "description": "Dr. Vishnu Agrawal is a leading urologist in Ajmer providing advanced treatment for kidney stones, prostate enlargement, male infertility, and urinary disorders. Book your appointment today.",
      "isPartOf": {
        "@id": "https://drvishnuagrawal.in/#website"
      },
      "about": {
        "@id": "https://drvishnuagrawal.in/#physician"
      },
      "mainEntity": {
        "@id": "https://drvishnuagrawal.in/#physician"
      },
      "inLanguage": "en-IN"
    }
  ]
};

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutDoctorSection/>
      <ServicesSection/>
      <WhyChooseSection/>
      <PatientReviews/>
      <div className="bg-gradient-to-b from-white to-blue-50">
        <FAQSection/>
      </div>
    </>
  );
}