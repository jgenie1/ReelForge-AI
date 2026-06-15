"use client";

import React, { useState, useEffect } from "react";
import SeriesBuilder from "@/components/SeriesBuilder";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Layers, 
  Plus, 
  Play, 
  Pause, 
  Trash2, 
  Clock, 
  CheckCircle, 
  RefreshCw, 
  Youtube, 
  Instagram, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  AlertCircle
} from "lucide-react";

interface Series {
  id: string;
  name: string;
  niche: string;
  videoCount: number;
  intervalHours: number;
  status: "ACTIVE" | "PAUSED" | "COMPLETED";
  videosGenerated: number;
  nextPublishAt: string | null;
  platforms: string[];
  createdAt: string;
}

export default function SeriesPage() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"create" | "list">("list");
  const [seriesList, setSeriesList] = useState<Series[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch series from API
  const fetchSeries = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/series");
      if (!res.ok) {
        throw new Error(language === "fr" ? "Erreur de chargement des séries" : "Error loading series");
      }
      const data = await res.json();
      setSeriesList(data.series || []);
    } catch (err: any) {
      setError(err.message || (language === "fr" ? "Une erreur est survenue" : "An error occurred"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "list") {
      fetchSeries();
    }
  }, [activeTab]);

  const handleToggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "ACTIVE" ? "PAUSED" : "ACTIVE";
    try {
      // Optimistic update
      setSeriesList(prev => prev.map(s => s.id === id ? { ...s, status: newStatus as any } : s));

      const res = await fetch(`/api/series/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) {
        throw new Error();
      }
    } catch (err) {
      // Revert if error
      fetchSeries();
    }
  };

  const handleDeleteSeries = async (id: string) => {
    if (!confirm(language === "fr" ? "Êtes-vous sûr de vouloir supprimer cette série ?" : "Are you sure you want to delete this series?")) return;

    try {
      // Optimistic update
      setSeriesList(prev => prev.filter(s => s.id !== id));

      const res = await fetch(`/api/series/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error();
      }
    } catch (err) {
      fetchSeries();
    }
  };

  return (
    <div className="flex-grow flex flex-col gap-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/20 p-8">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-secondary/10 blur-3xl rounded-full"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-display font-bold text-white flex items-center gap-3">
              <span className="p-2 bg-primary/20 rounded-xl border border-primary/30">
                <Layers className="w-6 h-6 text-accent-purple" />
              </span>
              {t("series.title")}
            </h1>
            <p className="text-gray-400 mt-2 max-w-xl">
              {t("series.subtitle")}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-black/40 border border-border p-1 rounded-xl">
            <button
              onClick={() => setActiveTab("list")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-150 text-sm ${
                activeTab === "list"
                  ? "bg-primary text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("series.tab.list")}
            </button>
            <button
              onClick={() => setActiveTab("create")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-150 text-sm flex items-center gap-1.5 ${
                activeTab === "create"
                  ? "bg-primary text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Plus className="w-4 h-4" /> {t("series.tab.create")}
            </button>
          </div>
        </div>
      </div>

      {activeTab === "create" ? (
        <SeriesBuilder />
      ) : (
        <div className="space-y-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <RefreshCw className="w-8 h-8 text-primary animate-spin" />
              <p className="text-gray-400 text-sm">{language === "fr" ? "Chargement de vos séries..." : "Loading your series..."}</p>
            </div>
          ) : error ? (
            <div className="flex items-center gap-3 p-4 border border-red-500/20 bg-red-500/5 rounded-xl text-red-400">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p>{error}</p>
            </div>
          ) : seriesList.length === 0 ? (
            <div className="glass-panel border border-border rounded-2xl p-12 text-center flex flex-col items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-full border border-primary/20">
                <Layers className="w-8 h-8 text-accent-purple" />
              </div>
              <h3 className="text-lg font-bold text-white">{t("series.list.empty")}</h3>
              <p className="text-gray-400 text-sm max-w-sm">
                {t("series.list.empty.desc")}
              </p>
              <button
                onClick={() => setActiveTab("create")}
                className="mt-2 px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-medium transition-all duration-200 text-sm flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                <Plus className="w-4 h-4" /> {language === "fr" ? "Créer une Série" : "Create a Series"}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {seriesList.map((series) => {
                const progress = Math.round((series.videosGenerated / series.videoCount) * 100);
                
                return (
                  <div 
                    key={series.id}
                    className="glass-panel border border-border rounded-2xl p-6 bg-card/25 hover:border-primary/30 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden"
                  >
                    {/* Status vertical accent bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                      series.status === "ACTIVE" ? "bg-emerald-500 animate-pulse-glow" :
                      series.status === "PAUSED" ? "bg-amber-500" : "bg-gray-600"
                    }`}></div>

                    {/* Basic Info */}
                    <div className="flex-grow space-y-2 pl-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-bold text-white">{series.name}</h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 border border-primary/20 text-accent-purple">
                          {series.niche}
                        </span>
                        
                        {series.status === "ACTIVE" && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            {t("series.list.active")}
                          </span>
                        )}
                        {series.status === "PAUSED" && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 border border-amber-500/20 text-amber-400">
                            {t("series.list.paused")}
                          </span>
                        )}
                        {series.status === "COMPLETED" && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-500/10 border border-gray-500/20 text-gray-400">
                            {t("series.list.completed")}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-xs text-gray-400 flex-wrap">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {t("series.list.interval")} : {series.intervalHours}h
                        </span>
                        {series.nextPublishAt && series.status === "ACTIVE" && (
                          <span className="text-emerald-400/90 font-medium">
                            {t("series.list.next")} : {new Date(series.nextPublishAt).toLocaleDateString(language === "fr" ? "fr-FR" : "en-US", {
                              day: "numeric",
                              month: "short",
                              hour: "2-digit",
                              minute: "2-digit"
                            })}
                          </span>
                        )}
                        <span className="flex items-center gap-1.5">
                          {t("series.list.platforms")} :
                          {series.platforms.map((plat) => (
                            <span 
                              key={plat} 
                              className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border ${
                                plat === "tiktok" ? "bg-black text-white border-zinc-800" :
                                plat === "instagram" ? "bg-gradient-to-r from-purple-900/40 to-pink-900/40 text-pink-300 border-pink-700/30" :
                                "bg-red-950/40 text-red-300 border-red-900/30"
                              }`}
                            >
                              {plat}
                            </span>
                          ))}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="pt-2 max-w-md">
                        <div className="flex justify-between text-xs font-medium mb-1">
                          <span className="text-gray-400">{t("series.list.progress")}</span>
                          <span className="text-white">{series.videosGenerated} / {series.videoCount} ({progress}%)</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 border-t border-border/20 pt-4 md:border-none md:pt-0">
                      {series.status !== "COMPLETED" && (
                        <button
                          onClick={() => handleToggleStatus(series.id, series.status)}
                          className={`p-2.5 rounded-xl border transition-all duration-200 ${
                            series.status === "ACTIVE"
                              ? "border-amber-500/20 bg-amber-500/5 text-amber-400 hover:bg-amber-500/10"
                              : "border-emerald-500/20 bg-emerald-500/5 text-emerald-400 hover:bg-emerald-500/10"
                          }`}
                          title={series.status === "ACTIVE" ? (language === "fr" ? "Mettre en pause" : "Pause") : (language === "fr" ? "Démarrer" : "Start")}
                        >
                          {series.status === "ACTIVE" ? <Pause className="w-4.5 h-4.5" /> : <Play className="w-4.5 h-4.5" />}
                        </button>
                      )}

                      <button
                        onClick={() => handleDeleteSeries(series.id)}
                        className="p-2.5 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 hover:bg-red-500/10 transition-all duration-200"
                        title={language === "fr" ? "Supprimer la série" : "Delete series"}
                      >
                        <Trash2 className="w-4.5 h-4.5" />
                      </button>

                      <a
                        href="/dashboard/library"
                        className="p-2.5 rounded-xl border border-border bg-card hover:bg-border/30 text-gray-300 hover:text-white transition-all duration-200 flex items-center justify-center"
                        title={language === "fr" ? "Voir les vidéos générées" : "View generated videos"}
                      >
                        <ExternalLink className="w-4.5 h-4.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
