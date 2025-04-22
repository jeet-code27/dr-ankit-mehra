'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-medium text-gray-800">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-teal-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-6 pb-4 text-gray-600 text-lg">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
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
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 ">
      <div className="text-center mb-16">
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/images/faq.png" 
            alt="Dr. Vishnu Agrawal Urology Clinic" 
            className="h-32 w-auto object-contain"
          />
        </motion.div>

        <motion.h2 
          className="text-5xl md:text-5xl font-bold text-xl md:text-2xl lg:text-4xl font-semibold bg-gradient-to-r from-blue-500 to-blue-300 inline-block text-transparent bg-clip-text leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
         Your health questions matter <br className="hidden sm:block" />
          <span className="text-xl md:text-3xl lg:text-4xl font-semibold text-black">- find answers here or contact us directly</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          If you have specific concerns about your urological health that aren't addressed here, please don't hesitate to contact our clinic directly.
        </motion.p>
      </div>

      <motion.div 
        className="divide-y divide-gray-200 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {faqData.map((item, index) => (
          <FAQItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
          />
        ))}
      </motion.div>
    </div>
  );
};

export default FAQSection;