"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  ArrowLeft, 
  Flame, 
  Play, 
  Pause, 
  Download, 
  RefreshCw, 
  Send, 
  MessageSquare, 
  Eye, 
  Heart, 
  Share2, 
  Sparkles,
  Info,
  Calendar,
  Layers,
  CheckCircle2,
  Clock,
  Music,
  Settings,
  AlertCircle,
  Instagram,
  Youtube
} from "lucide-react";

interface VideoDetails {
  id: string;
  title: string;
  niche: string;
  style: string;
  duration: number;
  status: string;
  videoUrl: string | null;
  viralScore: number;
  views: number;
  likes: number;
  createdAt: string;
  script: {
    hook: string;
    narration: string;
    cta: string;
  };
  subtitles: { word: string; start: number; end: number }[];
  voice: string;
  language: string;
  shares: number;
}

const DEFAULT_MOCK_VIDEO: VideoDetails = {
  id: "vid-1",
  title: "Le secret terrifiant du Sahara",
  niche: "Science Insolite",
  style: "Cinématique SDXL",
  duration: 30,
  status: "COMPLETED",
  videoUrl: "https://pub-reelforge.r2.dev/rendered-result-sahara.mp4",
  viralScore: 84,
  views: 1200000,
  likes: 84000,
  shares: 12400,
  createdAt: new Date().toISOString(),
  voice: "Antonio (Masculin)",
  language: "Français",
  script: {
    hook: "Saviez-vous que sous le sable brûlant du Sahara se cache une structure si massive qu'on peut la voir depuis l'espace ?",
    narration: "Ce n'est pas une simple formation rocheuse. Appelée l'Œil du Sahara, ou la structure de Richat, cette anomalie géologique circulaire de 50 kilomètres de diamètre intrigue les scientifiques depuis des décennies. Certains pensent que c'est le résultat d'un impact de météorite, d'autres y voient les vestiges de la mythique Atlante. Les mesures de température et les dépôts de sédiments uniques renforcent ce mystère millénaire.",
    cta: "Abonnez-vous pour ne plus jamais rater les secrets cachés de notre Terre."
  },
  subtitles: [
    { word: "Saviez-vous", start: 0.2, end: 0.8 },
    { word: "que", start: 0.8, end: 1.0 },
    { word: "sous", start: 1.0, end: 1.2 },
    { word: "le", start: 1.2, end: 1.3 },
    { word: "sable", start: 1.3, end: 1.7 },
    { word: "brûlant", start: 1.7, end: 2.1 },
    { word: "du", start: 2.1, end: 2.3 },
    { word: "Sahara", start: 2.3, end: 2.9 },
    { word: "se", start: 2.9, end: 3.1 },
    { word: "cache", start: 3.1, end: 3.5 },
    { word: "une", start: 3.5, end: 3.7 },
    { word: "structure", start: 3.7, end: 4.3 },
    { word: "si", start: 4.3, end: 4.5 },
    { word: "massive", start: 4.5, end: 5.1 },
    { word: "qu'on", start: 5.1, end: 5.3 },
    { word: "peut", start: 5.3, end: 5.5 },
    { word: "la", start: 5.5, end: 5.6 },
    { word: "voir", start: 5.6, end: 5.9 },
    { word: "depuis", start: 5.9, end: 6.3 },
    { word: "l'espace", start: 6.3, end: 6.9 }
  ]
};

const parseScriptString = (scriptStr: string) => {
  if (!scriptStr) return { hook: "", narration: "", cta: "" };
  
  const hookMatch = scriptStr.match(/HOOK:\s*(.*?)(?=NARRATION:|CTA:|$)/i);
  const narrationMatch = scriptStr.match(/NARRATION:\s*(.*?)(?=HOOK:|CTA:|$)/i);
  const ctaMatch = scriptStr.match(/CTA:\s*(.*?)(?=HOOK:|NARRATION:|$)/i);

  if (hookMatch || narrationMatch || ctaMatch) {
    return {
      hook: hookMatch?.[1]?.trim() || "",
      narration: narrationMatch?.[1]?.trim() || scriptStr,
      cta: ctaMatch?.[1]?.trim() || ""
    };
  }

  const sentences = scriptStr.split(/[.!?]+/).map(s => s.trim()).filter(Boolean);
  if (sentences.length >= 3) {
    return {
      hook: sentences[0] + ".",
      narration: sentences.slice(1, sentences.length - 1).join(". ") + ".",
      cta: sentences[sentences.length - 1] + "."
    };
  }
  
  return {
    hook: "",
    narration: scriptStr,
    cta: ""
  };
};

