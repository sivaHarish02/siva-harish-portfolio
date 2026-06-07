import React from "react";
import {
  Rocket,
  FolderOpen,
  Braces,
  Database,
  Users,
} from "lucide-react";

const bottomStats = [
  { icon: Rocket, value: "2+", label: "Years Experience" },
  { icon: FolderOpen, value: "15+", label: "Projects Completed" },
  { icon: Braces, value: "150+", label: "APIs Developed" },
  { icon: Database, value: "10+", label: "Admin Panels Built" },
  { icon: Users, value: "10K+", label: "Users Impacted" },
];

export default function BottomStats() {
  return (
    <div className="animate-fade-in-up delay-700">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {bottomStats.map((stat, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-3 sm:py-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-100 transition-all duration-300 group ${
              i === bottomStats.length - 1 ? "col-span-2 sm:col-span-1" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors duration-300">
              <stat.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900 leading-tight">
                {stat.value}
              </p>
              <p className="text-xs text-gray-500 leading-tight">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
