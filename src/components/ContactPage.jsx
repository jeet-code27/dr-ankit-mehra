"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PatientReviews from './PatientReviews';
import AppointmentForm from './AppointmentForm'

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your appointment request! We will contact you shortly to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      reason: ''
    });
  };

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
                  Welcome to Dr. Ankit Mehra's Dermatology Clinic in Ajmer
                </h1>
                <motion.p 
                  className="text-xl text-black mb-6"
                  variants={itemVariants}
                >
                  Where expertise, innovation, and compassionate care unite to offer comprehensive solutions for all your skin and hair needs.
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
                  <span className="text-lg font-medium text-black"><a href="tel:+919697041111" >+91 96970 41111</a></span>
                </motion.div>
                <motion.div className='flex lg:justify-start justify-center' variants={itemVariants}>
                  <Link href="/bookconsultation">
                    <button className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-1 transition duration-300">
                      Book Consultation
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div 
                className="md:w-1/2 flex items-center justify-center p-6"
                variants={slideInFromRight}
              >
                <div className="rounded-3xl bg-[#C3E1F2] overflow-hidden">
                  <div className="relative w-full" style={{ maxHeight: '500px' }}>
                    <Image
                      src="/images/home/dr-ankit-mehra.jpeg" // Replace with actual image path
                      alt="Dr. Ankit Mehra"
                      width={650}
                      height={650}
                      priority
                      className="w-full h-auto max-h-[300px]"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Specializations Section */}
        <AnimatedSection variants={containerVariants}>
          <motion.div 
            className="bg-white rounded-xl shadow-xl overflow-hidden mb-12"
            variants={scaleUpVariants}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-transparent bg-clip-text text-center">
                Our Specializations
              </h2>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4"
                variants={containerVariants}
              >
                {['Acne Treatment', 'Anti-Aging', 'Hair Loss', 'Skin Cancer', 'Laser Therapy'].map((spec, index) => (
                  <motion.div 
                    key={index}
                    className="bg-blue-50 p-4 rounded-lg flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                  >
                    
                    <div className="font-medium text-blue-900">{spec}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* About Dr. Ankit Mehra */}
        <AnimatedSection variants={containerVariants}>
          <motion.div 
            className="bg-white rounded-xl shadow-xl overflow-hidden mb-12"
            variants={scaleUpVariants}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-transparent bg-clip-text">
                Best Dermatologist in Ajmer
              </h2>
              <motion.p 
                className=" text-gray-600 mb-4"
                variants={itemVariants}
              >
                Dr. Ankit Mehra, MD Skin & VD, is widely regarded as the Best Dermatologist in Ajmer, offering exceptional care for skin, hair, and cosmetic concerns. His clinic is a one-stop destination for anyone seeking advanced and personalized treatments, including solutions for chronic skin conditions, anti-aging needs, and sexual health issues.
              </motion.p>
              <motion.p 
                className="text-gray-600"
                variants={itemVariants}
              >
                Having conducted over 8,000 consultations and performed more than 500 laser and skin treatments, Dr. Mehra is a trusted expert who combines clinical precision with a personalized approach to patient care.
              </motion.p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Specialized Services */}
        <AnimatedSection variants={containerVariants}>
          <motion.div 
            className="bg-white rounded-xl shadow-xl overflow-hidden mb-12"
            variants={scaleUpVariants}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-transparent bg-clip-text">
                Our Specialized Services
              </h2>
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
              >
                {[
                  {
                    title: "Skin Rejuvenation",
                    description: "Dr. Mehra provides innovative skin rejuvenation treatments, such as chemical peels and laser therapy, to address fine lines, wrinkles, and dull skin."
                  },
                  {
                    title: "Treatment for Pigmentation",
                    description: "For concerns like melasma, freckles, or dark spots, Dr. Mehra offers cutting-edge pigmentation therapies designed to enhance your complexion."
                  },
                  {
                    title: "Scar Reduction and Acne Treatment",
                    description: "Whether it's acne scars or other types of marks, Dr. Mehra employs advanced techniques such as microneedling and laser treatments to improve skin texture."
                  },
                  {
                    title: "Cosmetic Dermatology",
                    description: "Dr. Mehra is also recognized as the Best Cosmetologist in Ajmer, offering a wide range of non-surgical aesthetic treatments like lip fillers, PRP therapy, and skin lightening solutions."
                  },
                  {
                    title: "Hair Loss and Sexual Health Treatments",
                    description: "Dr. Mehra provides proven treatments for hair thinning and loss, such as PRP therapy and mesotherapy. Additionally, his expertise in venereal diseases ensures confidential and effective care."
                  }
                ].map((service, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col md:flex-row items-start"
                    variants={itemVariants}
                  >
                    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 p-2 rounded-full mb-4 md:mb-0 md:mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold  text-gray-800">{service.title}</h3>
                      <p className="text-gray-600 text-justify mt-1">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
        <PatientReviews/>

        {/* Map Section */}
        <AnimatedSection variants={containerVariants}>
          <motion.div 
            className="bg-[#EFF5FE] rounded-xl shadow-xl overflow-hidden mb-12"
            variants={scaleUpVariants}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-transparent bg-clip-text text-center">
                Find Us
              </h2>
              <motion.div 
                className="w-full h-80 rounded-lg overflow-hidden shadow-md"
                variants={fadeInVariants}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1501.6345985601388!2d74.63457247447309!3d26.471548361953225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7ec6b89ce17%3A0x9014bae9b1d9ff78!2zRHIgQW5raXQgTWVocmEoTUQgU2tpbiAmIFZEKSDgpJrgpLDgpY3gpK7gpLDgpYvgpJcs4KSv4KWM4KSo4KSw4KWL4KSXIOCkj-CkteCkgiDgpLjgpYzgpKjgpY3gpKbgpLDgpY3gpK_gpLDgpYvgpJcg4KS14KS_4KS24KWH4KS34KSc4KWN4KSeKFNlbmlvciBTa2luIFNwZWNpYWxpc3QgRGVybWF0b2xvZ2lzdCAmIENvc21ldG9sb2dpc3Qp!5e0!3m2!1sen!2sus!4v1756189343393!5m2!1sen!2sus" 
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Ankit Mehra Dermatology Clinic Location"
                ></iframe>
              </motion.div>
              <motion.div 
                className="mt-6 text-center"
                variants={itemVariants}
              >
                <p className="text-gray-600">
                  <span className="font-semibold">Address:</span> Dermatology Clinic, Ajmer, Rajasthan 305001
                </p>
                <p className="text-gray-600 mt-2">
                  <span className="font-semibold">Phone:</span> <a href="tel:+919697041111" className="text-blue-600 hover:underline">+91 96970 41111</a>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Contact Form Section */}
         <AppointmentForm/>

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
                    className="flex flex-col items-center text-center md:items-start md:text-left"
                    variants={itemVariants}
                  >
                    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 p-3 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600 mt-1">Dermatology Clinic</p>
                      <p className="text-gray-600">Ajmer, Rajasthan</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col items-center text-center md:items-start md:text-left"
                    variants={itemVariants}
                  >
                    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 p-3 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600 mt-1"><a href="tel:+919697041111">+91 96970 41111</a></p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col items-center text-center md:items-start md:text-left"
                    variants={itemVariants}
                  >
                    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 p-3 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                      <a
                        href="https://mail.google.com/mail/?view=cm&to=ankit456.mehra@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      > 
                        <p className="text-gray-600 mt-1">ankit456.mehra@gmail.com</p>
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col items-center text-center md:items-start md:text-left"
                    variants={itemVariants}
                  >
                    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 p-3 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Consultation Hours</h3>
                      <p className="text-gray-600 mt-1">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Why Choose Dr. Ankit Mehra */}
            <motion.div 
              className="bg-white rounded-xl shadow-xl overflow-hidden"
              variants={slideInFromRight}
            >
              <div className="bg-white px-6 py-4 border-b">
                <h2 className="text-2xl font-bold bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-transparent bg-clip-text">Why Choose Dr. Ankit Mehra?</h2>
              </div>
              <motion.div 
                className="p-6"
                variants={containerVariants}
              >
                <motion.div className="space-y-6">
                  {[
                    {
                      title: "Specialized Expertise",
                      description: "MD in Skin & VD specialist ensuring accurate diagnosis and effective treatment"
                    },
                    {
                      title: "Advanced Technology",
                      description: "Utilizing cutting-edge technology and equipment for superior results"
                    },
                    {
                      title: "Personalized Treatment",
                      description: "Customized treatment plans tailored to individual patient needs"
                    },
                    {
                      title: "Excellent Reputation",
                      description: "Recognized as the best dermatologist with outstanding patient reviews"
                    }
                  ].map((reason, index) => (
                    <motion.div 
                      key={index}
                      className="flex flex-col items-center text-center md:items-start md:text-left"
                      variants={itemVariants}
                    >
                      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 p-2 rounded-full mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{reason.title}</h3>
                        <p className="text-gray-600 mt-1">{reason.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="mt-8 text-center"
                  variants={itemVariants}
                >
                  <Link href="/bookconsultation">
                    <button className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-1 transition duration-300">
                      Book an Consultation
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Expert Care Team */}
        <AnimatedSection variants={containerVariants}>
          <motion.div 
            className="bg-white rounded-xl shadow-xl overflow-hidden my-12"
            variants={scaleUpVariants}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-transparent bg-clip-text text-center">
                Our Expert Care Team
              </h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={containerVariants}
              >
                {[
                  {
                    name: "Dr. Apurva Mehra",
                    qualifications: "MBBS, MD (Neuropsychiatry)",
                    experience: "3+3 Years Residency Experience",
                    position: "Former Resident at JLN Medical College, Ajmer",
                    url:"/images/home/apurva-mehra.jpeg"
                  },
                  {
                    name: "Dr. Ashok Meherda",
                    qualifications: "MD, Skin & VD",
                    experience: "Senior Professor & Head",
                    position: "Department of Skin, JLN Medical College, Ajmer",
                     url:"/images/home/ashok-meherda.jpeg"
                  },
                  {
                    name: "Dr. Kanti Meherda",
                    qualifications: "MS Gynecology",
                    experience: "Senior Professor & Unit Head",
                    position: "Janana Hospital, Ajmer",
                     url:"/images/home/kanti-meherda.jpeg"
                  }
                ].map((doctor, index) => (
                  <motion.div 
                    key={index}
                    className="bg-blue-50 rounded-lg p-6 text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                  >
                     
                      <span className="text-white text-xl font-bold">
                         <Image
                      src={`${doctor.url}`} 
                      alt="Dr. Ankit Mehra"
                      width={650}
                      height={650}
                      priority
                      className="w-full h-auto max-h-[250px] rounded"
                    />
                      </span>
                     
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{doctor.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{doctor.qualifications}</p>
                    <p className="text-sm text-gray-600 mb-1">{doctor.experience}</p>
                    <p className="text-sm text-gray-600">{doctor.position}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      </main>
    </div>
  );
};

export default ContactPage;