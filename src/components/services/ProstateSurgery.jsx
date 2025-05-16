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

const ProstateSurgeryPage = () => {
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
                Only Available in Ajmer
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6"
            >
              18.5 French Prostate Surgery
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8"
            >
              A simple, quick solution for prostate problems with Dr. Vishnu Agrawal
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
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4">Advanced Prostate Care, Simplified</h2>
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
              Get back to normal life faster with our modern approach to treating enlarged prostate
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
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">Fast Recovery</h3>
              <p className="text-sm md:text-base text-gray-600">
                Go home in 1-2 days instead of 1-2 weeks with older methods
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <ShieldCheck className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">Less Bleeding</h3>
              <p className="text-sm md:text-base text-gray-600">
                Our smaller tools reduce bleeding by 70% compared to standard surgery
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <BadgeCheck className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">98% Success Rate</h3>
              <p className="text-sm md:text-base text-gray-600">
                Dr. Agrawal has helped over 500 patients with this advanced technique
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
                src="/images/diseases/prostate-surgery.png" 
                alt="18.5 French Procedure" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">What is 18.5 French Prostate Surgery?</h2>
              
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                This is a modern technique that uses smaller tools (only 6mm wide) to treat enlarged prostate. The smaller size means less pain and faster healing for you.
              </p>
              
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                Dr. Vishnu Agrawal is the only doctor in Ajmer who offers this advanced treatment.
              </p>
              
              <ul className="space-y-3 md:space-y-4">
                {[
                  "No cuts on your skin - everything is done through natural openings",
                  "Usually takes less than 1 hour",
                  "You can go home the next day",
                  "Return to normal activities within days, not weeks"
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

      {/* NEW SECTION: French 18 Tool Showcase - Mobile Optimized */}
      <div className="py-12 md:py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4">The Revolutionary 18.5 French Tool</h2>
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
              See the advanced technology that makes this procedure so effective
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center"
          >
            <div className="lg:w-2/5">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <img 
                  src="/images/diseases/18french.jpg" 
                  alt="18 French Surgical Tool" 
                  className="w-full rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-2 text-center italic">
                  The 18.5 French surgical instrument - only 6.17mm in diameter
                </p>
              </div>
            </div>
            
            <div className="lg:w-3/5">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">How the 18.5 French Tool Works</h3>
              
              <p className="text-base md:text-lg text-gray-700 mb-4">
                The 18.5 French tool is named after its diameter size - just 6.17mm wide. This innovative instrument allows for minimally invasive prostate surgery with remarkable precision.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-blue-800 mb-2">Size Comparison</h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Traditional tools: 8-12mm<br />
                    Our 18.5 French tool: 6.17mm<br />
                    <span className="font-semibold">40% smaller!</span>
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-blue-800 mb-2">Advanced Technology</h4>
                  <p className="text-sm md:text-base text-gray-600">
                    High-definition camera system<br />
                    Precision cutting elements<br />
                    Specialized irrigation system
                  </p>
                </div>
              </div>
              
              <p className="text-base md:text-lg text-gray-700">
                This smaller tool size is what allows for less bleeding, faster recovery, and reduced complications compared to traditional prostate surgery methods.
              </p>
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
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Why Choose Our 18.5 French Technique?</h2>
            <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto">
              See how our method compares to older prostate treatments
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
          >
            <div className=" rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
                <Zap className="mr-2 md:mr-3" size={20} />
                Better for Older Patients
              </h3>
              <p className="text-sm md:text-base text-blue-100 mb-3 md:mb-4">
                Our technique is gentler, making it safer for:
              </p>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Patients over 65 years old",
                  "People with heart problems",
                  "Diabetic patients",
                  "Those taking blood thinners"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className=" rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
                <HeartPulse className="mr-2 md:mr-3" size={20} />
                Fewer Side Effects
              </h3>
              <p className="text-sm md:text-base text-blue-100 mb-3 md:mb-4">
                Our patients experience:
              </p>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Less pain during recovery",
                  "Lower chance of sexual problems",
                  "Better control of urination after surgery",
                  "Rarely need blood transfusions"
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
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 md:mb-6">What to Expect</h2>
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
              Your journey to better prostate health
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
                  title: "First Visit",
                  description: "Meet with Dr. Agrawal to discuss your symptoms and get checked",
                  icon: <Calendar size={18} />
                },
                {
                  title: "Before Surgery",
                  description: "Simple blood tests and instructions to prepare for your procedure",
                  icon: <Clock size={18} />
                },
                {
                  title: "Surgery Day",
                  description: "Quick 45-60 minute procedure with mild anesthesia",
                  icon: <Stethoscope size={18} />
                },
                {
                  title: "Going Home",
                  description: "Leave hospital next day and start feeling better right away",
                  icon: <HeartPulse size={18} />
                },
                {
                  title: "Follow-up Care",
                  description: "Check in with Dr. Agrawal after 1 week to ensure proper healing",
                  icon: <BadgeCheck size={18} />
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-10 md:pl-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  
                  {/* Content - alternate sides on medium screens and up */}
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
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 md:mb-6">What Our Patients Say</h2>
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
                age: 68,
                quote: "I was worried about surgery at my age, but I went home the next day and felt better quickly."
              },
              {
                name: "Sunil P.",
                age: 72,
                quote: "After years of bathroom problems, I can finally sleep through the night. The recovery was much easier than I expected."
              },
              {
                name: "Mohan S.",
                age: 65,
                quote: "Dr. Agrawal explained everything clearly. The surgery was quick, and I had very little pain afterwards."
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
                question: "Who can get this surgery?",
                answer: "Most men with prostate problems who haven't improved with medicine can get this surgery. Dr. Agrawal will check if it's right for you based on your health and symptoms."
              },
              {
                question: "Is this better than laser surgery?",
                answer: "While laser surgery is also good, our method takes less time, costs less, and gives equally good results with possibly fewer side effects."
              },
              {
                question: "Is there an age limit?",
                answer: "No age limit. We've successfully treated patients from 45 to over 90 years old. What matters is your overall health, not your age."
              },
              {
                question: "How many patients get better?",
                answer: "About 98% of our patients see improvement in their symptoms. 9 out of 10 patients are very happy with their results."
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

export default ProstateSurgeryPage;