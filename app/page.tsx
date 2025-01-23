import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import ServicesSection from "@/components/Services";
import IndustriesSection from "@/components/IndustriesSection";

export default function Home() {
  return (
    <div>
    <HeroSection/>
    <ServicesSection/>
    <IndustriesSection/>
    </div>
  );
}
