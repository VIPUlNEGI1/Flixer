import { 
  Home, 
  Backpack, 
  PhoneCall, 
  Heart, 
  Users, 
  MapPin, 
  Calendar, 
  Mountain, 
  Camera, 
  Compass 
} from "lucide-react"

export const navigationConfig = {
  mainNav: [
    {
      id: "home",
      label: "Home",
      href: "/",
      icon: Home,
    },
    {
      id: "Categoryes",
      label: "Category",
      href: "/Categoryes",
      icon: Backpack,
    },
  ],
  contactButton: {
    id: "contact",
    label: "Contact Us",
    href: "/contact",
    icon: PhoneCall,
  },
  specialButtons: [
    {
      id: "Login",
      label: "Login",
      href: "/Auth/Regestrationpage",
      icon: Heart,
    },
    {
      id: "Profile",
      label: "MapPin",
      href: "/Categoryes",
      icon: Users,
    }
  ],
  quickDestinations: [
    { id: "ladakh", label: "Ladakh", href: "/destinations/ladakh" },
    { id: "spiti", label: "Spiti Valley", href: "/destinations/spiti" },
    { id: "bhutan", label: "Bhutan", href: "/destinations/bhutan" },
    { id: "nepal", label: "Nepal", href: "/destinations/nepal" },
    { id: "himachal", label: "Himachal Pradesh", href: "/destinations/himachal" },
    { id: "uttarakhand", label: "Uttarakhand", href: "/destinations/uttarakhand" },
  ],
  popularCategories: [
    { id: "weekend-trips", label: "Weekend Trips", href: "/trips/weekend", icon: Calendar },
    { id: "adventure", label: "Adventure", href: "/trips/adventure", icon: Mountain },
    { id: "cultural", label: "Cultural Tours", href: "/trips/cultural", icon: Camera },
    { id: "trekking", label: "Trekking", href: "/trips/trekking", icon: Compass },
  ],
};

// Explicitly export the properties for direct access
export const { quickDestinations, popularCategories } = navigationConfig;