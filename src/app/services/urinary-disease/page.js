import UrinaryDiseasePage from "@/components/services/UrinaryDiseasePage";

export const metadata = {
  title: 'Best Urinary Disease Specialist in Ajmer - Dr. Vishnu Agrawal',
  description: 'Comprehensive urinary disease treatment including UTIs, incontinence, strictures & prostate disorders. Advanced urology care with minimal discomfort & faster recovery.',
  keywords: [
    'best urologist in Ajmer',
    'urinary tract infection treatment',
    'prostate enlargement specialist',
    'urinary incontinence doctor',
    'urethral stricture surgery',
    'recurrent UTI treatment',
    'overactive bladder specialist',
    'urinary fistula repair',
    'BPH laser treatment Ajmer',
    'urinary disorder clinic',
    'female urology specialist',
    'male urinary problems doctor',
    'painful urination treatment',
    'urinary retention solutions'
  ],
  openGraph: {
    title: 'Ajmer’s Premier Urinary Disease Center | Dr. Vishnu Agrawal',
    description: 'Specialized care for all urinary system disorders - from infections to complex reconstructive surgeries using latest minimally invasive techniques.',
    url: 'https://drvishnuagrawal.in/services/urinary-disease',
    images: [
      {
        url: '/images/urinary-disease-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal consulting a urinary disease patient',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services/urinary-disease',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Urinary Disorder Treatment in Ajmer | Urology Specialist',
    description: 'Advanced solutions for urinary infections, incontinence, prostate issues and complex urological conditions.',
    images: ['/images/urinary-disease-twitter.jpg'],
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

export default function UrinaryDisease() {
  return (
    <>
      <UrinaryDiseasePage/>
    </>
  );
}