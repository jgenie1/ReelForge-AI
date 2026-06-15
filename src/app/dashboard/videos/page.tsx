"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Sparkles, 
  Video, 
  HelpCircle, 
  Flame, 
  Clock, 
  Globe, 
  Volume2, 
  Play, 
  Download, 
  AlertCircle, 
  ArrowRight,
  Plus,
  Tv,
  CheckCircle2,
  ListRestart
} from "lucide-react";

const NICHES = [
  { id: "bible", name: "Histoires Bibliques", desc: "Récits épiques de la Bible" },
  { id: "mythology", name: "Mythologie", desc: "Dieux grecs, nordiques, égyptiens" },
  { id: "horror", name: "Horreur & Creepypasta", desc: "Histoires sombres et mystérieuses" },
  { id: "finance", name: "Finance & Richesse", desc: "Conseils de croissance financière" },
  { id: "motivation", name: "Motivation Extrême", desc: "Mentalité et citations d'acier" },
  { id: "science", name: "Tech & Science", desc: "Explications de faits insolites" },
];

const VISUAL_STYLES = [
  { id: "cinematic", name: "Cinématique SDXL", desc: "Rendus 3D grand écran" },
  { id: "anime", name: "Anime Japonais", desc: "Style manga dynamique" },
  { id: "realistic", name: "Photoréaliste", desc: "Images ultra-détail" },
  { id: "dark_fantasy", name: "Dark Fantasy", desc: "Ambiance gothique" },
];

const VOICES = [
  { id: "sarah", name: "Sarah", type: "Envoûtante & Narration", gender: "Féminin" },
  { id: "antoine", name: "Antoine", type: "Grave & Mystérieux", gender: "Masculin" },
  { id: "clara", name: "Clara", type: "Énergique & Promo", gender: "Féminin" },
  { id: "jean", name: "Jean", type: "Historien Raconteur", gender: "Masculin" }
];

const LANGUAGES = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ht", name: "Kreyòl Ayisyen", flag: "🇭🇹" },
];

const TONES = ["Mystérieux", "Dramatique", "Énergique", "Inspirant", "Éducationnel"];

const DURATIONS = [
  { value: 15, label: "15 secondes (Très court)" },
  { value: 30, label: "30 secondes (Standard)" },
  { value: 45, label: "45 secondes (Narratif)" },
  { value: 60, label: "60 secondes (Profond)" }
];

