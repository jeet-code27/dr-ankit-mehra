import BladderTumorPage from "@/components/services/BladderTumorPage";

export const metadata = {
  title: 'Advanced TURBT & Laser Therapy in Ajmer - Dr. Vishnu Agrawal',
  description: 'Dr. Vishnu Agrawal provides Ajmer’s most precise bladder tumor care using HD cystoscopy, TURBT, and laser ablation. Early detection to complex tumor management with 98% accuracy.',
  keywords: [
    'best bladder tumor specialist Ajmer',
    'bladder cancer treatment Rajasthan',
    'TURBT surgery Ajmer',
    'non-invasive tumor removal',
    'laser bladder tumor ablation',
    'recurrent tumor management',
    'Dr. Vishnu Agrawal oncology',
    'cystoscopy with biopsy',
    'HD bladder tumor detection',
    'day-care tumor surgery',
    'best urologist for bladder cancer',
    'first blue-light cystoscopy in Ajmer',
    'painless tumor diagnosis',
    'bladder preservation therapy'
  ],
  openGraph: {
    title: 'Advanced Bladder Tumor Center in Ajmer | Precision TURBT & Laser Oncology',
    description: 'Ajmer’s only urologist offering HD cystoscopy and blue-light tumor detection. Complete tumor removal with bladder preservation - 98% success rate.',
    url: 'https://drvishnuagrawal.in/services/bladder-tumor',
    images: [
      {
        url: '/images/bladder-tumor-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal performing precision TURBT surgery',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services/bladder-tumor',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bladder Tumor Excellence in Ajmer | 98% Success Rate',
    description: 'Pioneering blue-light cystoscopy and laser tumor ablation for complete cancer removal while preserving bladder function.',
    images: ['/images/bladder-tumor-twitter.jpg'],
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

export default function BladderTumor() {
  return (
    <>
     <BladderTumorPage />
    </>
  );
}