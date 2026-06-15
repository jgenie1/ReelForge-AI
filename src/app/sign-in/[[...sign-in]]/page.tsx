"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Sparkles, Mail, Lock, ArrowRight } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate auth check, then redirect to dashboard
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 1000);
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0F] text-gray-100 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute -left-40 -top-40 w-96 h-96 bg-primary/25 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Brand Logo */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="p-3 bg-primary/20 rounded-2xl border border-primary/40 shadow-lg shadow-primary/10">
            <Sparkles className="w-6 h-6 text-accent-purple" />
          </div>
          <span className="font-display font-black text-2xl tracking-tight bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
            ReelForge AI
          </span>
          <p className="text-gray-400 text-xs">Créez des vidéos virales à l'aide de l'IA</p>
        </div>

        {/* Card */}
        <div className="glass-panel border border-border bg-card/25 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-xl font-bold text-center text-white mb-6">Connexion à ReelForge AI</h2>

          {/* Social OAuth */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full py-2.5 px-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2.5 mb-5 shadow-lg border border-gray-200"
          >
            {/* Google Icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.32 14.24A7.16 7.16 0 0 1 4.91 12c0-.79.13-1.57.41-2.24V6.61H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.39l4.11-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.61l4.11 3.15c.94-2.85 3.57-4.96 6.68-4.96z"
              />
            </svg>
            Continuer avec Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[1px] bg-border/80 flex-grow"></div>
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">ou par email</span>
            <div className="h-[1px] bg-border/80 flex-grow"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-gray-400" /> Adresse Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nom@exemple.com"
                className="w-full bg-black/40 border border-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 placeholder-gray-600"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-gray-400" /> Mot de passe
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-black/40 border border-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 placeholder-gray-600"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-2 bg-primary hover:bg-primary-hover disabled:bg-zinc-800 disabled:text-zinc-500 disabled:shadow-none text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              {loading ? "Connexion..." : "Se connecter"} <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Footer Link */}
          <div className="text-center mt-6 text-xs text-gray-400">
            Pas encore de compte ?{" "}
            <Link href="/sign-up" className="text-primary hover:underline font-semibold">
              S'inscrire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
