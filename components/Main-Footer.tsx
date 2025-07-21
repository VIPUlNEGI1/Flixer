import {
  Home,
  MapPin,
  Calendar,
  PhoneCall,
  Users,
  Star,
  Heart,
  Compass,
  Globe,
  Building,
  UserCheck,
  Gift,
  Info,
  Link2,
  Newspaper,
  Briefcase,
  CreditCard,
  Mail,
  Shield,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { Button } from './ui/button'

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
              <h3 className="text-2xl font-bold text-gray-900">ShopEase</h3>
            </div>
            <p className="text-sm text-gray-600">Your one-stop destination for exclusive deals and offers</p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <PhoneCall className="h-4 w-4 text-blue-500" />
                <a href="tel:+91 9149050623" className="text-sm hover:text-blue-600 transition-colors duration-200">
                  +91 9149050623
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <a href="mailto:contact@shopease.com" className="text-sm hover:text-blue-600 transition-colors duration-200">
                  contact@shopease.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="font-medium text-gray-900 mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                {[
                  { name: "Facebook", icon: "facebook", url: "#" },
                  { name: "Instagram", icon: "instagram", url: "#" },
                  { name: "Twitter", icon: "twitter", url: "#" },
                  { name: "YouTube", icon: "youtube", url: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                    aria-label={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    {/* Replace with actual icons */}
                    <span className="text-lg">{social.icon === "facebook" ? "f" : 
                      social.icon === "instagram" ? "ig" : 
                      social.icon === "twitter" ? "t" : "yt"}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-bold text-lg text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/trending-offers", label: "Trending Offers" },
                { href: "/daily-deals", label: "Daily Deals" },
                { href: "/coupons", label: "Coupons" },
                { href: "/flash-sale", label: "Flash Sale" },
                { href: "/seasonal-sale", label: "Seasonal Sale" },
                { href: "/clearance", label: "Clearance Sale" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-blue-600 hover:underline transition-all duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Customer Support */}
          <div className="space-y-5">
            <h4 className="font-bold text-lg text-gray-900">Customer Support</h4>
            <ul className="space-y-3">
              {[
                { href: "/contact-us", label: "Contact Us" },
                { href: "/faq", label: "FAQs" },
                { href: "/shipping", label: "Shipping Policy" },
                { href: "/returns", label: "Returns & Refunds" },
                { href: "/size-guide", label: "Size Guide" },
                { href: "/product-care", label: "Product Care" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-blue-600 hover:underline transition-all duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-5">
            <h4 className="font-bold text-lg text-gray-900">Get Exclusive Offers</h4>
            <p className="text-sm text-gray-600">Subscribe to our newsletter for the latest deals and discounts</p>
            
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Subscribe
              </Button>
            </form>

            {/* App Download */}
            <div className="pt-4">
              <h5 className="text-sm font-medium mb-2">Download Our App</h5>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <span className="mr-2">📱</span>
                  App Store
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <span className="mr-2">🤖</span>
                  Play Store
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <Compass className="h-5 w-5 text-blue-500" />
            <p className="text-sm text-gray-600">© 2023 ShopEase. All rights reserved.</p>
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