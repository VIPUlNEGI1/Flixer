'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceOfferingProps {
  category: string;
  title: string;
  description: string;
  offerings: {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient?: string;
  }[];
}

const ServiceOfferings: React.FC<ServiceOfferingProps> = ({
  category,
  title,
  description,
  offerings
}) => {
  return (
    <div className="relative py-24 bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -top-20 -right-20 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl rounded-full" />
        <div className="absolute w-[400px] h-[400px] -bottom-20 -left-20 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 backdrop-blur-lg text-white mb-4">
            {category}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300">
            {description}
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-2xl ${offering.gradient || 'bg-gradient-to-br from-blue-600/10 to-purple-600/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative">
                  {/* Icon Container */}
                  <div className="mb-6 p-3 w-16 h-16 bg-white/10 rounded-xl backdrop-blur-lg flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300">
                    {offering.icon}
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {offering.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceOfferings;