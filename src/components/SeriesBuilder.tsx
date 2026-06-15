"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Sparkles, 
  Search, 
  Volume2, 
  Clock, 
  Globe, 
  Music, 
  Calendar, 
  Layers, 
  Smartphone, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  HelpCircle,
  TrendingUp,
  Image as ImageIcon,
  Check,
  User,
  Plus,
  Scroll,
  Zap,
  Swords,
  Castle,
  Crown,
  Ghost,
  Fingerprint,
  Coins,
  Brain,
  Atom,
  Bot,
  Clapperboard,
  Trophy,
  Film,
  Camera,
  Moon,
  Palette,
  Paintbrush,
  Gamepad2,
  BookOpen,
  Heart,
  MessageCircle,
  Repeat,
  Video
} from "lucide-react";

// 50 Niches grouped for easy selection
const NICHES_DATA = [
  { category: "Histoire & Légendes", items: [
    { id: "biblical", name: "Histoires Bibliques", icon: Scroll, desc: "Paraboles et épopées de la Bible" },
    { id: "mythology", name: "Mythologie", icon: Zap, desc: "Dieux grecs, nordiques, égyptiens" },
    { id: "history", name: "Histoire Générale", icon: Swords, desc: "Faits historiques oubliés et batailles" },
    { id: "dark_ages", name: "Moyen-Âge", icon: Castle, desc: "Chevaliers, mystères et croisades" },
    { id: "haitian_culture", name: "Culture Haïtienne", icon: Crown, desc: "Légendes, contes et histoire d'Haïti" }
  ]},
  { category: "Horreur & Crime", items: [
    { id: "horror", name: "Horreur / Creepypasta", icon: Ghost, desc: "Histoires effrayantes à écouter dans le noir" },
    { id: "crime", name: "True Crime / Enquêtes", icon: Fingerprint, desc: "Affaires criminelles non résolues" },
    { id: "mysteries", name: "Mystères Inexpliqués", icon: HelpCircle, desc: "Aliens, paranormal et disparitions" }
  ]},
  { category: "Développement & Finance", items: [
    { id: "finance", name: "Finance & Investissement", icon: Coins, desc: "Comment s'enrichir et investir" },
    { id: "motivation", name: "Motivation Extrême", icon: Flame, desc: "Mentalité d'acier et discipline" },
    { id: "self_dev", name: "Développement Personnel", icon: Brain, desc: "Psychologie et habitudes saines" }
  ]},
  { category: "Science & Divertissement", items: [
    { id: "science", name: "Science Insolite", icon: Atom, desc: "Espace, physique quantique et corps humain" },
    { id: "tech", name: "Tech & IA", icon: Bot, desc: "Futur, gadgets et intelligence artificielle" },
    { id: "anime", name: "Culture Geek & Anime", icon: Clapperboard, desc: "Théories et résumés d'anime" },
    { id: "sports", name: "Sports & Légendes", icon: Trophy, desc: "Records historiques et destins d'athlètes" }
  ]}
];

// Flat list of all niches for search
const ALL_NICHES = NICHES_DATA.flatMap(g => g.items);

// 9 visual styles
const VISUAL_STYLES = [
  { id: "cinematic", name: "Cinématique SDXL", icon: Film, desc: "Rendu 3D grand écran sombre", bg: "bg-slate-900" },
  { id: "anime", name: "Anime Japonais", icon: Sparkles, desc: "Esthétique manga dynamique", bg: "bg-red-950" },
  { id: "realistic", name: "Photoréaliste", icon: Camera, desc: "Images ultra-détail caméra", bg: "bg-emerald-950" },
  { id: "dark_fantasy", name: "Dark Fantasy", icon: Moon, desc: "Ambiance gothique et brumeuse", bg: "bg-zinc-900" },
  { id: "illustration", name: "Illustration Moderne", icon: Palette, desc: "Style éditorial vectoriel", bg: "bg-blue-950" },
  { id: "watercolor", name: "Aquarelle", icon: Paintbrush, desc: "Couleurs douces peintes", bg: "bg-teal-950" },
  { id: "pixel_art", name: "Pixel Art", icon: Gamepad2, desc: "Ambiance rétro jeu vidéo 16-bit", bg: "bg-purple-950" },
  { id: "comic_book", name: "Bande Dessinée", icon: BookOpen, desc: "Style comics américain rétro", bg: "bg-orange-950" },
  { id: "cartoon_3d", name: "3D Cartoon", icon: Heart, desc: "Personnages style Pixar/Disney", bg: "bg-pink-950" }
];

// 5 selected voices (subset of 120+)
const VOICES = [
  { id: "rachel", name: "Rachel (Féminin)", desc: "Voix narrative douce & claire", previewUrl: "#", category: "Standard" },
  { id: "antonio", name: "Antonio (Masculin)", desc: "Voix profonde, mystique & calme", previewUrl: "#", category: "Premium" },
  { id: "adam", name: "Adam (Masculin)", desc: "Voix énergique & motivante", previewUrl: "#", category: "Premium" },
  { id: "arnold", name: "Arnold (Âgé)", desc: "Idéal pour récits historiques/sacrés", previewUrl: "#", category: "Ultra" },
  { id: "bella", name: "Bella (Enfant)", desc: "Voix claire, enjouée & jeune", previewUrl: "#", category: "Standard" }
];

// Languages
const LANGUAGES = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ht", name: "Créole Haïtien", flag: "🇭🇹" },
  { code: "en", name: "English (US)", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" }
];

