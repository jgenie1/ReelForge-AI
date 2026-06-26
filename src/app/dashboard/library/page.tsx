"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Search, Flame, Play, Download, Plus,
  ChevronLeft, ChevronRight, Library, Trash2, Eye, Heart, Loader2
} from "lucide-react";

const NICHES = ["Toutes", "Science Insolite", "Histoires Bibliques", "Mythologie", "Finance & Richesse", "Motivation Extrême", "Histoire", "Culture Haïtienne", "Développement Personnel"];
const STATUSES = ["Tous", "COMPLETED", "RENDERING", "FAILED"];
const SORTS = ["Plus récentes", "Score viral ↓", "Vues ↓"];

const getNicheName = (n: string, lang: string) => {
  if (n === "Toutes") return lang === "fr" ? "Niche : Toutes" : "Niche: All";
  if (lang === "fr") return n;
  switch (n) {
    case "Science Insolite": return "Unusual Science";
    case "Histoires Bibliques": return "Biblical Stories";
    case "Mythologie": return "Mythology";
    case "Finance & Richesse": return "Finance & Wealth";
    case "Motivation Extrême": return "Extreme Motivation";
    case "Histoire": return "History";
    case "Culture Haïtienne": return "Haitian Culture";
    case "Développement Personnel": return "Personal Development";
    default: return n;
  }
};

const getStyleName = (s: string, lang: string) => {
  if (lang === "fr") return s;
  switch (s) {
    case "Cinématique SDXL": return "Cinematic SDXL";
    case "Anime Japonais": return "Japanese Anime";
    case "Photoréaliste": return "Photorealistic";
    case "Illustration": return "Illustration";
    case "Realistic": return "Realistic";
    case "Dark Fantasy": return "Dark Fantasy";
    default: return s;
  }
};

const formatCreatedAt = (dateStr: any, lang: string) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    // If it's already a relative string (from mocks)
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

