'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAllServices, setShowAllServices] = useState(false);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
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
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
  };

  // Intersection Observer hooks
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'stone', name: 'Stone Problems' },
    { id: 'prostate', name: 'Prostate Issues' },
    { id: 'male', name: 'Male Health' },
    { id: 'urinary', name: 'Urinary Conditions' }
  ];
  
 const services = [
    // New highlighted prostate surgery service (placed at the beginning to ensure it's in top 3)
    { 
      id: 16, 
      title: 'Prostate Surgery (18.5 French)', 
      hindi: 'प्रोस्टेट सर्जरी',
      category: 'prostate',
      imagePath: '/images/diseases/prostate-surgery.png',
      description: 'Exclusive to Dr. Vishnu Agrawal - First in Ajmer to provide this advanced minimally invasive technique.',
      path: 'prostate-surgery',
      featured: true // Added featured flag to highlight this service
    },
    { 
      id: 1, 
      title: 'Renal Stone', 
      hindi: 'गुर्दे की पथरी',
      category: 'stone',
      imagePath: '/images/diseases/renal-stone.jpeg',
      path: 'renal-stone',
      description: 'Advanced treatment for kidney stones using minimally invasive techniques.'
    },
    { 
      id: 2, 
      title: 'Ureteric Stone', 
      hindi: 'यूरेथरिक स्टोन',
      category: 'stone',
      imagePath: '/images/diseases/ureteral-stones.webp',
      path: 'ureteric-stone',
      description: 'Specialized care for stones in the ureter connecting kidney to bladder.'
    },
    { 
      id: 3, 
      title: 'Bladder Stone', 
      hindi: 'मूत्राशय पथरी',
      category: 'stone',
      imagePath: '/images/diseases/bladder-stones.png',
      path: 'bladder-stone',
      description: 'Effective removal of stones formed in the urinary bladder.'
    },
    { 
      id: 4, 
      title: 'Bladder Tumor', 
      hindi: 'मूत्राशय का ट्यूमर',
      category: 'urinary',
      imagePath: '/images/diseases/bladder-tumor.webp',
      path: 'bladder-tumor',
      description: 'Early detection and treatment of bladder cancer and tumors.'
    },
    { 
      id: 5, 
      title: 'Prostate Disease', 
      hindi: 'प्रोस्टेट की बीमारी',
      category: 'prostate',
      imagePath: '/images/diseases/prostate.avif',
      path: 'prostate-disease',
      description: 'Comprehensive care for enlarged prostate and prostate cancer.'
    },
    { 
      id: 6, 
      title: 'Urinary Disease', 
      hindi: 'मूत्र रोग',
      category: 'urinary',
      imagePath: '/images/diseases/urinary-disease.jpg',
      path: 'urinary-disease',
      description: 'Treatment for various urinary tract infections and conditions.'
    },
    { 
      id: 7, 
      title: 'Male Infertility', 
      hindi: 'पुरुष बांझपन',
      category: 'male',
      imagePath: '/images/diseases/male-infertility.webp',
      path: 'male-infertility',
      description: 'Specialized diagnosis and treatment for male fertility issues.'
    },
    { 
      id: 8, 
      title: 'Andrology Problems', 
      hindi: 'एंड्रोलॉजी समस्याएं',
      category: 'male',
      imagePath: '/images/diseases/andrology.jpg',
      path: 'andrology-problems',
      description: 'Expert care for conditions related to male reproductive health.'
    },
    { 
      id: 9, 
      title: 'Male Sexual Problems', 
      hindi: 'पुरुष यौन समस्याएं',
      category: 'male',
      imagePath: '/images/diseases/male-sexual.webp',
      path:'male-sexual-problems',
      description: 'Discreet and effective treatment for erectile dysfunction and other sexual issues.'
    },
    { 
      id: 10, 
      title: 'All Disease-Related Urology', 
      hindi: 'मूत्र संबंधी सभी रोग',
      category: 'urinary',
      imagePath: '/images/diseases/urology-general.jpg',
      path: 'all-disease-related-urology',
      description: 'Comprehensive urology care covering all urological conditions.'
    },
    { 
      id: 11, 
      title: 'Urinary Incontinence Treatment', 
      hindi: 'पेशाब पर नियंत्रण ना रहना',
      category: 'urinary',
      imagePath: '/images/diseases/incontinence.jpg',
      path: 'urinary-incontinence-treatment',
      description: 'Specialized care for inability to control urination.'
    },
    { 
      id: 12, 
      title: 'Overactive Bladder Treatment', 
      hindi: 'अतिसक्रिय मूत्राशय उपचार',
      category: 'urinary',
      imagePath: '/images/diseases/overactive-bladder.jpg',
      path: 'overactive-bladder-treatment',
      description: 'Advanced management for frequent, urgent need to urinate.'
    },
    { 
      id: 13, 
      title: 'Urinary Fistula (UVF, VVF)', 
      hindi: 'मूत्र मार्ग का अन्य अंगों से जुड़ाव',
      category: 'urinary',
      imagePath: '/images/diseases/urinary-fistula.jpg',
      path: 'urinary-fistula',
      description: 'Surgical correction of abnormal connections between urinary tract and other organs.'
    },
    { 
      id: 14, 
      title: 'Urethroplasty', 
      hindi: 'मूत्र मार्ग का संकरापन',
      category: 'urinary',
      imagePath: '/images/diseases/urethroplasty.jpeg',
      path: 'urethroplasty',
      description: 'Surgical reconstruction for urethral stricture and narrowing.'
    },
    { 
      id: 15, 
      title: 'Hypospadias / UDT', 
      hindi: 'जन्मजात मूत्र मार्ग विकृति',
      category: 'urinary',
      imagePath: '/images/diseases/hypospadias.jpg',
      path: 'hypospadias-udt',
      description: 'Treatment for congenital urinary tract abnormalities.'
    }
  ];

  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);
  
  // Sort services to ensure featured services appear first
  const sortedServices = [...filteredServices].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
  
  // Limit display to 6 services initially unless "See More" is clicked
  const displayedServices = showAllServices 
    ? sortedServices 
    : sortedServices.slice(0, 6);
  
  // Reset "Show All" state when category changes
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowAllServices(false);
  };
  
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-3"
            variants={itemVariants}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 font-medium max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Dr. Vishnu Agrawal provides comprehensive treatment for a wide range of urological conditions
          </motion.p>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
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
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm sm:text-base cursor-pointer font-medium transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleCategoryChange(category.id)}
              variants={scaleUpVariants}
              whilehover={{ scale: 1.05 }}
              whiletap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Services Grid */}
        <motion.div 
          className="flex flex-wrap gap-8 justify-center"
          ref={servicesRef}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
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
          {displayedServices.map((service, index) => (
            <motion.div 
              key={service.id} 
              className={` w-[31%]   shadow-all  min-w-[300px]
                ${service.featured ? 'order-first' : ''}`}
              variants={itemVariants}
              whilehover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {/* Image Section */}
              <motion.div 
                className="relative h-50 w-full rounded-2xl overflow-hidden"
                whilehover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={service.imagePath}
                  alt={service.title}
                  fill
                  className="object-cover  transition-transform duration-500"
                  sizes="(max-width: 750px) 90vw, (max-width: 1200px) 40vw, 33vw"
                />
              </motion.div>
              
              {/* Content Section */}
              <div className="p-5">
                <motion.h3 
                  className="text-lg font-bold text-gray-900 mb-1"
                  whilehover={{ color: '#1d4ed8' }}
                >
                  {service.title}
                  {service.featured && (
                    <motion.span 
                      className="ml-2 text-sm font-medium text-blue-600 inline-block"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 500,
                        damping: 15
                      }}
                    >
                      • Only by Dr. Vishnu in ajmer
                    </motion.span>
                  )}
                </motion.h3>
                <p className="text-md text-blue-700 font-medium mb-3">{service.hindi}</p>
                <p className="text-gray-600">{service.description}</p>
                {service.featured && (
                  <motion.div 
                    className="mt-3 bg-blue-50 text-blue-800 text-sm p-2 rounded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    First and only in Ajmer to offer this advanced procedure
                  </motion.div>
                )}
                
                <Link href={`/services/${service.path}`} passHref>
                  <motion.button 
                    className={`mt-4 font-medium flex items-center cursor-pointer transition-colors
                      ${service.featured ? 'text-blue-700 hover:text-blue-900' : 'text-blue-600 hover:text-blue-800'}`}
                    whilehover={{ x: 5 }}
                    whiletap={{ scale: 0.95 }}
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* "See More" Button */}
        {filteredServices.length > 6 && !showAllServices && (
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              onClick={() => setShowAllServices(true)}
              className="bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 border border-blue-200"
              whilehover={{ scale: 1.05 }}
              whiletap={{ scale: 0.95 }}
            >
              See More Services
            </motion.button>
          </motion.div>
        )}
        
        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Experience advanced urological care with state-of-the-art technology and personalized treatment plans.
          </p>
          <Link href="/bookconsultation" passHref>
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-blue-800 cursor-pointer hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              whilehover={{ scale: 1.05 }}
              whiletap={{ scale: 0.98 }}
            >
              Schedule Your Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;