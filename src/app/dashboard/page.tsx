"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Sparkles, 
  Layers, 
  Video, 
  TrendingUp, 
  Radio, 
  Play, 
  Download, 
  AlertCircle,
  Clock, 
  ExternalLink,
  Flame,
  Plus,
  Eye,
  Heart
} from "lucide-react";

// Mock recently forged videos database list
const INITIAL_VIDEOS = [
  { 
    id: "vid-1", 
    title: "Le secret terrifiant du Sahara", 
    niche: "Science Insolite", 
    style: "Cinématique SDXL",
    duration: 30,
    status: "COMPLETED", 
    videoUrl: "https://pub-reelforge.r2.dev/rendered-result-sahara.mp4",
    views: "1.2M", 
    likes: "84K",
    viralScore: 84,
    createdAt: "Il y a 2 heures" 
  },
  { 
    id: "vid-2", 
    title: "L'Arche Perdue de Salomon", 
    niche: "Histoires Bibliques", 
    style: "Illustration",
    duration: 45,
    status: "RENDERING", 
    videoUrl: null,
    views: "0", 
    likes: "0",
    viralScore: 78,
    progress: 75,
    createdAt: "Il y a 5 min" 
  },
  { 
    id: "vid-3", 
    title: "L'Ombre d'Anubis - Épisode 1", 
    niche: "Mythologie", 
    style: "Dark Fantasy",
    duration: 30,
    status: "COMPLETED", 
    videoUrl: "https://pub-reelforge.r2.dev/rendered-result-anubis.mp4",
    views: "340K", 
    likes: "21K",
    viralScore: 92,
    createdAt: "Il y a 1 jour" 
  },
  { 
    id: "vid-4", 
    title: "L'Investissement Passif en 2026", 
    niche: "Finance & Richesse", 
    style: "Realistic",
    duration: 15,
    status: "FAILED", 
    videoUrl: null,
    views: "0", 
    likes: "0",
    viralScore: 45,
    error: "ElevenLabs API Rate Limit exceeded. Refondé de 1 crédit.",
    createdAt: "Il y a 2 jours" 
  }
];

