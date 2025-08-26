'use client'
import { useState } from 'react';
import Link from "next/link";
const ExpertTeam = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      id: 1,
      name: "Dr. Apurva Mehra",
      qualifications: "MBBS, MD (Neuropsychiatry)",
      experience: "3+3 Years Residency Experience",
      position: "Former Resident at JLN Medical College, Ajmer",
      image: "apurva-mehra.jpeg",
      bio: "Dr. Apurva Mehra is a dedicated neuropsychiatrist with extensive training in mental health and neurological disorders. With over 6 years of combined residency experience, she brings expertise in diagnosing and treating complex neuropsychiatric conditions.",
      url:"/apurva-mehra"
    },
    {
      id: 2,
      name: "Dr. Ashok Meherda",
      qualifications: "MD, Skin & VD",
      experience: "Senior Professor & Head",
      position: "Department of Skin, JLN Medical College, Ajmer",
      image: "ashok-meherda.jpeg",
      bio: "Dr. Ashok Meherda is a renowned dermatologist with decades of experience in skin and venereal diseases. As a senior professor and department head, he has contributed significantly to medical education and patient care.",
     url:"/dr-ashok-meherda"
    },
    {
      id: 3,
      name: "Dr. Kanti Meherda",
      qualifications: "MS Gynecology",
      experience: "Senior Professor & Unit Head",
      position: "Janana Hospital, Ajmer",
      image: "kanti-meherda.jpeg",
      bio: "Dr. Kanti Meherda is a distinguished gynecologist specializing in women's health. With her role as senior professor and unit head, she has been instrumental in advancing gynecological care and education.",
     url:"/dr-kanti-meherda"
    }
  ];

 

  return (
    <div className="min-h-screen bg-[#EFF5FE] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Expert Care Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our distinguished team of medical professionals dedicated to providing exceptional healthcare services
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div 
              key={doctor.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img 
                  src={`images/home/${doctor.image}`} 
                  alt={doctor.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {doctor.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-800">Qualifications:</span> {doctor.qualifications}
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-800">Experience:</span> {doctor.experience}
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-800">Position:</span> {doctor.position}
                    </p>
                  </div>
                </div>

     <Link
  href={doctor.url}
  
  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
>
  Read More
  <svg 
    className="inline-block w-4 h-4 ml-2" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M9 5l7 7-7 7"
    />
  </svg>
</Link>

              </div>
            </div>
          ))}
        </div>

        {/* Modal for Doctor Details */}
        {selectedDoctor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <img 
                  src={selectedDoctor.image} 
                  alt={selectedDoctor.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {selectedDoctor.name}
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-900 font-semibold">
                      {selectedDoctor.qualifications}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Experience</p>
                      <p className="font-semibold text-gray-800">
                        {selectedDoctor.experience}
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Position</p>
                      <p className="font-semibold text-gray-800">
                        {selectedDoctor.position}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Biography</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedDoctor.bio}
                  </p>
                </div>
                
                <button
                  onClick={closeModal}
                  className="mt-8 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpertTeam;