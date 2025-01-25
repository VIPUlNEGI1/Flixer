'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
    <div className="relative min-h-[100vh] w-full bg-gray-900 pt-20"> {/* Changed min-h-[90vh] to min-h-[100vh] and added pt-20 */}
      {/* Background elements with proper containment */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute w-[800px] h-[800px] -top-40 -right-40 bg-gradient-to-r ${backgroundGradientFrom} ${backgroundGradientTo} blur-3xl rounded-full animate-pulse`} />
        <div className="absolute w-[600px] h-[600px] -bottom-40 -left-40 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-3xl rounded-full animate-pulse" />
        
        {/* Decorative Elements with contained positioning */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-[20%] w-12 h-12 border border-white/20 rounded-lg transform rotate-45 animate-float" />
          <div className="absolute bottom-40 right-[15%] w-20 h-20 border-2 border-white/20 rounded-full animate-float-delayed" />
          <div className="absolute top-40 right-[25%] w-16 h-16 border border-white/20 transform rotate-12 animate-float" />
        </div>
      </div>

      {/* Content Container with proper width constraints */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:border-white/40 transition-colors">
              {badge}
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            >
              {headline1}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white"
            >
              {headline2}
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
          >
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <span className="flex items-center justify-center gap-2">
                {primaryButtonText}
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-1">
              {secondaryButtonText}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Decorative Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};

export default ServiceOverview;