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
  BookOpen,
  GraduationCap,
  Users,
  Brain,
  LineChart,
  Globe,
  Award,
  Clock,
  TrendingUp,
  Shield,
  Database,
  Layout,
  VideoIcon,
  MessagesSquare,
  ClipboardList,
  Laptop
} from 'lucide-react';

const EducationPage = () => {
  const educationOverview = {
    badge: "Education Technology",
    title: "Digital Education Innovation",
    subtitle: "Transforming Learning Through Technology",
    description: "In today's digital age, education technology is revolutionizing how we teach and learn. We help educational institutions create engaging, accessible, and effective learning experiences.",
    statistics: [
      { value: "$342B", label: "Global EdTech Market Value" },
      { value: "89%", label: "Digital Learning Adoption" },
      { value: "4.8x", label: "Increase in Online Learning" },
      { value: "95%", label: "Student Engagement" }
    ],
    keyPoints: [
      "Interactive learning platforms",
      "Virtual classrooms",
      "Learning analytics",
      "Student engagement tools",
      "Administrative automation"
    ],
    ctaText: "Transform Your Institution",
    backgroundGradientFrom: "from-blue-500/30",
    backgroundGradientTo: "to-purple-500/30"
  };

  const educationChallenges = {
    sectionTitle: "Key Education Industry Challenges",
    description: "Educational institutions face unique challenges in the digital era. We help address these critical issues with innovative technology solutions.",
    challenges: [
      {
        title: "Remote Learning",
        description: "Delivering effective education in virtual and hybrid environments.",
        icon: <Laptop className="w-6 h-6 text-blue-400" />,
        solution: "Comprehensive virtual learning platforms with interactive features."
      },
      {
        title: "Student Engagement",
        description: "Maintaining high levels of engagement in digital learning environments.",
        icon: <Users className="w-6 h-6 text-blue-400" />,
        solution: "Interactive content and gamified learning experiences."
      },
      {
        title: "Learning Analytics",
        description: "Tracking and improving student performance and learning outcomes.",
        icon: <LineChart className="w-6 h-6 text-blue-400" />,
        solution: "Advanced analytics platform for performance tracking and insights."
      },
      {
        title: "Content Management",
        description: "Managing and delivering educational content across multiple platforms.",
        icon: <Database className="w-6 h-6 text-blue-400" />,
        solution: "Centralized content management system with multi-platform delivery."
      },
      {
        title: "Assessment & Feedback",
        description: "Implementing effective online assessment and feedback systems.",
        icon: <ClipboardList className="w-6 h-6 text-blue-400" />,
        solution: "Automated assessment tools with detailed feedback mechanisms."
      },
      {
        title: "Global Access",
        description: "Providing accessible education to students worldwide.",
        icon: <Globe className="w-6 h-6 text-blue-400" />,
        solution: "Cloud-based learning platforms with multilingual support."
      }
    ]
  };

  const educationSolutions = {
    sectionTitle: "Our Education Solutions",
    description: "We provide comprehensive digital solutions tailored to address the unique challenges faced by educational institutions.",
    solutions: [
      {
        title: "Virtual Learning Platform",
        description: "Create engaging online learning experiences with our comprehensive platform.",
        icon: <BookOpen className="w-6 h-6 text-blue-400" />,
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10",
        features: [
          "Interactive virtual classrooms",
          "Real-time collaboration tools",
          "Content management system",
          "Assessment tools",
          "Progress tracking"
        ],
        ctaText: "Explore Platform",
        ctaLink: "/solutions/virtual-learning"
      },
      {
        title: "Student Analytics Suite",
        description: "Gain insights into student performance and engagement.",
        icon: <Brain className="w-6 h-6 text-purple-400" />,
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10",
        features: [
          "Performance analytics",
          "Engagement tracking",
          "Predictive insights",
          "Custom reporting",
          "Early warning system"
        ],
        ctaText: "Discover Analytics",
        ctaLink: "/solutions/student-analytics"
      },
      {
        title: "Interactive Content System",
        description: "Create and deliver engaging educational content.",
        icon: <Layout className="w-6 h-6 text-emerald-400" />,
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10",
        features: [
          "Interactive multimedia",
          "Content authoring tools",
          "Resource library",
          "Mobile optimization",
          "Accessibility features"
        ],
        ctaText: "View Features",
        ctaLink: "/solutions/interactive-content"
      },
      {
        title: "Communication Hub",
        description: "Streamline communication between students, teachers, and parents.",
        icon: <MessagesSquare className="w-6 h-6 text-amber-400" />,
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10",
        features: [
          "Instant messaging",
          "Video conferencing",
          "Discussion forums",
          "Parent portal",
          "Announcement system"
        ],
        ctaText: "Learn More",
        ctaLink: "/solutions/communication"
      }
    ]
  };

  const educationTechnologies = {
    sectionTitle: "Education Technologies We Leverage",
    description: "We utilize cutting-edge technologies specifically designed for modern educational institutions.",
    categories: ["Learning Management", "Content Creation", "Analytics", "Collaboration"],
    technologies: [
      {
        name: "Canvas LMS",
        description: "Leading learning management system for comprehensive education delivery",
        icon: "/tech/canvas.svg",
        category: "Learning Management",
        features: [
          "Course management",
          "Assignment handling",
          "Grade tracking",
          "Student progress monitoring"
        ],
        gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10"
      },
      {
        name: "Articulate 360",
        description: "Advanced content creation suite for interactive learning materials",
        icon: "/tech/articulate.svg",
        category: "Content Creation",
        features: [
          "Interactive courses",
          "Assessment creation",
          "Mobile learning",
          "Accessibility compliance"
        ],
        gradient: "bg-gradient-to-br from-purple-600/10 to-pink-600/10"
      },
      {
        name: "Learning Analytics",
        description: "Comprehensive analytics platform for educational insights",
        icon: "/tech/analytics.svg",
        category: "Analytics",
        features: [
          "Performance tracking",
          "Engagement analysis",
          "Outcome measurement",
          "Predictive insights"
        ],
        gradient: "bg-gradient-to-br from-emerald-600/10 to-teal-600/10"
      },
      {
        name: "Microsoft Teams",
        description: "Integrated collaboration platform for education",
        icon: "/tech/teams.svg",
        category: "Collaboration",
        features: [
          "Virtual classrooms",
          "File sharing",
          "Team collaboration",
          "Video conferencing"
        ],
        gradient: "bg-gradient-to-br from-amber-600/10 to-yellow-600/10"
      }
    ]
  };

  const educationTestimonials = {
    sectionTitle: "What Education Leaders Say",
    description: "Hear from educational institutions that have transformed their teaching and learning experiences with our solutions.",
    testimonials: [
      {
        clientName: "Dr. Emily Parker",
        position: "Dean of Digital Learning",
        company: "Global University",
        feedback: "The virtual learning platform has transformed how we deliver education. The engagement levels and learning outcomes have exceeded our expectations.",
        rating: 5,
        image: "/testimonials/education-1.jpg",
        logo: "/logos/global-university.svg"
      },
      {
        clientName: "Prof. James Wilson",
        position: "Head of Technology",
        company: "International School District",
        feedback: "The analytics suite has given us unprecedented insights into student performance and engagement. We can now intervene early and ensure student success.",
        rating: 5,
        image: "/testimonials/education-2.jpg",
        logo: "/logos/isd.svg"
      },
      {
        clientName: "Sarah Thompson",
        position: "Director of E-Learning",
        company: "Tech Academy",
        feedback: "The interactive content system has revolutionized our content creation process. Our teachers can now create engaging, multimedia-rich lessons effortlessly.",
        rating: 5,
        image: "/testimonials/education-3.jpg",
        logo: "/logos/tech-academy.svg"
      }
    ]
  };

  const educationCaseStudies = {
    sectionTitle: "Education Success Stories",
    description: "Discover how we've helped educational institutions transform their teaching and learning experiences.",
    caseStudies: [
      {
        title: "Digital Transformation of University",
        clientName: "Metropolitan University",
        description: "Complete digital transformation of traditional university operations to hybrid learning model.",
        challenge: "Transitioning from traditional classroom-based learning to a hybrid model while maintaining educational quality.",
        solution: "Implemented comprehensive virtual learning platform with analytics and engagement tools.",
        results: [
          { metric: "Student Engagement", value: "+75%" },
          { metric: "Course Completion", value: "+40%" },
          { metric: "Cost Reduction", value: "35%" },
          { metric: "Student Satisfaction", value: "92%" }
        ],
        image: "/case-studies/education-1.jpg",
        tags: ["Virtual Learning", "Analytics", "Student Engagement", "Digital Transformation"],
        link: "/case-studies/metropolitan-university"
      },
      {
        title: "K-12 Learning Platform Implementation",
        clientName: "District School System",
        description: "Implementation of district-wide digital learning platform for K-12 schools.",
        challenge: "Creating consistent, engaging learning experiences across multiple schools and grade levels.",
        solution: "Deployed unified learning platform with customized content and analytics.",
        results: [
          { metric: "Teacher Efficiency", value: "+60%" },
          { metric: "Parent Engagement", value: "+85%" },
          { metric: "Learning Outcomes", value: "+45%" },
          { metric: "Resource Utilization", value: "+70%" }
        ],
        image: "/case-studies/education-2.jpg",
        tags: ["K-12 Education", "Learning Platform", "Analytics", "Parent Engagement"],
        link: "/case-studies/district-schools"
      }
    ]
  };

  const educationCTA = {
    title: "Transform Your Educational Institution",
    subtitle: "Ready to Innovate?",
    description: "Join leading educational institutions who have already transformed their teaching and learning experiences with our innovative solutions.",
    primaryButtonText: "Schedule a Demo",
    primaryButtonLink: "/contact",
    secondaryButtonText: "View Solutions",
    secondaryButtonLink: "/solutions/education",
    points: [
      { text: "Free consultation" },
      { text: "Custom solution design" },
      { text: "Implementation roadmap" },
      { text: "ROI assessment" }
    ],
    gradient: {
      from: 'from-blue-600/20',
      via: 'via-purple-600/20',
      to: 'to-pink-600/20'
    }
  };

  const educationPartnershipBenefits = {
    sectionTitle: "Benefits of Partnering with Us",
    description: "Choose a technology partner that understands the unique challenges of the education sector.",
    benefits: [
      {
        title: "Education Expertise",
        description: "Deep understanding of educational technology and pedagogical best practices.",
        icon: <Award className="w-6 h-6 text-blue-400" />,
        stats: [
          { value: "12+", label: "Years in EdTech" },
          { value: "200+", label: "Institutions Served" }
        ]
      },
      {
        title: "Fast Implementation",
        description: "Quick deployment with minimal disruption to learning.",
        icon: <Clock className="w-6 h-6 text-purple-400" />,
        stats: [
          { value: "45%", label: "Faster Deployment" },
          { value: "99.9%", label: "Platform Uptime" }
        ]
      },
      {
        title: "Proven Results",
        description: "Track record of improving learning outcomes.",
        icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
        stats: [
          { value: "40%", label: "Better Outcomes" },
          { value: "85%", label: "User Satisfaction" }
        ]
      },
      {
        title: "Comprehensive Support",
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
      <IndustryOverview {...educationOverview} />
      <KeyIndustryChallenges {...educationChallenges} />
      <IndustrySolutions {...educationSolutions} />
      <IndustryTechnologies {...educationTechnologies} />
      <CaseStudies {...educationCaseStudies} />
      <Testimonials {...educationTestimonials} />
      <PartnershipBenefits {...educationPartnershipBenefits} />
      <CallToAction {...educationCTA} />
    </div>
  );
};

export default EducationPage;
