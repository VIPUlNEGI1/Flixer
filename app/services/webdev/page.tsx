import React from 'react';
import ServiceOverview from '@/components/services/ServicesOverview';
import ServiceOfferings from '@/components/services/ServiceOfferings';
import ServiceProcess from '@/components/services/ServiceProcess';
import TechStack from '@/components/services/TechStack';
import PortfolioShowcase from '@/components/services/PortfolioShowcase';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiAmazonaws, SiDocker, SiNodedotjs } from "react-icons/si";
import { 
    Code, 
    Layers, 
    Monitor, 
    Rocket, 
    Globe, 
    Database,
    Lightbulb,
    PenTool,
    Cpu,
    Search,
    Blocks,
    CodeSquare,
    AppWindow,
    Zap,
    ShoppingCart,
    Server,
  } from 'lucide-react';
import { li } from 'framer-motion/client';
const WebDevelopmentService = () => {
    const webDevOfferings = {
        category: "Comprehensive Web Solutions",
        title: "Cutting Edge Web Development Services",
        description: "Transform your digital presence with our end-to-end web development expertise, crafting scalable, performant, and visually stunning web applications.",
        offerings: [
          {
            icon: <CodeSquare size={32} className="text-blue-400" />,
            title: "Custom Web Development",
            description: "Tailored web solutions using modern frameworks like React, Next.js, and TypeScript to meet your unique business requirements.",
            gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10"
          },
          {
            icon: <Blocks size={32} className="text-emerald-400" />,
            title: "Full-Stack Engineering",
            description: "Seamless integration of front-end and back-end technologies, creating robust, scalable web applications with optimal performance.",
            gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10"
          },
          {
            icon: <AppWindow size={32} className="text-purple-400" />,
            title: "Responsive Design",
            description: "Mobile-first, responsive designs that provide seamless user experiences across all devices and screen sizes.",
            gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10"
          },
          {
            icon: <Zap size={32} className="text-amber-400" />,
            title: "Performance Optimization",
            description: "Advanced optimization techniques to ensure lightning-fast load times, improved SEO, and superior user engagement.",
            gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10"
          },
          {
            icon: <ShoppingCart size={32} className="text-rose-400" />,
            title: "E-commerce Solutions",
            description: "Powerful, secure e-commerce platforms with integrated payment gateways, inventory management, and user-friendly interfaces.",
            gradient: "bg-gradient-to-br from-rose-600/10 to-red-600/10"
          },
          {
            icon: <Server size={32} className="text-indigo-400" />,
            title: "CMS & Backend Development",
            description: "Custom Content Management Systems and robust backend architectures using Node.js, Express, and modern database technologies.",
            gradient: "bg-gradient-to-br from-indigo-600/10 to-violet-600/10"
          }
        ]
      };

      const webDevProcess = {
        category: "Development Process",
        title: "How We Build Your Solution",
        description: "Our proven development methodology ensures transparent communication and exceptional results at every stage.",
        processes: [
          {
            icon: Lightbulb,
            title: "Discovery & Planning",
            description: "We analyze your requirements, define project scope, and create a detailed roadmap for success.",
            gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20",
            stepNumber: 1
          },
          {
            icon: PenTool,
            title: "Design & Wireframing",
            description: "Creating intuitive user interfaces and engaging user experiences through iterative design.",
            gradient: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
            stepNumber: 2
          },
          {
            icon: Code,
            title: "Development",
            description: "Building your solution using modern technologies and best coding practices.",
            gradient: "bg-gradient-to-br from-orange-600/20 to-red-600/20",
            stepNumber: 3
          },
          {
            icon: Cpu,
            title: "Testing & QA",
            description: "Rigorous testing to ensure functionality, performance, and compatibility across devices.",
            gradient: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
            stepNumber: 4
          },
          {
            icon: Search,
            title: "Review & Refinement",
            description: "Collaborative review process to perfect every aspect of your web solution.",
            gradient: "bg-gradient-to-br from-yellow-600/20 to-amber-600/20",
            stepNumber: 5
          },
          {
            icon: Rocket,
            title: "Deployment & Support",
            description: "Smooth launch with ongoing maintenance and support to ensure lasting success.",
            gradient: "bg-gradient-to-br from-violet-600/20 to-indigo-600/20",
            stepNumber: 6
          }
        ]
      };

      const webDevTechStack = {
        category: "Technology Stack",
        title: "Built with Modern Technologies",
        description: "We leverage cutting-edge technologies and frameworks to deliver scalable and maintainable solutions.",
        technologies: [
          {
            icon: <SiReact size={40} className="text-yellow-400" />,
            name: "React",
            description: "Building interactive UIs with the most popular front-end library",
            gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20"
          },
          {
            icon: <SiNextdotjs size={40} className="text-gray-400" />,
            name: "Next.js",
            description: "Server-side rendering and static generation for optimal performance",
            gradient: "bg-gradient-to-br from-gray-600/20 to-slate-600/20"
          },
          {
            icon: <SiTypescript size={40} className="text-blue-400" />,
            name: "TypeScript",
            description: "Type-safe development for more reliable applications",
            gradient: "bg-gradient-to-br from-blue-600/20 to-indigo-600/20"
          },
          {
            icon: <SiTailwindcss size={40} className="text-cyan-400" />,
            name: "Tailwind CSS",
            description: "Utility-first CSS framework for rapid UI development",
            gradient: "bg-gradient-to-br from-cyan-600/20 to-teal-600/20"
          },
          {
            icon: <SiNodedotjs size={40} className="text-green-400" />,
            name: "Node.js",
            description: "Server-side JavaScript runtime for scalable backends",
            gradient: "bg-gradient-to-br from-green-600/20 to-emerald-600/20"
          },
          {
            icon: <SiPostgresql size={40} className="text-blue-400" />,
            name: "PostgreSQL",
            description: "Robust relational database for data persistence",
            gradient: "bg-gradient-to-br from-blue-600/20 to-purple-600/20"
          },
          {
            icon: <SiAmazonaws size={40} className="text-orange-400" />,
            name: "AWS",
            description: "Cloud infrastructure for reliable deployment and scaling",
            gradient: "bg-gradient-to-br from-orange-600/20 to-yellow-600/20"
          },
          {
            icon: <SiDocker size={40} className="text-blue-400" />,
            name: "Docker",
            description: "Containerization for consistent development and deployment",
            gradient: "bg-gradient-to-br from-blue-600/20 to-sky-600/20"
          }
        ]
      };

      const webDevPortfolio = {
        category: "Featured Projects",
        title: "Our Web Development Success Stories",
        description: "Explore some of our recent web development projects that showcase our expertise and capabilities.",
        projects: [
          {
            title: "E-Commerce Platform",
            description: "A full-featured online shopping platform with real-time inventory management and secure payment processing.",
            image: "/portfolio/ecommerce-project.jpg",
            tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
            link: "/portfolio/ecommerce"
          },
          {
            title: "SaaS Dashboard",
            description: "Modern analytics dashboard with real-time data visualization and user management system.",
            image: "/portfolio/saas-dashboard.jpg",
            tags: ["React", "Node.js", "D3.js", "AWS"],
            link: "/portfolio/saas-dashboard"
          },
          {
            title: "Healthcare Platform",
            description: "HIPAA-compliant healthcare management system with telemedicine capabilities.",
            image: "/portfolio/healthcare-platform.jpg",
            tags: ["React", "Express", "MongoDB", "WebRTC"],
            link: "/portfolio/healthcare"
          },
          {
            title: "Real Estate Portal",
            description: "Property listing and management platform with virtual tour integration.",
            image: "/portfolio/real-estate-portal.jpg",
            tags: ["Next.js", "Three.js", "Firebase", "Google Maps"],
            link: "/portfolio/real-estate"
          }
        ]
      };

  return (
    <>
    <ServiceOverview
      badge="Web Development"
      headline1="Build Stunning Websites"
      headline2="With Expert Developers"
      description="Our team of experienced web developers specializes in creating scalable, responsive, and user-friendly websites that elevate your online presence."
      primaryButtonText="Get Started"
      secondaryButtonText="Learn More"
      backgroundGradientFrom="from-green-500/30"
      backgroundGradientTo="to-teal-500/30"
    />
    <ServiceOfferings
      {...webDevOfferings}
    />
    <ServiceProcess {...webDevProcess} />
    <PortfolioShowcase {...webDevPortfolio} />
    <TechStack {...webDevTechStack} />
    </>
  );
};

export default WebDevelopmentService;
