import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import WhatIDo from "./WhatIDo";
import StatsCards from "./StatsCards";
import TechStack from "./TechStack";
import BottomStats from "./BottomStats";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.02] blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative mx-auto w-full max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10 py-8 lg:py-14">
        {/* Main Hero Grid: Left Content | Center Image | Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px_280px] xl:grid-cols-[1fr_430px_320px] 2xl:grid-cols-[1fr_480px_340px] gap-10 lg:gap-6 xl:gap-8 2xl:gap-12 items-center lg:items-start">
          {/* Left - Hero Content */}
          <div className="flex items-center">
            <HeroContent />
          </div>

          {/* Center - Hero Image */}
          <div className="flex justify-center items-start pt-4 lg:pt-8 relative z-10">
            <HeroImage />
          </div>

          {/* Right - What I Do + Stats */}
          <div className="flex flex-col gap-4 relative z-20 w-full lg:w-[260px] xl:w-[300px] mx-auto lg:mx-0">
            <WhatIDo />
            <StatsCards />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 lg:mt-12 mb-8 border-t border-gray-100" />

        {/* Tech Stack */}
        <TechStack />

        {/* Bottom Stats */}
        <div className="mt-8">
          <BottomStats />
        </div>
      </div>
    </section>
  );
}
