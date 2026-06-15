"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Search, Filter, Flame, Play, Download, ExternalLink, Plus,
  ChevronLeft, ChevronRight, SlidersHorizontal, Library, Trash2, Eye, Heart
} from "lucide-react";

const MOCK_VIDEOS = [
  { id: "vid-1", title: "Le secret terrifiant du Sahara", niche: "Science Insolite", style: "Cinématique SDXL", duration: 30, status: "COMPLETED", viralScore: 84, views: "1.2M", likes: "84K", createdAt: "Il y a 2h", color: "from-orange-950 to-slate-950" },
  { id: "vid-2", title: "L'Arche Perdue de Salomon", niche: "Histoires Bibliques", style: "Illustration", duration: 45, status: "RENDERING", viralScore: 78, views: "—", likes: "—", createdAt: "Il y a 5min", color: "from-blue-950 to-slate-950", progress: 75 },
  { id: "vid-3", title: "L'Ombre d'Anubis — Épisode 1", niche: "Mythologie", style: "Dark Fantasy", duration: 30, status: "COMPLETED", viralScore: 92, views: "340K", likes: "21K", createdAt: "Il y a 1 jour", color: "from-amber-950 to-slate-950" },
  { id: "vid-4", title: "L'Investissement Passif en 2026", niche: "Finance & Richesse", style: "Realistic", duration: 15, status: "FAILED", viralScore: 45, views: "—", likes: "—", createdAt: "Il y a 2 jours", color: "from-green-950 to-slate-950" },
  { id: "vid-5", title: "5 Lois Secrètes de l'Argent", niche: "Finance & Richesse", style: "Cinématique SDXL", duration: 30, status: "COMPLETED", viralScore: 88, views: "3.4M", likes: "210K", createdAt: "Il y a 3 jours", color: "from-emerald-950 to-slate-950" },
  { id: "vid-6", title: "Les Créatures du Marais Haïtien", niche: "Culture Haïtienne", style: "Dark Fantasy", duration: 45, status: "COMPLETED", viralScore: 79, views: "156K", likes: "12K", createdAt: "Il y a 4 jours", color: "from-violet-950 to-slate-950" },
  { id: "vid-7", title: "L'Empire de Gengis Khan", niche: "Histoire", style: "Cinématique SDXL", duration: 60, status: "COMPLETED", viralScore: 86, views: "890K", likes: "62K", createdAt: "Il y a 5 jours", color: "from-red-950 to-slate-950" },
  { id: "vid-8", title: "Esprit Inarrêtable — Goggins", niche: "Motivation Extrême", style: "Realistic", duration: 15, status: "COMPLETED", viralScore: 91, views: "4.1M", likes: "290K", createdAt: "Il y a 6 jours", color: "from-yellow-950 to-slate-950" },
  { id: "vid-9", title: "La Chute de Babylone", niche: "Histoire", style: "Dark Fantasy", duration: 45, status: "COMPLETED", viralScore: 77, views: "420K", likes: "28K", createdAt: "Il y a 7 jours", color: "from-stone-950 to-slate-950" },
  { id: "vid-10", title: "Quantum: Le Temps n'existe pas", niche: "Science Insolite", style: "Cinématique SDXL", duration: 30, status: "RENDERING", viralScore: 82, views: "—", likes: "—", createdAt: "Il y a 8 jours", color: "from-cyan-950 to-slate-950", progress: 40 },
  { id: "vid-11", title: "Thor vs Zeus — Le Choc des Dieux", niche: "Mythologie", style: "Anime Japonais", duration: 30, status: "COMPLETED", viralScore: 95, views: "2.7M", likes: "185K", createdAt: "Il y a 9 jours", color: "from-indigo-950 to-slate-950" },
  { id: "vid-12", title: "La Psychologie du Succès", niche: "Développement Personnel", style: "Realistic", duration: 60, status: "FAILED", viralScore: 55, views: "—", likes: "—", createdAt: "Il y a 10 jours", color: "from-pink-950 to-slate-950" },
];

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

const getTimeAgo = (t: string, lang: string) => {
  if (lang === "fr") return t;
  return t
    .replace("Il y a ", "")
    .replace(" jour", " day")
    .replace(" min", "min")
    .replace("h", "h")
    .trim() + " ago";
};

