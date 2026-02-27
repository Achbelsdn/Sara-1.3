"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, MessageSquare, Reply, Star, Search, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import StarRating from "@/components/ui/StarRating";

const placeholderReviews = [
  { id: "1", author_name: "Marie L.", rating: 5, comment: "Une expérience culinaire exceptionnelle !", is_approved: true, admin_reply: "Merci Marie !", created_at: "2025-01-15" },
  { id: "2", author_name: "Jean-Pierre D.", rating: 5, comment: "La meilleure table de la région.", is_approved: true, admin_reply: null, created_at: "2025-01-10" },
  { id: "3", author_name: "Nouveau Client", rating: 4, comment: "Très bon repas, service agréable.", is_approved: false, admin_reply: null, created_at: "2025-01-20" },
  { id: "4", author_name: "Sophie M.", rating: 3, comment: "Bon mais un peu cher pour la quantité.", is_approved: false, admin_reply: null, created_at: "2025-01-18" },
];

export default function AdminReviewsPage() {
  const [filter, setFilter] = useState<"all" | "pending" | "approved">("all");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  const filtered = placeholderReviews.filter((r) => {
    if (filter === "pending") return !r.is_approved;
    if (filter === "approved") return r.is_approved;
    return true;
  });

  const pendingCount = placeholderReviews.filter((r) => !r.is_approved).length;

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-3xl font-bold text-cream-100">Avis Clients</h1>
          <p className="text-dark-400 mt-1">
            Modérez et répondez aux avis de vos clients.
            {pendingCount > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-yellow-500/10 text-yellow-400 text-xs rounded-full">
                {pendingCount} en attente
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {[
          { key: "all" as const, label: "Tous" },
          { key: "pending" as const, label: "En attente" },
          { key: "approved" as const, label: "Approuvés" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${filter === key ? "bg-gold-500 text-dark-950" : "bg-dark-800 text-dark-300 hover:text-cream-100"}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Reviews */}
      <div className="space-y-4">
        {filtered.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`glass-card rounded-xl p-5 ${!review.is_approved ? "border-yellow-500/20" : ""}`}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center">
                  <span className="text-gold-500 font-heading font-bold">{review.author_name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-cream-100 font-medium text-sm">{review.author_name}</h3>
                  <p className="text-dark-500 text-xs">
                    {new Date(review.created_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <StarRating rating={review.rating} size="sm" />
                {!review.is_approved && (
                  <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 text-[10px] rounded-full">En attente</span>
                )}
              </div>
            </div>

            <p className="text-cream-300 text-sm font-light leading-relaxed mb-4">{review.comment}</p>

            {review.admin_reply && (
              <div className="pl-4 border-l-2 border-gold-500/30 mb-4">
                <p className="text-gold-500 text-xs font-medium mb-1">Votre réponse</p>
                <p className="text-dark-300 text-sm italic">{review.admin_reply}</p>
              </div>
            )}

            {replyingTo === review.id && (
              <div className="mb-4">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl input-premium min-h-[80px] resize-y text-sm"
                  placeholder="Votre réponse..."
                  autoFocus
                />
                <div className="flex gap-2 mt-2">
                  <button onClick={() => { toast.success("Réponse envoyée !"); setReplyingTo(null); setReplyText(""); }} className="px-4 py-2 bg-gold-500 text-dark-950 text-xs font-semibold rounded-full">Envoyer</button>
                  <button onClick={() => { setReplyingTo(null); setReplyText(""); }} className="px-4 py-2 text-dark-400 text-xs">Annuler</button>
                </div>
              </div>
            )}

            <div className="flex gap-2">
              {!review.is_approved && (
                <button onClick={() => toast.success("Avis approuvé !")} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 text-green-400 text-xs rounded-full hover:bg-green-500/20 transition-all">
                  <Check className="w-3 h-3" />Approuver
                </button>
              )}
              {!review.admin_reply && replyingTo !== review.id && (
                <button onClick={() => setReplyingTo(review.id)} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold-500/10 text-gold-500 text-xs rounded-full hover:bg-gold-500/20 transition-all">
                  <Reply className="w-3 h-3" />Répondre
                </button>
              )}
              <button onClick={() => toast.success("Avis supprimé.")} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 text-red-400 text-xs rounded-full hover:bg-red-500/20 transition-all">
                <Trash2 className="w-3 h-3" />Supprimer
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <MessageSquare className="w-12 h-12 text-dark-700 mx-auto mb-3" />
          <p className="text-dark-400">Aucun avis dans cette catégorie.</p>
        </div>
      )}
    </div>
  );
}
