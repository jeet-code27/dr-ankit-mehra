import React from 'react';

const WhyChooseSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100  py-16 px-4 flex items-center justify-center">
      <div className="max-w-7xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-8 px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Why Choose Dr. Ankit Mehra?</h1>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>
        
        {/* Content Section */}
        <div className="p-8">
          {/* Doctor Image and Basic Info */}
          <div className="flex flex-col md:flex-row items-center mb-10">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                <img 
                  src="/images/home/dr-ankit-mehra.jpeg" 
                  alt="Dr. Ankit Mehra" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Dr. Ankit Mehra</h2>
              <p className="text-lg text-blue-600 font-medium mb-4">MD in Skin & VD</p>
              <p className="text-gray-600 max-w-md">
                Leading dermatologist in Ajmer specializing in skin and aesthetic care.
              </p>
            </div>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Benefit 1 */}
            <div className="bg-blue-50 rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start hover:shadow-md transition-shadow duration-300">
              <div className="bg-blue-600 p-3 rounded-full mb-4 md:mb-0 md:mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Specialized Expertise</h3>
                <p className="text-gray-600">MD in Skin & VD specialist ensuring accurate diagnosis and effective treatment</p>
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-blue-50 rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start hover:shadow-md transition-shadow duration-300">
              <div className="bg-blue-600 p-3 rounded-full mb-4 md:mb-0 md:mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Advanced Technology</h3>
                <p className="text-gray-600">Utilizing cutting-edge technology and equipment for superior results</p>
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-blue-50 rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start hover:shadow-md transition-shadow duration-300">
              <div className="bg-blue-600 p-3 rounded-full mb-4 md:mb-0 md:mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Personalized Treatment</h3>
                <p className="text-gray-600">Customized treatment plans tailored to individual patient needs</p>
              </div>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-blue-50 rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start hover:shadow-md transition-shadow duration-300">
              <div className="bg-blue-600 p-3 rounded-full mb-4 md:mb-0 md:mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Excellent Reputation</h3>
                <p className="text-gray-600">Recognized as the best dermatologist with outstanding patient reviews</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center border border-blue-100">
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Dr. Ankit Mehra</span> is a leading dermatologist and cosmetologist in Ajmer
            </p>
            <p className="text-blue-700 font-medium">
              The first choice for patients seeking skin and aesthetic care
            </p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="px-8 pb-8 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;