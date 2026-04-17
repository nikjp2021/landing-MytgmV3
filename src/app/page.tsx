"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Globe,
  Clock,
  Shield,
  Check,
  ChevronRight,
  Star,
  ArrowRight,
  Mail,
  Linkedin,
  Twitter,
  Download,
  Copy,
  FileText,
  Sparkles,
  Languages,
  Users,
  Zap,
  Target,
  Menu,
  X,
  Send,
  ExternalLink,
  Phone,
  BookOpen,
  Code,
  BarChart3,
  Building,
  Briefcase,
  User,
  MessageSquare,
  FileEdit,
  DollarSign,
  Heart,
  ArrowUpRight,
} from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const servicesMenu = [
    { href: "#services", label: "Cover Letters", icon: FileText },
    { href: "#services", label: "LinkedIn Messages", icon: MessageSquare },
    { href: "#services", label: "Personal Bios", icon: User },
    { href: "#services", label: "Sales Emails", icon: DollarSign },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2 text-xl font-display font-bold"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <span className="text-gradient hidden sm:block">MyTegami</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-6">
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1"
            >
              Services
              <ChevronRight className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-90" : ""}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 glass rounded-xl py-2"
                >
                  {servicesMenu.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-text-secondary hover:text-text-primary transition-colors text-sm"
          >
            Log in
          </a>
          <motion.a
            href="#cta"
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Free
          </motion.a>
        </div>

        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 top-[60px] bg-background/95 backdrop-blur-xl z-40 md:hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-lg text-text-secondary hover:text-text-primary border-b border-border"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="#"
                  className="block py-3 text-lg text-text-secondary"
                >
                  Log in
                </a>
                <motion.a
                  href="#cta"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-4 text-center rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold"
                  whileTap={{ scale: 0.98 }}
                >
                  Start Free
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function Hero() {
  const [goal, setGoal] = useState("");
  const [edge, setEdge] = useState("");
  const [generated, setGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!goal || !edge) return;
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 1500);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(
      "Dear Hiring Manager,\n\nI am writing to express my sincere interest in the Software Engineer position at your company. With three years of full-stack development experience and a passion for innovation..."
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#030305]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlc9iNCIgc3RpdGNoVW5pdHM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-[0.03]" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/10 blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-secondary/25 via-primary/15 to-accent/5 blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50%] right-[30%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-accent/20 via-primary/15 to-secondary/10 blur-[80px]"
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(167,139,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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
            transition={{ delay: 0.3 }}
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
            transition={{ delay: 0.4 }}
            className="text-xl text-text-secondary mb-8 max-w-lg"
          >
            AI cover letters crafted in your target language. No resume needed.
            Stand out in any market around the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("demo-input")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:bg-[length:100%_100%] text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-glow hover:shadow-glow-lg transition-all animate-pulse-slow"
            >
              Try It Free
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl glass text-text-primary font-semibold text-lg flex items-center justify-center gap-2 hover:bg-surface-elevated transition-all"
            >
              See How It Works
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6 text-sm text-text-secondary"
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-[60px] rounded-3xl" />

<motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative glass-premium rounded-2xl p-6 md:p-8 shadow-glow border border-primary/20"
        >
          {/* Window controls */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="flex-1" />
            <span className="text-xs font-medium text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Live Preview
            </span>
          </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-surface/80 rounded-xl p-4"
              >
                <div className="text-sm text-text-secondary mb-2">
                  Step 1: Your Goal
                </div>
                <input
                  id="demo-input"
                  type="text"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="I want to work as a software engineer in Tokyo"
                  className="w-full bg-transparent text-text-primary placeholder:text-text-secondary focus:outline-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-surface/80 rounded-xl p-4"
              >
                <div className="text-sm text-text-secondary mb-2">
                  Step 2: Your Edge
                </div>
                <input
                  type="text"
                  value={edge}
                  onChange={(e) => setEdge(e.target.value)}
                  placeholder="3 years of full-stack experience, remote work fluent"
                  className="w-full bg-transparent text-text-primary placeholder:text-text-secondary focus:outline-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: generated ? 1 : 0, scale: generated ? 1 : 0.95 }}
                className="bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 rounded-xl p-4 border border-primary/30 shadow-inner-glow"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-medium">
                    {generating ? "✨ Generating..." : generated ? "✨ AI Generated" : "✏️ Your Cover Letter"}
                  </span>
                  {generated && (
                    <span className="text-xs text-text-secondary">
                      in 0.3s
                    </span>
                  )}
                </div>
                <div className="text-xs text-text-secondary">
                  {generated ? (
                    "Dear Hiring Manager,\n\nI am writing to express my sincere interest in the Software Engineer position at your company. With three years of full-stack development experience and a passion for innovation..."
                  ) : (
                    "Enter your goal and edge above, then click Generate"
                  )}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-3 mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerate}
                disabled={!goal || !edge || generating}
                className="flex-1 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {generating ? (
                  <span className="animate-pulse">Generating...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Generate
                  </>
                )}
              </motion.button>
              {generated && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCopy}
                    className="py-3 px-4 rounded-lg bg-surface-elevated text-text-primary text-sm font-medium flex items-center justify-center gap-2 hover:bg-border transition-all"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-3 px-4 rounded-lg bg-surface-elevated text-text-primary text-sm font-medium flex items-center justify-center gap-2 hover:bg-border transition-all"
                  >
                    <Download className="w-4 h-4" />
                  </motion.button>
                </>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-text-secondary/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-text-secondary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialProof() {
  const companies = [
    "Google",
    "Microsoft", 
    "Amazon",
    "LinkedIn",
    "Tokopedia",
    "Grab",
  ];

  return (
    <section className="py-12 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-text-secondary text-sm mb-8">
          Trusted by professionals at leading companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
          {companies.map((company, i) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xl md:text-2xl font-display font-bold text-text-secondary"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Globe,
      title: "Any Language",
      description:
        "Write in your target language - Japanese, German, Spanish... AI crafts it like a local writer with cultural nuances.",
      gradient: "from-blue-500 to-cyan-500",
      colSpan: "md:col-span-1",
    },
    {
      icon: Clock,
      title: "In 60 Seconds",
      description:
        "No more hours of staring at a blank page. Just 2 phrases and you're ready to apply to your dream job.",
      gradient: "from-purple-500 to-pink-500",
      colSpan: "md:col-span-1",
    },
    {
      icon: Shield,
      title: "Human-Written",
      description:
        "Passes every AI detector. Your letter reads authentically human, crafted to sound natural and confident.",
      gradient: "from-green-500 to-emerald-500",
      colSpan: "md:col-span-2",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Break barriers. <span className="text-gradient">Not nerves.</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Everything you need to write cover letters that get responses.
            No resume required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${feature.colSpan} group`}
            >
              <div className="h-full glass-hover rounded-2xl p-6 md:p-8 cursor-pointer hover-glow">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: FileText,
      title: "Cover Letters",
      description: "AI-crafted personalized cover letters in any language that sound authentically human.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: MessageSquare,
      title: "LinkedIn Messages",
      description: "Personalized connection requests that get accepted. Network with confidence.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: User,
      title: "Personal Bios",
      description: "Compelling bios for LinkedIn, websites, and speaking engagements.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: DollarSign,
      title: "Sales Emails",
      description: "Personalized outreach snippets that convert leads into customers.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Professional <span className="text-gradient">Communication Tools</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Everything you need to communicate confidently in your professional journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full glass-hover rounded-2xl p-8 cursor-pointer hover-glow">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell us your story",
      description:
        "Enter just 2 phrases: your goal + what makes you unique. That's it.",
      icon: FileText,
    },
    {
      number: "02",
      title: "AI crafts your letter",
      description:
        "Our AI writes a personalized, culturally-aware cover letter in seconds.",
      icon: Sparkles,
    },
    {
      number: "03",
      title: "Download & Apply",
      description:
        "Get your letter in PDF, DOCX, or simply copy. Ready to submit.",
      icon: Download,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            From zero to <span className="text-gradient">application</span> in
            minutes
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Three simple steps. No resume needed. Just your story.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-hover rounded-2xl p-8 text-center h-full">
                <div className="text-6xl font-display font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronRight className="w-8 h-8 text-primary/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "150+", label: "Countries", icon: Globe },
    { value: "50,000+", label: "Letters Generated", icon: FileText },
    { value: "15+", label: "Languages", icon: Languages },
    { value: "4.9/5", label: "User Rating", icon: Star },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto text-primary mb-4" />
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Emily Chen",
      role: "Marketing Intern",
      location: "Tokyo, Japan",
      quote:
        "I landed my dream internship at a top Japanese company. MyTegami made my cover letter sound authentically native.",
      avatar: "EC",
    },
    {
      name: "Carlos Silva",
      role: "Software Developer",
      location: "São Paulo, Brazil",
      quote:
        "Applied to jobs in Berlin and got 3 interviews in the first week. The German version was flawless.",
      avatar: "CS",
    },
    {
      name: "Aisha Patel",
      role: "Data Analyst",
      location: "London, UK",
      quote:
        "As a non-native English speaker, I always struggled with cover letters. This tool changed everything.",
      avatar: "AP",
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Global success <span className="text-gradient">stories</span>
          </h2>
          <p className="text-xl text-text-secondary">
            Join thousands who've landed their dream jobs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-hover rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-text-primary mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.role}, {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "1 cover letter/month",
        "Basic translation",
        "PDF download",
        "Email support",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$9",
      period: "/month",
      description: "For serious job seekers",
      features: [
        "Unlimited cover letters",
        "All languages",
        "Human editing",
        "Priority support",
        "Multiple formats",
        "LinkedIn messages",
      ],
      cta: "Get Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and recruiters",
      features: [
        "Everything in Pro",
        "API access",
        "Team management",
        "Dedicated manager",
        "Custom training",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Simple, <span className="text-gradient">transparent</span> pricing
          </h2>
          <p className="text-xl text-text-secondary">
            Start free. Upgrade when you're ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${
                plan.popular ? "md:-mt-4 md:mb-4" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-medium text-white">
                  Most Popular
                </div>
              )}
              <div
                className={`h-full glass-hover rounded-2xl p-8 ${
                  plan.popular ? "border-primary/50 glow" : ""
                }`}
              >
                <h3 className="text-2xl font-display font-bold mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-display font-bold text-gradient">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-text-secondary">{plan.period}</span>
                  )}
                </div>
                <p className="text-text-secondary mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30"
                      : "bg-surface-elevated text-text-primary hover:bg-border"
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterForm({ inFooter = false }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Newsletter signup:", email);
    setStatus("success");
    setEmail("");
    
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className={`flex gap-3 ${inFooter ? "flex-col sm:flex-row" : ""}`}>
      <div className="relative flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-xl glass text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary/50"
          required
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={status === "loading" || status === "success"}
        className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 ${
          status === "success"
            ? "bg-green-500 text-white"
            : "bg-gradient-to-r from-primary to-secondary text-white"
        }`}
      >
        {status === "loading" ? (
          <span className="animate-pulse">Subscribing...</span>
        ) : status === "success" ? (
          <>
            <Check className="w-5 h-5" />
            Subscribed!
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Subscribe
          </>
        )}
      </motion.button>
    </form>
  );
}

function TrustBadges() {
  const badges = [
    { name: "SOC 2", desc: "Certified" },
    { name: "GDPR", desc: "Compliant" },
    { name: "256-bit", desc: "Encryption" },
    { name: "ISO 27001", desc: "Certified" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-4">
      {badges.map((badge) => (
        <div key={badge.name} className="flex items-center gap-2 text-text-secondary">
          <Shield className="w-5 h-5 text-green-400" />
          <span className="text-sm font-medium">{badge.name}</span>
          <span className="text-sm opacity-60">• {badge.desc}</span>
        </div>
      ))}
    </div>
  );
}

function CTA() {
  return (
    <section id="cta" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-aurora opacity-40" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to go <span className="text-gradient">global</span>?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Join 50,000+ professionals who've transformed their job search.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <NewsletterForm />
          </div>

          <TrustBadges />
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Services", href: "#services" },
      { label: "How it Works", href: "#how-it-works" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
    ],
    Resources: [
      { label: "Help Center", href: "#" },
      { label: "API Docs", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Status", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://x.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:info@mytegami.win", label: "Email" },
  ];

  return (
    <footer className="py-16 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 text-xl font-display font-bold mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <span className="text-gradient">MyTegami</span>
            </a>
            <p className="text-text-secondary mb-4 max-w-xs">
              Empowering global talent to express themselves confidently.
              Write boldly. Apply globally.
            </p>
            
            <div className="mb-6">
              <p className="text-sm text-text-secondary mb-3">Get the App</p>
              <div className="flex gap-3">
                <a href="#" className="transition-transform hover:scale-105">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="App Store" 
                    className="h-10 rounded-lg"
                  />
                </a>
                <a href="#" className="transition-transform hover:scale-105">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_US.svg" 
                    alt="Google Play" 
                    className="h-10 rounded-lg"
                  />
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center hover:bg-border transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="text-center md:text-left">
              <p className="text-text-secondary text-sm mb-2">
                Subscribe to our newsletter for job tips & AI insights
              </p>
              <NewsletterForm inFooter />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center justify-center gap-4 text-text-secondary">
              <a href="mailto:info@mytegami.win" className="flex items-center gap-2 hover:text-text-primary">
                <Mail className="w-4 h-4" />
                info@mytegami.win
              </a>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +1234567890
              </span>
            </div>
            <div className="flex items-center gap-4">
              <TrustBadges />
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border/30 text-center text-text-secondary text-sm">
            © 2025 MyTegami.win. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <Services />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}