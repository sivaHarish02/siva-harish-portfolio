"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";

export interface ExperienceData {
  role: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
}

interface ExperienceCardProps {
  data: ExperienceData;
  variants: Variants;
  alignment?: "left" | "right";
}

export default function ExperienceCard({
  data,
  variants,
  alignment = "left",
}: ExperienceCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -4 }}
      className={`flex flex-col p-6 sm:p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/40 transition-all hover:shadow-2xl hover:shadow-[#6D5DFC]/10 relative overflow-hidden group ${
        alignment === "right" ? "lg:text-left" : "lg:text-right"
      } text-left`}
    >
      {/* Soft gradient background accent */}
      <div
        className={`absolute top-0 ${
          alignment === "right" ? "right-0 -mr-16" : "left-0 -ml-16 lg:right-0 lg:left-auto lg:-mr-16"
        } w-48 h-48 bg-gradient-to-br from-[#6D5DFC]/5 to-transparent rounded-full blur-3xl -mt-16 pointer-events-none transition-opacity opacity-50 group-hover:opacity-100`}
      />

      {/* Header */}
      <div
        className={`mb-6 relative z-10 flex flex-col ${
          alignment === "left" ? "lg:items-end" : "lg:items-start"
        } items-start`}
      >
        <span className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-[11px] font-bold uppercase tracking-wider mb-3">
          {data.duration}
        </span>
        <h3 className="text-2xl font-black text-gray-900 leading-tight">
          {data.role}
        </h3>
        <p className="text-lg font-bold text-[#6D5DFC] mt-1">{data.company}</p>
      </div>

      {/* Description */}
      <div className="mb-6 relative z-10">
        <p className="text-sm text-gray-600 leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Responsibilities */}
      <div className="mb-8 relative z-10">
        <ul
          className={`flex flex-col gap-2.5 ${
            alignment === "left" ? "lg:items-end" : "lg:items-start"
          } items-start`}
        >
          {data.responsibilities.map((task, i) => (
            <li
              key={i}
              className={`flex items-start gap-2.5 max-w-md ${
                alignment === "left" ? "lg:flex-row-reverse text-left lg:text-right" : "text-left"
              }`}
            >
              <ChevronRight
                className={`w-4 h-4 text-[#6D5DFC] mt-0.5 flex-shrink-0 ${
                  alignment === "left" ? "lg:rotate-180" : ""
                }`}
              />
              <span className="text-sm text-gray-600 leading-relaxed">
                {task}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div
        className={`mt-auto pt-6 border-t border-gray-100 flex flex-wrap gap-2 relative z-10 ${
          alignment === "left" ? "lg:justify-end" : "lg:justify-start"
        } justify-start`}
      >
        {data.techStack.map((tech, i) => (
          <span
            key={i}
            className="px-2.5 py-1 rounded-lg bg-gray-50 text-gray-600 text-xs font-semibold border border-gray-100"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
