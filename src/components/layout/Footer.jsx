"use client";

// import { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  ArrowRight, 
  Calendar, 
  Stethoscope,
  MessageCircle,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {

  


    const services = [
        { href: "/services/prostate-surgery", label: "Prostate Surgery" },
        { href: "/services/urinary-incontinence-treatment", label: "Urinary Incontinence" },
        { href: "/services/ureteric-stone", label: "Ureteric Stone" },
        { href: "/services/all-disease-related-urology", label: "All Disease-Realted Urology" },
        { href: "/services", label: "All Services" }
      ];
      
  
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    // { href: "/testimonials", label: "Testimonials" },
    { href: "/blog", label: "Health Blog" },
    { href: "/contact", label: "Contact Us" },
    { href: "/bookconsultation", label: "Book Consultation" },

  ];

  const workingHours = [
    { day: "Monday", hours: "4:00 PM - 7:00 PM" },
    { day: "Tuesday", hours: "4:00 PM - 7:00 PM" },
    { day: "Wednesday", hours: "4:00 PM - 7:00 PM" },
    { day: "Thursday", hours: "4:00 PM - 7:00 PM" },
    { day: "Friday", hours: "4:00 PM - 7:00 PM" },
    { day: "Saturday", hours: "4:00 PM - 7:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <footer className="relative">
      {/* Appointment Banner */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 py-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Need a Medical Consultation?
              </motion.h2>
              <motion.p 
                className="text-white text-opacity-90 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our dedicated team of healthcare professionals is ready to help you. Schedule an appointment today.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/bookconsultation" className="bg-[#25D366] hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg flex items-center">
                <Calendar size={18} className="mr-2" />
                BOOK APPOINTMENT
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 - About */}
            <div>
              <div className="flex items-center mb-6">
                <Stethoscope size={32} className="text-[#25D366] mr-2" />
                <span className="text-2xl font-bold">
                  <span className="text-[#0055A4]">Dr. </span>
                  <span className="text-[#25D366]">Vishnu Agrawal</span>
                </span>
              </div>
              
              <p className="mb-6 text-gray-400 leading-relaxed">
              Best Urologist in Ajmer. Dr. Vishnu Agrawal helps patients live pain-free with advanced urological treatments.
              </p>
              
              <div className="flex space-x-4 mb-6">
                <Link href="https://www.facebook.com/profile.php?id=61575464253101" target="_blank" className="bg-gray-800 p-2 rounded-full hover:bg-[#0055A4] transition-colors">
                  <Facebook size={18} />
                </Link>
                {/* <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#0055A4] transition-colors">
                  <Twitter size={18} />
                </Link> */}
                <Link href="https://www.instagram.com/agrawalclinicajmer/" target="_blank" className="bg-gray-800 p-2 rounded-full hover:bg-[#0055A4] transition-colors">
                  <Instagram size={18} />
                </Link>
                {/* <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#0055A4] transition-colors">
                  <Youtube size={18} />
                </Link> */}
              </div>
              
              <div className="flex items-center mb-4">
                <div className="bg-gray-800 p-2 rounded-full mr-3">
                  <Phone size={16} className="text-[#25D366]" />
                </div>
                <span><a href="tel:+918240970287">+91 82409 70287</a></span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gray-800 p-2 rounded-full mr-3">
                  <Mail size={16} className="text-[#25D366]" />
                </div>
                <a  href="https://mail.google.com/mail/?view=cm&to=agrawalclinicajmer@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
   
  >agrawalclinicajmer@gmail.com</a>

              </div>
            </div>
            
            {/* Column 2 - Our Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white relative pl-4 border-l-4 border-[#25D366]">
                Our Services
              </h3>
              
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href} 
                      className="flex items-center text-gray-400 hover:text-[#25D366] transition-colors"
                    >
                      <ArrowRight size={16} className="mr-2" />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 3 - Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white relative pl-4 border-l-4 border-[#25D366]">
                Quick Links
              </h3>
              
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="flex items-center text-gray-400 hover:text-[#25D366] transition-colors"
                    >
                      <ArrowRight size={16} className="mr-2" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 4 - Working Hours & Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white relative pl-4 border-l-4 border-[#25D366]">
                Consultation Hours
              </h3>
              
              <ul className="space-y-2 mb-8">
                {workingHours.map((item, index) => (
                  <li key={index} className="flex justify-between text-gray-400">
                    <span>{item.day}</span>
                    <span className={item.day === "Sunday" ? "text-[#25D366]" : ""}>
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
              
          
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-gray-950 text-gray-500 py-4">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>© {new Date().getFullYear()} Dr. Vishnu Agrawal. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-2 hidden md:block">
            <span>Powered by</span>
            {/* <Heart size={16} className="text-[#25D366]" fill="#25D366" />  */}
            <a href="https://seocialmedia.in" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold hover:underline">
            <span className="text-[#25D366] font-bold">SEOcial Media Solutions</span>
            </a>
            {/* <span>for better healthcare</span> */}
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#0055A4] text-white p-3 rounded-full shadow-lg hover:bg-[#25D366] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}