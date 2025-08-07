import OveractiveBladderPage from "@/components/services/OveractiveBladderPage";

export const metadata = {
  title: 'Overactive Bladder Treatment in Ajmer - Dr. Vishnu Agrawal | Stop Urgency & Leakage',
  description: 'Advanced OAB solutions: From bladder Botox to neuromodulation. 85% success rate in reducing urgency, frequency & nocturia. Non-surgical options available.',
  keywords: [
    'overactive bladder specialist Ajmer',
    'urgent urination treatment',
    'bladder Botox injections Rajasthan',
    'nocturia treatment doctor',
    'urge incontinence cure',
    'PTNS therapy near me',
    'sacral neuromodulation Ajmer',
    'OAB medication alternatives',
    'frequent urination at night',
    'bladder retraining program',
    'best urologist for OAB',
    'female bladder problems specialist',
    'male overactive bladder treatment',
    'Dr. Vishnu Agrawal bladder clinic'
  ],
  openGraph: {
    title: 'Overactive Bladder Center | Advanced OAB Treatments in Ajmer',
    description: 'Customized care for bladder control problems - offering the latest therapies including bladder Botox, PTNS and lifestyle modifications for complete relief.',
    url: 'https://drvishnuagrawal.in/services/overactive-bladder-treatment',
    images: [
      {
        url: '/images/oab-treatment-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal discussing OAB treatment options with patient',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services/overactive-bladder-treatment',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Control Your Bladder Again | Effective OAB Treatments',
    description: 'Breakthrough therapies for urgency, frequency and leakage - regain your confidence and sleep through the night.',
    images: ['/images/oab-treatment-twitter.jpg'],
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

export default function OveractiveBladderTreatment() {
  return (
    <>
      <OveractiveBladderPage/>
    </>
  );
}