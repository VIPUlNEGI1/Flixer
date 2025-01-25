'use client'
import React, { useState } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
  avatar: string;
}

interface TestimonialCardProps extends Testimonial {}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, position, company, quote, avatar }) => (
  <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 space-y-6">
    <div className="absolute top-4 right-4 text-purple-400">
      <Quote className="w-8 h-8 opacity-50" />
    </div>
    
    <div className="flex items-center space-x-4">
      <img 
        src={avatar} 
        alt={name} 
        className="w-16 h-16 rounded-full border-2 border-white/20"
      />
      <div>
        <h4 className="text-xl font-semibold text-white">{name}</h4>
        <p className="text-gray-300">{position}, {company}</p>
      </div>
    </div>
    
    <p className="text-gray-300 leading-relaxed italic">"{quote}"</p>
    
    <div className="flex space-x-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechInnovate",
      quote: "Their digital strategy transformed our entire operational workflow. The results were beyond our expectations.",
      avatar: "/api/placeholder/160/160"
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "GlobalRetail",
      quote: "A game-changing partnership that elevated our digital presence and drove significant business growth.",
      avatar: "/api/placeholder/160/160"
    },
    {
      name: "Emily Rodriguez",
      position: "Head of Innovation",
      company: "HealthSync",
      quote: "Exceptional consulting that brought cutting-edge technology solutions to our healthcare platform.",
      avatar: "/api/placeholder/160/160"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] -top-40 -right-40 bg-gradient-to-br from-violet-600/30 to-purple-600/30 blur-3xl rounded-full"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-40 -left-40 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300">
            Real impact, real transformation. See how we've helped businesses revolutionize their digital strategies.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="max-w-4xl mx-auto">
            <TestimonialCard {...testimonials[currentSlide]} />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button 
              onClick={prevSlide}
              className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index 
                    ? 'bg-white' 
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;