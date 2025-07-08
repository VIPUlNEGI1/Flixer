import * as React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

interface CardProps {
  avatarSrc?: string; // URL or path to avatar image
  avatarInitial?: string; // Initial if no image (e.g., "A")
  avatarBgColor?: string; // Background color for initial avatar
  rating?: number; // Number of stars (default 5)
  text: string; // Testimonial text
  alignRight?: boolean; // Whether to align right with ml-auto
}

export const Card = ({
  avatarSrc,
  avatarInitial,
  avatarBgColor = "bg-gray-600",
  rating = 5,
  text,
  alignRight = false,
}: CardProps) => {
  return (
    <div className={`bg-transparent backdrop-blur-sm border-gray-500 border-2 rounded-lg p-4 max-w-sm ${alignRight ? "ml-auto" : ""}`}>
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-10 h-10 rounded-full ${avatarBgColor} overflow-hidden flex items-center justify-center text-white font-bold`}>
          {avatarSrc ? (
            <Image
              src={avatarSrc}
              alt="User avatar"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          ) : avatarInitial ? (
            avatarInitial
          ) : null}
        </div>
        <div className="flex text-yellow-400">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-white text-sm">{text}</p>
    </div>
  );
};