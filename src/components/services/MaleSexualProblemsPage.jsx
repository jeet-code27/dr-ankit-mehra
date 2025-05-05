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

const MaleSexualProblemsPage = () => {
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
                <Zap className="mr-2" size={16} />
                Specialized Sexual Health Care
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
                Male Sexual Health
            </motion.h1>
            
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold text-blue-200 mb-8"
            >
             पुरुष यौन स्वास्थ्य
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto"
            >
            Comprehensive, discreet treatment for sexual dysfunction and performance issues.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Disease Overview Section with Image */}
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
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Understanding Male Sexual Problems</h2>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">पुरुष यौन समस्याओं को समझना</h3>
                
                <div className="prose max-w-none text-gray-700">
                  <p className="text-lg">
                    Male sexual dysfunction encompasses various conditions that interfere with sexual desire, performance, or satisfaction. These issues affect men of all ages but become more prevalent with advancing age. Our clinic provides evidence-based treatments tailored to each individual's needs.
                  </p>
                  
                  <h4 className="text-xl font-bold text-blue-900 mt-8">Common Types of Sexual Dysfunction:</h4>
                  <ul className="space-y-2">
                    <li><strong>Erectile Dysfunction (ED):</strong> Difficulty achieving or maintaining an erection sufficient for sexual activity</li>
                    <li><strong>Premature Ejaculation:</strong> Ejaculation that occurs sooner than desired during sexual activity</li>
                    <li><strong>Delayed Ejaculation:</strong> Persistent difficulty or inability to achieve ejaculation</li>
                    <li><strong>Low Libido:</strong> Reduced sexual desire or interest in sexual activity</li>
                    <li><strong>Performance Anxiety:</strong> Psychological distress related to sexual performance</li>
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
                  src="/images/diseases/male-sexual.webp"
                  alt="Doctor discussing male sexual health with patient"
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
                Symptoms and Indicators
              </h3>
              
              <div className="space-y-4">
                {[
                  "Difficulty achieving or maintaining an erection",
                  "Reduced sexual desire or interest",
                  "Premature or delayed ejaculation",
                  "Pain during sexual intercourse",
                  "Anxiety about sexual performance",
                  "Inability to achieve orgasm",
                  "Decreased sexual satisfaction"
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
                Potential Causes
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Physical Causes:</h4>
                  <ul className="space-y-2 pl-5">
                    {[
                      "Cardiovascular disease",
                      "Diabetes and metabolic syndrome",
                      "Hormonal imbalances (low testosterone)",
                      "Neurological disorders",
                      "Medication side effects",
                      "Substance abuse (alcohol, tobacco)"
                    ].map((item, index) => (
                      <li key={index} className="text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Psychological Causes:</h4>
                  <ul className="space-y-2 pl-5">
                    {[
                      "Stress, anxiety or depression",
                      "Relationship problems",
                      "Performance anxiety",
                      "Body image issues",
                      "Past sexual trauma"
                    ].map((item, index) => (
                      <li key={index} className="text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Detailed Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Medical Evaluation Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <User className="text-teal-300" size={20} />,
                  title: "Medical History",
                  content: "Detailed discussion of symptoms, duration, and impact on quality of life"
                },
                {
                  icon: <Droplet className="text-teal-300" size={20} />,
                  title: "Lab Tests",
                  content: "Hormone levels, blood sugar, cholesterol, and other relevant markers"
                },
                {
                  icon: <Microscope className="text-teal-300" size={20} />,
                  title: "Physical Exam",
                  content: "Comprehensive examination including genital and prostate assessment"
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
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Treatment Options</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">उपचार के विकल्प</h3>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <HeartPulse className="text-blue-600" size={24} />,
                title: "Medications",
                hindi: "दवाएं",
                content: "PDE5 inhibitors, testosterone therapy, and other pharmacological solutions",
                features: [
                  "Oral medications for ED",
                  "Topical treatments",
                  "Hormone replacement",
                  "Customized drug regimens"
                ]
              },
              {
                icon: <Clock className="text-blue-600" size={24} />,
                title: "Therapies",
                hindi: "चिकित्सा",
                content: "Non-invasive treatments to improve sexual function",
                features: [
                  "Shockwave therapy",
                  "Vacuum erection devices",
                  "Penile injections",
                  "Topical creams"
                ]
              },
              {
                icon: <Shield className="text-blue-600" size={24} />,
                title: "Lifestyle",
                hindi: "जीवनशैली",
                content: "Natural approaches to enhance sexual health",
                features: [
                  "Exercise programs",
                  "Nutritional counseling",
                  "Stress management",
                  "Sleep optimization"
                ]
              },
              {
                icon: <Battery className="text-blue-600" size={24} />,
                title: "Psychological",
                hindi: "मनोवैज्ञानिक",
                content: "Addressing mental health aspects of sexual dysfunction",
                features: [
                  "Cognitive behavioral therapy",
                  "Sex therapy",
                  "Anxiety management",
                  "Couples counseling"
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
                Prevention Strategies
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Maintain Cardiovascular Health",
                    description: "Regular exercise improves blood flow essential for sexual function"
                  },
                  {
                    title: "Manage Chronic Conditions",
                    description: "Control diabetes, hypertension, and cholesterol levels"
                  },
                  {
                    title: "Limit Alcohol and Tobacco",
                    description: "Substances can impair sexual performance and desire"
                  },
                  {
                    title: "Prioritize Mental Health",
                    description: "Address stress, anxiety, and depression proactively"
                  },
                  {
                    title: "Open Communication",
                    description: "Maintain honest dialogue with partner about sexual needs"
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
                Long-term Management
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Regular Follow-ups",
                    description: "Monitor treatment effectiveness and adjust as needed"
                  },
                  {
                    title: "Combination Therapies",
                    description: "Integrate medical, psychological, and lifestyle approaches"
                  },
                  {
                    title: "Education",
                    description: "Stay informed about new treatments and research"
                  },
                  {
                    title: "Partner Involvement",
                    description: "Include partner in treatment when appropriate"
                  },
                  {
                    title: "Realistic Expectations",
                    description: "Understand that improvement may be gradual"
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

export default MaleSexualProblemsPage;