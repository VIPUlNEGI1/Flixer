"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Category Types
const categories = [
  "Most Used",
  "Travel",
  "Recharge",
  "Fashion",
  "Food",
  "Electronics",
];

// Offers Data (Coupons)
const offers = [
  {
    id: 1,
    tag: "GRABON EXCLUSIVE",
    brand: "UltaHost",
    title: "Exclusive Offer - Flat 40% OFF + Extra 10% OFF On All Hosting Plans",
    logo: "/OIP (1).webp",
    linkText: "See All Ultahost Offers",
    category: "Electronics",
  },
  // ... (keep your other offer objects the same)
];

export default function OffersSection() {
  const [selectedCategory, setSelectedCategory] = useState("Most Used");
  const [showMobileCategories, setShowMobileCategories] = useState(false);

  const filteredOffers =
    selectedCategory === "Most Used"
      ? offers
      : offers.filter((offer) => offer.category === selectedCategory);

  return (
    <div className="flex flex-col items-center py-6 md:py-10 bg-[#f3f7fa] px-4 sm:px-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
        Today's Top Coupons & Offers
      </h2>
      
      {/* Mobile Category Selector */}
      <div className="w-full md:hidden mb-4">
        <button
          onClick={() => setShowMobileCategories(!showMobileCategories)}
          className="w-full flex justify-between items-center px-4 py-3 bg-white rounded-lg shadow"
        >
          <span>{selectedCategory}</span>
          <ChevronRight 
            className={`transition-transform ${showMobileCategories ? 'rotate-90' : ''}`} 
            size={18} 
          />
        </button>
        
        {showMobileCategories && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 bg-white rounded-lg shadow overflow-hidden"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`w-full text-left px-4 py-3 ${
                  selectedCategory === cat
                    ? "bg-green-100 text-green-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowMobileCategories(false);
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Category Sidebar - Desktop */}
        <div className="hidden md:block w-full md:w-1/5 bg-white rounded-lg shadow p-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg w-full text-left ${
                selectedCategory === cat
                  ? "bg-green-100 text-green-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              <span className="w-5 h-5 rounded-full bg-gray-200" />
              {cat}
            </button>
          ))}
        </div>

        {/* Offers Content */}
        <div className="w-full md:w-4/5">
          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden mb-4 md:mb-6"
          >
            <Image
              src="/banner-1752733175901.jpg"
              alt="Uber Ad"
              width={1200}
              height={200}
              className="rounded-lg object-cover w-full h-32 md:h-48"
              priority
            />
          </motion.div>

          {/* Coupons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {filteredOffers.map((offer) => (
              <motion.div
                key={offer.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-3 md:p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="text-xs font-bold text-gray-500 mb-1">{offer.tag}</div>
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={offer.logo}
                    alt={offer.brand}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <span className="text-sm font-semibold">{offer.brand}</span>
                </div>
                <p className="text-xs md:text-sm text-gray-700 mb-2 line-clamp-2">
                  {offer.title}
                </p>
                <button className="text-blue-600 text-xs md:text-sm flex items-center gap-1">
                  {offer.linkText} <ChevronRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Show More */}
          <div className="flex justify-center mt-6">
            <button className="bg-white px-4 md:px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 text-sm md:text-base">
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}