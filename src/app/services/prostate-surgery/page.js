

import ProstateSurgeryPage from "@/components/services/ProstateSurgery";

export const metadata = {
  title: 'Best Prostate Surgery in Ajmer | Only by Dr. Vishnu Agrawal in Ajmer',
  description: 'Dr. Vishnu Agrawal is the first and only urologist in Ajmer offering advanced laser prostate surgery (HoLEP/TURP) for BPH. Pioneering minimally invasive techniques with faster recovery.',
  keywords: [
    'only prostate laser surgery in Ajmer',
    'first HoLEP surgery Ajmer',
    'Dr. Vishnu Agrawal exclusive BPH treatment',
    'best prostate surgeon in Ajmer',
    'BPH laser treatment only in Ajmer',  
    'minimally invasive prostate surgery Ajmer',
    'first-time TURP in Ajmer',
    'enlarged prostate specialist Ajmer',
    'unique prostate surgery Rajasthan',
    'non-surgical BPH treatment Ajmer',
    'pioneer urologist for prostate in Ajmer',
    'Dr. Vishnu Agrawal exclusive prostate care'
  ],
  openGraph: {
    title: 'First Laser Prostate Surgery in Ajmer | Only by Dr. Vishnu Agrawal',
    description: 'Exclusive advanced prostate treatments (HoLEP/TURP) available for the first time in Ajmer by Dr. Vishnu Agrawal. Minimally invasive with 99% success rates.',
    url: 'https://drvishnuagrawal.in/services/prostate-surgery',
    images: [
      {
        url: '/images/prostate-surgery-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal performing Ajmer’s first laser prostate surgery',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services/prostate-surgery',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajmer’s First Laser Prostate Surgery | Only by Dr. Vishnu Agrawal',
    description: 'Pioneering HoLEP & TURP prostate treatments in Ajmer with minimal pain and quick recovery.',
    images: ['/images/prostate-surgery-twitter.jpg'],
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
export default function prostateSurgery() {
  return (
    <>
    <ProstateSurgeryPage/>
    </>
  );
}   