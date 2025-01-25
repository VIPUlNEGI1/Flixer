import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen pt-16 bg-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-20 -right-20 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl rounded-full"></div>
        <div className="absolute w-[400px] h-[400px] -bottom-20 -left-20 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-3xl rounded-full"></div>
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 backdrop-blur-lg text-white">
              Innovation Meets Excellence
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            <span className="block">Transform Your Business</span>
            <span className="block mt-2">With Strategic Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            We help businesses navigate digital transformation and achieve sustainable growth through expert consultation and innovative strategies.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            <div className="text-white">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-white md:col-span-1 col-span-2">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;