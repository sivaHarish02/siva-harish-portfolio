"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface SkillCategoryData {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
}

interface SkillCategoryCardProps {
  data: SkillCategoryData;
  variants: Variants;
}

export default function SkillCategoryCard({
  data,
  variants,
}: SkillCategoryCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -4 }}
      className="flex flex-col p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white border border-gray-100 shadow-lg shadow-gray-200/30 transition-all hover:shadow-xl hover:shadow-[#6D5DFC]/10 relative group overflow-hidden h-full"
    >
      {/* Background soft pulse */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D5DFC]/5 to-transparent rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none transition-opacity opacity-50 group-hover:opacity-100" />

      {/* Header */}
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6D5DFC] transition-colors duration-300">
          <data.icon className="w-6 h-6 text-[#6D5DFC] group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
          {data.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed mb-6 relative z-10 flex-grow">
        {data.description}
      </p>

      {/* Skills Badges */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {data.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1.5 rounded-full bg-gray-50 text-gray-700 text-xs font-semibold border border-gray-100 transition-all hover:bg-[#6D5DFC] hover:text-white hover:border-[#6D5DFC] cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
