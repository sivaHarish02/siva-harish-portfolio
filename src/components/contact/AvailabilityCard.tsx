"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";

export default function AvailabilityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="p-6 sm:p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden group"
    >
      {/* Soft gradient background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D5DFC]/10 to-transparent rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

      {/* Status */}
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </div>
        <span className="text-sm font-bold text-gray-900 tracking-wide uppercase">
          Available for opportunities
        </span>
      </div>

      {/* Details Grid */}
      <div className="flex flex-col gap-5 relative z-10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-purple-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">
              Location
            </span>
            <span className="text-sm font-semibold text-gray-900">
              Coimbatore, Tamil Nadu, India
            </span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">
              Focus Areas
            </span>
            <span className="text-sm font-semibold text-gray-900 leading-relaxed">
              Backend Engineering • Flutter Development • Production Systems
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
