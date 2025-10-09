import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const scaleUpVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
    const trimmed = cleaned.substring(0, 10);
    
    if (trimmed.length === 0) {
      return '';
    } else if (trimmed.length <= 5) {
      return trimmed;
    } else {
      return `${trimmed.substring(0, 5)} ${trimmed.substring(5)}`;
    }
  };

  const isValidIndianPhone = (phone) => {
    const digits = phone.replace(/\D/g, '');
    
    // Check if it's exactly 10 digits
    if (digits.length !== 10) return false;
    
    // Check if it starts with 9, 8, 7, or 6
    const firstDigit = digits.charAt(0);
    if (!['9', '8', '7', '6'].includes(firstDigit)) return false;
    
    // Check if all digits are the same (like 0000000000, 1111111111, etc.)
    const allSame = digits.split('').every(digit => digit === digits.charAt(0));
    if (allSame) return false;
    
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const formattedValue = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!isValidIndianPhone(formData.phone)) {
      const digits = formData.phone.replace(/\D/g, '');
      if (digits.length < 10) {
        newErrors.phone = 'Please enter a complete 10-digit phone number';
      } else if (!['9', '8', '7', '6'].includes(digits.charAt(0))) {
        newErrors.phone = 'Phone number must start with 9, 8, 7, or 6';
      } else {
        newErrors.phone = 'Please enter a valid phone number';
      }
      isValid = false;
    }

    // Date validation
    if (!formData.date) {
      newErrors.date = 'Please select a date';
      isValid = false;
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
        isValid = false;
      }
    }

    // Time validation
    if (!formData.time) {
      newErrors.time = 'Please select a time';
      isValid = false;
    }

    // Reason validation
    if (!formData.reason) {
      newErrors.reason = 'Please select a reason for your visit';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Use FormData instead of JSON as required by Web3Forms
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '0504d518-0bf6-48a6-9f20-9f196dacc29f');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('time', formData.time);
      formDataToSend.append('reason', formData.reason);
      formDataToSend.append('subject', 'New Consultation Booking - Dermatology Clinic');
      formDataToSend.append('from_name', 'Dermatology Clinic Website');
      formDataToSend.append('botcheck', ''); // Add botcheck field

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend // Use FormData directly, don't set Content-Type header
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          reason: '',
        });
      } else {
        console.error('Web3Forms Error:', data);
        setSubmitError(data.message || 'An error occurred while submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
        setSubmitError('Network error. Please check your internet connection and try again.');
      } else {
        setSubmitError('An error occurred while submitting your form. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden mb-12 shadow-lg"
      variants={scaleUpVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4 text-[#BF7F62] text-center">
          Book Your Consultation
        </h2>
        <motion.p 
          className="text-gray-600 text-center mb-8"
          variants={itemVariants}
        >
          Personalized treatment plans for all your dermatological needs
        </motion.p>
        
        <motion.div 
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {submitSuccess && (
              <motion.div 
                className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                ✅ Your appointment has been successfully booked! You'll receive a confirmation email shortly.
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {submitError && (
              <motion.div 
                className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                ❌ {submitError}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Add hidden botcheck field */}
            <input type="hidden" name="botcheck" value="" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="98765 43210"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                <p className="mt-1 text-xs text-gray-500">
                  Must start with 9, 8, 7, or 6 | Contact: +91 96970 41111
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                    errors.date ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time *
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                    errors.time ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a time</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="12:30 PM">12:30 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="1:30 PM">1:30 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="5:30 PM">5:30 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="6:30 PM">6:30 PM</option>
                </select>
                {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
                <p className="mt-1 text-xs text-gray-500">
                  Consultation Hours: Mon-Sat: 11am-2pm, 5-7pm | Sun: 11am-2pm
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                  Reason for Visit *
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                    errors.reason ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a reason</option>
                  <option value="acne">Acne Treatment</option>
                  <option value="anti-aging">Anti-Aging</option>
                  <option value="hair-loss">Hair Loss</option>
                  <option value="skin-cancer">Skin Cancer Screening</option>
                  <option value="laser-therapy">Laser Therapy</option>
                  <option value="skin-allergy">Skin Allergy</option>
                  <option value="cosmetic-consultation">Cosmetic Consultation</option>
                  <option value="other">Other</option>
                </select>
                {errors.reason && <p className="mt-1 text-sm text-red-600">{errors.reason}</p>}
              </motion.div>
            </div>
            
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#FAF2F0] border-[#BF7F62] border-2 text-[#BF7F62] hover:text-white hover:bg-[#BF7F62] font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Book Consultation'}
              </button>
              <p className="text-gray-500 text-sm mt-3">
                After submitting your request, you will receive a confirmation email.
              </p>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactForm;