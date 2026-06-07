"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Mail, User, Terminal, FileText, Send } from "lucide-react";
import AvailabilityCard from "./AvailabilityCard";
import ContactCard, { ContactData } from "./ContactCard";
import Footer from "./Footer";

const contactMethods: ContactData[] = [
  {
    label: "Email",
    value: "sivaharish0202@gmail.com",
    action: "https://mail.google.com/mail/?view=cm&fs=1&to=sivaharish0202@gmail.com",
    icon: Mail,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    action: "https://www.linkedin.com/in/sivaharish02",
    icon: User,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    label: "GitHub",
    value: "View my work",
    action: "https://github.com/sivaHarish02",
    icon: Terminal,
    iconBg: "bg-gray-100",
    iconColor: "text-gray-900",
  },
  {
    label: "Resume",
    value: "View Resume",
    action: "/resume",
    icon: FileText,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    label: "Resume",
    value: "Download Resume",
    action: "/Siva_Harish_Resume.pdf",
    icon: FileText,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
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

export default function ContactSection() {
  return (
    <>
      <section id="contact" className="relative pt-16 lg:pt-24 bg-gray-50/50 overflow-hidden">
        {/* Background Subtle Accent */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none" />

        <div className="relative mx-auto w-full max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start">

            {/* Left Column: Messaging & Availability */}
            <div className="flex flex-col gap-8 lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4"
              >
                {/* Small Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm w-fit">
                  <span className="text-sm">📬</span>
                  <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Contact
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
                  Let’s Build Something <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D5DFC] to-[#8B5CF6]">
                    Reliable Together
                  </span>
                </h2>

                {/* Sub Heading */}
                <p className="text-lg sm:text-xl text-gray-500 font-medium leading-relaxed max-w-lg mt-2">
                  Open to backend engineering, Flutter development, API architecture, payment systems, and production-ready software opportunities.
                </p>

                {/* Primary Button */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sivaharish0202@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full sm:w-fit flex items-center justify-center gap-3 px-8 py-4 bg-[#6D5DFC] hover:bg-[#5b4be8] text-white font-bold rounded-2xl shadow-lg shadow-[#6D5DFC]/20 transition-all hover:shadow-[#6D5DFC]/40 hover:-translate-y-1"
                >
                  <Send className="w-5 h-5" />
                  Send an Email
                </a>
              </motion.div>

              <AvailabilityCard />
            </div>

            {/* Right Column: Contact Cards */}
            <div className="flex flex-col gap-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
              >
                {contactMethods.map((method, index) => (
                  <ContactCard key={index} data={method} variants={itemVariants} />
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
