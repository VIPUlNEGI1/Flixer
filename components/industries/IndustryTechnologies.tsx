'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Technology {
  name: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  gradient: string;
}

interface IndustryTechnologiesProps {
  sectionTitle: string;
  description: string;
  categories: string[];
  technologies: Technology[];
}

const IndustryTechnologies: React.FC<IndustryTechnologiesProps> = ({
  sectionTitle,
  description,
  categories,
  technologies
}) => {
  const [activeCategory, setActiveCategory] = React.useState<string>(categories[0]);

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

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies
            .filter(tech => tech.category === activeCategory)
            .map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group p-6 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 ${tech.gradient}`}
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative w-12 h-12 bg-white/10 rounded-lg p-2">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {tech.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {tech.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                      className="flex items-center gap-2 text-gray-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryTechnologies;
