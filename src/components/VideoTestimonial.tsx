"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoTestimonialProps {
  name: string;
  role: string;
  location: string;
  quote: string;
  thumbnail?: string;
}

export default function VideoTestimonial({
  name,
  role,
  location,
  quote,
  thumbnail,
}: VideoTestimonialProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-premium rounded-2xl overflow-hidden"
    >
      <div className="relative aspect-video bg-background-dark">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30" />
        )}

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePlay}
            className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </motion.button>
        </div>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>

        <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm text-white">
          {[name]}
        </div>
      </div>

      <div className="p-6">
        <p className="text-lg font-medium mb-2">&ldquo;{quote}&rdquo;</p>
        <p className="text-sm text-text-secondary">
          {role} · {location}
        </p>
      </div>

      <div className="px-6 pb-4 text-xs text-text-secondary">
        [PLACEHOLDER: Video asset to be added]
      </div>
    </motion.div>
  );
}