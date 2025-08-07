import AboutHero from "@/components/AboutUsHero";
import ContactPage from "@/components/ContactPage";

export const metadata = {
  title: 'Contact Best Urologist in Ajmer - Dr. Vishnu Agrawal Clinic',
  description: 'Get in touch with Dr. Vishnu Agrawal, leading urologist in Ajmer for kidney stone, prostate, and male health treatments. Book appointments, find clinic location and contact details.',
  keywords: [
    'urologist contact Ajmer',
    'kidney stone doctor appointment',
    'prostate specialist contact',
    'Dr. Vishnu Agrawal clinic address',
    'urology consultation booking',
    'emergency urology care Ajmer',
    'best urologist contact Rajasthan',
    'medical inquiry urology',
    'clinic hours and location',
    'patient support urology'
  ],
  openGraph: {
    title: 'Contact Top Urologist in Ajmer | Dr. Vishnu Agrawal Clinic',
    description: 'Reach out for appointments, queries or emergency urology care at our Ajmer clinic. Expert consultation for kidney stones, prostate and urinary disorders.',
    url: 'https://drvishnuagrawal.in/contact',
    images: [
      {
        url: '/images/contact-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal Clinic Contact Information',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Urology Specialist in Ajmer | Dr. Vishnu Agrawal',
    description: 'Clinic location, appointment booking and contact information for premier urology care in Rajasthan',
    images: ['/images/contact-twitter-card.jpg'],
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
   other: {
    'application-name': 'Dr. Vishnu Agrawal Urology Clinic',
    'author': 'Dr. Vishnu Agrawal',
    'publisher': 'Dr. Vishnu Agrawal',
    'publisher-url': 'https://drvishnuagrawal.in',
    'generator': 'Next.js',
    'theme-color': '#ffffff',
  },
};

export default function Contact() { 
    return ( 
        <>
         <AboutHero
        // bannerImage="/images/aboutus.webp"
        title="Dr. Vishnu Agrawal"
        subtitle="Expert Urological Care with Compassion and Precision"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact Us', path: '/contact' }
        ]}
      />
      <ContactPage/>
        </>
    )
}