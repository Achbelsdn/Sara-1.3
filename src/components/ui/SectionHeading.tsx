"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 lg:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {subtitle && (
        <span className="inline-block text-gold-500 text-sm tracking-[0.3em] uppercase font-light mb-3">
          {subtitle}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-dark-900" : "text-cream-100"
        }`}
      >
        {title}
      </h2>
      <div className={`divider-gold w-20 mx-auto mb-6 ${align === "left" ? "mx-0" : ""}`} />
      {description && (
        <p
          className={`max-w-2xl text-lg font-light leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-dark-500" : "text-dark-300"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
