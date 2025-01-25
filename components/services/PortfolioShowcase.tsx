'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface PortfolioShowcaseProps {
  category: string;
  title: string;
  description: string;
  projects: PortfolioItem[];
}

const PortfolioCard: React.FC<PortfolioItem> = ({ title, description, image, tags, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900/90" />
      </div>

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-end transform transition-transform duration-300">
        <motion.div
          animate={{ y: isHovered ? -20 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm text-white rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Description */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-300 mb-4 line-clamp-2">
            {description}
          </p>

          {/* Call to Action */}
          <Link 
            href={link}
            className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors"
          >
            View Project <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent pointer-events-none" />
    </motion.div>
  );
};

const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  category,
  title,
  description,
  projects
}) => {
  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -top-20 -right-20 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl rounded-full" />
        <div className="absolute w-[400px] h-[400px] -bottom-20 -left-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl rounded-full" />
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
