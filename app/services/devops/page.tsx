import React from 'react';
import ServiceOverview from '@/components/services/ServicesOverview';
import ServiceOfferings from '@/components/services/ServiceOfferings';
import ServiceProcess from '@/components/services/ServiceProcess';
import TechStack from '@/components/services/TechStack';
import PortfolioShowcase from '@/components/services/PortfolioShowcase';
import { 
  GitBranch,
  Workflow,
  Container,
  Cloud,
  Monitor,
  Settings,
  Code,
  Cpu,
  RefreshCw,
  Layers,
  Server,
  Lock,
  Network,
  BarChart
} from 'lucide-react';

const DevOpsService = () => {
  const devopsOfferings = {
    category: "DevOps Solutions",
    title: "Modern DevOps Services",
    description: "Streamline your development and operations with automated, scalable DevOps solutions.",
    offerings: [
      {
        icon: <GitBranch size={32} className="text-blue-400" />,
        title: "CI/CD Pipeline",
        description: "Automated build, test, and deployment pipelines for rapid delivery.",
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10"
      },
      {
        icon: <Container size={32} className="text-emerald-400" />,
        title: "Container Orchestration",
        description: "Kubernetes and Docker container management solutions.",
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10"
      },
      {
        icon: <Cloud size={32} className="text-purple-400" />,
        title: "Cloud Infrastructure",
        description: "Cloud-native infrastructure design and implementation.",
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10"
      },
      {
        icon: <Monitor size={32} className="text-amber-400" />,
        title: "Infrastructure Monitoring",
        description: "Comprehensive monitoring and alerting solutions.",
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10"
      },
      {
        icon: <Lock size={32} className="text-rose-400" />,
        title: "Security & Compliance",
        description: "DevSecOps implementation and security automation.",
        gradient: "bg-gradient-to-br from-rose-600/10 to-red-600/10"
      },
      {
        icon: <Settings size={32} className="text-indigo-400" />,
        title: "Infrastructure as Code",
        description: "Automated infrastructure provisioning and management.",
        gradient: "bg-gradient-to-br from-indigo-600/10 to-violet-600/10"
      }
    ]
  };

  const devopsProcess = {
    category: "Implementation Process",
    title: "Our DevOps Approach",
    description: "A methodical approach to implementing DevOps practices and culture.",
    processes: [
      {
        icon: Code,
        title: "Assessment",
        description: "Evaluate current workflows and identify improvement areas.",
        gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20",
        stepNumber: 1
      },
      {
        icon: Workflow,
        title: "Strategy",
        description: "Develop tailored DevOps roadmap and implementation plan.",
        gradient: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
        stepNumber: 2
      },
      {
        icon: GitBranch,
        title: "Implementation",
        description: "Set up CI/CD pipelines and automation workflows.",
        gradient: "bg-gradient-to-br from-orange-600/20 to-red-600/20",
        stepNumber: 3
      },
      {
        icon: Cloud,
        title: "Infrastructure",
        description: "Deploy cloud infrastructure and container platforms.",
        gradient: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
        stepNumber: 4
      },
      {
        icon: Monitor,
        title: "Monitoring",
        description: "Implement monitoring, logging, and alerting systems.",
        gradient: "bg-gradient-to-br from-yellow-600/20 to-amber-600/20",
        stepNumber: 5
      },
      {
        icon: RefreshCw,
        title: "Optimization",
        description: "Continuous improvement of DevOps practices and tools.",
        gradient: "bg-gradient-to-br from-violet-600/20 to-indigo-600/20",
        stepNumber: 6
      }
    ]
  };

  const devopsTechStack = {
    category: "DevOps Tools",
    title: "Industry-Standard DevOps Stack",
    description: "We leverage modern DevOps tools and platforms to deliver efficient solutions.",
    technologies: [
      {
        icon: "/icons/jenkins.svg",
        name: "Jenkins",
        description: "Continuous Integration and Deployment",
        gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20"
      },
      {
        icon: "/icons/kubernetes.svg",
        name: "Kubernetes",
        description: "Container orchestration platform",
        gradient: "bg-gradient-to-br from-blue-600/20 to-indigo-600/20"
      },
      {
        icon: "/icons/terraform.svg",
        name: "Terraform",
        description: "Infrastructure as Code",
        gradient: "bg-gradient-to-br from-purple-600/20 to-pink-600/20"
      },
      {
        icon: "/icons/ansible.svg",
        name: "Ansible",
        description: "Configuration management",
        gradient: "bg-gradient-to-br from-red-600/20 to-orange-600/20"
      },
      {
        icon: "/icons/prometheus.svg",
        name: "Prometheus",
        description: "Monitoring and alerting",
        gradient: "bg-gradient-to-br from-orange-600/20 to-red-600/20"
      },
      {
        icon: "/icons/gitlab.svg",
        name: "GitLab",
        description: "Source control and CI/CD",
        gradient: "bg-gradient-to-br from-orange-600/20 to-red-600/20"
      }
    ]
  };

  const devopsPortfolio = {
    category: "DevOps Projects",
    title: "DevOps Success Stories",
    description: "Explore how our DevOps solutions have transformed development workflows.",
    projects: [
      {
        title: "E-commerce Pipeline",
        description: "Automated deployment pipeline for large e-commerce platform.",
        image: "/portfolio/ecommerce-devops.jpg",
        tags: ["CI/CD", "Kubernetes", "AWS"],
        link: "/portfolio/ecommerce-devops"
      },
      {
        title: "Cloud Migration",
        description: "Complete cloud infrastructure migration for enterprise client.",
        image: "/portfolio/cloud-migration.jpg",
        tags: ["Cloud", "Infrastructure", "DevOps"],
        link: "/portfolio/cloud-migration"
      },
      {
        title: "Microservices Platform",
        description: "Containerized microservices architecture implementation.",
        image: "/portfolio/microservices.jpg",
        tags: ["Kubernetes", "Docker", "Microservices"],
        link: "/portfolio/microservices"
      },
      {
        title: "DevSecOps Integration",
        description: "Security automation in CI/CD pipeline for fintech company.",
        image: "/portfolio/devsecops.jpg",
        tags: ["Security", "Automation", "Compliance"],
        link: "/portfolio/devsecops"
      }
    ]
  };

  return (
    <>
      <ServiceOverview
        badge="DevOps Services"
        headline1="Automate and Scale"
        headline2="Your Development"
        description="Streamline your development workflow with modern DevOps practices, tools, and automation solutions."
        primaryButtonText="Start DevOps Journey"
        secondaryButtonText="Learn More"
        backgroundGradientFrom="from-cyan-500/30"
        backgroundGradientTo="to-blue-500/30"
      />
      <ServiceOfferings {...devopsOfferings} />
      <ServiceProcess {...devopsProcess} />
      <PortfolioShowcase {...devopsPortfolio} />
      <TechStack {...devopsTechStack} />
    </>
  );
};

export default DevOpsService;
