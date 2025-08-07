import AboutHero from "@/components/AboutUsHero";
import ServicesSection from "@/components/ServicesSection";


export const metadata = {
  title: 'Best Prostate Treatment in Ajmer - Dr. Vishnu Agrawal',
  description: 'Comprehensive urology services in Ajmer including advanced kidney stone treatment, prostate care, male infertility solutions, and urinary disorder management. Latest laser and minimally invasive techniques.',
  keywords: [
    'best urology services in Ajmer',
    'kidney stone treatment Ajmer',
    'prostate surgery services',
    'male infertility treatment',
    'urinary problem solutions',
    'laser lithotripsy Ajmer',
    'BPH treatment Rajasthan',
    'urology specialist services',
    'vasectomy reversal Ajmer',
    'erectile dysfunction treatment',
    'urinary tract infection care',
    'pediatric urology services',
    'no-scalpel vasectomy',
    'best urologist for kidney stones'
  ],
  openGraph: {
    title: 'Top Urology Treatment in Ajmer | Dr. Vishnu Agrawal Clinic',
    description: 'Advanced treatments for kidney stones, prostate enlargement, male infertility and urinary disorders using modern techniques at our Ajmer clinic',
    url: 'https://drvishnuagrawal.in/services',
    images: [
      {
        url: '/images/services-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal performing urology procedure',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Urology Services in Ajmer | Kidney & Prostate Care',
    description: 'Comprehensive urology treatments including laser stone removal, prostate surgery and male health solutions',
    images: ['/images/services-twitter-card.jpg'],
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

export default function Services() {
  return (
    <>
        <AboutHero
        // bannerImage="/images/aboutus.webp"
        title="Dr. Vishnu Agrawal"
        subtitle="Expert Urological Care with Compassion and Precision"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' }
        ]}
      />
      <h1 className="hidden">Best Urologist in Ajmer - Dr Vsihnu Agrawal</h1>
      <ServicesSection/>
    </>
  );
}