"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CreditCard, Database, Video, Bell } from "lucide-react";
import HighlightCard, { HighlightData } from "./HighlightCard";

const highlights: HighlightData[] = [
  {
    title: "Payment Reliability Engineering",
    icon: CreditCard,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    problem:
      "Successful UPI payments were not always creating orders because the flow depended on frontend confirmation APIs.",
    solution:
      "Implemented Razorpay webhook-driven backend verification and order processing.",
    impact:
      "Eliminated payment-success/order-failure scenarios and made order creation independent of app or network state.",
    tags: ["Razorpay", "Webhooks", "Node.js", "MySQL"],
  },
  {
    title: "UTF8MB4 Database Migration",
    icon: Database,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    problem:
      "Legacy database encoding caused issues with multilingual text, special characters, and emojis.",
    solution:
      "Migrated production database schemas and collations from Latin encoding to UTF8MB4.",
    impact:
      "Enabled full Unicode, multilingual, and emoji support while maintaining data integrity.",
    tags: ["MySQL", "UTF8MB4", "Migration", "Data Integrity"],
  },
  {
    title: "Real-Time Video Communication",
    icon: Video,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    problem:
      "Mobile and web video calling workflows faced signaling and connection stability issues.",
    solution:
      "Debugged WebRTC signaling, call lifecycle events, and cross-platform connection flows.",
    impact:
      "Improved video call stability and real-time communication reliability.",
    tags: ["WebRTC", "Flutter", "Node.js", "Real-Time"],
  },
  {
    title: "Notification Architecture",
    icon: Bell,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    problem:
      "Notification delivery failures and token lifecycle issues affected user communication.",
    solution:
      "Built scalable Firebase Cloud Messaging workflows with optimized token handling.",
    impact:
      "Improved push notification reliability across mobile applications.",
    tags: ["FCM", "Firebase", "Flutter", "Notifications"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HighlightsSection() {
  return (
    <section id="highlights" className="relative py-16 lg:py-24 overflow-hidden bg-white">
      <div className="relative mx-auto w-full max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm w-fit">
              <span className="text-sm">⚙️</span>
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Engineering Highlights
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
              Real Problems. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D5DFC] to-[#8B5CF6]">
                Reliable Engineering.
              </span>
            </h2>

            {/* Sub Heading */}
            <p className="text-lg sm:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mt-2">
              A showcase of production-level challenges I solved across payments, databases, notifications, real-time communication, and cloud workflows.
            </p>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 xl:gap-8"
        >
          {highlights.map((highlight, index) => (
            <HighlightCard key={index} data={highlight} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
