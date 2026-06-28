"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Sparkles, 
  Play, 
  Flame, 
  Smartphone, 
  Share2, 
  TrendingUp, 
  Check, 
  Sliders, 
  Zap, 
  Globe, 
  User, 
  ShieldCheck,
  Scroll,
  Ghost,
  Coins,
  Brain,
  Atom
} from "lucide-react";

// Featured niches for onboarding
const NICHES = [
  { id: "bible", name: "Histoires Bibliques", icon: Scroll, desc: "Récits épiques et inspirants" },
  { id: "mythology", name: "Mythologie", icon: Zap, desc: "Légendes grecques et nordiques" },
  { id: "horror", name: "Horreur & Mystère", icon: Ghost, desc: "Histoires sombres de creepypasta" },
  { id: "finance", name: "Finance & Richesse", icon: Coins, desc: "Conseils d'investissement rapides" },
  { id: "motivation", name: "Développement Personnel", icon: Brain, desc: "Citations de croissance mentale" },
  { id: "science", name: "Tech & Science", icon: Atom, desc: "Explications de faits fascinants" },
];

// Art styles for onboarding
const STYLES = [
  { id: "cinematic", name: "Cinématique", desc: "Rendus 3D ultra-détaillés", class: "bg-gradient-to-tr from-purple-950 to-indigo-900" },
  { id: "anime", name: "Anime Japonais", desc: "Style manga et cell-shading", class: "bg-gradient-to-tr from-rose-950 to-orange-900" },
  { id: "realistic", name: "Photoréaliste", desc: "Rendu caméra réel de haute qualité", class: "bg-gradient-to-tr from-emerald-950 to-teal-900" },
  { id: "dark_fantasy", name: "Dark Fantasy", desc: "Ambiance gothique et mystique", class: "bg-gradient-to-tr from-slate-950 to-zinc-800" },
];

// 8 self-playing video mockups
const DEMO_VIDEOS = [
  { id: 1, title: "L'Ombre d'Anubis", niche: "Mythologie", color: "from-amber-950/60 to-black", views: "1.2M", duration: "30s" },
  { id: 2, title: "L'Arche Perdue", niche: "Histoires Bibliques", color: "from-blue-950/60 to-black", views: "840K", duration: "45s" },
  { id: 3, title: "5 Lois Secrètes de l'Argent", niche: "Finance", color: "from-emerald-950/60 to-black", views: "3.4M", duration: "15s" },
  { id: 4, title: "La Théorie du Multivers", niche: "Science", color: "from-indigo-950/60 to-black", views: "920K", duration: "60s" },
  { id: 5, title: "L'Hôtel Maudit d'Haïti", niche: "Horreur", color: "from-red-950/60 to-black", views: "1.5M", duration: "30s" },
  { id: 6, title: "Esprit Inarrêtable", niche: "Motivation", color: "from-orange-950/60 to-black", views: "4.1M", duration: "15s" },
  { id: 7, title: "L'Empire de l'IA", niche: "Tech", color: "from-cyan-950/60 to-black", views: "710K", duration: "30s" },
  { id: 8, title: "Le Secret des Samouraïs", niche: "Histoire", color: "from-rose-950/60 to-black", views: "2.3M", duration: "45s" },
];

