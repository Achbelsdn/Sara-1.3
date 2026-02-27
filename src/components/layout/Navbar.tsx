"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "Menu" },
  { href: "/galerie", label: "Galerie" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/avis", label: "Avis" },
  { href: "/evenements", label: "Événements" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-950/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-gold-500/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 border-2 border-gold-500 rounded-full flex items-center justify-center group-hover:border-gold-300 transition-colors">
                <span className="font-heading text-gold-500 text-lg lg:text-xl font-bold group-hover:text-gold-300 transition-colors">
                  R
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl lg:text-2xl font-bold text-cream-100 tracking-wide">
                La Réserve
              </span>
              <span className="text-[10px] lg:text-xs text-gold-500 tracking-[0.3em] uppercase font-light">
                Restaurant
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="animated-underline text-sm text-cream-200 hover:text-gold-400 transition-colors tracking-wide uppercase font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/reservation"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold text-sm rounded-full transition-all btn-glow uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              Réserver
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-cream-200 hover:text-gold-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark-950/98 backdrop-blur-xl border-t border-gold-500/10"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 text-cream-200 hover:text-gold-400 hover:bg-dark-900/50 rounded-lg transition-all text-lg font-light tracking-wide"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  href="/reservation"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-full transition-all btn-glow uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4" />
                  Réserver une table
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
