import React from 'react';
import { 
  Clipboard, 
  Search, 
  RefreshCcw, 
  Target, 
  CheckCircle, 
  Zap 
} from 'lucide-react';

interface ProcessStepProps {
  icon: React.ElementType;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  isLast = false 
}) => (
  <div className="relative group">
    {/* Connector line */}
    {!isLast && (
      <div className="absolute top-16 left-6 w-0.5 h-full bg-white/20 group-last:hidden"></div>
    )}
    
    <div className="relative flex items-start space-x-6 pb-12">
      {/* Icon container */}
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 space-y-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const ConsultingProcessSection: React.FC = () => {
  const processSteps: ProcessStepProps[] = [
    {
      icon: Search,
      title: "Discovery & Analysis",
      description: "In-depth assessment of your current business landscape, challenges, and opportunities."
    },
    {
      icon: Clipboard,
      title: "Strategic Planning",
      description: "Develop a comprehensive, tailored digital transformation roadmap aligned with your goals."
    },
    {
      icon: Target,
      title: "Solution Design",
      description: "Create innovative, scalable solutions that address your specific business requirements."
    },
    {
      icon: RefreshCcw,
      title: "Implementation",
      description: "Precise and efficient execution of the digital transformation strategy."
    },
    {
      icon: Zap,
      title: "Optimization",
      description: "Continuous improvement and refinement of implemented solutions."
    },
    {
      icon: CheckCircle,
      title: "Ongoing Support",
      description: "Long-term partnership to ensure sustained digital excellence.",
      isLast: true
    }
  ];

  return (
    <div className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] -top-40 -right-40 bg-gradient-to-br from-violet-600/30 to-purple-600/30 blur-3xl rounded-full"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-40 -left-40 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Consulting Process
          </h2>
          <p className="text-xl text-gray-300">
            A structured approach to driving digital transformation and business innovation.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {processSteps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
            Start Your Digital Journey
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultingProcessSection;