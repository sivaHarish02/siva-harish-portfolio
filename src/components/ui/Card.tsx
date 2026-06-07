import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  padding = "md",
  hover = false,
}: CardProps) {
  const paddingStyles = {
    none: "",
    sm: "p-4",
    md: "p-5",
    lg: "p-6",
  };

  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm ${paddingStyles[padding]} ${
        hover
          ? "hover:shadow-lg hover:border-primary-100 hover:-translate-y-0.5 transition-all duration-300"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