export default function VideoLibrary() {
  const { language, t } = useLanguage();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("Tous");
  const [niche, setNiche] = useState("Toutes");
  const [sort, setSort] = useState("Plus récentes");
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;

  const filtered = MOCK_VIDEOS.filter((v) => {
    const matchSearch = v.title.toLowerCase().includes(search.toLowerCase()) || v.niche.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === "Tous" || v.status === status;
    const matchNiche = niche === "Toutes" || v.niche === niche;
    return matchSearch && matchStatus && matchNiche;
  }).sort((a, b) => {
    if (sort === "Score viral ↓") return b.viralScore - a.viralScore;
    if (sort === "Vues ↓") return (b.views === "—" ? -1 : 1) - (a.views === "—" ? -1 : 1);
    return 0; // Plus récentes = default order
  });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const statusBadge = (s: string) => {
    if (s === "COMPLETED") return <span className="text-[8px] px-2 py-0.5 bg-green-500/15 border border-green-500/30 text-green-400 font-bold rounded-full uppercase">{t("dash.recent.completed")}</span>;
    if (s === "RENDERING") return <span className="text-[8px] px-2 py-0.5 bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 font-bold rounded-full uppercase animate-pulse">{t("dash.recent.rendering")}</span>;
    return <span className="text-[8px] px-2 py-0.5 bg-red-500/15 border border-red-500/30 text-red-400 font-bold rounded-full uppercase">{t("dash.recent.failed")}</span>;
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white font-display flex items-center gap-2">
            <Library className="w-6 h-6 text-primary" />
            {t("lib.title")}
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">{MOCK_VIDEOS.length} {t("lib.subtitle")}</p>
        </div>
        <Link
          href="/dashboard/videos"
          className="flex items-center gap-2 px-4 py-2.5 bg-neon-glow hover:opacity-90 text-white font-bold text-xs rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-all w-fit"
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

      {/* Grid */}
      {paginated.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center gap-3">
          <Library className="w-10 h-10 text-gray-600" />
          <p className="text-gray-500 text-sm font-medium">{t("lib.empty")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginated.map((v) => (
            <div key={v.id} className="glass-panel rounded-2xl border border-border overflow-hidden group hover:border-primary/30 transition-all flex flex-col">
              {/* Thumbnail */}
              <div className={`relative h-40 bg-gradient-to-br ${v.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <Play className="w-5 h-5 text-white fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">{statusBadge(v.status)}</div>
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-0.5">
                  <Flame className="w-3 h-3 text-orange-400" />
                  <span className="text-[9px] font-black text-white">{v.viralScore}</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded px-1.5 py-0.5">
                  <span className="text-[9px] font-bold text-white">{v.duration}s</span>
                </div>
                {v.status === "RENDERING" && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                    <div className="h-full bg-yellow-400 transition-all" style={{ width: `${(v as any).progress}%` }} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-3 flex-1">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-secondary uppercase tracking-wider">{getNicheName(v.niche, language)}</span>
                  <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 font-display">{v.title}</h3>
                  <div className="flex items-center gap-3 text-[9px] text-gray-500 mt-0.5">
                    <span>{getStyleName(v.style, language)}</span>
                    <span>•</span>
                    <span>{getTimeAgo(v.createdAt, language)}</span>
                  </div>
                </div>

                {v.status === "COMPLETED" && (
                  <div className="flex items-center gap-4 text-[10px] text-gray-400">
                    <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5 text-primary" /> <b className="text-white">{v.views}</b></span>
                    <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-accent-pink" /> <b className="text-white">{v.likes}</b></span>
                  </div>
                )}

                <div className="flex items-center gap-2 mt-auto pt-2 border-t border-border/60">
                  <Link
                    href={`/dashboard/videos/${v.id}`}
                    className="flex-1 py-2 text-center text-[10px] font-bold text-white bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 rounded-lg transition-all"
                  >
                    {t("lib.card.detail")}
                  </Link>
                  <button className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all" title={t("lib.card.download")}>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-2 bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/20 rounded-lg text-gray-400 hover:text-red-400 transition-all" title={t("lib.card.delete")}>
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-2">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold border border-border text-gray-400 hover:text-white hover:border-white/20 rounded-xl disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ChevronLeft className="w-4 h-4" /> {language === "fr" ? "Précédent" : "Previous"}
          </button>
          <span className="text-xs text-gray-500 font-medium">
            {language === "fr" ? `Page ${page} sur ${totalPages}` : `Page ${page} of ${totalPages}`}
          </span>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold border border-border text-gray-400 hover:text-white hover:border-white/20 rounded-xl disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            {language === "fr" ? "Suivant" : "Next"} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
