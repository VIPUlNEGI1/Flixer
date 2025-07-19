'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function TrendingOffers() {
  const deals = [
    {
      id: 1,
      timeLeft: "14 S QT",
      title: "XYXX Crew IntelliFresh Cotton Stretch Trunks",
      price: "Rs. 200",
      originalPrice: "Rs 999",
      image: "/OIP (2).webp" // Replace with your image path
    },
    {
      id: 2,
      timeLeft: "B3 S QT",
      title: "Flipkart Aroma Flip Bluetooth Speaker",
      price: "Rs. 589",
      originalPrice: "Rs 3499",
      image: "/OIP (7).webp" // Replace with your image path
    },
    {
      id: 3,
      timeLeft: "23 S QT",
      title: "Amazon pTron Bassbuds Astra In-Ear TWS Earbuds",
      price: "Rs. 749",
      originalPrice: "Rs 2899",
      image: "/OIP.webp" // Replace with your image path
    },
    {
      id: 4,
      timeLeft: "20 S QT",
      title: "AJIO TEAMSPIRIT Women Graphic Print Boxy F1 Crew-Neck T-Shirt",
      price: "Rs. 150",
      originalPrice: "Rs 499",
      image: "/d17aec155219311.635044eb97da5.jpg" // Replace with your image path
    }
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-sm">
      {/* Skyscanner Offer with Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 rounded-lg overflow-hidden relative h-48"
      >
        <Image
          src="/banner-1752733175901.jpg" // Replace with your banner image path
          alt="Skyscanner Offer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Skyscanner</h2>
          <p className="text-lg mb-4">Save 30% on average when comparing flights.</p>
          <Button 
            variant="outline" 
            className="bg-white text-blue-600 hover:bg-blue-50 font-medium w-fit"
          >
            Explore now
          </Button>
        </div>
      </motion.div>

      {/* Deals of the Day */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Deals Of The Day</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 mb-3 rounded-md overflow-hidden">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 text-xs font-medium bg-red-100 text-red-800 px-2 py-1 rounded z-10">
                  {deal.timeLeft}
                </span>
              </div>
              <div className="flex justify-between items-start">
                <div className="text-right ml-auto">
                  <span className="text-sm line-through text-gray-500 mr-2">
                    {deal.originalPrice}
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    {deal.price}
                  </span>
                </div>
              </div>
              <h4 className="text-base font-medium mt-2 text-gray-800 line-clamp-2">
                {deal.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center mt-6"
      >
        <Button variant="ghost" className="text-blue-600 hover:bg-blue-50">
          View More Deals
        </Button>
      </motion.div>
    </div>
  )
}