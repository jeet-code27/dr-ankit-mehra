import React from 'react';

export default  function AboutDoctor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-justify mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Best Dermatologist in Ajmer <br></br> Dr. Ankit Mehra
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Your journey to radiant skin, healthy hair, and advanced laser treatments begins here! Dr. Ankit Mehra is a renowned dermatologist at Ajmer who specializes in offering tailored solutions to all your skin, hair, and cosmetic concerns. Whether you are looking for the Best Skin Care Treatments in Ajmer or advanced cosmetology services, we are committed to enhancing your natural beauty with cutting-edge technology and personalized care.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dr. Ankit Mehra, MD Skin & VD, is widely regarded as the Best Dermatologist in Ajmer, offering exceptional care for skin, hair, and cosmetic concerns. His clinic is a one-stop destination for anyone seeking advanced and personalized treatments, including solutions for chronic skin conditions, anti-aging needs, and sexual health issues. If you're looking for the Best Skin Care Treatment in Ajmer, Dr. Mehra's expertise ensures visible and lasting results tailored to your specific needs.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Specialized Services</h2>
          <div className="space-y-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Skin Rejuvenation</h3>
                  <p className="text-justify text-gray-600">
                    Dr. Mehra provides innovative skin rejuvenation treatments, such as chemical peels and laser therapy, to address fine lines, wrinkles, and dull skin. These treatments are ideal for patients looking for the Best Skin Care Treatment in Ajmer, offering glowing and youthful skin with minimal downtime.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Treatment for Pigmentation</h3>
                  <p className="text-justify text-gray-600">
                    For concerns like melasma, freckles, or dark spots, Dr. Mehra offers cutting-edge pigmentation therapies. His expertise in this field has earned him a reputation for providing the Best Skin Care Treatment in Ajmer, with solutions designed to enhance your complexion.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4 mt-1">
                  <span className="text-red-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Scar Reduction and Acne Treatment</h3>
                  <p className="text-justify text-gray-600">
                    Whether it's acne scars or other types of marks, Dr. Mehra employs advanced techniques such as microneedling and laser treatments to improve skin texture. As the Best Dermatologist in Ajmer, his customized acne solutions address the root cause of breakouts, ensuring long-term relief.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                  <span className="text-green-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Cosmetic Dermatology</h3>
                  <p className="text-justify text-gray-600">
                    Dr. Mehra is also recognized as the Best Cosmetologist in Ajmer, offering a wide range of non-surgical aesthetic treatments like lip fillers, PRP therapy, and skin lightening solutions. These services enhance your natural beauty and boost your confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4 mt-1">
                  <span className="text-yellow-600 font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Hair Loss and Sexual Health Treatments</h3>
                  <p className="text-justify text-gray-600">
                    Dr. Mehra provides proven treatments for hair thinning and loss, such as PRP therapy and mesotherapy. Additionally, his expertise in venereal diseases ensures confidential and effective care for patients seeking solutions for sexual health concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Comprehensive Services Offered by Dr. Ankit Mehra</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skin Treatment Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              {/* Image Space */}
              <div className="h-48 bg-gradient-to-r from-blue-100 to-indigo-100">
  <img src="images/home/portrait-beautiful-woman-preparation-rejuvenation-cosmetology-operation-beauty-salon-view-from-doctor-s-hands-blue-gloves-drawing-face-botox-beauty.jpg" alt="Skin Treatment" className="w-full h-full object-cover" />
</div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Skin Treatment</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Dr. Mehra provides a full spectrum of skin care treatments, addressing conditions such as acne, eczema, psoriasis, pigmentation, and more. Our clinic employs cutting-edge technology and tailored treatment plans to give your skin a healthy, rejuvenated appearance.
                </p>
                 <ul className="text-gray-600 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Comprehensive Skin Care
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced Technology & Tailored Plans
                  </li>
                   <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Expert Dermatological Care
                  </li>
                </ul>
                <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors duration-300">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Hair Treatments Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              {/* Image Space */}
                         <div className="h-48 bg-gradient-to-r from-blue-100 to-indigo-100">
  <img src="images/home/woman-getting-hair-loss-treatment-clinic-1.jpg" alt="Skin Treatment" className="w-full h-full object-cover" />
</div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Hair Treatments</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  At Dr. Ankit Mehra's clinic, we offer advanced and personalized hair treatment solutions tailored to your specific needs. With years of experience in dermatology, Dr. Mehra uses clinically proven techniques and the latest technology to treat hair-related concerns effectively.
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    PRP (Platelet-Rich Plasma) Therapy
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dandruff and Scalp Infections Treatment
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Hair Fall Control Treatments
                  </li>
                </ul>
                <button className="text-purple-600 font-semibold flex items-center hover:text-purple-800 transition-colors duration-300">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Laser Treatment Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              {/* Image Space */}
              <div className="h-48 bg-gradient-to-r from-blue-100 to-indigo-100">
  <img src="images/home/view-doctor-cosmetologist-doing-anti-aging-procedure-cosmetology-office-satisfied-woman.jpg" alt="Skin Treatment" className="w-full h-full object-cover" />
</div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Laser Treatments</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Discover the power of advanced laser technology at Dr. Ankit Mehra's dermatology clinic. Specializing in safe, effective, and minimally invasive laser treatments, Dr. Mehra offers personalized solutions for a wide range of skin and cosmetic concerns. With a focus on precision and patient comfort, our clinic ensures visible results with minimal downtime.
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Laser Hair Removal (for face & body)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Laser Treatment for Acne Scars
                  </li>
                </ul>
                <button className="text-red-600 font-semibold flex items-center hover:text-red-800 transition-colors duration-300">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
            Book Your Consultation
          </button>
          <p className="mt-4 text-gray-600">
            Personalized treatment plans for all your dermatological needs
          </p>
        </div>
      </div>
    </div>
  );
};

 