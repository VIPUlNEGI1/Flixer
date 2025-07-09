import { Button } from "@/components/ui/button"
import { Star, MessageCircle, Users, MapPin, Briefcase } from "lucide-react"
import Image from "next/image"
import { Card } from "./services/Herocards"

export default function Component() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/voyager-blog-2.webp" alt="Mountain adventure background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Book Your
                <br />
                Trip to <span className="text-green-400">Ladakh</span>
              </h1>

              <div className="space-y-2">
                <p className="text-green-400 text-lg md:text-xl font-medium">
                  <span className="text-green-400">Wander</span> | Travel |{" "}
                  <span className="text-green-400">Connect</span> | Repeat
                </p>
                <p className="text-white text-lg">Where Adventure meets Community</p>
                <p className="text-green-400 text-sm">#wravelerforlife</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <div className="flex gap-2 bg-white rounded-full p-2 max-w-md">
                <input
                  type="text"
                  placeholder="Type Location... (min. 3"
                  className="border-0 bg-transparent flex-1 text-gray-700 placeholder:text-gray-500 focus:outline-none px-4 py-2"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-r-3xl rounded-l-">Search</Button>
              </div>
              {/* Green Arrow */}
              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
                <svg width="60" height="40" viewBox="0 0 60 40" className="text-green-400">
                  <path d="M10 20 Q30 5 50 20" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M45 15 L50 20 L45 25" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Content - Testimonials */}
          <div className="space-y-4">
    {/* Testimonials Section */}
          <div className="testimonial-container">
                   <div className="testimonial-scroll">
                     <div className="space-y-4">
                       {/* Testimonial 1 */}
                       <div className="space-y-4">
                         <Card
                           avatarSrc="/placeholder.svg?height=40&width=40"
                           text="I recently did a trip to Leh Ladakh with JustWravel team, and boy, was it an experience for a lifetime!"
                           alignRight
                         />
                         {/* Optionally duplicate others for smoothness */}
                       </div>
                       {/* Testimonial 2 */}
                      <div className="space-y-4">
                         <Card
                           avatarSrc="/placeholder.svg?height=40&width=40"
                           text="I recently did a trip to Leh Ladakh with JustWravel team, and boy, was it an experience for a lifetime!"
                           alignRight
                         />
                         {/* Optionally duplicate others for smoothness */}
                       </div>
                       {/* Testimonial 3 */}
                        <div className="space-y-4">
                         <Card
                           avatarSrc="/placeholder.svg?height=40&width=40"
                           text="I recently did a trip to Leh Ladakh with JustWravel team, and boy, was it an experience for a lifetime!"
                           alignRight
                         />
                         {/* Optionally duplicate others for smoothness */}
                       </div>
                       {/* Testimonial 4 */}
                       <div className="space-y-4">
                         <Card
                           avatarSrc="/placeholder.svg?height=40&width=40"
                           text="I recently did a trip to Leh Ladakh with JustWravel team, and boy, was it an experience for a lifetime!"
                           alignRight
                         />
                         {/* Optionally duplicate others for smoothness */}
                       </div>
                       {/* Testimonial 5 */}
                       <div className="space-y-4">
                         <Card
                           avatarSrc="/placeholder.svg?height=40&width=40"
                           text="I recently did a trip to Leh Ladakh with JustWravel team, and boy, was it an experience for a lifetime!"
                           alignRight
                         />
                         {/* Optionally duplicate others for smoothness */}
                       </div>
                       {/* Duplicate for seamless looping */}
                       <div className="space-y-4">
                         <Card
                           avatarSrc="/placeholder.svg?height=40&width=40"
                           text="I recently did a trip to Leh Ladakh with JustWravel team, and boy, was it an experience for a lifetime!"
                           alignRight
                         />
                         {/* Optionally duplicate others for smoothness */}
                       </div>
                     </div>
                   </div>
                 </div>
        </div>
</div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-700">
          <div className="flex items-center gap-3 text-white">
            <MessageCircle className="w-8 h-8" />
            <div>
              <div className="text-2xl font-bold">8700+</div>
              <div className="text-sm text-gray-300">Reviews</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-white">
            <Users className="w-8 h-8" />
            <div>
              <div className="text-2xl font-bold">56541+</div>
              <div className="text-sm text-gray-300">Satisfied Travelers</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-white">
            <MapPin className="w-8 h-8" />
            <div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-gray-300">Destinations</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-white">
            <Briefcase className="w-8 h-8" />
            <div>
              <div className="text-2xl font-bold">8 Years+</div>
              <div className="text-sm text-gray-300">Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-20">
        <Button className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 p-0">
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </div>
    </section>
  )
}
