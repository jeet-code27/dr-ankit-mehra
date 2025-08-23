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
        { href: "/skin-treatments", label: "Skin Treatments" },
        { href: "/hair-treatments-2", label: "Hair Treatments" },
        { href: "/laser-treatments", label: "Laser Treatments" },
       
      ];
      
  
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    
    { href: "/blogs", label: "Blogs" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/gallery-2", label: "Gallery" },
    

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
       
      
      {/* Main Footer Content */}
      <div className="bg-gradient-to-tr from-[#8ec5fc] to-[#e0c3fc] text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 - About */}
            <div>
              <div className="flex items-center mb-6">
                <Stethoscope size={32} className="text-green-700  mr-2" />
                <span className="text-2xl font-bold">
                  
                  <span className="text-[#0055A4]">Dr. Ankit Mehra</span>
                </span>
              </div>
              
              <p className="mb-6 text-gray-800 leading-relaxed">
             Best Dermatologist in Ajmer. Dr. Ankit Mehra brings 12+ years of expertise in advanced skin, hair, and laser treatments—helping you achieve healthy, glowing skin.
              </p>
              
              <div className="flex space-x-4 mb-6">
                <Link href="https://www.facebook.com/drankitmeherda" target="_blank" className="bg-[#0068C3] p-2 rounded-full hover:bg-[#0055A4] transition-colors">
                  <Facebook size={18} />
                </Link>
                {/* <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#0055A4] transition-colors">
                  <Twitter size={18} />
                </Link> */}
                <Link href="https://www.instagram.com/drankitmehra/" target="_blank" className="bg-[#0068C3] p-2 rounded-full hover:bg-[#0055A4] transition-colors">
                  <Instagram size={18} />
                </Link>
                {/* <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#0055A4] transition-colors">
                  <Youtube size={18} />
                </Link> */}
              </div>
              
              <div className="flex items-center mb-4">
                <div className=" bg-[#0068C3] hover:bg-[#0055A4] cursor-pointer transition-colors p-2 rounded-full mr-3">
                  <Phone size={16} className="text-white " />
                </div>
                <span><a className="text-gray-800" href="tel:+919697041111">+91 96970 41111</a></span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-[#0068C3] hover:bg-[#0055A4] transition-colors cursor-pointer p-2 rounded-full mr-3">
                  <Mail size={16} className="text-white" />
                </div>
                <a  href="https://mail.google.com/mail/?view=cm&to=ankit456.mehra@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-800"
   
  >ankit456.mehra@gmail.com</a>

              </div>
            </div>
            
            {/* Column 2 - Our Services */}
            <div>
             <h3 
  className="text-xl font-semibold mb-6 text-white relative pl-4 border-l-4 border-green-700"
  style={{ textShadow: "2px 4px 4px rgba(0, 55, 252, 0.9)" }}
>
  Our Services
</h3>

              
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href} 
                      className="flex items-center text-gray-700 hover:text-blue-900 hover:font-bold transition-colors"
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
              <h3 className="text-xl font-semibold mb-6 text-white relative pl-4 border-l-4 border-green-700"
  style={{ textShadow: "2px 4px 4px rgba(0, 55, 252, 0.9)" }}>
                Quick Links
              </h3>
              
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="flex items-center text-gray-700 hover:text-blue-900 hover:font-bold transition-colors"
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
              <h3 className="text-xl font-semibold mb-6 text-white relative pl-4 border-l-4 border-green-700"
  style={{ textShadow: "2px 2px 4px rgba(0, 55, 252, 0.9)" }}>
                Consultation Hours
              </h3>
              
              <ul className="space-y-2 mb-8">
                {workingHours.map((item, index) => (
                  <li key={index} className="flex justify-between text-gray-700">
                    <span>{item.day}</span>
                    <span className={item.day === "Sunday" ? "text-gray-700" : ""}>
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
      <div className="bg-blue-900  py-4">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>© {new Date().getFullYear()} Dr. Ankit Mehra, All rights reserved.</p>
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