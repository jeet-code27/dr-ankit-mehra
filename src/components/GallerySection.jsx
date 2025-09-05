"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery data
  const galleryItems = [
    {
      id: 1,
      src: "closeup-young-woman-with-towel-head-pimples-face-scaled.jpg",
      alt: "Skin Care Awareness",
      title: "Skin Care Awareness",
      description: "Discover the importance of daily skin care for a healthy, glowing complexion."
    },
    {
      id: 2,
      src: "young-beautiful-girl-lies-beautician-s-table-receives-procedures-scaled-qwlpr8v570ly32hd4hh19tk1zi61z4x4ivqz277fwg.jpg",
      alt: "Hydra Facial Therapy",
      title: "Hydra Facial Therapy",
      description: "A deep cleansing treatment that hydrates and rejuvenates the skin."
    },
    {
      id: 3,
      src: "side-view-woman-getting-prp-treatment-scaled-qwlrxs9o8o4g64eeifmtm02kuj254oppzm3imir800.jpg",
      alt: "PRP Skin Treatment",
      title: "PRP Skin Treatment",
      description: "Advanced skin rejuvenation using platelet-rich plasma for natural healing."
    },
    {
      id: 4,
      src: "woman-looking-her-rosacea-mirror-scaled-qwqso8zftqzdmtebbw0i549f6hiwfkxd7meex3k1fk.jpg",
      alt: "Acne & Skin Concerns",
      title: "Acne & Skin Concerns",
      description: "Personalized solutions to address acne, scars, and sensitive skin issues."
    },
    {
      id: 5,
      src: "view-doctor-cosmetologist-doing-anti-aging-procedure-cosmetology-office-satisfied-woman.jpg",
      alt: "Laser Skin Therapy",
      title: "Laser Skin Therapy",
      description: "Cutting-edge laser treatment for pigmentation, fine lines, and skin renewal."
    },
    {
      id: 6,
      src: "portrait-beautiful-woman-preparation-rejuvenation-cosmetology-operation-beauty-salon-view-from-doctor-s-hands-blue-gloves-drawing-face-botox-beauty.jpg",
      alt: "Facial Contouring Injection",
      title: "Facial Contouring Injection",
      description: "Non-surgical procedure to enhance facial features and restore youthful appearance."
    },
      {
      id: 7,
      src: "woman-getting-hair-loss-treatment-clinic-1.jpg",
      alt: "Hair PRP Treatment",
      title: "Hair PRP Treatment",
      description: "Advanced platelet-rich plasma therapy to strengthen hair roots and promote regrowth."
    },
    {
      id: 8,
      src: "woman-beauty-clinic-face-treatment-scaled.jpg",
      alt: "Radiofrequency Facial",
      title: "Radiofrequency Facial",
      description: "Skin tightening treatment that boosts collagen for a firmer, youthful look."
    }
    ,
     {
      id: 9,
      src: "head-leaning.jpeg",
      alt: "Mesotherapy Skin Rejuvenation",
      title: "Mesotherapy Skin Rejuvenation",
      description: "Micro-injections of vitamins and nutrients to refresh and brighten dull skin."
    },
    {
      id: 10,
      src: "person-dealing-with-rosacea-scaled.jpg",
      alt: "Acne & Scar Treatment",
      title: "Acne & Scar Treatment",
      description: "Specialized care to reduce acne scars, pigmentation, and improve skin texture."
    }
  ];

  // Open lightbox and set current index
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Navigate to previous image
  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  // Navigate to next image
  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

  return (
    <>
      <div className='bg-[#FFF9F9]'>
        <section className="max-w-7xl   mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block mb-4">
              Our Gallery
              <span className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-[#B9826C] to-[#B9826C] rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Explore our collection of stunning images showcasing our work, events, and special moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryItems.map((item, index) => (
              <div 
                className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group" 
                key={item.id}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={`/images/home/${item.src}`}
                  alt={item.alt}
                  layout="responsive"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#B9826C]/80 to-transparent text-white p-4 pt-2 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="m-0 mb-1 text-xl">{item.title}</h3>
                  <p className="m-0 text-sm opacity-80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
            <span className="absolute top-5 right-8 text-white text-4xl font-bold cursor-pointer transition-colors duration-300 z-[1001] hover:text-red-500" onClick={closeLightbox}>&times;</span>
            <button className="absolute top-1/2 left-8 -translate-y-1/2 bg-white/20 text-white border-0 text-3xl w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 z-[1001] hover:bg-white/40 hover:scale-110" onClick={goToPrev}>&#10094;</button>
            <Image
              className="max-w-[90%] max-h-[80vh] object-contain rounded-lg shadow-2xl animate-zoomIn"
              src={`/images/home/${galleryItems[currentIndex].src}`}
              alt={galleryItems[currentIndex].alt}
              layout="fill"
              objectFit="contain"
             
             
            />
            <button className="absolute top-1/2 right-8 -translate-y-1/2 bg-white/20 text-white border-0 text-3xl w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 z-[1001] hover:bg-white/40 hover:scale-110" onClick={goToNext}>&#10095;</button>
            <div className="absolute bottom-8 left-0 right-0 text-center text-white text-xl px-5">
              <strong>{galleryItems[currentIndex].title}</strong>
              <br />
              {galleryItems[currentIndex].description}
            </div>
          </div>
        )}
      </div>

      {/* Custom animation for lightbox - using regular style tag instead of styled-jsx */}
      <style>{`
        @keyframes zoomIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-zoomIn {
          animation: zoomIn 0.4s ease;
        }
      `}</style>
    </>
  );
};

export default GallerySection;