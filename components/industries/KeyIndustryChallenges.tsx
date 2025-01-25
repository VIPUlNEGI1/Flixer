'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface Challenge {
  title: string;
  description: string;
  icon?: React.ReactNode;
  solution: string;
}

interface KeyIndustryChallengesProps {
  sectionTitle: string;
  description: string;
  challenges: Challenge[];
}

const KeyIndustryChallenges: React.FC<KeyIndustryChallengesProps> = ({
  sectionTitle,
  description,
  challenges
}) => {
  return (
    <div className="relative w-full bg-gray-900 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900/0" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    {challenge.icon || <AlertCircle className="w-6 h-6 text-blue-400" />}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {challenge.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 mb-4">
                  {challenge.description}
                </p>
                
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-start gap-2">
                    <div className="font-medium text-blue-400">Solution:</div>
                    <div className="text-gray-300">
                      {challenge.solution}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyIndustryChallenges;
