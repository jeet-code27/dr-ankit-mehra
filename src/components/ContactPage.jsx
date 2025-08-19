"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const scaleUpVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
};

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
};

const AnimatedSection = ({ children, variants, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        {/* Banner with Gradient Text instead of Gradient Background */}
        <AnimatedSection variants={containerVariants}>
          <motion.div 
            className="bg-white rounded-xl shadow-xl overflow-hidden mb-12"
            variants={scaleUpVariants}
          >
            <div className="md:flex">
              <motion.div 
                className="md:w-1/2 p-8"
                variants={slideInFromLeft}
              >
                <h1 className="text-3xl font-bold mb-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-transparent bg-clip-text">
                  Expert Urological Care
                </h1>
                <motion.p 
                  className="text-xl text-black mb-6"
                  variants={itemVariants}
                >
                  Comprehensive treatment for all urinary and reproductive health conditions with personalized care.
                </motion.p>
                <motion.div 
                  className="flex items-center lg:justify-start justify-center space-x-2 mb-4"
                  variants={itemVariants}
                >
                  <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-black"><a href="tel:+918240970287" >+91 82409 70287</a></span>
                </motion.div>
                <motion.div className='flex lg:justify-start justify-center' variants={itemVariants}>
                  <Link href="/bookconsultation">
                    <button className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-1 transition duration-300">
                      Book Appointment
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div 
                className="md:w-1/2 flex items-center justify-center p-6"
                variants={slideInFromRight}
              >
                <div className="rounded-full bg-[#C3E1F2] overflow-hidden">
                  <div className="relative w-full" style={{ maxHeight: '500px' }}>
                    <Image
                      src="/images/drvishnu1.png"
                      alt="Dr. Vishnu Agrawal"
                      width={650}
                      height={650}
                      priority
                      className="w-full h-auto max-h-[450px]"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection variants={containerVariants}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information Card */}
            <motion.div 
              className="bg-white rounded-xl shadow-xl overflow-hidden"
              variants={slideInFromLeft}
            >
              <div className="bg-white px-6 py-4 border-b">
                <h2 className="text-2xl font-bold bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-transparent bg-clip-text">Contact Information</h2>
              </div>
              <motion.div 
                className="p-6"
                variants={containerVariants}
              >
                <motion.div className="space-y-6">
                  <motion.div 
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600 mt-1">4/172, Gyan marg, Makarwali Rd, near vinayak complex, Panchsheel Nagar,</p>
                      <p className="text-gray-600">Ajmer, Rajasthan 305004</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600 mt-1"><a href="tel:+918240970287">+91 82409 70287</a></p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                      <a
  href="https://mail.google.com/mail/?view=cm&to=agrawalclinicajmer@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  
> <p className="text-gray-600 mt-1">agrawalclinicajmer@gmail.com</p></a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Consultation Hours</h3>
                      <p className="text-gray-600 mt-1">Monday - Saturday: 4:00 PM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Map Section */}
            <motion.div 
              className="bg-white rounded-xl shadow-xl overflow-hidden"
              variants={slideInFromRight}
            >
              <div className="bg-white px-6 py-4 border-b">
                <h2 className="text-2xl font-bold bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-transparent bg-clip-text">Location</h2>
              </div>
              <motion.div 
                className="p-6"
                variants={containerVariants}
              >
                <motion.div 
                  className="w-full h-80 rounded-lg overflow-hidden shadow-md"
                  variants={fadeInVariants}
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.331847022711!2d74.63045767520971!3d26.509449776889912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7b658ede083%3A0x84620c38bbc8ec73!2sDr.%20Vishnu%20Agarwal%20-%20Best%20Urologist%20%26%20Stone%20Specialist%20in%20Ajmer!5e0!3m2!1sen!2sin!4v1746268394930!5m2!1sen!2sin" 
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </motion.div>
                
                {/* Specialties - Updated for Urology */}
                <motion.div 
                  className="mt-8"
                  variants={containerVariants}
                >
                  <h3 className="text-xl font-semibold bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-transparent bg-clip-text mb-4">Our Specialties</h3>
                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    variants={containerVariants}
                  >
                    <motion.div 
                      className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800"
                      variants={itemVariants}
                      whilehover={{ scale: 1.03 }}
                    >
                      <div className="font-medium text-blue-900">Laparoscopic Surgery</div>
                      <p className="text-sm text-gray-600 mt-1">Minimally invasive procedures for urological conditions</p>
                    </motion.div>
                    <motion.div 
                      className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800"
                      variants={itemVariants}
                      whilehover={{ scale: 1.03 }}
                    >
                      <div className="font-medium text-blue-900">Kidney Stone Treatment</div>
                      <p className="text-sm text-gray-600 mt-1">PCNL, RIRS and laser lithotripsy</p>
                    </motion.div>
                    <motion.div 
                      className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800"
                      variants={itemVariants}
                      whilehover={{ scale: 1.03 }}
                    >
                      <div className="font-medium text-blue-900">Prostate Care</div>
                      <p className="text-sm text-gray-600 mt-1">BPH treatment and prostate cancer management</p>
                    </motion.div>
                    <motion.div 
                      className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800"
                      variants={itemVariants}
                      whilehover={{ scale: 1.03 }}
                    >
                      <div className="font-medium text-blue-900">Andrology</div>
                      <p className="text-sm text-gray-600 mt-1">Male reproductive health and erectile dysfunction</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
};

export default ContactPage;