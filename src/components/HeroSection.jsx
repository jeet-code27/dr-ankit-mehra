'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, Calendar, MapPin, Award } from 'lucide-react';

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      image: '/images/home/woman-beauty-clinic-face-treatment-scaled.jpg',
    },
    {
      id: 2,
      image: '/images/home/doctor-performing-laser-hair-removal-patient-skin-scaled.jpg',
    },
    {
      id: 3,
      image: '/images/home/person-dealing-with-rosacea-scaled.jpg',
    },
    {
      id: 4,
      image: '/images/home/head-leaning.jpeg',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const slideInterval = 5000;
  const timerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    updateWidth();
    checkScreenSize();
    
    window.addEventListener('resize', updateWidth);
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', updateWidth);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    stopAutoSlide();
    if (containerWidth > 0 && !isHovered) {
      startAutoSlide();
    }
    return () => stopAutoSlide();
  }, [containerWidth, slides.length, isHovered]);

  const startAutoSlide = () => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideInterval);
  };

  const stopAutoSlide = () => {
    clearInterval(timerRef.current);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const sliderStyle = {
    transform: `translateX(-${currentSlide * containerWidth}px)`,
    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    width: `${slides.length * containerWidth}px`,
    height: '100%',
  };

  const slideStyle = {
    flexShrink: 0,
    width: containerWidth ? `${containerWidth}px` : '100%',
    height: '100%',
    position: 'relative',
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-teal-800"
      aria-label="Hero Section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {containerWidth > 0 && (
        <div style={sliderStyle}>
          {slides.map((slide) => (
            <div key={slide.id} style={slideStyle}>
              <div className="relative w-full h-full">
                {/* Background Image */}
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    zIndex: 0,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Navigation Buttons */}
      {/* Large screens: center vertically */}
      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      </button>
      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      </button>

      {/* Small screens: buttons at bottom */}
      <div className="flex sm:hidden absolute inset-x-0 bottom-6 justify-between px-6 z-20">
        <button
          onClick={handlePrev}
          className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>
        <button
          onClick={handleNext}
          className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  );
}