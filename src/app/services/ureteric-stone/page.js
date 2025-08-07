import UretericStonePage from "@/components/services/UretericStonePage";

export const metadata = {
  title: 'Best Ureteric Stone Treatment in Ajmer - Dr. Vishnu Agrawal',
  description: 'Dr. Vishnu Agrawal provides Ajmer’s most advanced ureteric stone treatments with laser lithotripsy and ureteroscopy. No cuts, no scars - 95% success rate in single session.',
  keywords: [
    'best ureteric stone doctor Ajmer',
    'laser stone treatment for ureter',
    'emergency stone removal Ajmer',
    'ureteroscopy specialist Rajasthan',
    'painful ureter stone relief',
    'blocked ureter treatment',
    'Dr. Vishnu Agrawal stone clinic',
    'urgent stone removal Ajmer',
    'ureteric colic treatment',
    'smallest scope for stone removal',
    'no-cut stone surgery',
    'same-day discharge stone treatment',
    'best urologist for ureter stones',
    'first laser ureteroscopy in Ajmer'
  ],
  openGraph: {
    title: 'Emergency Ureteric Stone Relief in Ajmer | Laser Ureteroscopy',
    description: 'Ajmer’s only urologist offering instant pain relief for blocked ureter stones with 0.8mm laser scopes - 95% success in first attempt.',
    url: 'https://drvishnuagrawal.in/services/ureteric-stone',
    images: [
      {
        url: '/images/ureteric-stone-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal performing laser ureteric stone removal',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services/ureteric-stone',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laser Ureteric Stone Treatment | Same-Day Discharge in Ajmer',
    description: 'Breakthrough 0.8mm laser scopes remove blocked ureter stones without cuts - 95% success rate.',
    images: ['/images/ureteric-stone-twitter.jpg'],
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

export default function UratericStone() {
  return (
    <>
    <UretericStonePage/>
    </>
  );
}