"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Video, X, Play, Camera } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";

// Placeholder gallery items
const galleryItems = [
  { id: "1", type: "image" as const, title: "Intérieur du restaurant" },
  { id: "2", type: "image" as const, title: "Plat signature" },
  { id: "3", type: "video" as const, title: "Ambiance en soirée" },
  { id: "4", type: "image" as const, title: "Notre terrasse" },
  { id: "5", type: "image" as const, title: "Dessert du chef" },
  { id: "6", type: "image" as const, title: "Bar et cocktails" },
  { id: "7", type: "video" as const, title: "Préparation en cuisine" },
  { id: "8", type: "image" as const, title: "Décoration intérieure" },
  { id: "9", type: "image" as const, title: "Événement spécial" },
];

type FilterType = "all" | "image" | "video";

export default function GalleryPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.type === filter);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,152,42,0.08),transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Galerie"
            title="Notre Univers en Images"
            description="Explorez l'atmosphère unique de La Réserve à travers notre galerie photos et vidéos."
          />
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 lg:top-24 z-40 bg-dark-950/95 backdrop-blur-xl border-b border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 py-4">
            {[
              { key: "all" as FilterType, label: "Tout", icon: Camera },
              { key: "image" as FilterType, label: "Photos", icon: ImageIcon },
              { key: "video" as FilterType, label: "Vidéos", icon: Video },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === key
                    ? "bg-gold-500 text-dark-950"
                    : "text-dark-300 hover:text-cream-100 hover:bg-dark-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-dark-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedItem(item.id)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark-800 border border-gold-500/5 hover:border-gold-500/20 transition-all">
                    {/* Placeholder content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      {item.type === "video" ? (
                        <div className="w-16 h-16 rounded-full border-2 border-gold-500/30 flex items-center justify-center group-hover:border-gold-500/60 transition-colors">
                          <Play className="w-6 h-6 text-gold-500/50 ml-1 group-hover:text-gold-500 transition-colors" />
                        </div>
                      ) : (
                        <ImageIcon className="w-10 h-10 text-gold-500/20 group-hover:text-gold-500/40 transition-colors" />
                      )}
                      <span className="text-dark-500 text-xs">{item.title}</span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/40 transition-all flex items-end">
                      <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                        <p className="text-cream-100 text-sm font-medium">{item.title}</p>
                        <p className="text-gold-500 text-xs uppercase tracking-wider mt-1">
                          {item.type === "video" ? "Vidéo" : "Photo"}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-dark-700 mx-auto mb-4" />
              <p className="text-dark-400 text-lg">Aucun élément dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark-950/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-cream-200 hover:text-gold-400 hover:border-gold-500 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryItems.find((i) => i.id === selectedItem)?.type === "video" ? (
                <VideoPlaceholder
                  title={galleryItems.find((i) => i.id === selectedItem)?.title}
                  aspectRatio="video"
                />
              ) : (
                <div className="aspect-video rounded-2xl bg-dark-800 flex items-center justify-center border border-gold-500/10">
                  <div className="text-center">
                    <ImageIcon className="w-16 h-16 text-gold-500/20 mx-auto mb-3" />
                    <p className="text-dark-400 text-sm">
                      {galleryItems.find((i) => i.id === selectedItem)?.title}
                    </p>
                    <p className="text-dark-600 text-xs mt-1">
                      Ajoutez des images depuis le panneau admin
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Showcase */}
      <section className="section-padding bg-dark-900/50">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            subtitle="Visite virtuelle"
            title="Découvrez Notre Restaurant"
            description="Une visite immersive de La Réserve, de la salle au bar en passant par notre terrasse."
          />
          <VideoPlaceholder
            title="Visite virtuelle du restaurant"
            aspectRatio="wide"
          />
        </div>
      </section>
    </div>
  );
}
