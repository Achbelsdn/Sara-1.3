"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Globe, Phone, Mail, MapPin, Video, Instagram, Facebook, MessageCircle } from "lucide-react";
import toast from "react-hot-toast";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    restaurant_name: "La Réserve",
    tagline: "Une expérience culinaire d'exception",
    description: "Bienvenue à La Réserve, où chaque plat raconte une histoire et chaque visite devient un souvenir inoubliable.",
    phone: "",
    email: "",
    address: "",
    google_maps_url: "https://maps.app.goo.gl/hDddYVyKbs7ATkWW8",
    hero_video_url: "",
    about_video_url: "",
    instagram_url: "",
    facebook_url: "",
    tiktok_url: "",
  });

  const handleSave = () => {
    toast.success("Paramètres enregistrés !");
  };

  const updateSetting = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-3xl font-bold text-cream-100">Paramètres</h1>
          <p className="text-dark-400 mt-1">Configurez les informations de votre restaurant.</p>
        </div>
        <button onClick={handleSave} className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold text-sm rounded-full transition-all btn-glow">
          <Save className="w-4 h-4" />Enregistrer tout
        </button>
      </div>

      <div className="space-y-8">
        {/* General Info */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-2xl p-6">
          <h2 className="font-heading text-xl font-semibold text-cream-100 mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-gold-500" />
            Informations Générales
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-cream-200 text-sm font-medium mb-2">Nom du restaurant</label>
              <input type="text" value={settings.restaurant_name} onChange={(e) => updateSetting("restaurant_name", e.target.value)} className="w-full px-4 py-3 rounded-xl input-premium" />
            </div>
            <div>
              <label className="block text-cream-200 text-sm font-medium mb-2">Slogan</label>
              <input type="text" value={settings.tagline} onChange={(e) => updateSetting("tagline", e.target.value)} className="w-full px-4 py-3 rounded-xl input-premium" />
            </div>
            <div>
              <label className="block text-cream-200 text-sm font-medium mb-2">Description</label>
              <textarea value={settings.description} onChange={(e) => updateSetting("description", e.target.value)} className="w-full px-4 py-3 rounded-xl input-premium min-h-[100px] resize-y" />
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-2xl p-6">
          <h2 className="font-heading text-xl font-semibold text-cream-100 mb-6 flex items-center gap-2">
            <Phone className="w-5 h-5 text-gold-500" />
            Coordonnées
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-cream-200 text-sm font-medium mb-2">
                <Phone className="w-4 h-4 text-gold-500" />Téléphone
              </label>
              <input type="tel" value={settings.phone} onChange={(e) => updateSetting("phone", e.target.value)} className="w-full px-4 py-3 rounded-xl input-premium" placeholder="+33 1 23 45 67 89" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-cream-200 text-sm font-medium mb-2">
                <Mail className="w-4 h-4 text-gold-500" />Email
              </label>
              <input type="email" value={settings.email} onChange={(e) => updateSetting("email", e.target.value)} className="w-full px-4 py-3 rounded-xl input-premium" placeholder="contact@lareserve.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="flex items-center gap-2 text-cream-200 text-sm font-medium mb-2">
                <MapPin className="w-4 h-4 text-gold-500" />Adresse
              </label>
              <input type="text" value={settings.address} onChange={(e) => updateSetting("address", e.target.value)} className="w-full px-4 py-3 rounded-xl input-premium" placeholder="123 Rue de la Gastronomie, 75001 Paris" />
            </div>
            <div className="sm:col-span-2">
              <label className="flex items-center gap-2 text-cream-200 text-sm font-medium mb-2">
                <MapPin className="w-4 h-4 text-gold-500" />Lien Google Maps
              </label>
              <input type="url" value={settings.google_maps_url} onChange={(e) => updateSetting("google_maps_url", e.target.value)} className="w-full px-4 py-3 rounded-xl input-premium" />
            </div>
          </div>
        </motion.div>

        {/* Videos */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-2xl p-6">
          <h2 className="font-heading text-xl font-semibold text-cream-100 mb-6 flex items-center gap-2">
            <Video className="w-5 h-5 text-gold-500" />
            Vidéos du Restaurant
          </h2>
          <p className="text-dark-400 text-sm mb-4">
            Ajoutez les URLs de vos vidéos pour les afficher sur le site. Formats supportés : MP4, WebM, ou liens YouTube/Vimeo.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-cream-200 text-sm font-medium mb-2">Vidéo Hero (page d&apos;accueil)</label>
              <input type="url" value={settings.hero_video_url} onChange={(e) => updateSetting("hero_video_url", e.target.value)} className="w-full px-4 py-3 rounded-xl input-premium" placeholder="https://..." />
              <p className="text-dark-500 text-xs mt-1">Vidéo de présentation principale affichée sur la page d&apos;accueil.</p>
            </div>
            <div>
              <label className="block text-cream-200 text-sm font-medium mb-2">Vidéo À Propos</label>
              <input type="url" value={settings.about_video_url} onChange={(e) => updateSetting("about_video_url", e.target.value)} className="w-full px-4 py-3 rounded-xl input-premium" placeholder="https://..." />
              <p className="text-dark-500 text-xs mt-1">Vidéo affichée sur la page À Propos.</p>
            </div>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-2xl p-6">
          <h2 className="font-heading text-xl font-semibold text-cream-100 mb-6 flex items-center gap-2">
            <Instagram className="w-5 h-5 text-gold-500" />
            Réseaux Sociaux
          </h2>
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-cream-200 text-sm font-medium mb-2">
                <Instagram className="w-4 h-4 text-pink-400" />Instagram
              </label>
              <input type="url" value={settings.instagram_url} onChange={(e) => updateSetting("instagram_url", e.target.value)} className="w-full px-4 py-3 rounded-xl input-premium" placeholder="https://instagram.com/lareserve" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-cream-200 text-sm font-medium mb-2">
                <Facebook className="w-4 h-4 text-blue-400" />Facebook
              </label>
              <input type="url" value={settings.facebook_url} onChange={(e) => updateSetting("facebook_url", e.target.value)} className="w-full px-4 py-3 rounded-xl input-premium" placeholder="https://facebook.com/lareserve" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-cream-200 text-sm font-medium mb-2">
                <MessageCircle className="w-4 h-4 text-dark-300" />TikTok
              </label>
              <input type="url" value={settings.tiktok_url} onChange={(e) => updateSetting("tiktok_url", e.target.value)} className="w-full px-4 py-3 rounded-xl input-premium" placeholder="https://tiktok.com/@lareserve" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Save Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button onClick={handleSave} className="flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-full transition-all btn-glow shadow-2xl">
          <Save className="w-5 h-5" />Enregistrer
        </button>
      </div>
    </div>
  );
}
