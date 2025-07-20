'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AdvertisementOffer() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const offers = [
    {
      id: 1,
      title: "UP TO",
      discount: "$500 OFF",
      description: "On bus tickets",
      code: "GRAB500",
      image: "/R.jpeg",
      bgColor: "bg-blue-600"
    },
    {
      id: 2,
      title: "FLAT",
      discount: "50% OFF",
      description: "On first 3 rides",
      code: "NEWUSER50",
      image: "/OIP (1).webp",
      bgColor: "bg-green-600"
    },
    {
      id: 3,
      title: "UP TO",
      discount: "$300 OFF",
      description: "On train bookings",
      code: "TRAIN300",
      image: "/OIP.webp",
      bgColor: "bg-purple-600"
    }
  ]

  const cards = [
    {
      id: 1,
      title: "Free Bus Cancellation",
      icon: "🚌",
      description: "Cancel your bus tickets anytime with no additional fees.",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      borderColor: "border-amber-400",
      bgImage: "/autumn-sale-75-percent-off-label-template-banner-with-colorful-leaves-illustration-vector.jpg"
    },
    {
      id: 2,
      title: "Exclusive Offer",
      subtitle: "Flat 50% Off on First 3 Rides",
      cta: "GRAB NOW",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      borderColor: "border-amber-400",
      bgImage: "/d17aec155219311.635044eb97da5.jpg"
    },
    {
      id: 3,
      title: "India's Leading Marketplace",
      description: "Explore top coupons and deals for all your travel needs.",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      borderColor: "border-amber-400",
      bgImage: "/R.jpeg"
    }
  ]

  // Auto-rotate offers
  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % offers.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isHovered, offers.length])

  // Auto-rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex(prev => (prev + 1) % cards.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [cards.length])

  const cardContainerVariants: Variants = {
    initial: { 
      opacity: 0, 
      x: 50,
      rotateY: 10,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      x: -50,
      rotateY: -10,
      scale: 0.95,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  }

  const cardItemVariants: Variants = {
    initial: { 
      opacity: 0, 
      y: 20,
      filter: 'blur(2px)'
    },
    animate: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      } 
    }
  }

  return (
    <section className="relative   w-full bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden pt-16 mb-0 pb-0">
      <div className="container mx-auto h-full flex flex-col lg:flex-row px-4 gap-0 md:gap-0">
        {/* Left Side - Offer Slider */}
        <div 
          className="w-[100%] h-[200px] sm:h-[260px] relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 overflow-hidden border rounded">
            <AnimatePresence>
              {offers.map((offer, index) => (
                <motion.div
                  key={offer.id}
                  className={`absolute inset-0 ${offer.bgColor} flex items-center`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ 
                    opacity: index === currentSlide ? 1 : 0,
                    scale: index === currentSlide ? 1 : 0.98
                  }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={offer.image}
                    alt={offer.description}
                    fill
                    className="object-cover mix-blend-multiply opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-0" />
                  <div className="relative z-10 p-6 sm:p-8 text-white">
                    <motion.div
                      variants={cardItemVariants}
                      initial="initial"
                      animate="animate"
                      className="text-base sm:text-lg md:text-xl font-bold tracking-tight"
                    >
                      {offer.title}
                    </motion.div>
                    <motion.div
                      variants={cardItemVariants}
                      initial="initial"
                      animate="animate"
                      className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight my-2"
                    >
                      {offer.discount}
                    </motion.div>
                    <motion.div
                      variants={cardItemVariants}
                      initial="initial"
                      animate="animate"
                      className="text-sm sm:text-base md:text-lg font-medium mb-4 sm:mb-6"
                    >
                      {offer.description}
                    </motion.div>
                    <motion.div
                      variants={cardItemVariants}
                      initial="initial"
                      animate="animate"
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                    >
                      <div className="bg-white/30 backdrop-blur-sm text-black px-3 sm:px-4 py-2 sm:py-3 rounded-[2px] font-mono font-bold tracking-tight text-sm sm:text-base">
                        USE CODE<br/>{offer.code}
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-700 hover:to-red-600 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold rounded-[2px] shadow-md"
                        size="lg"
                      >
                        BOOK NOW
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}