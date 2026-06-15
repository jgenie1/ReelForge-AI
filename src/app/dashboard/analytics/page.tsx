"use client";

import React, { useState } from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  ThumbsUp, 
  Play, 
  Share2, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownRight,
  Sparkles,
  Flame,
  LineChart
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

// Simulated metrics over time
const VIEWS_DATA = [
  { name: "Lun", Tiktok: 45000, Instagram: 32000, Youtube: 21000 },
  { name: "Mar", Tiktok: 52000, Instagram: 41000, Youtube: 29000 },
  { name: "Mer", Tiktok: 89000, Instagram: 64000, Youtube: 53000 },
  { name: "Jeu", Tiktok: 124000, Instagram: 82000, Youtube: 76000 },
  { name: "Ven", Tiktok: 110000, Instagram: 95000, Youtube: 84000 },
  { name: "Sam", Tiktok: 168000, Instagram: 134000, Youtube: 110000 },
  { name: "Dim", Tiktok: 185000, Instagram: 142000, Youtube: 125000 }
];

const ENGAGEMENT_DATA = [
  { name: "Bible", Likes: 42000, Shares: 8400, Comments: 1200 },
  { name: "Mythology", Likes: 38000, Shares: 6200, Comments: 950 },
  { name: "Horror", Likes: 51000, Shares: 11200, Comments: 2100 },
  { name: "Finance", Likes: 19000, Shares: 3100, Comments: 400 },
  { name: "Motivation", Likes: 31000, Shares: 5400, Comments: 800 },
  { name: "Science", Likes: 28000, Shares: 4900, Comments: 720 }
];

const RECENT_PERFORMANCES = [
  { id: 1, title: "Le secret terrifiant du Sahara", niche: "Science", views: "1.2M", likes: "84K", comments: "1.2K", score: 84, trend: "up" },
  { id: 2, title: "L'Ombre d'Anubis", niche: "Mythologie", views: "920K", likes: "68K", comments: "940", score: 92, trend: "up" },
  { id: 3, title: "L'Arche Perdue de Salomon", niche: "Bible", views: "340K", likes: "21K", comments: "180", score: 78, trend: "flat" },
  { id: 4, title: "L'Hôtel Maudit d'Haïti", niche: "Horreur", views: "150K", likes: "12K", comments: "310", score: 72, trend: "down" }
];

