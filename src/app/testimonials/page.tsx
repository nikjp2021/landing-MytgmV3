"use client";

import { motion } from "framer-motion";
import { Star, Globe, FileText, Languages, MapPin } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Emily Chen",
      role: "Marketing Intern",
      location: "Tokyo, Japan",
      avatar: "EC",
      quote: "I landed my dream internship at a top Japanese company. MyTegami made my cover letter sound authentically native. The Japanese Career Suite was a game-changer!",
      result: "Dream internship secured",
    },
    {
      name: "Carlos Silva",
      role: "Software Developer",
      location: "São Paulo → Berlin",
      avatar: "CS",
      quote: "Applied to jobs in Berlin and got 3 interviews in the first week. The German version was flawless. Worth every penny.",
      result: "3 interviews in Week 1",
    },
    {
      name: "Aisha Patel",
      role: "Data Analyst",
      location: "London, UK",
      avatar: "AP",
      quote: "As a non-native English speaker, I always struggled with cover letters. This tool changed everything. My confidence soared.",
      result: "First UK job landed",
    },
    {
      name: "Kenji Yamamoto",
      role: "UX Designer",
      location: "Tokyo → San Francisco",
      avatar: "KY",
      quote: "The Resume Optimizer helped me pass ATS systems I was rejected by before. Got 2 offers inmy first month.",
      result: "2 job offers received",
    },
    {
      name: "Fatima Al-Hassan",
      role: "Marketing Manager",
      location: "Dubai → Amsterdam",
      avatar: "FA",
      quote: "Moving from Dubai to Amsterdam seemed impossible until I used MyTegami. My applications finally felt authentic.",
      result: "Relocated to Amsterdam",
    },
    {
      name: "Marco Rossi",
      role: "Product Manager",
      location: "Milan → Singapore",
      avatar: "MR",
      quote: "The multilingual support is incredible. Got responses in English, German, and even Mandarin. Highly recommend!",
      result: "Multiple offers received",
    },
  ];

  const stats = [
    { value: "150+", label: "Countries", icon: Globe },
    { value: "50,000+", label: "Letters Generated", icon: FileText },
    { value: "15+", label: "Languages", icon: Languages },
    { value: "4.9/5", label: "User Rating", icon: Star },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_200%] animate-gradient">Success</span> Stories
          </h1>
          <p className="text-xl text-text-secondary">
            Join thousands who've landed their dream jobs
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-premium rounded-xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-4xl font-display font-bold mb-1">{stat.value}</div>
              <div className="text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full glass-premium rounded-2xl p-6 group-hover:shadow-glow transition-all duration-500">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-text-primary mb-6 leading-relaxed">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-text-secondary">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-sm text-green-400">{testimonial.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="glass-premium rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">Be Our Next Success Story</h2>
          <p className="text-text-secondary mb-6">
            Join 50,000+ professionals who've transformed their career with MyTegami.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold"
          >
            Start Free Today
          </motion.button>
        </div>
      </div>
    </div>
  );
}