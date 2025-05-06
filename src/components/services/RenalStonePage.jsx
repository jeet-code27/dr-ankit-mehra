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
  CheckCircle
} from 'lucide-react';

const RenalStonePage = () => {
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
                Advanced Treatment Available
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6"
            >
              Renal Stone Treatment
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8"
            >
              Pain-free, minimally invasive solutions for kidney stones with Dr. Vishnu Agrawal
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
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4">Modern Kidney Stone Solutions</h2>
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
              Effective stone removal without major surgery using advanced techniques
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
                <Clock className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">Same Day Discharge</h3>
              <p className="text-sm md:text-base text-gray-600">
                Most procedures allow you to go home within hours
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <ShieldCheck className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">No Large Incisions</h3>
              <p className="text-sm md:text-base text-gray-600">
                Stones removed through natural passages or tiny 1cm cuts
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <BadgeCheck className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">98% Success Rate</h3>
              <p className="text-sm md:text-base text-gray-600">
                Dr. Agrawal has successfully treated over 1000 stone cases
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About the Procedure Section - Mobile Optimized */}
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
              <img 
                src="/images/diseases/renal-stone.jpeg" 
                alt="Renal Stone Procedures" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">Our Kidney Stone Treatments</h2>
              
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                We offer the full range of modern stone treatments tailored to your specific condition:
              </p>
              
              <ul className="space-y-3 md:space-y-4">
                {[
                  "URS (Ureteroscopy) - Small scope to remove stones without cuts",
                  "RIRS (Retrograde Surgery) - For difficult kidney stones",
                  "PCNL - For large stones (>2cm) with just 1cm cut",
                  "ESWL - Sound waves to break stones from outside"
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
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Why Choose Our Stone Treatments?</h2>
            <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto">
              Benefits of our minimally invasive approach
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
                <Zap className="mr-2 md:mr-3" size={20} />
                For Difficult Cases
              </h3>
              <p className="text-sm md:text-base text-blue-100 mb-3 md:mb-4">
                We successfully treat challenging cases:
              </p>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Large stones (>2cm)",
                  "Stones in difficult locations",
                  "Patients who failed other treatments",
                  "Children with stones"
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
                <HeartPulse className="mr-2 md:mr-3" size={20} />
                Faster Recovery
              </h3>
              <p className="text-sm md:text-base text-blue-100 mb-3 md:mb-4">
                Compared to traditional surgery:
              </p>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Return to work in 2-3 days (vs 2-3 weeks)",
                  "Less pain after procedure",
                  "Lower infection risk",
                  "Minimal blood loss"
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
              Your journey to being stone-free
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
                  title: "Diagnosis",
                  description: "CT scan and urine tests to locate stones",
                  icon: <Stethoscope size={18} />
                },
                {
                  title: "Treatment Plan",
                  description: "Personalized approach based on stone size/location",
                  icon: <CheckCircle size={18} />
                },
                {
                  title: "Procedure Day",
                  description: "Quick procedure (30-90 mins) with anesthesia",
                  icon: <HeartPulse size={18} />
                },
                {
                  title: "Recovery",
                  description: "Rest for few hours before going home",
                  icon: <Clock size={18} />
                },
                {
                  title: "Follow-up",
                  description: "Stone analysis and prevention advice",
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
                name: "Rajesh K.",
                age: 45,
                quote: "Had 15mm stone removed without any cuts. Went home same day with minimal discomfort."
              },
              {
                name: "Sunil P.",
                age: 52,
                quote: "PCNL for my large stone was done with just 1cm cut. Back to work in 4 days."
              },
              {
                name: "Mohan S.",
                age: 38,
                quote: "URS treatment fixed my problem in just 1 hour procedure. No pain afterwards."
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
                question: "How do I know if I have kidney stones?",
                answer: "Severe pain in back/side, blood in urine, frequent urination, and nausea are common signs. We confirm with ultrasound or CT scan."
              },
              {
                question: "Is the procedure painful?",
                answer: "No, all procedures are done under anesthesia. You may have mild discomfort afterwards managed with medicines."
              },
              {
                question: "Can stones come back after treatment?",
                answer: "Yes, but we provide detailed prevention plans including diet changes and medicines to reduce recurrence risk by 70-80%."
              },
             
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

export default RenalStonePage;