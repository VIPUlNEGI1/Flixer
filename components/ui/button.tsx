import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
      outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
      ghost: "text-gray-900 hover:bg-gray-100",
    };
    
    const sizes = {
      default: "px-4 py-2 text-base",
      sm: "px-3 py-1 text-sm",
      lg: "px-6 py-3 text-lg",
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`.trim();

    return (
      <button
        ref={ref}
        className={combinedClasses}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";