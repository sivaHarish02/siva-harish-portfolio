"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import ProjectCard, { ProjectData } from "./ProjectCard";

const projects: ProjectData[] = [
  {
    title: "Virtual 2 Live Platform",
    category: "Real-Time Communication Platform",
    description:
      "A mobile and web platform with video calling, chat, notifications, deep linking, and event-based user workflows.",
    role: "Backend & Flutter Developer",
    techStack: ["Flutter", "Node.js", "MySQL", "Firebase", "WebRTC"],
    highlights: [
      "Real-time video calling workflow",
      "Chat and push notification system",
      "Deep linking and app routing",
      "Mobile and web platform support",
    ],
  },
  {
    title: "Ovantica Payment Workflow",
    category: "Payment Reliability System",
    description:
      "A backend payment workflow built to solve payment-success/order-failure issues using webhook-based architecture.",
    role: "Backend Developer",
    techStack: ["Node.js", "MySQL", "Razorpay", "Webhooks"],
    highlights: [
      "Razorpay webhook integration",
      "Backend-side payment verification",
      "Fault-tolerant order creation",
      "Payment reliability improvement",
    ],
  },
  {
    title: "Nanjil Mart",
    category: "E-Commerce Platform",
    description:
      "An e-commerce application with product management, category workflows, stock handling, order processing, and admin operations.",
    role: "Backend & Flutter Developer",
    techStack: ["Flutter", "Node.js", "Prisma ORM", "MySQL", "Razorpay"],
    highlights: [
      "Product and category management",
      "Stock and order workflows",
      "Admin panel backend APIs",
      "Payment integration",
    ],
  },
  {
    title: "CRM Lead Management System",
    category: "Business Management Platform",
    description:
      "A lead management system with IndiaMART integration, employee management, customer tracking, reminders, and dashboard analytics.",
    role: "Backend & React Developer",
    techStack: ["React.js", "Node.js", "MySQL"],
    highlights: [
      "IndiaMART lead integration",
      "Employee and customer workflows",
      "Reminder and follow-up system",
      "Dashboard analytics",
    ],
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

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16 lg:py-24 overflow-hidden bg-gray-50/50">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#6D5DFC]/[0.02] to-transparent pointer-events-none" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm w-fit">
              <span className="text-sm">🚀</span>
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Featured Projects
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
              Projects Built for <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D5DFC] to-[#8B5CF6]">
                Real-World Use
              </span>
            </h2>

            {/* Sub Heading */}
            <p className="text-lg sm:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mt-2">
              A collection of production-focused applications involving backend APIs, mobile apps, payment systems, admin panels, and real-time workflows.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 xl:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} data={project} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
