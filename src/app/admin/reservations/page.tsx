"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, Check, X, Eye, Search, Filter } from "lucide-react";
import toast from "react-hot-toast";

const placeholderReservations = [
  { id: "1", guest_name: "Marie Dupont", guest_email: "marie@email.com", guest_phone: "+33 6 12 34 56 78", party_size: 4, date: "2025-03-15", time: "20:00", status: "pending" as const, special_requests: "Anniversaire de mariage" },
  { id: "2", guest_name: "Pierre Martin", guest_email: "pierre@email.com", guest_phone: "+33 6 98 76 54 32", party_size: 2, date: "2025-03-16", time: "19:30", status: "confirmed" as const, special_requests: null },
  { id: "3", guest_name: "Sophie Bernard", guest_email: "sophie@email.com", guest_phone: "+33 6 11 22 33 44", party_size: 6, date: "2025-03-14", time: "20:30", status: "confirmed" as const, special_requests: "Allergie aux noix" },
  { id: "4", guest_name: "Jean Leclerc", guest_email: "jean@email.com", guest_phone: "+33 6 55 66 77 88", party_size: 3, date: "2025-03-17", time: "12:30", status: "pending" as const, special_requests: null },
];

const statusConfig = {
  pending: { label: "En attente", color: "bg-yellow-500/10 text-yellow-400" },
  confirmed: { label: "Confirmée", color: "bg-green-500/10 text-green-400" },
  cancelled: { label: "Annulée", color: "bg-red-500/10 text-red-400" },
  completed: { label: "Terminée", color: "bg-blue-500/10 text-blue-400" },
};

export default function AdminReservationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedReservation, setSelectedReservation] = useState<string | null>(null);

  const filtered = placeholderReservations.filter((r) => {
    const matchesSearch = r.guest_name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || r.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const selected = placeholderReservations.find((r) => r.id === selectedReservation);

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-cream-100">Réservations</h1>
        <p className="text-dark-400 mt-1">Gérez les réservations de vos clients.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl input-premium" placeholder="Rechercher par nom..." />
        </div>
        <div className="flex gap-2">
          {["all", "pending", "confirmed", "cancelled", "completed"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${statusFilter === status ? "bg-gold-500 text-dark-950" : "bg-dark-800 text-dark-300 hover:text-cream-100"}`}
            >
              {status === "all" ? "Toutes" : statusConfig[status as keyof typeof statusConfig].label}
            </button>
          ))}
        </div>
      </div>

      {/* Reservations List */}
      <div className="space-y-3">
        {filtered.map((reservation, index) => (
          <motion.div
            key={reservation.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass-card rounded-xl p-4 lg:p-5 hover:border-gold-500/20 transition-all cursor-pointer"
            onClick={() => setSelectedReservation(reservation.id)}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-cream-100 font-medium">{reservation.guest_name}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${statusConfig[reservation.status].color}`}>
                    {statusConfig[reservation.status].label}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-dark-400">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="w-4 h-4" />
                    {new Date(reservation.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {reservation.time}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    {reservation.party_size} pers.
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                {reservation.status === "pending" && (
                  <>
                    <button onClick={(e) => { e.stopPropagation(); toast.success("Réservation confirmée !"); }} className="p-2 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-all" title="Confirmer">
                      <Check className="w-4 h-4" />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); toast.success("Réservation annulée."); }} className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all" title="Annuler">
                      <X className="w-4 h-4" />
                    </button>
                  </>
                )}
                <button onClick={(e) => { e.stopPropagation(); setSelectedReservation(reservation.id); }} className="p-2 rounded-lg hover:bg-dark-800 text-dark-400 hover:text-gold-500 transition-all" title="Détails">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
            {reservation.special_requests && (
              <p className="mt-3 text-dark-500 text-xs italic border-t border-dark-800/50 pt-3">
                💬 {reservation.special_requests}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <CalendarDays className="w-12 h-12 text-dark-700 mx-auto mb-3" />
          <p className="text-dark-400">Aucune réservation trouvée.</p>
        </div>
      )}

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-dark-950/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedReservation(null)}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md glass-card rounded-2xl p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-bold text-cream-100">Détails</h2>
              <button onClick={() => setSelectedReservation(null)} className="p-2 rounded-lg hover:bg-dark-800 text-dark-400"><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-4">
              <div><p className="text-dark-500 text-xs uppercase tracking-wider mb-1">Client</p><p className="text-cream-100">{selected.guest_name}</p></div>
              <div className="grid grid-cols-2 gap-4">
                <div><p className="text-dark-500 text-xs uppercase tracking-wider mb-1">Email</p><p className="text-cream-200 text-sm">{selected.guest_email}</p></div>
                <div><p className="text-dark-500 text-xs uppercase tracking-wider mb-1">Téléphone</p><p className="text-cream-200 text-sm">{selected.guest_phone}</p></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div><p className="text-dark-500 text-xs uppercase tracking-wider mb-1">Date</p><p className="text-cream-200 text-sm">{new Date(selected.date).toLocaleDateString("fr-FR")}</p></div>
                <div><p className="text-dark-500 text-xs uppercase tracking-wider mb-1">Heure</p><p className="text-cream-200 text-sm">{selected.time}</p></div>
                <div><p className="text-dark-500 text-xs uppercase tracking-wider mb-1">Personnes</p><p className="text-cream-200 text-sm">{selected.party_size}</p></div>
              </div>
              {selected.special_requests && (
                <div><p className="text-dark-500 text-xs uppercase tracking-wider mb-1">Demandes spéciales</p><p className="text-cream-300 text-sm italic">{selected.special_requests}</p></div>
              )}
              <div><p className="text-dark-500 text-xs uppercase tracking-wider mb-1">Statut</p><span className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig[selected.status].color}`}>{statusConfig[selected.status].label}</span></div>
            </div>
            {selected.status === "pending" && (
              <div className="flex gap-3 mt-6">
                <button onClick={() => { toast.success("Confirmée !"); setSelectedReservation(null); }} className="flex-1 py-2.5 bg-green-500/20 text-green-400 rounded-full text-sm font-medium hover:bg-green-500/30 transition-all">Confirmer</button>
                <button onClick={() => { toast.success("Annulée."); setSelectedReservation(null); }} className="flex-1 py-2.5 bg-red-500/20 text-red-400 rounded-full text-sm font-medium hover:bg-red-500/30 transition-all">Annuler</button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
