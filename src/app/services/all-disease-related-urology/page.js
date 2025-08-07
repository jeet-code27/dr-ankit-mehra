import UrologyDiseasesPage from "@/components/services/UrologyDiseasesPage";

export const metadata = {
  title: 'Best Urology Treatment in Ajmer | Dr. Vishnu Agrawal ',
  description: 'Complete urological care for kidney stones, prostate diseases, urinary infections, cancers, and male health issues. Advanced diagnostics, medical management, and minimally invasive surgeries available.',
  keywords: [
    'best urologist in Ajmer',
    'kidney stone specialist Rajasthan',
    'prostate enlargement treatment',
    'urinary tract infection doctor',
    'bladder cancer surgery',
    'male infertility treatment',
    'urinary incontinence solutions',
    'pediatric urology specialist',
    'BPH laser surgery cost',
    'ureteral stricture treatment',
    'testicular pain specialist',
    'urinary fistula repair',
    'Dr. Vishnu Agrawal urology clinic',
    'complete urological checkup'
  ],
  openGraph: {
    title: 'Comprehensive Urology Center | Treatment for All Urinary & Male Health Disorders',
    description: 'One-stop solution for kidney, bladder, prostate and male reproductive health issues - offering the latest medical therapies and surgical interventions under expert care.',
    url: 'https://drvishnuagrawal.in/services/all-disease-related-urology',
    images: [
      {
        url: '/images/urology-center-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal at urology clinic with advanced equipment',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services/all-disease-related-urology',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Urological Care | From Diagnosis to Treatment',
    description: 'Expert management of all urinary system diseases and male health conditions - personalized treatment plans for optimal outcomes.',
    images: ['/images/urology-center-twitter.jpg'],
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

export default function AllDiseaseRelatedUrology() {
  return (
    <>
      <UrologyDiseasesPage/>
    </>
  );
}