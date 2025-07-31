"use client";
import React from 'react';
import { motion } from 'framer-motion';
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

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
};

const circleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: [0, 0.1, 0.2, 0.1], // Pulsing opacity effect
    transition: {
      delay: i * 0.3,
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  })
};

const AboutHero = ({ 
  title = 'Dr. Vishnu Agrawal',
  subtitle = 'Expert Urological Care with Compassion and Precision',
  breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' }
  ]
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="w-full " ref={ref}>
      {/* Modern Gradient Background with Abstract Shapes */}
      <motion.div 
        className="relative  w-full py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 overflow-hidden"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Abstract Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-700 opacity-20"
            custom={0}
            variants={circleVariants}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-teal-500 opacity-10"
            custom={1}
            variants={circleVariants}
          />
          <motion.div 
            className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-blue-500 opacity-10"
            custom={2}
            variants={circleVariants}
          />
        </div>
        
        {/* Content Container */}
        <motion.div 
          className="relative z-10 flex flex-col justify-center items-center text-white px-4"
          variants={containerVariants}
        >
          {/* Decorative Element */}
          <motion.div 
            className="w-24 h-1 bg-teal-400 mb-8 rounded-full"
            variants={fadeInUp}
          />
          
          {/* Title with Custom Styling */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-white"
            variants={fadeInUp}
          >
            {title}
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-center max-w-2xl mb-10 text-teal-100"
            variants={fadeInUp}
          >
            {subtitle}
          </motion.p>
          
          {/* Centered Breadcrumb Navigation */}
          <motion.div 
            className="flex items-center justify-center space-x-2 text-lg font-medium bg-white/10 backdrop-blur-sm px-8 py-3 rounded-lg border border-white/20"
            variants={scaleUp}
          >
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.path}>
                <a 
                  href={crumb.path}
                  className="text-white hover:text-teal-300 transition-colors duration-200"
                >
                  {crumb.label}
                </a>
                {index < breadcrumbs.length - 1 && (
                  <span className="text-teal-300 mx-2">/</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutHero;