"use client";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

export default function TopNavbar() {
  return (
    <nav className="bg-[#B0DDF0] text-[#193CB8] text-sm font-sans hidden md:block">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Left Section */}
          <div className="flex space-x-10">
            {/* Contact Info */}
            <div className="flex items-center space-x-2">
            <BsTelephone className="size-5" />
              <div>
                <div>Contact No.</div>
                <div className="font-semibold text-base">+91 96970 41111</div>
              </div>
            </div>
            
            {/* Address */}
            <div className="flex items-center space-x-2">
            <IoLocationOutline className="size-6" />
              <div>
                <div>62, Lane no 2, opp. Hotel Ambassador, Nagina Bagh,</div>
                <div className="font-semibold text-base"> Muslim Mochi Mohalla, Ajmer, Rajasthan 305001</div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center space-x-2">
            <FaRegClock className="size-5"/>
              <div>
                <div>Working Hours</div>
                <div className="font-semibold text-base">Mon-Sat: 10PM - 5PM</div>
              </div>
            </div>
          </div>

 

          {/* Right Section – Social Icons */}
          <div className="flex space-x-6">
            
            <a href="https://www.facebook.com/drankitmeherda" target="_blank" aria-label="Facebook" className="social-icon">
            <FaFacebookF className="scale-150 text-blue-800"/>
              
            </a>
            <a href="https://www.instagram.com/drankitmehra/" target="_black" aria-label="Instagram" className="social-icon">
             
  <AiFillInstagram className="scale-200 text-pink-600"/>
 

            </a>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .icon {
          display: inline-flex;
          vertical-align: middle;
          margin-right: 0.375rem;
          stroke-width: 2;
          stroke: white;
          fill: none;
          height: 1.25rem;
          width: 1.25rem;
        }
        .social-icon {
          stroke: white;
          height: 1.5rem;
          width: 1.5rem;
          cursor: pointer;
          transition: stroke 0.3s ease;
        }
        .social-icon:hover {
          stroke: #a3bffa;
        }
      `}</style>
    </nav>
  );
}
