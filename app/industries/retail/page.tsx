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
  ShoppingBag, 
  ShoppingCart,
  Store,
  Truck,
  BarChart,
  Users,
  Database,
  Shield,
  Brain,
  Award,
  TrendingUp,
  Clock,
  Smartphone,
  Box,
  Tag,
  Building
} from 'lucide-react';

const RetailPage = () => {
  const retailOverview = {
    badge: "Retail Solutions",
    title: "Digital Retail Innovation",
    subtitle: "Transform Your Retail Operations",
    description: "In today's competitive retail landscape, digital transformation is key to success. We help retailers create seamless omnichannel experiences and optimize operations.",
    statistics: [
      { value: "$31.7T", label: "Global Retail Market Value" },
      { value: "82%", label: "Digital Shopping Growth" },
      { value: "4.2x", label: "Omnichannel ROI" },
      { value: "94%", label: "Customer Satisfaction" }
    ],
    keyPoints: [
      "Omnichannel retail solutions",
      "Inventory management systems",
      "Customer experience platforms",
      "Real-time analytics",
      "Supply chain optimization"
    ],
    ctaText: "Transform Your Retail Business",
    backgroundGradientFrom: "from-orange-500/30",
    backgroundGradientTo: "to-red-500/30"
  };

  const retailChallenges = {
    sectionTitle: "Key Retail Industry Challenges",
    description: "Modern retailers face numerous challenges in today's digital age. We help address these critical issues with innovative technology solutions.",
    challenges: [
      {
        title: "Omnichannel Integration",
        description: "Seamlessly connecting online and offline retail experiences.",
        icon: <Store className="w-6 h-6 text-blue-400" />,
        solution: "Unified commerce platform with integrated channels and experiences."
      },
      {
        title: "Inventory Management",
        description: "Real-time tracking and optimization of inventory across locations.",
        icon: <Box className="w-6 h-6 text-blue-400" />,
        solution: "AI-powered inventory management and forecasting system."
      },
      {
        title: "Customer Experience",
        description: "Delivering personalized shopping experiences across all touchpoints.",
        icon: <Users className="w-6 h-6 text-blue-400" />,
        solution: "Advanced CX platform with personalization and analytics."
      },
      {
        title: "Supply Chain",
        description: "Managing complex supply chains and logistics operations.",
        icon: <Truck className="w-6 h-6 text-blue-400" />,
        solution: "End-to-end supply chain visibility and optimization platform."
      },
      {
        title: "Data Analytics",
        description: "Converting retail data into actionable business insights.",
        icon: <BarChart className="w-6 h-6 text-blue-400" />,
        solution: "Real-time retail analytics and business intelligence tools."
      },
      {
        title: "Digital Competition",
        description: "Competing with pure-play e-commerce retailers.",
        icon: <ShoppingCart className="w-6 h-6 text-blue-400" />,
        solution: "Digital transformation and e-commerce optimization strategies."
      }
    ]
  };

  const retailSolutions = {
    sectionTitle: "Our Retail Solutions",
    description: "We provide comprehensive digital solutions tailored to address the unique challenges faced by modern retailers.",
    solutions: [
      {
        title: "Omnichannel Platform",
        description: "Create seamless shopping experiences across all channels.",
        icon: <Store className="w-6 h-6 text-blue-400" />,
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10",
        features: [
          "Unified commerce platform",
          "Cross-channel inventory",
          "Integrated POS systems",
          "Customer journey tracking",
          "Order management"
        ],
        ctaText: "Explore Platform",
        ctaLink: "/solutions/omnichannel"
      },
      {
        title: "Smart Inventory System",
        description: "AI-powered inventory and supply chain management.",
        icon: <Box className="w-6 h-6 text-purple-400" />,
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10",
        features: [
          "Real-time inventory tracking",
          "Demand forecasting",
          "Automated replenishment",
          "Supply chain optimization",
          "Loss prevention"
        ],
        ctaText: "Discover System",
        ctaLink: "/solutions/inventory"
      },
      {
        title: "Customer Analytics Platform",
        description: "Deep insights into customer behavior and preferences.",
        icon: <Users className="w-6 h-6 text-emerald-400" />,
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10",
        features: [
          "Customer segmentation",
          "Behavior analytics",
          "Personalization engine",
          "Loyalty management",
          "Campaign tracking"
        ],
        ctaText: "Learn More",
        ctaLink: "/solutions/customer-analytics"
      },
      {
        title: "Digital Store Solutions",
        description: "Transform physical stores with digital innovations.",
        icon: <Smartphone className="w-6 h-6 text-amber-400" />,
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10",
        features: [
          "Mobile POS",
          "Digital signage",
          "Smart fitting rooms",
          "In-store analytics",
          "Queue management"
        ],
        ctaText: "View Solutions",
        ctaLink: "/solutions/digital-store"
      }
    ]
  };

  const retailTechnologies = {
    sectionTitle: "Retail Technologies We Leverage",
    description: "We utilize cutting-edge technologies specifically designed for modern retail operations.",
    categories: ["Commerce", "Operations", "Analytics", "Customer Experience"],
    technologies: [
      {
        name: "Shopify Plus",
        description: "Enterprise e-commerce platform for scalable online retail",
        icon: "/tech/shopify.svg",
        category: "Commerce",
        features: [
          "Headless commerce",
          "Multi-channel sales",
          "Payment processing",
          "Inventory sync"
        ],
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10"
      },
      {
        name: "IBM Sterling",
        description: "Advanced supply chain management platform",
        icon: "/tech/ibm.svg",
        category: "Operations",
        features: [
          "Order management",
          "Inventory optimization",
          "Supplier integration",
          "Logistics management"
        ],
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10"
      },
      {
        name: "Adobe Analytics",
        description: "Customer behavior and retail analytics platform",
        icon: "/tech/adobe.svg",
        category: "Analytics",
        features: [
          "Customer journey analysis",
          "Attribution modeling",
          "Predictive analytics",
          "Performance tracking"
        ],
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10"
      },
      {
        name: "Salesforce Commerce",
        description: "Customer experience and engagement platform",
        icon: "/tech/salesforce.svg",
        category: "Customer Experience",
        features: [
          "Personalization",
          "Customer service",
          "Marketing automation",
          "Loyalty programs"
        ],
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10"
      }
    ]
  };

  const retailTestimonials = {
    sectionTitle: "What Retail Leaders Say",
    description: "Hear from retail organizations that have transformed their operations with our innovative solutions.",
    testimonials: [
      {
        clientName: "Emma Thompson",
        position: "Chief Digital Officer",
        company: "Global Retail Group",
        feedback: "Working with Astern has transformed our retail operations. Their omnichannel solution has helped us achieve true digital transformation.",
        rating: 5,
        image: "/testimonials/retail-1.jpg",
        logo: "/logos/global-retail.svg"
      },
      {
        clientName: "David Kumar",
        position: "Head of Operations",
        company: "Fashion Trends Inc",
        feedback: "The inventory management system has revolutionized our supply chain efficiency. We've seen significant improvements in stock accuracy and fulfillment speed.",
        rating: 5,
        image: "/testimonials/retail-2.jpg",
        logo: "/logos/fashion-trends.svg"
      },
      {
        clientName: "Sophie Chen",
        position: "Customer Experience Director",
        company: "Smart Retail Solutions",
        feedback: "Their customer analytics platform has given us unprecedented insights into customer behavior, helping us make data-driven decisions.",
        rating: 5,
        image: "/testimonials/retail-3.jpg",
        logo: "/logos/smart-retail.svg"
      }
    ]
  };

  const retailCaseStudies = {
    sectionTitle: "Retail Success Stories",
    description: "Discover how we've helped retail organizations transform their operations and improve customer experiences.",
    caseStudies: [
      {
        title: "Omnichannel Transformation",
        clientName: "Fashion Retail Chain",
        description: "Complete digital transformation of a fashion retail chain's operations.",
        challenge: "Disconnected online and offline channels leading to poor customer experience and inventory issues.",
        solution: "Implemented unified commerce platform with integrated inventory and customer experience systems.",
        results: [
          { metric: "Sales Growth", value: "+45%" },
          { metric: "Inventory Accuracy", value: "99.9%" },
          { metric: "Customer Satisfaction", value: "+60%" },
          { metric: "Order Fulfillment Speed", value: "-35%" }
        ],
        image: "/case-studies/retail-1.jpg",
        tags: ["Omnichannel", "Inventory Management", "Customer Experience", "Digital Transformation"],
        link: "/case-studies/fashion-retail"
      },
      {
        title: "Smart Store Implementation",
        clientName: "Electronics Retailer",
        description: "Digital transformation of physical stores with smart technology integration.",
        challenge: "Traditional store operations failing to meet modern customer expectations.",
        solution: "Deployed comprehensive smart store solution with digital signage, mobile POS, and analytics.",
        results: [
          { metric: "Store Traffic", value: "+25%" },
          { metric: "Average Transaction", value: "+30%" },
          { metric: "Customer Engagement", value: "+75%" },
          { metric: "Operation Efficiency", value: "+40%" }
        ],
        image: "/case-studies/retail-2.jpg",
        tags: ["Smart Stores", "Digital Innovation", "Customer Experience", "Analytics"],
        link: "/case-studies/electronics-retail"
      }
    ]
  };

  const retailCTA = {
    title: "Transform Your Retail Business",
    subtitle: "Ready to Innovate?",
    description: "Join leading retailers who have already transformed their operations with our innovative solutions.",
    primaryButtonText: "Schedule a Demo",
    primaryButtonLink: "/contact",
    secondaryButtonText: "View Solutions",
    secondaryButtonLink: "/solutions/retail",
    points: [
      { text: "Free consultation" },
      { text: "Custom solution design" },
      { text: "ROI assessment" },
      { text: "Implementation roadmap" }
    ],
    gradient: {
      from: 'from-orange-600/20',
      via: 'via-red-600/20',
      to: 'to-pink-600/20'
    }
  };

  const retailPartnershipBenefits = {
    sectionTitle: "Benefits of Partnering with Us",
    description: "Choose a technology partner that understands the unique challenges of the retail industry.",
    benefits: [
      {
        title: "Retail Expertise",
        description: "Deep understanding of retail operations and digital transformation.",
        icon: <Award className="w-6 h-6 text-blue-400" />,
        stats: [
          { value: "15+", label: "Years in Retail Tech" },
          { value: "200+", label: "Retail Clients" }
        ]
      },
      {
        title: "Quick Implementation",
        description: "Rapid deployment with minimal disruption to operations.",
        icon: <Clock className="w-6 h-6 text-purple-400" />,
        stats: [
          { value: "40%", label: "Faster Deployment" },
          { value: "99.9%", label: "System Uptime" }
        ]
      },
      {
        title: "Proven Results",
        description: "Track record of delivering measurable business outcomes.",
        icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
        stats: [
          { value: "45%", label: "Average ROI" },
          { value: "30%", label: "Cost Reduction" }
        ]
      },
      {
        title: "Innovative Solutions",
        description: "Cutting-edge retail technology solutions.",
        icon: <Brain className="w-6 h-6 text-amber-400" />,
        stats: [
          { value: "100+", label: "Innovations Delivered" },
          { value: "24/7", label: "Support Coverage" }
        ]
      }
    ]
  };

  return (
    <div className="bg-gray-900">
      <IndustryOverview {...retailOverview} />
      <KeyIndustryChallenges {...retailChallenges} />
      <IndustrySolutions {...retailSolutions} />
      <IndustryTechnologies {...retailTechnologies} />
      <CaseStudies {...retailCaseStudies} />
      <Testimonials {...retailTestimonials} />
      <PartnershipBenefits {...retailPartnershipBenefits} />
      <CallToAction {...retailCTA} />
    </div>
  );
};

export default RetailPage;
