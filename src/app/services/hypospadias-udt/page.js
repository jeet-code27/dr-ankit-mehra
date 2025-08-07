import HypospadiasUDPage from "@/components/services/HypospadiasUDPage";

export const metadata = {
  title: 'Hypospadias & Undescended Testis Specialist in Ajmer | Dr. Vishnu Agrawal',
  description: 'Pediatric & adult reconstructive surgery for hypospadias and UDT with 95% success rate. Single-stage repairs using advanced microsurgical techniques for normal urinary & reproductive function.',
  keywords: [
    'hypospadias surgery Ajmer',
    'undescended testis specialist Rajasthan',
    'best pediatric urologist',
    'chordee correction surgery',
    'cryptorchidism treatment',
    'single-stage hypospadias repair',
    'failed hypospadias surgery revision',
    'urethral reconstruction children',
    'testicular descent procedures',
    'penile curvature treatment',
    'Dr. Vishnu Agrawal pediatric urology',
    'newborn hypospadias evaluation',
    'adult hypospadias correction',
    'laparoscopic orchidopexy'
  ],
  openGraph: {
    title: 'Hypospadias & UDT Reconstruction Center | Ajmer\'s Leading Pediatric Urologist',
    description: 'Precision surgical correction for congenital genital anomalies - restoring normal anatomy with minimal scarring and optimal cosmetic results.',
    url: 'https://drvishnuagrawal.in/services/hypospadias-udt',
    images: [
      {
        url: '/images/hypospadias-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal discussing hypospadias treatment with parents',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/services/hypospadias-udt',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Hypospadias & UDT Treatments | From Infancy to Adulthood',
    description: 'Specialized reconstructive surgeries for congenital urogenital conditions - ensuring proper development and function.',
    images: ['/images/hypospadias-twitter.jpg'],
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

export default function HypospadiasUDT() {
  return (
    <>
      <HypospadiasUDPage/>
    </>
  );
}