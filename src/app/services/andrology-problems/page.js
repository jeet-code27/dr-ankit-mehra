import AndrologyProblemsPage from "@/components/services/AndrologyProblemsPage";

export const metadata = {
  title: 'Andrology Specialist in Ajmer | Dr. Vishnu Agrawal ',
  description: 'Comprehensive care for male infertility, sexual dysfunction, hormonal disorders & penile conditions. Advanced treatments including microsurgery, PRP therapy & testosterone optimization with 90% patient satisfaction.',
  keywords: [
    'andrologist in Ajmer',
    'male fertility specialist Rajasthan',
    'penile implant surgery',
    'testosterone replacement therapy',
    'Peyronie\'s disease treatment',
    'microsurgical sperm retrieval',
    'male sexual dysfunction clinic',
    'low libido treatment',
    'scrotal surgery specialist',
    'post-vasectomy pain syndrome',
    'male menopause treatment',
    'penile reconstruction surgery',
    'Dr. Vishnu Agrawal andrology center',
    'confidential men\'s health consult'
  ],
  openGraph: {
    title: 'Advanced Andrology Center | Ajmer\'s Male Health Specialist',
    description: 'Evidence-based solutions for complex male reproductive and sexual health disorders - combining medical, surgical and lifestyle approaches for optimal results.',
    url: 'https://drvishnuagrawal.in/services/andrology-problems',
    images: [
      {
        url: '/images/andrology-clinic-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal in andrology consultation',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services/andrology-problems',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Male Health Care | From Fertility to Sexual Function',
    description: 'Specialized treatments for all andrological conditions - personalized care with guaranteed privacy and dignity.',
    images: ['/images/andrology-clinic-twitter.jpg'],
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

export default function AndrologyProblems() {
  return (
    <>
      <AndrologyProblemsPage/>
    </>
  );
}