export default function AnalyticsDashboard() {
  const [timeframe, setTimeframe] = useState("7d");

  return (
    <div className="flex flex-col gap-8 text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white font-display">
            Analytics & Performances
          </h1>
          <p className="text-xs text-gray-400">Suivez l'audience cumulée et les indicateurs de viralité de vos vidéos sans visage.</p>
        </div>

        <div className="flex gap-2 p-1 bg-white/5 border border-border rounded-xl w-fit text-xs">
          <button 
            onClick={() => setTimeframe("24h")}
            className={`px-3.5 py-1.5 font-semibold rounded-lg transition-all ${
              timeframe === "24h" ? "bg-primary text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            24h
          </button>
          <button 
            onClick={() => setTimeframe("7d")}
            className={`px-3.5 py-1.5 font-semibold rounded-lg transition-all ${
              timeframe === "7d" ? "bg-primary text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            7 Jours
          </button>
          <button 
            onClick={() => setTimeframe("30d")}
            className={`px-3.5 py-1.5 font-semibold rounded-lg transition-all ${
              timeframe === "30d" ? "bg-primary text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            30 Jours
          </button>
        </div>
      </div>

      {/* Grid of Key Performance Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Vues Cumulées", value: "452,000", change: "+14.2%", positive: true, desc: "Sur les 7 derniers jours", icon: Play },
          { title: "Abonnés Gagnés", value: "+8,240", change: "+24.8%", positive: true, desc: "TikTok + Reels + Shorts", icon: Users },
          { title: "Likes de l'audience", value: "209,000", change: "+9.5%", positive: true, desc: "Taux d'engagement de 46%", icon: ThumbsUp },
          { title: "Score Viral Moyen", value: "81.5 / 100", change: "-1.2%", positive: false, desc: "Estimation IA stable", icon: Flame }
        ].map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="glass-panel p-5 rounded-2xl border border-border flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{kpi.title}</span>
                <span className="p-1.5 bg-white/5 border border-white/10 rounded-lg text-secondary">
                  <Icon className="w-4 h-4 text-secondary" />
                </span>
              </div>
              <span className="text-xl font-bold text-white font-display mt-1">{kpi.value}</span>
              <div className="flex items-center gap-1.5 mt-2">
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5 ${
                  kpi.positive ? "bg-green-500/10 border border-green-500/20 text-green-400" : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}>
                  {kpi.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {kpi.change}
                </span>
                <span className="text-[9px] text-gray-500 font-medium">{kpi.desc}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Views graph (75% width on large screens) */}
        <div className="lg:col-span-8 glass-panel p-6 rounded-3xl border border-border flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-bold text-white font-display">Tendance de Vues par Plateforme</h3>
              <p className="text-[10px] text-gray-400 mt-0.5">Vues générées quotidiennement par canal de publication.</p>
            </div>
            <div className="flex gap-4 text-[9px] font-bold">
              <span className="flex items-center gap-1.5 text-primary"><span className="w-2 h-2 rounded-full bg-primary" /> TikTok</span>
              <span className="flex items-center gap-1.5 text-secondary"><span className="w-2 h-2 rounded-full bg-secondary" /> Instagram</span>
              <span className="flex items-center gap-1.5 text-accent-purple"><span className="w-2 h-2 rounded-full bg-accent-purple" /> YouTube</span>
            </div>
          </div>
          
          <div className="h-72 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={VIEWS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTiktok" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorInstagram" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272A" vertical={false} />
                <XAxis dataKey="name" stroke="#71717A" fontSize={10} tickLine={false} />
                <YAxis stroke="#71717A" fontSize={10} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#18181B", borderColor: "#27272A", borderRadius: "12px", fontSize: "11px" }}
                  itemStyle={{ color: "#E4E4E7" }}
                />
                <Area type="monotone" dataKey="Tiktok" stroke="#8B5CF6" fillOpacity={1} fill="url(#colorTiktok)" strokeWidth={2} />
                <Area type="monotone" dataKey="Instagram" stroke="#06B6D4" fillOpacity={1} fill="url(#colorInstagram)" strokeWidth={2} />
                <Area type="monotone" dataKey="Youtube" stroke="#A78BFA" strokeDasharray="4 4" fill="none" strokeWidth={1.5} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Niche performance (25% width on large screens) */}
        <div className="lg:col-span-4 glass-panel p-6 rounded-3xl border border-border flex flex-col gap-4">
          <div>
            <h3 className="text-sm font-bold text-white font-display">Performance par Niche</h3>
            <p className="text-[10px] text-gray-400 mt-0.5">Likes récoltés en moyenne selon la thématique choisie.</p>
          </div>

          <div className="h-72 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ENGAGEMENT_DATA} layout="vertical" margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272A" horizontal={false} />
                <XAxis type="number" stroke="#71717A" fontSize={8} tickLine={false} />
                <YAxis dataKey="name" type="category" stroke="#71717A" fontSize={9} tickLine={false} width={80} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#18181B", borderColor: "#27272A", borderRadius: "12px", fontSize: "10px" }}
                />
                <Bar dataKey="Likes" fill="#06B6D4" radius={[0, 4, 4, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Video performance leaderboard */}
      <div className="glass-panel p-6 rounded-3xl border border-border flex flex-col gap-4">
        <div>
          <h3 className="text-sm font-bold text-white font-display">Clips Récents Performants</h3>
          <p className="text-[10px] text-gray-400 mt-0.5">Historique des publications classé par taux de complétion et visibilité.</p>
        </div>

        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-border/80 text-gray-400 font-bold">
                <th className="py-3 px-4">Titre de la vidéo</th>
                <th className="py-3 px-4">Niche</th>
                <th className="py-3 px-4">Vues</th>
                <th className="py-3 px-4">Likes</th>
                <th className="py-3 px-4">Commentaires</th>
                <th className="py-3 px-4">Score AI</th>
                <th className="py-3 px-4 text-right">Tendance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {RECENT_PERFORMANCES.map((video) => (
                <tr key={video.id} className="hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white flex items-center gap-2">
                    <Play className="w-3.5 h-3.5 text-primary" />
                    {video.title}
                  </td>
                  <td className="py-3.5 px-4 text-gray-300">{video.niche}</td>
                  <td className="py-3.5 px-4 text-white font-bold">{video.views}</td>
                  <td className="py-3.5 px-4 text-gray-400">{video.likes}</td>
                  <td className="py-3.5 px-4 text-gray-400">{video.comments}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 bg-secondary/15 text-secondary border border-secondary/20 rounded font-black text-[10px]">
                      {video.score}%
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right font-bold">
                    {video.trend === "up" && <span className="text-green-400 flex items-center gap-1"><Flame className="w-3.5 h-3.5" /> Virale</span>}
                    {video.trend === "flat" && <span className="text-gray-400">Stable</span>}
                    {video.trend === "down" && <span className="text-yellow-500">Ralentie</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
