'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutCoreValues = () => {
  // Set up intersection observers for different sections
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mobileImageRef, mobileImageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Individual refs for each value section
  const [resultsRef, resultsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [excellenceRef, excellenceInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [improvementRef, improvementInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [integrityRef, integrityInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white font-sans">
      <motion.h2 
        ref={titleRef}
        initial={{ opacity: 0, y: 10 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
      >
        Our core values
      </motion.h2>
      
      <motion.p 
        ref={introRef}
        initial={{ opacity: 0, y: 20 }}
        animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-700 mb-12 max-w-3xl text-justify"
      >
        At our urology center, led by Dr. Vishnu Agrawal, we're committed to providing advanced, compassionate care that puts patients first. Our values guide every aspect of our practice, ensuring you receive the <b>best urological care in Ajmer.</b>
      </motion.p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
        {/* Left Side - Image and Values */}
        <motion.div 
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block lg:mt-16"
        >
          <div className="relative rounded-4xl overflow-hidden w-full h-full">
            <Image 
              src="/images/urology-consultation.webp" 
              alt="Dr. Vishnu Agrawal consulting with patient" 
              width={500} 
              height={600}
              className="w-full h-[60%] rounded-lg object-cover"
              priority
            />
          </div>
        </motion.div>
        
        {/* Right Side - Values Content */}
        <div className="flex flex-col gap-10">
          {/* Results for our Patients */}
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, x: 20 }}
            animate={resultsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">Patient Outcomes</h2>
              <ul className="space-y-2 w-full md:w-2/3 text-gray-700">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We focus on measurable results that improve quality of life</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We track treatment progress to ensure optimal recovery</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We believe in making a lasting difference in our patients' health</p>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Excellence */}
          <motion.div
            ref={excellenceRef}
            initial={{ opacity: 0, x: 20 }}
            animate={excellenceInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">Excellence</h2>
              <ul className="space-y-2 w-full md:w-2/3 text-gray-700">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We deliver what we promise with the highest standards</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We maintain rigorous protocols for surgical and medical care</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We combine technical precision with compassionate care</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We take pride in our minimally invasive surgical techniques</p>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Continuous Improvement */}
          <motion.div
            ref={improvementRef}
            initial={{ opacity: 0, x: 20 }}
            animate={improvementInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">Innovation</h2>
              <ul className="space-y-2 w-full md:w-2/3 text-gray-700">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We stay at the forefront of urological advancements</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We embrace new technologies that benefit our patients</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We continuously refine our surgical and treatment protocols</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We invest in ongoing training and education</p>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Integrity */}
          <motion.div
            ref={integrityRef}
            initial={{ opacity: 0, x: 20 }}
            animate={integrityInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">Integrity</h2>
              <ul className="space-y-2 w-full md:w-2/3 text-gray-700">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We maintain the highest ethical standards in all treatments</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We provide honest, transparent communication</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We respect patient confidentiality and privacy</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We recommend only treatments that are truly necessary</p>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* One Team */}
          <motion.div
            ref={teamRef}
            initial={{ opacity: 0, x: 20 }}
            animate={teamInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">Comprehensive Care</h2>
              <ul className="space-y-2 w-full md:w-2/3 text-gray-700">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We collaborate across specialties for complete patient care</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We support each other to deliver exceptional service</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We provide continuity of care from diagnosis through recovery</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We empower patients through education and support</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* Mobile Image (only shows on mobile) */}
        <motion.div 
          ref={mobileImageRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={mobileImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="block lg:hidden order-first mb-8"
        >
          <div className="relative rounded-lg overflow-hidden w-full">
            <Image 
              src="/images/urology-consultation.webp" 
              alt="Dr. Vishnu Agrawal consulting with patient" 
              width={500} 
              height={600}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCoreValues;