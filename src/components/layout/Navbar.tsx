"use client";

import React, { useState } from "react";
import { Download, ArrowUpRight, Menu, X } from "lucide-react";
import Button from "../ui/Button";

const navLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Workflow", href: "#workflow" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="mx-auto w-full max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-[72px]">
          {/* Logo & Name */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 rounded-lg sm:rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg tracking-tight">
                SH
              </span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm font-bold text-gray-900 leading-tight">
                SIVA HARISH
              </h2>
              <p className="hidden sm:block text-xs text-gray-500 leading-tight">
                Backend & Flutter Developer
              </p>
            </div>
          </div>

          {/* Center Nav Links - Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  link.active
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary hover:bg-primary-50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Let's Connect - Always visible but size changes */}
            <Button href="#contact" variant="primary" className="h-8 px-3 text-xs sm:hidden">
              Connect
            </Button>
            
            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/Siva_Harish_Resume.pdf" download variant="outline" size="sm" icon={Download}>
                Download Resume
              </Button>
              <Button href="#contact" variant="primary" size="sm" icon={ArrowUpRight}>
                Let&apos;s Connect
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl text-gray-600 hover:text-primary hover:bg-primary-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-1 bg-white border-t border-gray-50">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors animate-slide-in ${
                link.active
                  ? "text-primary bg-primary-50"
                  : "text-gray-600 hover:text-primary hover:bg-primary-50"
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
            <Button
              href="/Siva_Harish_Resume.pdf"
              download
              variant="outline"
              size="md"
              icon={Download}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download Resume
            </Button>
            <Button
              href="#contact"
              variant="primary"
              size="md"
              icon={ArrowUpRight}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let&apos;s Connect
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
