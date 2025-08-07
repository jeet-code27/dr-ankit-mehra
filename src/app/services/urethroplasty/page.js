import UrethroplastyPage from "@/components/services/UrethroplastyPage";

export const metadata = {
  title: 'Best Urethroplasty Surgery in Ajmer - Dr. Vishnu Agrawal ',
  description: 'Advanced urethral stricture repair using buccal mucosa graft and anastomotic techniques. Permanent solution for urinary blockage with minimally invasive approaches.',
  keywords: [
    'urethral stricture surgery Ajmer',
    'best urethroplasty surgeon Rajasthan',
    'buccal mucosa graft urethroplasty',
    'failed DVIU treatment',
    'urethral reconstruction specialist',
    'urethral stricture treatment cost',
    'recurrent stricture surgery',
    'pelvic fracture urethral injury',
    'lics urethroplasty technique',
    'urethrotomy failure repair',
    'anterior vs posterior urethroplasty',
    'urethral dilation alternative',
    'Dr. Vishnu Agrawal stricture clinic',
    'laser urethroplasty options'
  ],
  openGraph: {
    title: 'Urethral Stricture Repair Center | Ajmer’s Urethroplasty Specialist',
    description: 'Microsurgical reconstruction for complex urethral strictures - offering both graft and excision techniques for complete urinary flow restoration.',
    url: 'https://drvishnuagrawal.in/services/urethroplasty',
    images: [
      {
        url: '/images/urethroplasty-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal performing urethroplasty surgery',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services/urethroplasty',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Permanent Urethral Stricture Solution | High Success Rate Surgery',
    description: 'Specialized reconstruction techniques for failed urethrotomies and complex strictures - restoring normal urination.',
    images: ['/images/urethroplasty-twitter.jpg'],
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

export default function Urethroplasty() {
  return (
    <>
      <UrethroplastyPage/>
    </>
  );
}