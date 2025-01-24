import React from 'react';
import ServiceOverview from '@/components/services/ServicesOverview';
import ServiceOfferings from '@/components/services/ServiceOfferings';
import ServiceProcess from '@/components/services/ServiceProcess';
import TechStack from '@/components/services/TechStack';
import PortfolioShowcase from '@/components/services/PortfolioShowcase';
import { 
  BarChart,
  PieChart,
  LineChart,
  TrendingUp,
  Database,
  Brain,
  Search,
  TableProperties,
  Network,
  Cloud,
  Settings,
  RefreshCw,
  Lightbulb
} from 'lucide-react';

const DataAnalyticsService = () => {
  const analyticsOfferings = {
    category: "Data Analytics Solutions",
    title: "Transform Data into Insights",
    description: "Unlock the power of your data with advanced analytics solutions that drive informed decision-making.",
    offerings: [
      {
        icon: <BarChart size={32} className="text-blue-400" />,
        title: "Business Intelligence",
        description: "Custom dashboards and reports for real-time business insights.",
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10"
      },
      {
        icon: <PieChart size={32} className="text-emerald-400" />,
        title: "Predictive Analytics",
        description: "Advanced forecasting and trend analysis using machine learning.",
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10"
      },
      {
        icon: <Database size={32} className="text-purple-400" />,
        title: "Data Engineering",
        description: "Robust data pipelines and warehousing solutions.",
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10"
      },
      {
        icon: <Brain size={32} className="text-amber-400" />,
        title: "Machine Learning",
        description: "AI-powered analytics for pattern recognition and insights.",
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10"
      },
      {
        icon: <TableProperties size={32} className="text-rose-400" />,
        title: "Data Visualization",
        description: "Interactive visualizations that tell your data story.",
        gradient: "bg-gradient-to-br from-rose-600/10 to-red-600/10"
      },
      {
        icon: <Network size={32} className="text-indigo-400" />,
        title: "Big Data Analytics",
        description: "Scalable solutions for processing and analyzing large datasets.",
        gradient: "bg-gradient-to-br from-indigo-600/10 to-violet-600/10"
      }
    ]
  };

  const analyticsProcess = {
    category: "Analytics Process",
    title: "Our Data Analytics Approach",
    description: "A systematic approach to transforming raw data into actionable insights.",
    processes: [
      {
        icon: Search,
        title: "Data Discovery",
        description: "Understanding your data sources and business requirements.",
        gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20",
        stepNumber: 1
      },
      {
        icon: Database,
        title: "Data Preparation",
        description: "Cleaning, transforming, and structuring your data.",
        gradient: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
        stepNumber: 2
      },
      {
        icon: Brain,
        title: "Analysis",
        description: "Applying advanced analytics and machine learning.",
        gradient: "bg-gradient-to-br from-orange-600/20 to-red-600/20",
        stepNumber: 3
      },
      {
        icon: Brain,
        title: "Visualization",
        description: "Creating intuitive dashboards and reports.",
        gradient: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
        stepNumber: 4
      },
      {
        icon: Lightbulb,
        title: "Insights",
        description: "Extracting actionable insights and recommendations.",
        gradient: "bg-gradient-to-br from-yellow-600/20 to-amber-600/20",
        stepNumber: 5
      },
      {
        icon: RefreshCw,
        title: "Optimization",
        description: "Continuous improvement and refinement of analytics.",
        gradient: "bg-gradient-to-br from-violet-600/20 to-indigo-600/20",
        stepNumber: 6
      }
    ]
  };

  const analyticsTechStack = {
    category: "Analytics Technologies",
    title: "Advanced Analytics Stack",
    description: "We utilize cutting-edge technologies and tools for sophisticated data analytics.",
    technologies: [
      {
        icon: "/icons/python.svg",
        name: "Python",
        description: "Advanced data analysis and machine learning",
        gradient: "bg-gradient-to-br from-blue-600/20 to-yellow-600/20"
      },
      {
        icon: "/icons/tensorflow.svg",
        name: "TensorFlow",
        description: "Deep learning and neural networks",
        gradient: "bg-gradient-to-br from-orange-600/20 to-red-600/20"
      },
      {
        icon: "/icons/tableau.svg",
        name: "Tableau",
        description: "Interactive data visualization",
        gradient: "bg-gradient-to-br from-blue-600/20 to-purple-600/20"
      },
      {
        icon: "/icons/snowflake.svg",
        name: "Snowflake",
        description: "Cloud data warehousing",
        gradient: "bg-gradient-to-br from-cyan-600/20 to-blue-600/20"
      },
      {
        icon: "/icons/spark.svg",
        name: "Apache Spark",
        description: "Large-scale data processing",
        gradient: "bg-gradient-to-br from-orange-600/20 to-red-600/20"
      },
      {
        icon: "/icons/powerbi.svg",
        name: "Power BI",
        description: "Business intelligence and reporting",
        gradient: "bg-gradient-to-br from-yellow-600/20 to-amber-600/20"
      }
    ]
  };

  const analyticsPortfolio = {
    category: "Analytics Projects",
    title: "Data Analytics Success Stories",
    description: "Discover how we've helped organizations leverage their data for better decision-making.",
    projects: [
      {
        title: "Retail Analytics",
        description: "AI-powered customer behavior analysis and inventory optimization.",
        image: "/portfolio/retail-analytics.jpg",
        tags: ["Machine Learning", "Forecasting", "Retail"],
        link: "/portfolio/retail-analytics"
      },
      {
        title: "Financial Insights",
        description: "Predictive analytics for investment decision-making.",
        image: "/portfolio/financial-analytics.jpg",
        tags: ["Finance", "Prediction", "Risk Analysis"],
        link: "/portfolio/financial-insights"
      },
      {
        title: "Healthcare Analytics",
        description: "Patient outcome prediction and resource optimization.",
        image: "/portfolio/healthcare-analytics.jpg",
        tags: ["Healthcare", "ML", "Prediction"],
        link: "/portfolio/healthcare-analytics"
      },
      {
        title: "Supply Chain Optimization",
        description: "End-to-end supply chain analytics and optimization.",
        image: "/portfolio/supply-chain-analytics.jpg",
        tags: ["Supply Chain", "Optimization", "IoT"],
        link: "/portfolio/supply-chain"
      }
    ]
  };

  return (
    <>
      <ServiceOverview
        badge="Data Analytics"
        headline1="Transform Your Data"
        headline2="Into Business Value"
        description="Unlock the power of your data with advanced analytics solutions that drive informed decision-making and business growth."
        primaryButtonText="Start Analytics"
        secondaryButtonText="Learn More"
        backgroundGradientFrom="from-cyan-500/30"
        backgroundGradientTo="to-blue-500/30"
      />
      <ServiceOfferings {...analyticsOfferings} />
      <ServiceProcess {...analyticsProcess} />
      <PortfolioShowcase {...analyticsPortfolio} />
      <TechStack {...analyticsTechStack} />
    </>
  );
};

export default DataAnalyticsService;
