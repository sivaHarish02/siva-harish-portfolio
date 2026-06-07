"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none">
      {/* Soft Purple Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#6D5DFC]/15 blur-[80px] rounded-full pointer-events-none -z-10" />

      {/* Main Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl shadow-[#6D5DFC]/10 border border-white/50 bg-white"
      >
        <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
          <Image
            src="/profile.png"
            alt="SIVA HARISH - Backend Engineer"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
          />
        </div>
      </motion.div>

      {/* Floating Card 1: Experience */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        animate={{ y: [0, -8, 0] }}
        // @ts-ignore - Framer motion type issue with animate options
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.5, delay: 0.3 },
          x: { duration: 0.5, delay: 0.3 },
        }}
        className="absolute top-12 -left-6 sm:-left-10 lg:-left-12 z-20"
      >
        <div className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-xl border border-white shadow-xl shadow-[#6D5DFC]/10 rounded-2xl">
          <span className="text-2xl">🚀</span>
          <div>
            <p className="text-sm font-bold text-gray-900 leading-tight">
              2+ Years
            </p>
            <p className="text-xs text-gray-500 font-medium leading-tight">
              Experience
            </p>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 2: APIs */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.5 }}
        animate={{ y: [0, 8, 0] }}
        // @ts-ignore
        transition={{
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          opacity: { duration: 0.5, delay: 0.5 },
          x: { duration: 0.5, delay: 0.5 },
        }}
        className="absolute bottom-16 -right-4 sm:-right-8 lg:-right-10 z-20"
      >
        <div className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-xl border border-white shadow-xl shadow-[#6D5DFC]/10 rounded-2xl">
          <span className="text-2xl">⚡</span>
          <div>
            <p className="text-sm font-bold text-gray-900 leading-tight">
              150+ APIs
            </p>
            <p className="text-xs text-gray-500 font-medium leading-tight">
              Developed
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
