'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ServicesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAllServices, setShowAllServices] = useState(false);
  
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'stone', name: 'Stone Problems' },
    { id: 'prostate', name: 'Prostate Issues' },
    { id: 'male', name: 'Male Health' },
    { id: 'urinary', name: 'Urinary Conditions' }
  ];
  
  const services = [
    { 
      id: 1, 
      title: 'Renal Stone', 
      hindi: 'गुर्दे की पथरी',
      category: 'stone',
      imagePath: '/images/diseases/renal-stone.jpeg',
      description: 'Advanced treatment for kidney stones using minimally invasive techniques.'
    },
    { 
      id: 2, 
      title: 'Ureteric Stone', 
      hindi: 'यूरेथरिक स्टोन',
      category: 'stone',
      imagePath: '/images/diseases/ureteral-stones.webp',
      description: 'Specialized care for stones in the ureter connecting kidney to bladder.'
    },
    { 
      id: 3, 
      title: 'Bladder Stone', 
      hindi: 'मूत्राशय पथरी',
      category: 'stone',
      imagePath: '/images/diseases/bladder-stones.png',
      description: 'Effective removal of stones formed in the urinary bladder.'
    },
    { 
      id: 4, 
      title: 'Bladder Tumor', 
      hindi: 'मूत्राशय का ट्यूमर',
      category: 'urinary',
      imagePath: '/images/diseases/bladder-tumor.webp',
      description: 'Early detection and treatment of bladder cancer and tumors.'
    },
    { 
      id: 5, 
      title: 'Prostate Disease', 
      hindi: 'प्रोस्टेट की बीमारी',
      category: 'prostate',
      imagePath: '/images/diseases/prostate.avif',
      description: 'Comprehensive care for enlarged prostate and prostate cancer.'
    },
    { 
      id: 6, 
      title: 'Urinary Disease', 
      hindi: 'मूत्र रोग',
      category: 'urinary',
      imagePath: '/images/diseases/urinary-disease.jpg',
      description: 'Treatment for various urinary tract infections and conditions.'
    },
    { 
      id: 7, 
      title: 'Male Infertility', 
      hindi: 'पुरुष बांझपन',
      category: 'male',
      imagePath: '/images/diseases/male-infertility.webp',
      description: 'Specialized diagnosis and treatment for male fertility issues.'
    },
    { 
      id: 8, 
      title: 'Andrology Problems', 
      hindi: 'एंड्रोलॉजी समस्याएं',
      category: 'male',
      imagePath: '/images/diseases/andrology.jpg',
      description: 'Expert care for conditions related to male reproductive health.'
    },
    { 
      id: 9, 
      title: 'Male Sexual Problems', 
      hindi: 'पुरुष यौन समस्याएं',
      category: 'male',
      imagePath: '/images/diseases/male-sexual.webp',
      description: 'Discreet and effective treatment for erectile dysfunction and other sexual issues.'
    },
    { 
      id: 10, 
      title: 'All Disease-Related Urology', 
      hindi: 'मूत्र संबंधी सभी रोग',
      category: 'urinary',
      imagePath: '/images/diseases/urology-general.jpg',
      description: 'Comprehensive urology care covering all urological conditions.'
    },
    { 
      id: 11, 
      title: 'Urinary Incontinence Treatment', 
      hindi: 'पेशाब पर नियंत्रण ना रहना',
      category: 'urinary',
      imagePath: '/images/diseases/incontinence.jpg',
      description: 'Specialized care for inability to control urination.'
    },
    { 
      id: 12, 
      title: 'Overactive Bladder Treatment', 
      hindi: 'अतिसक्रिय मूत्राशय उपचार',
      category: 'urinary',
      imagePath: '/images/diseases/overactive-bladder.jpg',
      description: 'Advanced management for frequent, urgent need to urinate.'
    },
    { 
      id: 13, 
      title: 'Urinary Fistula (UVF, VVF)', 
      hindi: 'मूत्र मार्ग का अन्य अंगों से जुड़ाव',
      category: 'urinary',
      imagePath: '/images/diseases/urinary-fistula.jpg',
      description: 'Surgical correction of abnormal connections between urinary tract and other organs.'
    },
    { 
      id: 14, 
      title: 'Urethroplasty', 
      hindi: 'मूत्र मार्ग का संकरापन',
      category: 'urinary',
      imagePath: '/images/diseases/urethroplasty.jpeg',
      description: 'Surgical reconstruction for urethral stricture and narrowing.'
    },
    { 
      id: 15, 
      title: 'Hypospadias / UDT', 
      hindi: 'जन्मजात मूत्र मार्ग विकृति',
      category: 'urinary',
      imagePath: '/images/diseases/hypospadias.jpg',
      description: 'Treatment for congenital urinary tract abnormalities.'
    }
  ];
  
  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);
  
  // Limit display to 6 services initially unless "See More" is clicked
  const displayedServices = showAllServices 
    ? filteredServices 
    : filteredServices.slice(0, 6);
  
  // Reset "Show All" state when category changes
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowAllServices(false);
  };
  
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3">Our Services</h2>
          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
            Dr. Vishnu Agarwal provides comprehensive treatment for a wide range of urological conditions
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedServices.map(service => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image Section */}
              <div className="relative h-50 w-full overflow-hidden">
                <Image
                  src={service.imagePath}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 750px) 90vw, (max-width: 1200px) 40vw, 33vw"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-md text-blue-700 font-medium mb-3">{service.hindi}</p>
                <p className="text-gray-600">{service.description}</p>
                
                <Link href={`/services/${service.id}`} passHref>
                  <button className="mt-4 text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* "See More" Button - Only show if there are more than 6 services and not all are shown */}
        {filteredServices.length > 6 && !showAllServices && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllServices(true)}
              className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 border border-blue-200"
            >
              See More Services
            </button>
          </div>
        )}
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Experience advanced urological care with state-of-the-art technology and personalized treatment plans.
          </p>
          <Link href="/bookappointment" passHref>
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Your Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;