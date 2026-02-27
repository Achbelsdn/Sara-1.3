"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import toast from "react-hot-toast";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message envoyé ! Nous vous répondrons dans les plus brefs délais.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,152,42,0.08),transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Contact"
            title="Contactez-Nous"
            description="Une question, une demande spéciale ou simplement envie de nous dire bonjour ? N'hésitez pas !"
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-dark-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-cream-100 mb-2">
                      Adresse
                    </h3>
                    <a
                      href="https://maps.app.goo.gl/hDddYVyKbs7ATkWW8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-300 hover:text-gold-400 transition-colors text-sm inline-flex items-center gap-1"
                    >
                      Voir sur Google Maps
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-cream-100 mb-2">
                      Téléphone
                    </h3>
                    <p className="text-dark-400 text-sm">
                      À configurer dans le panneau admin
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-cream-100 mb-2">
                      Email
                    </h3>
                    <p className="text-dark-400 text-sm">
                      À configurer dans le panneau admin
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-cream-100 mb-2">
                      Horaires
                    </h3>
                    <div className="space-y-1 text-sm text-dark-300">
                      <p>Lun - Jeu: 11h30 - 22h00</p>
                      <p>Ven - Sam: 11h30 - 23h00</p>
                      <p>Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
                <h3 className="font-heading text-2xl font-bold text-cream-100 mb-6">
                  Envoyez-nous un message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-cream-200 text-sm font-medium mb-2">
                      Nom *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl input-premium"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-cream-200 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl input-premium"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-cream-200 text-sm font-medium mb-2">
                      Téléphone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl input-premium"
                      placeholder="+33 6 00 00 00 00"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-cream-200 text-sm font-medium mb-2">
                      Sujet *
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl input-premium"
                      required
                    >
                      <option value="">Choisir un sujet</option>
                      <option value="reservation">Réservation</option>
                      <option value="event">Événement privé</option>
                      <option value="feedback">Retour d&apos;expérience</option>
                      <option value="partnership">Partenariat</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="contact-message" className="block text-cream-200 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl input-premium min-h-[150px] resize-y"
                    placeholder="Votre message..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 disabled:bg-gold-500/50 text-dark-950 font-semibold rounded-full transition-all btn-glow uppercase tracking-wider"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-dark-950/30 border-t-dark-950 rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] relative">
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
      </section>
    </div>
  );
}
