import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
  });

  // Validation errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const scaleUpVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  // Format phone number (e.g., 987 654 3210)
  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "").substring(0, 10);
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6)
      return `${cleaned.substring(0, 3)} ${cleaned.substring(3)}`;
    return `${cleaned.substring(0, 3)} ${cleaned.substring(
      3,
      6
    )} ${cleaned.substring(6)}`;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? formatPhoneNumber(value) : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate phone number (Indian format)
  const isValidIndianNumber = (number) => {
    const digits = number.replace(/\D/g, "");
    const regex = /^[6-9]\d{9}$/;
    if (!regex.test(digits)) return false;

    // Check if all digits are the same
    const allSame = /^(\d)\1{9}$/.test(digits);
    return !allSame;
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!isValidIndianNumber(formData.phone)) {
      newErrors.phone = "Please enter a valid Indian phone number";
      valid = false;
    }

    if (!formData.date) {
      newErrors.date = "Please select a date";
      valid = false;
    } else {
      const today = new Date();
      const selected = new Date(formData.date);
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.date = "Date cannot be in the past";
        valid = false;
      }
    }

    if (!formData.time) {
      newErrors.time = "Please select a time";
      valid = false;
    }

    if (!formData.reason) {
      newErrors.reason = "Please select a reason for your visit";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Submit form (Web3Forms)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const form = new FormData();
      form.append("access_key", "0504d518-0bf6-48a6-9f20-9f196dacc29f"); // 🔑 Replace this with your token
      Object.keys(formData).forEach((key) => form.append(key, formData[key]));

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          reason: "",
        });
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-hide success message
  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => setSubmitSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden mb-12"
      variants={scaleUpVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-3 text-center font-serif text-[#BF7F62]">
          Book Your Consultation
        </h2>

        <p className="text-gray-600 text-center font-serif mb-2">
          Personalized treatment plans for all your dermatological needs
        </p>

        <p className="text-sm text-center text-gray-700 font-semibold mb-2">
          🕒 Consultation Timings:
        </p>
        <p className="text-center text-gray-600 text-sm mb-4">
          Monday – Saturday: 11 AM - 2 PM, 5 PM - 7 PM <br />
          Sunday: 11 AM - 2 PM
        </p>
        <p className="text-center text-gray-700 font-semibold mb-8">
          📞 Contact: <a href="tel:+919697041111">+91 96970 41111</a>
        </p>

        <motion.div
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Success Message */}
          <AnimatePresence>
            {submitSuccess && (
              <motion.div
                className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                Your appointment has been successfully booked! You'll receive a
                confirmation email shortly.
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error Message */}
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
              {submitError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                )}
              </motion.div>
            </div>

            {/* Phone & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="987 654 3210"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Must be a valid Indian number starting with 6, 7, 8, or 9
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                    errors.date ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.date && (
                  <p className="text-sm text-red-600 mt-1">{errors.date}</p>
                )}
              </motion.div>
            </div>

            {/* Time & Reason */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                    errors.time ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select a time</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                </select>
                {errors.time && (
                  <p className="text-sm text-red-600 mt-1">{errors.time}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reason for Visit
                </label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                    errors.reason ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select a reason</option>
                  <option value="acne">Acne Treatment</option>
                  <option value="anti-aging">Anti-Aging</option>
                  <option value="hair-loss">Hair Loss</option>
                  <option value="skin-cancer">Skin Cancer</option>
                  <option value="laser-therapy">Laser Therapy</option>
                  <option value="other">Other</option>
                </select>
                {errors.reason && (
                  <p className="text-sm text-red-600 mt-1">{errors.reason}</p>
                )}
              </motion.div>
            </div>

            {/* Submit */}
            <motion.div className="text-center" variants={itemVariants}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#FAF2F0] border border-[#BF7F62] hover:bg-[#BF7F62] hover:text-white font-serif font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
              >
                {isSubmitting ? "Submitting..." : "Book Consultation"}
              </button>
              <p className="text-gray-500 text-sm mt-3">
                After submitting, you will receive a confirmation email.
              </p>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
