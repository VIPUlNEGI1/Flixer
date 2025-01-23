import React from 'react';
import { 
  Cloud, 
  Code, 
  LineChart, 
  Shield, 
  Smartphone, 
  Database, 
  Brain, 
  Blocks, 
  LucideIcon 
} from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, gradient }) => (
  <div className="group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1">
    {/* Background with gradient */}
    <div className={`absolute inset-0 rounded-2xl ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

    {/* Content */}
    <div className="relative space-y-4">
      <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>

      {/* Hover arrow */}
      <div className="flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Learn More 
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  </div>
);

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Optimize your business with scalable cloud infrastructure, migration services, and cloud-native development.",
      gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications and platforms built with modern technologies and best practices.",
      gradient: "bg-gradient-to-br from-violet-600/20 to-purple-600/20"
    },
    {
      icon: LineChart,
      title: "Digital Strategy",
      description: "Data-driven strategies to enhance your digital presence and achieve business objectives.",
      gradient: "bg-gradient-to-br from-green-600/20 to-emerald-600/20"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions and compliance measures.",
      gradient: "bg-gradient-to-br from-red-600/20 to-orange-600/20"
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      gradient: "bg-gradient-to-br from-pink-600/20 to-rose-600/20"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization.",
      gradient: "bg-gradient-to-br from-yellow-600/20 to-amber-600/20"
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Leverage artificial intelligence and machine learning to automate and optimize processes.",
      gradient: "bg-gradient-to-br from-indigo-600/20 to-blue-600/20"
    },
    {
      icon: Blocks,
      title: "DevOps Services",
      description: "Streamline development and operations with automated workflows and continuous integration.",
      gradient: "bg-gradient-to-br from-teal-600/20 to-green-600/20"
    }
  ];

  return (
    <div className="relative py-24 bg-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-20 -right-20 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl rounded-full"></div>
        <div className="absolute w-[400px] h-[400px] -bottom-20 -left-20 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comprehensive Services for Your Digital Success
          </h2>
          <p className="text-xl text-gray-300">
            Transform your business with our expert services tailored to meet your unique needs and drive innovation.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
            View All Services
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
