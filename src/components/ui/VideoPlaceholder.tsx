"use client";

import { motion } from "framer-motion";
import { Play, Video } from "lucide-react";

interface VideoPlaceholderProps {
  videoUrl?: string | null;
  title?: string;
  className?: string;
  aspectRatio?: "video" | "square" | "wide";
}

export default function VideoPlaceholder({
  videoUrl,
  title = "Vidéo",
  className = "",
  aspectRatio = "video",
}: VideoPlaceholderProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
  };

  if (videoUrl) {
    return (
      <div className={`relative ${aspectClasses[aspectRatio]} rounded-2xl overflow-hidden ${className}`}>
        <video
          src={videoUrl}
          controls
          className="w-full h-full object-cover"
          poster=""
        >
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative ${aspectClasses[aspectRatio]} video-placeholder rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-4 ${className}`}
    >
      <div className="w-20 h-20 rounded-full border-2 border-gold-500/30 flex items-center justify-center">
        <Play className="w-8 h-8 text-gold-500/50 ml-1" />
      </div>
      <div className="text-center">
        <p className="text-gold-500/50 text-sm font-light tracking-wide flex items-center gap-2">
          <Video className="w-4 h-4" />
          {title}
        </p>
        <p className="text-dark-500 text-xs mt-1">
          Ajoutez une vidéo depuis le panneau admin
        </p>
      </div>
    </motion.div>
  );
}
