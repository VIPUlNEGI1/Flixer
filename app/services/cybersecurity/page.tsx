import React from 'react';
import ServiceOverview from '@/components/services/ServicesOverview';
import ServiceOfferings from '@/components/services/ServiceOfferings';
import ServiceProcess from '@/components/services/ServiceProcess';
import TechStack from '@/components/services/TechStack';
import PortfolioShowcase from '@/components/services/PortfolioShowcase';
import { 
  Shield,
  Lock,
  Eye,
  AlertCircle,
  FileCheck,
  Network,
  Bug,
  Key,
  Search,
  Settings,
  Cloud,
  Database,
  Server,
  RefreshCw
} from 'lucide-react';

const CybersecurityService = () => {
  const securityOfferings = {
    category: "Cybersecurity Solutions",
    title: "Enterprise-Grade Security",
    description: "Comprehensive cybersecurity services to protect your digital assets and ensure business continuity.",
    offerings: [
      {
        icon: <Shield size={32} className="text-blue-400" />,
        title: "Security Assessment",
        description: "Thorough evaluation of your security posture and vulnerabilities.",
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10"
      },
      {
        icon: <Lock size={32} className="text-emerald-400" />,
        title: "Threat Prevention",
        description: "Advanced threat detection and prevention systems implementation.",
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10"
      },
      {
        icon: <Eye size={32} className="text-purple-400" />,
        title: "Security Monitoring",
        description: "24/7 security monitoring and incident response services.",
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10"
      },
      {
        icon: <AlertCircle size={32} className="text-amber-400" />,
        title: "Incident Response",
        description: "Rapid response and recovery from security incidents.",
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10"
      },
      {
        icon: <FileCheck size={32} className="text-rose-400" />,
        title: "Compliance & Audit",
        description: "Security compliance assessment and certification assistance.",
        gradient: "bg-gradient-to-br from-rose-600/10 to-red-600/10"
      },
      {
        icon: <Network size={32} className="text-indigo-400" />,
        title: "Network Security",
        description: "Secure network architecture and infrastructure protection.",
        gradient: "bg-gradient-to-br from-indigo-600/10 to-violet-600/10"
      }
    ]
  };

  const securityProcess = {
    category: "Security Implementation",
    title: "Our Security Approach",
    description: "A comprehensive methodology to ensure robust security measures.",
    processes: [
      {
        icon: Search,
        title: "Security Audit",
        description: "Initial assessment of security posture and vulnerabilities.",
        gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20",
        stepNumber: 1
      },
      {
        icon: Bug,
        title: "Threat Analysis",
        description: "Identification and analysis of potential security threats.",
        gradient: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
        stepNumber: 2
      },
      {
        icon: Key,
        title: "Security Design",
        description: "Development of tailored security architecture.",
        gradient: "bg-gradient-to-br from-orange-600/20 to-red-600/20",
        stepNumber: 3
      },
      {
        icon: Shield,
        title: "Implementation",
        description: "Deployment of security measures and controls.",
        gradient: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
        stepNumber: 4
      },
      {
        icon: Eye,
        title: "Monitoring",
        description: "Continuous security monitoring and threat detection.",
        gradient: "bg-gradient-to-br from-yellow-600/20 to-amber-600/20",
        stepNumber: 5
      },
      {
        icon: RefreshCw,
        title: "Maintenance",
        description: "Regular updates and security posture improvement.",
        gradient: "bg-gradient-to-br from-violet-600/20 to-indigo-600/20",
        stepNumber: 6
      }
    ]
  };

  const securityTechStack = {
    category: "Security Tools",
    title: "Advanced Security Technologies",
    description: "We utilize industry-leading security tools and technologies to protect your assets.",
    technologies: [
      {
        icon: "/icons/splunk.svg",
        name: "Splunk",
        description: "Security information and event management",
        gradient: "bg-gradient-to-br from-orange-600/20 to-yellow-600/20"
      },
      {
        icon: "/icons/crowdstrike.svg",
        name: "CrowdStrike",
        description: "Endpoint detection and response",
        gradient: "bg-gradient-to-br from-red-600/20 to-rose-600/20"
      },
      {
        icon: "/icons/paloalto.svg",
        name: "Palo Alto",
        description: "Next-generation firewall protection",
        gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20"
      },
      {
        icon: "/icons/rapid7.svg",
        name: "Rapid7",
        description: "Vulnerability assessment and management",
        gradient: "bg-gradient-to-br from-purple-600/20 to-pink-600/20"
      },
      {
        icon: "/icons/okta.svg",
        name: "Okta",
        description: "Identity and access management",
        gradient: "bg-gradient-to-br from-blue-600/20 to-indigo-600/20"
      },
      {
        icon: "/icons/carbonblack.svg",
        name: "Carbon Black",
        description: "Endpoint security and threat analysis",
        gradient: "bg-gradient-to-br from-gray-600/20 to-slate-600/20"
      }
    ]
  };

  const securityPortfolio = {
    category: "Security Projects",
    title: "Cybersecurity Success Stories",
    description: "Explore how we've helped organizations strengthen their security posture.",
    projects: [
      {
        title: "Financial Security",
        description: "Complete security infrastructure for a major financial institution.",
        image: "/portfolio/financial-security.jpg",
        tags: ["Finance", "Compliance", "Infrastructure"],
        link: "/portfolio/financial-security"
      },
      {
        title: "Healthcare Security",
        description: "HIPAA-compliant security implementation for healthcare provider.",
        image: "/portfolio/healthcare-security.jpg",
        tags: ["Healthcare", "Compliance", "Data Protection"],
        link: "/portfolio/healthcare-security"
      },
      {
        title: "Enterprise Security",
        description: "Enterprise-wide security transformation program.",
        image: "/portfolio/enterprise-security.jpg",
        tags: ["Enterprise", "Security", "Digital Transformation"],
        link: "/portfolio/enterprise-security"
      },
      {
        title: "Cloud Security",
        description: "Cloud security architecture for SaaS platform.",
        image: "/portfolio/cloud-security.jpg",
        tags: ["Cloud", "DevSecOps", "Compliance"],
        link: "/portfolio/cloud-security"
      }
    ]
  };

  return (
    <>
      <ServiceOverview
        badge="Cybersecurity"
        headline1="Protect Your Business"
        headline2="With Advanced Security"
        description="Comprehensive cybersecurity solutions to protect your digital assets and ensure business continuity in an evolving threat landscape."
        primaryButtonText="Secure Your Business"
        secondaryButtonText="Learn More"
        backgroundGradientFrom="from-red-500/30"
        backgroundGradientTo="to-orange-500/30"
      />
      <ServiceOfferings {...securityOfferings} />
      <ServiceProcess {...securityProcess} />
      <PortfolioShowcase {...securityPortfolio} />
      <TechStack {...securityTechStack} />
    </>
  );
};

export default CybersecurityService;
