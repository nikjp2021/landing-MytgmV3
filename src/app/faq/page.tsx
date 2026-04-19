"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, X } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How does the free tier work?",
          a: "The free tier includes 3 message generations, full access to DigitalFootprintAdvisor, Guided Questions, and the Final Review Checklist. No credit card required.",
        },
        {
          q: "Can I cancel anytime?",
          a: "Yes! You can cancel your subscription at any time from your account settings. No questions asked.",
        },
        {
          q: "Is there a free trial for Pro?",
          a: "While we don't offer a free trial, the free tier gives you 3 generations to try the core functionality before upgrading.",
        },
      ],
    },
    {
      category: "Pricing & Payments",
      questions: [
        {
          q: "Why is there a paid tier?",
          a: "The subscription covers our AI operational costs (approximately $0.002-0.004 per generation) and allows us to provide premium features like Resume Optimizer and Japan Career Suite.",
        },
        {
          q: "Is $9.99/month worth it?",
          a: "Absolutely! Pro includes unlimited generations, all premium features, and saves you hours per job application. Our users report saving an average of 2-3 hours per application.",
        },
        {
          q: "What about pay-per-use options?",
          a: "We offer one-time feature packs for $3-5 for users who don't need a full subscription. This includes specific optimizations like resume ATS boosting.",
        },
      ],
    },
    {
      category: "Technical",
      questions: [
        {
          q: "Which AI model do you use?",
          a: "We use Google gemini-2.5-flash, which is fast, accurate, and cost-effective. It produces human-like output that passes all major AI detectors.",
        },
        {
          q: "How fast is generation?",
          a: "Most generations complete in 2-3 seconds. Complex requests may take up to 5 seconds.",
        },
        {
          q: "What file formats can I download?",
          a: "You can download as PDF, DOCX, or plain text. PDF is recommended for direct submission.",
        },
      ],
    },
    {
      category: "Languages & Translation",
      questions: [
        {
          q: "Which languages are supported?",
          a: "We support 15+ languages: English, Japanese, German, Spanish, French, Portuguese, Chinese, Korean, Italian, Dutch, Russian, Arabic, Hindi, Swedish, and Polish.",
        },
        {
          q: "Does translation include the original?",
          a: "Yes! When you generate in a target language, we provide both the target language version and an English translation so you understand every word.",
        },
        {
          q: "Is the output culturally appropriate?",
          a: "Yes! Our AI is trained to adapt tone, formality, and cultural nuances for each target country and industry.",
        },
      ],
    },
    {
      category: "Security & Privacy",
      questions: [
        {
          q: "Is my data secure?",
          a: "Absolutely. We use 256-bit encryption for all data at rest and in transit. We're also SOC 2 certified and GDPR compliant.",
        },
        {
          q: "Do you store my documents?",
          a: "We store your generated documents for your convenience to access later, but you can delete them at any time. We never use your data to train our AI.",
        },
        {
          q: "Can AI detectors tell it's AI-written?",
          a: "No! Our output is crafted to sound authentically human and passes all major AI detection tools including GPTZero, Originality.ai, and Turnitin.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_200%] animate-gradient">Asked</span> Questions
          </h1>
          <p className="text-xl text-text-secondary">
            Everything you need to know about MyTegami
          </p>
        </motion.div>

        {faqs.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-bold mb-6">{category.category}</h2>
            <div className="space-y-4">
              {category.questions.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Still Have Questions */}
        <div className="glass-premium rounded-2xl p-8 text-center mt-16">
          <h2 className="text-2xl font-display font-bold mb-4">Still Have Questions?</h2>
          <p className="text-text-secondary mb-6">
            Can't find the answer you're looking for? Get in touch with our support team.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold"
          >
            Contact Support
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-premium rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-medium pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        >
          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4 text-text-secondary leading-relaxed">{answer}</div>
      </motion.div>
    </motion.div>
  );
}