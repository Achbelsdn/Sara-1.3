"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error("Identifiants incorrects. Veuillez réessayer.");
      setIsLoading(false);
      return;
    }

    toast.success("Connexion réussie !");
    router.push("/admin");
    router.refresh();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto border-2 border-gold-500 rounded-full flex items-center justify-center mb-4">
            <span className="font-heading text-gold-500 text-2xl font-bold">R</span>
          </div>
          <h1 className="font-heading text-2xl font-bold text-cream-100">
            Administration
          </h1>
          <p className="text-dark-400 text-sm mt-2">
            Connectez-vous pour gérer votre restaurant
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="glass-card rounded-2xl p-8">
          <div className="mb-4">
            <label htmlFor="login-email" className="flex items-center gap-2 text-cream-200 text-sm font-medium mb-2">
              <Mail className="w-4 h-4 text-gold-500" />
              Email
            </label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl input-premium"
              placeholder="admin@lareserve.com"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="login-password" className="flex items-center gap-2 text-cream-200 text-sm font-medium mb-2">
              <Lock className="w-4 h-4 text-gold-500" />
              Mot de passe
            </label>
            <div className="relative">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-xl input-premium"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400 hover:text-gold-500 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 disabled:bg-gold-500/50 text-dark-950 font-semibold rounded-full transition-all btn-glow uppercase tracking-wider"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-dark-950/30 border-t-dark-950 rounded-full animate-spin" />
            ) : (
              <>
                <Lock className="w-4 h-4" />
                Se connecter
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
