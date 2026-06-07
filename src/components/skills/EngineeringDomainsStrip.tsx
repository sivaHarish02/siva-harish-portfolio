"use client";

import React from "react";
import { motion } from "framer-motion";

const domains = [
  "⚡ Backend Architecture",
  "⚡ Payment Systems",
  "⚡ Real-Time Applications",
  "⚡ Push Notifications",
  "⚡ Cloud Storage",
  "⚡ API Design",
  "⚡ Mobile Development",
  "⚡ Production Debugging",
];

export default function EngineeringDomainsStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-12 lg:mt-16 w-full bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-100 rounded-[1.5rem] p-6 sm:p-8 shadow-sm flex flex-col items-center text-center"
    >
      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
        Engineering Domains
      </h4>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
        {domains.map((domain, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-xl bg-white border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 cursor-default"
          >
            {domain}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
