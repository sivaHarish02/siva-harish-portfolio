"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Server, Smartphone, Database, Cloud } from "lucide-react";
import SkillCategoryCard, { SkillCategoryData } from "./SkillCategoryCard";
import EngineeringDomainsStrip from "./EngineeringDomainsStrip";

const skillsData: SkillCategoryData[] = [
  {
    title: "Backend Engineering",
    icon: Server,
    description:
      "Building scalable APIs, business workflows, integrations, and backend architectures.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Prisma ORM",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description:
      "Cross-platform mobile application development and user engagement workflows.",
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firebase Cloud Messaging (FCM)",
      "Deep Linking",
      "Android App Links",
    ],
  },
  {
    title: "Database Engineering",
    icon: Database,
    description:
      "Database architecture, schema design, optimization, migrations, and performance tuning.",
    skills: [
      "MySQL",
      "MongoDB",
      "Query Optimization",
      "Database Design",
      "UTF8MB4 Migration",
      "Indexing Strategies",
    ],
  },
  {
    title: "Cloud & Integrations",
    icon: Cloud,
    description:
      "Production deployment, cloud storage, payment systems, and third-party integrations.",
    skills: [
      "AWS S3",
      "Linux VPS",
      "Razorpay",
      "Webhooks",
      "Git",
      "GitHub",
    ],
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-16 lg:py-24 bg-gray-50/50 overflow-hidden">
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
              <span className="text-sm">🛠</span>
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Skills & Technologies
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
              Tools Behind the <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D5DFC] to-[#8B5CF6]">
                Systems I Build
              </span>
            </h2>

            {/* Sub Heading */}
            <p className="text-lg sm:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mt-2">
              Technologies and platforms I use to design scalable APIs, mobile applications, payment systems, real-time communication platforms, and production infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8"
        >
          {skillsData.map((category, index) => (
            <SkillCategoryCard
              key={index}
              data={category}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        {/* Highlight Strip */}
        <EngineeringDomainsStrip />

      </div>
    </section>
  );
}
