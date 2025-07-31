"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  }),
};

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <motion.div
      ref={ref}
      className="border-l-4 border-blue-500 rounded-2xl mb-4 p-2 py-6"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index * 0.1}
    >
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none group"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <motion.span
          className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition duration-200"
          whileHover={{ x: 4 }}
        >
          {question}
        </motion.span>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            color: isOpen ? "#3b82f6" : "#1e3a8a",
          }}
          transition={{ duration: 0.3 }}
          className="ml-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={isOpen ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { delay: 0.1, duration: 0.3 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                opacity: { duration: 0.1 },
                height: { delay: 0.1, duration: 0.2 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const faqData = [
    {
      question: "What urological conditions does Dr. Vishnu Agrawal treat?",
      answer:
        "Kidney stones, prostate issues, UTIs, infertility, erectile dysfunction, bladder cancer, and more — all treated with advanced methods.",
    },
    {
      question: "What makes Dr. Vishnu Agrawal the best urologist in Ajmer?",
      answer:
        "15+ years of expertise, minimally invasive surgeries, state-of-the-art tech, and exceptional patient care.",
    },
    {
      question: "What are the clinic hours for consultation?",
      answer:
        "Clinic hours are Mon–Sat, 4:00 PM – 7:00 PM. Emergency services are 24/7. Book early to avoid wait time.",
    },
    {
      question: "What advanced treatments are available for kidney stones?",
      answer:
        "Laser lithotripsy, PCNL, RIRS, ESWL — chosen based on size, location, and overall condition.",
    },
    {
      question: "How can I prepare for my first consultation?",
      answer:
        "Bring past reports, medications, insurance info. Full bladder if advised. No fasting unless told otherwise.",
    },
    {
      question: "What safety protocols are followed at the clinic?",
      answer:
        "Strict sterilization, vaccinated staff, disposable tools, and clean-room procedures are followed.",
    },
    {
      question: "Do you provide emergency urology services?",
      answer:
        "Absolutely. 24/7 emergency care is available for acute urological conditions — just call the helpline.",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <img
              src="/images/faq.png"
              alt="FAQ Icon"
              className="h-24 w-auto object-contain"
            />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
              Frequently Asked Questions
            </span>
          </h2>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            Get clarity on common concerns. Still curious? Reach out — we got your back.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="rounded-2xl   shadow-md p-6 md:p-8 divide-y divide-blue-100">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.8}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Can’t find your question? Let’s talk.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
