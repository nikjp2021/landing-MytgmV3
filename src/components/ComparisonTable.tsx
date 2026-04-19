"use client";

import { Check, X } from "lucide-react";

const competitors = [
  {
    name: "MyTegami",
    price: "Free - $9.99/mo",
    coverLetters: true,
    multilingual: "15+ languages",
    atsOptimizer: true,
    japanSuite: true,
    linkedIn: true,
    resumeOptimizer: true,
    prioritySupport: true,
    highlighted: true,
  },
  {
    name: "CoverLab",
    price: "$19.99/mo",
    coverLetters: true,
    multilingual: "5 languages",
    atsOptimizer: false,
    japanSuite: false,
    linkedIn: false,
    resumeOptimizer: false,
    prioritySupport: false,
    highlighted: false,
  },
  {
    name: "Resume.io",
    price: "$24.99/mo",
    coverLetters: true,
    multilingual: "3 languages",
    atsOptimizer: true,
    japanSuite: false,
    linkedIn: false,
    resumeOptimizer: true,
    prioritySupport: false,
    highlighted: false,
  },
  {
    name: "Kickresume",
    price: "$15.99/mo",
    coverLetters: true,
    multilingual: "English only",
    atsOptimizer: false,
    japanSuite: false,
    linkedIn: true,
    resumeOptimizer: false,
    prioritySupport: false,
    highlighted: false,
  },
];

const features = [
  { key: "coverLetters", label: "Cover Letters" },
  { key: "multilingual", label: "Languages" },
  { key: "atsOptimizer", label: "ATS Optimizer" },
  { key: "japanSuite", label: "Japan Career Suite" },
  { key: "linkedIn", label: "LinkedIn Messages" },
  { key: "resumeOptimizer", label: "Resume Optimizer" },
  { key: "prioritySupport", label: "Priority Support" },
];

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr>
            <th className="text-left p-4 text-text-secondary font-medium">Features</th>
            {competitors.map((comp) => (
              <th
                key={comp.name}
                className={`p-4 text-center font-bold ${
                  comp.highlighted ? "bg-primary/20 text-primary" : "text-white"
                }`}
              >
                {comp.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-border">
            <td className="p-4 text-text-secondary">Price</td>
            {competitors.map((comp) => (
              <td
                key={comp.name}
                className={`p-4 text-center ${
                  comp.highlighted ? "bg-primary/10" : ""
                }`}
              >
                <span className={comp.highlighted ? "text-primary font-semibold" : ""}>
                  {comp.price}
                </span>
              </td>
            ))}
          </tr>
          {features.map((feature) => (
            <tr key={feature.key} className="border-t border-border">
              <td className="p-4 text-text-secondary">{feature.label}</td>
              {competitors.map((comp) => {
                const value = comp[feature.key as keyof typeof comp];
                return (
                  <td
                    key={comp.name}
                    className={`p-4 text-center ${
                      comp.highlighted ? "bg-primary/10" : ""
                    }`}
                  >
                    {typeof value === "boolean" ? (
                      value ? (
                        <Check className={`w-5 h-5 mx-auto ${comp.highlighted ? "text-primary" : "text-green-400"}`} />
                      ) : (
                        <X className="w-5 h-5 mx-auto text-text-secondary opacity-50" />
                      )
                    ) : (
                      <span className={comp.highlighted ? "text-primary font-medium" : ""}>
                        {value as string}
                      </span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-xs text-text-secondary text-center">
        [PLACEHOLDER: Data for comparison - verify current features/pricing]
      </p>
    </div>
  );
}