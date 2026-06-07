import React from "react";
import {
  Hexagon,
  SquareTerminal,
  Database,
  Triangle,
  Smartphone,
  Flame,
  Zap,
  Cloud,
  Atom,
} from "lucide-react";

const techStack = [
  { name: "Node.js", icon: Hexagon, color: "text-[#339933]", bg: "bg-[#339933]/10" },
  { name: "Express.js", icon: SquareTerminal, color: "text-gray-800", bg: "bg-gray-100" },
  { name: "MySQL", icon: Database, color: "text-[#4479A1]", bg: "bg-[#4479A1]/10" },
  { name: "Prisma", icon: Triangle, color: "text-gray-900", bg: "bg-gray-200" },
  { name: "Flutter", icon: Smartphone, color: "text-[#02569B]", bg: "bg-[#02569B]/10" },
  { name: "Firebase", icon: Flame, color: "text-[#FFCA28]", bg: "bg-[#FFCA28]/10" },
  { name: "Razorpay", icon: Zap, color: "text-[#0288D1]", bg: "bg-[#0288D1]/10" },
  { name: "AWS S3", icon: Cloud, color: "text-[#FF9900]", bg: "bg-[#FF9900]/10" },
  { name: "React", icon: Atom, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10" },
];

export default function TechStack() {
  return (
    <div className="animate-fade-in-up delay-600">
      <h4 className="text-sm font-bold text-gray-900 mb-4">
        Tech I Work With
      </h4>
      <div className="flex flex-wrap gap-2.5">
        {techStack.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-100 hover:-translate-y-0.5 transition-all duration-300 cursor-default group"
          >
            <div className={`p-1 rounded-md ${tech.bg} transition-colors`}>
              <tech.icon className={`w-4 h-4 ${tech.color}`} />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {tech.name}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-primary-50 rounded-xl border border-primary-100 text-primary cursor-default hover:bg-primary-100 transition-colors duration-200">
          <span className="text-sm font-semibold">+ More</span>
        </div>
      </div>
    </div>
  );
}
