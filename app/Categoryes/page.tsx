


'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
// import { Button } from "/components/ui/button"
import { Star, MessageCircle, Users, MapPin, Briefcase, ChevronRight, ChevronLeft, Search, Heart, Share2, Bookmark, Plus } from "lucide-react"
import Image from "next/image"
import { Button } from 'components/ui/button'

interface SocialPost {
  id: number
  username: string
  avatar: string
  location: string
  images: string[]
  likes: number
  comments: number
  caption: string
  timestamp: string
}

export default function TravelSocialSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [currentPostIndex, setCurrentPostIndex] = useState(0)
  const [likedPosts, setLikedPosts] = useState<number[]>([])
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  // Using placeholder images from online sources
  const slides = [
    {
      id: 1,
      title: "Explore Hidden Gems in",
      highlight: "Ladakh",
      image: "/OIP (3).webp",
      tagline: "Join our community of adventure seekers",
      cta: "See Posts"
    },
    {
      id: 2,
      title: "Discover Local Secrets in",
      highlight: "Goa",
      image: "/OIP (2).webp",
      tagline: "Beachfront properties and nightlife spots",
      cta: "View Stories"
    },
    {
      id: 3,
      title: "Mountain Retreats in",
      highlight: "Himachal",
      image: "/OIP (3).webp",
      tagline: "Cozy cabins with breathtaking views",
      cta: "Explore Now"
    }
  ]

  const socialPosts: SocialPost[] = [
    {
      id: 1,
      username: "travel_with_me",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      location: "Leh, Ladakh",
      images: [
        "/OIP (3).webp",
        "/OIP (3).webp",
        "/OIP (6).webp"
      ],
      likes: 1243,
      comments: 89,
      caption: "Just arrived in Leh! The mountain views are absolutely breathtaking. Staying at this amazing boutique hotel recommended by @wravelcommunity #LadakhDiaries",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      username: "beachbum",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      location: "Palolem, Goa",
      images: [
        "/OIP.webp",
        "/voyager-blog-2.webp"
      ],
      likes: 892,
      comments: 45,
      caption: "Sunrise views from my beach hut! Found this hidden gem through Wravel's community recommendations. The sound of waves is so peaceful 🌊 #GoaVibes",
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      username: "mountain_lover",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      location: "Manali, Himachal",
      images: [
        "/d17aec155219311.635044eb97da5.jpg",
        "/fc5981df68cc3b8004c00918094ade2f.jpg",
        "/voyager-blog-2.webp",
        "/oyager-blog-2.webp"
      ],
      likes: 1567,
      comments: 112,
      caption: "Cozy cabin in the woods with the most amazing view! Perfect place to disconnect and recharge. Booked through @wravelcommunity #HimachalRetreat",
      timestamp: "1 day ago"
    }
  ]

  // Auto slide rotation
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide(prev => (prev + 1) % slides.length)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentSlide(index)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextPostImage = () => {
    setCurrentPostIndex(prev => (prev + 1) % socialPosts[currentSlide].images.length)
  }

  const prevPostImage = () => {
    setCurrentPostIndex(prev => (prev - 1 + socialPosts[currentSlide].images.length) % socialPosts[currentSlide].images.length)
  }

  const toggleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId))
    } else {
      setLikedPosts([...likedPosts, postId])
    }
  }

  return (
    <section 
      ref={containerRef}
      className="relative h-[600px] overflow-hidden bg-white"
    >
      {/* Background Slideshow */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: yBg }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                {slides[currentSlide].title.split(' ').map((word, i) => (
                  <span key={i} className="inline-block mr-2">
                    {word === slides[currentSlide].highlight ? (
                      <motion.span 
                        className="text-amber-400"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                      >
                        {word}
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                      >
                        {word}
                      </motion.span>
                    )}
                  </span>
                ))}
              </motion.h1>

              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-amber-400 text-lg md:text-xl font-medium">
                  <span className="text-amber-400">Discover</span> | Share |{" "}
                  <span className="text-amber-400">Connect</span> | Travel
                </p>
                <p className="text-white text-lg">{slides[currentSlide].tagline}</p>
                <p className="text-amber-400 text-sm">#travelcommunity</p>
              </motion.div>
            </div>

            {/* Search Bar */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex gap-2 bg-white rounded-full p-2 max-w-md shadow-lg">
                <Search className="ml-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search destinations or hotels..."
                  className="border-0 bg-transparent flex-1 text-gray-700 placeholder:text-gray-500 focus:outline-none px-2 py-2"
                />
                <Button className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white px-6 rounded-full">
                  Search
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Social Post Slider */}
          <div className="hidden lg:block">
            <motion.div 
              className="relative h-[500px] bg-white rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <AnimatePresence mode="wait">
                {socialPosts.map((post, index) => (
                  index === currentSlide && (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex flex-col"
                    >
                      {/* Post Header */}
                      <div className="flex items-center p-4 border-b">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400">
                          <Image 
                            src={post.avatar}
                            alt={post.username}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <h3 className="font-bold text-gray-900">{post.username}</h3>
                          <p className="text-xs text-gray-500">{post.location}</p>
                        </div>
                        <button className="ml-auto text-gray-500 hover:text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="12" cy="5" r="1"></circle>
                            <circle cx="12" cy="19" r="1"></circle>
                          </svg>
                        </button>
                      </div>

                      {/* Image Slider */}
                      <div className="relative flex-1 bg-gray-100">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentPostIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={post.images[currentPostIndex]}
                              alt={`Post by ${post.username}`}
                              fill
                              className="object-cover"
                            />
                          </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        {post.images.length > 1 && (
                          <>
                            <button 
                              onClick={prevPostImage}
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all hover:scale-110 z-10"
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <button 
                              onClick={nextPostImage}
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all hover:scale-110 z-10"
                            >
                              <ChevronRight size={20} />
                            </button>
                          </>
                        )}

                        {/* Image Counter */}
                        {post.images.length > 1 && (
                          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                            {post.images.map((_, idx) => (
                              <div 
                                key={idx}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  idx === currentPostIndex ? 'bg-white w-4' : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Post Actions */}
                      <div className="p-4">
                        <div className="flex items-center gap-4 mb-3">
                          <button 
                            onClick={() => toggleLike(post.id)}
                            className="text-2xl"
                          >
                            {likedPosts.includes(post.id) ? (
                              <Heart className="fill-red-500 text-red-500" />
                            ) : (
                              <Heart className="text-gray-700 hover:text-red-500" />
                            )}
                          </button>
                          <button className="text-gray-700 hover:text-gray-900">
                            <MessageCircle />
                          </button>
                          <button className="text-gray-700 hover:text-gray-900">
                            <Share2 />
                          </button>
                          <button className="ml-auto text-gray-700 hover:text-gray-900">
                            <Bookmark />
                          </button>
                        </div>

                        <div className="text-sm font-bold text-gray-900 mb-1">
                          {post.likes + (likedPosts.includes(post.id) ? 1 : 0)} likes
                        </div>

                        <p className="text-gray-900 mb-2">
                          <span className="font-bold">{post.username}</span> {post.caption}
                        </p>

                        <p className="text-xs text-gray-500">{post.timestamp}</p>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center lg:justify-start gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-amber-400 w-6' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="hidden lg:flex justify-between absolute left-0 right-0 top-1/2 -translate-y-1/2 px-4">
          <button 
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Statistics - Removed to fit the reduced height */}
      </div>

      {/* Floating Action Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-20 flex gap-3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button 
            className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 p-0 shadow-xl hover:shadow-2xl transition-all"
          >
            <Plus className="w-6 h-6 text-white" />
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button 
            className="w-14 h-14 rounded-full bg-gradient-to-br from-black to-gray-800 hover:from-gray-800 hover:to-black p-0 shadow-xl hover:shadow-2xl transition-all"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}