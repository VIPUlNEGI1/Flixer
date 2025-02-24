'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  SiMicrosoft, 
  SiGoogle, 
  SiAmazon, 
  SiMeta, 
  SiApple,
  SiIbm, 
  SiOracle, 
  SiTesla, 
  SiSamsung, 
  SiIntel 
} from "react-icons/si";

type Brand = {
  id: number;
  name: string;
  Icon: any;
  alt: string;
};

const row1: Brand[] = [
  {
    id: 1,
    name: "Microsoft",
    Icon: SiMicrosoft,
    alt: "Microsoft"
  },
  {
    id: 2,
    name: "Google",
    Icon: SiGoogle,
    alt: "Google"
  },
  {
    id: 3,
    name: "Amazon",
    Icon: SiAmazon,
    alt: "Amazon"
  },
  {
    id: 4,
    name: "Meta",
    Icon: SiMeta,
    alt: "Meta"
  },
  {
    id: 5,
    name: "Apple",
    Icon: SiApple,
    alt: "Apple"
  }
];

const row2: Brand[] = [
  {
    id: 6,
    name: "IBM",
    Icon: SiIbm,
    alt: "IBM"
  },
  {
    id: 7,
    name: "Oracle",
    Icon: SiOracle,
    alt: "Oracle"
  },
  {
    id: 8,
    name: "Tesla",
    Icon: SiTesla,
    alt: "Tesla"
  },
  {
    id: 9,
    name: "Samsung",
    Icon: SiSamsung,
    alt: "Samsung"
  },
  {
    id: 10,
    name: "Intel",
    Icon: SiIntel,
    alt: "Intel"
  }
];

const SliderRow = ({ brands, reverse = false }: { 
  brands: Brand[], 
  reverse?: boolean
}) => {
  return (
    <div className="relative flex overflow-hidden">
      <div className="slider-track inline-flex gap-6 sm:gap-8 md:gap-12 hover:[animation-play-state:paused]">
        <div className={`inline-flex gap-6 sm:gap-8 md:gap-12 ${reverse ? "animate-slide-reverse" : "animate-slide"}`}>
          {[...brands, ...brands, ...brands, ...brands].map((brand, idx) => (
            <motion.div
              key={`${brand.id}-${idx}`}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative flex-shrink-0 w-[140px] sm:w-[180px] md:w-[250px]"
            >
              <div className="relative h-16 sm:h-20 md:h-24 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 transition-all duration-300 hover:from-white/15 hover:to-white/10 flex items-center justify-center group">
                <brand.Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <motion.p 
                className="text-xs sm:text-sm text-gray-400 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {brand.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TrustedBrands = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative py-12 sm:py-16 md:py-20 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -top-20 -right-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute w-[400px] h-[400px] -bottom-20 -left-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-lg text-white mb-4 sm:mb-6">
              Trusted by Global Leaders
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Partnering with the Best
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Join leading companies who trust us with their digital transformation
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12 md:space-y-16 py-4 sm:py-6 md:py-8 overflow-hidden">
          <SliderRow brands={row1} />
          <SliderRow brands={row2} reverse />
        </div>

        <div className="absolute left-0 top-0 w-20 sm:w-32 md:w-40 h-full bg-gradient-to-r from-gray-900 via-gray-900/95 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 sm:w-32 md:w-40 h-full bg-gradient-to-l from-gray-900 via-gray-900/95 to-transparent z-10" />
      </div>
    </div>
  );
};

export default TrustedBrands;
