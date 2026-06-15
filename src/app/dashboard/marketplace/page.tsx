"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Store, 
  Search, 
  Filter, 
  Star, 
  Sparkles, 
  Heart, 
  Download, 
  Plus, 
  User, 
  ChevronRight,
  TrendingUp,
  SlidersHorizontal,
  FolderHeart,
  Upload,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  DollarSign
} from "lucide-react";

interface Template {
  id: string;
  name: string;
  creator: string;
  category: string;
  price: number;
  rating: number;
  users: number;
  badge?: "POPULAIRE" | "NOUVEAU";
  gradient: string;
  description: string;
}

const CATEGORIES = ["Tous", "Cinématique", "Anime", "Horreur", "Éducatif", "Finance", "Motivation"];

const MOCK_TEMPLATES: Template[] = [
  {
    id: "t1",
    name: "Mystères Gothiques V2",
    creator: "@dark_narratives",
    category: "Horreur",
    price: 0,
    rating: 4.8,
    users: 2400,
    badge: "POPULAIRE",
    gradient: "from-purple-950 via-zinc-900 to-red-950",
    description: "Ambiance brumeuse, police Serif dorée et sous-titres dynamiques de type karaoké. Idéal pour les creepypastas."
  },
  {
    id: "t2",
    name: "Richesse Rétro 90s",
    creator: "@wealth_hacks",
    category: "Finance",
    price: 15,
    rating: 4.6,
    users: 1200,
    badge: "NOUVEAU",
    gradient: "from-emerald-950 via-teal-900 to-yellow-950/40",
    description: "Esthétique VHS rétro avec filtres de bruit et sous-titres verts fluo. Excellent pour accrocher l'attention."
  },
  {
    id: "t3",
    name: "Anime Shonen Pop",
    creator: "@manga_forge",
    category: "Anime",
    price: 0,
    rating: 4.9,
    users: 5400,
    badge: "POPULAIRE",
    gradient: "from-red-900 via-orange-950 to-yellow-900",
    description: "Animations de transition ultra-rapides et lettrage style manga explosif. Parfait pour les récapitulatifs d'animes."
  },
  {
    id: "t4",
    name: "Cinematic Epic Saga",
    creator: "@hollywood_shorts",
    category: "Cinématique",
    price: 25,
    rating: 4.7,
    users: 850,
    gradient: "from-blue-950 via-slate-900 to-indigo-950",
    description: "Rendu majestueux avec barres de cinéma horizontales, sous-titres épurés en bas et effets de flares lumineux."
  },
  {
    id: "t5",
    name: "Motivation Guerrier",
    creator: "@gym_grind",
    category: "Motivation",
    price: 10,
    rating: 4.5,
    users: 1900,
    gradient: "from-zinc-800 via-stone-900 to-neutral-900",
    description: "Gros lettrage gras au centre avec animation de secousse sur les mots-clés importants. Contraste ultra élevé."
  },
  {
    id: "t6",
    name: "Micro-Learning Pro",
    creator: "@edu_creator",
    category: "Éducatif",
    price: 12,
    rating: 4.6,
    users: 1400,
    gradient: "from-violet-950 via-indigo-900 to-cyan-950/40",
    description: "Mise en page propre avec barre de progression de lecture en haut de la vidéo. Police moderne sans-serif lisible."
  },
  {
    id: "t7",
    name: "Récits Sacrés & Paroles",
    creator: "@faith_forge",
    category: "Éducatif",
    price: 8,
    rating: 4.9,
    users: 3100,
    gradient: "from-amber-950 via-yellow-900/60 to-stone-950",
    description: "Style parchemin ancien et écriture gothique douce. Optimisé pour la lecture lente de récits solennels."
  },
  {
    id: "t8",
    name: "Légendes de la Rue",
    creator: "@street_stories",
    category: "Motivation",
    price: 20,
    rating: 4.4,
    users: 620,
    badge: "NOUVEAU",
    gradient: "from-rose-950 via-purple-950 to-zinc-900",
    description: "Style sombre urbain avec illustrations néon et flashs de transition. Idéal pour les bios rapides."
  }
];

