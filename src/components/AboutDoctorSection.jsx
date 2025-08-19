'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoBagAddSharp } from "react-icons/io5";

const AboutDoctorSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const scaleUpVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
  };

  // Intersection Observer hooks
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [specializationsRef, specializationsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-2"
            variants={itemVariants}
          >
            Best Urologist in Ajmer
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 font-medium"
            variants={itemVariants}
          >
            Top Urological Care by Urology Expert
          </motion.p>
        </motion.div>
        
        <div 
        className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image with Credentials */}
          <motion.div 
            className="w-full lg:w-2/5"
            
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 0.6,
                  ease: "easeOut"
                }
              }
            }}
          >
            <div 
            className="relative rounded-lg overflow-hidden shadow-xl  bg-gray-100 p-6 hover:shadow-2xl transition-shadow duration-300">
              <motion.div 
                className="relative w-full rounded-lg aspect-square mb-17 "
                whilehover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/drvishnu1.png" 
                  alt="Dr. Vishnu Agrawal"
                  fill
                  className="rounded-lg object-cover "
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Vishnu Agrawal</h3>
                <p className="text-blue-700 font-medium mb-2"> M.B.B.S.,M.S., M.Ch. Urologist </p>
                <p className="text-gray-600 mb-4">Consultant Urologist & Laparoscopic Surgeon</p>
                
                <motion.div 
                  className="flex justify-center flex-col space-y-1 items-center lg:flex-row space-x-4 mb-2"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="flex items-center"
                    variants={itemVariants}
                  >
                    <svg className="w-5 h-5 text-blue-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">15+ Years Experience</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    variants={itemVariants}
                  >
                   <IoBagAddSharp className='text-[#155DFC]'/>
                    <span className="text-gray-700">10000+ Surgeries</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Content */}
          <motion.div 
            className="w-full lg:w-3/5"
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.p 
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Dr. Vishnu Agrawal is one of the best urologists in Ajmer, specializing in advanced technology for Laparoscopic Surgery, Andrology, Female Urology, Uro-Oncology, and Kidney Surgery. With over 15+ years of experience in the field, Dr. Vishnu Agrawal is highly skilled and knowledgeable in treating various urological conditions with care and precision.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Currently practicing at Kshetrapal Hospital, Dr. Vishnu Agrawal provides expert consultation and treatment in Urology, Kidney Disorders, and Female Urology. As a specialist urologist and consultant laparoscopic surgeon, he is known for his advanced techniques and patient-centric approach. His commitment to offering the best urological care makes him a trusted name in Ajmer.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              ref={specializationsRef}
              initial="hidden"
              animate={specializationsInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    when: "beforeChildren"
                  }
                }
              }}
            >
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={scaleUpVariants}
                whilehover={{ y: -5 }}
              >
                <h4 className="text-blue-800 font-bold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Specializations
                </h4>
                <ul className="text-gray-700 ">
                  {[
                    "Prostate Surgery (18.5 fr)",
                    "Kidney Stone Surgery",
                    "Female Incontinence",
                    "Erectile Dysfunction",
                    "Laparoscopic Surgery",
                    "Andrology",
                    "Female Urology",
                    "Uro-Oncology",
                    "Kidney Surgery"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="mb-1 border-b-2 p-2 border-b-gray-100 rounded-lg"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={scaleUpVariants}
                whilehover={{ y: -5 }}
              >
                <h4 className="text-blue-800 font-bold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  Patient Care
                </h4>
                <ul className="text-gray-700  ">
                  {[
                    "Patient-Centric Approach",
                    "Advanced Diagnostic Methods",
                    "Minimally Invasive Procedures",
                    "Personalized Treatment Plans",
                    "Comprehensive Follow-up Care"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="mb-1 border-b-2 p-2 border-b-gray-100 rounded-lg"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.2 }}
                    >
                    {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/bookconsultation" passHref>
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 cursor-pointer to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  whilehover={{ scale: 1.05 }}
                  whiletap={{ scale: 0.98 }}
                >
                  Book a Consultation
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctorSection;