"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import PricingToggle from "@/components/PricingToggle";
import ComparisonTable from "@/components/ComparisonTable";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "3 free message generations",
        "DigitalFootprintAdvisor access",
        "Guided Questions",
        "Final Review Checklist",
        "Basic translation",
      ],
      missing: [
        "Unlimited access",
        "Resume Optimizer",
        "Japan Career Suite",
        "Priority support",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: isAnnual ? "Pro Yearly" : "Pro Monthly",
      price: isAnnual ? "$89.99" : "$9.99",
      per: isAnnual ? "/year" : "/month",
      savings: isAnnual ? "Save 25%" : null,
      description: isAnnual ? "Best value for long-term" : "For serious job seekers",
      features: isAnnual
        ? [
            "Everything in Pro Monthly",
            "25% discount (~$7.50/month)",
            "Early access to new features",
            "Exclusive yearly member benefits",
          ]
        : [
            "Unlimited message generations",
            "Resume Optimizer module",
            "Japan Career Suite",
            "All future premium features",
            "Priority support",
            "No credit card required to start",
          ],
      missing: [],
      cta: isAnnual ? "Start Yearly" : "Start Pro",
      popular: true,
    },
  ];

  const featurePacks = [
    {
      name: "Optimize with AI",
      price: "$3.00",
      description: "Single one-time use",
      features: [
        "One resume optimization",
        "ATS score boost",
        "Keyword targeting",
      ],
    },
    {
      name: "Japan Career Suite",
      price: "$5.00",
      description: "Document bundle",
      features: [
        "ESG (Entry Sheet)",
        "履歴書 template",
        "SPI practice questions",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Invest in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_200%] animate-gradient">Career</span>
          </h1>
          <p className="text-xl text-text-secondary">
            Choose the plan that fits your ambition
          </p>
          <div className="mt-8">
            <PricingToggle onChange={setIsAnnual} />
          </div>
        </motion.div>

        {/* Subscription Plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full text-sm font-semibold text-white shadow-glow z-10">
                  ★ Most Popular
                </div>
              )}
              {plan.savings && (
                <div className="absolute -top-4 right-4 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                  {plan.savings}
                </div>
              )}
              <div className={`glass-premium rounded-2xl p-8 ${plan.popular ? "shadow-glow-lg border border-primary/30 mt-3" : ""}`}>
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-5xl font-display font-bold ${plan.popular ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent" : "text-white"}`}>
                    {plan.price}
                  </span>
                  {(plan as any).period ? <span className="text-text-secondary">{(plan as any).period}</span> : null}
                </div>
                <p className="text-text-secondary mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.missing?.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 opacity-50">
                      <X className="w-5 h-5 text-text-secondary flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] text-white shadow-glow"
                      : "bg-surface-elevated hover:bg-border text-white"
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Packs */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            AI Feature Packs
          </h2>
          <p className="text-text-secondary text-center mb-8">
            One-time purchases for specific needs
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {featurePacks.map((pack, i) => (
              <motion.div
                key={pack.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-premium rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-display font-bold">{pack.name}</h3>
                  <span className="text-2xl font-bold text-accent">{pack.price}</span>
                </div>
                <p className="text-text-secondary text-sm mb-4">{pack.description}</p>
                <ul className="space-y-2 mb-6">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl font-semibold bg-surface-elevated hover:bg-border transition-all"
                >
                  Purchase
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            Why MyTegami Wins
          </h2>
          <p className="text-text-secondary text-center mb-8">
            See how we compare to the competition
          </p>
          <div className="glass-premium rounded-2xl p-6 overflow-hidden">
            <ComparisonTable />
          </div>
        </div>

        {/* Value Stacking */}
        <div className="glass-premium rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-display font-bold mb-4 text-center">Pro Includes Everything:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Unlimited AI generations",
              "Resume Optimizer module",
              "Japan Career Suite",
              "LinkedIn message templates",
              "Personal bio generator",
              "Sales email snippets",
              "All future premium features",
              "Priority support",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12">
          <p className="text-text-secondary">
            30-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </div>
  );
}