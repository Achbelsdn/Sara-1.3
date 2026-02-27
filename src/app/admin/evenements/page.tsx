"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Eye, EyeOff, CalendarDays, Clock, X, Save, PartyPopper } from "lucide-react";
import toast from "react-hot-toast";

const placeholderEvents = [
  { id: "1", title: "Soirée Dégustation de Vins", date: "2025-03-15", time: "19:00", is_active: true },
  { id: "2", title: "Menu Spécial Saint-Valentin", date: "2025-02-14", time: "19:30", is_active: true },
  { id: "3", title: "Brunch du Dimanche", date: "2025-03-02", time: "11:00", is_active: false },
];

export default function AdminEventsPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "", date: "", time: "", image_url: "", is_active: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Événement enregistré !");
    setShowForm(false);
    setFormData({ title: "", description: "", date: "", time: "", image_url: "", is_active: true });
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-3xl font-bold text-cream-100">Événements</h1>
          <p className="text-dark-400 mt-1">Créez et gérez les événements de votre restaurant.</p>
        </div>
        <button onClick={() => setShowForm(true)} className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold text-sm rounded-full transition-all btn-glow">
          <Plus className="w-4 h-4" />Nouvel événement
        </button>
      </div>

      <div className="space-y-4">
        {placeholderEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass-card rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
              <PartyPopper className="w-6 h-6 text-gold-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-cream-100 font-medium">{event.title}</h3>
              <div className="flex items-center gap-4 mt-1 text-sm text-dark-400">
                <span className="inline-flex items-center gap-1"><CalendarDays className="w-3 h-3" />{new Date(event.date).toLocaleDateString("fr-FR")}</span>
                {event.time && <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{event.time}</span>}
              </div>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-xs ${event.is_active ? "bg-green-500/10 text-green-400" : "bg-dark-600/20 text-dark-400"}`}>
              {event.is_active ? "Actif" : "Inactif"}
            </span>
            <div className="flex gap-1">
              <button className="p-2 rounded-lg hover:bg-dark-800 text-dark-400 hover:text-gold-500 transition-all"><Edit className="w-4 h-4" /></button>
              <button onClick={() => toast.success("Supprimé !")} className="p-2 rounded-lg hover:bg-red-500/10 text-dark-400 hover:text-red-400 transition-all"><Trash2 className="w-4 h-4" /></button>
            </div>
          </motion.div>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 bg-dark-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-lg glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-bold text-cream-100">Nouvel événement</h2>
              <button onClick={() => setShowForm(false)} className="p-2 rounded-lg hover:bg-dark-800 text-dark-400"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-cream-200 text-sm font-medium mb-2">Titre *</label>
                <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 rounded-xl input-premium" required />
              </div>
              <div>
                <label className="block text-cream-200 text-sm font-medium mb-2">Description</label>
                <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-4 py-3 rounded-xl input-premium min-h-[80px] resize-y" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-cream-200 text-sm font-medium mb-2">Date *</label>
                  <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full px-4 py-3 rounded-xl input-premium" required />
                </div>
                <div>
                  <label className="block text-cream-200 text-sm font-medium mb-2">Heure</label>
                  <input type="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="w-full px-4 py-3 rounded-xl input-premium" />
                </div>
              </div>
              <div>
                <label className="block text-cream-200 text-sm font-medium mb-2">URL de l&apos;image</label>
                <input type="url" value={formData.image_url} onChange={(e) => setFormData({ ...formData, image_url: e.target.value })} className="w-full px-4 py-3 rounded-xl input-premium" placeholder="https://..." />
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={formData.is_active} onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })} className="w-4 h-4 rounded" />
                <span className="text-cream-200 text-sm">Actif</span>
              </label>
              <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-full transition-all btn-glow">
                <Save className="w-4 h-4" />Enregistrer
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
