'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="border-b border-gray-200 py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <button 
        className="flex justify-between items-center cursor-pointer w-full text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <motion.span 
          className="text-xl font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200"
          whilehover={{ x: 5 }}
        >
          {question}
        </motion.span>
        <motion.div
          animate={{ 
            rotate: isOpen ? 180 : 0,
            color: isOpen ? '#3b82f6' : '#10b981'
          }}
          transition={{ duration: 0.3 }}
          className="ml-4 flex-shrink-0"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d={isOpen ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: { 
                height: { duration: 0.3 },
                opacity: { duration: 0.2, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { 
                opacity: { duration: 0.1 },
                height: { duration: 0.2, delay: 0.1 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2">
              <motion.p 
                className="text-gray-600 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqData = [
    {
      question: "What urological conditions does Dr. Vishnu Agrawal treat?",
      answer: "Dr. Vishnu Agrawal specializes in treating kidney stones, prostate issues, urinary tract infections, male infertility, erectile dysfunction, bladder cancer, and other urological conditions. He provides both medical and surgical treatments using the latest techniques."
    },
    {
      question: "What makes Dr. Vishnu Agrawal the best urologist in Ajmer?",
      answer: "Dr. Agrawal combines extensive experience (15+ years), advanced training in minimally invasive techniques, state-of-the-art equipment, personalized care, and a high success rate in complex urological surgeries. His patient-centric approach and continuous skill upgradation make him stand out."
    },
    {
      question: "What are the clinic hours for consultation?",
      answer: "Dr. Agrawal's clinic is open Monday to Saturday from 4:00 PM to 7:00 PM. Emergency services are available 24/7. It's recommended to book an appointment in advance to minimize waiting time."
    },
    {
      question: "What advanced treatments are available for kidney stones?",
      answer: "Dr. Agrawal offers laser lithotripsy, PCNL (Percutaneous Nephrolithotomy), RIRS (Retrograde Intrarenal Surgery), and ESWL (Extracorporeal Shock Wave Lithotripsy). The treatment is chosen based on stone size, location, and patient condition for optimal results."
    },
    {
      question: "How can I prepare for my first consultation?",
      answer: "Please bring your medical history, any previous test reports, list of current medications, and insurance information. For prostate or urinary issues, come with a full bladder. Fasting is not required unless specified when booking the appointment."
    },
    {
      question: "What safety protocols are followed at the clinic?",
      answer: "We maintain strict sterilization protocols, use disposable instruments where possible, follow infection control guidelines, and have a dedicated procedure room. All staff are fully vaccinated and follow proper protective measures for patient safety."
    },
    {
      question: "Do you provide emergency urology services?",
      answer: "Yes, Dr. Agrawal provides 24/7 emergency care for acute urinary retention, severe kidney stone pain, testicular torsion, traumatic urological injuries, and other urgent urological conditions. Call our emergency helpline for immediate assistance."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <img 
              src="/images/faq.png" 
              alt="FAQ Icon" 
              className="h-32 w-auto object-contain"
            />
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
              Frequently Asked Questions
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Find answers to common questions about our urology services. Can't find what you're looking for? Contact us directly.
          </motion.p>
        </div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 divide-y divide-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {faqData.map((item, index) => (
            <FAQItem 
              key={index} 
              question={item.question} 
              answer={item.answer}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Still have questions? We're here to help.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            whilehover={{ scale: 1.05 }}
            whiletap={{ scale: 0.95 }}
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;