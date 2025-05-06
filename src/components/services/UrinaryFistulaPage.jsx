'use client';

import { motion } from 'framer-motion';
import { 
  Medal, 
  BadgeCheck, 
  ShieldCheck, 
  Clock, 
  Zap, 
  HeartPulse, 
  Stethoscope, 
  ArrowRight, 
  Phone, 
  Calendar,
  CheckCircle,
  Droplet,
  AlertCircle,
  Activity,
  Bell,
  Scale
} from 'lucide-react';
import Image from 'next/image';

const UrinaryFistulaPage = () => {
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
      {/* Top Image Section - Mobile Optimized */}
      <div className="relative h-[400px] md:h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600">
          {/* Abstract Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-700 opacity-20"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-blue-500 opacity-10"></div>
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
                Advanced Surgical Solutions
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6"
            >
              Urinary Fistula Treatment
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8"
            >
              Expert surgical correction for UVF and VVF conditions
            </motion.p>
            
            <motion.div 
  variants={fadeIn}
  className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-6 md:mt-8"
>
  {/* Call Now Button */}
  <a href="tel:+918240970287">
    <button className="bg-white text-blue-900 font-bold cursor-pointer px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center text-base md:text-lg">
      <Phone className="mr-2" size={18} /> Call Now
    </button>
  </a>

  {/* Book Appointment Button */}
  <a href="/bookconsultation">
    <button className="bg-blue-500 hover:bg-blue-400 cursor-pointer font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all flex items-center justify-center text-base md:text-lg">
      <Calendar className="mr-2" size={18} /> Book Appointment
    </button>
  </a>
</motion.div>
          </motion.div>
        </div>
      </div>

      {/* Introduction Section - Mobile Optimized */}
      <div className="bg-blue-50 py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4">Urinary Fistula Repair</h2>
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
              Specialized surgical treatment for vesicovaginal (VVF) and urethrovaginal (UVF) fistulas
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Scale className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">Minimally Invasive</h3>
              <p className="text-sm md:text-base text-gray-600">
                Laparoscopic and robotic surgical options available
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <ShieldCheck className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">High Success Rate</h3>
              <p className="text-sm md:text-base text-gray-600">
                85-95% success rate for first-time repairs
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <BadgeCheck className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">Experienced Surgeons</h3>
              <p className="text-sm md:text-base text-gray-600">
                Specialists in complex fistula reconstruction
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About the Treatment Section - Mobile Optimized */}
      <div className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center"
          >
            <div className="lg:w-1/2">
              <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/diseases/urinary-fistula.jpg" 
                  alt="Urinary Fistula Treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">Understanding Urinary Fistulas</h2>
              
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                We provide comprehensive surgical solutions for abnormal connections between urinary tract and other organs:
              </p>
              
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Vesicovaginal fistula (VVF) - bladder to vagina",
                  "Urethrovaginal fistula (UVF) - urethra to vagina",
                  "Rectovaginal fistula - rectum to vagina",
                  "Complex obstetric fistulas",
                  "Post-surgical or radiation-induced fistulas"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section - Mobile Optimized */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Why Choose Our Fistula Treatments?</h2>
            <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto">
              Benefits of our specialized surgical approach
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
          >
            <div className="rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
                <Activity className="mr-2 md:mr-3" size={20} />
                Advanced Techniques
              </h3>
              <p className="text-sm md:text-base text-blue-100 mb-3 md:mb-4">
                We employ the most effective surgical methods:
              </p>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Laparoscopic fistula repair",
                  "Robotic-assisted surgery",
                  "Tissue interposition techniques",
                  "Flap reconstruction for complex cases"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
                <Bell className="mr-2 md:mr-3" size={20} />
                Comprehensive Care
              </h3>
              <p className="text-sm md:text-base text-blue-100 mb-3 md:mb-4">
                Our holistic approach includes:
              </p>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Preoperative optimization",
                  "Psychological support",
                  "Postoperative bladder training",
                  "Long-term follow-up care"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simple Timeline - Mobile Optimized */}
      <div className="py-12 md:py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 md:mb-6">Treatment Process</h2>
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
              Your journey to fistula repair and recovery
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 md:w-1 bg-blue-200 h-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-12">
              {[
                {
                  title: "Diagnostic Evaluation",
                  description: "Cystoscopy, imaging, and dye tests to locate fistula",
                  icon: <Stethoscope size={18} />
                },
                {
                  title: "Preoperative Planning",
                  description: "Medical optimization and surgical approach selection",
                  icon: <CheckCircle size={18} />
                },
                {
                  title: "Surgical Repair",
                  description: "Precise closure of fistula with tissue layers",
                  icon: <Scale size={18} />
                },
                {
                  title: "Postoperative Care",
                  description: "Catheter management and wound healing",
                  icon: <HeartPulse size={18} />
                },
                {
                  title: "Recovery Monitoring",
                  description: "Follow-up to ensure complete healing",
                  icon: <BadgeCheck size={18} />
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-10 md:pl-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto md:text-right'} bg-white p-4 md:p-6 rounded-lg shadow`}>
                    <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-1 md:mb-2">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Patient Stories - Mobile Optimized */}
      <div className="py-12 md:py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 md:mb-6">Patient Experiences</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
          >
            {[
              {
                name: "Meena K.",
                age: 38,
                quote: "After years of suffering from VVF, the laparoscopic surgery completely healed my condition."
              },
              {
                name: "Rajeshwari P.",
                age: 42,
                quote: "The robotic surgery repaired my complex fistula in one procedure - no more leakage."
              },
              {
                name: "Sunita M.",
                age: 45,
                quote: "The team's expertise gave me back my dignity after obstetric fistula complications."
              }
            ].map((patient, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-md">
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-blue-600">
                    {patient.name.charAt(0)}
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 text-center italic">"{patient.quote}"</p>
                <div className="text-center">
                  <h4 className="font-bold text-blue-900">{patient.name}</h4>
                  <p className="text-xs md:text-sm text-gray-500">{patient.age} years old</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* FAQ Section - Mobile Optimized */}
      <div className="py-12 md:py-20 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 md:mb-6">Common Questions</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            {[
              {
                question: "What causes urinary fistulas?",
                answer: "Common causes include prolonged childbirth (obstetric fistulas), pelvic surgery, radiation therapy, trauma, or infections."
              },
              {
                question: "Is fistula surgery painful?",
                answer: "We use minimally invasive techniques with small incisions, resulting in less pain and faster recovery than traditional open surgery."
              },
              {
                question: "How long is recovery after surgery?",
                answer: "Most patients need 2-4 weeks for initial recovery, with complete healing taking 2-3 months. A catheter is typically needed for 2-3 weeks post-op."
              },
              {
                question: "Can fistulas recur after surgery?",
                answer: "When properly repaired by experienced surgeons, recurrence rates are low (5-10%). We take special measures to prevent recurrence."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-md">
                <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2 md:mb-3">{faq.question}</h3>
                <p className="text-sm md:text-base text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UrinaryFistulaPage;