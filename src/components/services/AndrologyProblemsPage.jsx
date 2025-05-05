'use client';

import { motion } from 'framer-motion';
import {
  TestTube2,
  Activity,
  CheckCircle,
  AlertCircle,
  HeartPulse,
  Leaf,
  Shield,
  Thermometer,
  Droplet,
  Microscope,
  Dna,
  Syringe
} from 'lucide-react';

const AndrologyProblemsPage = () => {
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
      {/* Hero Section with Floating Elements */}
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
                <TestTube2 className="mr-2" size={16} />
                Specialized Male Health Care
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Andrology Care
            </motion.h1>
            
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold text-blue-200 mb-8"
            >
              एंड्रोलॉजी देखभाल
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto"
            >
              Comprehensive solutions for male reproductive and hormonal health
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Disease Overview with Tabs */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Andrology Health Solutions</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">एंड्रोलॉजी स्वास्थ्य समाधान</h3>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Image Panel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl h-full">
                <img 
                  src="/images/diseases/andrology.jpg" 
                  alt="Andrology Consultation" 
                  className="w-full h-full object-fit"
                />
                <div className="absolute  via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900">Personalized Andrology Care</h4>
                    <p className="text-sm text-gray-700">Tailored treatment plans for optimal results</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-blue-50 rounded-2xl p-6 h-full">
              

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-blue-900 text-xl mb-3 flex items-center">
                      <TestTube2 className="mr-2 text-blue-600" size={20} />
                      Common Andrology Conditions
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Erectile dysfunction",
                        "Premature ejaculation",
                        "Low testosterone",
                        "Male infertility",
                        "Peyronie's disease",
                        "Testicular disorders",
                        "Prostate health issues",
                        "Sexual dysfunction"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center bg-white p-3 rounded-lg">
                          <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-900 text-xl mb-3 flex items-center">
                      <AlertCircle className="mr-2 text-blue-600" size={20} />
                      When to Seek Help
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Persistent sexual performance concerns",
                        "Testicular pain or abnormalities",
                        "Changes in urinary patterns",
                        "Low libido or energy levels",
                        "Difficulty conceiving after 1 year"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start bg-white/80 p-3 rounded-lg">
                          <div className="bg-blue-100 p-1 rounded-full mr-3">
                            <AlertCircle className="text-blue-600" size={14} />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Diagnostic Approach */}
      <div className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Diagnostic Approach</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">हमारा नैदानिक दृष्टिकोण</h3>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Droplet className="text-blue-600" size={24} />,
                title: "Hormone Testing",
                description: "Comprehensive testosterone and other hormone level analysis"
              },
              {
                icon: <Microscope className="text-blue-600" size={24} />,
                title: "Semen Analysis",
                description: "Detailed evaluation of sperm count, motility, and morphology"
              },
              {
                icon: <Dna className="text-blue-600" size={24} />,
                title: "Genetic Screening",
                description: "Identification of potential genetic factors affecting fertility"
              },
              {
                icon: <Activity className="text-blue-600" size={24} />,
                title: "Physical Exam",
                description: "Thorough examination of reproductive organs and systems"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Treatment & Prevention */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Treatment Options */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-900 rounded-2xl p-8 text-white shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Syringe className="mr-3 text-teal-300" size={24} />
                Treatment Options
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Hormone Therapy",
                    description: "Customized testosterone replacement and balancing treatments",
                    icon: <Activity className="text-teal-300" size={18} />
                  },
                  {
                    title: "Medications",
                    description: "FDA-approved drugs for erectile dysfunction and other conditions",
                    icon: <HeartPulse className="text-teal-300" size={18} />
                  },
                  {
                    title: "Lifestyle Programs",
                    description: "Diet, exercise and stress management for hormonal health",
                    icon: <Leaf className="text-teal-300" size={18} />
                  },
                  {
                    title: "Surgical Options",
                    description: "Minimally invasive procedures for specific conditions",
                    icon: <Syringe className="text-teal-300" size={18} />
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start border-b border-blue-800/30 pb-5 last:border-0 last:pb-0">
                    <div className="bg-teal-500/20 p-2 rounded-lg mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-teal-200 mb-1">{item.title}</h4>
                      <p className="text-blue-100">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Prevention */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-blue-100 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <Shield className="mr-3 text-blue-600" size={24} />
                Prevention Strategies
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Regular Exercise",
                    description: "Maintain cardiovascular health and natural testosterone levels",
                    icon: <Activity className="text-blue-600" size={18} />
                  },
                  {
                    title: "Balanced Nutrition",
                    description: "Zinc-rich foods, antioxidants, and healthy fats for hormonal balance",
                    icon: <Leaf className="text-blue-600" size={18} />
                  },
                  {
                    title: "Stress Reduction",
                    description: "Chronic stress management to prevent hormonal imbalances",
                    icon: <HeartPulse className="text-blue-600" size={18} />
                  },
                  {
                    title: "Avoid Toxins",
                    description: "Limit exposure to endocrine disruptors in plastics and environment",
                    icon: <Thermometer className="text-blue-600" size={18} />
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start border-b border-blue-50 pb-5 last:border-0 last:pb-0">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">{item.title}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
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

export default AndrologyProblemsPage;