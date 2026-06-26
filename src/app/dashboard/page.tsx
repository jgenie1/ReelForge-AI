"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Sparkles, 
  Video, 
  TrendingUp, 
  Radio, 
  Play, 
  Download, 
  AlertCircle,
  Clock, 
  Flame,
  Plus,
  Eye,
  Heart,
  Loader2
} from "lucide-react";

const formatCreatedAt = (dateStr: any, lang: string) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    if (lang === "fr") return dateStr;
    return dateStr
      .replace("Il y a ", "")
      .replace(" jour", " day")
      .replace(" min", "min")
      .replace("h", "h")
      .trim() + " ago";
  }
  
  const diffMs = Date.now() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor(diffMs / 3600000);
  const diffDay = Math.floor(diffMs / 86400000);

  if (diffMin < 60) {
    return lang === "fr" ? `Il y a ${Math.max(1, diffMin)} min` : `${Math.max(1, diffMin)}m ago`;
  }
  if (diffHr < 24) {
    return lang === "fr" ? `Il y a ${diffHr}h` : `${diffHr}h ago`;
  }
  return lang === "fr" ? `Il y a ${diffDay} jour${diffDay > 1 ? 's' : ''}` : `${diffDay} day${diffDay > 1 ? 's' : ''} ago`;
};

const getViewsDisplay = (v: any) => {
  if (v.views !== undefined && v.views !== null) {
    return typeof v.views === "number" ? (v.views >= 1000000 ? `${(v.views / 1000000).toFixed(1)}M` : v.views >= 1000 ? `${(v.views / 1000).toFixed(0)}K` : v.views.toString()) : v.views;
  }
  return "0";
};

const getLikesDisplay = (v: any) => {
  if (v.likes !== undefined && v.likes !== null) {
    return typeof v.likes === "number" ? (v.likes >= 1000000 ? `${(v.likes / 1000000).toFixed(1)}M` : v.likes >= 1000 ? `${(v.likes / 1000).toFixed(0)}K` : v.likes.toString()) : v.likes;
  }
  return "0";
};

export default function DashboardOverview() {
  const { language, t } = useLanguage();
  const [videos, setVideos] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalVideos: 0,
    completedVideos: 0,
    failedVideos: 0,
    totalSeries: 0,
    credits: 0,
    views: 0
  });
  const [loading, setLoading] = useState(true);
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

  const fetchDashboardData = async (showLoading = false) => {
    if (showLoading) setLoading(true);
    try {
      // Fetch stats
      const statsRes = await fetch("/api/dashboard/stats");
      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData);
      }

      // Fetch recent videos (limit to 4)
      const videosRes = await fetch("/api/videos?limit=4&page=1");
      if (videosRes.ok) {
        const videosData = await videosRes.json();
        setVideos(videosData.videos || []);
      }
    } catch (err) {
      console.error("Error fetching dashboard overview data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData(true);

    // Poll to keep rendering progress/stats up-to-date
    const interval = setInterval(() => {
      fetchDashboardData(false);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-8 text-left font-sans">
      
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
          className="px-4 py-2.5 text-xs font-bold text-background bg-secondary hover:bg-secondary-hover rounded-xl flex items-center gap-2 shadow-lg shadow-secondary/15 active:scale-95 transition-all font-display"
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
            <h3 className="text-2xl font-black text-white font-display">{stats.credits}</h3>
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
            <h3 className="text-2xl font-black text-white font-display">{stats.totalVideos}</h3>
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
            <h3 className="text-2xl font-black text-white font-display">{getViewsDisplay(stats)}</h3>
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
            <h3 className="text-2xl font-black text-white font-display">{stats.totalSeries} {stats.totalSeries > 1 ? "Séries" : "Série"}</h3>
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

        {loading && videos.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-6 h-6 text-primary animate-spin" />
          </div>
        ) : videos.length === 0 ? (
          <div className="glass-panel p-8 rounded-2xl text-center border border-border/60">
            <p className="text-gray-500 text-xs">{language === "fr" ? "Aucune vidéo forgée pour le moment." : "No videos forged yet."}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videos.map((vid) => {
              const progress = vid.jobs?.[0]?.progress ?? vid.progress ?? 0;
              const errorMsg = vid.jobs?.[0]?.error ?? vid.error ?? null;
              return (
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
                        <span className="text-[9px] text-gray-500">{formatCreatedAt(vid.createdAt, language)}</span>
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
                        <span className="text-secondary">{progress}%</span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                  )}

                  {/* Failure Error Message */}
                  {vid.status === "FAILED" && errorMsg && (
                    <div className="flex items-start gap-2 bg-red-500/5 border border-red-500/10 rounded-xl p-3 text-[10px] text-red-300">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="leading-tight">{errorMsg}</p>
                    </div>
                  )}

                  {/* Action Buttons footer */}
                  <div className="flex justify-between items-center border-t border-border/60 pt-3 mt-1">
                    {/* Stats */}
                    <div className="flex items-center gap-4 text-[10px] text-gray-400">
                      {vid.status === "COMPLETED" && (
                        <>
                          <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5 text-primary" /> <b>{getViewsDisplay(vid)}</b></span>
                          <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-accent-pink" /> <b>{getLikesDisplay(vid)}</b></span>
                        </>
                      )}
                      <span className="flex items-center gap-1 font-bold text-primary">
                        <Flame className="w-3 h-3 text-secondary" /> {t("dash.recent.score")}: {vid.viralScore ?? "—"}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {vid.status === "COMPLETED" ? (
                        <>
                          {vid.videoUrl ? (
                            <a 
                              href={vid.videoUrl} 
                              download
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 rounded-lg text-xs flex items-center justify-center"
                              title={t("lib.card.download")}
                            >
                              <Download className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <button disabled className="p-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-600 cursor-not-allowed">
                              <Download className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <Link 
                            href={`/dashboard/videos/${vid.id}`} 
                            className="px-3 py-1.5 bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow font-display"
                          >
                            {t("dash.recent.play")}
                            <Play className="w-3 h-3 fill-current ml-0.5" />
                          </Link>
                        </>
                      ) : (
                        <Link
                          href={`/dashboard/videos/${vid.id}`}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 text-xs font-semibold rounded-lg font-display"
                        >
                          {t("lib.card.detail")}
                        </Link>
                      )}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
