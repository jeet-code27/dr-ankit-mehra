// app/layout.js
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Script from "next/script";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
// import FloatingContact from '@/components/FloatingContact';

// Define the default metadata for Dr. Vishnu Agrawal - Urologist
export const metadata = {
  metadataBase: new URL("https://drvishnuagrawal.in"),
  title: {
    template: "%s",
    default: "Best Urologist & Kidney Specialist in Ajmer | Dr. Vishnu Agrawal",
  },
  description:
    "Dr. Vishnu Agrawal is a leading urologist in Ajmer specializing in kidney stones, prostate treatment, male infertility, and urinary disorders. Offering advanced urology care with modern techniques.",
  keywords: [
    "best urologist in Ajmer",
    "top kidney specialist Ajmer",
    "prostate treatment Ajmer",
    "kidney stone specialist",
    "male infertility doctor Ajmer",
    "urinary problems treatment",
    "Dr. Vishnu Agrawal",
    "urology clinic Ajmer",
    "laser prostate surgery",
    "best urology hospital in Ajmer",
    "top rated urologist Rajasthan",
    "kidney stone laser treatment",
    "erectile dysfunction treatment",
    "urinary tract infection specialist",
  ],
  openGraph: {
    title: "Best Urologist in Ajmer | Dr. Vishnu Agrawal",
    description:
      "Expert urology care for kidney stones, prostate issues, male infertility and urinary disorders in Ajmer",
    url: "https://drvishnuagrawal.in",
    siteName: "Dr. Vishnu Agrawal - Urology Clinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Vishnu Agrawal | Best Urologist in Ajmer",
    description:
      "Expert urology care for kidney stones, prostate issues, male infertility and urinary disorders in Ajmer",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://drvishnuagrawal.in",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JHYLT2N1CG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JHYLT2N1CG');
          `}
        </Script>

        <Navbar />
        <main>{children}</main>
        {/* <FloatingContact/> */}
        <FloatingContactButtons />
        <Footer />
      </body>
    </html>
  );
}
