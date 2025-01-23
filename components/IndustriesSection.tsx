import React from 'react';
import { 
  Store, 
  Stethoscope, 
  Plane, 
  Building, 
  Factory, 
  PieChart, 
  Book, 
  Landmark,
  LucideIcon
} from 'lucide-react';

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon: Icon, title, description, gradient }) => (
  <div className="group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    {/* Background gradient */}
    <div className={`absolute inset-0 rounded-2xl ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
    
    {/* Content */}
    <div className="relative space-y-4">
      <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
      
      {/* Hover reveal */}
      <div className="flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Explore Industry 
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
);

const IndustriesSection: React.FC = () => {
  const industries: IndustryCardProps[] = [
    {
      icon: Store,
      title: "Retail",
      description: "Digital transformation strategies for e-commerce and omnichannel retail experiences.",
      gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20"
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Innovative solutions for digital health, telemedicine, and healthcare technology.",
      gradient: "bg-gradient-to-br from-green-600/20 to-emerald-600/20"
    },
    {
      icon: Plane,
      title: "Travel & Hospitality",
      description: "Technology solutions to enhance customer experience and operational efficiency.",
      gradient: "bg-gradient-to-br from-indigo-600/20 to-purple-600/20"
    },
    {
      icon: Building,
      title: "Finance & Banking",
      description: "Digital banking, fintech innovations, and cybersecurity solutions.",
      gradient: "bg-gradient-to-br from-yellow-600/20 to-amber-600/20"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industry 4.0 technologies, IoT, and digital manufacturing strategies.",
      gradient: "bg-gradient-to-br from-red-600/20 to-orange-600/20"
    },
    {
      icon: PieChart,
      title: "Media & Entertainment",
      description: "Digital content strategies, streaming technologies, and audience engagement.",
      gradient: "bg-gradient-to-br from-pink-600/20 to-rose-600/20"
    },
    {
      icon: Book,
      title: "Education",
      description: "E-learning platforms, digital education technologies, and learning management.",
      gradient: "bg-gradient-to-br from-teal-600/20 to-green-600/20"
    },
    {
      icon: Landmark,
      title: "Government & Public Sector",
      description: "Digital governance, citizen services, and technology modernization.",
      gradient: "bg-gradient-to-br from-violet-600/20 to-blue-600/20"
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
            Industries We Transform
          </h2>
          <p className="text-xl text-gray-300">
            Our expertise spans across diverse industries, delivering cutting-edge digital solutions tailored to unique business challenges.
          </p>
        </div>

        {/* Industries grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
            Explore More Industries
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;