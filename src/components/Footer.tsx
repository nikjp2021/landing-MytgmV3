"use client";

import Link from "next/link";
import { Globe, Mail, Phone, Twitter, Linkedin, Shield } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/how-it-works" },
  ],
  Company: [
    { label: "About", href: "/#about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/#privacy" },
    { label: "Terms of Service", href: "/#terms" },
  ],
  Connect: [
    { label: "Twitter", href: "https://x.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://x.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:info@mytegami.win", label: "Email" },
];

const trustBadges = [
  { name: "SOC 2", desc: "Certified" },
  { name: "GDPR", desc: "Compliant" },
  { name: "256-bit", desc: "Encryption" },
];

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-display font-bold mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <span className="text-gradient">MyTegami</span>
            </Link>
            <p className="text-text-secondary mb-4 max-w-xs">
              Empowering global talent to express themselves confidently.
              Write boldly. Apply globally.
            </p>
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
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center justify-center gap-4 text-text-secondary text-sm">
              <a href="mailto:info@mytegami.win" className="flex items-center gap-2 hover:text-white">
                <Mail className="w-4 h-4" />
                info@mytegami.win
              </a>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +1234567890
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {trustBadges.map((badge) => (
                <div key={badge.name} className="flex items-center gap-2 text-text-secondary text-sm">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>{badge.name}</span>
                  <span className="opacity-60">• {badge.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center text-text-secondary text-sm">
            © 2025 MyTegami.win. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}