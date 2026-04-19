"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/japan", label: "Japan Hub" },
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/story", label: "Our Story" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-premium py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-display font-bold">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-gradient hidden sm:block">MyTegami</span>
            <div className="flex items-center gap-1 text-xs">
              <span className="text-primary/80">From</span>
              <span className="text-accent font-medium">Nagayoshi Lab</span>
              <span className="text-primary/80 mx-1">•</span>
              <span className="text-primary/80">Shizuoka Univ</span>
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                isActive(link.href)
                  ? "text-white font-medium"
                  : "text-text-secondary hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className="text-text-secondary hover:text-white transition-colors text-sm"
          >
            Log in
          </Link>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            <Link
              href="/#"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium"
            >
              Start Free
            </Link>
          </motion.div>
        </div>

        <button
          className="md:hidden text-white p-2"
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
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 text-lg border-b border-border ${
                    isActive(link.href) ? "text-white" : "text-text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Link
                  href="/"
                  className="block py-3 text-lg text-text-secondary"
                >
                  Log in
                </Link>
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/#"
                    className="block w-full py-4 text-center rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold"
                  >
                    Start Free
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}