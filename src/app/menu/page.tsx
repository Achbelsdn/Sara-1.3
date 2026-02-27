"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed, Flame, Leaf, AlertTriangle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";

// Placeholder data - will be replaced by Supabase data
const categories = [
  { id: "entrees", name: "Entrées", description: "Nos entrées raffinées" },
  { id: "plats", name: "Plats Principaux", description: "Des plats savoureux" },
  { id: "desserts", name: "Desserts", description: "Douceurs sucrées" },
  { id: "boissons", name: "Boissons", description: "Vins et cocktails" },
];

const menuItems: Record<string, Array<{
  id: string;
  name: string;
  description: string;
  price: string;
  featured: boolean;
  tags: string[];
}>> = {
  entrees: [
    {
      id: "1",
      name: "Carpaccio de Bœuf",
      description: "Fines tranches de bœuf, roquette, parmesan, huile de truffe",
      price: "--,--",
      featured: true,
      tags: [],
    },
    {
      id: "2",
      name: "Velouté de Saison",
      description: "Soupe crémeuse aux légumes de saison, croutons dorés",
      price: "--,--",
      featured: false,
      tags: ["végétarien"],
    },
    {
      id: "3",
      name: "Tartare de Saumon",
      description: "Saumon frais, avocat, sésame, sauce ponzu",
      price: "--,--",
      featured: false,
      tags: [],
    },
  ],
  plats: [
    {
      id: "4",
      name: "Filet de Bœuf Rossini",
      description: "Filet de bœuf, foie gras poêlé, sauce aux truffes, purée maison",
      price: "--,--",
      featured: true,
      tags: [],
    },
    {
      id: "5",
      name: "Suprême de Volaille",
      description: "Volaille fermière, jus réduit, légumes grillés de saison",
      price: "--,--",
      featured: false,
      tags: [],
    },
    {
      id: "6",
      name: "Risotto aux Champignons",
      description: "Riz arborio, champignons sauvages, parmesan, huile de truffe",
      price: "--,--",
      featured: false,
      tags: ["végétarien"],
    },
  ],
  desserts: [
    {
      id: "7",
      name: "Fondant au Chocolat",
      description: "Chocolat noir 70%, cœur coulant, glace vanille",
      price: "--,--",
      featured: true,
      tags: [],
    },
    {
      id: "8",
      name: "Crème Brûlée",
      description: "Crème vanille de Madagascar, caramel croustillant",
      price: "--,--",
      featured: false,
      tags: [],
    },
  ],
  boissons: [
    {
      id: "9",
      name: "Sélection de Vins",
      description: "Demandez notre carte des vins au sommelier",
      price: "--,--",
      featured: false,
      tags: [],
    },
    {
      id: "10",
      name: "Cocktails Signature",
      description: "Créations originales de notre barman",
      price: "--,--",
      featured: true,
      tags: [],
    },
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,152,42,0.08),transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Notre carte"
            title="Le Menu"
            description="Découvrez notre sélection de plats préparés avec passion et des ingrédients d'exception."
          />
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 lg:top-24 z-40 bg-dark-950/95 backdrop-blur-xl border-b border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? "bg-gold-500 text-dark-950"
                    : "text-dark-300 hover:text-cream-100 hover:bg-dark-800"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section-padding bg-dark-950">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <h3 className="font-heading text-2xl font-bold text-cream-100">
                  {categories.find((c) => c.id === activeCategory)?.name}
                </h3>
                <p className="text-dark-400 text-sm mt-2">
                  {categories.find((c) => c.id === activeCategory)?.description}
                </p>
              </div>

              {/* Items */}
              {menuItems[activeCategory]?.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 lg:p-8 flex gap-6 group hover:border-gold-500/30 transition-all"
                >
                  {/* Image placeholder */}
                  <div className="hidden sm:block w-24 h-24 lg:w-32 lg:h-32 rounded-xl bg-dark-800 shrink-0 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <UtensilsCrossed className="w-8 h-8 text-gold-500/20" />
                    </div>
                    {item.featured && (
                      <div className="absolute top-1 right-1">
                        <Flame className="w-4 h-4 text-gold-500" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-heading text-lg lg:text-xl font-semibold text-cream-100">
                          {item.name}
                        </h4>
                        {item.featured && (
                          <span className="hidden sm:inline-flex px-2 py-0.5 bg-gold-500/10 text-gold-500 text-[10px] rounded-full uppercase tracking-wider font-medium">
                            Signature
                          </span>
                        )}
                      </div>
                      <span className="text-gold-500 font-heading text-xl font-bold whitespace-nowrap">
                        {item.price} €
                      </span>
                    </div>
                    <p className="text-dark-400 text-sm font-light leading-relaxed mb-3">
                      {item.description}
                    </p>
                    {item.tags.length > 0 && (
                      <div className="flex gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-2 py-0.5 bg-dark-800 text-dark-300 text-xs rounded-full"
                          >
                            <Leaf className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 text-dark-500 text-xs">
              <AlertTriangle className="w-4 h-4" />
              <span>
                Veuillez nous informer de vos allergies alimentaires. Les prix et la disponibilité peuvent varier.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            subtitle="En cuisine"
            title="L'Art Culinaire en Action"
            description="Découvrez les coulisses de notre cuisine et la passion de notre équipe."
          />
          <VideoPlaceholder
            title="Vidéo des coulisses de la cuisine"
            aspectRatio="video"
          />
        </div>
      </section>
    </div>
  );
}
