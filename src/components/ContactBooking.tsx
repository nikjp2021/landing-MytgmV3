"use client";

import { motion } from "framer-motion";
import { Calendar, Video, Clock, ArrowRight } from "lucide-react";

const slots = [
  { day: "Tomorrow", time: "2:00 PM", available: true },
  { day: "Tomorrow", time: "4:00 PM", available: true },
  { day: "Wed, Apr 22", time: "10:00 AM", available: true },
  { day: "Wed, Apr 22", time: "2:00 PM", available: false },
  { day: "Thu, Apr 23", time: "11:00 AM", available: true },
  { day: "Thu, Apr 23", time: "3:00 PM", available: true },
];

export default function ContactBooking() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-premium rounded-2xl p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
          <Calendar className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-display font-bold">Book a Demo Call</h3>
          <p className="text-sm text-text-secondary">15 minutes, free consultation</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {slots.map((slot, i) => (
          <button
            key={i}
            disabled={!slot.available}
            className={`p-3 rounded-xl text-left transition-all ${
              slot.available
                ? "bg-surface-elevated hover:bg-border cursor-pointer"
                : "bg-surface-elevated/50 cursor-not-allowed opacity-50"
            }`}
          >
            <p className="text-sm font-medium">{slot.day}</p>
            <p className="text-xs text-text-secondary">{slot.time}</p>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
        <Video className="w-4 h-4" />
        <span>Video call via Google Meet</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
        <Clock className="w-4 h-4" />
        <span>15 minutes</span>
      </div>

      <button className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center justify-center gap-2">
        Confirm Booking
        <ArrowRight className="w-4 h-4" />
      </button>

      <p className="mt-4 text-xs text-text-secondary text-center">
        [PLACEHOLDER: Connect with Calendly embed - calendly.com/mytegami]
      </p>
    </motion.div>
  );
}