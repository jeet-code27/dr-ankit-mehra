import RenalStonePage from "@/components/services/RenalStonePage";


export const metadata = {
  title: 'Best Kidney Stone Treatment in Ajmer - Dr. Vishnu Agrawal',
  description: 'Dr. Vishnu Agrawal offers Ajmer’s most advanced renal stone treatments including laser lithotripsy, PCNL and RIRS. Painless, scar-free procedures with 24-hour recovery.',
  keywords: [
    'best kidney stone doctor in Ajmer',
    'laser stone treatment Ajmer',
    'painless kidney stone surgery',
    'PCNL surgery Rajasthan',
    'RIRS laser lithotripsy',
    'renal stone specialist Ajmer',
    'Dr. Vishnu Agrawal stone clinic',
    'non-surgical stone removal',
    'ureteroscopy treatment',
    'largest stone removal Ajmer',
    'recurrent stone treatment',
    'best urologist for kidney stones',
    '24-hour recovery stone surgery',
    'first laser lithotripsy in Ajmer'
  ],
  openGraph: {
    title: 'Ajmer’s Advanced Kidney Stone Center | Laser Lithotripsy & PCNL',
    description: 'Pioneering painless kidney stone treatments by Dr. Vishnu Agrawal - Ajmer’s only urologist offering RIRS and mini-PCNL for complex stones.',
    url: 'https://drvishnuagrawal.in/services/renal-stone',
    images: [
      {
        url: '/images/renal-stone-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal performing laser kidney stone surgery',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services/renal-stone',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Painless Kidney Stone Treatment | Ajmer’s Laser Lithotripsy Specialist',
    description: 'Breakthrough RIRS and PCNL techniques for instant stone relief - no cuts, no scars.',
    images: ['/images/renal-stone-twitter.jpg'],
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

export default function RenalStone() {
  return (
    <>
      <RenalStonePage/>
    </>
  );
}