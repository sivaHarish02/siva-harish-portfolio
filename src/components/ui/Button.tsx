import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  download?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className = "",
  onClick,
  href,
  target,
  download,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]",
    outline:
      "bg-white text-gray-800 border border-gray-200 hover:border-primary hover:text-primary hover:shadow-md active:scale-[0.98]",
    ghost:
      "bg-transparent text-gray-600 hover:text-primary hover:bg-primary-50",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} download={download} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
