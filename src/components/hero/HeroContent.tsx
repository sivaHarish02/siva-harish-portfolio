import React from "react";
import { Download, FileText } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-5 animate-fade-in-left">
      {/* Availability Badge */}
      <Badge variant="success" dot>
        Available for new opportunities
      </Badge>

      {/* Heading */}
      <div className="space-y-1">
        <p className="text-sm font-mono tracking-[0.3em] text-gray-500 uppercase">
          Hi, I&apos;m
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[64px] 2xl:text-[72px] font-black leading-[1.1] tracking-tight">
          <span className="text-gray-900">SIVA</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
            HARISH
          </span>
        </h1>
        <div className="relative">
          <p
            className="text-xl sm:text-2xl lg:text-3xl text-primary font-medium italic"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Backend & Flutter Developer
          </p>
          {/* Underline decoration */}
          <svg
            className="w-48 h-2 mt-1"
            viewBox="0 0 200 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.5C30 2 60 1 100 3.5C140 6 170 4 199 2"
              stroke="#6C3CE1"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
        I build reliable backend systems, APIs, admin panels and cross-platform
        mobile apps that solve real-world problems with performance and security.
      </p>

      {/* Code Block */}
      <div className="bg-gray-900 rounded-xl p-4 w-full max-w-[340px] sm:max-w-none sm:w-fit overflow-hidden font-mono text-[11px] leading-5 sm:text-sm sm:leading-normal">
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="flex flex-col items-end select-none opacity-50">
            <span>01</span>
            <span>02</span>
          </div>
          <div className="flex flex-col overflow-hidden">
            <span>
              <span className="code-keyword">const</span>{" "}
              <span className="code-variable">developer</span>{" "}
              <span className="code-punctuation">=</span>{" "}
              <span className="code-punctuation">{"{"}</span>{" "}
              <span className="code-property">problemSolver</span>
              <span className="code-punctuation">:</span>{" "}
              <span className="code-boolean">true</span>
              <span className="code-punctuation">,</span>
            </span>
            <span>
              <span className="code-property">passion</span>
              <span className="code-punctuation">:</span>{" "}
              <span className="code-string">
                &apos;building products that impact lives&apos;
              </span>{" "}
              <span className="code-punctuation">{"}"}</span>
              <span className="code-punctuation">;</span>
            </span>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 pt-1 w-full sm:w-auto">
        <Button href="/resume" variant="primary" size="lg" icon={FileText} className="w-full sm:w-auto h-11 rounded-xl" target="_blank">
          View Resume
        </Button>
        <Button href="/Siva_Harish_Resume.pdf" variant="outline" size="lg" icon={Download} className="w-full sm:w-auto h-11 rounded-xl" download>
          Download Resume
        </Button>
      </div>
    </div>
  );
}
