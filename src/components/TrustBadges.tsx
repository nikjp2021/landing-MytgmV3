"use client";

import { Shield, Lock, Award, CheckCircle } from "lucide-react";

const badges = [
  {
    icon: Shield,
    label: "SSL Encrypted",
    description: "256-bit encryption",
  },
  {
    icon: Lock,
    label: "GDPR Compliant",
    description: "EU data protection",
  },
  {
    icon: Award,
    label: "30-Day Guarantee",
    description: "Full refund, no questions",
  },
  {
    icon: CheckCircle,
    label: "50,000+ Users",
    description: "Worldwide trust",
  },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
      {badges.map((badge, i) => (
        <div
          key={badge.label}
          className="flex items-center gap-2 text-sm text-text-secondary"
        >
          <badge.icon className="w-5 h-5 text-primary" />
          <div className="hidden sm:block">
            <span className="font-medium text-white">{badge.label}</span>
            <span className="hidden md:inline"> · {badge.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}