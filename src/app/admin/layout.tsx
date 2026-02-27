"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  UtensilsCrossed,
  FolderOpen,
  MessageSquare,
  CalendarDays,
  Image,
  Settings,
  Clock,
  PartyPopper,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import toast from "react-hot-toast";

const sidebarLinks = [
  { href: "/admin", label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/admin/categories", label: "Catégories", icon: FolderOpen },
  { href: "/admin/menu", label: "Menu", icon: UtensilsCrossed },
  { href: "/admin/reservations", label: "Réservations", icon: CalendarDays },
  { href: "/admin/avis", label: "Avis", icon: MessageSquare },
  { href: "/admin/galerie", label: "Galerie", icon: Image },
  { href: "/admin/evenements", label: "Événements", icon: PartyPopper },
  { href: "/admin/horaires", label: "Horaires", icon: Clock },
  { href: "/admin/parametres", label: "Paramètres", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    toast.success("Déconnexion réussie");
    router.push("/login");
    router.refresh();
  };

  const currentPage = sidebarLinks.find((link) => link.href === pathname);

  return (
    <div className="min-h-screen bg-dark-950 pt-20 lg:pt-24">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-dark-950/95 backdrop-blur-xl border-b border-gold-500/10 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 text-cream-200 hover:text-gold-400 transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-dark-400">Admin</span>
              <ChevronRight className="w-4 h-4 text-dark-500" />
              <span className="text-cream-200">{currentPage?.label || "Tableau de bord"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-20 lg:top-24 left-0 h-[calc(100vh-5rem)] lg:h-[calc(100vh-6rem)] w-64 admin-sidebar z-30 transform transition-transform lg:transform-none ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="flex flex-col h-full p-4">
            {/* Admin Header */}
            <div className="mb-6 px-3">
              <h2 className="font-heading text-lg font-bold text-cream-100">
                Administration
              </h2>
              <p className="text-dark-500 text-xs mt-1">La Réserve</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 overflow-y-auto">
              {sidebarLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                      isActive
                        ? "bg-gold-500/10 text-gold-500 font-medium"
                        : "text-dark-300 hover:text-cream-100 hover:bg-dark-800/50"
                    }`}
                  >
                    <link.icon className={`w-5 h-5 ${isActive ? "text-gold-500" : ""}`} />
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Logout */}
            <div className="pt-4 border-t border-gold-500/10">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-dark-400 hover:text-red-400 hover:bg-red-500/5 transition-all w-full"
              >
                <LogOut className="w-5 h-5" />
                Déconnexion
              </button>
              <Link
                href="/"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-dark-400 hover:text-gold-400 hover:bg-gold-500/5 transition-all mt-1"
              >
                <ChevronRight className="w-5 h-5" />
                Voir le site
              </Link>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-dark-950/50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] p-4 lg:p-8 mt-12 lg:mt-0">
          {children}
        </main>
      </div>
    </div>
  );
}
