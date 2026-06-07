import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "primary" | "neutral";
  dot?: boolean;
  className?: string;
}

export default function Badge({
  children,
  variant = "success",
  dot = false,
  className = "",
}: BadgeProps) {
  const variantStyles = {
    success: "bg-white text-gray-700 border border-gray-200",
    primary: "bg-primary-50 text-primary border border-primary-100",
    neutral: "bg-gray-50 text-gray-600 border border-gray-200",
  };

  const dotColors = {
    success: "bg-green-500",
    primary: "bg-primary",
    neutral: "bg-gray-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`w-2 h-2 rounded-full ${dotColors[variant]} animate-pulse-dot`}
        />
      )}
      {children}
    </span>
  );
}