export default function DashboardOverview() {
  const { language, t } = useLanguage();
  const [videos, setVideos] = useState(INITIAL_VIDEOS);
  const [draftNiche, setDraftNiche] = useState<string | null>(null);

  // Sync draft settings from Landing Page Onboarding
  useEffect(() => {
    const savedNiche = localStorage.getItem("reelforge_draft_niche");
    if (savedNiche) {
      setDraftNiche(savedNiche);
    }
  }, []);

  const clearDraft = () => {
    localStorage.removeItem("reelforge_draft_niche");
    localStorage.removeItem("reelforge_draft_style");
    localStorage.removeItem("reelforge_draft_prompt");
    setDraftNiche(null);
  };

  return (
    <div className="flex flex-col gap-8 text-left">
      
      {/* 1. Welcoming Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white font-display">
            {t("dash.title")}
          </h1>
          <p className="text-xs text-gray-400">{t("dash.subtitle")}</p>
        </div>
        
        <Link 
          href="/dashboard/series"
          className="px-4 py-2.5 text-xs font-bold text-background bg-secondary hover:bg-secondary-hover rounded-xl flex items-center gap-2 shadow-lg shadow-secondary/15 active:scale-95 transition-all"
        >
          <Plus className="w-4 h-4" />
          {t("dash.btn.create")}
        </Link>
      </div>

      {/* Onboarding Draft Alert Notification */}
      {draftNiche && (
        <div className="p-4 bg-primary/10 border border-primary/30 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-pulse-glow">
          <div className="flex items-start gap-3">
            <span className="p-2 bg-primary/20 text-primary rounded-xl mt-0.5 sm:mt-0">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xs font-bold text-white">{t("dash.draft.title")}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">
                {t("dash.draft.desc").replace("{niche}", draftNiche)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={clearDraft}
              className="text-[10px] text-gray-400 hover:text-white"
            >
              {t("dash.draft.ignore")}
            </button>
            <Link 
              href="/dashboard/series"
              className="px-3.5 py-1.5 bg-primary hover:bg-primary-hover text-white text-[10px] font-bold rounded-lg transition-all"
            >
              {t("dash.draft.complete")}
            </Link>
          </div>
        </div>
      )}

      {/* 2. Key Metrics Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Met 1 */}
        <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between border border-border/80">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{t("menu.credits")}</span>
            <span className="p-1.5 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <Flame className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-black text-white font-display">124</h3>
            <p className="text-[9px] text-gray-400 mt-1">{t("dash.metrics.credits.sub")}</p>
          </div>
        </div>

        {/* Met 2 */}
        <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between border border-border/80">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{t("dash.metrics.videos")}</span>
            <span className="p-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
              <Video className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-black text-white font-display">42</h3>
            <p className="text-[9px] text-gray-400 mt-1">{t("dash.metrics.videos.sub")}</p>
          </div>
        </div>

        {/* Met 3 */}
        <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between border border-border/80">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{t("dash.metrics.views")}</span>
            <span className="p-1.5 rounded-lg bg-secondary/10 text-secondary border border-secondary/20">
              <TrendingUp className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-black text-white font-display">2.8M</h3>
            <p className="text-[9px] text-gray-400 mt-1">{t("dash.metrics.views.sub")}</p>
          </div>
        </div>

        {/* Met 4 */}
        <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between border border-border/80">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{t("dash.metrics.channels")}</span>
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Radio className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-black text-white font-display">3 / 6</h3>
            <p className="text-[9px] text-gray-400 mt-1">{t("dash.metrics.channels.sub")}</p>
          </div>
        </div>

      </div>

      {/* 3. Recently Forged Videos Section */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-base font-bold text-white font-display">{t("dash.recent.title")}</h2>
          <span className="text-[10px] text-gray-400 font-semibold flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {t("dash.recent.update")}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {videos.map((vid) => (
            <div 
              key={vid.id}
              className="glass-panel p-5 rounded-2xl border border-border/60 flex flex-col justify-between gap-4 bg-card/20 hover:border-primary/20 transition-all"
            >
              
              {/* Header card details */}
              <div className="flex justify-between items-start gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-bold text-gray-400">
                      {vid.niche}
                    </span>
                    <span className="text-[9px] text-gray-500">{vid.createdAt}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug mt-1 font-display">
                    {vid.title}
                  </h4>
                  <span className="text-[9px] text-gray-500">{t("dash.recent.style")}: {vid.style} | {vid.duration}s</span>
                </div>

                {/* Status badges */}
                <div>
                  {vid.status === "COMPLETED" && (
                    <span className="text-[9px] px-2 py-0.5 bg-green-500/10 border border-green-500/20 text-green-400 font-bold rounded-full">
                      {t("dash.recent.completed")}
                    </span>
                  )}
                  {vid.status === "RENDERING" && (
                    <span className="text-[9px] px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 font-bold rounded-full animate-pulse">
                      {t("dash.recent.rendering")}
                    </span>
                  )}
                  {vid.status === "FAILED" && (
                    <span className="text-[9px] px-2 py-0.5 bg-red-500/10 border border-red-500/20 text-red-400 font-bold rounded-full">
                      {t("dash.recent.failed")}
                    </span>
                  )}
                </div>
              </div>

              {/* Rendering status details */}
              {vid.status === "RENDERING" && (
                <div className="flex flex-col gap-1.5 w-full bg-white/5 p-3 rounded-xl">
                  <div className="flex justify-between items-center text-[10px] font-semibold">
                    <span className="text-gray-400">{t("dash.recent.progress")}</span>
                    <span className="text-secondary">{vid.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full rounded-full transition-all duration-500" style={{ width: `${vid.progress}%` }} />
                  </div>
                </div>
              )}

              {/* Failure Error Message */}
              {vid.status === "FAILED" && (
                <div className="flex items-start gap-2 bg-red-500/5 border border-red-500/10 rounded-xl p-3 text-[10px] text-red-300">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="leading-tight">{vid.error}</p>
                </div>
              )}

              {/* Action Buttons footer */}
              <div className="flex justify-between items-center border-t border-border/60 pt-3 mt-1">
                {/* Stats */}
                <div className="flex items-center gap-4 text-[10px] text-gray-400">
                  {vid.status === "COMPLETED" && (
                    <>
                      <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5 text-primary" /> <b>{vid.views}</b></span>
                      <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-accent-pink" /> <b>{vid.likes}</b></span>
                    </>
                  )}
                  <span className="flex items-center gap-1 font-bold text-primary">
                    <Sparkles className="w-3 h-3 text-secondary" /> {t("dash.recent.score")}: {vid.viralScore}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  {vid.status === "COMPLETED" ? (
                    <>
                      <a 
                        href={vid.videoUrl || "#"} 
                        download
                        className="p-1.5 bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 rounded-lg text-xs flex items-center justify-center"
                        title={t("lib.card.download")}
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                      <a 
                        href={vid.videoUrl || "#"} 
                        target="_blank"
                        className="px-3 py-1.5 bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow"
                      >
                        {t("dash.recent.play")}
                        <Play className="w-3 h-3 fill-current ml-0.5" />
                      </a>
                    </>
                  ) : (
                    <button 
                      disabled
                      className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-500 text-xs font-semibold rounded-lg"
                    >
                      {t("dash.recent.pending")}
                    </button>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
