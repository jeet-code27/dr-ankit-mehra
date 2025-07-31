'use client';
import Link from 'next/link';
import { ChevronRight, Phone, Calendar, ArrowRight, Check, Shield, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
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

  const [highlightRef, highlightInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [buttonsRef, buttonsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50 to-white overflow-hidden py-16 md:py-24">
      {/* Background Elements with Animation */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 opacity-70"
          variants={itemVariants}
        ></motion.div>
        <motion.div 
          className="absolute top-32 -left-24 w-64 h-64 rounded-full bg-blue-100 opacity-50"
          variants={itemVariants}
        ></motion.div>
        {/* <motion.div 
          className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"
          variants={itemVariants}
        ></motion.div> */}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Main Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial="hidden"
              animate={titleInView ? "visible" : "hidden"}
              variants={fadeInVariants}
              ref={titleRef}
            >
              <motion.div 
                className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                Advanced Urology Care in Ajmer
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                <motion.span 
                  className="text-blue-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  EXPERT
                </motion.span> UROLOGY CARE,
                <br />
                <motion.span 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  COMPASSIONATE 
                  <span className="absolute -bottom-20 md:block hidden left-0 w-full h-1 bg-blue-500 opacity-70 rounded-full"></span>
                </motion.span> TREATMENT 
              </h1>
              
              <motion.p 
                className="text-lg text-gray-700 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Providing advanced solutions for kidney stones, prostate issues, and urological health. 
                <span className="font-bold text-blue-800"> Trust Dr. Vishnu Agrawal</span>, your partner in care.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center sm:flex-row gap-5 sm:justify-center justify-center lg:justify-start mb-12"
              ref={buttonsRef}
              initial="hidden"
              animate={buttonsInView ? "visible" : "hidden"}
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
              <motion.div variants={scaleUpVariants}>
                <Link href="/bookconsultation" passHref>
                  <button 
                    className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    whilehover={{ scale: 1.05 }}
                    whiletap={{ scale: 0.98 }}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </button>
                </Link>
              </motion.div>
              <motion.div variants={scaleUpVariants}>
                <Link href="/services" passHref>
                  <button 
                    className="flex items-center justify-center bg-white hover:bg-gray-50 text-blue-800 font-medium py-3 px-8 rounded-full text-lg border-2 border-blue-300 transition-all duration-300 hover:border-blue-500 hover:-translate-y-1"
                    whilehover={{ scale: 1.05 }}
                    whiletap={{ scale: 0.98 }}
                  >
                    Our Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Contact Quick Info */}
            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-medium">
  <a href="tel:+918240970287">+91 82409 70287</a>
</span>
              </div>
              <div className="h-5 w-px bg-gray-300 hidden sm:block"></div>
              {/* <div className="font-medium text-blue-600 hover:text-blue-800 transition-colors">
                <Link href="/emergency">Emergency Care Available</Link>
              </div> */}
            </motion.div>
          </div>
          
          {/* Prostate Surgery Highlight Box with Exclusive Tag */}
          <motion.div 
            className="w-full lg:w-2/5"
            ref={highlightRef}
            initial="hidden"
            animate={highlightInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6,
                  ease: "easeOut"
                }
              }
            }}
          >
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full opacity-20 -mr-10 -mt-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 rounded-full opacity-20 -ml-10 -mb-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              ></motion.div>
              
              {/* Prominent Exclusive Banner at the top of the box */}
              <motion.div 
                className="w-full bg-[#25D366] py-2 px-4 flex items-center justify-center"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Trophy className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-white font-bold uppercase text-sm">Exclusive in Ajmer</span>
                <Trophy className="w-5 h-5 text-yellow-300 ml-2" />
              </motion.div>
              
              {/* Content container */}
              <div className="p-6">
                <motion.div 
                  className="bg-white bg-opacity-90 rounded-xl p-6 backdrop-blur-sm"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div 
                    className="flex items-center mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-lg">Dr.</span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold text-lg">Dr. Vishnu Agrawal</p>
                      <p className="text-blue-800">Urologist Specialist</p>
                    </div>
                  </motion.div>
                
                  <motion.h3 
                    className="text-3xl font-bold text-blue-900 mb-3 flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Shield className="w-6 h-6 mr-2 text-blue-700" />
                    Prostate Surgery 
                    <motion.span 
                      className="bg-[#25D366] text-white text-sm font-bold ml-0.5 px-2 py-1 rounded inline-flex items-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                        delay: 0.5
                      }}
                    >
                      18.5 French
                    </motion.span>
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg text-blue-800 font-medium mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Advanced minimally invasive technique with breakthrough benefits
                  </motion.p>
                  
                  {/* Benefits Grid */}
                  <motion.div 
                    className="grid lg:grid-cols-2  gap-2 mb-4"
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
                    {[
                      "Minimal chances of stricture",
                      "Minimal burning after surgery",
                      "Faster recovery time",
                      "Reduced hospital stay"
                    ].map((benefit, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start text-gray-700 bg-blue-50 p-2 rounded"
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        whilehover={{ scale: 1.02 }}
                      >
                        <Check className="w-5 h-5 text-green-600 mr-1 flex-shrink-0" />
                        <span className="text-sm font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.div
                    whilehover={{ scale: 1.02 }}
                    whiletap={{ scale: 0.98 }}
                  >
                    <Link href="/services/prostate-surgery" passHref>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
                        Discover More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Bottom banner */}
              <motion.div 
                className="bg-[#25D366] py-2 px-4 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="font-bold text-white">
                  First & Only Specialist to Perform This Procedure in Ajmer
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <hr className='mt-8'/>
    </section>
  );
};

export default HeroSection;