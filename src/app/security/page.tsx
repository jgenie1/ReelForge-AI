"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, ShieldCheck, Lock, Key, Server, Sparkles } from "lucide-react";

export default function SecurityPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0D0D0F] text-gray-100 p-6 sm:p-12 relative overflow-hidden flex flex-col justify-between">
      {/* Background radial glow */}
      <div className="absolute -left-40 -top-40 w-96 h-96 bg-primary/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto w-full relative z-10 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/80 pb-6">
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-primary/20 rounded-xl border border-primary/30 text-accent-cyan">
              <ShieldCheck className="w-6 h-6 text-secondary" />
            </span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                {language === "fr" ? "Politique de Sécurité" : "Security & Privacy"}
              </h1>
              <p className="text-xs text-gray-400 mt-1">
                {language === "fr" ? "Normes de sécurité de ReelForge" : "ReelForge security standards"}
              </p>
            </div>
          </div>
          <Link 
            href="/"
            className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white rounded-xl text-xs font-semibold transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> {language === "fr" ? "Retour" : "Back"}
          </Link>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="glass-panel border border-border bg-card/25 rounded-2xl p-6 flex flex-col gap-4 text-left">
            <span className="p-2 bg-primary/10 text-primary border border-primary/20 rounded-lg w-fit">
              <Lock className="w-5 h-5 text-accent-purple" />
            </span>
            <div className="space-y-1">
              <h3 className="font-bold text-white text-sm">
                {language === "fr" ? "Chiffrement AES-256" : "AES-256 Encryption"}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {language === "fr" 
                  ? "Toutes les données utilisateur, y compris vos vidéos en cours de rendu et configurations de voix-off, sont chiffrées en transit et au repos."
                  : "All user data, including video drafts, vocal clones, and assets are encrypted at rest and in transit."}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel border border-border bg-card/25 rounded-2xl p-6 flex flex-col gap-4 text-left">
            <span className="p-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-lg w-fit">
              <Key className="w-5 h-5" />
            </span>
            <div className="space-y-1">
              <h3 className="font-bold text-white text-sm">
                {language === "fr" ? "Accès Sécurisé Clerk & OAuth" : "Clerk OAuth Security"}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {language === "fr" 
                  ? "Nous déléguons notre authentification à Clerk. Vos mots de passe et sessions d'authentification sociale ne transitent jamais sur nos serveurs."
                  : "Authentication is safely managed by Clerk. Your credentials and social OAuth login keys never touch our servers."}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel border border-border bg-card/25 rounded-2xl p-6 flex flex-col gap-4 text-left">
            <span className="p-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg w-fit">
              <Server className="w-5 h-5" />
            </span>
            <div className="space-y-1">
              <h3 className="font-bold text-white text-sm">
                {language === "fr" ? "Isolation Cloud Storage" : "Cloud Storage Isolation"}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {language === "fr" 
                  ? "Les fichiers audio, scripts et images intermédiaires sont isolés dans des buckets Cloudflare R2 sécurisés avec jetons signés à durée limitée."
                  : "Render assets are isolated in secure Cloudflare R2 buckets with signed URLs expiring automatically after a short duration."}
              </p>
            </div>
          </div>

        </div>

        {/* Detailed Section */}
        <div className="glass-panel border border-border bg-card/15 rounded-3xl p-8 space-y-6 text-sm text-left leading-relaxed text-gray-300">
          <h2 className="text-base font-bold text-white">
            {language === "fr" ? "Sécurité des API & Intégrations Réseaux" : "Social API Security"}
          </h2>
          <p>
            {language === "fr"
              ? "ReelForge AI utilise des tokens d'authentification officiels de TikTok, Instagram (Meta Graph API) et YouTube pour publier vos vidéos automatiques. Nous ne demandons jamais vos identifiants réels. Vous pouvez révoquer les accès de publication à tout moment depuis les réglages de votre compte social."
              : "ReelForge AI uses official OAuth authorization tokens for TikTok, Instagram (Meta API), and YouTube to publish your automated videos. We never ask for your real social passwords. You can revoke access at any time directly in your social settings page."}
          </p>
          <div className="p-4 border border-primary/20 bg-primary/5 rounded-2xl text-xs text-primary font-medium flex items-center gap-2">
            {language === "fr"
              ? "Un audit de pénétration externe (Pentest) est réalisé chaque semestre pour garantir l'étanchéité absolue de nos files de rendu."
              : "An external pentest audit is executed twice a year to ensure absolute security across our video rendering pipelines."}
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="text-center text-[10px] text-gray-600 mt-12">
        &copy; {new Date().getFullYear()} ReelForge AI. Security Team.
      </footer>
    </div>
  );
}
