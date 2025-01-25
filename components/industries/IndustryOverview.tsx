'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface Statistic {
  value: string;
  label: string;
}

interface IndustryOverviewProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  statistics: Statistic[];
  keyPoints: string[];
  ctaText: string;
  backgroundGradientFrom?: string;
  backgroundGradientTo?: string;
}

const IndustryOverview: React.FC<IndustryOverviewProps> = ({
  badge,
  title,
  subtitle,
  description,
  statistics,
  keyPoints,
  ctaText,
  backgroundGradientFrom = 'from-indigo-500/30',
  backgroundGradientTo = 'to-purple-500/30'
}) => {
  return (
    <div className="relative min-h-[100vh] w-full bg-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute w-[800px] h-[800px] -top-40 -right-40 bg-gradient-to-r ${backgroundGradientFrom} ${backgroundGradientTo} blur-3xl rounded-full animate-pulse`} />
        <div className="absolute w-[600px] h-[600px] -bottom-40 -left-40 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-lg text-white border border-white/20">
                {badge}
              </span>
            </motion.div>

            {/* Titles */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white">
                {title}
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-300">
                {subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed">
              {description}
            </p>

            {/* Key Points */}
            <ul className="space-y-4">
              {keyPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <ChevronRight className="w-5 h-5 text-blue-400 mt-1" />
                  <span className="text-gray-300">{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="group px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-2">
                {ctaText}
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          {/* Right Column - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IndustryOverview;
