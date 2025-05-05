'use client';

import { motion } from 'framer-motion';
import {
  Activity,
  AlertCircle,
  CheckCircle,
  HeartPulse,
  Leaf,
  Shield,
  Droplet,
  Zap,
  Clock,
  Battery,
  BarChart2,
  User,
  AlertTriangle,
  LifeBuoy,
  Crosshair
} from 'lucide-react';
import Image from 'next/image';

const UrinaryIncontinencePage = () => {
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
      {/* Hero Section with Water Droplet Theme */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600">
        {/* Water Droplet Animation Background */}
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
                <Droplet className="mr-2" size={16} />
                Bladder Control Specialists
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Urinary Incontinence Treatment
            </motion.h1>
            
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold text-blue-200 mb-8"
            >
              पेशाब पर नियंत्रण ना रहना
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto"
            >
              Regain confidence with our comprehensive bladder control solutions.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Condition Overview Section */}
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
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src="/images/diseases/incontinence.jpg"
                    alt="Doctor discussing incontinence treatment options with patient"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    priority={false}
                  />
                </motion.div>
              </div>

              <div className="order-1 lg:order-2 bg-blue-50 rounded-xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Understanding Urinary Incontinence</h2>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">मूत्र असंयमता को समझना</h3>
                
                <div className="prose max-w-none text-gray-700">
                  <p className="text-lg">
                    Urinary incontinence is the unintentional loss of bladder control that affects millions. Our specialized clinic offers discreet, compassionate care to help you manage this condition effectively.
                  </p>
                  
                  <h4 className="text-xl font-bold text-blue-900 mt-8">Common Types:</h4>
                  <ul className="space-y-2">
                    <li><strong>Stress Incontinence:</strong> Leakage when coughing, sneezing or exercising</li>
                    <li><strong>Urge Incontinence:</strong> Sudden intense urge followed by involuntary leakage</li>
                    <li><strong>Overflow Incontinence:</strong> Frequent dribbling from a full bladder</li>
                    <li><strong>Functional Incontinence:</strong> Physical or mental limitations preventing timely bathroom access</li>
                    <li><strong>Mixed Incontinence:</strong> Combination of stress and urge types</li>
                  </ul>
                </div>
              </div>
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
                <AlertTriangle className="mr-3 text-blue-600" size={24} />
                Warning Signs
              </h3>
              
              <div className="space-y-4">
                {[
                  "Leaking urine during physical activity",
                  "Sudden urges to urinate that are hard to control",
                  "Frequent nighttime urination (nocturia)",
                  "Dribbling urine throughout the day",
                  "Wetting clothes or bedding unintentionally",
                  "Feeling of incomplete bladder emptying",
                  "Discomfort or pain in lower abdomen"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                      <AlertTriangle className="text-blue-600" size={16} />
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
                Contributing Factors
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Physical Causes:</h4>
                  <ul className="space-y-2 pl-5">
                    {[
                      "Pregnancy and childbirth",
                      "Menopause and hormonal changes",
                      "Prostate problems in men",
                      "Neurological disorders",
                      "Urinary tract infections",
                      "Constipation or chronic coughing"
                    ].map((item, index) => (
                      <li key={index} className="text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Lifestyle Factors:</h4>
                  <ul className="space-y-2 pl-5">
                    {[
                      "Obesity or excess weight",
                      "High-impact physical activities",
                      "Smoking and caffeine/alcohol consumption",
                      "Certain medications",
                      "Sedentary lifestyle"
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
            <h3 className="text-2xl font-bold mb-6">Comprehensive Evaluation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <LifeBuoy className="text-teal-300" size={20} />,
                  title: "Medical History",
                  content: "Detailed discussion of symptoms, patterns, and impact on daily life"
                },
                {
                  icon: <Crosshair className="text-teal-300" size={20} />,
                  title: "Physical Exam",
                  content: "Pelvic floor assessment for women, prostate exam for men"
                },
                {
                  icon: <Droplet className="text-teal-300" size={20} />,
                  title: "Specialized Tests",
                  content: "Urinalysis, bladder diary, urodynamic testing, and imaging when needed"
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
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Incontinence Treatment Solutions</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">असंयमता उपचार समाधान</h3>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <HeartPulse className="text-blue-600" size={24} />,
                title: "Behavioral Therapies",
                hindi: "व्यवहारिक चिकित्सा",
                content: "Non-invasive approaches to improve bladder control",
                features: [
                  "Bladder training techniques",
                  "Scheduled toilet trips",
                  "Fluid management",
                  "Double voiding methods"
                ]
              },
              {
                icon: <Shield className="text-blue-600" size={24} />,
                title: "Pelvic Floor Rehab",
                hindi: "पेल्विक फ्लोर पुनर्वास",
                content: "Strengthening the muscles that control urination",
                features: [
                  "Kegel exercises",
                  "Biofeedback therapy",
                  "Electrical stimulation",
                  "Vaginal weight training"
                ]
              },
              {
                icon: <Zap className="text-blue-600" size={24} />,
                title: "Medications",
                hindi: "दवाएं",
                content: "Pharmaceutical options to manage symptoms",
                features: [
                  "Anticholinergic drugs",
                  "Topical estrogen for women",
                  "Alpha blockers for men",
                  "Mirabegron for overactive bladder"
                ]
              },
              {
                icon: <Activity className="text-blue-600" size={24} />,
                title: "Surgical Options",
                hindi: "सर्जिकल विकल्प",
                content: "When other treatments aren't sufficient",
                features: [
                  "Sling procedures",
                  "Bladder neck suspension",
                  "Artificial urinary sphincter",
                  "Nerve stimulators"
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

      {/* Daily Living Section */}
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
                Daily Living Strategies
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Absorbent Products",
                    description: "Pads and protective garments for confidence"
                  },
                  {
                    title: "Skin Care",
                    description: "Preventing irritation from frequent urine exposure"
                  },
                  {
                    title: "Home Modifications",
                    description: "Creating easy access to bathroom facilities"
                  },
                  {
                    title: "Diet Adjustments",
                    description: "Identifying and avoiding bladder irritants"
                  },
                  {
                    title: "Travel Tips",
                    description: "Planning for bathroom access during outings"
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
                Emotional Support
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Counseling",
                    description: "Addressing the psychological impact of incontinence"
                  },
                  {
                    title: "Support Groups",
                    description: "Connecting with others facing similar challenges"
                  },
                  {
                    title: "Partner Education",
                    description: "Helping loved ones understand your condition"
                  },
                  {
                    title: "Stress Reduction",
                    description: "Techniques to manage anxiety about accidents"
                  },
                  {
                    title: "Intimacy Guidance",
                    description: "Maintaining healthy relationships"
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

export default UrinaryIncontinencePage;