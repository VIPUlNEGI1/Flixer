import React from 'react';
import ServiceOverview from '@/components/services/ServicesOverview';
import ServiceOfferings from '@/components/services/ServiceOfferings';
import ServiceProcess from '@/components/services/ServiceProcess';
import TechStack from '@/components/services/TechStack';
import PortfolioShowcase from '@/components/services/PortfolioShowcase';
import { 
  Cloud,
  Server,
  Shield,
  Database,
  Settings,
  Monitor,
  GitBranch,
  Network,
  Lock,
  RefreshCw,
  BarChart,
  Cpu,
  Code,
  Layers,
  Scale,
} from 'lucide-react';

const CloudService = () => {
  const cloudOfferings = {
    category: "Cloud Solutions",
    title: "Enterprise Cloud Services",
    description: "Empower your business with scalable, secure, and efficient cloud infrastructure solutions tailored to your needs.",
    offerings: [
      {
        icon: <Cloud size={32} className="text-blue-400" />,
        title: "Cloud Migration",
        description: "Seamless migration of your existing infrastructure to cloud platforms with minimal downtime.",
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10"
      },
      {
        icon: <Server size={32} className="text-emerald-400" />,
        title: "Cloud Infrastructure",
        description: "Design and implementation of scalable cloud architecture using AWS, Azure, or Google Cloud.",
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10"
      },
      {
        icon: <Shield size={32} className="text-purple-400" />,
        title: "Cloud Security",
        description: "Comprehensive security solutions to protect your cloud infrastructure and data.",
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10"
      },
      {
        icon: <Database size={32} className="text-amber-400" />,
        title: "Database Management",
        description: "Managed database services with high availability and automated backups.",
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10"
      },
      {
        icon: <Settings size={32} className="text-rose-400" />,
        title: "DevOps Automation",
        description: "Streamlined CI/CD pipelines and infrastructure as code implementation.",
        gradient: "bg-gradient-to-br from-rose-600/10 to-red-600/10"
      },
      {
        icon: <Monitor size={32} className="text-indigo-400" />,
        title: "Cloud Monitoring",
        description: "24/7 monitoring and optimization of your cloud resources and applications.",
        gradient: "bg-gradient-to-br from-indigo-600/10 to-violet-600/10"
      }
    ]
  };

  const cloudProcess = {
    category: "Implementation Process",
    title: "Our Cloud Migration Approach",
    description: "A systematic approach to transforming your infrastructure with cloud technology.",
    processes: [
      {
        icon: Network,
        title: "Assessment",
        description: "Comprehensive evaluation of your current infrastructure and requirements.",
        gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20",
        stepNumber: 1
      },
      {
        icon: GitBranch,
        title: "Planning",
        description: "Detailed migration strategy and architecture design.",
        gradient: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
        stepNumber: 2
      },
      {
        icon: Lock,
        title: "Security Setup",
        description: "Implementation of security measures and compliance protocols.",
        gradient: "bg-gradient-to-br from-orange-600/20 to-red-600/20",
        stepNumber: 3
      },
      {
        icon: RefreshCw,
        title: "Migration",
        description: "Systematic migration with minimal disruption to operations.",
        gradient: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
        stepNumber: 4
      },
      {
        icon: BarChart,
        title: "Optimization",
        description: "Performance tuning and cost optimization of cloud resources.",
        gradient: "bg-gradient-to-br from-yellow-600/20 to-amber-600/20",
        stepNumber: 5
      },
      {
        icon: Monitor,
        title: "Monitoring",
        description: "Continuous monitoring and maintenance of cloud infrastructure.",
        gradient: "bg-gradient-to-br from-violet-600/20 to-indigo-600/20",
        stepNumber: 6
      }
    ]
  };

  const cloudTechStack = {
    category: "Cloud Technologies",
    title: "Industry-Leading Cloud Platforms",
    description: "We leverage the most powerful cloud technologies to build robust and scalable solutions.",
    technologies: [
      {
        icon: "/icons/aws.svg",
        name: "Amazon AWS",
        description: "Leading cloud platform with comprehensive services",
        gradient: "bg-gradient-to-br from-orange-600/20 to-yellow-600/20"
      },
      {
        icon: "/icons/azure.svg",
        name: "Microsoft Azure",
        description: "Enterprise-grade cloud computing platform",
        gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20"
      },
      {
        icon: "/icons/gcp.svg",
        name: "Google Cloud",
        description: "Innovative cloud services and solutions",
        gradient: "bg-gradient-to-br from-red-600/20 to-orange-600/20"
      },
      {
        icon: "/icons/kubernetes.svg",
        name: "Kubernetes",
        description: "Container orchestration and management",
        gradient: "bg-gradient-to-br from-blue-600/20 to-indigo-600/20"
      },
      {
        icon: "/icons/docker.svg",
        name: "Docker",
        description: "Containerization platform for applications",
        gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20"
      },
      {
        icon: "/icons/terraform.svg",
        name: "Terraform",
        description: "Infrastructure as Code automation",
        gradient: "bg-gradient-to-br from-purple-600/20 to-violet-600/20"
      },
      {
        icon: "/icons/jenkins.svg",
        name: "Jenkins",
        description: "Continuous Integration and Deployment",
        gradient: "bg-gradient-to-br from-red-600/20 to-rose-600/20"
      },
      {
        icon: "/icons/prometheus.svg",
        name: "Prometheus",
        description: "Monitoring and alerting toolkit",
        gradient: "bg-gradient-to-br from-orange-600/20 to-amber-600/20"
      }
    ]
  };

  const cloudPortfolio = {
    category: "Case Studies",
    title: "Cloud Transformation Success Stories",
    description: "Discover how we've helped businesses transform their infrastructure with cloud solutions.",
    projects: [
      {
        title: "Enterprise Cloud Migration",
        description: "Complete migration of legacy infrastructure to AWS with zero downtime.",
        image: "/portfolio/enterprise-cloud.jpg",
        tags: ["AWS", "Migration", "DevOps", "Security"],
        link: "/portfolio/enterprise-migration"
      },
      {
        title: "Hybrid Cloud Solution",
        description: "Custom hybrid cloud architecture for a financial services provider.",
        image: "/portfolio/hybrid-cloud.jpg",
        tags: ["Azure", "Hybrid Cloud", "Security", "Compliance"],
        link: "/portfolio/hybrid-cloud"
      },
      {
        title: "Cloud-Native Platform",
        description: "Microservices-based platform built on Kubernetes.",
        image: "/portfolio/cloud-native.jpg",
        tags: ["Kubernetes", "Microservices", "Docker", "CI/CD"],
        link: "/portfolio/cloud-native"
      },
      {
        title: "Multi-Cloud Infrastructure",
        description: "Multi-cloud strategy implementation for high availability.",
        image: "/portfolio/multi-cloud.jpg",
        tags: ["AWS", "GCP", "Load Balancing", "Redundancy"],
        link: "/portfolio/multi-cloud"
      }
    ]
  };

  return (
    <>
      <ServiceOverview
        badge="Cloud Services"
        headline1="Transform Your Business"
        headline2="With Cloud Solutions"
        description="Leverage the power of cloud computing to scale your business, optimize costs, and enhance security with our expert cloud services."
        primaryButtonText="Start Migration"
        secondaryButtonText="Learn More"
        backgroundGradientFrom="from-blue-500/30"
        backgroundGradientTo="to-cyan-500/30"
      />
      <ServiceOfferings {...cloudOfferings} />
      <ServiceProcess {...cloudProcess} />
      <PortfolioShowcase {...cloudPortfolio} />
      <TechStack {...cloudTechStack} />
    </>
  );
};

export default CloudService;
