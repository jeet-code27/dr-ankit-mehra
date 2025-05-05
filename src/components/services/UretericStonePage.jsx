'use client';

import { motion } from 'framer-motion';
import { 
  Medal, 
  BadgeCheck, 
  ShieldCheck, 
  CheckCircle,
  Clock, 
  HeartPulse, 
  Stethoscope, 
  Cross,
  Activity,
  AlertTriangle,
  Droplet
} from 'lucide-react';

const UretericStonePage = () => {
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
      {/* Top Image Section - blue/Gradient Theme */}
      <div className="relative h-[400px] md:h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600">
          {/* Abstract Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-700 opacity-20"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-indigo-500 opacity-10"></div>
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
                Specialized Treatment
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
            >
              Ureteric Stone Treatment
            </motion.h1>
            
            <motion.h2
              variants={fadeIn}
              className="text-2xl md:text-4xl font-bold mb-4 md:mb-6"
            >
              यूरेटेरिक स्टोन का इलाज
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto"
            >
              Expert care for stones blocking the ureter (kidney to bladder passage)
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
                src="/images/diseases/ureteral-stones.webp" 
                alt="Ureteric Stone Anatomy" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">About Ureteric Stones</h2>
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 md:mb-6">यूरेटेरिक स्टोन के बारे में</h3>
              
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                Ureteric stones are mineral deposits that get stuck in the ureter - the tube connecting your kidney to bladder. These stones cause severe pain and can lead to kidney damage if not treated.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                <h4 className="font-bold text-blue-800 mb-2">Common Symptoms:</h4>
                <ul className="space-y-2">
                  {[
                    "Severe flank pain radiating to groin (renal colic)",
                    "Blood in urine (hematuria)",
                    "Painful urination",
                    "Nausea and vomiting",
                    "Frequent urination"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
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
      <div className="py-12 md:py-20 bg-blue-50 px-4">
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
              Modern minimally invasive techniques for ureteric stones
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Droplet className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-900">Medical Expulsion Therapy</h3>
              </div>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                For small stones (&lt;5mm), we use medicines to:
              </p>
              <ul className="space-y-2 pl-2">
                {[
                  "Relieve pain and spasms",
                  "Help the stone pass naturally",
                  "Reduce inflammation",
                  "Prevent infection"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Activity className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-900">Ureteroscopy (URS)</h3>
              </div>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                For larger stones, we use a thin scope to:
              </p>
              <ul className="space-y-2 pl-2">
                {[
                  "Visualize the stone directly",
                  "Break stones with laser",
                  "Remove fragments",
                  "Place stent if needed"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Redesigned Treatment Process - Vertical Cards */}
      <div className="py-12 md:py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 md:mb-6">Treatment Journey</h2>
            <h3 className="text-xl md:text-3xl font-bold text-blue-800 mb-4 md:mb-6">उपचार प्रक्रिया</h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            {[
              {
                step: "1",
                title: "Diagnosis & Imaging",
                hindi: "निदान और इमेजिंग",
                description: "CT scan or ultrasound to locate stone size and position",
                icon: <Activity className="text-blue-600" size={20} />
              },
              {
                step: "2",
                title: "Treatment Planning",
                hindi: "उपचार योजना",
                description: "Personalized approach based on stone characteristics",
                icon: <CheckCircle className="text-blue-600" size={20} />
              },
              {
                step: "3",
                title: "Procedure",
                hindi: "प्रक्रिया",
                description: "URS performed under anesthesia (30-60 minutes)",
                icon: <Stethoscope className="text-blue-600" size={20} />
              },
              {
                step: "4",
                title: "Recovery",
                hindi: "वसूली",
                description: "Observation for few hours before discharge",
                icon: <HeartPulse className="text-blue-600" size={20} />
              },
              {
                step: "5",
                title: "Follow-up",
                hindi: "अनुवर्ती",
                description: "Stone analysis and prevention counseling",
                icon: <ShieldCheck className="text-blue-600" size={20} />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-blue-100 rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold mr-4 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      {item.icon}
                      <h3 className="text-lg md:text-xl font-bold text-blue-900 ml-2">{item.title}</h3>
                    </div>
                    <h4 className="text-md md:text-lg font-medium text-blue-800 mb-2">{item.hindi}</h4>
                    <p className="text-sm md:text-base text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Prevention Section */}
      <div className="py-12 md:py-20 bg-blue-50 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/3 bg-blue-600 p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Prevention</h2>
                <h3 className="text-xl md:text-2xl font-bold mb-6">पथरी की रोकथाम</h3>
                <p className="text-blue-100">
                  After treatment, we provide personalized guidance to prevent stone recurrence.
                </p>
              </div>
              <div className="md:w-2/3 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Hydration",
                      description: "Drink 2.5-3L water daily to dilute urine",
                      icon: <Droplet className="text-blue-600" size={20} />
                    },
                    {
                      title: "Diet Modifications",
                      description: "Reduce salt, animal protein based on stone type",
                      icon: <Cross className="text-blue-600" size={20} />
                    },
                    {
                      title: "Medications",
                      description: "Preventive drugs for specific stone types",
                      icon: <BadgeCheck className="text-blue-600" size={20} />
                    },
                    {
                      title: "Monitoring",
                      description: "Regular urine tests and follow-ups",
                      icon: <Clock className="text-blue-600" size={20} />
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
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

export default UretericStonePage;