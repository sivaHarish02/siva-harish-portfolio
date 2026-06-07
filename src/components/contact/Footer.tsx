"use client";

import React from "react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Engineering Highlights", href: "#highlights" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-8 lg:py-12 mt-16 lg:mt-24">
      <div className="mx-auto w-full max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          
          {/* Left: Branding */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1">
            <h3 className="text-xl font-black text-gray-900 tracking-tight">
              SIVA HARISH S
            </h3>
            <p className="text-sm font-semibold text-[#6D5DFC]">
              Backend Engineer | Flutter Developer
            </p>
          </div>

          {/* Right: Quick Links */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = link.href.replace('#', '');
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-sm font-medium text-gray-500 hover:text-[#6D5DFC] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-8 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs text-gray-500">
            &copy; 2026 Siva Harish S. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Built with React, Tailwind CSS and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
