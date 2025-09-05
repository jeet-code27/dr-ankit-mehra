import React from "react";
import { FaRegHeart, FaStarOfDavid } from "react-icons/fa";

export default function WhyChooseSection()
{
  return (
    <section className="bg-[#FFF9F9] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <p className="text-[#B77A5D] font-medium mb-2">• Why Choose Us</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#B77A5D] mb-6"
            style={{ fontFamily: "Butler, Georgia, serif" }}
          >
            Why choose us
          </h2>

          {/* Highlights */}
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Advanced Technology & Treatments
              </h3>
              <p>
                We bring you the latest FDA-approved lasers, tools, and
                techniques to ensure safe, effective, and evidence-based
                results.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                One-Stop Skin & Aesthetic Destination
              </h3>
              <p>
                From acne to anti-aging, laser to hair removal — all your
                dermatology and cosmetic needs under one roof.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-10 space-y-8">
            {/* Card 1 */}
            <div className="flex items-start gap-4 border-t pt-6">
              <div className="bg-[#FDF1EC] p-4 rounded-xl">
                <FaRegHeart className="text-2xl text-[#B77A5D]" />
              </div>
              <div>
                <h4 className="text-[#B77A5D] font-semibold text-lg mb-1">
                  Personalized, compassionate care
                </h4>
                <p className="text-gray-600">
                  We believe that every patient is unique. That's why we take
                  the time to understand your specific needs and tailor
                  treatment plans.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 border-t pt-6">
              <div className="bg-[#FDF1EC] p-4 rounded-xl">
                <FaStarOfDavid className="text-2xl text-[#B77A5D]" />
              </div>
              <div>
                <h4 className="text-[#B77A5D] font-semibold text-lg mb-1">
                  Comprehensive care for all skin needs
                </h4>
                <p className="text-gray-600">
                  Whether you're seeking medical dermatology, cosmetic
                  treatments, or preventive care, we offer a comprehensive range
                  of services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/why-choose-us.jpg" // replace with your image path
            alt="Doctor"
            className="rounded-3xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
