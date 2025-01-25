import React from 'react';
import { 
  Users, 
  Award, 
  Lightbulb, 
  Rocket, 
  Shield, 
  Compass 
} from 'lucide-react';

interface USPProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const USPCard: React.FC<USPProps> = ({ icon: Icon, title, description }) => (
  <div className="group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="relative space-y-4">
      <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  </div>
);

const WhyChooseUsSection: React.FC = () => {
  const uspData: USPProps[] = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our diverse team of seasoned professionals brings deep expertise across multiple technology domains and industries."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Consistently delivering successful digital transformations with measurable results for 500+ global clients."
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "We go beyond conventional consulting, delivering cutting-edge strategies that drive real business innovation."
    },
    {
      icon: Rocket,
      title: "Scalable Approach",
      description: "Our solutions are designed to grow with your business, ensuring long-term digital competitiveness."
    },
    {
      icon: Shield,
      title: "Security-First",
      description: "Comprehensive cybersecurity and compliance strategies integrated into every digital transformation project."
    },
    {
      icon: Compass,
      title: "Strategic Guidance",
      description: "Holistic consulting that aligns technology solutions with your unique business goals and vision."
    }
  ];

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
            Why Partner With Us
          </h2>
          <p className="text-xl text-gray-300">
            Transforming challenges into opportunities through strategic digital solutions.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uspData.map((usp, index) => (
            <USPCard key={index} {...usp} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
            Discover Our Approach
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;