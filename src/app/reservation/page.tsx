"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, Send, CheckCircle, Info } from "lucide-react";
import toast from "react-hot-toast";
import SectionHeading from "@/components/ui/SectionHeading";

const timeSlots = [
  "11:30", "12:00", "12:30", "13:00", "13:30",
  "19:00", "19:30", "20:00", "20:30", "21:00", "21:30",
];

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    guest_name: "",
    guest_email: "",
    guest_phone: "",
    party_size: 2,
    date: "",
    time: "",
    special_requests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - will be connected to Supabase
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSuccess(true);
    toast.success("Réservation envoyée avec succès !");
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center px-4"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold-500/10 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-gold-500" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-cream-100 mb-4">
            Réservation Confirmée !
          </h1>
          <p className="text-dark-300 font-light mb-2">
            Merci <span className="text-cream-200">{formData.guest_name}</span> !
          </p>
          <p className="text-dark-400 text-sm mb-8">
            Nous avons bien reçu votre demande de réservation. Vous recevrez une confirmation 
            par email à <span className="text-cream-300">{formData.guest_email}</span>.
          </p>
          <div className="glass-card rounded-2xl p-6 mb-8 text-left">
            <h3 className="text-gold-500 text-sm font-medium uppercase tracking-wider mb-4">
              Récapitulatif
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-dark-400">Date</span>
                <span className="text-cream-200">
                  {formData.date ? new Date(formData.date).toLocaleDateString("fr-FR", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }) : ""}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-400">Heure</span>
                <span className="text-cream-200">{formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-400">Nombre de personnes</span>
                <span className="text-cream-200">{formData.party_size}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                guest_name: "",
                guest_email: "",
                guest_phone: "",
                party_size: 2,
                date: "",
                time: "",
                special_requests: "",
              });
            }}
            className="text-gold-500 hover:text-gold-400 text-sm transition-colors"
          >
            Faire une nouvelle réservation
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,152,42,0.08),transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Réservation"
            title="Réservez Votre Table"
            description="Assurez-vous une place dans notre restaurant pour une soirée inoubliable."
          />
        </div>
      </section>

      {/* Reservation Form */}
      <section className="section-padding bg-dark-950">
        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 lg:p-10"
          >
            {/* Date & Time Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="res-date" className="flex items-center gap-2 text-cream-200 text-sm font-medium mb-2">
                  <CalendarDays className="w-4 h-4 text-gold-500" />
                  Date *
                </label>
                <input
                  id="res-date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 rounded-xl input-premium"
                  required
                />
              </div>
              <div>
                <label htmlFor="res-time" className="flex items-center gap-2 text-cream-200 text-sm font-medium mb-2">
                  <Clock className="w-4 h-4 text-gold-500" />
                  Heure *
                </label>
                <select
                  id="res-time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl input-premium"
                  required
                >
                  <option value="">Choisir une heure</option>
                  <optgroup label="Déjeuner">
                    {timeSlots.slice(0, 5).map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Dîner">
                    {timeSlots.slice(5).map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>
            </div>

            {/* Party Size */}
            <div className="mb-6">
              <label className="flex items-center gap-2 text-cream-200 text-sm font-medium mb-3">
                <Users className="w-4 h-4 text-gold-500" />
                Nombre de personnes *
              </label>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setFormData({ ...formData, party_size: size })}
                    className={`w-12 h-12 rounded-xl font-medium transition-all ${
                      formData.party_size === size
                        ? "bg-gold-500 text-dark-950"
                        : "bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-cream-100 border border-gold-500/10"
                    }`}
                  >
                    {size}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, party_size: 10 })}
                  className={`px-4 h-12 rounded-xl font-medium transition-all text-sm ${
                    formData.party_size > 8
                      ? "bg-gold-500 text-dark-950"
                      : "bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-cream-100 border border-gold-500/10"
                  }`}
                >
                  9+
                </button>
              </div>
            </div>

            <div className="divider-gold mb-6" />

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="res-name" className="block text-cream-200 text-sm font-medium mb-2">
                  Nom complet *
                </label>
                <input
                  id="res-name"
                  type="text"
                  value={formData.guest_name}
                  onChange={(e) => setFormData({ ...formData, guest_name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl input-premium"
                  placeholder="Jean Dupont"
                  required
                />
              </div>
              <div>
                <label htmlFor="res-phone" className="block text-cream-200 text-sm font-medium mb-2">
                  Téléphone *
                </label>
                <input
                  id="res-phone"
                  type="tel"
                  value={formData.guest_phone}
                  onChange={(e) => setFormData({ ...formData, guest_phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl input-premium"
                  placeholder="+33 6 00 00 00 00"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="res-email" className="block text-cream-200 text-sm font-medium mb-2">
                Email *
              </label>
              <input
                id="res-email"
                type="email"
                value={formData.guest_email}
                onChange={(e) => setFormData({ ...formData, guest_email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl input-premium"
                placeholder="jean@exemple.com"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="res-requests" className="block text-cream-200 text-sm font-medium mb-2">
                Demandes spéciales
              </label>
              <textarea
                id="res-requests"
                value={formData.special_requests}
                onChange={(e) => setFormData({ ...formData, special_requests: e.target.value })}
                className="w-full px-4 py-3 rounded-xl input-premium min-h-[100px] resize-y"
                placeholder="Allergies, occasion spéciale, préférences de table..."
              />
            </div>

            {/* Info note */}
            <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-gold-500/5 border border-gold-500/10">
              <Info className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <p className="text-dark-300 text-xs leading-relaxed">
                Votre réservation sera confirmée par email. Pour les groupes de plus de 8 personnes, 
                veuillez nous contacter directement. Annulation gratuite jusqu&apos;à 24h avant.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gold-500 hover:bg-gold-600 disabled:bg-gold-500/50 text-dark-950 font-bold rounded-full transition-all btn-glow text-lg uppercase tracking-wider"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-dark-950/30 border-t-dark-950 rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Confirmer la réservation
                </>
              )}
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