export default function MarketplacePage() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"explore" | "owned" | "sell">("explore");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  
  // Sell Form States
  const [sellName, setSellName] = useState("");
  const [sellDesc, setSellDesc] = useState("");
  const [sellCat, setSellCat] = useState("Finance");
  const [sellPrice, setSellPrice] = useState(10);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getCategoryName = (c: string, lang: string) => {
    if (lang === "fr") return c;
    switch (c) {
      case "Tous": return "All";
      case "Cinématique": return "Cinematic";
      case "Anime": return "Anime";
      case "Horreur": return "Horror";
      case "Éducatif": return "Educational";
      case "Finance": return "Finance";
      case "Motivation": return "Motivation";
      default: return c;
    }
  };

  // Filters
  const filteredTemplates = useMemo(() => {
    return MOCK_TEMPLATES.filter((tpl) => {
      const matchesSearch = tpl.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            tpl.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tpl.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "Tous" || tpl.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex-grow flex flex-col gap-6">
      {/* Community Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          <p className="text-sm text-gray-300">
            <span className="font-bold text-white">ReelForge Marketplace</span> — {t("market.banner")}
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-1 text-xs text-secondary font-medium">
          {t("market.trends")} <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/20 p-8">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-secondary/10 blur-3xl rounded-full"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-display font-bold text-white flex items-center gap-3">
              <span className="p-2 bg-primary/20 rounded-xl border border-primary/30">
                <Store className="w-6 h-6 text-accent-purple" />
              </span>
              {t("market.title")}
            </h1>
            <p className="text-gray-400 mt-2 max-w-xl">
              {t("market.subtitle")}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-black/40 border border-border p-1 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab("explore")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-150 text-sm ${
                activeTab === "explore"
                  ? "bg-primary text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("market.tab.explore")}
            </button>
            <button
              onClick={() => setActiveTab("owned")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-150 text-sm flex items-center gap-1.5 ${
                activeTab === "owned"
                  ? "bg-primary text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("market.tab.owned")}
            </button>
            <button
              onClick={() => setActiveTab("sell")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-150 text-sm flex items-center gap-1.5 ${
                activeTab === "sell"
                  ? "bg-primary text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("market.tab.sell")}
            </button>
          </div>
        </div>
      </div>

      {/* Explore Tab */}
      {activeTab === "explore" && (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:max-w-xs">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder={t("market.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-card/40 border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 placeholder-gray-500"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-primary/20 border border-primary text-white"
                      : "bg-card/20 border border-border text-gray-400 hover:text-white"
                  }`}
                >
                  {getCategoryName(cat, language)}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTemplates.map((tpl) => (
              <div 
                key={tpl.id}
                className="glass-panel border border-border rounded-2xl bg-card/20 overflow-hidden hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Preview */}
                <div className={`h-48 bg-gradient-to-br ${tpl.gradient} relative p-4 flex flex-col justify-between`}>
                  {/* Backdrop mesh overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-50 mix-blend-overlay"></div>
                  
                  {/* Badge */}
                  <div>
                    {tpl.badge && (
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        tpl.badge === "POPULAIRE" 
                          ? "bg-amber-500/20 border border-amber-500 text-amber-400"
                          : "bg-secondary/20 border border-secondary text-cyan-300"
                      }`}>
                        {tpl.badge === "POPULAIRE" ? (language === "fr" ? "POPULAIRE" : "POPULAR") : (language === "fr" ? "NOUVEAU" : "NEW")}
                      </span>
                    )}
                  </div>

                  {/* Creator / Hover Play */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs bg-black/50 backdrop-blur-md px-2 py-1 rounded text-gray-200">
                      {tpl.creator}
                    </span>
                    <span className="text-xs bg-black/50 backdrop-blur-md px-2 py-1 rounded text-orange-400 font-bold border border-orange-500/20">
                      {tpl.price === 0 ? t("market.free") : `${tpl.price} ${t("market.credits")}`}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-grow flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-white group-hover:text-primary transition-colors">{tpl.name}</h3>
                      <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        {tpl.rating}
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      {tpl.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/20">
                    <span className="text-[11px] text-gray-500 font-medium">
                      {t("market.usedby").replace("{count}", tpl.users.toString())}
                    </span>

                    <button
                      onClick={() => alert(tpl.price === 0 ? (language === "fr" ? "Modèle chargé dans votre bibliothèque !" : "Template loaded into your library!") : (language === "fr" ? `Achat de ${tpl.price} crédits simulé !` : `Purchase of ${tpl.price} credits simulated!`))}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                        tpl.price === 0
                          ? "bg-primary/20 text-white border border-primary/40 hover:bg-primary/30"
                          : "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/10"
                      }`}
                    >
                      {tpl.price === 0 ? t("btn.use") : t("btn.buy")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mes Templates Tab */}
      {activeTab === "owned" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-white">
              {language === "fr" ? `Modèles possédés (${MOCK_TEMPLATES.filter(t => t.price === 0).length})` : `Owned models (${MOCK_TEMPLATES.filter(t => t.price === 0).length})`}
            </h2>
            <button 
              onClick={() => setActiveTab("sell")}
              className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> {language === "fr" ? "Créer un modèle" : "Create a model"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_TEMPLATES.filter(t => t.price === 0).map((tpl) => (
              <div 
                key={tpl.id}
                className="glass-panel border border-border bg-card/10 rounded-2xl p-5 flex gap-5 hover:border-primary/20 transition-all"
              >
                <div className={`w-28 h-28 rounded-xl bg-gradient-to-br ${tpl.gradient} flex-shrink-0 relative`}>
                  <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="font-bold text-white">{tpl.name}</h3>
                    <p className="text-xs text-primary">{tpl.category}</p>
                    <p className="text-xs text-gray-400 line-clamp-2">{tpl.description}</p>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href="/dashboard/videos"
                      className="px-3 py-1.5 bg-primary/20 text-white border border-primary/30 hover:bg-primary/30 rounded-lg text-xs font-semibold transition-all"
                    >
                      {language === "fr" ? "Créer une vidéo" : "Create a video"}
                    </a>
                    <button
                      onClick={() => alert(language === "fr" ? "Édition du template..." : "Editing template...")}
                      className="px-3 py-1.5 bg-zinc-800 text-gray-300 hover:text-white rounded-lg text-xs font-semibold transition-all border border-border"
                    >
                      {language === "fr" ? "Modifier" : "Edit"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Vendre Tab */}
      {activeTab === "sell" && (
        <div className="max-w-xl mx-auto glass-panel border border-border rounded-2xl p-8 bg-card/15 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold text-white">{t("market.sell.title")}</h2>
            <p className="text-xs text-gray-400">
              {t("market.sell.desc")}
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-6 border border-emerald-500/20 bg-emerald-500/5 rounded-xl text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <div className="space-y-1">
                <h3 className="font-bold text-white">{t("market.sell.success")}</h3>
                <p className="text-xs text-gray-400">
                  {t("market.sell.success.desc")}
                </p>
              </div>
              <button 
                onClick={() => { setIsSubmitted(false); setSellName(""); setSellDesc(""); }}
                className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-semibold hover:bg-primary-hover transition-all"
              >
                {t("market.sell.another")}
              </button>
            </div>
          ) : (
            <form 
              onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}
              className="space-y-4"
            >
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-300">{t("market.sell.label.name")}</label>
                <input
                  type="text"
                  required
                  value={sellName}
                  onChange={(e) => setSellName(e.target.value)}
                  placeholder={language === "fr" ? "Ex: Horror Vibe Sombre" : "E.g., Dark Horror Vibe"}
                  className="w-full bg-black/40 border border-border rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-300">{t("market.sell.label.desc")}</label>
                <textarea
                  required
                  rows={3}
                  value={sellDesc}
                  onChange={(e) => setSellDesc(e.target.value)}
                  placeholder={language === "fr" ? "Expliquez la disposition..." : "Explain subtitle layout, pacing, style..."}
                  className="w-full bg-black/40 border border-border rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300">{t("market.sell.label.cat")}</label>
                  <select
                    value={sellCat}
                    onChange={(e) => setSellCat(e.target.value)}
                    className="w-full bg-black/40 border border-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50"
                  >
                    {CATEGORIES.slice(1).map((c) => (
                      <option key={c} value={c} className="bg-neutral-900">{getCategoryName(c, language)}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300">{t("market.sell.label.price")}</label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={sellPrice}
                    onChange={(e) => setSellPrice(Number(e.target.value))}
                    className="w-full bg-black/40 border border-border rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300">{t("market.sell.label.file")}</label>
                <div className="border border-dashed border-border hover:border-primary/50 rounded-xl p-6 text-center cursor-pointer transition-all bg-black/20 flex flex-col items-center gap-2">
                  <Upload className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="text-xs font-bold text-white">{t("market.sell.file.drag")}</p>
                    <p className="text-[10px] text-gray-500 mt-1">{t("market.sell.file.sub")}</p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                {t("market.sell.btn")} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
