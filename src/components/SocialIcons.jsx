import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";

export default function SocialIcons()
{
    return (
        <div className="flex items-center justify-center    ">
            <ul className="flex  gap-5">
                {/* Facebook */}
                <li>
                    <a
                        href="#"
                        className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full border-4 border-white overflow-hidden group"
                    >
                        <FaFacebookF className="text-[#262626] text-3xl z-10 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:text-white" />
                        <span className="absolute top-full left-0 w-full h-full bg-[#3b5999] transition-all duration-500 group-hover:top-0 z-0"></span>
                    </a>
                </li>

                {/* Twitter */}
                <li>
                    <a
                        href="#"
                        className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full border-4 border-white overflow-hidden group"
                    >
                        <FaTwitter className="text-[#262626] text-3xl z-10 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:text-white" />
                        <span className="absolute top-full left-0 w-full h-full bg-[#55acee] transition-all duration-500 group-hover:top-0 z-0"></span>
                    </a>
                </li>

                {/* LinkedIn */}
                <li>
                    <a
                        href="#"
                        className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full border-4 border-white overflow-hidden group"
                    >
                        <FaLinkedinIn className="text-[#262626] text-3xl z-10 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:text-white" />
                        <span className="absolute top-full left-0 w-full h-full bg-[#0077b5] transition-all duration-500 group-hover:top-0 z-0"></span>
                    </a>
                </li>

                {/* Google Plus */}
                <li>
                    <a
                        href="#"
                        className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full border-4 border-white overflow-hidden group"
                    >
                        <FaGooglePlusG className="text-[#262626] text-3xl z-10 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:text-white" />
                        <span className="absolute top-full left-0 w-full h-full bg-[#dd4b39] transition-all duration-500 group-hover:top-0 z-0"></span>
                    </a>
                </li>
            </ul>
        </div>
    );
}
