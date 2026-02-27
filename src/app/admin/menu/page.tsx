"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Star,
  Search,
  UtensilsCrossed,
  Image as ImageIcon,
  Video,
  X,
  Save,
} from "lucide-react";
import toast from "react-hot-toast";

interface MenuItemForm {
  name: string;
  description: string;
  price: string;
  category_id: string;
  is_available: boolean;
  is_featured: boolean;
  image_url: string;
  video_url: string;
  allergens: string;
}

const emptyForm: MenuItemForm = {
  name: "",
  description: "",
  price: "",
  category_id: "",
  is_available: true,
  is_featured: false,
  image_url: "",
  video_url: "",
  allergens: "",
};

// Placeholder data
const placeholderCategories = [
  { id: "1", name: "Entrées" },
  { id: "2", name: "Plats Principaux" },
  { id: "3", name: "Desserts" },
  { id: "4", name: "Boissons" },
];

const placeholderItems = [
  { id: "1", name: "Carpaccio de Bœuf", price: 16, category: "Entrées", is_available: true, is_featured: true },
  { id: "2", name: "Velouté de Saison", price: 12, category: "Entrées", is_available: true, is_featured: false },
  { id: "3", name: "Filet de Bœuf Rossini", price: 38, category: "Plats Principaux", is_available: true, is_featured: true },
  { id: "4", name: "Fondant au Chocolat", price: 14, category: "Desserts", is_available: true, is_featured: true },
];

export default function AdminMenuPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<MenuItemForm>(emptyForm);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      toast.success("Plat modifié avec succès !");
    } else {
      toast.success("Plat ajouté avec succès !");
    }
    setShowForm(false);
    setFormData(emptyForm);
    setEditingId(null);
  };

  const handleEdit = (id: string) => {
    const item = placeholderItems.find((i) => i.id === id);
    if (item) {
      setFormData({
        name: item.name,
        description: "",
        price: item.price.toString(),
        category_id: "1",
        is_available: item.is_available,
        is_featured: item.is_featured,
        image_url: "",
        video_url: "",
        allergens: "",
      });
      setEditingId(id);
      setShowForm(true);
    }
  };

  const handleDelete = (id: string) => {
    toast.success("Plat supprimé !");
  };

  const filteredItems = placeholderItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-3xl font-bold text-cream-100">
            Gestion du Menu
          </h1>
          <p className="text-dark-400 mt-1">
            Ajoutez, modifiez et organisez les plats de votre carte.
          </p>
        </div>
        <button
          onClick={() => {
            setFormData(emptyForm);
            setEditingId(null);
            setShowForm(true);
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold text-sm rounded-full transition-all btn-glow"
        >
          <Plus className="w-4 h-4" />
          Ajouter un plat
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl input-premium"
          placeholder="Rechercher un plat..."
        />
      </div>

      {/* Items Table */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold-500/10">
                <th className="text-left px-6 py-4 text-dark-400 text-xs uppercase tracking-wider font-medium">
                  Plat
                </th>
                <th className="text-left px-6 py-4 text-dark-400 text-xs uppercase tracking-wider font-medium">
                  Catégorie
                </th>
                <th className="text-left px-6 py-4 text-dark-400 text-xs uppercase tracking-wider font-medium">
                  Prix
                </th>
                <th className="text-left px-6 py-4 text-dark-400 text-xs uppercase tracking-wider font-medium">
                  Statut
                </th>
                <th className="text-right px-6 py-4 text-dark-400 text-xs uppercase tracking-wider font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-dark-800/50 hover:bg-dark-800/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center shrink-0">
                        <UtensilsCrossed className="w-4 h-4 text-gold-500/30" />
                      </div>
                      <div>
                        <p className="text-cream-100 text-sm font-medium">{item.name}</p>
                        {item.is_featured && (
                          <span className="inline-flex items-center gap-1 text-gold-500 text-[10px] uppercase tracking-wider">
                            <Star className="w-3 h-3" />
                            Signature
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-dark-300 text-sm">{item.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gold-500 font-heading font-bold">
                      {item.price.toFixed(2)} €
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        item.is_available
                          ? "bg-green-500/10 text-green-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {item.is_available ? (
                        <>
                          <Eye className="w-3 h-3" />
                          Disponible
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-3 h-3" />
                          Indisponible
                        </>
                      )}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="p-2 rounded-lg hover:bg-dark-800 text-dark-400 hover:text-gold-500 transition-all"
                        title="Modifier"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 rounded-lg hover:bg-red-500/10 text-dark-400 hover:text-red-400 transition-all"
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <UtensilsCrossed className="w-12 h-12 text-dark-700 mx-auto mb-3" />
            <p className="text-dark-400">Aucun plat trouvé.</p>
          </div>
        )}
      </div>

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-dark-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl p-6 lg:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-bold text-cream-100">
                {editingId ? "Modifier le plat" : "Ajouter un plat"}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
                className="p-2 rounded-lg hover:bg-dark-800 text-dark-400 hover:text-cream-100 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-cream-200 text-sm font-medium mb-2">
                    Nom du plat *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl input-premium"
                    placeholder="Ex: Filet de Bœuf Rossini"
                    required
                  />
                </div>
                <div>
                  <label className="block text-cream-200 text-sm font-medium mb-2">
                    Catégorie *
                  </label>
                  <select
                    value={formData.category_id}
                    onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl input-premium"
                    required
                  >
                    <option value="">Choisir une catégorie</option>
                    {placeholderCategories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-cream-200 text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl input-premium min-h-[80px] resize-y"
                  placeholder="Description du plat, ingrédients..."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-cream-200 text-sm font-medium mb-2">
                    Prix (€) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl input-premium"
                    placeholder="0.00"
                    required
                  />
                </div>
                <div>
                  <label className="block text-cream-200 text-sm font-medium mb-2">
                    Allergènes
                  </label>
                  <input
                    type="text"
                    value={formData.allergens}
                    onChange={(e) => setFormData({ ...formData, allergens: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl input-premium"
                    placeholder="Gluten, Lait, Œufs..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-cream-200 text-sm font-medium mb-2">
                    <ImageIcon className="w-4 h-4 text-gold-500" />
                    URL de l&apos;image
                  </label>
                  <input
                    type="url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl input-premium"
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-cream-200 text-sm font-medium mb-2">
                    <Video className="w-4 h-4 text-gold-500" />
                    URL de la vidéo
                  </label>
                  <input
                    type="url"
                    value={formData.video_url}
                    onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl input-premium"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.is_available}
                    onChange={(e) => setFormData({ ...formData, is_available: e.target.checked })}
                    className="w-4 h-4 rounded border-gold-500/30 bg-dark-800 text-gold-500 focus:ring-gold-500/30"
                  />
                  <span className="text-cream-200 text-sm">Disponible</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.is_featured}
                    onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                    className="w-4 h-4 rounded border-gold-500/30 bg-dark-800 text-gold-500 focus:ring-gold-500/30"
                  />
                  <span className="text-cream-200 text-sm">Plat signature</span>
                </label>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-full transition-all btn-glow"
                >
                  <Save className="w-4 h-4" />
                  {editingId ? "Enregistrer" : "Ajouter"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                  }}
                  className="px-6 py-3 border border-dark-600 text-dark-300 hover:text-cream-100 hover:border-dark-400 rounded-full transition-all"
                >
                  Annuler
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
