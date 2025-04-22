"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MapPin, Clock, Calendar, Stethoscope } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const services = [
    { href: "/services/urology-consultation", label: "Urology Consultation" },
    { href: "/services/kidney-stone-treatment", label: "Kidney Stone Treatment" },
    { href: "/services/prostate-treatment", label: "Prostate Treatment" },
    { href: "/services/urinary-infection-treatment", label: "Urinary Infection Treatment" },
    { href: "/services/laparoscopic-urology", label: "Laparoscopic Urology" }
  ];
  

  return (
    <>
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-[#0055A4] text-white py-3">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Left Section */}
          <div className="flex space-x-8 items-center">
            <div className="flex items-center">
              <Phone size={18} className="mr-2" />
              <div>
                <span className="font-medium">Emergency Helpline</span>
                <p className="text-sm">+91 82409 70287</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin size={18} className="mr-2" />
              <div>
                <span className="font-medium"> 4/172, Gyan marg, Makarwali Rd,</span>
                <p className="text-sm"> Panchsheel Nagar, Ajmer, Rajasthan</p>
                {/* , Panchsheel Nagar, Ajmer, Rajasthan 305004 */}
              </div>
            </div>

            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <div>
                <span className="font-medium">Working Hours</span>
                <p className="text-sm">Mon-Sat: 4PM - 8PM</p>
              </div>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Navbar */}
      <div className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <div className="flex items-center">
                <Stethoscope size={32} className="text-[#0055A4] mr-2" />
                <span className="text-2xl font-bold">
                  <span className="text-[#0055A4]">Dr. </span>
                  <span className="text-[#25D366] uppercase">Vishnu Agarwal</span>
                </span>
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.div className="flex items-center space-x-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              <Link href="/" className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors">
                HOME
              </Link>
             
              <Link href="/about" className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors">
                ABOUT US
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors flex items-center"
                >
                  SERVICES
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ml-1 group-hover:rotate-180 transition-transform duration-200"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {services.map((service, index) => (
                      <Link 
                        key={index} 
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0055A4] hover:text-white transition-colors"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              <Link href="/blog" className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors">
                BLOG
              </Link>
              
              <Link href="/contact" className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors">
                CONTACT US
              </Link>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/appointment" className="bg-[#25D366] text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors shadow-md flex items-center">
                  <Calendar size={18} className="mr-2" />
                  BOOK APPOINTMENT
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-gray-800 p-1 rounded-md focus:outline-none"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <Menu size={26} />
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            {/* Menu Content */}
            <motion.div 
              className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-xl overflow-y-auto"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link href="/">
                      <div className="flex items-center">
                        <Stethoscope size={28} className="text-[#0055A4] mr-2" />
                        <span className="text-xl font-bold">
                          <span className="text-[#0055A4]">Dr.</span>
                          <span className="text-[#25D366]">Vishnu Agarwal</span>
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                  <motion.button 
                    onClick={toggleMenu}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-800 p-1 rounded-md hover:bg-gray-100"
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                
                {/* Mobile Menu Links */}
                <div className="flex flex-col">
                  <motion.div
                    className="flex flex-col space-y-6"
                    initial="closed"
                    animate="open"
                    variants={{
                      open: {
                        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                      },
                      closed: {
                        transition: { staggerChildren: 0.05, staggerDirection: -1 }
                      }
                    }}
                  >
                    {[
                      { href: "/", label: "HOME" },
                      { href: "/about", label: "ABOUT US" },
                      { href: "/blog", label: "BLOG" },
                      { href: "/contact", label: "CONTACT US" },
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        variants={{
                          open: { opacity: 1, y: 0 },
                          closed: { opacity: 0, y: 20 }
                        }}
                      >
                        <Link 
                          href={item.href} 
                          className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors py-3 border-b border-gray-100 block"
                          onClick={toggleMenu}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                    
                    {/* Services Accordion in Mobile Menu */}
                    <motion.div
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 }
                      }}
                    >
                      <button
                        className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors py-3 border-b border-gray-100 w-full text-left flex items-center justify-between"
                        onClick={toggleServices}
                      >
                        SERVICES
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                      
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-2 bg-gray-50 rounded-md my-2">
                              {services.map((service, index) => (
                                <Link 
                                  key={index}
                                  href={service.href}
                                  className="text-gray-700 hover:text-[#0055A4] transition-colors py-2 block text-sm"
                                  onClick={toggleMenu}
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    <motion.div
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 }
                      }}
                      className="mt-4"
                    >
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        <Link 
                          href="/appointment" 
                          className="bg-[#25D366] text-white px-6 py-3 rounded-full font-medium text-center block shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                          onClick={toggleMenu}
                        >
                          <Calendar size={18} className="mr-2" />
                          BOOK APPOINTMENT
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Contact Info in Mobile Menu */}
                <motion.div 
                  className="mt-12 space-y-6 text-gray-700 border-t border-gray-100 pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center">
                    <div className="bg-[#0055A4] bg-opacity-10 p-2 rounded-full mr-3">
                      <Phone size={18} className="text-[#0055A4]" />
                    </div>
                    <div>
                      <span className="font-medium">Emergency Helpline</span>
                      <p className="text-sm">+91 82409 70287</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-[#0055A4] bg-opacity-10 p-2 rounded-full mr-3">
                      <MapPin size={18} className="text-[#0055A4]" />
                    </div>
                    <div>
                      <span className="font-medium">4/172, Gyan marg, Makarwali Rd,</span>
                      <p className="text-sm"> Panchsheel Nagar, Ajmer, Rajasthan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-[#0055A4] bg-opacity-10 p-2 rounded-full mr-3">
                      <Clock size={18} className="text-[#0055A4]" />
                    </div>
                    <div>
                      <span className="font-medium">Working Hours</span>
                      <p className="text-sm">Mon-Sat: 8AM - 8PM</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}