const getThumbnailColor = (niche: string) => {
  const n = niche.toLowerCase();
  if (n.includes("science")) return "from-cyan-950 to-slate-950";
  if (n.includes("bibli")) return "from-blue-950 to-slate-950";
  if (n.includes("myth")) return "from-amber-950 to-slate-950";
  if (n.includes("finance") || n.includes("rich")) return "from-emerald-950 to-slate-950";
  if (n.includes("cult")) return "from-violet-950 to-slate-950";
  if (n.includes("hist")) return "from-red-950 to-slate-950";
  if (n.includes("motiv")) return "from-yellow-950 to-slate-950";
  return "from-slate-900 to-slate-950";
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

export default function VideoLibrary() {
  const { language, t } = useLanguage();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("Tous");
  const [niche, setNiche] = useState("Toutes");
  const [sort, setSort] = useState("Plus récentes");
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;

  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch videos from API
  const fetchVideos = async (showLoading = false) => {
    if (showLoading) setLoading(true);
    try {
      const queryStatus = status !== "Tous" ? status : "";
      const queryNiche = niche !== "Toutes" ? niche : "";
      const res = await fetch(`/api/videos?status=${queryStatus}&niche=${queryNiche}&page=${page}&limit=${PER_PAGE}`);
      if (res.ok) {
        const data = await res.json();
        setVideos(data.videos || []);
        setTotal(data.total || 0);
        setTotalPages(data.totalPages || 1);
      }
    } catch (err) {
      console.error("Error fetching library videos:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos(true);
    
    // Poll for rendering status updates
    const interval = setInterval(() => {
      fetchVideos(false);
    }, 4000);

    return () => clearInterval(interval);
  }, [status, niche, page]);

  // Apply local sorting and client search filter on top
  const filtered = videos.filter((v) => {
    const matchSearch = v.title.toLowerCase().includes(search.toLowerCase()) || v.niche.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  }).sort((a, b) => {
    if (sort === "Score viral ↓") return (b.viralScore || 0) - (a.viralScore || 0);
    if (sort === "Vues ↓") {
      const vA = typeof a.views === "string" ? parseFloat(a.views.replace(/[^\d.]/g, '')) * (a.views.includes('M') ? 1000000 : a.views.includes('K') ? 1000 : 1) : (a.views || 0);
      const vB = typeof b.views === "string" ? parseFloat(b.views.replace(/[^\d.]/g, '')) * (b.views.includes('M') ? 1000000 : b.views.includes('K') ? 1000 : 1) : (b.views || 0);
      return vB - vA;
    }
    return 0; // default sorted by API (Plus récentes)
  });

  const handleDelete = async (id: string) => {
    if (!confirm(language === "fr" ? "Êtes-vous sûr de vouloir supprimer cette vidéo ?" : "Are you sure you want to delete this video?")) {
      return;
    }
    try {
      const res = await fetch(`/api/videos/${id}/status`, { method: "DELETE" });
      if (res.ok) {
        fetchVideos(false);
      }
    } catch (err) {
      console.error("Error deleting video:", err);
    }
  };

  const statusBadge = (s: string) => {
    if (s === "COMPLETED") return <span className="text-[8px] px-2 py-0.5 bg-green-500/15 border border-green-500/30 text-green-400 font-bold rounded-full uppercase">{t("dash.recent.completed")}</span>;
    if (s === "RENDERING") return <span className="text-[8px] px-2 py-0.5 bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 font-bold rounded-full uppercase animate-pulse">{t("dash.recent.rendering")}</span>;
    return <span className="text-[8px] px-2 py-0.5 bg-red-500/15 border border-red-500/30 text-red-400 font-bold rounded-full uppercase">{t("dash.recent.failed")}</span>;
  };

  return (
    <div className="flex flex-col gap-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white font-display flex items-center gap-2">
            <Library className="w-6 h-6 text-primary" />
            {t("lib.title")}
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">{total} {t("lib.subtitle")}</p>
        </div>
        <Link
          href="/dashboard/videos"
          className="flex items-center gap-2 px-4 py-2.5 bg-neon-glow hover:opacity-90 text-white font-bold text-xs rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-all w-fit font-display"
        >
          <Plus className="w-4 h-4" />
          {t("lib.btn.new")}
        </Link>
      </div>

      {/* Filters row */}
      <div className="flex flex-col sm:flex-row gap-3 glass-panel p-4 rounded-2xl border border-border">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={t("lib.search.placeholder")}
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full bg-background border border-border focus:border-primary rounded-xl pl-9 pr-4 py-2.5 text-xs text-white outline-none"
          />
        </div>
        <select value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }} className="bg-background border border-border focus:border-primary rounded-xl px-3 py-2.5 text-xs text-white outline-none">
          {STATUSES.map(s => <option key={s} value={s}>{s === "Tous" ? t("lib.filter.status") : s === "COMPLETED" ? t("dash.recent.completed") : s === "RENDERING" ? t("dash.recent.rendering") : t("dash.recent.failed")}</option>)}
        </select>
        <select value={niche} onChange={(e) => { setNiche(e.target.value); setPage(1); }} className="bg-background border border-border focus:border-primary rounded-xl px-3 py-2.5 text-xs text-white outline-none">
          {NICHES.map(n => <option key={n} value={n}>{getNicheName(n, language)}</option>)}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-background border border-border focus:border-primary rounded-xl px-3 py-2.5 text-xs text-white outline-none">
          {SORTS.map(s => <option key={s} value={s}>{s === "Plus récentes" ? (language === "fr" ? "Plus récentes" : "Most recent") : s === "Score viral ↓" ? (language === "fr" ? "Score viral ↓" : "Viral score ↓") : (language === "fr" ? "Vues ↓" : "Views ↓")}</option>)}
        </select>
      </div>

      {/* Loading state */}
      {loading && filtered.length === 0 ? (
        <div className="flex justify-center items-center py-24">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center gap-3">
          <Library className="w-10 h-10 text-gray-600" />
          <p className="text-gray-500 text-sm font-medium">{t("lib.empty")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((v) => {
            const thumbnailGrad = getThumbnailColor(v.niche);
            const progress = v.jobs?.[0]?.progress ?? v.progress ?? 0;
            return (
              <div key={v.id} className="glass-panel rounded-2xl border border-border overflow-hidden group hover:border-primary/30 transition-all flex flex-col">
                {/* Thumbnail */}
                <div className={`relative h-40 bg-gradient-to-br ${thumbnailGrad} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <Link href={`/dashboard/videos/${v.id}`}>
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center cursor-pointer hover:scale-105 transition-all">
                        <Play className="w-5 h-5 text-white fill-current ml-0.5" />
                      </div>
                    </Link>
                  </div>
                  <div className="absolute top-3 left-3">{statusBadge(v.status)}</div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-0.5">
                    <Flame className="w-3 h-3 text-orange-400" />
                    <span className="text-[9px] font-black text-white">{v.viralScore ?? "—"}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded px-1.5 py-0.5">
                    <span className="text-[9px] font-bold text-white">{v.duration}s</span>
                  </div>
                  {v.status === "RENDERING" && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                      <div className="h-full bg-yellow-400 transition-all" style={{ width: `${progress}%` }} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-3 flex-1 text-left">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-bold text-secondary uppercase tracking-wider">{getNicheName(v.niche, language)}</span>
                    <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 font-display">{v.title}</h3>
                    <div className="flex items-center gap-3 text-[9px] text-gray-500 mt-0.5">
                      <span>{getStyleName(v.style, language)}</span>
                      <span>•</span>
                      <span>{formatCreatedAt(v.createdAt, language)}</span>
                    </div>
                  </div>

                  {v.status === "COMPLETED" && (
                    <div className="flex items-center gap-4 text-[10px] text-gray-400">
                      <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5 text-primary" /> <b className="text-white">{getViewsDisplay(v)}</b></span>
                      <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-accent-pink" /> <b className="text-white">{getLikesDisplay(v)}</b></span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 mt-auto pt-2 border-t border-border/60">
                    <Link
                      href={`/dashboard/videos/${v.id}`}
                      className="flex-1 py-2 text-center text-[10px] font-bold text-white bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 rounded-lg transition-all font-display"
                    >
                      {t("lib.card.detail")}
                    </Link>
                    {v.videoUrl ? (
                      <a
                        href={v.videoUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all flex items-center justify-center"
                        title={t("lib.card.download")}
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button disabled className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-600 cursor-not-allowed flex items-center justify-center">
                        <Download className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(v.id)}
                      className="p-2 bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/20 rounded-lg text-gray-400 hover:text-red-400 transition-all flex items-center justify-center"
                      title={t("lib.card.delete")}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-2">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold border border-border text-gray-400 hover:text-white hover:border-white/20 rounded-xl disabled:opacity-30 disabled:pointer-events-none transition-all font-display"
          >
            <ChevronLeft className="w-4 h-4" /> {language === "fr" ? "Précédent" : "Previous"}
          </button>
          <span className="text-xs text-gray-500 font-medium">
            {language === "fr" ? `Page ${page} sur ${totalPages}` : `Page ${page} of ${totalPages}`}
          </span>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold border border-border text-gray-400 hover:text-white hover:border-white/20 rounded-xl disabled:opacity-30 disabled:pointer-events-none transition-all font-display"
          >
            {language === "fr" ? "Suivant" : "Next"} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
