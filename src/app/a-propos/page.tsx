"use client";

import { motion } from "framer-motion";
import { Award, Heart, Users, Sparkles, ChefHat } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Chaque plat est préparé avec amour et dévouement, reflétant notre passion pour la gastronomie.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque détail, de la sélection des ingrédients au service en salle.",
  },
  {
    icon: Users,
    title: "Convivialité",
    description: "La Réserve est un lieu de partage où chaque client est accueilli comme un invité de marque.",
  },
  {
    icon: Sparkles,
    title: "Créativité",
    description: "Notre chef repousse les limites de la créativité pour vous surprendre à chaque visite.",
  },
];

const timeline = [
  {
    year: "Fondation",
    title: "Naissance de La Réserve",
    description: "L'aventure commence avec une vision : créer un lieu d'exception où la gastronomie rencontre l'art de vivre.",
  },
  {
    year: "Évolution",
    title: "Reconnaissance",
    description: "La Réserve se fait un nom grâce à sa cuisine inventive et son service irréprochable.",
  },
  {
    year: "Aujourd'hui",
    title: "L'Excellence Continue",
    description: "Nous continuons d'innover et de surprendre nos clients avec de nouvelles créations culinaires.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,152,42,0.08),transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Notre histoire"
            title="À Propos de La Réserve"
            description="Découvrez l'histoire, les valeurs et la passion qui animent notre restaurant au quotidien."
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-dark-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-500 text-sm tracking-[0.3em] uppercase font-light mb-4 block">
                Notre histoire
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cream-100 mb-6">
                Une Passion pour la{" "}
                <span className="text-gradient-gold">Gastronomie</span>
              </h2>
              <div className="space-y-4 text-dark-300 font-light leading-relaxed">
                <p>
                  La Réserve est née d&apos;une passion profonde pour la gastronomie et l&apos;art 
                  de recevoir. Notre restaurant est un lieu où chaque détail a été pensé pour 
                  offrir une expérience culinaire mémorable.
                </p>
                <p>
                  De la sélection minutieuse des ingrédients les plus frais à la présentation 
                  artistique de chaque assiette, nous mettons un point d&apos;honneur à satisfaire 
                  les palais les plus exigeants.
                </p>
                <p>
                  Notre équipe passionnée travaille chaque jour pour vous accueillir dans un 
                  cadre élégant et chaleureux, où la convivialité et le raffinement se 
                  rencontrent harmonieusement.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <VideoPlaceholder
                title="Vidéo de présentation - Notre histoire"
                aspectRatio="square"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Nos valeurs"
            title="Ce Qui Nous Anime"
            description="Les piliers fondamentaux qui guident chacune de nos actions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center group hover:border-gold-500/30 transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <value.icon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-cream-100 mb-3">
                  {value.title}
                </h3>
                <p className="text-dark-400 text-sm font-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="section-padding bg-dark-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[3/4] rounded-2xl bg-dark-800 border border-gold-500/10 flex items-center justify-center">
                <div className="text-center">
                  <ChefHat className="w-16 h-16 text-gold-500/20 mx-auto mb-3" />
                  <p className="text-dark-500 text-sm">Photo du Chef</p>
                  <p className="text-dark-600 text-xs mt-1">Ajoutez depuis l&apos;admin</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-gold-500 text-sm tracking-[0.3em] uppercase font-light mb-4 block">
                Notre chef
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cream-100 mb-6">
                L&apos;Artiste Derrière{" "}
                <span className="text-gradient-gold">Chaque Plat</span>
              </h2>
              <div className="space-y-4 text-dark-300 font-light leading-relaxed">
                <p>
                  Notre chef apporte une vision unique de la gastronomie, mêlant techniques 
                  classiques et innovations contemporaines pour créer des plats qui éveillent 
                  tous les sens.
                </p>
                <p>
                  Formé dans les plus grandes maisons, il puise son inspiration dans les 
                  produits du terroir et les saveurs du monde pour composer une carte qui 
                  surprend et enchante à chaque saison.
                </p>
                <p className="italic text-cream-300 font-accent text-lg">
                  &ldquo;La cuisine est un art qui se partage. Chaque assiette est une 
                  invitation au voyage.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            subtitle="Notre parcours"
            title="Les Étapes Clés"
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gold-500/20" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pl-20"
                >
                  {/* Dot */}
                  <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-dark-950 border-2 border-gold-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gold-500" />
                  </div>

                  <div className="glass-card rounded-2xl p-6">
                    <span className="text-gold-500 text-sm font-medium tracking-wider uppercase">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-cream-100 mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-dark-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
