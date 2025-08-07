import MaleSexualProblemsPage from "@/components/services/MaleSexualProblemsPage";

export const metadata = {
  title: 'Male Sexual Health Clinic in Ajmer | Dr. Vishnu Agrawal',
  description: 'Discreet, scientific treatment for erectile dysfunction, premature ejaculation & hormonal issues. Advanced therapies including shockwave, PRP & penile implants with 90% satisfaction rate.',
  keywords: [
    'erectile dysfunction treatment Ajmer',
    'best sexologist in Rajasthan',
    'premature ejaculation cure',
    'penile implant surgery',
    'low testosterone therapy',
    'shockwave therapy for ED',
    'PRP for erectile dysfunction',
    'Peyronies disease treatment',
    'male infertility specialist',
    'libido enhancement treatments',
    'penile curvature correction',
    'delayed ejaculation help',
    'Dr. Vishnu Agrawal men clinic',
    'confidential sexual health consult'
  ],
  openGraph: {
    title: 'Mens Sexual Health Solutions | Ajmer Leading Andrologist',
    description: 'Evidence-based treatments for all male sexual dysfunctions - from oral medications to advanced surgical reconstructions. Private consultations available.',
    url: 'https://drvishnuagrawal.in/services/male-sexual-problems',
    images: [
      {
        url: '/images/male-sexual-health-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal in men health consultation',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services/male-sexual-problems',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regain Your Sexual Confidence | Advanced Men Health Treatments',
    description: 'Effective solutions for ED, performance anxiety and hormonal imbalances - personalized care with guaranteed privacy.',
    images: ['/images/male-sexual-health-twitter.jpg'],
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

export default function MaleSexualProblems() {
  return (
    <>
      <MaleSexualProblemsPage/>
    </>
  );
}