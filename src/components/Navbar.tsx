"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { GlobeIcon } from "@/components/icons";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Features",
    href: "/features",
    dropdown: [
      { label: "All Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    label: "Japan Hub",
    href: "/japan",
    dropdown: [
      { label: "ESG Guide", href: "/japan" },
      { label: "履歴書 Templates", href: "/japan" },
      { label: "SPI Practice", href: "/japan" },
      { label: "Keigo Guide", href: "/japan" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "glass-premium py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-xl font-display font-bold">
          <div className="w-10 h-10">
            <GlobeIcon size={40} />
          </div>
          <span className="text-gradient">MyTegami</span>
          <span className="hidden sm:block px-2 py-0.5 text-[10px] font-medium bg-accent/20 text-accent rounded-full">
            Nagayoshi Lab
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-3 py-2 text-sm transition-colors ${
                  isActive(item.href)
                    ? "text-white font-medium"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                {item.label}
                {item.dropdown && <ChevronRight className="w-3 h-3 rotate-90" />}
              </Link>

              <AnimatePresence>
                {item.dropdown && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 py-2 glass-premium rounded-xl shadow-lg z-[100]"
                  >
                    {item.dropdown.map((drop) => (
                      <Link
                        key={drop.label}
                        href={drop.href}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:text-white hover:bg-white/5"
                      >
                        <ChevronRight className="w-3 h-3" />
                        {drop.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/pricing"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium"
            >
              Start Free
            </Link>
          </motion.div>
        </div>

        <button
          className="lg:hidden text-white p-2"
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
            className="fixed inset-0 top-[60px] bg-background/95 backdrop-blur-xl z-40 lg:hidden"
          >
            <div className="p-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 text-lg border-b border-border ${
                      isActive(item.href) ? "text-white" : "text-text-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown?.map((drop) => (
                    <Link
                      key={drop.label}
                      href={drop.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 pl-6 text-base text-text-secondary border-b border-border/50"
                    >
                      {drop.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-4">
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/pricing"
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
