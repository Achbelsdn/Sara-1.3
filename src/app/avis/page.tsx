"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare, TrendingUp } from "lucide-react";
import toast from "react-hot-toast";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";

// Placeholder reviews
const placeholderReviews = [
  {
    id: "1",
    author_name: "Marie L.",
    rating: 5,
    comment: "Une expérience culinaire exceptionnelle ! Le cadre est magnifique et le service impeccable. Le filet de bœuf Rossini était divin.",
    created_at: "2025-01-15",
    admin_reply: "Merci beaucoup Marie ! Nous sommes ravis que vous ayez apprécié votre soirée chez nous. Au plaisir de vous revoir !",
  },
  {
    id: "2",
    author_name: "Jean-Pierre D.",
    rating: 5,
    comment: "La meilleure table de la région. Les plats sont créatifs et les saveurs incroyables. Le sommelier nous a parfaitement conseillés.",
    created_at: "2025-01-10",
    admin_reply: null,
  },
  {
    id: "3",
    author_name: "Sophie M.",
    rating: 4,
    comment: "Un moment magique du début à la fin. L'ambiance est chaleureuse et élégante. Je recommande vivement La Réserve pour une occasion spéciale.",
    created_at: "2025-01-05",
    admin_reply: "Merci Sophie pour ce bel avis ! Nous espérons vous accueillir à nouveau très bientôt.",
  },
  {
    id: "4",
    author_name: "Thomas R.",
    rating: 5,
    comment: "Nous avons fêté notre anniversaire de mariage ici et tout était parfait. Le menu dégustation est une pure merveille.",
    created_at: "2024-12-28",
    admin_reply: null,
  },
  {
    id: "5",
    author_name: "Isabelle F.",
    rating: 5,
    comment: "Le fondant au chocolat est le meilleur que j'ai jamais goûté ! Le service est attentionné sans être intrusif. Bravo !",
    created_at: "2024-12-20",
    admin_reply: "Merci Isabelle ! Notre chef sera ravi de lire votre commentaire sur son fondant. À bientôt !",
  },
];

export default function ReviewsPage() {
  const [formData, setFormData] = useState({
    author_name: "",
    author_email: "",
    rating: 0,
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const averageRating =
    placeholderReviews.reduce((sum, r) => sum + r.rating, 0) /
    placeholderReviews.length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.rating === 0) {
      toast.error("Veuillez sélectionner une note.");
      return;
    }

    if (!formData.author_name.trim() || !formData.comment.trim()) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - will be connected to Supabase
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Merci pour votre avis ! Il sera publié après modération.");
    setFormData({ author_name: "", author_email: "", rating: 0, comment: "" });
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
            subtitle="Témoignages"
            title="Avis de Nos Clients"
            description="Découvrez ce que nos clients pensent de leur expérience à La Réserve."
          />

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
            <div className="glass-card rounded-2xl px-8 py-6 text-center">
              <div className="text-4xl font-heading font-bold text-gold-500 mb-1">
                {averageRating.toFixed(1)}
              </div>
              <StarRating rating={Math.round(averageRating)} size="sm" />
              <p className="text-dark-400 text-xs mt-2">Note moyenne</p>
            </div>
            <div className="glass-card rounded-2xl px-8 py-6 text-center">
              <div className="text-4xl font-heading font-bold text-cream-100 mb-1">
                {placeholderReviews.length}
              </div>
              <div className="flex items-center gap-1 justify-center text-gold-500">
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs">Avis</span>
              </div>
              <p className="text-dark-400 text-xs mt-2">Clients satisfaits</p>
            </div>
            <div className="glass-card rounded-2xl px-8 py-6 text-center">
              <div className="text-4xl font-heading font-bold text-cream-100 mb-1">
                98%
              </div>
              <div className="flex items-center gap-1 justify-center text-gold-500">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs">Satisfaction</span>
              </div>
              <p className="text-dark-400 text-xs mt-2">Recommandent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="section-padding bg-dark-950">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {placeholderReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 lg:p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center">
                      <span className="text-gold-500 font-heading font-bold text-lg">
                        {review.author_name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-cream-100 font-medium">{review.author_name}</h3>
                      <p className="text-dark-500 text-xs">
                        {new Date(review.created_at).toLocaleDateString("fr-FR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <StarRating rating={review.rating} size="sm" />
                </div>

                <p className="text-cream-300 font-light leading-relaxed">
                  {review.comment}
                </p>

                {review.admin_reply && (
                  <div className="mt-4 pl-4 border-l-2 border-gold-500/30">
                    <p className="text-gold-500 text-xs font-medium mb-1 uppercase tracking-wider">
                      Réponse de La Réserve
                    </p>
                    <p className="text-dark-300 text-sm font-light italic">
                      {review.admin_reply}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Review Form */}
      <section className="section-padding bg-dark-900/50">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            subtitle="Votre avis compte"
            title="Partagez Votre Expérience"
            description="Votre retour nous aide à nous améliorer et à offrir le meilleur service possible."
          />

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8"
          >
            {/* Rating */}
            <div className="mb-6 text-center">
              <label className="block text-cream-200 text-sm font-medium mb-3">
                Votre note *
              </label>
              <div className="flex justify-center">
                <StarRating
                  rating={formData.rating}
                  size="lg"
                  interactive
                  onChange={(rating) => setFormData({ ...formData, rating })}
                />
              </div>
            </div>

            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-cream-200 text-sm font-medium mb-2">
                Votre nom *
              </label>
              <input
                id="name"
                type="text"
                value={formData.author_name}
                onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl input-premium"
                placeholder="Jean Dupont"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-cream-200 text-sm font-medium mb-2">
                Votre email <span className="text-dark-500">(optionnel)</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.author_email}
                onChange={(e) => setFormData({ ...formData, author_email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl input-premium"
                placeholder="jean@exemple.com"
              />
            </div>

            {/* Comment */}
            <div className="mb-6">
              <label htmlFor="comment" className="block text-cream-200 text-sm font-medium mb-2">
                Votre commentaire *
              </label>
              <textarea
                id="comment"
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                className="w-full px-4 py-3 rounded-xl input-premium min-h-[120px] resize-y"
                placeholder="Partagez votre expérience à La Réserve..."
                required
              />
            </div>

            {/* Submit */}
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
                  Envoyer mon avis
                </>
              )}
            </button>

            <p className="text-dark-500 text-xs text-center mt-4">
              Votre avis sera publié après modération par notre équipe.
            </p>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
