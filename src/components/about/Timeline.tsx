"use client";

import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2024",
    role: "Backend Developer",
    description:
      "Started building production APIs, database architectures, payment systems, and backend workflows using Node.js and MySQL.",
  },
  {
    year: "2025",
    role: "Flutter Development",
    description:
      "Expanded into Flutter development, cross-platform applications, Firebase integrations, push notifications, and deep linking.",
  },
  {
    year: "Today",
    role: "Backend Engineer",
    description:
      "Designing scalable backend systems, payment architectures, cloud storage solutions, and real-time communication platforms.",
    active: true,
  },
];

export default function Timeline() {
  return (
    <div className="relative pl-6 sm:pl-8 py-4">
      {/* Vertical Line */}
      <div className="absolute top-0 bottom-0 left-[11px] sm:left-[15px] w-[2px] bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full bg-gradient-to-b from-[#6D5DFC]/20 via-[#6D5DFC] to-[#6D5DFC]"
        />
      </div>

      <div className="space-y-10">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div
              className={`absolute -left-[30px] sm:-left-[38px] top-1 w-4 h-4 rounded-full border-[3px] border-white shadow-sm flex items-center justify-center ${
                milestone.active ? "bg-[#6D5DFC]" : "bg-gray-300"
              }`}
            >
              {milestone.active && (
                <div className="w-full h-full rounded-full bg-[#6D5DFC] animate-ping opacity-50 absolute" />
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-bold text-[#6D5DFC] font-mono tracking-tight">
                  {milestone.year}
                </span>
                <span className="text-sm sm:text-base font-bold text-gray-900">
                  {milestone.role}
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                {milestone.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
