import Image from 'next/image';
import Link from 'next/link';

const AboutDoctorSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">Best Urologist in Ajmer</h2>
          <p className="text-xl text-gray-700 font-medium">Top Urological Care by Urology Expert</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image with Credentials */}
          <div className="w-full lg:w-2/5">
            <div className="relative rounded-lg overflow-hidden shadow-xl bg-white p-6">
              <div className="relative w-full aspect-square mb-6">
                <Image
                  src="/images/drvishnu.png" 
                  alt="Dr. Vishnu Agarwal"
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Vishnu Agarwal</h3>
                <p className="text-blue-700 font-medium mb-2">M.B.B.S., M.D., Urologist & Stone Specialist</p>
                <p className="text-gray-600 mb-4">Consultant Urologist & Laparoscopic Surgeon</p>
                
                <div className="flex justify-center space-x-4 mb-2">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">10+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">1000+ Surgeries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="w-full lg:w-3/5">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Dr. Vishnu Agarwal is one of the best urologists in Jaipur, specializing in advanced technology for Laparoscopic Surgery, Andrology, Female Urology, Uro-Oncology, and Kidney Surgery. With over 10 years of experience in the field, Dr. Vishnu Agarwal is highly skilled and knowledgeable in treating various urological conditions with care and precision.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Currently practicing at Kshetrapal Hospital, Dr. Vishnu Agarwal provides expert consultation and treatment in Urology, Kidney Disorders, and Female Urology. As a specialist urologist and consultant laparoscopic surgeon, he is known for his advanced techniques and patient-centric approach. His commitment to offering the best urological care makes him a trusted name in Jaipur.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-blue-800 font-bold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Specializations
                </h4>
                <ul className="text-gray-700">
                  <li className="mb-1">• Laparoscopic Surgery</li>
                  <li className="mb-1">• Andrology</li>
                  <li className="mb-1">• Female Urology</li>
                  <li className="mb-1">• Uro-Oncology</li>
                  <li>• Kidney Surgery</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-blue-800 font-bold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  Patient Care
                </h4>
                <ul className="text-gray-700">
                  <li className="mb-1">• Patient-Centric Approach</li>
                  <li className="mb-1">• Advanced Diagnostic Methods</li>
                  <li className="mb-1">• Minimally Invasive Procedures</li>
                  <li className="mb-1">• Personalized Treatment Plans</li>
                  <li>• Comprehensive Follow-up Care</li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <Link href="/bookappointment" passHref>
                <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  Book a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctorSection;