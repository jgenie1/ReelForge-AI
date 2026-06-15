"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, BookOpen, Code, Terminal, Play, Key, CheckCircle } from "lucide-react";

export default function ApiDocsPage() {
  const { language } = useLanguage();
  const [activeEndpoint, setActiveEndpoint] = useState<"generate" | "status" | "series">("generate");

  return (
    <div className="min-h-screen bg-[#0D0D0F] text-gray-100 p-6 sm:p-12 relative overflow-hidden flex flex-col justify-between">
      {/* Background radial glow */}
      <div className="absolute -left-40 -top-40 w-96 h-96 bg-primary/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto w-full relative z-10 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/80 pb-6">
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-primary/20 rounded-xl border border-primary/30 text-accent-purple">
              <BookOpen className="w-6 h-6" />
            </span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                {language === "fr" ? "Documentation de l'API" : "API Documentation"}
              </h1>
              <p className="text-xs text-gray-400 mt-1">
                {language === "fr" ? "Intégrez la génération de vidéos courtes dans vos outils" : "Integrate short video generation into your workflows"}
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

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation: Endpoint Selector */}
          <div className="lg:col-span-4 flex flex-col gap-2 text-left">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2 mb-1">Endpoints</span>
            
            <button
              onClick={() => setActiveEndpoint("generate")}
              className={`p-3.5 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                activeEndpoint === "generate"
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-white/10 bg-card/25"
              }`}
            >
              <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 w-fit">POST</span>
              <span className="text-xs font-bold text-white mt-1">/api/videos/generate</span>
              <span className="text-[10px] text-gray-400 font-medium">
                {language === "fr" ? "Créer une vidéo courte" : "Create a short video"}
              </span>
            </button>

            <button
              onClick={() => setActiveEndpoint("status")}
              className={`p-3.5 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                activeEndpoint === "status"
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-white/10 bg-card/25"
              }`}
            >
              <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 w-fit">GET</span>
              <span className="text-xs font-bold text-white mt-1">/api/videos/[id]/status</span>
              <span className="text-[10px] text-gray-400 font-medium">
                {language === "fr" ? "Statut du rendu" : "Get render progress"}
              </span>
            </button>

            <button
              onClick={() => setActiveEndpoint("series")}
              className={`p-3.5 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                activeEndpoint === "series"
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-white/10 bg-card/25"
              }`}
            >
              <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 w-fit">GET</span>
              <span className="text-xs font-bold text-white mt-1">/api/series</span>
              <span className="text-[10px] text-gray-400 font-medium">
                {language === "fr" ? "Lister les campagnes" : "List active series"}
              </span>
            </button>

          </div>

          {/* Right Content: Details & Code Panel */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* Header info */}
            <div className="glass-panel border border-border bg-card/20 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-white text-base">
                {activeEndpoint === "generate" && "POST /api/videos/generate"}
                {activeEndpoint === "status" && "GET /api/videos/[id]/status"}
                {activeEndpoint === "series" && "GET /api/series"}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {activeEndpoint === "generate" && (
                  language === "fr"
                    ? "Permet d'envoyer une requête de génération de vidéo. Valide automatiquement les crédits de l'utilisateur."
                    : "Triggers a new video rendering job. Validates user credits balance automatically."
                )}
                {activeEndpoint === "status" && (
                  language === "fr"
                    ? "Retourne l'état d'avancement du rendu de la vidéo, le score de viralité estimé et le lien de sortie."
                    : "Returns the rendering progress percentage, estimated virality score, and final output assets."
                )}
                {activeEndpoint === "series" && (
                  language === "fr"
                    ? "Retourne l'ensemble des séries automatiques configurées par le créateur."
                    : "Lists all automated video series configurations owned by the user."
                )}
              </p>
            </div>

            {/* Code request/response panel */}
            <div className="glass-panel border border-border bg-black/40 rounded-2xl overflow-hidden font-mono text-[11px]">
              <div className="bg-card/45 border-b border-border/80 px-4 py-2 flex items-center justify-between text-gray-400">
                <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5" /> Request Example</span>
                <span className="text-[10px] uppercase font-bold text-primary">curl</span>
              </div>
              <div className="p-4 overflow-x-auto text-gray-300">
                {activeEndpoint === "generate" && (
                  <pre>
{`curl -X POST https://api.reelforge.ai/api/videos/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "niche": "Science Insolite",
    "style": "Cinématique SDXL",
    "tone": "Mystérieux",
    "language": "fr",
    "duration": 30,
    "voice": "sarah"
  }'`}
                  </pre>
                )}
                {activeEndpoint === "status" && (
                  <pre>
{`curl -X GET https://api.reelforge.ai/api/videos/vid-1/status \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                  </pre>
                )}
                {activeEndpoint === "series" && (
                  <pre>
{`curl -X GET https://api.reelforge.ai/api/series \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                  </pre>
                )}
              </div>
            </div>

            <div className="glass-panel border border-border bg-black/40 rounded-2xl overflow-hidden font-mono text-[11px]">
              <div className="bg-card/45 border-b border-border/80 px-4 py-2 flex items-center justify-between text-gray-400">
                <span className="flex items-center gap-1.5"><Code className="w-3.5 h-3.5 text-secondary" /> Response JSON</span>
                <span className="text-[10px] uppercase font-bold text-secondary">JSON</span>
              </div>
              <div className="p-4 overflow-x-auto text-cyan-300">
                {activeEndpoint === "generate" && (
                  <pre>
{`{
  "success": true,
  "videoId": "vid-new-12345",
  "status": "PENDING",
  "progress": 5,
  "message": "Video added to the forge render pipeline."
}`}
                  </pre>
                )}
                {activeEndpoint === "status" && (
                  <pre>
{`{
  "status": "COMPLETED",
  "progress": 100,
  "videoUrl": "https://pub-reelforge.r2.dev/rendered-result-sahara.mp4",
  "viralScore": 84,
  "suggestions": [
    "Shorten hook introduction by 0.8s",
    "Consolidate dramatic vocal pitches"
  ]
}`}
                  </pre>
                )}
                {activeEndpoint === "series" && (
                  <pre>
{`{
  "series": [
    {
      "id": "ser-1",
      "name": "Mythes Antiques",
      "niche": "Mythologie",
      "videoCount": 30,
      "videosGenerated": 18,
      "status": "ACTIVE"
    }
  ]
}`}
                  </pre>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="text-center text-[10px] text-gray-600 mt-12">
        &copy; {new Date().getFullYear()} ReelForge AI. Developer Portal.
      </footer>
    </div>
  );
}
