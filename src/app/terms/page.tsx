"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, FileText, CheckCircle2, ShieldAlert } from "lucide-react";

export default function TermsPage() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0D0D0F] text-gray-100 p-6 sm:p-12 relative overflow-hidden flex flex-col justify-between">
      {/* Background radial glow */}
      <div className="absolute -left-40 -top-40 w-96 h-96 bg-primary/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto w-full relative z-10 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/80 pb-6">
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-primary/20 rounded-xl border border-primary/30 text-accent-purple">
              <FileText className="w-6 h-6" />
            </span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                {language === "fr" ? "Conditions d'Utilisation" : "Terms of Service"}
              </h1>
              <p className="text-xs text-gray-400 mt-1">
                {language === "fr" ? "Dernière mise à jour : Juin 2026" : "Last updated: June 2026"}
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
        <div className="glass-panel border border-border bg-card/25 rounded-3xl p-8 space-y-6 text-sm leading-relaxed text-gray-300 text-left">
          {language === "fr" ? (
            <>
              <section className="space-y-2">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> 1. Acceptation des Conditions
                </h2>
                <p>
                  En accédant à ReelForge AI (le "Service"), vous acceptez d'être lié par les présentes conditions d'utilisation, toutes les lois et réglementations applicables, et acceptez que vous êtes responsable du respect de toutes les lois locales applicables.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> 2. Utilisation du Crédit
                </h2>
                <p>
                  ReelForge AI fonctionne sur la base d'un solde de crédits. 1 crédit équivaut à 1 vidéo courte générée. Les crédits achetés ne sont pas remboursables, sauf si un échec de rendu système survient (auquel cas les crédits sont recrédités automatiquement).
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> 3. Propriété du Contenu
                </h2>
                <p>
                  Vous conservez la pleine propriété de tous les scripts, prompts et vidéos finales générés via ReelForge AI. Vous êtes seul responsable du contenu publié et devez vous assurer qu'il ne viole pas les droits d'auteur de tiers ni les politiques des réseaux sociaux cibles (TikTok, Instagram, YouTube).
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> 4. Limitations de Responsabilité
                </h2>
                <p>
                  Le Service est fourni "tel quel". ReelForge AI ne donne aucune garantie, expresse ou implicite, et décline par la présente toute autre garantie, y compris, sans limitation, les garanties implicites de qualité marchande ou d'adéquation à un usage particulier.
                </p>
              </section>

              <div className="p-4 border border-red-500/20 bg-red-500/5 rounded-2xl flex gap-3 text-red-400 text-xs">
                <ShieldAlert className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Attention :</strong> Toute tentative de contourner nos limitations de crédits, d'utiliser des scripts haineux, ou de surcharger nos files de rendu Remotion entraînera la résiliation immédiate de votre compte sans remboursement.
                </p>
              </div>
            </>
          ) : (
            <>
              <section className="space-y-2">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> 1. Acceptance of Terms
                </h2>
                <p>
                  By accessing ReelForge AI (the \"Service\"), you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> 2. Credit Usage
                </h2>
                <p>
                  ReelForge AI operates on a credit-based model. 1 credit equals 1 generated short video. Purchased credits are non-refundable unless a system rendering failure occurs (in which case credits are refunded automatically).
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> 3. Content Ownership
                </h2>
                <p>
                  You retain full ownership of all scripts, prompts, and final video renders generated through ReelForge AI. You are solely responsible for the published content and must ensure it does not violate third-party copyrights or target social media platform guidelines.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> 4. Disclaimer & Limitations
                </h2>
                <p>
                  The Service is provided \"as is\". ReelForge AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties of merchantability or fitness for a particular purpose.
                </p>
              </section>

              <div className="p-4 border border-red-500/20 bg-red-500/5 rounded-2xl flex gap-3 text-red-400 text-xs">
                <ShieldAlert className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Warning:</strong> Any attempt to bypass our credit limitation barriers, compile hateful scripts, or overload our Remotion rendering servers will result in immediate account termination with no refund.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-[10px] text-gray-600 mt-12">
        &copy; {new Date().getFullYear()} ReelForge AI. All rights reserved.
      </footer>
    </div>
  );
}
