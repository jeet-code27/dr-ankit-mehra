import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8 z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              EXPERT UROLOGY CARE,
              <br />
              COMPASSIONATE TREATMENT
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Providing advanced solutions for kidney stones, prostate issues, and urological health. <span className="font-bold">Trust Dr. Vishnu Agrawal, your partner in care.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/bookconsultation" passHref>
                <button 
                  className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full text-lg transition-colors"
                >
                  Book Consultation
                </button>
              </Link>
              <Link href="/services" passHref>
                <button 
                  className="bg-white hover:bg-gray-100 text-blue-800 font-medium py-3 px-8 rounded-full text-lg border border-blue-300 transition-colors"
                >
                  Our services
                </button>
              </Link>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative rounded-4xl  ">
            <div className="relative w-full aspect-[3/3]">
              <Image
                src="/images/logoo.png" 
                alt="Doctor consulting with patient"
                fill
                className="rounded-3xl object-fit"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;