export default function SingleVideoGenerator() {
  const { language: currentLang, t } = useLanguage();
  // Form State
  const [niche, setNiche] = useState("bible");
  const [style, setStyle] = useState("cinematic");
  const [voice, setVoice] = useState("sarah");
  const [language, setLanguage] = useState("fr");
  const [tone, setTone] = useState("Mystérieux");
  const [duration, setDuration] = useState(30);
  const [scriptMode, setScriptMode] = useState<"auto" | "custom">("auto");
  const [topicPrompt, setTopicPrompt] = useState("");
  const [customScript, setCustomScript] = useState("");
  
  // Execution State
  const [isForging, setIsForging] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [videoStatus, setVideoStatus] = useState<string>("PENDING");
  const [renderedUrl, setRenderedUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [viralScore, setViralScore] = useState<number | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const getTranslationNiche = (n: any, lang: string) => {
    if (lang === "fr") return n;
    switch (n.id) {
      case "bible": return { ...n, name: "Biblical Stories", desc: "Epic biblical stories" };
      case "mythology": return { ...n, name: "Mythology", desc: "Greek, Norse, Egyptian gods" };
      case "horror": return { ...n, name: "Horror & Creepypasta", desc: "Dark and mysterious tales" };
      case "finance": return { ...n, name: "Finance & Wealth", desc: "Financial growth advice" };
      case "motivation": return { ...n, name: "Extreme Motivation", desc: "Steely mindset and quotes" };
      case "science": return { ...n, name: "Tech & Science", desc: "Explanations of unusual facts" };
      default: return n;
    }
  };

  const getTranslationStyle = (s: any, lang: string) => {
    if (lang === "fr") return s;
    switch (s.id) {
      case "cinematic": return { ...s, name: "Cinematic SDXL", desc: "Widescreen dark 3D renders" };
      case "anime": return { ...s, name: "Japanese Anime", desc: "Dynamic manga style" };
      case "realistic": return { ...s, name: "Photorealistic", desc: "Ultra-detailed images" };
      case "dark_fantasy": return { ...s, name: "Dark Fantasy", desc: "Gothic environment" };
      default: return s;
    }
  };

  const getTranslationVoice = (v: any, lang: string) => {
    if (lang === "fr") return v;
    switch (v.id) {
      case "sarah": return { ...v, name: "Sarah", type: "Haunting & Narrative", gender: "Female" };
      case "antoine": return { ...v, name: "Antoine", type: "Deep & Mysterious", gender: "Male" };
      case "clara": return { ...v, name: "Clara", type: "Energetic & Promo", gender: "Female" };
      case "jean": return { ...v, name: "Jean", type: "History Storyteller", gender: "Male" };
      default: return v;
    }
  };

  const getTranslationTone = (toneName: string, lang: string) => {
    if (lang === "fr") return toneName;
    switch (toneName) {
      case "Mystérieux": return "Mysterious";
      case "Dramatique": return "Dramatic";
      case "Énergique": return "Energetic";
      case "Inspirant": return "Inspiring";
      case "Éducationnel": return "Educational";
      default: return toneName;
    }
  };

  const getTranslationDuration = (d: any, lang: string) => {
    if (lang === "fr") return d;
    switch (d.value) {
      case 15: return { ...d, label: "15 seconds (Very short)" };
      case 30: return { ...d, label: "30 seconds (Standard)" };
      case 45: return { ...d, label: "45 seconds (Narrative)" };
      case 60: return { ...d, label: "60 seconds (Deep)" };
      default: return d;
    }
  };

  // Polling for progress
  useEffect(() => {
    if (!videoId || !isForging) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/videos/${videoId}/status`);
        if (!res.ok) throw new Error("Impossible de récupérer le statut");
        
        const data = await res.json();
        setProgress(data.progress || 0);
        setVideoStatus(data.status);

        if (data.status === "COMPLETED") {
          setRenderedUrl(data.videoUrl);
          setViralScore(data.viralScore);
          setSuggestions(data.suggestions || []);
          setIsForging(false);
          clearInterval(interval);
        } else if (data.status === "FAILED") {
          setErrorMsg(data.error || "La génération a échoué.");
          setIsForging(false);
          clearInterval(interval);
        }
      } catch (err: any) {
        console.error("Polling error:", err);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [videoId, isForging]);

  const handleForge = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsForging(true);
    setErrorMsg(null);
    setRenderedUrl(null);
    setProgress(0);
    setVideoStatus("PENDING");

    try {
      const res = await fetch("/api/videos/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: scriptMode === "auto" ? topicPrompt : undefined,
          niche,
          tone,
          duration,
          language,
          style,
          voice,
          customScript: scriptMode === "custom" ? customScript : undefined
        })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Une erreur est survenue lors de l'appel API.");
      }

      const data = await res.json();
      setVideoId(data.videoId);
    } catch (err: any) {
      setErrorMsg(err.message || "Erreur de connexion serveur.");
      setIsForging(false);
    }
  };

  const getStepText = () => {
    switch (videoStatus) {
      case "PENDING": return currentLang === "fr" ? "Initialisation de la tâche..." : "Initializing task...";
      case "SCRIPT_DONE": return currentLang === "fr" ? "Script rédigé par Claude... Génération de la voix..." : "Script written by Claude... Generating voice...";
      case "VOICE_DONE": return currentLang === "fr" ? "Voix ElevenLabs générée... Rendu des visuels..." : "ElevenLabs voice generated... Rendering visuals...";
      case "IMAGES_DONE": return currentLang === "fr" ? "Frames SDXL prêtes... Alignement des sous-titres..." : "SDXL frames ready... Aligning subtitles...";
      case "CAPTIONS_DONE": return currentLang === "fr" ? "Whisper calé... Rendu vidéo FFmpeg final..." : "Whisper aligned... Final FFmpeg video rendering...";
      case "RENDERING": return currentLang === "fr" ? `Composition vidéo en cours (${progress}%)...` : `Video composition in progress (${progress}%)...`;
      case "COMPLETED": return currentLang === "fr" ? "Vidéo disponible !" : "Video available!";
      case "FAILED": return currentLang === "fr" ? "Échec du pipeline." : "Pipeline failed.";
      default: return currentLang === "fr" ? "Forge active..." : "Forge active...";
    }
  };

  return (
    <div className="flex flex-col gap-8 text-left">
      <div>
        <h1 className="text-2xl font-bold text-white font-display">
          {currentLang === "fr" ? "Générateur Unique de Shorts" : "Single Shorts Generator"}
        </h1>
        <p className="text-xs text-gray-400">
          {currentLang === "fr" ? "Générez un clip vidéo à l'unité en configurant vos prompts ou scripts personnalisés." : "Generate a single video clip by configuring your custom prompts or scripts."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Generator configuration */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {!isForging && !renderedUrl && (
            <form onSubmit={handleForge} className="glass-panel p-6 sm:p-8 rounded-3xl border border-border flex flex-col gap-6">
              
              {/* Section 1: Thématique & Durée */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider border-l-2 border-primary pl-2">
                  {currentLang === "fr" ? "1. Thématique & Format" : "1. Theme & Format"}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-gray-300 uppercase">Niche</label>
                    <select 
                      value={niche} 
                      onChange={(e) => setNiche(e.target.value)}
                      className="bg-background border border-border focus:border-primary rounded-xl p-3 text-xs text-white outline-none"
                    >
                      {NICHES.map(n => {
                        const tn = getTranslationNiche(n, currentLang);
                        return <option key={tn.id} value={tn.id}>{tn.name}</option>;
                      })}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-gray-300 uppercase">
                      {currentLang === "fr" ? "Durée cible" : "Target duration"}
                    </label>
                    <select 
                      value={duration} 
                      onChange={(e) => setDuration(Number(e.target.value))}
                      className="bg-background border border-border focus:border-primary rounded-xl p-3 text-xs text-white outline-none"
                    >
                      {DURATIONS.map(d => {
                        const td = getTranslationDuration(d, currentLang);
                        return <option key={td.value} value={td.value}>{td.label}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Scripting */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider border-l-2 border-primary pl-2">
                  {currentLang === "fr" ? "2. Script & Scénarisation" : "2. Script & Storyboarding"}
                </span>
                
                <div className="flex gap-2 p-1 bg-white/5 border border-border rounded-xl w-fit">
                  <button 
                    type="button"
                    onClick={() => setScriptMode("auto")}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      scriptMode === "auto" ? "bg-primary text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {currentLang === "fr" ? "Génération par IA (Claude)" : "AI Generation (Claude)"}
                  </button>
                  <button 
                    type="button"
                    onClick={() => setScriptMode("custom")}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      scriptMode === "custom" ? "bg-primary text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {currentLang === "fr" ? "Copier mon propre Script" : "Copy my own Script"}
                  </button>
                </div>

                {scriptMode === "auto" ? (
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-gray-300 uppercase">
                      {currentLang === "fr" ? "Sujet de la vidéo" : "Video subject"}
                    </label>
                    <textarea 
                      placeholder={currentLang === "fr" ? "Décrivez ce que vous souhaitez que l'IA raconte... Ex: Le mystère de la cité engloutie de l'Atlantide." : "Describe what you want the AI to talk about... E.g., The mystery of the sunken city of Atlantis."}
                      value={topicPrompt}
                      onChange={(e) => setTopicPrompt(e.target.value)}
                      rows={3}
                      className="w-full bg-background border border-border focus:border-primary rounded-xl p-4 text-xs outline-none text-white resize-none"
                      required={scriptMode === "auto"}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-gray-300 uppercase">
                      {currentLang === "fr" ? "Script complet" : "Complete script"}
                    </label>
                    <textarea 
                      placeholder={currentLang === "fr" ? "Collez votre script complet ici..." : "Paste your complete script here..."}
                      value={customScript}
                      onChange={(e) => setCustomScript(e.target.value)}
                      rows={3}
                      className="w-full bg-background border border-border focus:border-primary rounded-xl p-4 text-xs outline-none text-white resize-none"
                      required={scriptMode === "custom"}
                    />
                  </div>
                )}
              </div>

              {/* Section 3: Audio & Rendu Visuel */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider border-l-2 border-primary pl-2">
                  {currentLang === "fr" ? "3. Direction Artistique & Voix" : "3. Artistic Direction & Voice"}
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-gray-300 uppercase">
                      {currentLang === "fr" ? "Voix (ElevenLabs)" : "Voice (ElevenLabs)"}
                    </label>
                    <select 
                      value={voice} 
                      onChange={(e) => setVoice(e.target.value)}
                      className="bg-background border border-border focus:border-primary rounded-xl p-3 text-xs text-white outline-none"
                    >
                      {VOICES.map(v => {
                        const tv = getTranslationVoice(v, currentLang);
                        return <option key={tv.id} value={tv.id}>{tv.name} ({tv.type})</option>;
                      })}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-gray-300 uppercase">
                      {currentLang === "fr" ? "Style Visuel" : "Visual Style"}
                    </label>
                    <select 
                      value={style} 
                      onChange={(e) => setStyle(e.target.value)}
                      className="bg-background border border-border focus:border-primary rounded-xl p-3 text-xs text-white outline-none"
                    >
                      {VISUAL_STYLES.map(s => {
                        const ts = getTranslationStyle(s, currentLang);
                        return <option key={ts.id} value={ts.id}>{ts.name}</option>;
                      })}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-gray-300 uppercase">
                      {currentLang === "fr" ? "Langue" : "Language"}
                    </label>
                    <select 
                      value={language} 
                      onChange={(e) => setLanguage(e.target.value)}
                      className="bg-background border border-border focus:border-primary rounded-xl p-3 text-xs text-white outline-none"
                    >
                      {LANGUAGES.map(l => (
                        <option key={l.code} value={l.code}>{l.flag} {l.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-gray-300 uppercase">
                      {currentLang === "fr" ? "Ton du Script" : "Script Tone"}
                    </label>
                    <select 
                      value={tone} 
                      onChange={(e) => setTone(e.target.value)}
                      className="bg-background border border-border focus:border-primary rounded-xl p-3 text-xs text-white outline-none"
                    >
                      {TONES.map(t => (
                        <option key={t} value={t}>{getTranslationTone(t, currentLang)}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit button */}
              {errorMsg && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button 
                type="submit"
                className="w-full py-4 bg-neon-glow hover:opacity-90 active:scale-[0.99] transition-all font-bold text-sm text-white rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                {currentLang === "fr" ? "Générer la vidéo unique" : "Generate unique video"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Rendering pipeline status view */}
          {isForging && (
            <div className="glass-panel p-8 rounded-3xl border border-border flex flex-col gap-8 text-center items-center justify-center min-h-[450px]">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
                <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin" />
                <Video className="w-8 h-8 text-primary animate-pulse" />
              </div>

              <div className="flex flex-col gap-2 max-w-sm">
                <h3 className="text-lg font-bold text-white font-display">
                  {currentLang === "fr" ? "Génération en cours..." : "Generation in progress..."}
                </h3>
                <p className="text-xs text-secondary font-semibold">{getStepText()}</p>
                <p className="text-[10px] text-gray-400 leading-relaxed mt-1">
                  {currentLang === "fr" 
                    ? "Notre forge IA rédige le script, génère les voix ElevenLabs, produit des scènes graphiques et effectue le montage en rythme. Cela prend environ 8 secondes en mode sandbox."
                    : "Our AI forge writes the script, generates ElevenLabs voices, produces graphic scenes, and edits in rhythm. This takes about 8 seconds in sandbox mode."}
                </p>
              </div>

              {/* Progress bar */}
              <div className="w-full max-w-md bg-white/5 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-primary to-secondary h-full transition-all duration-500 rounded-full" 
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                {progress}% {currentLang === "fr" ? "COMPLET" : "COMPLETE"}
              </span>
            </div>
          )}

          {/* Finished Forged Video Showcase */}
          {renderedUrl && (
            <div className="glass-panel p-8 rounded-3xl border border-border flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <h3 className="text-lg font-bold text-white font-display">
                    {currentLang === "fr" ? "Vidéo forgée avec succès !" : "Video forged successfully!"}
                  </h3>
                </div>
                <button 
                  onClick={() => {
                    setRenderedUrl(null);
                    setVideoId(null);
                  }}
                  className="text-xs font-semibold text-primary hover:text-white flex items-center gap-1.5"
                >
                  <ListRestart className="w-4 h-4" />
                  {currentLang === "fr" ? "Générer une autre vidéo" : "Generate another video"}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* 9:16 video view */}
                <div className="flex justify-center">
                  <div className="w-[260px] aspect-[9/16] rounded-3xl border-4 border-zinc-800 shadow-2xl overflow-hidden relative bg-black">
                    <video 
                      src={renderedUrl} 
                      controls 
                      className="w-full h-full object-cover" 
                      poster="https://pub-reelforge.r2.dev/mock-poster.jpg"
                    />
                  </div>
                </div>

                {/* Video Info and Suggestions */}
                <div className="flex flex-col gap-4 text-left">
                  <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 flex items-center gap-4">
                    <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0 bg-primary/20 rounded-full border border-primary/30">
                      <span className="text-lg font-black text-white font-display">{viralScore || 85}</span>
                      <div className="absolute -top-1 -right-1 p-1 bg-secondary text-background rounded-full">
                        <Flame className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white">{t("vdetail.score.title")}</span>
                      <p className="text-[10px] text-gray-400 mt-1">
                        {currentLang === "fr" 
                          ? "Ce clip dispose d'une excellente accroche narrative. L'algorithme a de fortes chances de le pousser organiquement."
                          : "This clip has an excellent narrative hook. The algorithm is highly likely to push it organically."}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">{t("vdetail.ai.title")}</span>
                    {suggestions.length > 0 ? (
                      suggestions.map((s, idx) => (
                        <div key={idx} className="p-3 bg-white/5 border border-border rounded-xl text-[10px] text-gray-300 leading-tight">
                          • {s}
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="p-3 bg-white/5 border border-border rounded-xl text-[10px] text-gray-300 leading-tight">
                          • {currentLang === "fr" 
                            ? `Utilisez des tags tendances (#shorts, #history, #${niche}) lors de la publication.`
                            : `Use trending tags (#shorts, #history, #${niche}) when publishing.`}
                        </div>
                        <div className="p-3 bg-white/5 border border-border rounded-xl text-[10px] text-gray-300 leading-tight">
                          • {currentLang === "fr" 
                            ? "Publiez aux heures d'audience maximale (18h-21h)."
                            : "Publish at peak audience hours (6pm-9pm)."}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex gap-3 mt-2">
                    <a 
                      href={renderedUrl}
                      download 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-secondary hover:bg-secondary-hover text-background font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all"
                    >
                      <Download className="w-4 h-4" />
                      {t("vdetail.actions.download")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right column: Info & Limits */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-3xl border border-border text-left flex flex-col gap-4">
            <h3 className="text-sm font-bold text-white font-display flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-secondary" />
              {currentLang === "fr" ? "Consommation de Crédits" : "Credit Consumption"}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              {currentLang === "fr"
                ? "La forge d'une vidéo courte consomme 1 crédit. Cela comprend l'ensemble des requêtes d'IA, la génération vocale de haute qualité et le rendu vidéo Remotion."
                : "Forging a short video consumes 1 credit. This covers all AI requests, high-quality voice generation, and Remotion video rendering."}
            </p>

            <div className="bg-white/5 border border-border/80 rounded-2xl p-4 flex flex-col gap-2 mt-1">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-gray-400 font-medium">
                  {currentLang === "fr" ? "Vos crédits disponibles" : "Your available credits"}
                </span>
                <span className="text-secondary font-extrabold flex items-center gap-0.5">
                  <Flame className="w-3.5 h-3.5 text-secondary animate-pulse" />
                  124 {currentLang === "fr" ? "crédits" : "credits"}
                </span>
              </div>
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                <div className="bg-secondary w-[82%] h-full rounded-full" />
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-border text-left flex flex-col gap-4">
            <h3 className="text-sm font-bold text-white font-display flex items-center gap-1.5">
              {currentLang === "fr" ? "Astuces de création" : "Creation Tips"}
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-gray-400 leading-tight">
              <li className="flex gap-2">
                <span className="text-secondary">•</span>
                <span>
                  {currentLang === "fr"
                    ? "Pour de meilleurs résultats, utilisez des sujets spécifiques et évitez les descriptions génériques."
                    : "For best results, use specific topics and avoid generic descriptions."}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary">•</span>
                <span>
                  {currentLang === "fr"
                    ? "Sélectionnez la voix Sarah pour les histoires mystérieuses, et Antoine pour les récits d'horreur dramatiques."
                    : "Select the Sarah voice for mysterious stories, and Antoine for dramatic horror narratives."}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary">•</span>
                <span>
                  {currentLang === "fr"
                    ? "Vous pouvez copier-coller vos propres scripts si vous préférez écrire vos vidéos manuellement."
                    : "You can copy-paste your own scripts if you prefer writing your videos manually."}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
