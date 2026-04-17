"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
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
} from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2 text-xl font-display font-bold"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Globe className="w-4 h-4 text-white" />
          </div>
          <span className="text-gradient">MyTegami</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            How it Works
          </a>
          <a
            href="#features"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            Pricing
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            Log in
          </a>
          <motion.a
            href="#"
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Free
          </motion.a>
        </div>

        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-current transition-transform ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-opacity ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-transform ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-aurora opacity-60" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/20 blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/3 w-60 h-60 rounded-full bg-accent/10 blur-[80px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
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
            <span className="text-gradient">Apply Globally.</span>
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
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg flex items-center justify-center gap-2 glow hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Start Free
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl glass text-text-primary font-semibold text-lg flex items-center justify-center gap-2 hover:bg-surface-elevated transition-all"
            >
              See How It Works
            </motion.button>
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

        {/* Right - Interactive Demo */}
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
            className="relative glass rounded-2xl p-6 md:p-8 glow"
          >
            {/* Demo Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-auto text-sm text-text-secondary">
                Live Preview
              </span>
            </div>

            {/* Demo Steps */}
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
                <div className="text-text-primary font-medium">
                  "I want to work as a software engineer in Tokyo"
                </div>
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
                <div className="text-text-primary font-medium">
                  "3 years of full-stack experience, remote work fluent"
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-4 border border-primary/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-medium">
                    ✨ AI Generated
                  </span>
                  <span className="text-xs text-text-secondary">
                    in 0.3s
                  </span>
                </div>
                <div className="text-xs text-text-secondary line-clamp-3">
                  Dear Hiring Manager, <br />
                  I am writing to express my sincere interest in the Software
                  Engineer position at your company. With three years of
                  full-stack development experience and a passion for
                  innovation...
                </div>
              </motion.div>
            </div>

            {/* Demo Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex gap-3 mt-6"
            >
              <button className="flex-1 py-3 rounded-lg bg-surface-elevated text-text-primary text-sm font-medium flex items-center justify-center gap-2 hover:bg-border transition-colors">
                <Download className="w-4 h-4" />
                PDF
              </button>
              <button className="flex-1 py-3 rounded-lg bg-surface-elevated text-text-primary text-sm font-medium flex items-center justify-center gap-2 hover:bg-border transition-colors">
                <Copy className="w-4 h-4" />
                Copy
              </button>
              <button className="flex-1 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" />
                Edit
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
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

function BentoGrid() {
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
              <div className="h-full glass-hover rounded-2xl p-6 md:p-8 cursor-pointer">
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
    <section className="py-24 relative">
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
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
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
                plan.popular
                  ? "md:-mt-4 md:mb-4"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-medium text-white">
                  Most Popular
                </div>
              )}
              <div
                className={`h-full glass-hover rounded-2xl p-8 ${
                  plan.popular
                    ? "border-primary/50 glow"
                    : ""
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

function CTA() {
  return (
    <section className="py-24 relative">
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
            <motion.input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-xl glass text-text-primary placeholder:text-text-secondary w-full sm:w-80 focus:outline-none focus:border-primary/50"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold glow"
            >
              Start Free →
            </motion.button>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>No credit card</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const links = {
    Product: [
      "Features",
      "Pricing",
      "How it Works",
      "Testimonials",
    ],
    Company: ["About", "Blog", "Careers", "Contact"],
    Resources: ["Help Center", "Privacy Policy", "Terms of Service"],
    Connect: ["Twitter", "LinkedIn", "Email"],
  };

  return (
    <footer className="py-16 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 text-xl font-display font-bold mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <span className="text-gradient">MyTegami</span>
            </a>
            <p className="text-text-secondary mb-4 max-w-xs">
              Empowering global talent to express themselves confidently. Write
              boldly. Apply globally.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center hover:bg-border transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center hover:bg-border transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center hover:bg-border transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            © 2025 MyTegami.win. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <a href="#" className="hover:text-text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              Terms
            </a>
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
      <BentoGrid />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}