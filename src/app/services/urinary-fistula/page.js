import UrinaryFistulaPage from "@/components/services/UrinaryFistulaPage";

export const metadata = {
  title: 'Urinary Fistula Repair Specialist in Ajmer - Dr. Vishnu Agrawal',
  description: 'Advanced surgical repair of vesicovaginal, urethral, and ureteric fistulas. Minimally invasive techniques for permanent cure with 95% success rate. Painless recovery.',
  keywords: [
    'urinary fistula surgery Ajmer',
    'best fistula specialist in Rajasthan',
    'vesicovaginal fistula repair',
    'urethral fistula treatment',
    'post-delivery fistula surgery',
    'minimally invasive fistula repair',
    'laparoscopic fistula surgery',
    'urine leakage after surgery',
    'complex fistula reconstruction',
    'female urology surgeon Ajmer',
    'fistula after hysterectomy',
    'non-healing urinary fistula',
    'Dr. Vishnu Agrawal fistula center',
    'robotic fistula surgery'
  ],
  openGraph: {
    title: 'Complex Urinary Fistula Treatment | Ajmer’s Leading Specialist',
    description: 'Permanent solutions for urinary fistulas using robotic, laparoscopic and reconstructive techniques. Restoring normal urinary function with precision surgery.',
    url: 'https://drvishnuagrawal.in/services/urinary-fistula',
    images: [
      {
        url: '/images/urinary-fistula-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal discussing fistula treatment options',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services/urinary-fistula',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urinary Fistula Repair Expert | 95% Success Rate | Ajmer',
    description: 'Specialized surgical correction for all types of urinary fistulas - including post-surgical and obstetric cases.',
    images: ['/images/urinary-fistula-twitter.jpg'],
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

export default function UrinaryFistula() {
  return (
    <>
      <UrinaryFistulaPage/>
    </>
  );
}