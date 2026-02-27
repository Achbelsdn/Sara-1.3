"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Image as ImageIcon, Video, Eye, EyeOff, X, Save, Upload } from "lucide-react";
import toast from "react-hot-toast";

const placeholderGallery = [
  { id: "1", title: "Intérieur", media_type: "image" as const, is_active: true },
  { id: "2", title: "Plat signature", media_type: "image" as const, is_active: true },
  { id: "3", title: "Ambiance soirée", media_type: "video" as const, is_active: true },
  { id: "4", title: "Terrasse", media_type: "image" as const, is_active: false },
];

export default function AdminGalleryPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "", media_url: "", media_type: "image" as "image" | "video", is_active: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Média ajouté à la galerie !");
    setShowForm(false);
    setFormData({ title: "", description: "", media_url: "", media_type: "image", is_active: true });
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-3xl font-bold text-cream-100">Galerie</h1>
          <p className="text-dark-400 mt-1">Gérez les photos et vidéos de votre restaurant.</p>
        </div>
        <button onClick={() => setShowForm(true)} className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold text-sm rounded-full transition-all btn-glow">
          <Plus className="w-4 h-4" />Ajouter un média
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {placeholderGallery.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="glass-card rounded-xl overflow-hidden group"
          >
            <div className="aspect-[4/3] bg-dark-800 relative flex items-center justify-center">
              {item.media_type === "video" ? (
                <Video className="w-10 h-10 text-gold-500/20" />
              ) : (
                <ImageIcon className="w-10 h-10 text-gold-500/20" />
              )}
              <div className="absolute top-3 left-3 flex gap-2">
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${item.media_type === "video" ? "bg-purple-500/20 text-purple-400" : "bg-blue-500/20 text-blue-400"}`}>
                  {item.media_type === "video" ? "Vidéo" : "Photo"}
                </span>
              </div>
              {!item.is_active && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-red-500/10 text-red-400">Masqué</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-cream-100 text-sm font-medium mb-3">{item.title}</h3>
              <div className="flex gap-2">
                <button onClick={() => toast.success(item.is_active ? "Masqué" : "Visible")} className="p-2 rounded-lg hover:bg-dark-800 text-dark-400 hover:text-gold-500 transition-all" title={item.is_active ? "Masquer" : "Afficher"}>
                  {item.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                <button onClick={() => toast.success("Supprimé !")} className="p-2 rounded-lg hover:bg-red-500/10 text-dark-400 hover:text-red-400 transition-all" title="Supprimer">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-dark-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-bold text-cream-100">Ajouter un média</h2>
              <button onClick={() => setShowForm(false)} className="p-2 rounded-lg hover:bg-dark-800 text-dark-400"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-cream-200 text-sm font-medium mb-2">Type</label>
                <div className="flex gap-2">
                  <button type="button" onClick={() => setFormData({ ...formData, media_type: "image" })} className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${formData.media_type === "image" ? "bg-gold-500 text-dark-950" : "bg-dark-800 text-dark-300"}`}>
                    <ImageIcon className="w-4 h-4 inline mr-2" />Photo
                  </button>
                  <button type="button" onClick={() => setFormData({ ...formData, media_type: "video" })} className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${formData.media_type === "video" ? "bg-gold-500 text-dark-950" : "bg-dark-800 text-dark-300"}`}>
                    <Video className="w-4 h-4 inline mr-2" />Vidéo
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-cream-200 text-sm font-medium mb-2">Titre</label>
                <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 rounded-xl input-premium" placeholder="Titre du média" />
              </div>
              <div>
                <label className="block text-cream-200 text-sm font-medium mb-2">URL du média *</label>
                <input type="url" value={formData.media_url} onChange={(e) => setFormData({ ...formData, media_url: e.target.value })} className="w-full px-4 py-3 rounded-xl input-premium" placeholder="https://..." required />
              </div>
              <div>
                <label className="block text-cream-200 text-sm font-medium mb-2">Description</label>
                <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-4 py-3 rounded-xl input-premium min-h-[60px] resize-y" placeholder="Description optionnelle..." />
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-full transition-all btn-glow">
                <Upload className="w-4 h-4" />Ajouter
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
