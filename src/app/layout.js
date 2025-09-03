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
        <Navbar />
        <main>{children}</main>
        {/* <FloatingContact/> */}
        <FloatingContactButtons />
        <Footer />
      </body>
    </html>
  );
}
