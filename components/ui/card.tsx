import * as React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-transparent backdrop-blur-sm rounded-lg p-4 max-w-sm ${className}`}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col space-y-2 ${className}`}
        {...props}
      />
    );
  }
);
CardContent.displayName = "CardContent";