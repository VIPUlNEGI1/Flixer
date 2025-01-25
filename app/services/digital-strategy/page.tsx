import React from 'react';
import ServiceOverview from '@/components/services/ServicesOverview';
import ServiceOfferings from '@/components/services/ServiceOfferings';
import ServiceProcess from '@/components/services/ServiceProcess';
import TechStack from '@/components/services/TechStack';
import PortfolioShowcase from '@/components/services/PortfolioShowcase';
import { 
  LineChart,
  Target,
  TrendingUp,
  Users,
  Search,
  Megaphone,
  Share2,
  BarChart,
  Globe,
  BrainCircuit,
  Lightbulb,
  PenTool,
  CheckCircle,
  RefreshCw
} from 'lucide-react';

const DigitalStrategyService = () => {
  const strategyOfferings = {
    category: "Digital Strategy Solutions",
    title: "Transform Your Digital Presence",
    description: "Expert digital strategy services to drive growth, engagement, and measurable business outcomes.",
    offerings: [
      {
        icon: <Target size={32} className="text-blue-400" />,
        title: "Strategic Planning",
        description: "Comprehensive digital roadmaps aligned with your business objectives and market opportunities.",
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10"
      },
      {
        icon: <LineChart size={32} className="text-emerald-400" />,
        title: "Market Analysis",
        description: "In-depth market research and competitor analysis to identify growth opportunities.",
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10"
      },
      {
        icon: <Users size={32} className="text-purple-400" />,
        title: "User Research",
        description: "Deep understanding of your target audience through data-driven research and analysis.",
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10"
      },
      {
        icon: <Megaphone size={32} className="text-amber-400" />,
        title: "Digital Marketing",
        description: "Integrated digital marketing strategies to reach and engage your target audience.",
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10"
      },
      {
        icon: <TrendingUp size={32} className="text-rose-400" />,
        title: "Growth Strategy",
        description: "Actionable strategies to accelerate business growth and market penetration.",
        gradient: "bg-gradient-to-br from-rose-600/10 to-red-600/10"
      },
      {
        icon: <Share2 size={32} className="text-indigo-400" />,
        title: "Digital Transformation",
        description: "End-to-end digital transformation solutions for business modernization.",
        gradient: "bg-gradient-to-br from-indigo-600/10 to-violet-600/10"
      }
    ]
  };

  const strategyProcess = {
    category: "Strategy Development",
    title: "Our Strategic Approach",
    description: "A comprehensive methodology to develop and implement winning digital strategies.",
    processes: [
      {
        icon: Search,
        title: "Discovery & Analysis",
        description: "Comprehensive analysis of your current digital presence and market position.",
        gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20",
        stepNumber: 1
      },
      {
        icon: BrainCircuit,
        title: "Strategy Development",
        description: "Creating tailored digital strategies aligned with your objectives.",
        gradient: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
        stepNumber: 2
      },
      {
        icon: BarChart,
        title: "Planning & Roadmap",
        description: "Detailed implementation roadmap with clear milestones and KPIs.",
        gradient: "bg-gradient-to-br from-orange-600/20 to-red-600/20",
        stepNumber: 3
      },
      {
        icon: Globe,
        title: "Implementation",
        description: "Execution of strategic initiatives across digital channels.",
        gradient: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
        stepNumber: 4
      },
      {
        icon: BarChart,
        title: "Measurement",
        description: "Continuous monitoring and measurement of strategy effectiveness.",
        gradient: "bg-gradient-to-br from-yellow-600/20 to-amber-600/20",
        stepNumber: 5
      },
      {
        icon: RefreshCw,
        title: "Optimization",
        description: "Iterative improvements based on data-driven insights.",
        gradient: "bg-gradient-to-br from-violet-600/20 to-indigo-600/20",
        stepNumber: 6
      }
    ]
  };

  const strategyTechStack = {
    category: "Strategy Tools",
    title: "Industry-Leading Digital Tools",
    description: "We leverage advanced tools and platforms to develop and execute effective digital strategies.",
    technologies: [
      {
        icon: "/icons/google-analytics.svg",
        name: "Google Analytics",
        description: "Advanced web analytics and user behavior tracking",
        gradient: "bg-gradient-to-br from-orange-600/20 to-yellow-600/20"
      },
      {
        icon: "/icons/hubspot.svg",
        name: "HubSpot",
        description: "Integrated marketing and CRM platform",
        gradient: "bg-gradient-to-br from-orange-600/20 to-red-600/20"
      },
      {
        icon: "/icons/semrush.svg",
        name: "SEMrush",
        description: "Comprehensive digital marketing suite",
        gradient: "bg-gradient-to-br from-green-600/20 to-teal-600/20"
      },
      {
        icon: "/icons/tableau.svg",
        name: "Tableau",
        description: "Data visualization and business intelligence",
        gradient: "bg-gradient-to-br from-blue-600/20 to-purple-600/20"
      },
      {
        icon: "/icons/mailchimp.svg",
        name: "Mailchimp",
        description: "Email marketing and automation platform",
        gradient: "bg-gradient-to-br from-yellow-600/20 to-amber-600/20"
      },
      {
        icon: "/icons/salesforce.svg",
        name: "Salesforce",
        description: "Enterprise CRM and business platform",
        gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20"
      }
    ]
  };

  const strategyPortfolio = {
    category: "Success Stories",
    title: "Digital Strategy Case Studies",
    description: "Explore how our digital strategies have transformed businesses across industries.",
    projects: [
      {
        title: "E-commerce Growth Strategy",
        description: "300% increase in online sales through integrated digital strategy.",
        image: "/portfolio/ecommerce-strategy.jpg",
        tags: ["Market Analysis", "Digital Marketing", "E-commerce"],
        link: "/portfolio/ecommerce-growth"
      },
      {
        title: "B2B Digital Transformation",
        description: "Complete digital transformation for a traditional B2B company.",
        image: "/portfolio/b2b-transformation.jpg",
        tags: ["Digital Transformation", "B2B", "Strategy"],
        link: "/portfolio/b2b-transformation"
      },
      {
        title: "Brand Digital Presence",
        description: "Established strong digital presence for luxury brand.",
        image: "/portfolio/brand-digital.jpg",
        tags: ["Branding", "Social Media", "Content Strategy"],
        link: "/portfolio/brand-presence"
      },
      {
        title: "Market Expansion Strategy",
        description: "Successful digital market expansion strategy for SaaS company.",
        image: "/portfolio/market-expansion.jpg",
        tags: ["Market Analysis", "Growth Strategy", "SaaS"],
        link: "/portfolio/market-expansion"
      }
    ]
  };

  return (
    <>
      <ServiceOverview
        badge="Digital Strategy"
        headline1="Transform Your Business"
        headline2="With Digital Innovation"
        description="Expert digital strategy consulting to help your business thrive in the digital age through data-driven insights and proven methodologies."
        primaryButtonText="Start Strategy"
        secondaryButtonText="Learn More"
        backgroundGradientFrom="from-purple-500/30"
        backgroundGradientTo="to-pink-500/30"
      />
      <ServiceOfferings {...strategyOfferings} />
      <ServiceProcess {...strategyProcess} />
      <PortfolioShowcase {...strategyPortfolio} />
      <TechStack {...strategyTechStack} />
    </>
  );
};

export default DigitalStrategyService;
