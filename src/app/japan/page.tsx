"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Target,
  Shield,
  MessageSquare,
  Check,
} from "lucide-react";

export default function JapanPage() {
  const [language, setLanguage] = useState<'en' | 'ja'>('en');

  const t = {
    en: {
      heroTitle: "Tools for Working in Japan",
      heroSubtitle:
        "Specialized features for foreigners seeking jobs in Japan's competitive market",
      ctaFree: "Try Free Tools",
      ctaPro: "Get Japan Career Suite",
      sections: [
        {
          title: "ESG (Entry Sheet Guide)",
          description:
            "Master Japanese corporate applications with guided ESG templates",
          features: [
            "Industry-specific ESG templates",
            "Step-by-step filling guide",
            "Sample answers from successful applicants",
            "Keigo (honorific) language support",
            "Company research integration",
          ],
          icon: FileText,
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          title: "履歴書 (Resume) Templates",
          description:
            "Professional Japanese resume formats that get past ATS systems",
          features: [
            "Traditional rirekisho format",
            "Modern hybrid templates",
            "Photo placement guidelines",
            "Education & work history optimization",
            "Skills section tailored for Japanese employers",
          ],
          icon: Target,
          gradient: "from-purple-500 to-pink-500",
        },
        {
          title: "SPI Practice & Preparation",
          description:
            "Get ready for Japan's most common aptitude test with practice materials",
          features: [
            "Verbal reasoning practice",
            "Non-verbal & quantitative sections",
            "Timed test simulations",
            "Answer explanations & strategies",
            "Score improvement tracking",
          ],
          icon: Shield,
          gradient: "from-green-500 to-emerald-500",
        },
        {
          title: "Keigo & Business Japanese",
          description:
            "Learn the polite language essential for Japanese workplace success",
          features: [
            "Sonkeigo (respectful) expressions",
            "Kenjougo (humble) forms",
            "Teineigo (polite) basics",
            "Email & phone etiquette",
            "Meeting & negotiation phrases",
          ],
          icon: MessageSquare,
          gradient: "from-yellow-400 to-orange-500",
        },
      ],
    },
    ja: {
      heroTitle: "日本で仕事をするためのツール",
      heroSubtitle:
        "日本での就職活動を成功に導く、外国人向け特別機能",
      ctaFree: "無料ツールを試す",
      ctaPro: "Japan Career Suite を取得",
      sections: [
        {
          title: "ESG（エントリーシートガイド）",
          description:
            "ガイド付きテンプレートで日本企業の応募をマスター",
          features: [
            "業界別ESGテンプレート",
            "ステップバイステップ記入ガイド",
            "合格者サンプル回答",
            "敬語（ honorific ）言語サポート",
            "企業調査統合",
          ],
          icon: FileText,
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          title: "履歴書（レキシショ）テンプレート",
          description:
            "ATSシステムを通過するプロフェッショナルな日本履歴書フォーマット",
          features: [
            "伝統的な rirekisho フォーマット",
            "モダンハイブリッドテンプレート",
            "写真配置ガイドライン",
            "学歴・職歴の最適化",
            "日本企業向けスキルセクション",
          ],
          icon: Target,
          gradient: "from-purple-500 to-pink-500",
        },
        {
          title: "SPI 対策・練習",
          description:
            "日本で最も一般的な適性試験の練習教材で準備万端",
          features: [
            "言語問題練習",
            "非言語・数量セクション",
            "時間制限テストシミュレーション",
            "答えの解説と戦略",
            "スコア改善トラッキング",
          ],
          icon: Shield,
          gradient: "from-green-500 to-emerald-500",
        },
        {
          title: "敬語・ビジネス日本語",
          description:
            "日本の職場で成功するために必要な敬語を学ぶ",
          features: [
            "尊敬語（ sonkeigo ）表現",
            "謙譲語（ kenjougo ）形式",
            "丁寧語（ teineigo ）基礎",
            "メール・電話マナー",
            "会議・交渉フレーズ",
          ],
          icon: MessageSquare,
          gradient: "from-yellow-400 to-orange-500",
        },
      ],
    },
  }[language];

  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-[60vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0A1628] to-black/80"
      >
        {/* Language Toggle inside hero */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              language === 'ja'
                ? "bg-gradient-to-r from-primary to-secondary text-white"
                : "glass text-text-secondary hover:text-white"
            }`}
          >
            {language === 'en' ? '日本語' : 'English'}
          </button>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_200%] text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-glow"
              >
                {t.ctaFree}
              </motion.button>
            </Link>
            <Link href="/pricing">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl glass-premium text-white font-semibold text-lg flex items-center justify-center gap-2"
              >
                {t.ctaPro}
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Sections Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20"
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Japan-Specific Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full glass-premium rounded-2xl p-6 group-hover:shadow-glow transition-all duration-500">
                  <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${section.gradient} flex items-center justify-center`}>
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{section.title}</h3>
                  <p className="text-text-secondary mb-6">{section.description}</p>
                  <ul className="space-y-3 text-sm">
                    {section.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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
            Ready to Conquer the Japanese Job Market?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Access specialized tools designed for success in Japan's unique employment landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_200%] text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-glow"
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
                Get Japan Career Suite
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}