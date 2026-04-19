"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Sparkles,
  Check,
  Star,
  ArrowRight,
} from "lucide-react";

export default function StoryPage() {
  return (
    <>
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-[60vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0A1628] to-black/80"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
            Built by a Migrant Student,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_200%] animate-gradient">
              For Global Job Seekers
            </span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            Born from personal struggle in Nagayoshi Lab, Shizuoka University.
            Now empowering 50,000+ job seekers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
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
          </div>
        </div>
      </motion.div>

      {/* Origin Story */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-24"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            The Origin Story
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              key="origin"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="prose prose-lg max-w-none"
            >
              <h3 className="text-2xl font-display font-bold mb-4">
                It Started With Frustration
              </h3>
              <p className="mb-6">
                In 2019, I arrived in Japan as an international student.
                Excited to pursue my dreams, I quickly hit a wall:
                <strong>Japanese job applications</strong>.
              </p>
              <p className="mb-6">
                Unlike Western resumes, Japanese companies expect:
                <br />
                • <strong>履歴書 (Rirekisho)</strong> - strict format resumes<br />
                • <strong>ESG (Entry Sheet Guide)</strong> - detailed questionnaires<br />
                • <strong>Keigo</strong> - honorific business language<br />
                • Cultural nuances that AI translation misses
              </p>
              <p className="mb-6">
                I spent weeks on single applications, got rejected,
                and felt hopeless. My Japanese wasn't the problem –
                it was knowing <em>how</em> to present myself.
              </p>
            </motion.div>

            <motion.div
              key="solution"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="prose prose-lg max-w-none"
            >
              <h3 className="text-2xl font-display font-bold mb-4">
                The Nagayoshi Lab Solution
              </h3>
              <p className="mb-6">
                Working in <strong>Nagayoshi Lab</strong> at Shizuoka University,
                I had access to researchers who understood:
                <br />
                • Information systems for job applications<br />
                • Cultural AI adaptation<br />
                • User-centered design for global talent
              </p>
              <p className="mb-6">
                I built a prototype to help myself – then realized
                thousands of international students faced the same struggle.
              </p>
              <p className="mb-6">
                What started as a personal tool became
                <strong>MyTegami</strong> – AI-powered cover letters
                that speak like a local, no resume needed.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Research Backing */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 bg-surface-elevated"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-display font-bold mb-8">
            Research-Backed & Trusted
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
              >
                <Globe className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-medium mb-2">150+ Countries</h3>
              <p className="text-text-secondary">Global reach</p>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center"
              >
                <Star className="w-8 h-8 text-green-400" />
              </motion.div>
              <h3 className="text-xl font-medium mb-2">4.9/5 Rating</h3>
              <p className="text-text-secondary">50,000+ reviews</p>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center"
              >
                <Check className="w-8 h-8 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-medium mb-2">Research-Backed</h3>
              <p className="text-text-secondary">Nagayoshi Lab, Shizuoka Univ</p>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center"
              >
                <Sparkles className="w-8 h-8 text-purple-400" />
              </motion.div>
              <h3 className="text-xl font-medium mb-2">AI-Powered</h3>
              <p className="text-text-secondary">Gemini 2.5 Flash</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-24"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Ready to Transform Your Job Search?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Join students and professionals who've landed jobs at top companies worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-glow"
              >
                Start Free Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="/pricing">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl glass-premium text-white font-semibold text-lg flex items-center justify-center gap-2"
              >
                See Plans
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Footer CTA - Optional */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-16 bg-gradient-to-br from-primary/10 to-black/50"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-text-secondary italic max-w-2xl mx-auto">
            "MyTegami didn't just help me write cover letters –<br />
            it helped me understand how to tell my story in a way that resonates."
          </p>
          <p className="mt-4 text-xs text-text-secondary">
            — Founder, Nagayoshi Lab, Shizuoka University
          </p>
        </div>
      </motion.div>
    </>
  );
}