"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, ArrowRight } from "lucide-react";
import Link from "next/link";
import { trackExitPopupCta } from "@/lib/analytics";

export default function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (hasTriggered) return;
      if (sessionStorage.getItem("exitPopupShown")) return;

      const mouseY = e.clientY;
      if (mouseY < 10) {
        setIsVisible(true);
        setHasTriggered(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  useEffect(() => {
    if (sessionStorage.getItem("exitPopupShown")) return;

    const timer = setTimeout(() => {
      if (!hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [hasTriggered]);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={closePopup}
        />

        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative max-w-md w-full glass-premium rounded-2xl p-8"
        >
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
            >
              <Gift className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-2xl font-display font-bold mb-2">
              Wait! Don&apos;t leave yet 🎁
            </h2>
            <p className="text-text-secondary mb-6">
              Get <span className="text-accent font-bold">10% OFF</span> your first month when you start now.
            </p>

            <Link
              href="/pricing"
              onClick={() => {
                closePopup();
                trackExitPopupCta();
              }}
              className="block w-full py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              Claim Discount
              <ArrowRight className="w-5 h-5" />
            </Link>

            <p className="mt-4 text-xs text-text-secondary">
              [PLACEHOLDER: Connect to email capture for discount code]
            </p>

            <button
              onClick={closePopup}
              className="mt-3 text-sm text-text-secondary hover:text-white"
            >
              No thanks, I don&apos;t want to save
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}