export default function VideoDetailPage() {
  const { language: currentLang, t } = useLanguage();
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [video, setVideo] = useState<VideoDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"script" | "subtitles" | "settings">("script");
  const [isPlaying, setIsPlaying] = useState(false);
  const [publishing, setPublishing] = useState<{ [key: string]: boolean }>({});
  const [published, setPublished] = useState<{ [key: string]: boolean }>({
    tiktok: true,
    instagram: false,
    youtube: false
  });

  useEffect(() => {
    let active = true;
    const loadVideoDetails = async (showLoading = false) => {
      if (showLoading) setLoading(true);
      try {
        const res = await fetch(`/api/videos/${id}/status`);
        if (res.ok && active) {
          const data = await res.json();
          if (data && !data.error) {
            setVideo({
              id: data.videoId,
              title: data.title,
              niche: data.niche || "Niche",
              style: data.style || "Style",
              duration: data.duration || 30,
              status: data.status,
              videoUrl: data.videoUrl,
              viralScore: data.viralScore || 75,
              views: data.views || 0,
              likes: data.likes || 0,
              shares: data.shares || 0,
              createdAt: data.updatedAt || new Date().toISOString(),
              script: parseScriptString(data.script || data.title),
              subtitles: data.subtitles || [],
              voice: data.voice || "Antonio",
              language: data.language || "French"
            });
            return;
          }
        }
      } catch (e) {
        console.error("Error loading video details:", e);
      } finally {
        if (active) setLoading(false);
      }

      // Fallback
      if (active) {
        const matchingMock = {
          ...DEFAULT_MOCK_VIDEO,
          id: id || "vid-1",
          title: id === "vid-2" ? "L'Arche Perdue de Salomon" :
                 id === "vid-3" ? "L'Ombre d'Anubis - Épisode 1" :
                 id === "vid-4" ? "L'Investissement Passif en 2026" : DEFAULT_MOCK_VIDEO.title,
          niche: id === "vid-2" ? "Histoires Bibliques" :
                 id === "vid-3" ? "Mythologie" :
                 id === "vid-4" ? "Finance & Richesse" : DEFAULT_MOCK_VIDEO.niche,
          status: id === "vid-2" ? "RENDERING" :
                  id === "vid-4" ? "FAILED" : "COMPLETED",
          viralScore: id === "vid-2" ? 78 : id === "vid-3" ? 92 : id === "vid-4" ? 45 : 84,
          views: id === "vid-3" ? 340000 : 0,
          likes: id === "vid-3" ? 21000 : 0,
        };
        setVideo(matchingMock);
        setLoading(false);
      }
    };

    loadVideoDetails(true);

    const interval = setInterval(() => {
      loadVideoDetails(false);
    }, 4000);

    return () => {
      active = false;
      clearInterval(interval);
    };
  }, [id]);

  const handlePublish = async (platform: string) => {
    setPublishing(prev => ({ ...prev, [platform]: true }));
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 2000));
    setPublishing(prev => ({ ...prev, [platform]: false }));
    setPublished(prev => ({ ...prev, [platform]: true }));
  };

  const handleDownload = () => {
    alert(currentLang === "fr" ? "Le téléchargement du fichier MP4 a débuté !" : "MP4 file download has started!");
  };

  const handleRegenerate = () => {
    alert(currentLang === "fr" ? "Vidéo renvoyée dans la file d'attente de génération !" : "Video sent back to generation queue!");
    router.push("/dashboard");
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-40 gap-4">
        <RefreshCw className="w-8 h-8 text-primary animate-spin" />
        <p className="text-gray-400 text-sm">
          {currentLang === "fr" ? "Chargement des détails de la vidéo..." : "Loading video details..."}
        </p>
      </div>
    );
  }

  if (!video) {
    return (
      <div className="p-8 text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
        <h2 className="text-xl font-bold text-white">
          {currentLang === "fr" ? "Vidéo introuvable" : "Video not found"}
        </h2>
        <Link href="/dashboard/library" className="text-primary hover:underline text-sm block">
          {currentLang === "fr" ? "Retourner à la bibliothèque" : "Return to library"}
        </Link>
      </div>
    );
  }

  // Radial Gauge calculations
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (video.viralScore / 100) * circumference;

  return (
    <div className="flex-grow flex flex-col gap-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <Link href="/dashboard" className="hover:text-white transition-colors">{t("vdetail.breadcrumb.dash")}</Link>
        <span>/</span>
        <Link href="/dashboard/library" className="hover:text-white transition-colors">{t("vdetail.breadcrumb.lib")}</Link>
        <span>/</span>
        <span className="text-white font-medium truncate max-w-xs">{video.title}</span>
      </div>

      {/* Back link */}
      <div className="flex items-center gap-3">
        <Link 
          href="/dashboard/library"
          className="p-2 bg-card/40 border border-border rounded-xl text-gray-400 hover:text-white transition-all hover:border-primary/30"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-display font-bold text-white tracking-tight">{video.title}</h1>
          <p className="text-xs text-gray-400 mt-0.5">
            {currentLang === "fr" ? "Créée le " : "Created on "}{new Date(video.createdAt).toLocaleDateString(currentLang === "fr" ? "fr-FR" : "en-US", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (Player & Script details) - 8/12 */}
        <div className="lg:col-span-8 space-y-6">
          {/* Mock Video Player */}
          <div className="glass-panel border border-border bg-card/10 rounded-2xl p-6 flex flex-col items-center">
            <div className="relative aspect-[9/16] w-full max-w-[280px] rounded-2xl bg-gradient-to-br from-indigo-950/80 via-purple-950/90 to-black overflow-hidden border border-border/80 shadow-2xl flex flex-col justify-between p-4 group">
              {/* Dynamic Gradient background simulation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/20 via-primary/10 to-red-950/10 mix-blend-overlay"></div>
              
              {/* Top Details */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] bg-black/60 px-2 py-0.5 rounded text-white border border-white/10">
                  {video.niche}
                </span>
                <span className="text-[10px] bg-black/60 px-2 py-0.5 rounded text-secondary border border-secondary/20">
                  {video.style}
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-14 h-14 rounded-full bg-primary/95 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl shadow-primary/30"
                >
                  {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current translate-x-0.5" />}
                </button>
              </div>

              {/* Simulated subtitiles overlay */}
              {isPlaying && (
                <div className="absolute bottom-16 left-4 right-4 z-20 text-center">
                  <span className="bg-black/80 text-yellow-300 font-display font-black text-sm px-2.5 py-1 rounded shadow-lg uppercase border border-yellow-500/20 tracking-wider">
                    {video.script.hook.split(" ").slice(0, 4).join(" ")}...
                  </span>
                </div>
              )}

              {/* Bottom Controls bar */}
              <div className="relative z-10 w-full bg-black/50 backdrop-blur-md rounded-xl p-3 flex items-center justify-between border border-white/5">
                <span className="text-[10px] font-mono text-gray-300">0:00 / 0:{video.duration}</span>
                <div className="flex-grow mx-3 bg-border rounded-full h-1 relative overflow-hidden">
                  <div className={`bg-primary h-full rounded-full ${isPlaying ? "w-1/3" : "w-0"}`}></div>
                </div>
                <span className="text-[9px] uppercase tracking-wider font-bold text-gray-400">HD</span>
              </div>
            </div>

            {video.status !== "COMPLETED" && (
              <div className="mt-4 flex items-center gap-2 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 text-xs">
                <Info className="w-4 h-4 flex-shrink-0" />
                <span>{t("vdetail.rendering.warning")}</span>
              </div>
            )}
          </div>

          {/* Details Tabs */}
          <div className="glass-panel border border-border bg-card/25 rounded-2xl overflow-hidden">
            <div className="flex border-b border-border/80 bg-black/20">
              <button
                onClick={() => setActiveTab("script")}
                className={`flex-1 py-3.5 text-sm font-semibold transition-all ${
                  activeTab === "script"
                    ? "text-white border-b-2 border-primary bg-primary/5"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {t("vdetail.tab.script")}
              </button>
              <button
                onClick={() => setActiveTab("subtitles")}
                className={`flex-1 py-3.5 text-sm font-semibold transition-all ${
                  activeTab === "subtitles"
                    ? "text-white border-b-2 border-primary bg-primary/5"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {t("vdetail.tab.subtitles")}
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`flex-1 py-3.5 text-sm font-semibold transition-all ${
                  activeTab === "settings"
                    ? "text-white border-b-2 border-primary bg-primary/5"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {t("vdetail.tab.config")}
              </button>
            </div>

            <div className="p-6">
              {/* Tab 1: Script */}
              {activeTab === "script" && (
                <div className="space-y-4 text-sm">
                  <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-purple">{t("vdetail.label.hook")}</span>
                    <p className="text-white leading-relaxed italic">"{video.script.hook}"</p>
                  </div>

                  <div className="p-4 rounded-xl border border-border bg-card/20 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">{t("vdetail.label.narration")}</span>
                    <p className="text-gray-300 leading-relaxed font-medium">"{video.script.narration}"</p>
                  </div>

                  <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">{t("vdetail.label.cta")}</span>
                    <p className="text-gray-300 leading-relaxed italic">"{video.script.cta}"</p>
                  </div>
                </div>
              )}

              {/* Tab 2: Subtitles */}
              {activeTab === "subtitles" && (
                <div className="space-y-2 max-h-60 overflow-y-auto pr-2 scrollbar-thin">
                  <div className="grid grid-cols-3 text-xs font-bold text-gray-500 pb-2 border-b border-border/40">
                    <span>{t("vdetail.sub.word")}</span>
                    <span>{t("vdetail.sub.start")}</span>
                    <span>{t("vdetail.sub.end")}</span>
                  </div>
                  {video.subtitles.map((sub, i) => (
                    <div key={i} className="grid grid-cols-3 text-xs py-2 border-b border-border/20 text-gray-300 hover:bg-card/40 rounded px-1 transition-colors">
                      <span className="font-bold text-white uppercase">{sub.word}</span>
                      <span>{sub.start.toFixed(2)}s</span>
                      <span>{sub.end.toFixed(2)}s</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 3: Settings */}
              {activeTab === "settings" && (
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border/20">
                      <span className="text-gray-400">{t("vdetail.label.niche")}</span>
                      <span className="text-white font-semibold">{video.niche}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/20">
                      <span className="text-gray-400">{t("vdetail.label.style")}</span>
                      <span className="text-white font-semibold">{video.style}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/20">
                      <span className="text-gray-400">{t("vdetail.label.voice")}</span>
                      <span className="text-white font-semibold">{video.voice}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border/20">
                      <span className="text-gray-400">{t("vdetail.label.lang")}</span>
                      <span className="text-white font-semibold">{video.language}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/20">
                      <span className="text-gray-400">{t("vdetail.label.duration")}</span>
                      <span className="text-white font-semibold">{video.duration} {t("vdetail.label.duration.val")}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/20">
                      <span className="text-gray-400">{t("vdetail.label.status")}</span>
                      <span className={`font-semibold ${video.status === "COMPLETED" ? "text-emerald-400" : "text-amber-400"}`}>{video.status}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column (Metrics & Actions) - 4/12 */}
        <div className="lg:col-span-4 space-y-6">
          {/* Virality Score */}
          <div className="glass-panel border border-border bg-card/20 rounded-2xl p-6 text-center space-y-4">
            <h3 className="text-sm font-semibold text-gray-300">{t("vdetail.score.title")}</h3>
            
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="56"
                  cy="56"
                  r={radius}
                  className="stroke-zinc-800"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="56"
                  cy="56"
                  r={radius}
                  className="stroke-primary"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-display font-black text-white">{video.viralScore}</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase">
                  {currentLang === "fr" ? "SUPER" : "GREAT"}
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 max-w-xs mx-auto">
              {t("vdetail.score.desc")}
            </p>
          </div>

          {/* Social Stats */}
          <div className="glass-panel border border-border bg-card/15 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-semibold text-white">{t("vdetail.stats.title")}</h3>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-3 bg-black/40 border border-border rounded-xl">
                <Eye className="w-4 h-4 text-cyan-400 mx-auto mb-1.5" />
                <span className="text-xs font-bold text-white block">{(video.views / 1000).toFixed(0)}k</span>
                <span className="text-[9px] text-gray-500">{t("vdetail.stats.views")}</span>
              </div>
              <div className="p-3 bg-black/40 border border-border rounded-xl">
                <Heart className="w-4 h-4 text-rose-500 mx-auto mb-1.5" />
                <span className="text-xs font-bold text-white block">{(video.likes / 1000).toFixed(1)}k</span>
                <span className="text-[9px] text-gray-500">{t("vdetail.stats.likes")}</span>
              </div>
              <div className="p-3 bg-black/40 border border-border rounded-xl">
                <Share2 className="w-4 h-4 text-emerald-400 mx-auto mb-1.5" />
                <span className="text-xs font-bold text-white block">{(video.shares / 1000).toFixed(1)}k</span>
                <span className="text-[9px] text-gray-500">{t("vdetail.stats.shares")}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="glass-panel border border-border bg-card/10 rounded-2xl p-6 space-y-3">
            <h3 className="text-sm font-semibold text-white">{t("vdetail.actions.title")}</h3>

            <button
              onClick={handleDownload}
              disabled={video.status !== "COMPLETED"}
              className="w-full py-2.5 bg-primary hover:bg-primary-hover disabled:bg-zinc-800 disabled:text-zinc-500 disabled:border-zinc-700/50 disabled:shadow-none text-white font-bold rounded-xl text-xs transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> {t("vdetail.actions.download")}
            </button>

            <button
              onClick={handleRegenerate}
              className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-gray-200 border border-border font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" /> {t("vdetail.actions.regenerate")}
            </button>

            <div className="pt-4 border-t border-border/50 space-y-2">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">{t("vdetail.actions.channels")}</span>

              {/* TikTok */}
              <div className="flex items-center justify-between p-2.5 bg-black/30 border border-border rounded-xl">
                <span className="text-xs font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-black border border-white"></span>
                  TikTok
                </span>
                
                {published.tiktok ? (
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {currentLang === "fr" ? "Publié" : "Published"}
                  </span>
                ) : (
                  <button
                    onClick={() => handlePublish("tiktok")}
                    disabled={publishing.tiktok || video.status !== "COMPLETED"}
                    className="px-2.5 py-1 bg-white hover:bg-gray-100 disabled:bg-zinc-800 disabled:text-zinc-500 text-black font-bold rounded text-[10px] transition-all"
                  >
                    {publishing.tiktok ? t("btn.sending") : (currentLang === "fr" ? "Publier" : "Publish")}
                  </button>
                )}
              </div>

              {/* Instagram */}
              <div className="flex items-center justify-between p-2.5 bg-black/30 border border-border rounded-xl">
                <span className="text-xs font-semibold text-white flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-pink-500" />
                  Instagram
                </span>
                
                {published.instagram ? (
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {currentLang === "fr" ? "Publié" : "Published"}
                  </span>
                ) : (
                  <button
                    onClick={() => handlePublish("instagram")}
                    disabled={publishing.instagram || video.status !== "COMPLETED"}
                    className="px-2.5 py-1 bg-white hover:bg-gray-100 disabled:bg-zinc-800 disabled:text-zinc-500 text-black font-bold rounded text-[10px] transition-all"
                  >
                    {publishing.instagram ? t("btn.sending") : (currentLang === "fr" ? "Publier" : "Publish")}
                  </button>
                )}
              </div>

              {/* YouTube Shorts */}
              <div className="flex items-center justify-between p-2.5 bg-black/30 border border-border rounded-xl">
                <span className="text-xs font-semibold text-white flex items-center gap-2">
                  <Youtube className="w-4 h-4 text-red-500" />
                  YouTube Shorts
                </span>
                
                {published.youtube ? (
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {currentLang === "fr" ? "Publié" : "Published"}
                  </span>
                ) : (
                  <button
                    onClick={() => handlePublish("youtube")}
                    disabled={publishing.youtube || video.status !== "COMPLETED"}
                    className="px-2.5 py-1 bg-white hover:bg-gray-100 disabled:bg-zinc-800 disabled:text-zinc-500 text-black font-bold rounded text-[10px] transition-all"
                  >
                    {publishing.youtube ? t("btn.sending") : (currentLang === "fr" ? "Publier" : "Publish")}
                  </button>
                )}
              </div>

            </div>
          </div>

          {/* AI Recommendations */}
          <div className="glass-panel border border-border bg-card/25 rounded-2xl p-6 space-y-3">
            <h3 className="text-xs font-bold text-accent-purple uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-accent-purple" /> Recommandations IA
            </h3>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Raccourcissez l'introduction de 0.8 seconde pour maximiser la rétention initiale.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Ajoutez un effet de zoom arrière sur le mot "Richat" pour souligner l'échelle de la formation.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>La voix "Antonio" performe mieux dans la catégorie Mystères, conservez-la pour les prochains épisodes.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
