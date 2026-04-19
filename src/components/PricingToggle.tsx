"use client";

import { useState } from "react";

interface PricingToggleProps {
  onChange: (isAnnual: boolean) => void;
}

export default function PricingToggle({ onChange }: PricingToggleProps) {
  const [isAnnual, setIsAnnual] = useState(true);

  const handleToggle = () => {
    const newValue = !isAnnual;
    setIsAnnual(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <span className={`text-sm ${!isAnnual ? "text-white font-medium" : "text-text-secondary"}`}>
        Monthly
      </span>
      <button
        onClick={handleToggle}
        className="relative w-14 h-8 rounded-full bg-surface-elevated border border-border transition-colors"
        aria-label="Toggle billing period"
      >
        <div
          className={`absolute top-1 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary transition-transform ${
            isAnnual ? "translate-x-7" : "translate-x-1"
          }`}
        />
      </button>
      <span className={`text-sm ${isAnnual ? "text-white font-medium" : "text-text-secondary"}`}>
        Annual
      </span>
      <span className="ml-1 px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
        Save 25%
      </span>
    </div>
  );
}