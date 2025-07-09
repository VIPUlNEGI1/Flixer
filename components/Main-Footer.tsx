import {
  Home,
  MapPin,
  Calendar,
  Backpack,
  Mountain,
  Camera,
  PhoneCall,
  Plane,
  Car,
  Hotel,
  Users,
  Star,
  Heart,
  Compass,
  Globe,
  TreePine,
  Waves,
  Building,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-300">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <Compass className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Gnet</h3>
            </div>
            <p className="text-sm text-gray-600 italic">A quick, travelx comment</p>
            
            <address className="text-sm not-italic text-gray-700 space-y-2">
              <div className="flex items-start space-x-2">
                <Building className="h-4 w-4 text-blue-500 mt-0.5" />
                <span>8–42, 2nd Floor, Tower - B. The<br />
                Ceremonium Block, A Sector 62, Inside,<br />
                Utter Products 2030/1</span>
              </div>
            </address>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <PhoneCall className="h-4 w-4 text-blue-500" />
                <a href="tel:+91889457631" className="text-sm hover:text-blue-600 transition-colors duration-200">+91-889 457 631</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <a href="mailto:contact@justwravel.com" className="text-sm hover:text-blue-600 transition-colors duration-200">contact@justwravel.com</a>
              </div>
            </div>
          </div>
          
          {/* Company Links */}
          <div className="space-y-5">
            <h4 className="font-bold text-lg text-gray-900 flex items-center space-x-2">
              <Building className="h-5 w-5 text-blue-500" />
              <span>Company</span>
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/travel-gift-cards", label: "Travel Gift Cards", icon: <Gift className="h-4 w-4" /> },
                { href: "/about-us", label: "About Us", icon: <Info className="h-4 w-4" /> },
                { href: "/connect-us", label: "Connect Us", icon: <Link2 className="h-4 w-4" /> },
                { href: "/blogs", label: "Our Blogs", icon: <Newspaper className="h-4 w-4" /> },
                { href: "/careers", label: "Career With Us", icon: <Briefcase className="h-4 w-4" /> },
                { href: "/payment-policy", label: "Payment Policy", icon: <CreditCard className="h-4 w-4" /> },
                { href: "/ambassador-program", label: "Compats Ambassador Program", icon: <UserCheck className="h-4 w-4" /> },
                { href: "/newsletter", label: "Newsletter", icon: <Mail className="h-4 w-4" /> },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm flex items-center space-x-2 group">
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{item.icon}</span>
                    <span className="group-hover:text-blue-600 group-hover:underline transition-all duration-200">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Group Tours */}
          <div className="space-y-5">
            <h4 className="font-bold text-lg text-gray-900 flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span>Group Tours</span>
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/trips/backpacking", label: "Backpacking Trips", icon: <Backpack className="h-4 w-4" /> },
                { href: "/trips/treks", label: "Treks", icon: <Mountain className="h-4 w-4" /> },
                { href: "/trips/biking", label: "Biking Trips", icon: <Bike className="h-4 w-4" /> },
                { href: "/trips/upcoming", label: "Upcoming Trips", icon: <Calendar className="h-4 w-4" /> },
                { href: "/trips/weekend", label: "Long Weekend Trips", icon: <CalendarDays className="h-4 w-4" /> },
                { href: "/trips/customized", label: "Customized Trips", icon: <Settings className="h-4 w-4" /> },
                { href: "/trips/corporate", label: "Corporate Tours", icon: <Building2 className="h-4 w-4" /> },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm flex items-center space-x-2 group">
                    <span className="group-hover:rotate-12 transition-transform duration-200">{item.icon}</span>
                    <span className="group-hover:text-blue-600 group-hover:underline transition-all duration-200">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Other Tours */}
          <div className="space-y-5">
            <h4 className="font-bold text-lg text-gray-900 flex items-center space-x-2">
              <Globe className="h-5 w-5 text-blue-500" />
              <span>Explore More</span>
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/trips/domestic", label: "Domestic Tours", icon: <MapPin className="h-4 w-4" /> },
                { href: "/trips/international", label: "International Gateways", icon: <Plane className="h-4 w-4" /> },
                { href: "/trips/honeymoon", label: "Honeymoon Trips", icon: <Heart className="h-4 w-4" /> },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm flex items-center space-x-2 group">
                    <span className="group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                    <span className="group-hover:text-blue-600 group-hover:underline transition-all duration-200">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <Compass className="h-5 w-5 text-blue-500" />
            <p className="text-sm text-gray-600">© 2015–2025 JustWravel Pvt. Ltd.</p>
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              href="/privacy-policy" 
              className="text-sm hover:text-blue-600 hover:underline transition-all duration-200 flex items-center space-x-1"
            >
              <Shield className="h-4 w-4" />
              <span>Privacy Policy</span>
            </Link>
            <Link 
              href="/terms-conditions" 
              className="text-sm hover:text-blue-600 hover:underline transition-all duration-200 flex items-center space-x-1"
            >
              <FileText className="h-4 w-4" />
              <span>Terms & Conditions</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// You'll need to import these additional icons from lucide-react
import {
  Gift,
  Info,
  Link2,
  Newspaper,
  Briefcase,
  CreditCard,
  Mail,
  Bike,
  CalendarDays,
  Settings,
  Building2,
  Shield,
  FileText,
} from "lucide-react";

