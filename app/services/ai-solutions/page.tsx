import React from 'react';
import ServiceOverview from '@/components/services/ServicesOverview';
import ServiceOfferings from '@/components/services/ServiceOfferings';
import ServiceProcess from '@/components/services/ServiceProcess';
import TechStack from '@/components/services/TechStack';
import PortfolioShowcase from '@/components/services/PortfolioShowcase';
import { 
  Brain,
  Bot,
  MessageSquareText,
  Image,
  Sparkles,
  Database,
  Search,
  Lightbulb,
  Code,
  Cpu,
  BarChart,
  RefreshCw,
  Network
} from 'lucide-react';

const AISolutionsService = () => {
  const aiOfferings = {
    category: "AI & ML Solutions",
    title: "Intelligent Solutions",
    description: "Transform your business with cutting-edge artificial intelligence and machine learning solutions.",
    offerings: [
      {
        icon: <Brain size={32} className="text-blue-400" />,
        title: "Machine Learning",
        description: "Custom ML models for prediction, classification, and pattern recognition.",
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10"
      },
      {
        icon: <Bot size={32} className="text-emerald-400" />,
        title: "Chatbots & AI Assistants",
        description: "Intelligent conversational agents for customer service and automation.",
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10"
      },
      {
        icon: <MessageSquareText size={32} className="text-purple-400" />,
        title: "Natural Language Processing",
        description: "Text analysis, sentiment analysis, and language understanding solutions.",
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10"
      },
      {
        icon: <Image size={32} className="text-amber-400" />,
        title: "Computer Vision",
        description: "Image recognition, object detection, and visual analysis systems.",
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10"
      },
      {
        icon: <Image size={32} className="text-rose-400" />,
        title: "Speech Recognition",
        description: "Voice interface and speech processing solutions.",
        gradient: "bg-gradient-to-br from-rose-600/10 to-red-600/10"
      },
      {
        icon: <Sparkles size={32} className="text-indigo-400" />,
        title: "Predictive Analytics",
        description: "AI-powered forecasting and business intelligence solutions.",
        gradient: "bg-gradient-to-br from-indigo-600/10 to-violet-600/10"
      }
    ]
  };

  const aiProcess = {
    category: "AI Development Process",
    title: "Our AI Implementation Approach",
    description: "A systematic methodology for developing and deploying AI solutions.",
    processes: [
      {
        icon: Search,
        title: "Problem Analysis",
        description: "Understanding your business challenges and AI opportunities.",
        gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20",
        stepNumber: 1
      },
      {
        icon: Database,
        title: "Data Preparation",
        description: "Collecting and preprocessing data for AI model training.",
        gradient: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
        stepNumber: 2
      },
      {
        icon: Brain,
        title: "Model Development",
        description: "Creating and training custom AI models.",
        gradient: "bg-gradient-to-br from-orange-600/20 to-red-600/20",
        stepNumber: 3
      },
      {
        icon: Cpu,
        title: "Testing & Validation",
        description: "Rigorous testing of AI models for accuracy and reliability.",
        gradient: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
        stepNumber: 4
      },
      {
        icon: Network,
        title: "Deployment",
        description: "Integrating AI solutions into your existing systems.",
        gradient: "bg-gradient-to-br from-yellow-600/20 to-amber-600/20",
        stepNumber: 5
      },
      {
        icon: RefreshCw,
        title: "Monitoring & Optimization",
        description: "Continuous improvement of AI model performance.",
        gradient: "bg-gradient-to-br from-violet-600/20 to-indigo-600/20",
        stepNumber: 6
      }
    ]
  };

  const aiTechStack = {
    category: "AI Technologies",
    title: "Cutting-Edge AI Stack",
    description: "We leverage the latest AI and ML technologies to build intelligent solutions.",
    technologies: [
      {
        icon: "/icons/tensorflow.svg",
        name: "TensorFlow",
        description: "Deep learning and neural networks",
        gradient: "bg-gradient-to-br from-orange-600/20 to-red-600/20"
      },
      {
        icon: "/icons/pytorch.svg",
        name: "PyTorch",
        description: "Advanced machine learning framework",
        gradient: "bg-gradient-to-br from-purple-600/20 to-pink-600/20"
      },
      {
        icon: "/icons/scikit-learn.svg",
        name: "Scikit-learn",
        description: "Machine learning algorithms",
        gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20"
      },
      {
        icon: "/icons/opencv.svg",
        name: "OpenCV",
        description: "Computer vision processing",
        gradient: "bg-gradient-to-br from-green-600/20 to-emerald-600/20"
      },
      {
        icon: "/icons/huggingface.svg",
        name: "Hugging Face",
        description: "NLP models and transformers",
        gradient: "bg-gradient-to-br from-yellow-600/20 to-amber-600/20"
      },
      {
        icon: "/icons/kubernetes.svg",
        name: "Kubernetes",
        description: "AI model deployment",
        gradient: "bg-gradient-to-br from-blue-600/20 to-indigo-600/20"
      }
    ]
  };

  const aiPortfolio = {
    category: "AI Projects",
    title: "AI Success Stories",
    description: "Discover how our AI solutions have transformed businesses across industries.",
    projects: [
      {
        title: "Predictive Maintenance",
        description: "AI-powered equipment maintenance prediction system.",
        image: "/portfolio/predictive-maintenance.jpg",
        tags: ["Machine Learning", "IoT", "Manufacturing"],
        link: "/portfolio/predictive-maintenance"
      },
      {
        title: "Customer Service AI",
        description: "Intelligent chatbot system for 24/7 customer support.",
        image: "/portfolio/ai-chatbot.jpg",
        tags: ["NLP", "Chatbot", "Customer Service"],
        link: "/portfolio/customer-service-ai"
      },
      {
        title: "Visual Quality Control",
        description: "Computer vision system for manufacturing quality control.",
        image: "/portfolio/visual-inspection.jpg",
        tags: ["Computer Vision", "Manufacturing", "Quality"],
        link: "/portfolio/visual-quality-control"
      },
      {
        title: "Market Intelligence",
        description: "AI-driven market trend analysis and prediction platform.",
        image: "/portfolio/market-intelligence.jpg",
        tags: ["Predictive Analytics", "NLP", "Finance"],
        link: "/portfolio/market-intelligence"
      }
    ]
  };

  return (
    <>
      <ServiceOverview
        badge="AI Solutions"
        headline1="Transform Your Business"
        headline2="With Artificial Intelligence"
        description="Harness the power of AI and machine learning to automate processes, gain insights, and drive innovation in your business."
        primaryButtonText="Start AI Journey"
        secondaryButtonText="Learn More"
        backgroundGradientFrom="from-violet-500/30"
        backgroundGradientTo="to-purple-500/30"
      />
      <ServiceOfferings {...aiOfferings} />
      <ServiceProcess {...aiProcess} />
      <PortfolioShowcase {...aiPortfolio} />
      <TechStack {...aiTechStack} />
    </>
  );
};

export default AISolutionsService;
