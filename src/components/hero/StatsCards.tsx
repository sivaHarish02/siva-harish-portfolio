import React from "react";
import { Code2, FolderOpen, Smartphone } from "lucide-react";
import Card from "../ui/Card";

const stats = [
  {
    icon: Code2,
    label: "APIs Developed",
    value: "150+",
    color: "text-primary",
    bgColor: "bg-primary-50",
    barColor: "bg-primary",
  },
  {
    icon: FolderOpen,
    label: "Projects Completed",
    value: "25+",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    barColor: "bg-emerald-500",
  },
  {
    icon: Smartphone,
    label: "Mobile Apps Built",
    value: "15+",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    barColor: "bg-orange-400",
  },
];

export default function StatsCards() {
  return (
    <div className="space-y-3 animate-fade-in-right delay-500">
      {stats.map((stat, i) => (
        <Card
          key={i}
          padding="sm"
          hover
          className="group"
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-lg ${stat.bgColor} flex items-center justify-center flex-shrink-0`}
            >
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 leading-tight">
                {stat.label}
              </p>
              <p className="text-xl font-bold text-gray-900 leading-tight">
                {stat.value}
              </p>
              {/* Progress bar */}
              <div className="w-full h-1 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
                <div
                  className={`h-full ${stat.barColor} rounded-full transition-all duration-1000 group-hover:w-full`}
                  style={{
                    width:
                      i === 0 ? "90%" : i === 1 ? "65%" : "50%",
                  }}
                />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
