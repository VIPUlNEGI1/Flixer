import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { Suspense } from "react"
import ServicesSection from "@/components/Services";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ConsultingProcessSection from "@/components/ProcessSection";
import TrustedBrand from "@/components/TrustedBrands";

export default function Home() {
  return (
    <div className="bg-[#fffcfc]">
      <HeroSection/>
      
      
      
      <Suspense fallback={<div>Loading...</div>}>
      <ServicesSection/>
      <TrustedBrand/>
    </Suspense>
      <IndustriesSection/>
      {/* <WhyChooseUsSection/>
      <ConsultingProcessSection/>
      <TestimonialsSection/> */}
    </div>
  );
}
