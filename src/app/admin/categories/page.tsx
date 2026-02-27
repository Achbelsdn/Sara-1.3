"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, GripVertical, FolderOpen, X, Save } from "lucide-react";
import toast from "react-hot-toast";

const placeholderCategories = [
  { id: "1", name: "Entrées", description: "Nos entrées raffinées", sort_order: 1, is_active: true },
  { id: "2", name: "Plats Principaux", description: "Des plats savoureux", sort_order: 2, is_active: true },
  { id: "3", name: "Desserts", description: "Douceurs sucrées", sort_order: 3, is_active: true },
  { id: "4", name: "Boissons", description: "Vins et cocktails", sort_order: 4, is_active: true },
];

export default function AdminCategoriesPage() {
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", description: "", is_active: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(editingId ? "Catégorie modifiée !" : "Catégorie ajoutée !");
    setShowForm(false);
    setEditingId(null);
    setFormData({ name: "", description: "", is_active: true });
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-3xl font-bold text-cream-100">Catégories</h1>
          <p className="text-dark-400 mt-1">Organisez les sections de votre menu.</p>
        </div>
        <button
          onClick={() => { setFormData({ name: "", description: "", is_active: true }); setEditingId(null); setShowForm(true); }}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold text-sm rounded-full transition-all btn-glow"
        >
          <Plus className="w-4 h-4" />
          Nouvelle catégorie
        </button>
      </div>

      <div className="space-y-3">
        {placeholderCategories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass-card rounded-xl p-4 flex items-center gap-4"
          >
            <GripVertical className="w-5 h-5 text-dark-600 cursor-grab shrink-0" />
            <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
              <FolderOpen className="w-5 h-5 text-gold-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-cream-100 font-medium text-sm">{cat.name}</h3>
              <p className="text-dark-500 text-xs truncate">{cat.description}</p>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-xs ${cat.is_active ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
              {cat.is_active ? "Active" : "Inactive"}
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => { setFormData({ name: cat.name, description: cat.description || "", is_active: cat.is_active }); setEditingId(cat.id); setShowForm(true); }}
                className="p-2 rounded-lg hover:bg-dark-800 text-dark-400 hover:text-gold-500 transition-all"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={() => toast.success("Catégorie supprimée !")}
                className="p-2 rounded-lg hover:bg-red-500/10 text-dark-400 hover:text-red-400 transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 bg-dark-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-bold text-cream-100">
                {editingId ? "Modifier la catégorie" : "Nouvelle catégorie"}
              </h2>
              <button onClick={() => setShowForm(false)} className="p-2 rounded-lg hover:bg-dark-800 text-dark-400"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-cream-200 text-sm font-medium mb-2">Nom *</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl input-premium" placeholder="Ex: Entrées" required />
              </div>
              <div>
                <label className="block text-cream-200 text-sm font-medium mb-2">Description</label>
                <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-4 py-3 rounded-xl input-premium min-h-[80px] resize-y" placeholder="Description de la catégorie..." />
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={formData.is_active} onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })} className="w-4 h-4 rounded" />
                <span className="text-cream-200 text-sm">Active</span>
              </label>
              <div className="flex gap-3 pt-2">
                <button type="submit" className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-full transition-all btn-glow">
                  <Save className="w-4 h-4" />{editingId ? "Enregistrer" : "Ajouter"}
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="px-6 py-3 border border-dark-600 text-dark-300 rounded-full transition-all">Annuler</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
