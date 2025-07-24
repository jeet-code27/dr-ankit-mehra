import UrinaryIncontinencePage from "@/components/services/UrinaryIncontinencePage";

export const metadata = {
  title: 'Best Urinary Incontinence Treatment in Ajmer - Dr. Vishnu Agrawal',
  description: 'Permanent solutions for urine leakage - from non-invasive therapies to advanced sling surgeries. 90% success rate for stress/urge incontinence in both men and women.',
  keywords: [
    'urine leakage treatment Ajmer',
    'best incontinence specialist Rajasthan',
    'female stress incontinence surgery',
    'male urinary leakage treatment',
    'TVT sling surgery cost',
    'non-surgical incontinence treatment',
    'overactive bladder doctor',
    'post-prostatectomy incontinence',
    'pelvic floor exercises Ajmer',
    'urethral bulking injections',
    'artificial urinary sphincter',
    'post-delivery incontinence',
    'nocturia specialist Ajmer',
    'Dr. Vishnu Agrawal incontinence clinic'
  ],
  openGraph: {
    title: 'Urinary Incontinence Cure | Ajmer’s Leading Urogynecologist',
    description: 'Comprehensive care for all types of urine leakage - offering bladder Botox, laser therapies, sling procedures and pelvic floor rehabilitation under one roof.',
    url: 'https://drvishnuagrawal.in/services/urinary-incontinence-treatment',
    images: [
      {
        url: '/images/incontinence-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal explaining incontinence treatment options',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services/urinary-incontinence-treatment',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stop Urine Leakage Permanently | Advanced Incontinence Treatments',
    description: 'Customized solutions for stress/urge incontinence - including minimally invasive slings and revolutionary bladder therapies.',
    images: ['/images/incontinence-twitter.jpg'],
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
    'generator': 'Next.js',
    'theme-color': '#ffffff',
  },
};

export default function UrinaryIncontinenceTreatment() {    
  return (
    <>
      <UrinaryIncontinencePage />
    </>
  );
}