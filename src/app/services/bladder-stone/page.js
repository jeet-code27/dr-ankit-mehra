import BladderStonePage from "@/components/services/BladderStonePage";

export const metadata = {
  title: 'Best Bladder Stone Treatment in Ajmer | Laser & No-Cut Removal - Dr. Vishnu Agrawal',
  description: 'Dr. Vishnu Agrawal offers Ajmer’s most advanced bladder stone treatments using laser cystolitholapaxy - a no-cut, no-scar procedure with 97% success rate. Walk home the same day.',
  keywords: [
    'best bladder stone doctor Ajmer',
    'laser stone removal bladder',
    'painful urination treatment',
    'cystolitholapaxy specialist Rajasthan',
    'non-surgical bladder stone removal',
    'recurrent bladder stones treatment',
    'Dr. Vishnu Agrawal stone clinic',
    'largest bladder stone removal',
    'UTI with stone treatment',
    'no-cut bladder surgery',
    'day-care stone procedure',
    'best urologist for bladder stones',
    'first laser bladder treatment in Ajmer',
    'pediatric bladder stone specialist'
  ],
  openGraph: {
    title: 'Painless Bladder Stone Removal in Ajmer | Laser Treatment',
    description: 'Ajmer’s pioneer in no-cut laser bladder stone surgery (cystolitholapaxy) - removing stones up to 5cm without incisions. 97% success with same-day discharge.',
    url: 'https://drvishnuagrawal.in/services/bladder-stone',
    images: [
      {
        url: '/images/bladder-stone-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal performing laser bladder stone surgery',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services/bladder-stone',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laser Bladder Stone Treatment | No Cuts, No Scars in Ajmer',
    description: 'Breakthrough laser cystolitholapaxy removes bladder stones without surgery - 97% success rate.',
    images: ['/images/bladder-stone-twitter.jpg'],
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

export default function BladderStone() {
  return (
    <>
      <BladderStonePage/>
    </>
  );
}