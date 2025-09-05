import React from "react";
import
  {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaPhoneAlt,
  } from "react-icons/fa";

export default function Footer()
{
  return (
    <footer className="bg-[#b97a57] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Logo & Description */}
        <div>
          <img
            src="https://via.placeholder.com/120x60" // Replace with your logo
            alt="La Dermis Clinic"
            className="mb-4"
          />
          <p className="text-sm leading-relaxed">
            At La Dermis Clinic, we combine expert dermatological care with
            cutting-edge technology to deliver safe, personalized, and effective
            treatments. Led by Dr. Meenal Makkar, our focus is on holistic skin,
            hair, and aesthetic solutions with long–term results and continuous
            support.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <div className="flex items-center space-x-3">
            <div className="bg-white text-[#b97a57] p-2 rounded-lg">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-sm">For more information</p>
              <p className="text-sm">+91 8829900141</p>
            </div>
          </div>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
          <p className="text-sm mb-2">
            <span className="font-medium">Location</span>
            <br />
            First Floor, 70/66, Madhyam Marg, Near Mansarovar Plaza, Above
            Accord showroom, Mansarovar Jaipur
          </p>
          <p className="text-sm">
            <span className="font-medium">Email</span>
            <br />
            ladermisclinic@gmail.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Blog</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/30 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <p className="text-sm text-center md:text-left">
          Copyright © 2025 All Rights Reserved.
        </p>

        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <p className="text-sm">Follow Us On Social</p>
          <div className="flex space-x-3">
            <a href="#" className="bg-white text-[#b97a57] p-2 rounded">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white text-[#b97a57] p-2 rounded">
              <FaInstagram />
            </a>
            <a href="#" className="bg-white text-[#b97a57] p-2 rounded">
              <FaTwitter />
            </a>
            <a href="#" className="bg-white text-[#b97a57] p-2 rounded">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