export default function LandingPage() {
  const { language, toggleLanguage, t } = useLanguage();

  const getNicheName = (id: string) => {
    if (language === "en") {
      switch (id) {
        case "bible": return "Biblical Stories";
        case "mythology": return "Mythology";
        case "horror": return "Horror & Mystery";
        case "finance": return "Finance & Wealth";
        case "motivation": return "Personal Development";
        case "science": return "Tech & Science";
        default: return "";
      }
    }
    return NICHES.find(n => n.id === id)?.name || "";
  };

  const getNicheDesc = (id: string) => {
    if (language === "en") {
      switch (id) {
        case "bible": return "Epic and inspiring tales";
        case "mythology": return "Greek and Norse legends";
        case "horror": return "Dark creepypasta stories";
        case "finance": return "Quick investment tips";
        case "motivation": return "Mental growth quotes";
        case "science": return "Fascinating facts explained";
        default: return "";
      }
    }
    return NICHES.find(n => n.id === id)?.desc || "";
  };

  const getStyleName = (id: string) => {
    if (language === "en") {
      switch (id) {
        case "cinematic": return "Cinematic";
        case "anime": return "Japanese Anime";
        case "realistic": return "Photorealistic";
        case "dark_fantasy": return "Dark Fantasy";
        default: return "";
      }
    }
    return STYLES.find(s => s.id === id)?.name || "";
  };

  const getStyleDesc = (id: string) => {
    if (language === "en") {
      switch (id) {
        case "cinematic": return "Ultra-detailed 3D renders";
        case "anime": return "Manga and cell-shading style";
        case "realistic": return "High-quality real camera render";
        case "dark_fantasy": return "Gothic and mystique vibe";
        default: return "";
      }
    }
    return STYLES.find(s => s.id === id)?.desc || "";
  };
  // Onboarding Step State (1: Niche, 2: Style, 3: Script/Prompt)
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [selectedNiche, setSelectedNiche] = useState("bible");
  const [selectedStyle, setSelectedStyle] = useState("cinematic");
  const [customPrompt, setCustomPrompt] = useState("");
  const [loadingOnboarding, setLoadingOnboarding] = useState(false);
  const [demoActive, setDemoActive] = useState<number | null>(null);

  const handleNextStep = () => {
    setOnboardingStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setOnboardingStep((prev) => prev - 1);
  };

  const handleCreateVideoDraft = () => {
    setLoadingOnboarding(true);
    setTimeout(() => {
      setLoadingOnboarding(false);
      // Redirect to dashboard with pre-filled settings in localStorage
      localStorage.setItem("reelforge_draft_niche", selectedNiche);
      localStorage.setItem("reelforge_draft_style", selectedStyle);
      localStorage.setItem("reelforge_draft_prompt", customPrompt);
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-background">
      {/* Background radial gradients for premium feel */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-border/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="ReelForge AI Logo" className="w-8 h-8 rounded-lg border border-primary/20" />
            <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
              {t("app.name")}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
            <a href="#features" className="hover:text-secondary transition-colors">
              {language === "fr" ? "Fonctionnalités" : "Features"}
            </a>
            <a href="#onboarding" className="hover:text-secondary transition-colors">
              {language === "fr" ? "Créer en 5min" : "Create in 5m"}
            </a>
            <a href="#comparison" className="hover:text-secondary transition-colors">
              {language === "fr" ? "Comparatif" : "Comparison"}
            </a>
            <a href="#pricing" className="hover:text-secondary transition-colors">
              {language === "fr" ? "Tarifs" : "Pricing"}
            </a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white rounded-xl text-xs font-bold transition-all"
              title={language === "fr" ? "Switch to English" : "Passer en Français"}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase">{language === "fr" ? "EN" : "FR"}</span>
            </button>

            <Link href="/dashboard" className="text-sm text-gray-300 hover:text-white transition-colors">
              {t("btn.connect")}
            </Link>
            <Link 
              href="/dashboard" 
              className="px-4 py-2 text-sm font-semibold rounded-xl bg-neon-glow hover:opacity-90 active:scale-95 transition-all text-white shadow-lg shadow-primary/25"
            >
              {language === "fr" ? "Lancer l'App" : "Launch App"}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero & Video Grid Showcase */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs text-secondary font-medium w-fit">
            <Flame className="w-4 h-4 text-secondary animate-bounce" />
            {language === "fr" ? "Révolution AI de la Vidéo Courte v1.0" : "AI Short Video Revolution v1.0"}
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight">
            {language === "fr" ? "Dominez TikTok & " : "Dominate TikTok & "}<span className="text-gradient">{language === "fr" ? "Reels sans visage" : "Faceless Reels"}</span>{language === "fr" ? " grâce à l'IA" : " with AI"}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            {language === "fr" ? "ReelForge AI planifie, écrit, vocalise, illustre, sous-titre et publie en automatique des séries entières de vidéos courtes haut de gamme. Plus de caméras, plus de micros, juste de la croissance organique." : "ReelForge AI schedules, writes, voices, illustrates, subtitles and auto-posts entire series of premium short-form videos. No cameras, no mics, just pure organic growth."}
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a 
              href="#onboarding" 
              className="px-6 py-3.5 font-bold rounded-xl bg-neon-glow hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 text-white shadow-xl shadow-primary/25"
            >
              {language === "fr" ? "Générer ma première vidéo" : "Generate my first video"}
              <Sparkles className="w-4 h-4" />
            </a>
            <a 
              href="#pricing" 
              className="px-6 py-3.5 font-semibold rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white"
            >
              {language === "fr" ? "Découvrir les Tarifs" : "See Pricing"}
            </a>
          </div>

          <div className="flex items-center gap-6 mt-4 text-xs text-gray-500 border-t border-border pt-6">
            <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-primary" /> 40+ {language === "fr" ? "Langues supportées" : "Languages supported"}</span>
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-secondary" /> 120+ {language === "fr" ? "Voix de synthèse" : "Synthesis voices"}</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-accent-pink" /> {language === "fr" ? "Pas de copyright" : "Copyright free"}</span>
          </div>
        </div>

        {/* 8 self-playing examples showcase */}
        <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 bg-card/40 p-4 rounded-3xl border border-border/60 shadow-2xl relative">
          <div className="absolute -top-3 -right-3 px-3 py-1 bg-accent-cyan text-background text-xs font-black rounded-lg uppercase tracking-wider shadow-md">
            {language === "fr" ? "Cliquez pour tester" : "Click to test"}
          </div>
          {DEMO_VIDEOS.map((video) => (
            <div 
              key={video.id}
              onClick={() => setDemoActive(demoActive === video.id ? null : video.id)}
              className={`aspect-[9/16] rounded-xl overflow-hidden cursor-pointer relative border transition-all duration-300 ${
                demoActive === video.id 
                  ? "ring-2 ring-secondary border-transparent scale-105 shadow-xl shadow-secondary/20" 
                  : "border-border/80 hover:border-primary/50 hover:scale-[1.02]"
              } bg-gradient-to-b ${video.color}`}
            >
              {/* Fake Video Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-3 z-10">
                <span className="px-2 py-0.5 rounded bg-black/50 text-[10px] text-gray-300 font-semibold w-fit border border-white/10">
                  {video.niche}
                </span>

                <div className="flex flex-col gap-1">
                  <p className="text-[11px] font-bold text-white leading-tight font-display">
                    {video.title}
                  </p>
                  <div className="flex items-center justify-between text-[9px] text-gray-400 mt-1">
                    <span className="flex items-center gap-0.5"><Play className="w-2.5 h-2.5 text-secondary" /> {video.views}</span>
                    <span>{video.duration}</span>
                  </div>
                </div>
              </div>

              {/* Simulation of playing video */}
              {demoActive === video.id ? (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center animate-ping absolute" />
                  <div className="w-8 h-8 rounded-full bg-secondary/80 text-background flex items-center justify-center z-20">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  {/* Dynamic subtitle words simulation */}
                  <div className="absolute bottom-1/3 left-0 right-0 text-center px-2">
                    <span className="bg-yellow-400 text-black px-1.5 py-0.5 font-black text-xs uppercase tracking-wide rounded">
                      RÉALITÉ DU SUCCÈS
                    </span>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Onboarding Interactive Section */}
      <section id="onboarding" className="py-20 border-y border-border/60 bg-card/20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center flex flex-col gap-4 mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Générez votre première vidéo en <span className="text-secondary">{language === "fr" ? "3 étapes" : "3 steps"}</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              {language === "fr" ? "Pas d'inscription requise pour commencer. Configurez vos paramètres ci-dessous." : "No signup required to start. Configure your settings below."}
            </p>

            {/* Stepper progress */}
            <div className="flex justify-center items-center gap-3 mt-4">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${onboardingStep >= 1 ? "bg-primary text-white" : "bg-white/5 text-gray-500"}`}>1</span>
              <span className="w-12 h-0.5 bg-border" />
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${onboardingStep >= 2 ? "bg-primary text-white" : "bg-white/5 text-gray-500"}`}>2</span>
              <span className="w-12 h-0.5 bg-border" />
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${onboardingStep >= 3 ? "bg-primary text-white" : "bg-white/5 text-gray-500"}`}>3</span>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 border border-border relative overflow-hidden shadow-2xl">
            {/* Step 1: Niche Selector */}
            {onboardingStep === 1 && (
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{language === "fr" ? "Étape 1 : Choisissez votre thématique (Niche)" : "Step 1: Choose your topic (Niche)"}</h3>
                  <p className="text-xs text-gray-400">{language === "fr" ? "Sélectionnez la catégorie qui captivera votre audience cible." : "Select the category that will captivate your target audience."}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {NICHES.map((niche) => {
                    const NicheIcon = niche.icon;
                    return (
                      <div 
                        key={niche.id}
                        onClick={() => setSelectedNiche(niche.id)}
                        className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                          selectedNiche === niche.id 
                            ? "border-primary bg-primary/10 shadow-lg shadow-primary/5" 
                            : "border-border hover:border-white/20 bg-white/5"
                        }`}
                      >
                        <span className="p-2.5 bg-primary/10 text-primary border border-primary/20 rounded-xl w-fit block mb-2">
                          <NicheIcon className="w-5 h-5" />
                        </span>
                        <p className="text-sm font-bold text-white">{getNicheName(niche.id)}</p>
                        <p className="text-[10px] text-gray-400 mt-1 line-clamp-1">{getNicheDesc(niche.id)}</p>
                      </div>
                    );
                  })}
                </div>

                <button 
                  onClick={handleNextStep}
                  className="w-full mt-4 py-3 font-semibold rounded-xl bg-primary hover:bg-primary-hover active:scale-[0.98] transition-all text-white flex items-center justify-center gap-2"
                >
                  {language === "fr" ? "Continuer" : "Continue"}
                  <Zap className="w-4 h-4 text-secondary" />
                </button>
              </div>
            )}

            {/* Step 2: Art Style Selector */}
            {onboardingStep === 2 && (
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{language === "fr" ? "Étape 2 : Déterminez le Style Artistique" : "Step 2: Choose Artistic Style"}</h3>
                  <p className="text-xs text-gray-400">{language === "fr" ? "Définissez le style visuel généré automatiquement par SDXL." : "Define the visual style automatically generated by SDXL."}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {STYLES.map((style) => (
                    <div 
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`p-5 rounded-2xl border text-left cursor-pointer transition-all relative overflow-hidden ${
                        selectedStyle === style.id 
                          ? "border-secondary scale-[1.01]" 
                          : "border-border hover:border-white/20"
                      } ${style.class}`}
                    >
                      <div className="absolute inset-0 bg-black/60 z-0" />
                      <div className="relative z-10 flex flex-col justify-between h-full">
                        <div>
                          <p className="text-base font-bold text-white">{getStyleName(style.id)}</p>
                          <p className="text-xs text-gray-300 mt-1">{getStyleDesc(style.id)}</p>
                        </div>
                        {selectedStyle === style.id && (
                          <span className="absolute bottom-4 right-4 p-1 rounded-full bg-secondary text-background">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-4">
                  <button 
                    onClick={handlePrevStep}
                    className="flex-1 py-3 font-semibold rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all"
                  >
                    {language === "fr" ? "Retour" : "Back"}
                  </button>
                  <button 
                    onClick={handleNextStep}
                    className="flex-1 py-3 font-semibold rounded-xl bg-primary hover:bg-primary-hover active:scale-[0.98] transition-all text-white"
                  >
                    {language === "fr" ? "Continuer" : "Continue"}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Script Topic & Trigger */}
            {onboardingStep === 3 && (
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{language === "fr" ? "Étape 3 : Donnez un sujet d'inspiration à l'IA" : "Step 3: Give an inspiration topic to the AI"}</h3>
                  <p className="text-xs text-gray-400">{language === "fr" ? "Le script complet et accrocheur sera forgé par Gemini API." : "The complete and catchy script will be forged by Gemini API."}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="topic-input" className="text-xs font-bold text-gray-300 uppercase tracking-wide">
                    {language === "fr" ? "Sujet ou Hook initial" : "Topic or Initial Hook"}
                  </label>
                  <textarea 
                    id="topic-input"
                    placeholder={language === "fr" ? "Ex: Le mystère du trésor caché du roi Salomon... ou L'histoire tragique de la citadelle Laferrière." : "E.g., The mystery of King Solomon's hidden treasure... or The tragic history of the Laferriere citadel."}
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    rows={4}
                    className="w-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-2xl p-4 text-sm outline-none resize-none text-white transition-colors"
                  />
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary">
                    <Sparkles className="w-4 h-4 text-secondary" />
                    {language === "fr" ? "RÉSUMÉ DU WORKFLOW DE DRAFT" : "DRAFT WORKFLOW SUMMARY"}
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {language === "fr" ? "Niche choisie" : "Chosen niche"} : <span className="text-white font-bold">{getNicheName(selectedNiche)}</span>. 
                    {language === "fr" ? "Style visuel" : "Visual style"} : <span className="text-white font-bold">{getStyleName(selectedStyle)}</span>.
                    {language === "fr" ? "La vidéo sera générée automatiquement sur votre tableau de bord après validation." : "The video will be automatically generated on your dashboard after validation."}
                  </p>
                </div>

                <div className="flex gap-3 mt-2">
                  <button 
                    onClick={handlePrevStep}
                    disabled={loadingOnboarding}
                    className="flex-1 py-3 font-semibold rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white disabled:opacity-50 transition-all"
                  >
                    Retour
                  </button>
                  <button 
                    id="generate-draft-btn"
                    onClick={handleCreateVideoDraft}
                    disabled={loadingOnboarding}
                    className="flex-[2] py-3 font-bold rounded-xl bg-neon-glow hover:opacity-90 active:scale-[0.98] text-white disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all"
                  >
                    {loadingOnboarding ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {language === "fr" ? "Génération du draft..." : "Generating draft..."}
                      </>
                    ) : (
                      <>
                        {language === "fr" ? "Forgé la vidéo avec l'IA" : "Forge video with AI"}
                        <Sparkles className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Comparison Section (ReelForge AI vs FacelessReels) */}
      <section id="comparison" className="py-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gradient">
            ReelForge AI vs FacelessReels
          </h2>
          <p className="text-gray-400 text-sm mt-3">
            {language === "fr" ? "Pourquoi notre forge technologique est-elle supérieure sur chaque dimension ?" : "Why is our technology forge superior in every dimension?"}
          </p>
        </div>

        <div className="glass-panel rounded-3xl overflow-hidden border border-border/80 shadow-xl">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-white/5 border-b border-border/80 text-gray-300 font-display">
                <th className="p-4 sm:p-5 font-bold">{language === "fr" ? "Fonctionnalités clés" : "Key Features"}</th>
                <th className="p-4 sm:p-5 font-bold text-primary">ReelForge AI</th>
                <th className="p-4 sm:p-5 font-bold text-gray-400">FacelessReels</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-white">{language === "fr" ? "Éditeur de Timeline dans le navigateur" : "In-browser Timeline Editor"}</td>
                <td className="p-4 sm:p-5 text-secondary font-semibold flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-secondary stroke-[3]" /> {language === "fr" ? "Oui (Drag-and-Drop)" : "Yes (Drag-and-Drop)"}
                </td>
                <td className="p-4 sm:p-5 text-gray-500">{language === "fr" ? "Non (Rendu figé)" : "No (Frozen render)"}</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-white">{language === "fr" ? "Clonage de voix (Voice Cloning)" : "Voice Cloning"}</td>
                <td className="p-4 sm:p-5 text-secondary font-semibold flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-secondary stroke-[3]" /> {language === "fr" ? "Oui (ElevenLabs + Custom)" : "Yes (ElevenLabs + Custom)"}
                </td>
                <td className="p-4 sm:p-5 text-gray-500">{language === "fr" ? "Non (Voix standards uniquement)" : "No (Standard voices only)"}</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-white">{language === "fr" ? "Score de viralité prédictif & Hook Helper" : "Predictive Virality Score & Hook Helper"}</td>
                <td className="p-4 sm:p-5 text-secondary font-semibold flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-secondary stroke-[3]" /> {language === "fr" ? "Oui (Score 0-100 & suggestions)" : "Yes (0-100 Score & tips)"}
                </td>
                <td className="p-4 sm:p-5 text-gray-500">Non</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-white">{language === "fr" ? "Séries automatisées planifiées" : "Scheduled Automated Series"}</td>
                <td className="p-4 sm:p-5 text-secondary font-semibold flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-secondary stroke-[3]" /> {language === "fr" ? "Oui (30/60/90 jours d'un coup)" : "Yes (30/60/90 days at once)"}
                </td>
                <td className="p-4 sm:p-5 text-gray-500">{language === "fr" ? "Manuel à l'unité" : "Manual single runs"}</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-white">{language === "fr" ? "Publication automatique multi-canal" : "Multi-channel Auto-publishing"}</td>
                <td className="p-4 sm:p-5 text-secondary font-semibold flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-secondary stroke-[3]" /> {language === "fr" ? "6 Plateformes (TikTok, Insta, YT...)" : "6 Platforms (TikTok, Insta, YT...)"}
                </td>
                <td className="p-4 sm:p-5 text-gray-500">{language === "fr" ? "2 Plateformes max" : "2 Platforms max"}</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-white">{language === "fr" ? "Marketplace de Templates créateurs" : "Creator Template Marketplace"}</td>
                <td className="p-4 sm:p-5 text-secondary font-semibold flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-secondary stroke-[3]" /> {language === "fr" ? "Oui (Gagnez des crédits)" : "Yes (Earn credits)"}
                </td>
                <td className="p-4 sm:p-5 text-gray-500">Non</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 border-t border-border/60 bg-gradient-to-b from-transparent to-card/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center flex flex-col gap-3 mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              {language === "fr" ? "Une tarification claire, sans coûts cachés" : "Clear Pricing, No Hidden Fees"}
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              {language === "fr" ? "Choisissez le plan adapté à vos ambitions et commencez à publier en continu." : "Choose the plan adapted to your ambitions and start posting continuously."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Starter */}
            <div className="glass-panel p-6 rounded-3xl flex flex-col justify-between border border-border hover:border-primary/20 transition-all text-left">
              <div>
                <h3 className="font-display font-bold text-lg text-gray-300">STARTER</h3>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-3xl font-extrabold text-white font-display">$9</span>
                  <span className="text-xs text-gray-400">/mois</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">{language === "fr" ? "Parfait pour tester le concept." : "Perfect for testing the concept."}</p>
                <div className="h-px bg-border/50 my-5" />
                <ul className="flex flex-col gap-3 text-xs text-gray-300">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> 10 {language === "fr" ? "vidéos / mois" : "videos / month"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> 2 {language === "fr" ? "canaux connectés" : "channels connected"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Styles de base (5)" : "Basic styles (5)"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Voix standard (20)" : "Standard voices (20)"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Résolution 720p" : "720p Resolution"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Auto-post 2 plateformes" : "Auto-post 2 platforms"}</li>
                </ul>
              </div>
              <Link href="/dashboard" className="w-full mt-8 py-2.5 text-center font-bold text-xs rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all">
                {language === "fr" ? "Démarrer Starter" : "Start Starter"}
              </Link>
            </div>

            {/* Creator */}
            <div className="glass-panel p-6 rounded-3xl flex flex-col justify-between border-2 border-primary relative shadow-xl shadow-primary/5 text-left">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-0.5 bg-primary text-white text-[10px] font-black rounded-full uppercase tracking-wider">
                {language === "fr" ? "Le plus populaire" : "Most Popular"}
              </span>
              <div>
                <h3 className="font-display font-bold text-lg text-primary">CREATOR</h3>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-3xl font-extrabold text-white font-display">$29</span>
                  <span className="text-xs text-gray-400">/mois</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">{language === "fr" ? "Pour les créateurs réguliers." : "For regular creators."}</p>
                <div className="h-px bg-border/50 my-5" />
                <ul className="flex flex-col gap-3 text-xs text-gray-300">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> 50 {language === "fr" ? "vidéos / mois" : "videos / month"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> 6 {language === "fr" ? "canaux connectés" : "channels connected"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Tous les styles visuels" : "All visual styles"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "80+ voix ElevenLabs" : "80+ ElevenLabs voices"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "1080p + Séries automatiques" : "1080p + Automated series"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Auto-post toutes plateformes" : "Auto-post all platforms"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Analytics basiques" : "Basic analytics"}</li>
                </ul>
              </div>
              <Link href="/dashboard" className="w-full mt-8 py-2.5 text-center font-bold text-xs rounded-xl bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/20 transition-all">
                {language === "fr" ? "Démarrer Creator" : "Start Creator"}
              </Link>
            </div>

            {/* Pro */}
            <div className="glass-panel p-6 rounded-3xl flex flex-col justify-between border border-border hover:border-primary/20 transition-all text-left">
              <div>
                <h3 className="font-display font-bold text-lg text-gray-300">PRO</h3>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-3xl font-extrabold text-white font-display">$79</span>
                  <span className="text-xs text-gray-400">/mois</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">{language === "fr" ? "Pour les influenceurs et professionnels." : "For influencers and professionals."}</p>
                <div className="h-px bg-border/50 my-5" />
                <ul className="flex flex-col gap-3 text-xs text-gray-300">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Vidéos illimitées" : "Unlimited videos"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> 20 {language === "fr" ? "canaux + Multi-clients" : "channels + Multi-clients"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Clone de voix personnalisé" : "Custom voice cloning"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Image-to-video (Runway ML)" : "Image-to-video (Runway ML)"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Analytics avancés & A/B Testing" : "Advanced analytics & A/B Testing"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Éditeur de timeline complet" : "Full timeline editor"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Accès API complet" : "Full API access"}</li>
                </ul>
              </div>
              <Link href="/dashboard" className="w-full mt-8 py-2.5 text-center font-bold text-xs rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all">
                {language === "fr" ? "Démarrer Pro" : "Start Pro"}
              </Link>
            </div>

            {/* Agence */}
            <div className="glass-panel p-6 rounded-3xl flex flex-col justify-between border border-border hover:border-primary/20 transition-all text-left">
              <div>
                <h3 className="font-display font-bold text-lg text-gray-300">AGENCE</h3>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-3xl font-extrabold text-white font-display">$199</span>
                  <span className="text-xs text-gray-400">/mois</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">{language === "fr" ? "Pour les agences et syndicats de médias." : "For agencies and media syndicates."}</p>
                <div className="h-px bg-border/50 my-5" />
                <ul className="flex flex-col gap-3 text-xs text-gray-300">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Tout Pro x 5 clients" : "All Pro x 5 clients"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Dashboard client en marque blanche" : "White-label client dashboard"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Rapports PDF automatiques" : "Automated PDF reports"}</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-secondary" /> {language === "fr" ? "Support dédié 24/7" : "24/7 Dedicated Support"}</li>
                </ul>
              </div>
              <Link href="/dashboard" className="w-full mt-8 py-2.5 text-center font-bold text-xs rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all">
                {language === "fr" ? "Démarrer Agence" : "Start Agency"}
              </Link>
            </div>
          </div>

          {/* Credits à la carte */}
          <div className="mt-12 bg-card/40 border border-border rounded-3xl p-6 max-w-2xl mx-auto text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-start gap-4">
              <span className="p-3 bg-secondary/10 text-secondary border border-secondary/20 rounded-2xl">
                <Sliders className="w-6 h-6" />
              </span>
              <div>
                <h4 className="font-bold text-white text-base">{language === "fr" ? "Recharges de crédits à la carte" : "On-demand credit top-ups"}</h4>
                <p className="text-xs text-gray-400 mt-1 max-w-sm">
                  {language === "fr" ? "Pas besoin de s'abonner pour faire du rab. Achetez des crédits quand vous le souhaitez. 1 crédit = 1 vidéo ($0.80)." : "No subscription required to top up. Buy credits whenever you want. 1 credit = 1 video ($0.80)."}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-end w-full sm:w-auto">
              <span className="text-lg font-extrabold text-white font-display">$35 / 50 {language === "fr" ? "crédits" : "credits"}</span>
              <button className="w-full sm:w-auto px-5 py-2 text-xs font-bold rounded-xl bg-secondary hover:bg-secondary-hover text-background active:scale-95 transition-all">
                {language === "fr" ? "Acheter" : "Buy"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border/80 py-10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} ReelForge AI. {t("land.footer.copyright")}
          </div>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-gray-300">{t("land.footer.terms")}</Link>
            <Link href="/security" className="hover:text-gray-300">{t("land.footer.security")}</Link>
            <Link href="/docs" className="hover:text-gray-300">{t("land.footer.docs")}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
