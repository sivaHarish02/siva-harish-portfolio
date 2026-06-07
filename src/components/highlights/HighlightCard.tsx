"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface HighlightData {
  title: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
}

interface HighlightCardProps {
  data: HighlightData;
  variants: Variants;
}

export default function HighlightCard({ data, variants }: HighlightCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -4 }}
      className="flex flex-col p-6 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-gray-200/40 transition-all hover:shadow-2xl hover:shadow-[#6D5DFC]/10 relative overflow-hidden group h-full"
    >
      {/* Soft gradient background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D5DFC]/5 to-transparent rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none transition-opacity opacity-50 group-hover:opacity-100" />

      {/* Header */}
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${data.iconBg}`}
        >
          <data.icon className={`w-6 h-6 ${data.iconColor}`} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 leading-tight">
          {data.title}
        </h3>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 flex-grow relative z-10">
        <div>
          <span className="inline-block px-2 py-0.5 rounded-md bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-wider mb-1.5">
            Problem
          </span>
          <p className="text-sm text-gray-600 leading-relaxed">
            {data.problem}
          </p>
        </div>

        <div>
          <span className="inline-block px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-1.5">
            Solution
          </span>
          <p className="text-sm text-gray-600 leading-relaxed">
            {data.solution}
          </p>
        </div>

        <div>
          <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider mb-1.5">
            Impact
          </span>
          <p className="text-sm text-gray-600 leading-relaxed font-medium">
            {data.impact}
          </p>
        </div>
      </div>

      {/* Footer Tags */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-2 relative z-10">
        {data.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2.5 py-1 rounded-lg bg-gray-50 text-gray-600 text-xs font-semibold border border-gray-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
