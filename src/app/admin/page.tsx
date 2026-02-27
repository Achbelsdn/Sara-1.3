"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  UtensilsCrossed,
  CalendarDays,
  MessageSquare,
  Image,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    label: "Plats au menu",
    value: "0",
    icon: UtensilsCrossed,
    href: "/admin/menu",
    color: "text-gold-500",
    bg: "bg-gold-500/10",
  },
  {
    label: "Réservations",
    value: "0",
    icon: CalendarDays,
    href: "/admin/reservations",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    label: "Avis clients",
    value: "0",
    icon: MessageSquare,
    href: "/admin/avis",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    label: "Médias galerie",
    value: "0",
    icon: Image,
    href: "/admin/galerie",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

const quickActions = [
  { label: "Ajouter un plat", href: "/admin/menu", icon: UtensilsCrossed },
  { label: "Voir les réservations", href: "/admin/reservations", icon: CalendarDays },
  { label: "Modérer les avis", href: "/admin/avis", icon: MessageSquare },
  { label: "Gérer la galerie", href: "/admin/galerie", icon: Image },
];

export default function AdminDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-cream-100">
          Tableau de Bord
        </h1>
        <p className="text-dark-400 mt-2">
          Bienvenue dans le panneau d&apos;administration de La Réserve.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={stat.href}
              className="glass-card rounded-2xl p-6 block hover:border-gold-500/20 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <ArrowRight className="w-4 h-4 text-dark-600 group-hover:text-gold-500 transition-colors" />
              </div>
              <div className="text-3xl font-heading font-bold text-cream-100 mb-1">
                {stat.value}
              </div>
              <div className="text-dark-400 text-sm">{stat.label}</div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-2xl p-6"
        >
          <h2 className="font-heading text-xl font-semibold text-cream-100 mb-4">
            Actions Rapides
          </h2>
          <div className="space-y-2">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-dark-800/50 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center">
                  <action.icon className="w-4 h-4 text-gold-500" />
                </div>
                <span className="text-cream-200 text-sm group-hover:text-gold-400 transition-colors">
                  {action.label}
                </span>
                <ArrowRight className="w-4 h-4 text-dark-600 ml-auto group-hover:text-gold-500 transition-colors" />
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-2xl p-6"
        >
          <h2 className="font-heading text-xl font-semibold text-cream-100 mb-4">
            Guide de Démarrage
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-gold-500 text-xs font-bold">1</span>
              </div>
              <div>
                <p className="text-cream-200 text-sm font-medium">Configurez Supabase</p>
                <p className="text-dark-400 text-xs mt-1">
                  Ajoutez vos clés Supabase dans le fichier .env.local et exécutez le schéma SQL.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-gold-500 text-xs font-bold">2</span>
              </div>
              <div>
                <p className="text-cream-200 text-sm font-medium">Ajoutez vos catégories et plats</p>
                <p className="text-dark-400 text-xs mt-1">
                  Créez les catégories du menu puis ajoutez vos plats avec photos et prix.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-gold-500 text-xs font-bold">3</span>
              </div>
              <div>
                <p className="text-cream-200 text-sm font-medium">Personnalisez les paramètres</p>
                <p className="text-dark-400 text-xs mt-1">
                  Ajoutez votre téléphone, email, réseaux sociaux et vidéos du restaurant.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-gold-500 text-xs font-bold">4</span>
              </div>
              <div>
                <p className="text-cream-200 text-sm font-medium">Ajoutez des photos et vidéos</p>
                <p className="text-dark-400 text-xs mt-1">
                  Enrichissez la galerie avec des photos et vidéos de votre restaurant.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Info Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 p-4 rounded-xl bg-gold-500/5 border border-gold-500/10 flex items-start gap-3"
      >
        <TrendingUp className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
        <div>
          <p className="text-cream-200 text-sm font-medium">
            Connectez Supabase pour activer toutes les fonctionnalités
          </p>
          <p className="text-dark-400 text-xs mt-1">
            Les données affichées sont des exemples. Configurez votre base de données Supabase 
            pour gérer le contenu en temps réel.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
