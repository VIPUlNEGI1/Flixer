"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const slides = [
  {
    id: 1,
    image: "https://via.placeholder.com/1200x400?text=Slide+1",
    title: "Explore the World",
    description: "Discover amazing destinations with us.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/1200x400?text=Slide+2",
    title: "Adventure Awaits",
    description: "Get ready for thrilling experiences.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/1200x400?text=Slide+3",
    title: "Travel in Style",
    description: "Luxury travel made simple.",
  },
]

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-64 object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="text-sm md:text-base">{slide.description}</p>
              </div>
            </div>
            <div
              className="absolute inset-0 bg-green-600 bg-opacity-0 hover:bg-opacity-30 transition-all duration-300"
              onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-green-200" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}