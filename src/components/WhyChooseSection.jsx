import React from "react";
import { FaRegHeart, FaStarOfDavid } from "react-icons/fa";

export default function WhyChooseSection()
{
  return (
    <section className="bg-[#FFF9F9] py-16 px-0  sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Right Image (shows first on mobile, second on desktop) */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src="/images/all-solutions.png" // replace with real image of Dr. Mehra in /public
            alt="Dr. Ankit Mehra"
            className="rounded-3xl shadow-md"
          />
        </div>

        {/* Left Content */}
        <div className="order-2 md:order-1">
          <p className="text-[#B77A5D] font-medium mb-2">• Why Choose </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#B77A5D] mb-6"
            style={{ fontFamily: "Butler, Georgia, serif" }}
          >
            Dr. Ankit Mehra
          </h2>

          {/* Highlights */}
          <div className="space-y-6  text-gray-700">
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Experienced & Trusted Dermatologist
              </h3>
              <p className="text-justify">
                Dr. Ankit Mehra, MD (Skin & VD), is a former Assistant Professor at
                JLN Medical College, Ajmer, with 12+ years of experience and more
                than 8,000 successful consultations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Complete Skin, Hair & Aesthetic Solutions
              </h3>
              <p className="text-justify">
                From acne, pigmentation, and scars to advanced laser treatments,
                anti-aging, and PRP therapy — all your dermatology and cosmetic needs
                under one roof.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-10 space-y-0   sm:space-y-8">
            {/* Card 1 */}
            <div className="flex flex-col sm:flex-row  items-start gap-4 border-t pt-6">
              <div className="sm:w-fit w-full   flex sm:justify-start justify-center ">
              <div className="bg-[#FDF1EC]    max-w-fit p-4 rounded-xl">
                <FaRegHeart className="text-2xl text-[#B77A5D]" />
              </div>
              </div>
              <div>
                <h4 className="text-[#B77A5D] font-semibold text-lg mb-1">
                  Personalized & Patient-Centered Care
                </h4>
                <p className="text-gray-600 text-justify">
                  Every patient is unique. Dr. Mehra takes time to understand your skin and
                  hair concerns, creating tailored treatment plans for effective results.
                </p>
              </div>
            </div>


            {/* Card 2 */}
            <div className="flex flex-col sm:flex-row items-start gap-4 border-t pt-6">
              <div className="bg-[#FDF1EC] p-4 rounded-xl mx-auto sm:mx-0">
                <FaStarOfDavid className="text-2xl text-[#B77A5D]" />
              </div>
              <div>
                <h4 className="text-[#B77A5D] font-semibold text-lg mb-1 text-center sm:text-left">
                  Advanced Technology & Proven Results
                </h4>
                <p className="text-gray-600 text-justify">
                  Expert in lasers, microneedling, PRP, and the latest cosmetic techniques,
                  Dr. Mehra delivers safe, modern, and evidence-based treatments.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
