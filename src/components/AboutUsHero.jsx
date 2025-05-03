import React from 'react';

const AboutHero = ({ 
  title = 'Dr. Vishnu Agrawal',
  subtitle = 'Expert Urological Care with Compassion and Precision',
  breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' }
  ]
}) => {
  return (
    <div className="w-full">
      {/* Modern Gradient Background with Abstract Shapes */}
      <div className="relative w-full py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 overflow-hidden">
        {/* Abstract Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-700 opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-teal-500 opacity-10"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-blue-500 opacity-10"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center items-center text-white px-4">
          {/* Decorative Element */}
          <div className="w-24 h-1 bg-teal-400 mb-8 rounded-full"></div>
          
          {/* Title with Custom Styling */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-white">
            {title}
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-center max-w-2xl mb-10 text-teal-100">
            {subtitle}
          </p>
          
          {/* Centered Breadcrumb Navigation */}
          <div className="flex items-center justify-center space-x-2 text-lg font-medium bg-white/10 backdrop-blur-sm px-8 py-3 rounded-lg border border-white/20">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.path}>
                <a 
                  href={crumb.path}
                  className="text-white hover:text-teal-300 transition-colors duration-200"
                >
                  {crumb.label}
                </a>
                {index < breadcrumbs.length - 1 && (
                  <span className="text-teal-300 mx-2">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;