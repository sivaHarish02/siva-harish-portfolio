"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface WorkflowStepData {
  title: string;
  icon: LucideIcon;
  description: string;
  tag: string;
}

interface WorkflowCardProps {
  data: WorkflowStepData;
  index: number;
  variants: Variants;
}

export default function WorkflowCard({ data, index, variants }: WorkflowCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -4 }}
      className="relative flex flex-col p-6 rounded-[1.5rem] bg-white border border-gray-100 shadow-lg shadow-gray-200/30 transition-all hover:shadow-xl hover:shadow-[#6D5DFC]/10 group h-full z-10"
    >
      {/* Soft Hover Bloom */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#6D5DFC]/10 to-transparent rounded-full blur-2xl -mr-6 -mt-6 pointer-events-none transition-opacity opacity-0 group-hover:opacity-100" />

      {/* Header Area */}
      <div className="flex items-start justify-between mb-5 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50 flex items-center justify-center flex-shrink-0 group-hover:from-[#6D5DFC] group-hover:to-[#5b4be8] transition-colors duration-300 shadow-sm border border-purple-100 group-hover:border-transparent">
          <data.icon className="w-5 h-5 text-[#6D5DFC] group-hover:text-white transition-colors duration-300" />
        </div>
        
        {/* Step Indicator & Tag */}
        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
            Step {index + 1}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 text-[10px] font-bold tracking-wider uppercase border border-gray-100">
            {data.tag}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex-grow flex flex-col">
        <h3 className="text-lg font-black text-gray-900 leading-tight mb-2 group-hover:text-[#6D5DFC] transition-colors">
          {data.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {data.description}
        </p>
      </div>
    </motion.div>
  );
}
