import AboutCoreValues from "@/components/AboutCoreValues";
import AboutDoctor from "@/components/AboutDoctor";
import AboutMission from "@/components/AboutMission";
import AboutUsHero from "@/components/AboutUsHero";

export const metadata = {
  title: 'Best Urologist in Ajmer | About Dr. Vishnu Agrawal',
  description: 'Learn about Dr. Vishnu Agrawal, the top urologist in Ajmer with extensive experience in kidney stone treatment, prostate care, and male health services. Our patient-centered approach sets us apart.',
  keywords: [
    'best urologist in Ajmer about',
    'top kidney doctor Ajmer profile',
    'about Dr. Vishnu Agrawal urologist',
    'kidney stone specialist background',
    'prostate treatment expert Ajmer',
    'male infertility doctor experience',
    'urology clinic mission statement',
    'Dr. Vishnu Agrawal qualifications',
    'best urology hospital values',
    'patient care philosophy Ajmer'
  ],
  openGraph: {
    title: 'About Top Urologist in Ajmer | Dr. Vishnu Agrawal Kidney Specialist',
    description: 'Discover the qualifications, mission and values of Ajmer\'s leading urologist Dr. Vishnu Agrawal - specializing in advanced kidney and prostate treatments',
    url: 'https://drvishnuagrawal.in/about',
    images: [
      {
        url: '/images/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vishnu Agrawal in his clinic',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Best Urologist in Ajmer | Dr. Vishnu Agrawal',
    description: 'Meet Ajmer\'s top kidney and prostate specialist - his qualifications, treatment philosophy and clinic values',
    images: ['/images/about-twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  other: {
    "application-name": "Dr. Vishnu Agrawal - Urology Clinic",
    author: "Dr. Vishnu Agrawal",
    Publisher: "Dr. Vishnu Agrawal",
    "publisher-url": "https://drvishnuagrawal.in",
    generator: "Next.js",
    "theme-color": "#ffffff",
  },
};

export default function About() {   
  return (
    < >
<AboutUsHero/>
<AboutDoctor/>
<AboutMission/>
<div className="bg-white">
<AboutCoreValues/>
</div>
    </>
  );
}                                                                                                               