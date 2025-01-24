import React from 'react';

interface ServiceOverviewProps {
  badge: string;
  headline1: string;
  headline2: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  backgroundGradientFrom?: string;
  backgroundGradientTo?: string;
}

const ServiceOverview: React.FC<ServiceOverviewProps> = ({
  badge,
  headline1,
  headline2,
  description,
  primaryButtonText,
  secondaryButtonText,
  backgroundGradientFrom = 'from-purple-500/30',
  backgroundGradientTo = 'to-blue-500/30'
}) => {
  return (
    <div className="relative min-h-screen pt-16 bg-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute w-[500px] h-[500px] -top-20 -right-20 bg-gradient-to-r ${backgroundGradientFrom} ${backgroundGradientTo} blur-3xl rounded-full`}></div>
        <div className="absolute w-[400px] h-[400px] -bottom-20 -left-20 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-3xl rounded-full"></div>
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 backdrop-blur-lg text-white">
              {badge}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            <span className="block">{headline1}</span>
            <span className="block mt-2">{headline2}</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
              {primaryButtonText}
            </button>
            <button className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              {secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;