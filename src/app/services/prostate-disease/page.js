import ProstateDiseasePage from "@/components/services/ProstateDiseasePage";

export const metadata = {
  title: 'Best Prostate Disease Treatment in Ajmer | Dr. Vishnu Agrawal',
  description: 'Dr. Vishnu Agrawal provides Ajmer’s most advanced prostate care for enlarged prostate (BPH), prostatitis, and prostate cancer. Personalized treatments with laser, Rezum, and minimally invasive techniques.',
  keywords: [
    'best prostate specialist in Ajmer',
    'BPH treatment without surgery',
    'chronic prostatitis relief',
    'early prostate cancer detection',
    'laser prostate surgery Ajmer',
    'Rezum water vapor therapy',
    'Dr. Vishnu Agrawal prostate care',
    'frequent urination treatment',
    'prostate pain management',
    'PSA test accuracy',
    'minimally invasive prostate therapy',
    'best urologist for prostate disease',
    'first Rezum therapy in Rajasthan',
    'no-cut BPH treatment'
  ],
  openGraph: {
    title: 'Complete Prostate Disease Center in Ajmer | BPH to Cancer Expertise',
    description: 'Ajmer’s only urologist offering the full spectrum of prostate care - from Rezum therapy for BPH to precision biopsies for cancer. 96% patient satisfaction rate.',
    url: 'https://drvishnuagrawal.in/services/prostate-disease',
    images: [
      {
        url: '/images/prostate-disease-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal discussing prostate treatment options',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services/prostate-disease',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prostate Health Solutions in Ajmer | BPH to Cancer Care',
    
    description: 'Advanced Rezum, laser, and biopsy techniques for all prostate conditions - preserving urinary and sexual function.',
    images: ['/images/prostate-disease-twitter.jpg'],
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

export default function ProstateDisease() {
  return (
    <>
    <ProstateDiseasePage/>
    </>
  );
}