'use client';

import { motion } from 'framer-motion';
import {
  Activity,
  AlertCircle,
  CheckCircle,
  HeartPulse,
  Leaf,
  Shield,
  Thermometer,
  Droplet,
  Microscope,
  Zap,
  Clock,
  Battery,
  BarChart2,
  User
} from 'lucide-react';
import Image from 'next/image';

const UrologyDiseasesPage = () => {
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
      <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600">
        {/* Floating Circles */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/5 w-32 h-32 rounded-full bg-blue-700/20 animate-float1"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-teal-500/15 animate-float2"></div>
          <div className="absolute bottom-1/4 right-1/5 w-28 h-28 rounded-full bg-blue-600/25 animate-float3"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/90 text-white text-sm font-medium backdrop-blur-sm">
                <Activity className="mr-2" size={16} />
                Comprehensive Urology Care
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
              All Disease-Related Urology
            </motion.h1>
            
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold text-blue-200 mb-8"
            >
              मूत्र संबंधी सभी रोग
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto"
            >
              Expert diagnosis and treatment for all urological conditions and disorders.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Disease Overview Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-blue-50 rounded-xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Comprehensive Urology Care</h2>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">व्यापक मूत्र रोग विज्ञान देखभाल</h3>
                
                <div className="prose max-w-none text-gray-700">
                  <p className="text-lg">
                    Our urology department provides complete care for all urinary tract and male reproductive system disorders. From common infections to complex surgical cases, we offer advanced diagnostics and personalized treatment plans.
                  </p>
                  
                  <h4 className="text-xl font-bold text-blue-900 mt-8">Conditions We Treat:</h4>
                  <ul className="space-y-2">
                    <li><strong>Urinary Tract Infections (UTIs):</strong> Bacterial infections affecting any part of the urinary system</li>
                    <li><strong>Kidney Stones:</strong> Hard deposits of minerals and salts that form inside your kidneys</li>
                    <li><strong>Prostate Conditions:</strong> Including BPH (enlarged prostate) and prostatitis</li>
                    <li><strong>Bladder Disorders:</strong> Such as overactive bladder and interstitial cystitis</li>
                    <li><strong>Urological Cancers:</strong> Prostate, bladder, kidney, and testicular cancers</li>
                  </ul>
                </div>
              </div>

              {/* Next.js Optimized Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/images/diseases/urology-general.jpg"
                  alt="Urology specialist examining patient"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  priority={false}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Symptoms and Causes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Symptoms Panel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-blue-100 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <AlertCircle className="mr-3 text-blue-600" size={24} />
                Common Urological Symptoms
              </h3>
              
              <div className="space-y-4">
                {[
                  "Pain or burning during urination",
                  "Frequent urination or urgency",
                  "Blood in urine (hematuria)",
                  "Difficulty starting or maintaining urine flow",
                  "Lower abdominal or back pain",
                  "Incontinence or leakage",
                  "Changes in urine color or smell"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                      <AlertCircle className="text-blue-600" size={16} />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Causes Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-blue-100 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <BarChart2 className="mr-3 text-blue-600" size={24} />
                Risk Factors & Causes
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Lifestyle Factors:</h4>
                  <ul className="space-y-2 pl-5">
                    {[
                      "Dehydration and poor fluid intake",
                      "High-sodium diet",
                      "Sedentary lifestyle",
                      "Smoking and alcohol consumption",
                      "Holding urine for long periods"
                    ].map((item, index) => (
                      <li key={index} className="text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Medical Factors:</h4>
                  <ul className="space-y-2 pl-5">
                    {[
                      "Aging (especially for prostate conditions)",
                      "Diabetes and other chronic illnesses",
                      "Family history of urological diseases",
                      "Neurological disorders",
                      "Previous urinary tract infections"
                    ].map((item, index) => (
                      <li key={index} className="text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Diagnostic Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Advanced Diagnostic Approaches</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Microscope className="text-teal-300" size={20} />,
                  title: "Laboratory Tests",
                  content: "Urinalysis, urine culture, PSA tests, and other specialized blood work"
                },
                {
                  icon: <Thermometer className="text-teal-300" size={20} />,
                  title: "Imaging Studies",
                  content: "Ultrasound, CT scans, MRI, and specialized urological imaging"
                },
                {
                  icon: <Droplet className="text-teal-300" size={20} />,
                  title: "Procedures",
                  content: "Cystoscopy, urodynamic testing, and biopsy when needed"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center mb-3">
                    <div className="bg-teal-500/20 p-2 rounded-lg mr-3">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-teal-200">{item.title}</h4>
                  </div>
                  <p className="text-blue-100">{item.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Treatment Options */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Urology Treatment Options</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">मूत्र रोग उपचार के विकल्प</h3>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <HeartPulse className="text-blue-600" size={24} />,
                title: "Medications",
                hindi: "दवाएं",
                content: "Pharmaceutical treatments for infections, BPH, and other conditions",
                features: [
                  "Antibiotics for UTIs",
                  "Alpha-blockers for BPH",
                  "Pain management solutions",
                  "Specialized cancer therapies"
                ]
              },
              {
                icon: <Clock className="text-blue-600" size={24} />,
                title: "Minimally Invasive",
                hindi: "न्यूनतम आक्रामक",
                content: "Advanced procedures with minimal recovery time",
                features: [
                  "Laser stone treatment",
                  "Ureteroscopy",
                  "Shockwave lithotripsy",
                  "Prostate artery embolization"
                ]
              },
              {
                icon: <Shield className="text-blue-600" size={24} />,
                title: "Surgical Options",
                hindi: "सर्जिकल विकल्प",
                content: "When surgery becomes necessary",
                features: [
                  "Robotic-assisted surgery",
                  "Laparoscopic procedures",
                  "Prostatectomy",
                  "Nephrectomy"
                ]
              },
              {
                icon: <Battery className="text-blue-600" size={24} />,
                title: "Lifestyle Management",
                hindi: "जीवनशैली प्रबंधन",
                content: "Supporting treatments with daily habits",
                features: [
                  "Dietary modifications",
                  "Bladder training",
                  "Pelvic floor exercises",
                  "Fluid management"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                    <h4 className="text-lg font-medium text-blue-800">{item.hindi}</h4>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{item.content}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Prevention and Management */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Prevention */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 rounded-2xl p-8 text-white shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Leaf className="mr-3 text-teal-300" size={24} />
                Urological Health Prevention
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Stay Hydrated",
                    description: "Adequate water intake helps flush out your urinary system"
                  },
                  {
                    title: "Practice Good Hygiene",
                    description: "Reduces risk of urinary tract infections"
                  },
                  {
                    title: "Healthy Diet",
                    description: "Limit sodium and oxalate-rich foods to prevent stones"
                  },
                  {
                    title: "Regular Checkups",
                    description: "Especially important for men over 50 for prostate health"
                  },
                  {
                    title: "Don't Delay Urination",
                    description: "Respond promptly to your body's signals"
                  }
                ].map((item, index) => (
                  <div key={index} className="border-b border-blue-800/30 pb-5 last:border-0 last:pb-0">
                    <h4 className="font-bold text-teal-200 mb-2">{item.title}</h4>
                    <p className="text-blue-100">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Management */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-blue-100 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <Shield className="mr-3 text-blue-600" size={24} />
                Living With Urological Conditions
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Follow Treatment Plans",
                    description: "Adherence to medication and therapy is crucial"
                  },
                  {
                    title: "Monitor Symptoms",
                    description: "Keep track of changes to discuss with your doctor"
                  },
                  {
                    title: "Support Groups",
                    description: "Connect with others facing similar challenges"
                  },
                  {
                    title: "Adapt Your Lifestyle",
                    description: "Make necessary adjustments to daily routines"
                  },
                  {
                    title: "Stay Informed",
                    description: "Educate yourself about your condition and treatments"
                  }
                ].map((item, index) => (
                  <div key={index} className="border-b border-blue-50 pb-5 last:border-0 last:pb-0">
                    <h4 className="font-bold text-blue-900 mb-2">{item.title}</h4>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrologyDiseasesPage;