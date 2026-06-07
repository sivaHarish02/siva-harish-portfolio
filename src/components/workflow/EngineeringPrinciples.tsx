"use client";

import React from "react";
import { motion } from "framer-motion";

const principles = [
  "✓ Reliability First",
  "✓ Scalable Architecture",
  "✓ Clean APIs",
  "✓ Production Focused",
  "✓ Problem Solving",
  "✓ Performance Optimization",
  "✓ Maintainable Code",
  "✓ User-Centric Thinking",
];

export default function EngineeringPrinciples() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      className="mt-16 w-full flex flex-col items-center text-center"
    >
      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
        Engineering Principles
      </h4>
      
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
        {principles.map((principle, index) => (
          <span
            key={index}
            className="px-5 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#6D5DFC]/10 text-sm font-bold text-[#6D5DFC] shadow-sm transition-all hover:shadow-md hover:bg-[#6D5DFC] hover:text-white hover:-translate-y-0.5 cursor-default"
          >
            {principle}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
