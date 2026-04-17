"use client";

import { motion } from "framer-motion";
import { FileText, Sparkles, Download, Shield, Check, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Tell us your story",
      description: "Enter just 2 phrases: your goal + what makes you unique. That's it. No resume needed.",
      icon: FileText,
      stepColor: "blue",
    },
    {
      number: "02",
      title: "AI generates",
      description: "Our AI writes a personalized, culturally-aware cover letter in seconds.",
      icon: Sparkles,
      stepColor: "orange",
    },
    {
      number: "03",
      title: "Download & Apply",
      description: "Get your letter in PDF, DOCX, or copy. Ready to submit.",
      icon: Download,
      stepColor: "green",
    },
  ];

  const securityItems = [
    { icon: Shield, title: "256-bit Encryption", description: "Your data is encrypted at rest and in transit" },
    { icon: Shield, title: "GDPR Compliant", description: "We comply with EU data protection regulations" },
    { icon: Shield, title: "SOC 2 Certified", description: "Enterprise-grade security standards" },
  ];

  const processSteps = [
    {
      title: "Quick Questions",
      description: "AI asks targeted questions to extract your unique story, achievements, and motivations",
    },
    {
      title: "Smart Generation",
      description: "AI crafts your personalized message, adapting tone and culture for your target country",
    },
    {
      title: "Review & Edit",
      description: "You have full control to edit tone, length, and specific phrases before download",
    },
    {
      title: "Export Ready",
      description: "Download as PDF or DOCX, or copy directly. Includes translation if needed",
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
            From <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_200%] animate-gradient">Zero</span> to Application
          </h1>
          <p className="text-xl text-text-secondary">
            Three simple steps. No resume needed. Just your story.
          </p>
        </motion.div>

        {/* Main Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 z-10">
                  <ChevronRight className="w-6 h-6 text-white/20" />
                </div>
              )}
              <div className={`relative h-full rounded-2xl p-[2px] bg-gradient-to-br from-${step.stepColor}-500 via-${step.stepColor}-400 to-${step.stepColor}-600`}>
                <div className="h-full bg-[#0C0C0F] rounded-2xl p-8 text-center">
                  <div className={`text-8xl font-display font-bold text-${step.stepColor}-400 mb-4`}>
                    {step.number}
                  </div>
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-${step.stepColor}-500 to-${step.stepColor}-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Process */}
        <div className="glass-premium rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-display font-bold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-text-secondary text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Demo Preview */}
        <div className="glass-premium rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-display font-bold mb-4">Interactive Demo</h2>
          <p className="text-text-secondary mb-6">
            Try the experience right here - enter your goal and edge, then generate.
          </p>
          <div className="glass rounded-xl p-6 max-w-xl mx-auto">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-text-secondary">Your Goal</label>
                <input 
                  type="text" 
                  placeholder="I want to work as a software engineer in Tokyo"
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm text-text-secondary">Your Edge</label>
                <input 
                  type="text" 
                  placeholder="3 years of full-stack experience, remote work fluent"
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold"
              >
                Generate
              </motion.button>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-bold text-center mb-8">Security & Trust</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {securityItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-premium rounded-xl p-6 text-center"
              >
                <item.icon className="w-8 h-8 mx-auto mb-4 text-green-400" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold mb-4">Ready to get started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#cta">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center gap-2"
              >
                Start Free <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="/pricing">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl glass-premium text-white font-semibold"
              >
                View Pricing
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}