"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChefHat,
  UtensilsCrossed,
  Wine,
  Star,
  ArrowRight,
  MapPin,
  Clock,
  Phone,
  Play,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import StarRating from "@/components/ui/StarRating";

const features = [
  {
    icon: ChefHat,
    title: "Chef Passionné",
    description:
      "Notre chef crée des plats qui allient tradition et innovation, avec des ingrédients soigneusement sélectionnés.",
  },
  {
    icon: UtensilsCrossed,
    title: "Cuisine Raffinée",
    description:
      "Chaque assiette est une œuvre d'art, préparée avec amour et présentée avec élégance.",
  },
  {
    icon: Wine,
    title: "Cave d'Exception",
    description:
      "Une sélection de vins fins pour accompagner parfaitement chaque plat de notre menu.",
  },
];

const testimonials = [
  {
    name: "Marie L.",
    rating: 5,
    comment:
      "Une expérience culinaire exceptionnelle ! Le cadre est magnifique et le service impeccable.",
  },
  {
    name: "Jean-Pierre D.",
    rating: 5,
    comment:
      "La meilleure table de la région. Les plats sont créatifs et les saveurs incroyables.",
  },
  {
    name: "Sophie M.",
    rating: 5,
    comment:
      "Un moment magique du début à la fin. Je recommande vivement La Réserve !",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,152,42,0.08),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(114,47,55,0.1),transparent_60%)]" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-wine-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-gold-500 text-sm tracking-[0.4em] uppercase font-light mb-6">
              Bienvenue à
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6"
          >
            <span className="text-gradient-gold">La Réserve</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="divider-gold w-32 mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-accent text-xl sm:text-2xl lg:text-3xl text-cream-300 font-light italic mb-12 max-w-3xl mx-auto"
          >
            Une expérience culinaire d&apos;exception
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/reservation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-full transition-all btn-glow text-lg uppercase tracking-wider"
            >
              Réserver une table
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold-500/30 hover:border-gold-500 text-cream-200 hover:text-gold-400 rounded-full transition-all text-lg uppercase tracking-wider"
            >
              Découvrir le menu
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-gold-500/30 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-gold-500/50 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          VIDEO SHOWCASE SECTION
          ============================================ */}
      <section className="section-padding bg-dark-950">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            subtitle="Découvrez"
            title="Notre Univers"
            description="Plongez dans l'atmosphère unique de La Réserve à travers cette vidéo immersive."
          />
          <VideoPlaceholder
            title="Vidéo de présentation du restaurant"
            aspectRatio="wide"
            className="max-w-5xl mx-auto"
          />
        </div>
      </section>

      {/* ============================================
          FEATURES SECTION
          ============================================ */}
      <section className="section-padding bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Pourquoi nous choisir"
            title="L'Art de la Table"
            description="Chez La Réserve, nous cultivons l'excellence dans chaque détail pour vous offrir une expérience mémorable."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card rounded-2xl p-8 lg:p-10 text-center group hover:border-gold-500/30 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-cream-100 mb-4">
                  {feature.title}
                </h3>
                <p className="text-dark-300 font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FEATURED MENU PREVIEW
          ============================================ */}
      <section className="section-padding bg-dark-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Notre carte"
            title="Plats Signature"
            description="Découvrez quelques-unes de nos créations culinaires les plus appréciées."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-dark-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <UtensilsCrossed className="w-12 h-12 text-gold-500/20" />
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gold-500 text-dark-950 text-xs font-bold rounded-full uppercase tracking-wider">
                    Signature
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-cream-100 mb-2">
                    Plat Signature {item}
                  </h3>
                  <p className="text-dark-400 text-sm font-light mb-4">
                    Description du plat à ajouter depuis le panneau d&apos;administration.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold-500 font-heading text-xl font-bold">
                      --,-- €
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gold-500/30 hover:border-gold-500 text-cream-200 hover:text-gold-400 rounded-full transition-all uppercase tracking-wider text-sm"
            >
              Voir le menu complet
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          AMBIANCE VIDEO SECTION
          ============================================ */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,152,42,0.05),transparent_70%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-500 text-sm tracking-[0.3em] uppercase font-light mb-4 block">
              Ambiance
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100 mb-6">
              Vivez l&apos;Expérience
            </h2>
            <p className="text-dark-300 text-lg font-light max-w-2xl mx-auto mb-10">
              Découvrez l&apos;atmosphère chaleureuse et élégante de La Réserve.
            </p>
          </motion.div>

          <VideoPlaceholder
            title="Vidéo d'ambiance du restaurant"
            aspectRatio="video"
          />
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS SECTION
          ============================================ */}
      <section className="section-padding bg-dark-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Témoignages"
            title="Ce Que Disent Nos Clients"
            description="La satisfaction de nos clients est notre plus belle récompense."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card rounded-2xl p-8 relative"
              >
                <div className="absolute -top-3 left-8 text-6xl text-gold-500/20 font-heading">
                  &ldquo;
                </div>
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} size="sm" />
                </div>
                <p className="text-cream-300 font-light italic leading-relaxed mb-6">
                  {testimonial.comment}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                    <span className="text-gold-500 font-heading font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-cream-200 font-medium text-sm">
                    {testimonial.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/avis"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors text-sm uppercase tracking-wider"
            >
              Voir tous les avis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          MAP & INFO SECTION
          ============================================ */}
      <section className="section-padding bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Nous trouver"
            title="Venez Nous Rendre Visite"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Embed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-gold-500/10 h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zLa+R%C3%A9serve!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Emplacement de La Réserve"
              />
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-cream-100 mb-1">
                    Adresse
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/hDddYVyKbs7ATkWW8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    Voir sur Google Maps →
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-cream-100 mb-2">
                    Horaires d&apos;ouverture
                  </h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-dark-300">
                      <span className="text-cream-300">Lun - Jeu:</span> 11h30 - 22h00
                    </p>
                    <p className="text-dark-300">
                      <span className="text-cream-300">Ven - Sam:</span> 11h30 - 23h00
                    </p>
                    <p className="text-dark-300">
                      <span className="text-cream-300">Dimanche:</span> Fermé
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-cream-100 mb-1">
                    Réservation
                  </h3>
                  <p className="text-dark-300 text-sm mb-3">
                    Réservez votre table en ligne ou par téléphone.
                  </p>
                  <Link
                    href="/reservation"
                    className="inline-flex items-center gap-2 px-5 py-2 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold text-sm rounded-full transition-all btn-glow uppercase tracking-wider"
                  >
                    Réserver maintenant
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,152,42,0.1),transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100 mb-6">
              Prêt à Vivre une Expérience{" "}
              <span className="text-gradient-gold">Inoubliable</span> ?
            </h2>
            <p className="text-dark-300 text-lg font-light mb-10 max-w-2xl mx-auto">
              Réservez votre table dès maintenant et laissez-nous vous surprendre
              avec notre cuisine d&apos;exception.
            </p>
            <Link
              href="/reservation"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold-500 hover:bg-gold-600 text-dark-950 font-bold rounded-full transition-all btn-glow text-lg uppercase tracking-wider"
            >
              Réserver Maintenant
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
