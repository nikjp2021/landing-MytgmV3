"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, ChevronRight, DollarSign, Sparkles, Shield } from "lucide-react";
import { GlobeIcon, SparkleIcon, ShieldIcon, DocumentIcon, MessageIcon, UserIcon, RocketIcon, StarIcon, CheckCircleIcon, GraduationIcon, BuildingIcon, JapanIcon, ClockIcon } from "@/components/icons";
import TrustBadges from "@/components/TrustBadges";
import LiveCounter from "@/components/LiveCounter";

function Hero() {
  const features = [
    {
      icon: GlobeIcon,
      title: "Any Language",
      description: "Write in Japanese, German, Spanish... AI crafts it like a local.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: SparkleIcon,
      title: "Human-Written",
      description: "Passes every AI detector. Sounds authentically human.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: ShieldIcon,
      title: "Secure & Private",
      description: "256-bit encryption. GDPR compliant. Your data is safe.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const services = [
    { icon: DocumentIcon, title: "Cover Letters", gradient: "from-primary to-secondary" },
    { icon: MessageIcon, title: "LinkedIn", gradient: "from-blue-500 to-cyan-500" },
    { icon: UserIcon, title: "Personal Bios", gradient: "from-purple-500 to-pink-500" },
    { icon: DollarSign, title: "Sales Emails", gradient: "from-green-500 to-emerald-500" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030305]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(167,139,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />
      
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/10 blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-secondary/25 via-primary/15 to-accent/5 blur-[100px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium mb-6 border border-primary/20"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-text-secondary">
              Trusted by 50,000+ job seekers worldwide
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            Write Boldly. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient">
              Apply Globally.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
          >
            AI cover letters crafted in your target language. No resume needed.
            Stand out in any market around the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link href="/#cta">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-glow"
              >
                Start Free
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="/pricing">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl glass-premium text-white font-semibold text-lg flex items-center justify-center gap-2"
              >
                View Pricing
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-6 text-sm text-text-secondary"
          >
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>In 30 seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>15+ languages</span>
            </div>
          </motion.div>

          {/* Nagayoshi Lab Teaser */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <Link href="/story" className="text-sm text-text-secondary italic hover:text-primary transition-colors">
              Built in <span className="text-accent font-medium">Nagayoshi Lab</span>, 
              <span className="text-primary/80">Shizuoka University</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <TrustBadges />
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/5">
                <div className="h-full glass-premium rounded-2xl p-6 group-hover:shadow-glow transition-all duration-500">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Preview */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-bold mb-4">
            Professional Communication Tools
          </h2>
          <p className="text-text-secondary">Everything you need for your career journey</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-premium rounded-xl p-4 text-center group hover:shadow-glow transition-all"
            >
              <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <span className="text-sm font-medium">{service.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Quick Link */}
        <div className="text-center">
          <Link href="/features" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors">
            See all features <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomeCTA() {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-display font-bold mb-4">
          Ready to go <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_200%] animate-gradient">global</span>?
        </h2>
        <p className="text-text-secondary mb-8">
          Join 50,000+ professionals who've transformed their job search.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg"
            >
              Start Free Now
            </motion.button>
          </Link>
          <Link href="/pricing">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl glass-premium text-white font-semibold text-lg"
            >
              View Pricing
            </motion.button>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6 text-sm text-text-secondary">
          <Shield className="w-4 h-4" />
          <span>Secure & Private • 30-day guarantee</span>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <LiveCounter />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "MyTegami.win",
            "alternateName": "MyTegami",
            "description": "Create multilingual, AI-crafted cover letters with just two phrases. No resume needed. Built for students, migrants, and global job seekers.",
            "url": "https://mytegami.win",
            "applicationCategory": "ProductivityApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "description": "Free starter plan with 3 generations"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "50000",
              "bestRating": "5",
              "worstRating": "1"
            },
            "author": {
              "@type": "Organization",
              "name": "MyTegami",
              "url": "https://mytegami.win"
            },
            "featureList": [
              "AI Cover Letter Generator",
              "LinkedIn Message Templates",
              "Personal Bio Generator",
              "Sales Email Generator",
              "Resume Optimizer",
              "Japan Career Suite",
              "15+ Languages",
              "ATS Score Boost"
            ],
            "image": "https://imgur.com/VLCfDjG",
            "screenshot": "https://imgur.com/VLCfDjG",
            "softwareVersion": "3.0",
            "producer": {
              "@type": "Organization",
              "name": "MyTegami",
              "url": "https://mytegami.win"
            }
          })
        }}
      />
      <Hero />
      <HomeCTA />
    </>
  );
}