import React from 'react';
import ServiceOverview from '@/components/services/ServicesOverview';
import ServiceOfferings from '@/components/services/ServiceOfferings';
import ServiceProcess from '@/components/services/ServiceProcess';
import TechStack from '@/components/services/TechStack';
import PortfolioShowcase from '@/components/services/PortfolioShowcase';
import { SiSwift, SiKotlin, SiReact, SiFlutter, SiFirebase, SiRealm } from 'react-icons/si';
import { 
  Smartphone,
  TabletSmartphone,
  Layers,
  Zap,
  Shield,
  Code,
  GitBranch,
  PenTool,
  Globe,
  Cpu,
  Search,
  Rocket,
  Database,
  Settings
} from 'lucide-react';

const MobileSolutionsService = () => {
  const mobileOfferings = {
    category: "Mobile Development Solutions",
    title: "Enterprise Mobile Applications",
    description: "Create powerful, user-friendly mobile applications that drive engagement and deliver results.",
    offerings: [
      {
        icon: <Smartphone size={32} className="text-blue-400" />,
        title: "Native iOS Development",
        description: "Custom iOS applications built with Swift for optimal performance.",
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10"
      },
      {
        icon: <TabletSmartphone size={32} className="text-emerald-400" />,
        title: "Native Android Development",
        description: "Robust Android applications using Kotlin and modern architecture.",
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10"
      },
      {
        icon: <Layers size={32} className="text-purple-400" />,
        title: "Cross-Platform Apps",
        description: "Cost-effective solutions using React Native and Flutter.",
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10"
      },
      {
        icon: <Zap size={32} className="text-amber-400" />,
        title: "Progressive Web Apps",
        description: "Web apps with native-like functionality and offline support.",
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10"
      },
      {
        icon: <Shield size={32} className="text-rose-400" />,
        title: "App Security",
        description: "Implementation of robust security measures and data protection.",
        gradient: "bg-gradient-to-br from-rose-600/10 to-red-600/10"
      },
      {
        icon: <Database size={32} className="text-indigo-400" />,
        title: "Backend Integration",
        description: "Seamless integration with backend services and APIs.",
        gradient: "bg-gradient-to-br from-indigo-600/10 to-violet-600/10"
      }
    ]
  };

  const mobileProcess = {
    category: "Development Process",
    title: "Our Mobile App Development Approach",
    description: "A systematic approach to building exceptional mobile experiences.",
    processes: [
      {
        icon: Search,
        title: "Requirements Analysis",
        description: "Detailed analysis of your mobile app requirements and user needs.",
        gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20",
        stepNumber: 1
      },
      {
        icon: PenTool,
        title: "UI/UX Design",
        description: "Creating intuitive and engaging mobile user interfaces.",
        gradient: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
        stepNumber: 2
      },
      {
        icon: Code,
        title: "Development",
        description: "Building your app using modern mobile technologies.",
        gradient: "bg-gradient-to-br from-orange-600/20 to-red-600/20",
        stepNumber: 3
      },
      {
        icon: Cpu,
        title: "Testing",
        description: "Comprehensive testing across devices and platforms.",
        gradient: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
        stepNumber: 4
      },
      {
        icon: Settings,
        title: "Optimization",
        description: "Performance optimization and user experience refinement.",
        gradient: "bg-gradient-to-br from-yellow-600/20 to-amber-600/20",
        stepNumber: 5
      },
      {
        icon: Rocket,
        title: "Deployment",
        description: "App store submission and launch support.",
        gradient: "bg-gradient-to-br from-violet-600/20 to-indigo-600/20",
        stepNumber: 6
      }
    ]
  };

  const mobileTechStack = {
    category: "Mobile Technologies",
    title: "Cutting-Edge Mobile Stack",
    description: "We use the latest mobile technologies and frameworks to build powerful applications.",
    technologies: [
      {
        icon: <SiSwift size={40} className="text-blue-600" />,
        name: "Swift",
        description: "Native iOS development",
        gradient: "bg-gradient-to-br from-orange-600/20 to-red-600/20"
      },
      {
        icon: <SiKotlin size={40} className="text-green-600" />,
        name: "Kotlin",
        description: "Native Android development",
        gradient: "bg-gradient-to-br from-blue-600/20 to-purple-600/20"
      },
      {
        icon: <SiReact size={40} className="text-blue-600" />,
        name: "React Native",
        description: "Cross-platform mobile development",
        gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20"
      },
      {
        icon: <SiFlutter size={40} className="text-cyan-600" />,
        name: "Flutter",
        description: "Cross-platform UI development",
        gradient: "bg-gradient-to-br from-cyan-600/20 to-blue-600/20"
      },
      {
        icon: <SiFirebase size={40} className="text-yellow-600" />,
        name: "Firebase",
        description: "Mobile backend and analytics",
        gradient: "bg-gradient-to-br from-yellow-600/20 to-orange-600/20"
      },
      {
        icon: <SiRealm size={40} className="text-purple-600" />,
        name: "Realm",
        description: "Mobile database solution",
        gradient: "bg-gradient-to-br from-purple-600/20 to-violet-600/20"
      }
    ]
  };

  const mobilePortfolio = {
    category: "Featured Apps",
    title: "Mobile App Success Stories",
    description: "Discover our innovative mobile solutions across different industries.",
    projects: [
      {
        title: "Healthcare App",
        description: "Telemedicine platform with real-time consultations.",
        image: "/portfolio/healthcare-app.jpg",
        tags: ["iOS", "Android", "Healthcare"],
        link: "/portfolio/healthcare-app"
      },
      {
        title: "Fitness Tracker",
        description: "AI-powered personal fitness coaching app.",
        image: "/portfolio/fitness-app.jpg",
        tags: ["React Native", "Machine Learning", "Health"],
        link: "/portfolio/fitness-app"
      },
      {
        title: "E-commerce App",
        description: "Feature-rich shopping app with AR product views.",
        image: "/portfolio/ecommerce-app.jpg",
        tags: ["Flutter", "AR", "E-commerce"],
        link: "/portfolio/ecommerce-app"
      },
      {
        title: "Smart Home Control",
        description: "IoT home automation control center.",
        image: "/portfolio/smart-home-app.jpg",
        tags: ["iOS", "IoT", "Smart Home"],
        link: "/portfolio/smart-home-app"
      }
    ]
  };

  return (
    <>
      <ServiceOverview
        badge="Mobile Development"
        headline1="Transform Your Ideas"
        headline2="Into Mobile Apps"
        description="Create exceptional mobile experiences with our expert development team. We build native and cross-platform applications that users love."
        primaryButtonText="Start Building"
        secondaryButtonText="Learn More"
        backgroundGradientFrom="from-blue-500/30"
        backgroundGradientTo="to-indigo-500/30"
      />
      <ServiceOfferings {...mobileOfferings} />
      <ServiceProcess {...mobileProcess} />
      <PortfolioShowcase {...mobilePortfolio} />
      <TechStack {...mobileTechStack} />
    </>
  );
};

export default MobileSolutionsService;
