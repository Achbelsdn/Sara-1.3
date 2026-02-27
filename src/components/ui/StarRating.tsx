"use client";

import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  interactive = false,
  onChange,
}: StarRatingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className="flex gap-1">
      {Array.from({ length: maxRating }, (_, i) => (
        <button
          key={i}
          type={interactive ? "button" : undefined}
          onClick={() => interactive && onChange?.(i + 1)}
          className={`${interactive ? "cursor-pointer hover:scale-110 transition-transform" : "cursor-default"}`}
          disabled={!interactive}
          aria-label={`${i + 1} étoile${i > 0 ? "s" : ""}`}
        >
          <Star
            className={`${sizeClasses[size]} ${
              i < rating
                ? "fill-gold-400 text-gold-400"
                : "fill-transparent text-dark-600"
            } transition-colors`}
          />
        </button>
      ))}
    </div>
  );
}
