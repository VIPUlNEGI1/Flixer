'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Solution {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  gradient: string;
  ctaText: string;
  ctaLink: string;
}

interface IndustrySolutionsProps {
  sectionTitle: string;
  description: string;
  solutions: Solution[];
}

const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({
  sectionTitle,
  description,
  solutions
}) => {
  return (
    <div className="relative w-full bg-gray-900 py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group ${solution.gradient}`}
            >
              {/* Solution Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-xl">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400">
                    {solution.description}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href={solution.ctaLink}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
              >
                {solution.ctaText}
                <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustrySolutions;
