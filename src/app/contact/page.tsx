"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import ContactBooking from "@/components/ContactBooking";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateField = (field: string, value: string) => {
    switch (field) {
      case "name":
        return value.trim().length < 2 ? "Name must be at least 2 characters" : "";
      case "email":
        return !value ? "Email is required" : !validateEmail(value) ? "Please enter a valid email" : "";
      case "message":
        return value.trim().length < 10 ? "Message must be at least 10 characters" : "";
      default:
        return "";
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field as keyof typeof touched]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.values(newErrors).some((error) => error)) return;

    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact form:", formData);
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_200%] animate-gradient">Touch</span>
          </h1>
          <p className="text-xl text-text-secondary">
            We're here to help with any questions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Email</p>
                  <a href="mailto:info@mytegami.win" className="font-medium hover:text-primary">
                    info@mytegami.win
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Phone</p>
                  <a href="tel:+1234567890" className="font-medium hover:text-primary">
                    +1234567890
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Location</p>
                  <p className="font-medium">Remote / Worldwide</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 p-6 glass-premium rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Business Inquiries</h3>
              <p className="text-text-secondary mb-4">
                For B2B partnerships, university licensing, or career services integration:
              </p>
              <a
                href="mailto:partners@mytegami.win"
                className="text-primary hover:text-white transition-colors"
              >
                partners@mytegami.win
              </a>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Response Time</h3>
              <p className="text-text-secondary">
                We typically respond within <span className="text-green-400 font-medium">24 hours</span> on business days.
              </p>
            </div>
            <ContactBooking />
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <label className="text-sm text-text-secondary">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  placeholder="Your name"
                  className={`w-full mt-1 px-4 py-3 rounded-xl glass text-text-primary placeholder:text-text-secondary focus:outline-none ${
                    errors.name && touched.name ? "border-red-500 focus:border-red-500" : "focus:border-primary"
                  }`}
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="text-sm text-text-secondary">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="your@email.com"
                  className={`w-full mt-1 px-4 py-3 rounded-xl glass text-text-primary placeholder:text-text-secondary focus:outline-none ${
                    errors.email && touched.email ? "border-red-500 focus:border-red-500" : "focus:border-primary"
                  }`}
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="text-sm text-text-secondary">Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  placeholder="How can we help you?"
                  rows={5}
                  className={`w-full mt-1 px-4 py-3 rounded-xl glass text-text-primary placeholder:text-text-secondary focus:outline-none resize-none ${
                    errors.message && touched.message ? "border-red-500 focus:border-red-500" : "focus:border-primary"
                  }`}
                  required
                />
                {errors.message && touched.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "loading" || status === "success"}
                className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  "Sending..."
                ) : status === "success" ? (
                  <>
                    <Check className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}