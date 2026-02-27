"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, Clock, ArrowRight, PartyPopper } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";

const events = [
  {
    id: "1",
    title: "Soirée Dégustation de Vins",
    description:
      "Rejoignez-nous pour une soirée exceptionnelle de dégustation de vins accompagnée de mets raffinés sélectionnés par notre chef.",
    date: "2025-03-15",
    time: "19:00",
  },
  {
    id: "2",
    title: "Menu Spécial Saint-Valentin",
    description:
      "Un menu en 5 services créé spécialement pour célébrer l'amour. Ambiance romantique et musicale garantie.",
    date: "2025-02-14",
    time: "19:30",
  },
  {
    id: "3",
    title: "Brunch du Dimanche",
    description:
      "Découvrez notre brunch dominical avec une sélection de plats sucrés et salés, accompagnés de champagne.",
    date: "2025-03-02",
    time: "11:00",
  },
];

export default function EventsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,152,42,0.08),transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Événements"
            title="Nos Événements"
            description="Découvrez nos soirées spéciales, dégustations et événements exclusifs."
          />
        </div>
      </section>

      {/* Events List */}
      <section className="section-padding bg-dark-950">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass-card rounded-2xl overflow-hidden group hover:border-gold-500/30 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Image/Video placeholder */}
                  <div className="aspect-[16/10] lg:aspect-auto bg-dark-800 relative flex items-center justify-center">
                    <PartyPopper className="w-12 h-12 text-gold-500/20" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gold-500 text-dark-950 text-xs font-bold rounded-full uppercase tracking-wider">
                      À venir
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-gold-500 text-sm">
                        <CalendarDays className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString("fr-FR", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      {event.time && (
                        <span className="inline-flex items-center gap-1.5 text-dark-400 text-sm">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-xl lg:text-2xl font-bold text-cream-100 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-dark-300 font-light leading-relaxed mb-6">
                      {event.description}
                    </p>

                    <div>
                      <Link
                        href="/reservation"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold text-sm rounded-full transition-all btn-glow uppercase tracking-wider"
                      >
                        Réserver pour cet événement
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state hint */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-dark-500 text-sm mt-12"
          >
            Les événements sont gérés depuis le panneau d&apos;administration.
          </motion.p>
        </div>
      </section>

      {/* Private Events */}
      <section className="section-padding bg-dark-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-500 text-sm tracking-[0.3em] uppercase font-light mb-4 block">
                Privatisation
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cream-100 mb-6">
                Événements{" "}
                <span className="text-gradient-gold">Privés</span>
              </h2>
              <div className="space-y-4 text-dark-300 font-light leading-relaxed">
                <p>
                  La Réserve vous ouvre ses portes pour vos événements privés : 
                  anniversaires, mariages, séminaires d&apos;entreprise, et bien plus encore.
                </p>
                <p>
                  Notre équipe se charge de tout pour faire de votre événement un moment 
                  d&apos;exception. Menu personnalisé, décoration sur mesure, service dédié.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3 border border-gold-500/30 hover:border-gold-500 text-cream-200 hover:text-gold-400 rounded-full transition-all uppercase tracking-wider text-sm"
              >
                Nous contacter
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <VideoPlaceholder
                title="Vidéo événements privés"
                aspectRatio="square"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
