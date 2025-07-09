import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import ServicesSection from "@/components/Services";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ConsultingProcessSection from "@/components/ProcessSection";
import TrustedBrand from "@/components/TrustedBrands";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <TrustedBrand/>
      {/* <ServicesSection/>
      <IndustriesSection/>
      <WhyChooseUsSection/>
      <ConsultingProcessSection/>
      <TestimonialsSection/> */}
    </div>
  );
}
