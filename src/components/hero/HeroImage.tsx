import React from "react";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center animate-fade-in-up delay-200">
      {/* Abstract blurred background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[120%] bg-primary/20 blur-[80px] rounded-full pointer-events-none -z-10" />

      {/* Background brush texture effect */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 mix-blend-multiply">
        <div
          className="w-[120%] h-[120%] opacity-40"
          style={{
            background:
              "radial-gradient(circle, #8B5CF6 0%, #EDE5FF 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Image Card */}
      <div className="relative z-10 w-[280px] sm:w-[320px] h-[340px] sm:h-[400px] lg:w-[320px] lg:h-[420px] xl:w-[400px] xl:h-[520px] 2xl:w-[470px] 2xl:h-[600px] rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/60 border border-gray-100 mx-auto flex-shrink-0">
        <Image
          src="/profile.png"
          alt="SIVA HARISH - Backend & Flutter Developer"
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 340px"
          preload
        />

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Decorative arrow - top right */}
      <svg
        className="absolute -top-2 right-4 sm:right-2 lg:-right-0 w-6 h-6 text-gray-800 animate-float"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
      </svg>

      {/* Decorative arrow - bottom right */}
      <svg
        className="absolute bottom-8 -right-2 sm:-right-4 lg:-right-6 w-8 h-8 text-gray-600 animate-float delay-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14" />
        <path d="M19 12l-7 7-7-7" />
      </svg>

      {/* Dot decoration */}
      <div className="absolute top-1/4 -left-3 w-2 h-2 bg-primary rounded-full opacity-40 animate-pulse" />
      <div className="absolute bottom-1/3 -right-2 w-1.5 h-1.5 bg-primary-light rounded-full opacity-30 animate-pulse delay-300" />
    </div>
  );
}
