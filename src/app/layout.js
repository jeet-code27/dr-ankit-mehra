// app/layout.js
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Script from "next/script";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
// import FloatingContact from '@/components/FloatingContact';
 

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
