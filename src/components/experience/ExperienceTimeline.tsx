"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import ExperienceCard, { ExperienceData } from "./ExperienceCard";

const experienceData: ExperienceData[] = [
  {
    role: "Flutter Application Developer",
    company: "ELANOXTECH",
    duration: "Oct 2025 – Present",
    description:
      "Expanded into Flutter mobile application development while continuing backend integration, API workflows, Firebase services, payment systems, and real-time features.",
    responsibilities: [
      "Developed Flutter mobile applications for Android",
      "Integrated REST APIs, Firebase, FCM notifications, and deep linking",
      "Built mobile workflows for payments, media, chat, and user engagement",
      "Debugged WebRTC-based video calling flows",
      "Improved mobile app performance and user experience",
      "Collaborated across backend and frontend workflows",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "FCM",
      "Deep Linking",
      "REST APIs",
      "WebRTC",
    ],
  },
  {
    role: "Back End Developer",
    company: "ELANOXTECH",
    duration: "Oct 2024 – Sep 2025",
    description:
      "Started my professional journey by building production backend APIs, database architectures, payment workflows, notification systems, and deployment workflows.",
    responsibilities: [
      "Developed and maintained production REST APIs using Node.js and Express.js",
      "Designed and optimized MySQL database schemas and queries",
      "Implemented Razorpay payment gateway and webhook architecture",
      "Migrated databases from Latin encoding to UTF8MB4",
      "Built scalable FCM notification workflows",
      "Managed AWS S3 storage and Linux VPS deployments",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MySQL",
      "Prisma ORM",
      "Firebase",
      "Razorpay",
      "AWS S3",
      "Linux",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const leftItemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rightItemVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ExperienceTimeline() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative mt-12 lg:mt-20 max-w-5xl mx-auto"
    >
      {/* Vertical Timeline Line */}
      <div className="absolute top-0 bottom-0 left-[27px] lg:left-1/2 w-[2px] bg-gray-100 lg:-translate-x-1/2 rounded-full overflow-hidden z-0">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full bg-gradient-to-b from-[#6D5DFC]/20 via-[#6D5DFC] to-[#6D5DFC]/20"
        />
      </div>

      <div className="flex flex-col gap-12 lg:gap-0">
        {experienceData.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex flex-col lg:flex-row items-start lg:items-center w-full ${
                isLeft ? "lg:justify-start" : "lg:justify-end"
              }`}
            >
              {/* Timeline Node */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.3 }}
                className="absolute left-[20px] lg:left-1/2 w-4 h-4 rounded-full border-[3px] border-white shadow-sm bg-[#6D5DFC] lg:-translate-x-1/2 mt-8 lg:mt-0 z-20 flex justify-center items-center"
              >
                {index === 0 && (
                  <div className="w-full h-full rounded-full bg-[#6D5DFC] animate-ping opacity-50 absolute" />
                )}
              </motion.div>

              {/* Card Container */}
              <div
                className={`w-full pl-16 lg:pl-0 lg:w-[calc(50%-3rem)] ${
                  isLeft ? "" : ""
                }`}
              >
                <ExperienceCard
                  data={exp}
                  variants={isLeft ? leftItemVariants : rightItemVariants}
                  alignment={isLeft ? "left" : "right"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
