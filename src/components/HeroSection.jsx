import Link from 'next/link';
import { ChevronRight, Phone, Calendar, ArrowRight, Check, Award, Shield, Star, Trophy } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50 to-white overflow-hidden py-16 md:py-24">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 opacity-70"></div>
        <div className="absolute top-32 -left-24 w-64 h-64 rounded-full bg-blue-100 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Main Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6">
              Advanced Urology Care in Ajmer
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-blue-700">EXPERT</span> UROLOGY CARE,
              <br />
              <span className="relative">
                COMPASSIONATE 
                <span className="absolute -bottom-20 md:block hidden left-0 w-full h-1 bg-blue-500 opacity-70 rounded-full"></span>
              </span> TREATMENT 
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              Providing advanced solutions for kidney stones, prostate issues, and urological health. 
              <span className="font-bold text-blue-800"> Trust Dr. Vishnu Agrawal</span>, your partner in care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12">
              <Link href="/bookconsultation" passHref>
                <button 
                  className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </Link>
              <Link href="/services" passHref>
                <button 
                  className="flex items-center justify-center bg-white hover:bg-gray-50 text-blue-800 font-medium py-3 px-8 rounded-full text-lg border-2 border-blue-300 transition-all duration-300 hover:border-blue-500 hover:-translate-y-1"
                >
                  Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </Link>
            </div>
            
            {/* Contact Quick Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-700">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-medium">+91 98290 12345</span>
              </div>
              <div className="h-5 w-px bg-gray-300 hidden sm:block"></div>
              <div className="font-medium text-blue-600 hover:text-blue-800 transition-colors">
                <Link href="/emergency">Emergency Care Available</Link>
              </div>
            </div>
          </div>
          
          {/* Prostate Surgery Highlight Box with Exclusive Tag */}
          <div className="w-full lg:w-2/5">
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full opacity-20 -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 rounded-full opacity-20 -ml-10 -mb-10"></div>
              
              {/* Prominent Exclusive Banner at the top of the box */}
              <div className="w-full bg-[#25D366] py-2 px-4 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-white font-bold uppercase text-sm">Exclusive in Ajmer</span>
                <Trophy className="w-5 h-5 text-yellow-300 ml-2" />
              </div>
              
              {/* Content container */}
              <div className="p-6">
                <div className="bg-white bg-opacity-90 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-lg">Dr.</span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold text-lg">Dr. Vishnu Agrawal</p>
                      <p className="text-blue-800">Urologist Specialist</p>
                    </div>
                  </div>
                
                  <h3 className="text-3xl font-bold text-blue-900 mb-3 flex items-center">
                    <Shield className="w-6 h-6 mr-2 text-blue-700" />
                    Prostate Surgery 
                    <span className="bg-[#25D366] text-white text-sm font-bold ml-2 px-2 py-1 rounded inline-flex items-center">
                      18 French
                    </span>
                  </h3>
                  
                  <p className="text-lg text-blue-800 font-medium mb-4">
                    Advanced minimally invasive technique with breakthrough benefits
                  </p>
                  
                  {/* Benefits Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="flex items-start bg-blue-50 p-2 rounded">
                      <Check className="w-5 h-5 text-green-600 mr-1 flex-shrink-0" />
                      <span className="text-sm font-medium">Minimal chances of stricture</span>
                    </div>
                    <div className="flex items-start bg-blue-50 p-2 rounded">
                      <Check className="w-5 h-5 text-green-600 mr-1 flex-shrink-0" />
                      <span className="text-sm font-medium">Minimal burning after surgery</span>
                    </div>
                    <div className="flex items-start bg-blue-50 p-2 rounded">
                      <Check className="w-5 h-5 text-green-600 mr-1 flex-shrink-0" />
                      <span className="text-sm font-medium">Faster recovery time</span>
                    </div>
                    <div className="flex items-start bg-blue-50 p-2 rounded">
                      <Check className="w-5 h-5 text-green-600 mr-1 flex-shrink-0" />
                      <span className="text-sm font-medium">Reduced hospital stay</span>
                    </div>
                  </div>
                  
                  <Link href="/services/prostate-surgery" passHref>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
                      Discover More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Bottom banner */}
              <div className="bg-[#25D366] py-2 px-4 text-center">
                <p className="font-bold text-white">
                  First & Only Specialist to Perform This Procedure in Ajmer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;