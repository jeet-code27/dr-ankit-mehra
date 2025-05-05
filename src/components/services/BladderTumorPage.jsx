'use client';

import { motion } from 'framer-motion';
import { 
  Medal, 
  BadgeCheck, 
  ShieldCheck, 
  Clock,
  CheckCircle,
  HeartPulse, 
  Stethoscope, 
  Cross,
  Activity,
  AlertTriangle,
  Droplet,
  UserCheck,
  Microscope
} from 'lucide-react';

const BladderTumorPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600">
          {/* Abstract Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-700 opacity-20"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-teal-500 opacity-10"></div>
            <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-blue-500 opacity-10"></div>
          </div>
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl px-4"
          >
            <motion.div variants={fadeIn} className="mb-4 md:mb-6">
              <span className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-blue-600 text-white text-sm md:text-base font-medium">
                <Medal className="mr-1 md:mr-2" size={14} />
                Advanced Oncology Care
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
            >
              Bladder Tumor Treatment
            </motion.h1>
            
            <motion.h2
              variants={fadeIn}
              className="text-2xl md:text-4xl font-bold mb-4 md:mb-6"
            >
              मूत्राशय के ट्यूमर का इलाज
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto"
            >
              Comprehensive diagnosis and treatment for bladder tumors and cancer
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Disease Information Section */}
      <div className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center"
          >
            <div className="lg:w-1/2">
              <img 
                src="/images/diseases/bladder-tumor.webp" 
                alt="Bladder Tumor Illustration" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">Understanding Bladder Tumors</h2>
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 md:mb-6">मूत्राशय ट्यूमर की समझ</h3>
              
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                Bladder tumors are abnormal growths in the bladder lining that can be benign or malignant. Early detection is crucial for effective treatment and better outcomes.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                <h4 className="font-bold text-blue-800 mb-2">Warning Signs:</h4>
                <ul className="space-y-2">
                  {[
                    "Blood in urine (hematuria)",
                    "Painful urination",
                    "Frequent urination",
                    "Lower back pain",
                    "Pelvic discomfort"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-teal-800 mb-2">Risk Factors:</h4>
                <ul className="space-y-2">
                  {[
                    "Smoking (primary risk factor)",
                    "Chemical exposure (dyes, rubber, paint)",
                    "Chronic bladder infections",
                    "Family history of bladder cancer",
                    "Previous cancer treatments"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle className="text-teal-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

     
      {/* Treatment Options Section */}
      <div className="py-12 md:py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4">Treatment Options</h2>
            <h3 className="text-xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-4">उपचार के विकल्प</h3>
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
              Advanced therapies tailored to tumor type and stage
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                title: "TURBT",
                hindi: "टीयूआरबीटी",
                description: "Transurethral resection of bladder tumor - minimally invasive removal of tumors through the urethra",
                icon: <Activity className="text-blue-600" size={24} />,
                features: [
                  "First-line treatment for non-muscle invasive tumors",
                  "Performed under anesthesia",
                  "Preserves the bladder",
                  "Outpatient procedure"
                ]
              },
              {
                title: "Immunotherapy",
                hindi: "इम्यूनोथेरेपी",
                description: "BCG therapy to stimulate immune response against cancer cells",
                icon: <ShieldCheck className="text-blue-600" size={24} />,
                features: [
                  "For high-risk non-invasive tumors",
                  "Reduces recurrence risk",
                  "Administered directly into bladder",
                  "Weekly treatments for 6 weeks"
                ]
              },
              {
                title: "Cystectomy",
                hindi: "सिस्टेक्टोमी",
                description: "Partial or complete bladder removal for invasive cancers",
                icon: <Stethoscope className="text-blue-600" size={24} />,
                features: [
                  "For muscle-invasive tumors",
                  "May include urinary diversion",
                  "Robotic-assisted options available",
                  "Comprehensive rehabilitation"
                ]
              }
            ].map((treatment, index) => (
              <div key={index} className="bg-white border border-blue-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    {treatment.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">{treatment.title}</h3>
                    <h4 className="text-lg font-medium text-blue-800">{treatment.hindi}</h4>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{treatment.description}</p>
                <ul className="space-y-2">
                  {treatment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Diagnosis Section */}
      <div className="py-12 md:py-20 bg-blue-50 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4">Advanced Diagnosis</h2>
            <h3 className="text-xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-4">उन्नत निदान</h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Cystoscopy",
                description: "Direct visualization of bladder with a thin scope",
                icon: <Microscope className="text-blue-600" size={20} />
              },
              {
                title: "Urine Cytology",
                description: "Microscopic examination of urine for cancer cells",
                icon: <Droplet className="text-blue-600" size={20} />
              },
              {
                title: "Imaging",
                description: "CT urogram, MRI or ultrasound for tumor mapping",
                icon: <Activity className="text-blue-600" size={20} />
              },
              {
                title: "Biopsy",
                description: "Tissue sample analysis for definitive diagnosis",
                icon: <Cross className="text-blue-600" size={20} />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Prevention and Follow-up */}
      <div className="py-12 md:py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900 to-teal-700 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Aftercare & Monitoring</h2>
                <h3 className="text-xl md:text-2xl font-bold mb-6">उपचार के बाद की देखभाल</h3>
                
                <ul className="space-y-4">
                  {[
                    "Regular cystoscopy exams (every 3-6 months initially)",
                    "Urine tests to detect recurrence",
                    "Imaging studies as needed",
                    "Lifestyle modifications to reduce risk",
                    "Support for managing side effects"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-teal-300 mr-2 mt-0.5 flex-shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="md:w-1/2 bg-white p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Prevention Tips</h2>
                <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-6">रोकथाम के उपाय</h3>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "No Smoking",
                      description: "Single most important prevention measure",
                      icon: <Cross className="text-teal-600" size={18} />
                    },
                    {
                      title: "Hydration",
                      description: "Drink plenty of fluids daily",
                      icon: <Droplet className="text-teal-600" size={18} />
                    },
                    {
                      title: "Diet",
                      description: "Eat fruits and vegetables rich in antioxidants",
                      icon: <HeartPulse className="text-teal-600" size={18} />
                    },
                    {
                      title: "Workplace Safety",
                      description: "Proper protection from chemical exposure",
                      icon: <ShieldCheck className="text-teal-600" size={18} />
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-teal-100 p-2 rounded-lg mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BladderTumorPage;