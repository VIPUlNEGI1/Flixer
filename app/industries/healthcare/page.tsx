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
  Wallet, 
  UserCog, 
  Database, 
  LineChart,
  Stethoscope,
  Brain,
  Shield,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

const HealthcarePage = () => {
  const healthcareOverview = {
    badge: "Healthcare Solutions",
    title: "Digital Healthcare Innovation",
    subtitle: "Transforming Patient Care Through Technology",
    description: "In today's rapidly evolving healthcare landscape, digital transformation is not just an option—it's a necessity. We help healthcare providers deliver better patient outcomes through innovative technology solutions.",
    statistics: [
      { value: "$11.9T", label: "Global Healthcare Market Value by 2022" },
      { value: "64%", label: "Patients Using Digital Health Platforms" },
      { value: "4.2x", label: "Increase in Telehealth Adoption" },
      { value: "89%", label: "Improved Patient Satisfaction" }
    ],
    keyPoints: [
      "HIPAA-compliant healthcare solutions",
      "Seamless integration with existing systems",
      "Enhanced patient engagement platforms",
      "Real-time health monitoring capabilities",
      "Secure medical data management"
    ],
    ctaText: "Transform Your Healthcare Services",
    backgroundGradientFrom: "from-cyan-500/30",
    backgroundGradientTo: "to-blue-500/30"
  };

  const healthcareChallenges = {
    sectionTitle: "Key Healthcare Industry Challenges",
    description: "Healthcare organizations face numerous challenges in today's rapidly evolving digital landscape. We help address these critical issues with innovative technology solutions.",
    challenges: [
      {
        title: "Data Security & Compliance",
        description: "Healthcare organizations must protect sensitive patient data while complying with strict regulations like HIPAA.",
        icon: <ShieldAlert className="w-6 h-6 text-blue-400" />,
        solution: "Implementation of robust security measures, encryption, and compliance monitoring systems."
      },
      {
        title: "Patient Wait Times",
        description: "Long wait times and inefficient scheduling lead to poor patient experiences and reduced operational efficiency.",
        icon: <Clock className="w-6 h-6 text-blue-400" />,
        solution: "Smart scheduling systems and queue management solutions with real-time updates."
      },
      {
        title: "Cost Management",
        description: "Rising healthcare costs and complex billing processes create financial challenges for providers and patients.",
        icon: <Wallet className="w-6 h-6 text-blue-400" />,
        solution: "Automated billing systems and cost optimization through data analytics."
      },
      {
        title: "Staff Management",
        description: "Healthcare facilities struggle with staff scheduling, resource allocation, and burnout prevention.",
        icon: <UserCog className="w-6 h-6 text-blue-400" />,
        solution: "AI-powered workforce management and staff wellness monitoring systems."
      },
      {
        title: "Data Integration",
        description: "Fragmented systems and lack of interoperability between different healthcare platforms.",
        icon: <Database className="w-6 h-6 text-blue-400" />,
        solution: "Unified healthcare data platforms with seamless integration capabilities."
      },
      {
        title: "Treatment Tracking",
        description: "Difficulty in monitoring patient progress and treatment effectiveness across care episodes.",
        icon: <LineChart className="w-6 h-6 text-blue-400" />,
        solution: "Advanced analytics and monitoring systems for comprehensive patient tracking."
      }
    ]
  };

  const healthcareSolutions = {
    sectionTitle: "Our Healthcare Solutions",
    description: "We provide comprehensive digital solutions tailored to address the unique challenges faced by healthcare providers and improve patient outcomes.",
    solutions: [
      {
        title: "Telemedicine Platform",
        description: "Enable remote healthcare delivery with our secure and reliable telemedicine solution.",
        icon: <Stethoscope className="w-6 h-6 text-blue-400" />,
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10",
        features: [
          "HIPAA-compliant video consultations",
          "Electronic health records integration",
          "Secure messaging and file sharing",
          "Prescription management",
          "Appointment scheduling"
        ],
        ctaText: "Explore Telemedicine",
        ctaLink: "/solutions/telemedicine"
      },
      {
        title: "AI Diagnostics Assistant",
        description: "Leverage artificial intelligence to improve diagnostic accuracy and speed.",
        icon: <Brain className="w-6 h-6 text-purple-400" />,
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10",
        features: [
          "Machine learning-powered diagnosis",
          "Medical imaging analysis",
          "Patient risk assessment",
          "Treatment recommendation",
          "Clinical decision support"
        ],
        ctaText: "Discover AI Solutions",
        ctaLink: "/solutions/ai-diagnostics"
      },
      {
        title: "Healthcare Data Security",
        description: "Protect sensitive patient data with our comprehensive security solutions.",
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10",
        features: [
          "End-to-end encryption",
          "Access control management",
          "Compliance monitoring",
          "Audit logging",
          "Data breach prevention"
        ],
        ctaText: "Learn About Security",
        ctaLink: "/solutions/healthcare-security"
      },
      {
        title: "Patient Engagement Platform",
        description: "Enhance patient experience and involvement in their healthcare journey.",
        icon: <Users className="w-6 h-6 text-amber-400" />,
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10",
        features: [
          "Patient portal",
          "Appointment management",
          "Treatment tracking",
          "Healthcare education",
          "Feedback collection"
        ],
        ctaText: "View Platform Features",
        ctaLink: "/solutions/patient-engagement"
      }
    ]
  };

  const partnershipBenefits = {
    sectionTitle: "Benefits of Partnering with Us",
    description: "Choose a technology partner that understands the unique challenges of healthcare and delivers measurable results.",
    benefits: [
      {
        title: "Industry Expertise",
        description: "Benefit from our deep understanding of healthcare regulations, workflows, and best practices.",
        icon: <Award className="w-6 h-6 text-blue-400" />,
        stats: [
          { value: "15+", label: "Years in Healthcare" },
          { value: "100+", label: "Healthcare Clients" }
        ]
      },
      {
        title: "Rapid Implementation",
        description: "Get your solutions up and running quickly with our proven implementation methodology.",
        icon: <Clock className="w-6 h-6 text-purple-400" />,
        stats: [
          { value: "60%", label: "Faster Deployment" },
          { value: "99.9%", label: "Uptime Guarantee" }
        ]
      },
      {
        title: "Measurable Results",
        description: "Track and measure the impact of your digital transformation initiatives.",
        icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
        stats: [
          { value: "40%", label: "Cost Reduction" },
          { value: "85%", label: "Patient Satisfaction" }
        ]
      },
      {
        title: "Compliance & Security",
        description: "Rest assured with our HIPAA-compliant solutions and robust security measures.",
        icon: <Shield className="w-6 h-6 text-amber-400" />,
        stats: [
          { value: "100%", label: "HIPAA Compliance" },
          { value: "24/7", label: "Security Monitoring" }
        ]
      }
    ]
  };

  const healthcareCaseStudies = {
    sectionTitle: "Healthcare Success Stories",
    description: "Discover how we've helped healthcare organizations transform their operations and improve patient care through innovative technology solutions.",
    caseStudies: [
      {
        title: "Digital Transformation of Multi-Specialty Hospital",
        clientName: "Metropolitan Healthcare System",
        description: "Revolutionizing patient care and operational efficiency through comprehensive digital transformation.",
        challenge: "The client struggled with fragmented systems, inefficient workflows, and limited patient engagement capabilities across their network of hospitals.",
        solution: "Implemented an integrated healthcare platform combining EHR, telemedicine, and patient engagement solutions with advanced analytics.",
        results: [
          { metric: "Patient Satisfaction", value: "+45%" },
          { metric: "Operational Efficiency", value: "+60%" },
          { metric: "Cost Reduction", value: "32%" },
          { metric: "Appointment Growth", value: "+75%" }
        ],
        image: "/case-studies/healthcare-1.jpg",
        tags: ["Digital Transformation", "Healthcare IT", "Patient Experience", "Analytics"],
        link: "/case-studies/metropolitan-healthcare"
      },
      {
        title: "Telemedicine Platform for Rural Healthcare",
        clientName: "Regional Care Network",
        description: "Expanding healthcare access to remote communities through innovative telemedicine solutions.",
        challenge: "Limited access to specialized healthcare services in rural areas, resulting in delayed treatments and poor health outcomes.",
        solution: "Developed a comprehensive telemedicine platform with offline capabilities and integrated remote monitoring tools.",
        results: [
          { metric: "Patient Reach", value: "+280%" },
          { metric: "Response Time", value: "-65%" },
          { metric: "Cost Savings", value: "$2.4M" },
          { metric: "Rural Coverage", value: "95%" }
        ],
        image: "/case-studies/healthcare-2.jpg",
        tags: ["Telemedicine", "Rural Healthcare", "Remote Monitoring", "Healthcare Access"],
        link: "/case-studies/regional-care-network"
      }
    ]
  };

  const healthcareTechnologies = {
    sectionTitle: "Healthcare Technologies We Leverage",
    description: "We utilize cutting-edge technologies specifically designed for healthcare to deliver secure, compliant, and efficient solutions.",
    categories: ["Core Systems", "Security & Compliance", "Integration", "Analytics"],
    technologies: [
      {
        name: "Epic Systems",
        description: "Leading electronic health record system for comprehensive patient care management",
        icon: "/tech/epic.svg",
        category: "Core Systems",
        features: [
          "Patient records management",
          "Clinical workflows",
          "Billing integration",
          "Mobile access"
        ],
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10"
      },
      {
        name: "HIPAA Guard",
        description: "Advanced security framework ensuring healthcare data protection and compliance",
        icon: "/tech/hipaa.svg",
        category: "Security & Compliance",
        features: [
          "End-to-end encryption",
          "Access control",
          "Audit logging",
          "Compliance reporting"
        ],
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10"
      },
      {
        name: "HL7 FHIR",
        description: "Healthcare data interoperability standard for seamless system integration",
        icon: "/tech/hl7.svg",
        category: "Integration",
        features: [
          "RESTful API architecture",
          "Resource-based model",
          "Real-time data exchange",
          "Standard compliance"
        ],
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10"
      },
      {
        name: "Healthcare Analytics",
        description: "Advanced analytics platform for healthcare insights and decision support",
        icon: "/tech/health-analytics.svg",
        category: "Analytics",
        features: [
          "Predictive analytics",
          "Population health",
          "Cost analysis",
          "Outcome tracking"
        ],
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10"
      }
    ]
  };

  const healthcareTestimonials = {
    sectionTitle: "What Healthcare Leaders Say",
    description: "Discover how we've helped healthcare organizations transform their operations and improve patient care through innovative technology solutions.",
    testimonials: [
      {
        clientName: "Dr. Sarah Johnson",
        position: "Chief Medical Officer",
        company: "Metropolitan Healthcare",
        feedback: "The digital transformation journey with Astern has been remarkable. Their healthcare-specific expertise and HIPAA-compliant solutions have significantly improved our patient care delivery and operational efficiency.",
        rating: 5,
        image: "/testimonials/healthcare-1.jpg",
        logo: "/logos/metropolitan-healthcare.svg"
      },
      {
        clientName: "James Wilson",
        position: "IT Director",
        company: "Regional Care Network",
        feedback: "Their telemedicine platform has revolutionized how we deliver care to rural communities. The technical expertise and healthcare industry knowledge they brought to the project were invaluable.",
        rating: 5,
        image: "/testimonials/healthcare-2.jpg",
        logo: "/logos/regional-care.svg"
      },
      {
        clientName: "Dr. Emily Chen",
        position: "Head of Innovation",
        company: "HealthTech Solutions",
        feedback: "Astern's AI diagnostics solution has dramatically improved our accuracy and response times. Their understanding of healthcare workflows made the integration seamless.",
        rating: 5,
        image: "/testimonials/healthcare-3.jpg",
        logo: "/logos/healthtech-solutions.svg"
      },
      {
        clientName: "Michael Roberts",
        position: "Operations Director",
        company: "CareFirst Hospitals",
        feedback: "The patient engagement platform has transformed how we interact with our patients. We've seen significant improvements in satisfaction scores and appointment adherence.",
        rating: 5,
        image: "/testimonials/healthcare-4.jpg",
        logo: "/logos/carefirst.svg"
      }
    ]
  };

  const healthcareCTA = {
    title: "Transform Your Healthcare Operations",
    subtitle: "Ready to Get Started?",
    description: "Join leading healthcare providers who have already transformed their operations with our innovative solutions. Let's discuss how we can help you achieve your digital healthcare goals.",
    primaryButtonText: "Schedule a Consultation",
    primaryButtonLink: "/contact",
    secondaryButtonText: "View Pricing",
    secondaryButtonLink: "/pricing",
    points: [
      { text: "Free initial consultation" },
      { text: "Customized solution planning" },
      { text: "HIPAA compliance assessment" },
      { text: "ROI projection analysis" }
    ],
    gradient: {
      from: 'from-cyan-600/20',
      via: 'via-blue-600/20',
      to: 'to-purple-600/20'
    }
  };

  return (
    <div className="bg-gray-900">
      <IndustryOverview {...healthcareOverview} />
      <KeyIndustryChallenges {...healthcareChallenges} />
      <IndustrySolutions {...healthcareSolutions} />
      <IndustryTechnologies {...healthcareTechnologies} />
      <CaseStudies {...healthcareCaseStudies} />
      <Testimonials {...healthcareTestimonials} />
      <PartnershipBenefits {...partnershipBenefits} />
      <CallToAction {...healthcareCTA} />
    </div>
  );
};

export default HealthcarePage;
