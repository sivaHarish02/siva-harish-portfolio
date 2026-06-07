"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const achievements = [
  {
    title: "150+",
    subtitle: "Production APIs",
    description: "Designed and maintained scalable backend services.",
  },
  {
    title: "15+",
    subtitle: "Applications Delivered",
    description: "Web, mobile, and business management systems.",
  },
  {
    title: "10+",
    subtitle: "Admin Panels",
    description: "Business dashboards and workflow automation.",
  },
  {
    title: "2+",
    subtitle: "Years Experience",
    description: "Production development and problem solving.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AchievementGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12"
    >
      {achievements.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className="p-5 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-200/40 transition-shadow hover:shadow-xl hover:shadow-[#6D5DFC]/10 flex flex-col gap-1"
        >
          <div className="flex items-baseline gap-2">
            <div className="text-3xl font-black text-gray-900 leading-none">
              {item.title}
            </div>
          </div>
          <p className="text-sm font-bold text-[#6D5DFC] mt-1">
            {item.subtitle}
          </p>
          <p className="text-xs text-gray-500 font-medium leading-relaxed mt-2">
            {item.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