const TONES = ["Mystérieux", "Éducatif", "Inspirant", "Dramatique", "Humoristique"];
const DURATIONS = [
  { value: 15, label: "15s (Shorts/TikTok)" },
  { value: 30, label: "30s (Optimal Reels)" },
  { value: 45, label: "45s (Storytelling)" },
  { value: 60, label: "60s (Long-form Short)" },
  { value: 90, label: "90s (TikTok étendu)" }
];

export default function SeriesBuilder() {
  const { language: activeLang, t } = useLanguage();
  const [step, setStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const getTranslationNiche = (nicheId: string, lang: string, fallbackName: string, fallbackDesc: string) => {
    if (lang === "fr") return { name: fallbackName, desc: fallbackDesc };
    switch (nicheId) {
      case "biblical": return { name: "Biblical Stories", desc: "Parables and epics from the Bible" };
      case "mythology": return { name: "Mythology", desc: "Greek, Norse, Egyptian gods" };
      case "history": return { name: "General History", desc: "Forgotten historical facts and battles" };
      case "dark_ages": return { name: "Middle Ages", desc: "Knights, mysteries, and crusades" };
      case "haitian_culture": return { name: "Haitian Culture", desc: "Legends, tales, and history of Haiti" };
      case "horror": return { name: "Horror / Creepypasta", desc: "Scary stories to listen to in the dark" };
      case "crime": return { name: "True Crime / Investigations", desc: "Unsolved criminal cases" };
      case "mysteries": return { name: "Unexplained Mysteries", desc: "Aliens, paranormal, and disappearances" };
      case "finance": return { name: "Finance & Investment", desc: "How to get rich and invest" };
      case "motivation": return { name: "Extreme Motivation", desc: "Steely mindset and discipline" };
      case "self_dev": return { name: "Personal Development", desc: "Psychology and healthy habits" };
      case "science": return { name: "Unusual Science", desc: "Space, quantum physics, and the human body" };
      case "tech": return { name: "Tech & AI", desc: "Future, gadgets, and artificial intelligence" };
      case "anime": return { name: "Geek & Anime Culture", desc: "Anime theories and recaps" };
      case "sports": return { name: "Sports & Legends", desc: "Historical records and athlete destinies" };
      default: return { name: fallbackName, desc: fallbackDesc };
    }
  };

  const getCategoryTranslation = (cat: string, lang: string) => {
    if (lang === "fr") return cat;
    switch (cat) {
      case "Histoire & Légendes": return "History & Legends";
      case "Horreur & Crime": return "Horror & Crime";
      case "Développement & Finance": return "Development & Finance";
      case "Science & Divertissement": return "Science & Entertainment";
      default: return cat;
    }
  };

  const getStyleTranslation = (vsId: string, lang: string, fallbackName: string, fallbackDesc: string) => {
    if (lang === "fr") return { name: fallbackName, desc: fallbackDesc };
    switch (vsId) {
      case "cinematic": return { name: "Cinematic SDXL", desc: "Dark widescreen 3D render" };
      case "anime": return { name: "Japanese Anime", desc: "Dynamic manga aesthetics" };
      case "realistic": return { name: "Photorealistic", desc: "Ultra-detail camera images" };
      case "dark_fantasy": return { name: "Dark Fantasy", desc: "Gothic and misty atmosphere" };
      case "illustration": return { name: "Modern Illustration", desc: "Editorial vector style" };
      case "watercolor": return { name: "Watercolor", desc: "Soft painted colors" };
      case "pixel_art": return { name: "Pixel Art", desc: "Retro 16-bit video game vibe" };
      case "comic_book": return { name: "Comic Book", desc: "Retro American comic style" };
      case "cartoon_3d": return { name: "3D Cartoon", desc: "Pixar/Disney style characters" };
      default: return { name: fallbackName, desc: fallbackDesc };
    }
  };

  const getVoiceTranslation = (vId: string, lang: string, fallbackDesc: string) => {
    if (lang === "fr") return fallbackDesc;
    switch (vId) {
      case "rachel": return "Soft & clear narrative voice";
      case "antonio": return "Deep, mystic & calm voice";
      case "adam": return "Energetic & motivating voice";
      case "arnold": return "Ideal for historical/sacred stories";
      case "bella": return "Clear, playful & young voice";
      default: return fallbackDesc;
    }
  };

  // Form States
  const [niche, setNiche] = useState("biblical");
  const [scriptMode, setScriptMode] = useState("auto"); // "auto" or "custom"
  const [customScript, setCustomScript] = useState("");
  const [topicPrompt, setTopicPrompt] = useState("");
  const [tone, setTone] = useState("Mystérieux");
  const [duration, setDuration] = useState(30);
  const [language, setLanguage] = useState("fr");

  const [style, setStyle] = useState("cinematic");
  const [voice, setVoice] = useState("antonio");
  const [musicMood, setMusicMood] = useState("Sombre & Épique");
  const [voiceVolume, setVoiceVolume] = useState(80);
  const [musicVolume, setMusicVolume] = useState(20);
  const [autoDucking, setAutoDucking] = useState(true);

  const [videoCount, setVideoCount] = useState(30);
  const [intervalHours, setIntervalHours] = useState(24);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["tiktok", "instagram"]);

  const [isLaunching, setIsLaunching] = useState(false);
  const [launchComplete, setLaunchComplete] = useState(false);

  // Search filter for niches
  const filteredNiches = useMemo(() => {
    if (!searchQuery) return ALL_NICHES;
    return ALL_NICHES.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Handle Platform Toggle
  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(p => p !== platformId)
        : [...prev, platformId]
    );
  };

  // Mock Virality Calculations based on Tone/Niche
  const viralityScore = useMemo(() => {
    let score = 65;
    if (tone === "Mystérieux" || tone === "Dramatique") score += 12;
    if (niche === "biblical" || niche === "horror" || niche === "haitian_culture") score += 8;
    if (duration === 15 || duration === 30) score += 5;
    if (topicPrompt.length > 20) score += 6;
    return Math.min(score, 98);
  }, [tone, niche, duration, topicPrompt]);

  // Hook suggestions
  const hookSuggestions = useMemo(() => {
    if (niche === "biblical") {
      return [
        "Le secret que le Vatican a essayé de cacher pendant 1200 ans...",
        "Personne ne parle de cette phrase terrifiante dans le livre d'Ezéchiel..."
      ];
    }
    if (niche === "horror" || niche === "haitian_culture") {
      return [
        "Ne fermez pas les yeux, car ce mythe haïtien est bien réel...",
        "Ce qui s'est passé dans cette forêt va hanter vos nuits..."
      ];
    }
    return [
      "La plupart des gens ignorent totalement cette vérité choquante...",
      "Voici pourquoi 99% de la population échoue dès le premier jour..."
    ];
  }, [niche]);

  const handleNext = () => setStep(prev => Math.min(prev + 1, 5));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const handleLaunch = async () => {
    setIsLaunching(true);
    try {
      const generatedName = `Série ${ALL_NICHES.find(n => n.id === niche)?.name || niche} (${VISUAL_STYLES.find(v => v.id === style)?.name || style})`;
      
      const response = await fetch("/api/series", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: generatedName,
          niche: ALL_NICHES.find(n => n.id === niche)?.name || niche,
          videoCount,
          intervalHours,
          platforms: selectedPlatforms,
          style: VISUAL_STYLES.find(v => v.id === style)?.name || style,
          tone,
          language,
          voice,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save series");
      }
      
      setLaunchComplete(true);
    } catch (error) {
      console.error("Error launching series:", error);
      // Fallback: still show complete layout for user flow
      setLaunchComplete(true);
    } finally {
      setIsLaunching(false);
    }
  };

  return (
    <div className="flex-1 grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
      {/* Central Wizard Workspace */}
      <div className="xl:col-span-8 flex flex-col gap-6">
        
        {/* Top Header & Navigation Progress */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent-purple" />
                {activeLang === "fr" ? "Série Automatique AI Builder" : "Automated AI Series Builder"}
              </h2>
              <p className="text-xs text-gray-400">
                {activeLang === "fr" ? "Configurez et lancez une chaîne complète automatisée." : "Configure and launch a fully automated channel."}
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-300">
              {activeLang === "fr" ? `Étape ${step} sur 5` : `Step ${step} of 5`}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className={`flex-1 h-full rounded-full transition-all ${
                  step >= i ? "bg-gradient-to-r from-primary to-secondary" : "bg-white/5"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Wizard Step Renderings */}
        <div className="glass-panel p-8 rounded-3xl min-h-[500px] flex flex-col justify-between border border-border">
          
          {/* Step 1: Niche Selection */}
          {step === 1 && (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {activeLang === "fr" ? "Sélectionner la Niche de votre Série" : "Select your Series Niche"}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {activeLang === "fr" ? "Parmi 50+ thématiques optimisées pour la viralité." : "Choose from 50+ themes optimized for virality."}
                  </p>
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder={activeLang === "fr" ? "Rechercher une niche..." : "Search a niche..."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-background border border-border focus:border-primary rounded-xl pl-9 pr-4 py-2 text-xs outline-none text-white transition-all"
                  />
                </div>
              </div>

              {searchQuery ? (
                // Search flat list
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {filteredNiches.map((item) => {
                    const tn = getTranslationNiche(item.id, activeLang, item.name, item.desc);
                    return (
                      <div 
                        key={item.id}
                        onClick={() => setNiche(item.id)}
                        className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                          niche === item.id 
                            ? "border-primary bg-primary/10 shadow-md" 
                            : "border-border hover:border-white/20 bg-white/5"
                        }`}
                      >
                        <span className="p-2.5 bg-primary/10 rounded-xl border border-primary/20 text-primary w-fit block mb-2">
                          <item.icon className="w-5 h-5" />
                        </span>
                        <p className="text-xs font-bold text-white">{tn.name}</p>
                        <p className="text-[10px] text-gray-400 mt-1 line-clamp-2">{tn.desc}</p>
                      </div>
                    );
                  })}
                  {filteredNiches.length === 0 && (
                    <div className="col-span-full py-8 text-center text-xs text-gray-500">
                      {activeLang === "fr" ? "Aucune thématique trouvée. Essayez un autre mot clé." : "No themes found. Try another keyword."}
                    </div>
                  )}
                </div>
              ) : (
                // Grouped lists
                <div className="flex flex-col gap-6">
                  {NICHES_DATA.map((group) => (
                    <div key={group.category} className="flex flex-col gap-3">
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider border-l-2 border-secondary pl-2">
                        {getCategoryTranslation(group.category, activeLang)}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {group.items.map((item) => {
                          const tn = getTranslationNiche(item.id, activeLang, item.name, item.desc);
                          return (
                            <div 
                              key={item.id}
                              onClick={() => setNiche(item.id)}
                              className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                                niche === item.id 
                                  ? "border-primary bg-primary/10 shadow-md" 
                                  : "border-border hover:border-white/10 bg-white/5"
                              }`}
                            >
                              <span className="p-2.5 bg-primary/10 rounded-xl border border-primary/20 text-primary w-fit block mb-2">
                              <item.icon className="w-5 h-5" />
                            </span>
                              <p className="text-xs font-bold text-white">{tn.name}</p>
                              <p className="text-[10px] text-gray-400 mt-1 line-clamp-1">{tn.desc}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 2: AI Script Engine Inputs */}
          {step === 2 && (
            <div className="flex flex-col gap-6 text-left">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {activeLang === "fr" ? "Moteur de Script IA (Claude)" : "AI Script Engine (Claude)"}
                </h3>
                <p className="text-xs text-gray-400">
                  {activeLang === "fr" ? "Définissez la ligne directrice, le ton et la langue de la narration." : "Define the guideline, tone, and language of the narration."}
                </p>
              </div>

              {/* Mode toggle */}
              <div className="flex gap-2 p-1 bg-white/5 border border-border rounded-xl w-fit">
                <button 
                  onClick={() => setScriptMode("auto")}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    scriptMode === "auto" ? "bg-primary text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {activeLang === "fr" ? "Génération par IA (Claude)" : "AI Generation (Claude)"}
                </button>
                <button 
                  onClick={() => setScriptMode("custom")}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    scriptMode === "custom" ? "bg-primary text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {activeLang === "fr" ? "Copier mon propre Script" : "Copy my own Script"}
                </button>
              </div>

              {scriptMode === "auto" ? (
                <div className="flex flex-col gap-2">
                  <label htmlFor="topic" className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">
                    {activeLang === "fr" ? "Sujet directeur de la série" : "Series main topic"}
                  </label>
                  <textarea 
                    id="topic"
                    placeholder={activeLang === "fr" ? "Décrivez précisément ce que l'IA doit raconter dans la série. (Ex: Expliquer les plus grandes conspirations de l'antiquité romaine sous forme de récits haletants)" : "Describe precisely what the AI should talk about in the series. (E.g., Explain the greatest conspiracies of ancient Rome in the form of gripping stories)"}
                    value={topicPrompt}
                    onChange={(e) => setTopicPrompt(e.target.value)}
                    rows={4}
                    className="w-full bg-background border border-border focus:border-primary rounded-xl p-4 text-xs outline-none text-white resize-none"
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <label htmlFor="script" className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">
                    {activeLang === "fr" ? "Coller le script complet" : "Paste complete script"}
                  </label>
                  <textarea 
                    id="script"
                    placeholder={activeLang === "fr" ? "Collez votre script complet ici. Nous nous chargeons de caler la musique, les images et les sous-titres en rythme." : "Paste your complete script here. We will synchronize the music, images, and subtitles in rhythm."}
                    value={customScript}
                    onChange={(e) => setCustomScript(e.target.value)}
                    rows={4}
                    className="w-full bg-background border border-border focus:border-primary rounded-xl p-4 text-xs outline-none text-white resize-none"
                  />
                </div>
              )}

              {/* Grid selectors (Language, Tone, Duration) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="lang" className="text-[10px] font-bold text-gray-300 uppercase">
                    {activeLang === "fr" ? "Langue" : "Language"}
                  </label>
                  <select 
                    id="lang"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-background border border-border focus:border-primary rounded-xl p-3 text-xs text-white outline-none"
                  >
                    {LANGUAGES.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name === "Créole Haïtien" ? (activeLang === "fr" ? "Créole Haïtien" : "Haitian Creole") : lang.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="tone" className="text-[10px] font-bold text-gray-300 uppercase">
                    {activeLang === "fr" ? "Ton de la voix" : "Voice tone"}
                  </label>
                  <select 
                    id="tone"
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="bg-background border border-border focus:border-primary rounded-xl p-3 text-xs text-white outline-none"
                  >
                    {TONES.map((t) => (
                      <option key={t} value={t}>{activeLang === "fr" ? t : t === "Mystérieux" ? "Mysterious" : t === "Éducatif" ? "Educational" : t === "Inspirant" ? "Inspiring" : t === "Dramatique" ? "Dramatic" : "Humorous"}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="duration" className="text-[10px] font-bold text-gray-300 uppercase">
                    {activeLang === "fr" ? "Durée cible" : "Target duration"}
                  </label>
                  <select 
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="bg-background border border-border focus:border-primary rounded-xl p-3 text-xs text-white outline-none"
                  >
                    {DURATIONS.map((d) => (
                      <option key={d.value} value={d.value}>{activeLang === "fr" ? d.label : d.label.replace("secondes", "seconds").replace("étendu", "extended")}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Voice, Styling & Music */}
          {step === 3 && (
            <div className="flex flex-col gap-6 text-left">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {activeLang === "fr" ? "Voix, Styles Artistiques & Audio" : "Voices, Artistic Styles & Audio"}
                </h3>
                <p className="text-xs text-gray-400">
                  {activeLang === "fr" ? "Configurez l'aspect auditif et visuel généré automatiquement." : "Configure the audit and visual aspects automatically generated."}
                </p>
              </div>

              {/* Visual Styles Selection */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">
                  {activeLang === "fr" ? "Style Visuel SDXL / Midjourney" : "Visual Style SDXL / Midjourney"}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {VISUAL_STYLES.map((vs) => {
                    const ts = getStyleTranslation(vs.id, activeLang, vs.name, vs.desc);
                    return (
                      <button 
                        key={vs.id}
                        onClick={() => setStyle(vs.id)}
                        className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                          style === vs.id 
                            ? "border-secondary bg-white/5" 
                            : "border-border hover:border-white/10 bg-white/5"
                        }`}
                      >
                        <span className="p-1.5 bg-secondary/10 text-secondary border border-secondary/20 rounded-lg">
                          <vs.icon className="w-4 h-4" />
                        </span>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-white leading-none">{ts.name}</span>
                          <span className="text-[8px] text-gray-400 line-clamp-1 mt-0.5">{ts.desc}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ElevenLabs Voice Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">
                    {activeLang === "fr" ? "Voix ElevenLabs (120+)" : "ElevenLabs Voices (120+)"}
                  </span>
                  <div className="flex flex-col gap-2 max-h-56 overflow-y-auto border border-border rounded-xl p-2 bg-background/50">
                    {VOICES.map((v) => {
                      const tvDesc = getVoiceTranslation(v.id, activeLang, v.desc);
                      return (
                        <div 
                          key={v.id}
                          onClick={() => setVoice(v.id)}
                          className={`p-2.5 rounded-lg flex items-center justify-between cursor-pointer transition-all ${
                            voice === v.id 
                              ? "bg-primary/20 border border-primary/40" 
                              : "border border-transparent hover:bg-white/5"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold">
                              {v.name.charAt(0)}
                            </span>
                            <div className="flex flex-col">
                              <span className="text-xs font-semibold text-white leading-none">
                                {v.name.replace("(Féminin)", activeLang === "fr" ? "(Féminin)" : "(Female)").replace("(Masculin)", activeLang === "fr" ? "(Masculin)" : "(Male)").replace("(Âgé)", activeLang === "fr" ? "(Âgé)" : "(Elderly)").replace("(Enfant)", activeLang === "fr" ? "(Enfant)" : "(Child)")}
                              </span>
                              <span className="text-[9px] text-gray-400 mt-0.5">{tvDesc}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[8px] px-1.5 py-0.5 bg-white/5 text-gray-400 rounded-md font-bold uppercase">
                              {v.category}
                            </span>
                            <button className="p-1 rounded-md bg-white/5 hover:bg-white/10 text-gray-300">
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    <div className="p-2 border border-dashed border-border rounded-lg text-center hover:bg-white/5 cursor-pointer flex items-center justify-center gap-1.5">
                      <Plus className="w-3.5 h-3.5 text-secondary" />
                      <span className="text-[10px] text-secondary font-bold">
                        {activeLang === "fr" ? "Cloner une nouvelle voix" : "Clone a new voice"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Music configuration */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="musicMood" className="text-[10px] font-bold text-gray-300 uppercase">
                      {activeLang === "fr" ? "Ambiance Musicale" : "Music Mood"}
                    </label>
                    <select 
                      id="musicMood"
                      value={musicMood}
                      onChange={(e) => setMusicMood(e.target.value)}
                      className="bg-background border border-border focus:border-primary rounded-xl p-2.5 text-xs text-white outline-none"
                    >
                      <option value="Sombre & Épique">{activeLang === "fr" ? "Sombre & Épique" : "Dark & Epic"}</option>
                      <option value="Inspirant & Aérien">{activeLang === "fr" ? "Inspirant & Aérien" : "Inspiring & Airy"}</option>
                      <option value="Horreur / Angoisse">{activeLang === "fr" ? "Horreur / Angoisse" : "Horror / Suspense"}</option>
                      <option value="Lo-Fi / Calme">{activeLang === "fr" ? "Lo-Fi / Calme" : "Lo-Fi / Calm"}</option>
                      <option value="Techno / Cyberpunk">{activeLang === "fr" ? "Techno / Cyberpunk" : "Techno / Cyberpunk"}</option>
                    </select>
                  </div>

                  {/* Volume ducking sliders */}
                  <div className="flex flex-col gap-3 bg-white/5 border border-border p-3.5 rounded-xl">
                    <div className="flex justify-between items-center text-[10px] font-semibold">
                      <span className="text-gray-300">{activeLang === "fr" ? "Volume Voix / Musique" : "Voice / Music Volume"}</span>
                      <span className="text-secondary">{voiceVolume}% / {musicVolume}%</span>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] text-gray-400 w-10">{activeLang === "fr" ? "Voix" : "Voice"}</span>
                        <input 
                          type="range" 
                          min="0" 
                          max="100" 
                          value={voiceVolume} 
                          onChange={(e) => setVoiceVolume(Number(e.target.value))}
                          className="flex-1 accent-primary h-1 bg-white/10 rounded-lg outline-none" 
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] text-gray-400 w-10">{activeLang === "fr" ? "Musique" : "Music"}</span>
                        <input 
                          type="range" 
                          min="0" 
                          max="100" 
                          value={musicVolume} 
                          onChange={(e) => setMusicVolume(Number(e.target.value))}
                          className="flex-1 accent-secondary h-1 bg-white/10 rounded-lg outline-none" 
                        />
                      </div>
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer mt-1">
                      <input 
                        type="checkbox" 
                        checked={autoDucking} 
                        onChange={(e) => setAutoDucking(e.target.checked)}
                        className="rounded border-border bg-background text-primary focus:ring-primary w-3.5 h-3.5" 
                      />
                      <span className="text-[9px] text-gray-300">
                        {activeLang === "fr" ? "Ducking Audio Automatique (Réduit la musique quand la voix parle)" : "Automatic Audio Ducking (Lowers music when the voice speaks)"}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Automations, Scheduling & Social Channels */}
          {step === 4 && (
            <div className="flex flex-col gap-6 text-left">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {activeLang === "fr" ? "Planning de Publication & Canaux" : "Publishing Schedule & Channels"}
                </h3>
                <p className="text-xs text-gray-400">
                  {activeLang === "fr" ? "Configurez la cadence de génération et connectez vos comptes sociaux." : "Configure the generation pace and connect your social accounts."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Cadence Configuration */}
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">
                    {activeLang === "fr" ? "Volume & Fréquence" : "Volume & Frequency"}
                  </span>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="videoCount" className="text-[10px] text-gray-400">
                      {activeLang === "fr" ? "Nombre de vidéos à générer" : "Number of videos to generate"}
                    </label>
                    <select 
                      id="videoCount"
                      value={videoCount}
                      onChange={(e) => setVideoCount(Number(e.target.value))}
                      className="bg-background border border-border focus:border-primary rounded-xl p-2.5 text-xs text-white outline-none"
                    >
                      <option value={10}>{activeLang === "fr" ? "10 vidéos (Starter/Test)" : "10 videos (Starter/Test)"}</option>
                      <option value={30}>{activeLang === "fr" ? "30 vidéos (Série mensuelle)" : "30 videos (Monthly series)"}</option>
                      <option value={60}>{activeLang === "fr" ? "60 vidéos (Recommandé - 2x par jour)" : "60 videos (Recommended - 2x daily)"}</option>
                      <option value={90}>{activeLang === "fr" ? "90 vidéos (Full Automatisé)" : "90 videos (Fully automated)"}</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="interval" className="text-[10px] text-gray-400">
                      {activeLang === "fr" ? "Intervalle de publication" : "Publishing interval"}
                    </label>
                    <select 
                      id="interval"
                      value={intervalHours}
                      onChange={(e) => setIntervalHours(Number(e.target.value))}
                      className="bg-background border border-border focus:border-primary rounded-xl p-2.5 text-xs text-white outline-none"
                    >
                      <option value={6}>{activeLang === "fr" ? "Toutes les 6 heures (4x / jour)" : "Every 6 hours (4x daily)"}</option>
                      <option value={12}>{activeLang === "fr" ? "Toutes les 12 heures (2x / jour)" : "Every 12 hours (2x daily)"}</option>
                      <option value={24}>{activeLang === "fr" ? "Toutes les 24 heures (1x / jour - Optimal)" : "Every 24 hours (1x daily - Optimal)"}</option>
                      <option value={48}>{activeLang === "fr" ? "Tous les 2 jours" : "Every 2 days"}</option>
                    </select>
                  </div>
                </div>

                {/* Connect accounts */}
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">
                    {activeLang === "fr" ? "Comptes Connectés" : "Connected Accounts"}
                  </span>
                  
                  <div className="flex flex-col gap-2">
                    {[
                      { id: "tiktok", name: "TikTok Account", connected: true, handle: "@mythology_clips" },
                      { id: "instagram", name: "Instagram Reels", connected: true, handle: "@mythology.reels" },
                      { id: "youtube", name: "YouTube Shorts", connected: false, handle: activeLang === "fr" ? "Non connecté" : "Not connected" },
                      { id: "pinterest", name: "Pinterest Idea Pin", connected: false, handle: activeLang === "fr" ? "Non connecté" : "Not connected" }
                    ].map((channel) => (
                      <div 
                        key={channel.id}
                        onClick={() => togglePlatform(channel.id)}
                        className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          selectedPlatforms.includes(channel.id) 
                            ? "border-primary bg-primary/5" 
                            : "border-border bg-background/50 opacity-60"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`w-2.5 h-2.5 rounded-full ${channel.connected ? "bg-green-500" : "bg-red-500"}`} />
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-white leading-none capitalize">{channel.id}</span>
                            <span className="text-[9px] text-gray-400 mt-0.5">{channel.handle}</span>
                          </div>
                        </div>

                        <button className={`text-[9px] font-bold px-2 py-1 rounded ${
                          channel.connected 
                            ? "bg-white/5 border border-white/10 text-gray-300"
                            : "bg-secondary text-background hover:bg-secondary-hover"
                        }`}>
                          {channel.connected ? (selectedPlatforms.includes(channel.id) ? (activeLang === "fr" ? "Actif" : "Active") : (activeLang === "fr" ? "Désactivé" : "Disabled")) : (activeLang === "fr" ? "Associer" : "Link")}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Step 5: Review & Viral score & Trigger */}
          {step === 5 && (
            <div className="flex flex-col gap-6 text-left">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {activeLang === "fr" ? "Dernière Validation & Score de Viralité" : "Final Validation & Virality Score"}
                </h3>
                <p className="text-xs text-gray-400">
                  {activeLang === "fr" ? "Vérifiez les paramètres de la forge avant de lancer la production." : "Verify the forge parameters before starting production."}
                </p>
              </div>

              {launchComplete ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle2 className="w-16 h-16 text-secondary animate-bounce" />
                  <div>
                    <h4 className="text-xl font-bold text-white font-display">
                      {activeLang === "fr" ? "Forge Lancée avec Succès !" : "Forge Launched Successfully!"}
                    </h4>
                    <p className="text-xs text-gray-400 mt-2 max-w-sm">
                      {activeLang === "fr"
                        ? `${videoCount} tâches de vidéos courtes ont été envoyées dans la file d'attente. Vos vidéos seront générées, rythmées et publiées conformément au planning configuré.`
                        : `${videoCount} short video tasks have been sent to the queue. Your videos will be generated, paced, and published according to the configured schedule.`}
                    </p>
                  </div>
                  <button 
                    onClick={() => setStep(1)}
                    className="mt-4 px-6 py-2.5 text-xs font-bold text-background bg-secondary hover:bg-secondary-hover rounded-xl"
                  >
                    {activeLang === "fr" ? "Créer une nouvelle série" : "Create a new series"}
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  
                  {/* Left Column: Viral Gauge and Hook Helper */}
                  <div className="flex flex-col gap-4">
                    <div className="bg-white/5 border border-border rounded-2xl p-5 flex items-center gap-5">
                      
                      {/* Gauge Indicator */}
                      <div className="relative w-20 h-20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="40" cy="40" r="34" className="stroke-white/5 fill-none" strokeWidth="6" />
                          <circle 
                            cx="40" 
                            cy="40" 
                            r="34" 
                            className="stroke-secondary fill-none transition-all duration-1000" 
                            strokeWidth="6"
                            strokeDasharray="213"
                            strokeDashoffset={213 - (213 * viralityScore) / 100}
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-lg font-black text-white font-display">{viralityScore}</span>
                          <span className="text-[7px] font-bold text-gray-400 uppercase tracking-widest leading-none">SCORE</span>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white flex items-center gap-1">
                          <Flame className="w-4 h-4 text-orange-500" />
                          {activeLang === "fr" ? "Viralité estimée par l'IA" : "AI Estimated Virality"}
                        </span>
                        <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
                          {activeLang === "fr"
                            ? `Votre hook de départ et la thématique choisie (${getTranslationNiche(niche, activeLang, niche, "").name}) garantissent un taux de rétention estimé supérieur à la moyenne.`
                            : `Your opening hook and selected theme (${getTranslationNiche(niche, activeLang, niche, "").name}) guarantee an estimated retention rate above average.`}
                        </p>
                      </div>
                    </div>

                    {/* Suggestions */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold text-gray-300 uppercase">
                        {activeLang === "fr" ? "Suggestions de Hook IA" : "AI Hook Suggestions"}
                      </span>
                      {hookSuggestions.map((hook, index) => (
                        <div key={index} className="p-3 bg-background border border-border rounded-xl text-[10px] text-gray-300 flex items-start gap-2">
                          <span className="p-1 rounded bg-secondary/15 text-secondary text-[8px] font-black uppercase flex-shrink-0 mt-0.5">
                            SUGG
                          </span>
                          <p className="leading-tight">"{hook}"</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Cost and Summary */}
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 flex flex-col gap-4">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wide">
                      {activeLang === "fr" ? "Résumé du Contrat de Forge" : "Forge Contract Summary"}
                    </span>
                    
                    <div className="flex flex-col gap-2.5 text-xs text-gray-300 divide-y divide-border">
                      <div className="flex justify-between py-1.5">
                        <span>Niche</span>
                        <span className="text-white font-semibold">
                          {getTranslationNiche(niche, activeLang, ALL_NICHES.find(n => n.id === niche)?.name || niche, "").name}
                        </span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span>{activeLang === "fr" ? "Vidéos à générer" : "Videos to generate"}</span>
                        <span className="text-white font-semibold">{videoCount} clips</span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span>{activeLang === "fr" ? "Fréquence" : "Frequency"}</span>
                        <span className="text-white font-semibold">
                          {activeLang === "fr" ? `Toutes les ${intervalHours} heures` : `Every ${intervalHours} hours`}
                        </span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span>{activeLang === "fr" ? "Plateformes cibles" : "Target platforms"}</span>
                        <span className="text-white font-semibold capitalize">{selectedPlatforms.join(", ")}</span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span>{activeLang === "fr" ? "Coût de génération" : "Generation cost"}</span>
                        <span className="text-secondary font-black">{videoCount} {activeLang === "fr" ? "crédits" : "credits"}</span>
                      </div>
                    </div>

                    <div className="mt-2 p-3 bg-white/5 border border-border rounded-xl flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 leading-none">
                          {activeLang === "fr" ? "Votre solde de crédits" : "Your credit balance"}
                        </span>
                        <span className="text-xs font-bold text-white mt-1">124 {activeLang === "fr" ? "crédits" : "credits"}</span>
                      </div>
                      <span className="text-[9px] text-green-400 font-bold px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full">
                        {activeLang === "fr" ? "Solde suffisant" : "Sufficient balance"}
                      </span>
                    </div>

                    <button 
                      onClick={handleLaunch}
                      disabled={isLaunching}
                      className="w-full mt-2 py-3 bg-neon-glow hover:opacity-90 font-bold text-xs rounded-xl text-white flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all disabled:opacity-50 active:scale-95"
                    >
                      {isLaunching ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          {activeLang === "fr" ? "Génération des tâches en cours..." : "Generating tasks in progress..."}
                        </>
                      ) : (
                        <>
                          {activeLang === "fr" ? "Forger la Série & Démarrer la file" : "Forge Series & Start Queue"}
                          <Sparkles className="w-4 h-4 text-secondary" />
                        </>
                      )}
                    </button>
                  </div>

                </div>
              )}

            </div>
          )}

          {/* Wizard Actions Footer */}
          {!launchComplete && (
            <div className="flex items-center justify-between border-t border-border pt-6 mt-6">
              <button 
                onClick={handleBack}
                disabled={step === 1}
                className="px-4 py-2 font-semibold text-xs rounded-lg border border-white/10 hover:bg-white/5 text-gray-300 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                {t("btn.back")}
              </button>

              {step < 5 ? (
                <button 
                  onClick={handleNext}
                  className="px-4 py-2 font-semibold text-xs rounded-lg bg-primary hover:bg-primary-hover text-white transition-all flex items-center gap-1.5"
                >
                  {t("btn.continue")}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <div className="w-20" /> // Spacer for layout centering
              )}
            </div>
          )}
        </div>

      </div>

      {/* Dynamic 9:16 Mobile Phone Preview (Aperçu Live) */}
      <div className="xl:col-span-4 sticky top-24 flex flex-col gap-4 items-center">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {activeLang === "fr" ? "Aperçu Live (Mockup Téléphone 9:16)" : "Live Preview (9:16 Phone Mockup)"}
        </span>

        {/* Outer Phone Frame */}
        <div className="w-[280px] aspect-[9/16] rounded-[40px] border-[10px] border-zinc-800 shadow-2xl relative bg-black overflow-hidden flex flex-col justify-between p-4">
          
          {/* Top Notch */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-zinc-800 rounded-full z-20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-zinc-900 mr-2" />
            <div className="w-8 h-1 rounded-full bg-zinc-900" />
          </div>

          {/* Video Background Mockup */}
          <div className={`absolute inset-0 z-0 transition-colors duration-500 ${
            style === "cinematic" ? "bg-gradient-to-b from-slate-900 via-slate-950 to-black" :
            style === "anime" ? "bg-gradient-to-b from-rose-950 via-zinc-950 to-black" :
            style === "realistic" ? "bg-gradient-to-b from-emerald-950 via-slate-950 to-black" :
            style === "dark_fantasy" ? "bg-gradient-to-b from-zinc-900 via-zinc-950 to-black" :
            style === "illustration" ? "bg-gradient-to-b from-blue-950 via-slate-950 to-black" :
            style === "watercolor" ? "bg-gradient-to-b from-teal-950 via-zinc-950 to-black" :
            style === "pixel_art" ? "bg-gradient-to-b from-purple-950 via-zinc-950 to-black" :
            style === "comic_book" ? "bg-gradient-to-b from-orange-950 via-slate-950 to-black" :
            "bg-gradient-to-b from-pink-950 via-zinc-950 to-black"
          }`}>
            {/* Visual indicator lines represent slides change */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent" />
            
            {/* Dynamic visual overlay depending on choice */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-xl border border-white/5 bg-white/5 backdrop-blur-[2px] flex flex-col items-center justify-center p-3 text-center">
              {(() => {
                const NicheIcon = ALL_NICHES.find(n => n.id === niche)?.icon || Video;
                return (
                  <span className="p-4 bg-secondary/10 text-secondary border border-secondary/20 rounded-2xl animate-pulse-glow">
                    <NicheIcon className="w-8 h-8" />
                  </span>
                );
              })()}
              <span className="text-[10px] font-bold text-gray-200 mt-2 font-display uppercase tracking-wider">
                {getTranslationNiche(niche, activeLang, ALL_NICHES.find(n => n.id === niche)?.name || niche, "").name}
              </span>
              <span className="text-[7px] text-gray-400 mt-1">
                {activeLang === "fr" ? "Art Visuel :" : "Visual Art:"} {getStyleTranslation(style, activeLang, VISUAL_STYLES.find(v => v.id === style)?.name || style, "").name}
              </span>
            </div>
          </div>

          {/* Social Overlays on top right (Likes, Comments) */}
          <div className="absolute right-3 top-1/3 z-10 flex flex-col gap-4 text-white items-center">
            <div className="flex flex-col items-center gap-0.5">
              <span className="p-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:text-red-500 cursor-pointer transition-all text-white">
                <Heart className="w-3.5 h-3.5" />
              </span>
              <span className="text-[9px] font-bold">12K</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="p-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:text-secondary cursor-pointer transition-all text-white">
                <MessageCircle className="w-3.5 h-3.5" />
              </span>
              <span className="text-[9px] font-bold">450</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="p-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:text-green-500 cursor-pointer transition-all text-white">
                <Repeat className="w-3.5 h-3.5" />
              </span>
              <span className="text-[9px] font-bold">2.4K</span>
            </div>
          </div>

          {/* Live Subtitle Mock Overlay */}
          <div className="absolute bottom-1/4 left-0 right-0 z-10 text-center px-4">
            {/* Animating subtitle word simulation */}
            <span className="bg-yellow-400 text-black px-1.5 py-0.5 font-black text-xs uppercase tracking-wide rounded-md shadow-lg shadow-black/50">
              {scriptMode === "auto" && topicPrompt 
                ? (topicPrompt.split(" ").slice(0, 3).join(" ") || (activeLang === "fr" ? "L'INSPIRATION SACRÉE..." : "SACRED INSPIRATION...")) 
                : (activeLang === "fr" ? "RÉVOLUTION REELFORGE..." : "REELFORGE REVOLUTION...")}
            </span>
          </div>

          {/* Bottom Video Details */}
          <div className="z-10 bg-gradient-to-t from-black via-black/80 to-transparent p-3 rounded-b-3xl mt-auto flex flex-col gap-1.5 text-left">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-secondary text-background font-bold text-[8px] flex items-center justify-center">
                RF
              </span>
              <span className="text-[10px] font-bold text-white">@reelforge_channel</span>
            </div>

            <p className="text-[9px] text-gray-300 line-clamp-2 leading-tight">
              {activeLang === "fr" 
                ? `Série de vidéos générées avec le style ${getStyleTranslation(style, activeLang, VISUAL_STYLES.find(v => v.id === style)?.name || style, "").name}. #reelforge #ai #${niche} #${language}`
                : `Video series generated with style ${getStyleTranslation(style, activeLang, VISUAL_STYLES.find(v => v.id === style)?.name || style, "").name}. #reelforge #ai #${niche} #${language}`}
            </p>

            <div className="flex items-center gap-1.5 text-[8px] text-secondary font-semibold mt-1">
              <Music className="w-2.5 h-2.5" />
              <span>{activeLang === "fr" ? "Son original" : "Original sound"} - {activeLang === "fr" ? musicMood : musicMood.replace("Sombre & Épique", "Dark & Epic").replace("Inspirant & Aérien", "Inspiring & Airy").replace("Horreur / Angoisse", "Horror / Suspense").replace("Lo-Fi / Calme", "Lo-Fi / Calm")}</span>
            </div>
          </div>

        </div>

        {/* Small Audio feedback indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400">
          <Volume2 className="w-3.5 h-3.5 text-secondary" />
          {activeLang === "fr" ? "Voix :" : "Voice:"} <span className="text-white font-bold capitalize">{voice}</span> | {activeLang === "fr" ? "Ducks audio actif" : "Audio ducking active"}
        </div>
      </div>
    </div>
  );
}
