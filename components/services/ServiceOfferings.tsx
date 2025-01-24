import React from 'react';

interface ServiceOfferingProps {
  category: string;
  title: string;
  description: string;
  offerings: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const ServiceOfferings: React.FC<ServiceOfferingProps> = ({
  category,
  title,
  description,
  offerings
}) => {
  return (
    <div className="relative py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 backdrop-blur-lg text-white">
              {category}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="mb-4 text-white">
                {offering.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {offering.title}
              </h3>
              <p className="text-gray-300">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceOfferings;