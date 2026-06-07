"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Terminal } from "lucide-react";

export interface ProjectData {
  title: string;
  category: string;
  description: string;
  role: string;
  techStack: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  data: ProjectData;
  variants: Variants;
}

export default function ProjectCard({ data, variants }: ProjectCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -4 }}
      className="flex flex-col p-6 sm:p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/40 transition-all hover:shadow-2xl hover:shadow-[#6D5DFC]/10 relative overflow-hidden group h-full"
    >
      {/* Soft gradient background accent */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#6D5DFC]/5 to-transparent rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-opacity opacity-50 group-hover:opacity-100" />

      {/* Header */}
      <div className="mb-6 relative z-10">
        <span className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-[11px] font-bold uppercase tracking-wider mb-3">
          {data.category}
        </span>
        <h3 className="text-2xl font-black text-gray-900 leading-tight">
          {data.title}
        </h3>
      </div>

      {/* Description & Role */}
      <div className="mb-6 relative z-10 flex-grow">
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {data.description}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            My Role:
          </span>
          <span className="text-sm font-semibold text-gray-900">
            {data.role}
          </span>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-6 relative z-10">
        <div className="flex flex-wrap gap-2">
          {data.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-lg bg-gray-50 text-gray-600 text-xs font-semibold border border-gray-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="mb-8 relative z-10">
        <ul className="flex flex-col gap-2.5">
          {data.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#6D5DFC] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600 leading-relaxed">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer / Actions */}
      <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-3 relative z-10">
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#6D5DFC] hover:bg-[#5b4be8] text-white text-sm font-semibold rounded-xl transition-colors">
          View Case Study
          <ArrowUpRight className="w-4 h-4" />
        </button>
        <button 
          aria-label="View source code"
          className="flex items-center justify-center w-10 h-10 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl transition-colors border border-gray-200"
        >
          <Terminal className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
