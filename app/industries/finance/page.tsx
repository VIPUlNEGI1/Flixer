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
  ShieldAlert, 
  Clock, 
  DollarSign, 
  UserCog, 
  Database, 
  LineChart,
  Coins,
  Brain,
  Shield,
  Users,
  Award,
  TrendingUp,
  BarChart4,
  Wallet
} from 'lucide-react';

const FinancePage = () => {
  const financeOverview = {
    badge: "Financial Technology",
    title: "Digital Finance Innovation",
    subtitle: "Transforming Financial Services Through Technology",
    description: "In today's rapidly evolving financial landscape, digital transformation is crucial for staying competitive. We help financial institutions deliver innovative solutions and superior customer experiences.",
    statistics: [
      { value: "$9.6T", label: "Global FinTech Market Value" },
      { value: "78%", label: "Digital Banking Adoption" },
      { value: "3.5x", label: "Increase in Mobile Payments" },
      { value: "92%", label: "Customer Satisfaction" }
    ],
    keyPoints: [
      "Secure financial transactions",
      "Regulatory compliance (PCI DSS)",
      "Digital banking solutions",
      "Real-time analytics",
      "Fraud prevention systems"
    ],
    ctaText: "Transform Your Financial Services",
    backgroundGradientFrom: "from-emerald-500/30",
    backgroundGradientTo: "to-blue-500/30"
  };

  const financeChallenges = {
    sectionTitle: "Key Financial Industry Challenges",
    description: "Financial institutions face numerous challenges in today's digital age. We help address these critical issues with innovative technology solutions.",
    challenges: [
      {
        title: "Security & Fraud Prevention",
        description: "Financial institutions must protect sensitive data and prevent fraudulent activities in real-time.",
        icon: <ShieldAlert className="w-6 h-6 text-blue-400" />,
        solution: "Advanced fraud detection systems using AI and machine learning."
      },
      {
        title: "Regulatory Compliance",
        description: "Keeping up with changing regulations and ensuring compliance across operations.",
        icon: <Shield className="w-6 h-6 text-blue-400" />,
        solution: "Automated compliance monitoring and reporting systems."
      },
      {
        title: "Digital Competition",
        description: "Traditional banks face competition from agile fintech startups and digital-first solutions.",
        icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
        solution: "Digital transformation and modernization of banking services."
      },
      {
        title: "Customer Experience",
        description: "Meeting modern customer expectations for seamless digital banking experiences.",
        icon: <Users className="w-6 h-6 text-blue-400" />,
        solution: "Intuitive digital banking platforms with omnichannel capabilities."
      },
      {
        title: "Data Integration",
        description: "Managing and integrating data across multiple systems and platforms.",
        icon: <Database className="w-6 h-6 text-blue-400" />,
        solution: "Unified financial data platforms with real-time synchronization."
      },
      {
        title: "Market Analysis",
        description: "Need for real-time market analysis and risk assessment capabilities.",
        icon: <BarChart4 className="w-6 h-6 text-blue-400" />,
        solution: "Advanced analytics platforms with predictive capabilities."
      }
    ]
  };

  const financeSolutions = {
    sectionTitle: "Our Financial Solutions",
    description: "We provide comprehensive digital solutions tailored to address the unique challenges faced by financial institutions.",
    solutions: [
      {
        title: "Digital Banking Platform",
        description: "Enable seamless digital banking experiences with our secure and scalable platform.",
        icon: <Wallet className="w-6 h-6 text-blue-400" />,
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10",
        features: [
          "Mobile and online banking",
          "Payment processing",
          "Account management",
          "Transaction monitoring",
          "Customer support integration"
        ],
        ctaText: "Explore Digital Banking",
        ctaLink: "/solutions/digital-banking"
      },
      {
        title: "AI-Powered Risk Analytics",
        description: "Leverage artificial intelligence for advanced risk assessment and fraud detection.",
        icon: <Brain className="w-6 h-6 text-purple-400" />,
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10",
        features: [
          "Real-time fraud detection",
          "Credit risk assessment",
          "Market risk analysis",
          "Behavioral analytics",
          "Predictive modeling"
        ],
        ctaText: "Discover AI Solutions",
        ctaLink: "/solutions/risk-analytics"
      },
      {
        title: "Payment Solutions",
        description: "Comprehensive payment processing and management solutions.",
        icon: <DollarSign className="w-6 h-6 text-emerald-400" />,
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10",
        features: [
          "Digital payments",
          "Cross-border transactions",
          "Real-time settlements",
          "Payment gateway integration",
          "Cryptocurrency support"
        ],
        ctaText: "Learn About Payments",
        ctaLink: "/solutions/payments"
      },
      {
        title: "Wealth Management Platform",
        description: "Advanced tools for portfolio management and investment analysis.",
        icon: <BarChart4 className="w-6 h-6 text-amber-400" />,
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10",
        features: [
          "Portfolio management",
          "Investment tracking",
          "Automated advisory",
          "Performance analytics",
          "Risk reporting"
        ],
        ctaText: "Explore Wealth Management",
        ctaLink: "/solutions/wealth-management"
      }
    ]
  };

  const financeTechnologies = {
    sectionTitle: "Financial Technologies We Leverage",
    description: "We utilize cutting-edge technologies specifically designed for the financial sector to deliver secure, compliant, and efficient solutions.",
    categories: ["Core Banking", "Security", "Integration", "Analytics"],
    technologies: [
      {
        name: "Temenos T24",
        description: "Leading core banking system for comprehensive financial operations",
        icon: "/tech/temenos.svg",
        category: "Core Banking",
        features: [
          "Account management",
          "Transaction processing",
          "Banking operations",
          "Customer management"
        ],
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10"
      },
      {
        name: "Advanced Encryption",
        description: "Military-grade encryption for financial data security",
        icon: "/tech/encryption.svg",
        category: "Security",
        features: [
          "End-to-end encryption",
          "Key management",
          "Secure communications",
          "Data protection"
        ],
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10"
      },
      {
        name: "Financial APIs",
        description: "Modern APIs for seamless financial system integration",
        icon: "/tech/api.svg",
        category: "Integration",
        features: [
          "RESTful architecture",
          "Real-time data exchange",
          "Third-party integration",
          "Open banking support"
        ],
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10"
      },
      {
        name: "Financial Analytics",
        description: "Advanced analytics platform for financial insights",
        icon: "/tech/analytics.svg",
        category: "Analytics",
        features: [
          "Risk analytics",
          "Market analysis",
          "Customer insights",
          "Predictive modeling"
        ],
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10"
      }
    ]
  };

  const financeTestimonials = {
    sectionTitle: "What Financial Leaders Say",
    description: "Hear from financial institutions that have transformed their operations with our innovative solutions.",
    testimonials: [
      {
        clientName: "Robert Chen",
        position: "CTO",
        company: "Global Financial Services",
        feedback: "The digital transformation journey with Astern has revolutionized our banking operations. Their expertise in financial technology and security has been invaluable.",
        rating: 5,
        image: "/testimonials/finance-1.jpg",
        logo: "/logos/global-financial.svg"
      },
      {
        clientName: "Sarah Martinez",
        position: "Head of Digital Banking",
        company: "NextGen Bank",
        feedback: "Their digital banking platform has helped us stay ahead of the competition. The implementation was smooth, and the results have been outstanding.",
        rating: 5,
        image: "/testimonials/finance-2.jpg",
        logo: "/logos/nextgen-bank.svg"
      },
      {
        clientName: "Michael Zhang",
        position: "Chief Risk Officer",
        company: "Investment Solutions Inc",
        feedback: "Astern's risk analytics solution has transformed how we assess and manage risk. The AI-powered insights have been game-changing.",
        rating: 5,
        image: "/testimonials/finance-3.jpg",
        logo: "/logos/investment-solutions.svg"
      }
    ]
  };

  const financeCaseStudies = {
    sectionTitle: "Financial Success Stories",
    description: "Discover how we've helped financial institutions transform their operations and improve customer experiences.",
    caseStudies: [
      {
        title: "Digital Transformation of Regional Bank",
        clientName: "Pacific Banking Group",
        description: "Complete digital transformation of a regional bank's operations and customer services.",
        challenge: "Outdated systems and increasing competition from digital-first banks threatened market position.",
        solution: "Implemented comprehensive digital banking platform with mobile-first approach and AI-powered services.",
        results: [
          { metric: "Customer Acquisition", value: "+125%" },
          { metric: "Operational Efficiency", value: "+70%" },
          { metric: "Cost Reduction", value: "45%" },
          { metric: "Digital Engagement", value: "+200%" }
        ],
        image: "/case-studies/finance-1.jpg",
        tags: ["Digital Banking", "Mobile Banking", "AI", "Customer Experience"],
        link: "/case-studies/pacific-banking"
      },
      {
        title: "AI-Powered Risk Management",
        clientName: "Global Investment Bank",
        description: "Implementation of advanced risk management and fraud detection systems.",
        challenge: "Growing fraud threats and complex risk assessment needs in global operations.",
        solution: "Deployed AI-powered risk analytics platform with real-time monitoring and automated response.",
        results: [
          { metric: "Fraud Prevention", value: "+85%" },
          { metric: "Risk Assessment Speed", value: "-60%" },
          { metric: "Cost Savings", value: "$3.2M" },
          { metric: "Accuracy", value: "99.9%" }
        ],
        image: "/case-studies/finance-2.jpg",
        tags: ["Risk Management", "AI/ML", "Fraud Detection", "Analytics"],
        link: "/case-studies/global-investment"
      }
    ]
  };

  const financeCTA = {
    title: "Transform Your Financial Services",
    subtitle: "Ready to Innovate?",
    description: "Join leading financial institutions who have already transformed their operations with our innovative solutions.",
    primaryButtonText: "Schedule a Consultation",
    primaryButtonLink: "/contact",
    secondaryButtonText: "View Solutions",
    secondaryButtonLink: "/solutions/finance",
    points: [
      { text: "Free initial assessment" },
      { text: "Custom solution design" },
      { text: "Security evaluation" },
      { text: "ROI analysis" }
    ],
    gradient: {
      from: 'from-emerald-600/20',
      via: 'via-blue-600/20',
      to: 'to-cyan-600/20'
    }
  };

  const partnershipBenefits = {
    sectionTitle: "Benefits of Partnering with Us",
    description: "Choose a technology partner that understands the unique challenges of the financial sector.",
    benefits: [
      {
        title: "Financial Expertise",
        description: "Deep understanding of financial regulations, operations, and technology.",
        icon: <Award className="w-6 h-6 text-blue-400" />,
        stats: [
          { value: "20+", label: "Years in FinTech" },
          { value: "150+", label: "Financial Clients" }
        ]
      },
      {
        title: "Rapid Deployment",
        description: "Quick implementation with minimal disruption to operations.",
        icon: <Clock className="w-6 h-6 text-purple-400" />,
        stats: [
          { value: "50%", label: "Faster Time to Market" },
          { value: "99.9%", label: "System Uptime" }
        ]
      },
      {
        title: "Proven Results",
        description: "Track record of delivering measurable business outcomes.",
        icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
        stats: [
          { value: "35%", label: "Cost Reduction" },
          { value: "3x", label: "ROI Average" }
        ]
      },
      {
        title: "Security First",
        description: "Best-in-class security measures and compliance standards.",
        icon: <Shield className="w-6 h-6 text-amber-400" />,
        stats: [
          { value: "100%", label: "Compliance Rate" },
          { value: "24/7", label: "Monitoring" }
        ]
      }
    ]
  };

  return (
    <div className="bg-gray-900">
      <IndustryOverview {...financeOverview} />
      <KeyIndustryChallenges {...financeChallenges} />
      <IndustrySolutions {...financeSolutions} />
      <IndustryTechnologies {...financeTechnologies} />
      <CaseStudies {...financeCaseStudies} />
      <Testimonials {...financeTestimonials} />
      <PartnershipBenefits {...partnershipBenefits} />
      <CallToAction {...financeCTA} />
    </div>
  );
};

export default FinancePage;
