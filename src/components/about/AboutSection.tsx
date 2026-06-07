"use client";

import React from "react";
import { motion } from "framer-motion";
import AboutImage from "./AboutImage";
import Timeline from "./Timeline";
import AchievementGrid from "./AchievementGrid";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 lg:py-24 overflow-hidden bg-gray-50/50">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent via-[#6D5DFC]/[0.01] to-transparent pointer-events-none" />

      <div className="relative mx-auto w-full max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm w-fit">
              <span className="text-sm">👨‍💻</span>
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                About Me
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
              From Backend Developer <br className="hidden sm:block" />
              to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D5DFC] to-[#8B5CF6]">
                Backend Engineer
              </span>
            </h2>

            {/* Sub Heading */}
            <p className="text-lg sm:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mt-2">
              Building scalable APIs, payment systems, real-time applications, and mobile experiences that solve real-world business problems.
            </p>
          </motion.div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] 2xl:grid-cols-[500px_1fr] gap-12 lg:gap-16 xl:gap-24 items-start">
          
          {/* Left Side: Image */}
          <div className="flex justify-center lg:justify-start lg:sticky lg:top-32">
            <AboutImage />
          </div>

          {/* Right Side: Timeline & Achievements */}
          <div className="flex flex-col">
            <Timeline />
            <AchievementGrid />
          </div>

        </div>
      </div>
    </section>
  );
}
