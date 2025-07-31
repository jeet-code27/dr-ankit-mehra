"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Facebook,
  Instagram,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ServicesDropdown from "../ServiceDropDown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
                <span className="font-medium">Contact No.</span>
                <br></br>
                <a href="tel:+918240970287" className="text-sm">
                  +91 82409 70287
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <MapPin size={18} className="mr-2" />
              <div>
                <span className="font-medium">
                  4/172, Gyan marg, Makarwali Rd, near vinayak
                </span>
                <p className="text-sm">
                  complex, Panchsheel Nagar, Ajmer, Rajasthan 305004
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <div>
                <span className="font-medium">Working Hours</span>
                <p className="text-sm">Mon-Sat: 4PM - 7PM</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61575464253101"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <Facebook size={20} />
            </Link>
            {/* <Link href="#" className="hover:opacity-80 transition-opacity">
              <Twitter size={20} />
            </Link> */}
            <Link
              href="https://www.instagram.com/agrawalclinicajmer/"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <Instagram size={20} />
            </Link>
            {/* <Link href="#" className="hover:opacity-80 transition-opacity">
              <Youtube size={20} />
            </Link> */}
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
                {/* Doctor logo image */}
                <Image
                  src="/images/logoo.png" // Update this path later
                  alt="Dr. Vishnu Agrawal Logo"
                  width={60}
                  height={60}
                  className="mr-2 rounded-full"
                />
                <span className="text-2xl font-bold">
                  <span className="text-[#0055A4]">Dr. </span>
                  <span className="text-[#25D366] uppercase">
                    Vishnu Agrawal
                  </span>
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                staggerChildren: 0.1,
                delayChildren: 0.2,
              }}
            >
              <Link
                href="/"
                className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors"
              >
                HOME
              </Link>

              <Link
                href="/about"
                className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors"
              >
                ABOUT US
              </Link>

              {/* Direct Services Link Instead of Dropdown */}
              <ServicesDropdown />

              <Link
                href="/blog"
                className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors"
              >
                BLOG
              </Link>

              <Link
                href="/contact"
                className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors"
              >
                CONTACT US
              </Link>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="/bookconsultation"
                  className="bg-[#25D366] text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors shadow-md flex items-center"
                >
                  <Calendar size={18} className="mr-2" />
                  BOOK CONSULTATION
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
                        {/* Use Image component for logo in mobile menu */}
                        <Image
                          src="/images/logo.png" // Make sure this path is correct
                          alt="Dr. Vishnu Agrawal Logo"
                          width={40}
                          height={40}
                          className="mr-2 rounded-full"
                        />
                        <span className="text-xl font-bold">
                          <span className="text-[#0055A4]">Dr.</span>
                          <span className="text-[#25D366]">Vishnu Agrawal</span>
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
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.2,
                        },
                      },
                      closed: {
                        transition: {
                          staggerChildren: 0.05,
                          staggerDirection: -1,
                        },
                      },
                    }}
                  >
                    <>
                      <motion.div
                        variants={{
                          open: { opacity: 1, y: 0 },
                          closed: { opacity: 0, y: 20 },
                        }}
                      >
                        <Link
                          href={"/"}
                          className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors py-3 border-b border-gray-100 block"
                          onClick={toggleMenu}
                        >
                          HOME
                        </Link>
                      </motion.div>

                      <motion.div
                        variants={{
                          open: { opacity: 1, y: 0 },
                          closed: { opacity: 0, y: 20 },
                        }}
                      >
                        <Link
                          href={"/about"}
                          className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors py-3 border-b border-gray-100 block"
                          onClick={toggleMenu}
                        >
                          ABOUT US
                        </Link>
                      </motion.div>

                      {/* <motion.div
                        variants={{
                          open: { opacity: 1, y: 0 },
                          closed: { opacity: 0, y: 20 },
                        }}
                      >
                        <Link
                          href={"/services"}
                          className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors py-3 border-b border-gray-100 block"
                          onClick={toggleMenu}
                        >
                          SERVICES
                        </Link>
                      </motion.div> */}
                      <ServicesDropdown />

                      <motion.div
                        variants={{
                          open: { opacity: 1, y: 0 },
                          closed: { opacity: 0, y: 20 },
                        }}
                      >
                        <Link
                          href={"/blog"}
                          className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors py-3 border-b border-gray-100 block"
                          onClick={toggleMenu}
                        >
                          BLOG
                        </Link>
                      </motion.div>

                      <motion.div
                        variants={{
                          open: { opacity: 1, y: 0 },
                          closed: { opacity: 0, y: 20 },
                        }}
                      >
                        <Link
                          href={"/contact"}
                          className="text-gray-700 font-medium hover:text-[#0055A4] transition-colors py-3 border-b border-gray-100 block"
                          onClick={toggleMenu}
                        >
                          CONTACT US
                        </Link>
                      </motion.div>
                    </>
                    <motion.div
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 },
                      }}
                      className="mt-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href="/bookconsultation"
                          className="bg-[#25D366] text-white px-6 py-3 rounded-full font-medium text-center block shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                          onClick={toggleMenu}
                        >
                          <Calendar size={18} className="mr-2" />
                          BOOK CONSULTATION
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Contact Info in Mobile Menu - Using Lucide Icons */}
                <motion.div
                  className="mt-12 space-y-6 text-gray-700 border-t border-gray-100 pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-start">
                    <div className="bg-[#0055A4] bg-opacity-10 p-2 rounded-full mr-3 flex-shrink-0">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="font-medium">Emergency Helpline</span>
                      <a href="tel:+918240970287">
                        {" "}
                        <p className="text-sm">+91 82409 70287</p>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#0055A4] bg-opacity-10 p-2 rounded-full mr-3 flex-shrink-0">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="font-medium">
                        4/172, Gyan marg, Makarwali Rd,
                      </span>
                      <p className="text-sm">
                        {" "}
                        Panchsheel Nagar, Ajmer, Rajasthan 305004
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#0055A4] bg-opacity-10 p-2 rounded-full mr-3 flex-shrink-0">
                      <Clock size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="font-medium">Working Hours</span>
                      <p className="text-sm">Mon-Sat: 4PM - 8PM</p>
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
