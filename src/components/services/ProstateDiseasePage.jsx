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

const ProstateDiseasePage = () => {
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
                Advanced Urology Care
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
            >
              Prostate Disease Treatment
            </motion.h1>
            
            <motion.h2
              variants={fadeIn}
              className="text-2xl md:text-4xl font-bold mb-4 md:mb-6"
            >
              प्रोस्टेट की बीमारी का इलाज
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto"
            >
              Comprehensive care for enlarged prostate and prostate cancer
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
                src="/images/diseases/prostate.avif" 
                alt="Prostate Disease Illustration" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">Understanding Prostate Disease</h2>
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 md:mb-6">प्रोस्टेट रोग की समझ</h3>
              
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                The prostate gland can develop various conditions including benign enlargement (BPH), prostatitis, and prostate cancer. Proper diagnosis is essential for effective management.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                <h4 className="font-bold text-blue-800 mb-2">Common Symptoms:</h4>
                <ul className="space-y-2">
                  {[
                    "Frequent urination, especially at night",
                    "Weak or interrupted urine flow",
                    "Difficulty starting urination",
                    "Pain or burning during urination",
                    "Blood in urine or semen"
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
                    "Age (risk increases after 50)",
                    "Family history of prostate problems",
                    "Obesity and poor diet",
                    "Certain ethnic backgrounds",
                    "Smoking and alcohol consumption"
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
              Personalized treatments based on condition type and severity
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
                title: "Medications",
                hindi: "दवाएं",
                description: "Alpha blockers, 5-alpha reductase inhibitors, and other drugs to manage symptoms",
                icon: <Activity className="text-blue-600" size={24} />,
                features: [
                  "First-line treatment for BPH",
                  "Reduces prostate size and symptoms",
                  "Minimal side effects",
                  "Long-term management option"
                ]
              },
              {
                title: "Minimally Invasive",
                hindi: "न्यूनतम आक्रामक",
                description: "Procedures like TURP, laser therapy, and UroLift for BPH",
                icon: <ShieldCheck className="text-blue-600" size={24} />,
                features: [
                  "Outpatient or short hospital stay",
                  "Quick recovery time",
                  "Preserves sexual function",
                  "Effective symptom relief"
                ]
              },
              {
                title: "Cancer Therapy",
                hindi: "कैंसर चिकित्सा",
                description: "Surgery, radiation, and advanced treatments for prostate cancer",
                icon: <Stethoscope className="text-blue-600" size={24} />,
                features: [
                  "Robotic prostatectomy",
                  "Radiation therapy options",
                  "Hormone therapy",
                  "Active surveillance when appropriate"
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
                title: "PSA Test",
                description: "Blood test measuring prostate-specific antigen levels",
                icon: <Droplet className="text-blue-600" size={20} />
              },
              {
                title: "Digital Exam",
                description: "Physical examination of the prostate gland",
                icon: <UserCheck className="text-blue-600" size={20} />
              },
              {
                title: "MRI Fusion Biopsy",
                description: "Precise targeting of suspicious areas",
                icon: <Microscope className="text-blue-600" size={20} />
              },
              {
                title: "Urine Flow Test",
                description: "Measures strength and pattern of urine flow",
                icon: <Activity className="text-blue-600" size={20} />
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
                    "Regular PSA testing as recommended",
                    "Follow-up digital rectal exams",
                    "Monitoring urinary symptoms",
                    "Managing treatment side effects",
                    "Support for sexual health concerns"
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
                      title: "Healthy Diet",
                      description: "Eat more fruits, vegetables and healthy fats",
                      icon: <HeartPulse className="text-teal-600" size={18} />
                    },
                    {
                      title: "Exercise",
                      description: "Regular physical activity helps prostate health",
                      icon: <Activity className="text-teal-600" size={18} />
                    },
                    {
                      title: "Regular Checkups",
                      description: "Annual exams after age 50 (or earlier if high risk)",
                      icon: <UserCheck className="text-teal-600" size={18} />
                    },
                    {
                      title: "Limit Alcohol",
                      description: "Moderate alcohol consumption",
                      icon: <Cross className="text-teal-600" size={18} />
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

export default ProstateDiseasePage;