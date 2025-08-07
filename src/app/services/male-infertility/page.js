import MaleInfertilityPage from "@/components/services/MaleInfertilityPage";

export const metadata = {
  title: 'Male Infertility Specialist in Ajmer | Dr. Vishnu Agrawal',
  description: 'Comprehensive male fertility evaluations & treatments including micro-TESE, varicocele repair & hormonal therapy. 80% success in improving sperm parameters for natural conception & IVF.',
  keywords: [
    'male infertility doctor Ajmer',
    'best andrologist in Rajasthan',
    'low sperm count treatment',
    'azoospermia surgery',
    'micro-TESE procedure cost',
    'varicocele repair for fertility',
    'oligospermia specialist',
    'sperm DNA fragmentation test',
    'male hormone therapy',
    'vasectomy reversal Ajmer',
    'testicular sperm extraction',
    'IVF with ICSI specialist',
    'Dr. Vishnu Agrawal fertility center',
    'failed IVF male factor solutions'
  ],
  openGraph: {
    title: 'Male Fertility Excellence Center | Ajmer\'s Advanced Andrology Care',
    description: 'Precision treatments for all male infertility causes - from microscopic sperm retrieval to genetic testing and surgical corrections. Partnered with top IVF centers.',
    url: 'https://drvishnuagrawal.in/services/male-infertility',
    images: [
      {
        url: '/images/male-fertility-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal discussing semen analysis results',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services/male-infertility',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Male Fertility Solutions | From Diagnosis to Fatherhood',
    description: 'Advanced techniques for sperm retrieval, quality improvement and surgical corrections - giving hope to infertile couples.',
    images: ['/images/male-fertility-twitter.jpg'],
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

export default function MaleInfertility() {
  return (
    <>  
      <MaleInfertilityPage/>
    </>
  );
}