import React from 'react';
import IndustryOverview from '@/components/industries/IndustryOverview';
import KeyIndustryChallenges from '@/components/industries/KeyIndustryChallenges';
import IndustrySolutions from '@/components/industries/IndustrySolutions';
import PartnershipBenefits from '@/components/industries/PartnershipBenefits';
import CaseStudies from '@/components/industries/CaseStudies';
import IndustryTechnologies from '@/components/industries/IndustryTechnologies';
import Testimonials from '@/components/industries/Testimonials';
import CallToAction from '@/components/industries/CallToAction';
import { 
  Factory,
  Settings,
  Cog,
  Activity,
  BarChart,
  LineChart,
  TrendingUp,
  Shield,
  Clock,
  Award,
  Database,
  Boxes,
  Cpu,
  SearchCode
} from 'lucide-react';

const ManufacturingPage = () => {
  const manufacturingOverview = {
    badge: "Smart Manufacturing",
    title: "Industry 4.0 Innovation",
    subtitle: "Transforming Manufacturing Through Technology",
    description: "In today's rapidly evolving industrial landscape, digital transformation is essential for maintaining competitiveness. We help manufacturers embrace Industry 4.0 technologies to optimize operations and drive innovation.",
    statistics: [
      { value: "$2.2T", label: "Digital Manufacturing Market" },
      { value: "71%", label: "Industry 4.0 Adoption" },
      { value: "3.1x", label: "Productivity Increase" },
      { value: "45%", label: "Cost Reduction Achieved" }
    ],
    keyPoints: [
      "Smart factory solutions",
      "IoT integration",
      "Predictive maintenance",
      "Real-time monitoring",
      "Supply chain optimization"
    ],
    ctaText: "Transform Your Manufacturing",
    backgroundGradientFrom: "from-indigo-500/30",
    backgroundGradientTo: "to-blue-500/30"
  };

  const manufacturingChallenges = {
    sectionTitle: "Key Manufacturing Challenges",
    description: "Modern manufacturers face complex challenges in the age of Industry 4.0. We help address these critical issues with innovative technology solutions.",
    challenges: [
      {
        title: "Operational Efficiency",
        description: "Optimizing production processes and reducing downtime.",
        icon: <Factory className="w-6 h-6 text-blue-400" />,
        solution: "Smart factory systems with real-time monitoring and optimization."
      },
      {
        title: "Equipment Maintenance",
        description: "Preventing equipment failures and optimizing maintenance schedules.",
        icon: <Settings className="w-6 h-6 text-blue-400" />,
        solution: "AI-powered predictive maintenance systems."
      },
      {
        title: "Quality Control",
        description: "Maintaining consistent product quality across production lines.",
        icon: <Shield className="w-6 h-6 text-blue-400" />,
        solution: "Automated quality control systems with machine vision."
      },
      {
        title: "Supply Chain",
        description: "Managing complex supply chains and inventory levels.",
        icon: <Boxes className="w-6 h-6 text-blue-400" />,
        solution: "Integrated supply chain management with real-time tracking."
      },
      {
        title: "Data Integration",
        description: "Connecting and analyzing data from multiple systems.",
        icon: <Database className="w-6 h-6 text-blue-400" />,
        solution: "Unified manufacturing data platform with advanced analytics."
      },
      {
        title: "Process Automation",
        description: "Automating manual processes while maintaining flexibility.",
        icon: <Boxes className="w-6 h-6 text-blue-400" />,
        solution: "Intelligent automation solutions with adaptive controls."
      }
    ]
  };

  const manufacturingSolutions = {
    sectionTitle: "Our Manufacturing Solutions",
    description: "We provide comprehensive digital solutions tailored to address the unique challenges faced by modern manufacturers.",
    solutions: [
      {
        title: "Smart Factory Platform",
        description: "Comprehensive factory automation and monitoring system.",
        icon: <Factory className="w-6 h-6 text-blue-400" />,
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10",
        features: [
          "Real-time monitoring",
          "Process automation",
          "Quality control",
          "Performance analytics",
          "Equipment management"
        ],
        ctaText: "Explore Platform",
        ctaLink: "/solutions/smart-factory"
      },
      {
        title: "Predictive Maintenance",
        description: "AI-powered maintenance optimization system.",
        icon: <Factory className="w-6 h-6 text-purple-400" />,
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10",
        features: [
          "Equipment monitoring",
          "Failure prediction",
          "Maintenance scheduling",
          "Cost optimization",
          "Performance tracking"
        ],
        ctaText: "Learn More",
        ctaLink: "/solutions/predictive-maintenance"
      },
      {
        title: "Manufacturing Analytics",
        description: "Advanced analytics for manufacturing operations.",
        icon: <BarChart className="w-6 h-6 text-emerald-400" />,
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10",
        features: [
          "Production analytics",
          "Quality metrics",
          "Cost analysis",
          "Efficiency tracking",
          "Custom reporting"
        ],
        ctaText: "View Analytics",
        ctaLink: "/solutions/manufacturing-analytics"
      },
      {
        title: "Supply Chain Control",
        description: "End-to-end supply chain management solution.",
        icon: <Boxes className="w-6 h-6 text-amber-400" />,
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10",
        features: [
          "Inventory management",
          "Supplier integration",
          "Order tracking",
          "Demand forecasting",
          "Cost optimization"
        ],
        ctaText: "Discover Solution",
        ctaLink: "/solutions/supply-chain"
      }
    ]
  };

  const manufacturingTechnologies = {
    sectionTitle: "Manufacturing Technologies We Leverage",
    description: "We utilize cutting-edge Industry 4.0 technologies to deliver smart manufacturing solutions.",
    categories: ["Automation", "IoT & Sensors", "Analytics", "Quality Control"],
    technologies: [
      {
        name: "Siemens MindSphere",
        description: "Industrial IoT platform for manufacturing operations",
        icon: "/tech/siemens.svg",
        category: "IoT & Sensors",
        features: [
          "Asset connectivity",
          "Real-time monitoring",
          "Edge computing",
          "Digital twin support"
        ],
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10"
      },
      {
        name: "FANUC Robotics",
        description: "Advanced robotics and automation solutions",
        icon: "/tech/fanuc.svg",
        category: "Automation",
        features: [
          "Robot control",
          "Process automation",
          "Safety systems",
          "Manufacturing cells"
        ],
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10"
      },
      {
        name: "Manufacturing Analytics",
        description: "AI-powered manufacturing intelligence platform",
        icon: "/tech/analytics.svg",
        category: "Analytics",
        features: [
          "Production optimization",
          "Predictive maintenance",
          "Quality analytics",
          "Process optimization"
        ],
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10"
      },
      {
        name: "Keyence Vision",
        description: "Advanced machine vision and inspection systems",
        icon: "/tech/keyence.svg",
        category: "Quality Control",
        features: [
          "Visual inspection",
          "Defect detection",
          "Measurement tools",
          "Quality verification"
        ],
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10"
      }
    ]
  };

  const manufacturingTestimonials = {
    sectionTitle: "What Manufacturing Leaders Say",
    description: "Hear from manufacturing organizations that have transformed their operations with our Industry 4.0 solutions.",
    testimonials: [
      {
        clientName: "John Anderson",
        position: "Plant Manager",
        company: "Global Manufacturing Corp",
        feedback: "The smart factory platform has revolutionized our operations. We've seen significant improvements in efficiency and quality control.",
        rating: 5,
        image: "/testimonials/manufacturing-1.jpg",
        logo: "/logos/global-manufacturing.svg"
      },
      {
        clientName: "Lisa Chen",
        position: "Operations Director",
        company: "Precision Industries",
        feedback: "Their predictive maintenance solution has dramatically reduced our downtime and maintenance costs.",
        rating: 5,
        image: "/testimonials/manufacturing-2.jpg",
        logo: "/logos/precision-industries.svg"
      },
      {
        clientName: "Mark Williams",
        position: "Head of Quality",
        company: "Advanced Manufacturing Ltd",
        feedback: "The quality control system has transformed our inspection process. We're catching defects earlier and maintaining higher standards.",
        rating: 5,
        image: "/testimonials/manufacturing-3.jpg",
        logo: "/logos/advanced-manufacturing.svg"
      }
    ]
  };

  const manufacturingCaseStudies = {
    sectionTitle: "Manufacturing Success Stories",
    description: "Discover how we've helped manufacturing organizations transform their operations through Industry 4.0 technologies.",
    caseStudies: [
      {
        title: "Smart Factory Transformation",
        clientName: "Global Manufacturing Corp",
        description: "Complete digital transformation of manufacturing operations with Industry 4.0 technologies.",
        challenge: "Outdated manufacturing processes leading to inefficiencies and quality issues.",
        solution: "Implemented comprehensive smart factory platform with IoT sensors and real-time monitoring.",
        results: [
          { metric: "Production Efficiency", value: "+40%" },
          { metric: "Quality Issues", value: "-65%" },
          { metric: "Downtime", value: "-45%" },
          { metric: "Cost Savings", value: "$2.8M" }
        ],
        image: "/case-studies/manufacturing-1.jpg",
        tags: ["Smart Factory", "IoT", "Automation", "Analytics"],
        link: "/case-studies/global-manufacturing"
      },
      {
        title: "Predictive Maintenance Implementation",
        clientName: "Precision Industries",
        description: "AI-powered predictive maintenance system for critical equipment.",
        challenge: "Frequent unexpected equipment failures causing costly production delays.",
        solution: "Deployed IoT sensors and AI analytics for predictive maintenance.",
        results: [
          { metric: "Downtime Reduction", value: "78%" },
          { metric: "Maintenance Costs", value: "-40%" },
          { metric: "Equipment Lifespan", value: "+25%" },
          { metric: "ROI", value: "315%" }
        ],
        image: "/case-studies/manufacturing-2.jpg",
        tags: ["Predictive Maintenance", "AI/ML", "IoT", "Analytics"],
        link: "/case-studies/precision-industries"
      }
    ]
  };

  const manufacturingCTA = {
    title: "Transform Your Manufacturing Operations",
    subtitle: "Ready to Embrace Industry 4.0?",
    description: "Join leading manufacturers who have already transformed their operations with our innovative Industry 4.0 solutions.",
    primaryButtonText: "Schedule a Consultation",
    primaryButtonLink: "/contact",
    secondaryButtonText: "View Solutions",
    secondaryButtonLink: "/solutions/manufacturing",
    points: [
      { text: "Free assessment" },
      { text: "Custom solution design" },
      { text: "ROI analysis" },
      { text: "Implementation roadmap" }
    ],
    gradient: {
      from: 'from-indigo-600/20',
      via: 'via-blue-600/20',
      to: 'to-cyan-600/20'
    }
  };

  const manufacturingPartnershipBenefits = {
    sectionTitle: "Benefits of Partnering with Us",
    description: "Choose a technology partner that understands the unique challenges of modern manufacturing.",
    benefits: [
      {
        title: "Industry Expertise",
        description: "Deep understanding of manufacturing processes and Industry 4.0 technologies.",
        icon: <Award className="w-6 h-6 text-blue-400" />,
        stats: [
          { value: "15+", label: "Years in Manufacturing" },
          { value: "100+", label: "Factories Transformed" }
        ]
      },
      {
        title: "Rapid Implementation",
        description: "Quick deployment with minimal production disruption.",
        icon: <Clock className="w-6 h-6 text-purple-400" />,
        stats: [
          { value: "50%", label: "Faster Deployment" },
          { value: "99.9%", label: "System Uptime" }
        ]
      },
      {
        title: "Proven Results",
        description: "Track record of delivering measurable improvements.",
        icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
        stats: [
          { value: "40%", label: "Efficiency Gain" },
          { value: "3.5x", label: "Average ROI" }
        ]
      },
      {
        title: "Complete Support",
        description: "End-to-end support for your digital transformation journey.",
        icon: <Shield className="w-6 h-6 text-amber-400" />,
        stats: [
          { value: "24/7", label: "Support Coverage" },
          { value: "15min", label: "Response Time" }
        ]
      }
    ]
  };

  return (
    <div className="bg-gray-900">
      <IndustryOverview {...manufacturingOverview} />
      <KeyIndustryChallenges {...manufacturingChallenges} />
      <IndustrySolutions {...manufacturingSolutions} />
      <IndustryTechnologies {...manufacturingTechnologies} />
      <CaseStudies {...manufacturingCaseStudies} />
      <Testimonials {...manufacturingTestimonials} />
      <PartnershipBenefits {...manufacturingPartnershipBenefits} />
      <CallToAction {...manufacturingCTA} />
    </div>
  );
};

export default ManufacturingPage;
