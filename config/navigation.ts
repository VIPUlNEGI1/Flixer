import { 
  Home, Users, Settings, Briefcase, 
  Building2, FileText, PhoneCall,
  Cloud, Globe, Brain, Shield, 
  Smartphone, Database, Bot, Infinity
} from 'lucide-react';

export const navigationConfig = {
  mainNav: [
    {
      id: 'home',
      label: 'Home',
      href: '/',
      icon: Home
    },
    {
      id: 'about',
      label: 'About Us',
      href: '/about',
      icon: Users
    },
    {
      id: 'services',
      label: 'Services',
      href: '/',
      icon: Settings,
      subMenu: [
        { id: 'cloud', label: 'Cloud Solutions', href: '/cloud', icon: Cloud },
        { id: 'web', label: 'Web Development', href: '/webdev', icon: Globe },
        { id: 'digital', label: 'Digital Strategy', href: '/digital-strategy', icon: Brain },
        { id: 'cyber', label: 'Cybersecurity', href: '/services/security', icon: Shield },
        { id: 'mobile', label: 'Mobile Solutions', href: '/services/mobile', icon: Smartphone },
        { id: 'data', label: 'Data Analytics', href: '/services/analytics', icon: Database },
        { id: 'ai', label: 'AI Solutions', href: '/services/ai', icon: Bot },
        { id: 'devops', label: 'DevOps Services', href: '/services/devops' , icon: Infinity }
      ]
    },
    {
      id: 'industries',
      label: 'Industries',
      href: '/industries',
      icon: Building2,
      subMenu: [
        { id: 'healthcare', label: 'Healthcare', href: '/industries/healthcare' },
        { id: 'finance', label: 'Finance', href: '/industries/finance' },
        { id: 'retail', label: 'Retail', href: '/industries/retail' },
        { id: 'education', label: 'Education', href: '/industries/education' },
        { id: 'manufacturing', label: 'Manufacturing', href: '/industries/manufacturing' }
      ]
    },
    {
      id: 'case-studies',
      label: 'Case Studies',
      href: '/case-studies',
      icon: FileText
    }
  ],
  contactButton: {
    id: 'contact',
    label: 'Contact Us',
    href: '/contact',
    icon: PhoneCall
  }
};
