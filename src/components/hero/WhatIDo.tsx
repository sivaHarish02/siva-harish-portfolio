import React from "react";
import {
  Code2,
  CheckCircle2,
  Database,
  Smartphone,
  Shield,
  Puzzle,
} from "lucide-react";
import Card from "../ui/Card";

const services = [
  { icon: CheckCircle2, label: "Backend API Development" },
  { icon: CheckCircle2, label: "Admin Panel Development" },
  { icon: CheckCircle2, label: "Flutter Mobile Apps" },
  { icon: CheckCircle2, label: "Database Design & Optimization" },
  { icon: CheckCircle2, label: "Payment & Notification Systems" },
  { icon: CheckCircle2, label: "Third-party Integrations" },
];

export default function WhatIDo() {
  return (
    <Card
      padding="lg"
      className="animate-fade-in-right delay-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
          <Code2 className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">What I Do</h3>
      </div>
      <ul className="space-y-2.5">
        {services.map((service, i) => (
          <li
            key={i}
            className="flex items-center gap-2.5 text-sm text-gray-700"
          >
            <service.icon className="w-4 h-4 text-primary flex-shrink-0" />
            <span>{service.label}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
