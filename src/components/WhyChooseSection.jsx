"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "./CountUp";

const WhyChooseSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const scaleUpVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  // Intersection Observer hooks
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      label: "HAPPY PATIENTS",
      count: 10000,
       scount: 9950,
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      label: "YRS OF EXPERIENCE",
      count: 15,
      scount: 0,
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      label: "SUCCESSFUL SURGERIES",
      count: 10000,
      scount: 9950,
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      label: "WINNING AWARDS",
      count: 10,
       scount: 0,
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
  ];

  const benefits = [
    {
      title: "Advanced Urological Care",
      description:
        "Utilizing the latest techniques and technologies in urology for optimal patient outcomes.",
    },
    {
      title: "Personalized Treatment Plans",
      description:
        "Every patient receives an individualized approach based on their specific condition and needs.",
    },
    {
      title: "Minimally Invasive Procedures",
      description:
        "Specialized in laparoscopic and endoscopic surgeries to minimize recovery time and discomfort.",
    },
    {
      title: "Comprehensive Diagnostic Services",
      description:
        "State-of-the-art diagnostic tools to accurately identify and address urological conditions.",
    },
    {
      title: "Compassionate Patient Care",
      description:
        "A supportive, understanding approach that puts patients at ease during sensitive consultations.",
    },
    {
      title: "Continuous Medical Education",
      description:
        "Regularly updated with the latest advancements in urological medicine and surgical techniques.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-3"
            variants={itemVariants}
          >
            Why Choose Dr. Vishnu Agrawal as the Best Urologist in Ajmer?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Dr. Vishnu Agrawal combines years of expertise, cutting-edge
            techniques, and compassionate care to provide the best urological
            treatment in Ajmer.
          </motion.p>
        </motion.div>

        {/* Stats Showcase */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mb-16"
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                when: "beforeChildren",
              },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center transform hover:-translate-y-1 transition-all duration-300"
              variants={scaleUpVariants}
              whilehover={{ scale: 1.05 }}
            >
              <motion.div
                className="inline-flex h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4 items-center justify-center"
                whilehover={{ rotate: 10, scale: 1.1 }}
              >
                {stat.icon}
              </motion.div>
              <motion.h3
                className="text-4xl font-bold text-blue-800 mb-2"
                whilehover={{ scale: 1.05 }}
              >
                <CountUp
                  from={stat.scount}
                  to={stat.count}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />{"+"}
              </motion.h3>
              <p className="text-sm text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Doctor Image and Benefits */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12"
          ref={contentRef}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Left Side - Doctor Image */}
          <motion.div className="w-full lg:w-2/5" variants={itemVariants}>
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-lg"
              whilehover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/drvishnu1.png"
                  alt="Dr. Vishnu Agrawal consulting with patient"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-1">
                    Dr. Vishnu Agrawal
                  </h3>
                  <p className="text-blue-100">
                    {" "}
                    M.B.B.S.,M.S., M.Ch. Urologist{" "}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Benefits */}
          <motion.div className="w-full lg:w-3/5" variants={itemVariants}>
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Expert Care You Can Trust
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    when: "beforeChildren",
                  },
                },
              }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={itemVariants}
                  whilehover={{ y: -5 }}
                >
                  <motion.div
                    className="flex-shrink-0 mt-1"
                    whilehover={{ scale: 1.2 }}
                  >
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </motion.div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      {benefit.title}
                    </h4>
                    <p className="mt-1 text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Patient Testimonial */}
            {/* <motion.div
              className="mt-8 bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whilehover={{ scale: 1.02 }}
            >
               <div className="flex items-start">
              //   <motion.svg
              //     className="h-8 w-8 text-blue-400 mr-3"
              //     animate={{
              //       rotate: [0, 5, -5, 0],
              //       scale: [1, 1.1, 1.1, 1],
              //     }}
              //     transition={{
              //       duration: 2,
              //       repeat: Infinity,
              //       repeatDelay: 5,
              //     }}
              //     fill="currentColor"
              //     viewBox="0 0 24 24"
              //   >
              //     <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              //   </motion.svg>
              //   <div>
              //     <p className="text-gray-700 italic">
              //       "Dr. Agrawal's expertise and compassionate care changed my
              //       life. After years of suffering with urological issues, his
              //       advanced treatment approach provided relief I never thought
              //       possible."
              //     </p>
              //     <p className="mt-2 font-medium text-gray-900">
              //       — Rahul Sharma, Patient
              //     </p>
              //   </div>
               </div> 
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
