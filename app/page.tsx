import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import ServicesSection from "@/components/Services";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <div>
    <HeroSection/>
    <ServicesSection/>
    <IndustriesSection/>
    <WhyChooseUsSection/>
    <TestimonialsSection/>
    
    </div>
  );
}
