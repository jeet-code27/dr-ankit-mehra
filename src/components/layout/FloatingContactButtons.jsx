import React from 'react';

const FloatingContactButtons = () => {
  return (
    <div className="fixed top-1/3 right-0 flex  flex-col z-50">
      <a
        href="https://wa.me/+918240970287"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-11 h-12 rounded-tl-lg bg-[#18e60a]   shadow-md  hover:opacity-90 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="https://img.icons8.com/ios-filled/24/ffffff/whatsapp.png"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
      <a
        href="tel:+918240970287"
        className="flex items-center justify-center w-11 h-12 bg-[#1a5aee] rounded-bl-lg  shadow-md  hover:opacity-90 transition-all"
        aria-label="Call us"
      >
        <img
          src="https://img.icons8.com/ios-filled/24/ffffff/phone.png"
          alt="Phone"
          className="w-6 h-6"
        />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
