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