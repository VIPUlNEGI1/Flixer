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
  {
    id: 2,
    tag: "UP TO 85% OFF",
    brand: "Bummer",
    title: "Exclusive Offer: Get Up To 70% OFF + Extra 15% OFF On Your Orders",
    logo: "/OIP (3).webp",
    linkText: "See All Bummer Offers",
    category: "Fashion",
  },
  {
    id: 3,
    tag: "GRABON EXCLUSIVE",
    brand: "FlixBus",
    title: "✨ Enjoy Bus Journey & Get Flat Rs 100 Discount On Bookings🚌",
    logo: "/OIP (2).webp",
    linkText: "See All FlixBus Offers",
    category: "Travel",
  },
  {
    id: 4,
    tag: "Rs.400 CASHBACK",
    brand: "Mamaearth",
    title: "Mamaearth Special Offer - Flat Rs 400 Cashback | All Users",
    logo: "/OIP (1).webp",
    linkText: "See All Mamaearth Offers",
    category: "Food",
  },
  {
    id: 5,
    tag: "🔥 Unmissable 80% Off!",
    brand: "Healthkart",
    title: "Healthkart 💪 Sitewide Products - Up To 70% OFF + Extra 10% OFF😍",
    logo: "/voyager-blog-2.webp",
    linkText: "See All Healthkart Offers",
    category: "Food",
  },
  {
    id: 6,
    tag: "Make Memories In The U.S.",
    brand: "Etihad Airways",
    title:
      "Etihad US Customs Clearance Sale: Fastest & Simplest Way to Travel To U.S. Immigration In Abudhabi",
    logo: "/OIP (3).webp",
    linkText: "See All Etihad Airways Offers",
    category: "Travel",
  },
];

export default function OffersSection() {
  const [selectedCategory, setSelectedCategory] = useState("Most Used");

  const filteredOffers =
    selectedCategory === "Most Used"
      ? offers
      : offers.filter((offer) => offer.category === selectedCategory);

  return (
    <div className="flex flex-col items-center py-10 bg-[#f3f7fa]">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Today's Top Coupons & Offers
      </h2>
      <div className="w-full max-w-7xl flex gap-6 mt-6">
        {/* Category Sidebar */}
        <div className="w-1/5 bg-white rounded-lg shadow p-4">
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
        <div className="w-4/5">
          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden mb-6"
          >
            <Image
              src="/banner-1752733175901.jpg"
              alt="Uber Ad"
              width={1200}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
          </motion.div>

          {/* Coupons Grid */}
          <div className="grid grid-cols-3 gap-4">
            {filteredOffers.map((offer) => (
              <motion.div
                key={offer.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
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
                <p className="text-sm text-gray-700 mb-2">{offer.title}</p>
                <button className="text-blue-600 text-sm flex items-center gap-1">
                  {offer.linkText} <ChevronRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Show More */}
          <div className="flex justify-center mt-6">
            <button className="bg-white px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100">
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}