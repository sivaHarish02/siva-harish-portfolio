"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceTimeline from "./ExperienceTimeline";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-16 lg:py-24 overflow-hidden bg-white">
      <div className="relative mx-auto w-full max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
              <span className="text-sm">💼</span>
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Experience
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
              My Professional <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D5DFC] to-[#8B5CF6]">
                Journey
              </span>
            </h2>

            {/* Sub Heading */}
            <p className="text-lg sm:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mt-2">
              A timeline of my growth from backend development to building full production-ready mobile and backend systems.
            </p>
          </motion.div>
        </div>

        {/* Timeline Content */}
        <ExperienceTimeline />

      </div>
    </section>
  );
}
