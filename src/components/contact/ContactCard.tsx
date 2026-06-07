"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { LucideIcon, ArrowUpRight } from "lucide-react";

export interface ContactData {
  label: string;
  value: string;
  action: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}

interface ContactCardProps {
  data: ContactData;
  variants: Variants;
}

export default function ContactCard({ data, variants }: ContactCardProps) {
  const isDownload = data.action.endsWith(".pdf");

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <a
        href={data.action}
        target={data.action.startsWith("http") ? "_blank" : undefined}
        rel={data.action.startsWith("http") ? "noopener noreferrer" : undefined}
        download={isDownload}
        className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-md shadow-gray-200/40 transition-all hover:shadow-xl hover:shadow-[#6D5DFC]/10 hover:border-[#6D5DFC]/20 w-full"
      >
        <div className="flex items-center gap-4 min-w-0 flex-grow">
          {/* Icon */}
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${data.iconBg}`}
          >
            <data.icon className={`w-5 h-5 ${data.iconColor}`} />
          </div>

          {/* Info */}
          <div className="flex flex-col flex-grow min-w-0">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">
              {data.label}
            </span>
            <span className="text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-[#6D5DFC] transition-colors">
              {data.value}
            </span>
          </div>
        </div>

        {/* Action Icon */}
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 group-hover:bg-white group-hover:border-[#6D5DFC]/20 group-hover:shadow-sm transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#6D5DFC] transition-colors" />
        </div>
      </a>
    </motion.div>
  );
}
