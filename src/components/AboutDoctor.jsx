'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const AboutDoctor = () => {
  // Set up intersection observers for different sections
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [profileRef, profileInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [bioRef, bioInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [buttonRef, buttonInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="w-full bg-[#f9fafb] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section with Animation */}
        <motion.div 
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Meet Dr. Vishnu Agrawal</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            <b>Dr. Vishnu Agrawal is a highly skilled and experienced urologist in Ajmer</b>, specializing in advanced laparoscopic surgery, andrology, and comprehensive urological care with over 15 years of expertise.
          </p>
        </motion.div>

        {/* Doctor Profile Section */}
        <motion.div 
          ref={profileRef}
          initial={{ opacity: 0 }}
          animate={profileInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16"
        >
          {/* Doctor Image */}
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="images/drvishnu1.png" 
              alt="Dr. Vishnu Agrawal" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Doctor Info */}
          <div className="space-y-6">
            <motion.div 
              ref={titleRef}
              initial={{ opacity: 0, x: 20 }}
              animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-gray-900">Dr. Vishnu Agrawal</h3>
              <h1 className="text-xl font-semibold text-blue-500 mt-1">Urologist & Laparoscopic Surgeon</h1>
            </motion.div>

            <motion.div 
              ref={bioRef}
              initial={{ opacity: 0, x: 20 }}
              animate={bioInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-700 space-y-4"
            >
              <p>
                Dr. Vishnu Agrawal is one of the best urologists in Ajmer, specializing in advanced technology for Laparoscopic Surgery, 
                Andrology, Female Urology, Uro-Oncology, and Kidney Surgery. With over 15+ years of experience in the field, 
                he is highly skilled in treating various urological conditions with care and precision.
              </p>
              
              <p>
                Currently practicing at Kshetrapal Hospital, Dr. Vishnu Agrawal provides expert consultation and treatment in Urology, 
                Kidney Disorders, and Female Urology. As a specialist urologist and consultant laparoscopic surgeon, 
                he is known for his advanced techniques and patient-centric approach.
              </p>
              
              <div className="mt-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Specializations:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span> Prostate Surgery
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span> Female Incontinence
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span> Erectile Dysfunction
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span> Laparoscopic Surgery
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span> Andrology
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span> Female Urology
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span> Uro-Oncology
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span> Kidney Surgery
                  </li>
                </ul>
              </div>
            </motion.div>

            <Link href="/bookconsultation">
              <motion.div
                ref={buttonRef}
                initial={{ opacity: 0, y: 20 }}
                animate={buttonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className='flex flex-col sm:flex-row sm:justify-start justify-center items-center'
              >
                <button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-blue-900 cursor-pointer transition-colors duration-300 mt-4">
                  Book Consultation
                </button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutDoctor;