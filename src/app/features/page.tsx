"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  MessageSquare, 
  User, 
  DollarSign, 
  Globe, 
  Shield,
  Check,
  Sparkles,
  Target,
  Code,
  BarChart3,
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: FileText,
      title: "AI Cover Letters",
      description: "Culturally-aware cover letters in any language. Passes all AI detectors.",
      tier: "All",
    },
    {
      icon: Target,
      title: "Resume Optimizer",
      description: "ATS optimization with keyword matching and scoring.",
      tier: "Pro",
    },
    {
      icon: User,
      title: "Personal Bios",
      description: "Compelling bios for LinkedIn, websites, and speaking engagements.",
      tier: "All",
    },
    {
      icon: MessageSquare,
      title: "LinkedIn Messages",
      description: "Personalized connection requests that get accepted.",
      tier: "Pro",
    },
    {
      icon: DollarSign,
      title: "Sales Emails",
      description: "Cold outreach templates that convert leads.",
      tier: "Pro",
    },
    {
      icon: Code,
      title: "Japan Career Suite",
      description: "ESG, 履歴書 templates, SPI practice for Japan jobs.",
      tier: "Pro",
    },
  ];

  const languages = [
    "English", "Japanese", "German", "Spanish", "French", 
    "Portuguese", "Chinese", "Korean", "Italian", "Dutch",
    "Russian", "Arabic", "Hindi", "Swedish", "Polish"
  ];

  const useCases = [
    {
      title: "Applying Abroad",
      description: "Target jobs in Tokyo, Berlin, New York or any global market.",
    },
    {
      title: "Career Change",
      description: "Pivot your experience to highlight transferable skills.",
    },
    {
      title: "International Student",
      description: "Navigate job markets in your study destination.",
    },
    {
      title: "Tech Industry",
      description: "Specialized language for developer and engineering roles.",
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
            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_200%] animate-gradient">Career Toolkit</span>
          </h1>
          <p className="text-xl text-text-secondary">
            Everything you need to land your dream job
          </p>
        </motion.div>

        {/* Core Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full glass-premium rounded-2xl p-6 group-hover:shadow-glow transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-display font-bold">{feature.title}</h3>
                  {feature.tier === "Pro" && (
                    <span className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full">Pro</span>
                  )}
                </div>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Technology */}
        <div className="glass-premium rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-display font-bold mb-4">Powered by Google gemini-2.5-flash</h2>
              <p className="text-text-secondary mb-4">
                Our AI uses Google's latest flash model for fast, accurate, and cost-effective generations. 
                Each output is crafted to sound authentically human and pass all AI detection tools.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Ultra-fast generation (~3 seconds)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Passes all AI detectors</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Culturally-aware output</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Cost-effective at scale</span>
                </li>
              </ul>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="text-sm text-text-secondary">Operational Cost</p>
              <p className="text-3xl font-bold text-accent">$0.002 - $0.004</p>
              <p className="text-sm text-text-secondary">per generation</p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-bold text-center mb-4">15+ Languages Supported</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((lang, i) => (
              <motion.span
                key={lang}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.02 }}
                viewport={{ once: true }}
                className="px-4 py-2 glass rounded-full text-sm"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-bold text-center mb-4">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-premium rounded-xl p-6"
              >
                <h3 className="text-lg font-display font-bold mb-2">{useCase.title}</h3>
                <p className="text-text-secondary">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="glass-premium rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Shield className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <h3 className="font-semibold">SOC 2 Certified</h3>
              <p className="text-sm text-text-secondary">Enterprise-grade security</p>
            </div>
            <div>
              <Shield className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <h3 className="font-semibold">GDPR Compliant</h3>
              <p className="text-sm text-text-secondary">EU data protection</p>
            </div>
            <div>
              <Shield className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <h3 className="font-semibold">256-bit Encryption</h3>
              <p className="text-sm text-text-secondary">Bank-level security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}