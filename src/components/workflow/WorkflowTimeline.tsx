"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Search, Database, Server, Smartphone, Bug, Rocket } from "lucide-react";
import WorkflowCard, { WorkflowStepData } from "./WorkflowCard";

const workflowSteps: WorkflowStepData[] = [
  {
    title: "Requirement Analysis",
    icon: Search,
    description:
      "Understanding business goals, user workflows, edge cases, and technical requirements before development begins.",
    tag: "Planning",
  },
  {
    title: "System & Database Design",
    icon: Database,
    description:
      "Designing scalable database structures, relationships, API contracts, and architecture decisions.",
    tag: "Architecture",
  },
  {
    title: "Backend Development",
    icon: Server,
    description:
      "Building secure APIs, business logic, authentication systems, integrations, and backend workflows.",
    tag: "Development",
  },
  {
    title: "Mobile & Frontend Integration",
    icon: Smartphone,
    description:
      "Connecting APIs with Flutter applications, handling state, user experience, and real-time updates.",
    tag: "Integration",
  },
  {
    title: "Testing & Optimization",
    icon: Bug,
    description:
      "Debugging production issues, optimizing database queries, validating workflows, and improving performance.",
    tag: "Optimization",
  },
  {
    title: "Deployment & Monitoring",
    icon: Rocket,
    description:
      "Deploying applications, configuring VPS environments, monitoring logs, and maintaining production reliability.",
    tag: "Production",
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

export default function WorkflowTimeline() {
  return (
    <div className="relative mt-12 lg:mt-16 w-full">
      
      {/* 
        Connection Line 
        - Hidden on mobile (use vertical instead)
        - Horizontal on lg (desktop)
      */}
      <div className="absolute hidden xl:block top-1/2 -translate-y-1/2 left-[5%] right-[5%] h-1 bg-gray-100 rounded-full z-0 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          className="h-full bg-gradient-to-r from-[#6D5DFC]/20 via-[#6D5DFC] to-[#6D5DFC]/20"
        />
      </div>

      {/* Grid Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative z-10"
      >
        {workflowSteps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            
            {/* Desktop Connectors (Dots) Between Cards */}
            {index !== workflowSteps.length - 1 && (
              <div className="hidden xl:flex absolute top-1/2 -translate-y-1/2 left-full ml-1 w-4 h-4 rounded-full border-4 border-white bg-[#6D5DFC] z-20 shadow-sm" />
            )}

            <div className="w-full xl:w-auto xl:min-h-[300px]">
              <WorkflowCard data={step} index={index} variants={itemVariants} />
            </div>

            {/* Mobile/Tablet Vertical Line Connection */}
            {index !== workflowSteps.length - 1 && (
              <div className="xl:hidden w-[2px] h-6 bg-gradient-to-b from-gray-200 to-transparent my-1" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
