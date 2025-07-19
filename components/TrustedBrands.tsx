'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

type Offer = {
  id: number
  image: string
  title: string
  description: string
  tag?: string
}

const offers: Offer[] = [
  {
    id: 1,
    image: '/OIP (1).webp',
    title: 'RAKSHA BANDHAN SALE',
    description: 'Raksha Bandhan Sale - Up To 50% OFF + Extra 15% OFF',
    tag: 'EXCLUSIVE',
  },
  {
    id: 2,
    image: '/OIP (2).webp',
    title: 'DOMAIN EXCLUSIVE',
    description: 'Get Domain 1st Year Only at Rs 89*',
  },
  {
    id: 3,
    image: '/OIP (3).webp',
    title: 'Up To 97% OFF',
    description: 'Udemy Coupon: Save Up to 97% on Best-Selling Courses!',
  },
  {
    id: 4,
    image: '/OIP (5).webp',
    title: 'FLIGHT DISCOUNTS',
    description: 'Book your flight tickets with up to ₹1,200 OFF',
    tag: 'LIMITED',
  },
  {
    id: 5,
    image: '/OIP (7).webp',
    title: 'MEGA SALE',
    description: 'Big Billion Days: Get gadgets & appliances at half price!',
    tag: 'HOT',
  },
]

const PopularOffersSlider = () => {
  return (
    <section className="py-10 px-6 md:px-10 lg:px-40 bg-gray-50">
      <motion.h2
        className="text-2xl font-bold mb-6 flex items-center gap-2"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Popular Offers of the Day
        <span className="h-1 w-8 bg-green-500 inline-block rounded"></span>
      </motion.h2>

      <div className="relative">
        {/* Custom Navigation */}
        <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
          <ChevronLeft className="h-10 w-10 text-gray-600 bg-white rounded-full shadow p-2 hover:bg-gray-100" />
        </div>
        <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
          <ChevronRight className="h-10 w-10 text-gray-600 bg-white rounded-full shadow p-2 hover:bg-gray-100" />
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-sm">{offer.title}</h3>
                    {offer.tag && (
                      <span className="text-xs px-2 py-0.5 bg-green-500 text-white rounded">
                        {offer.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{offer.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default PopularOffersSlider
