"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Settings, 
  User, 
  Key, 
  Volume2, 
  Sparkles, 
  Check, 
  AlertCircle,
  HelpCircle,
  Upload,
  Plus,
  CreditCard,
  FileText
} from "lucide-react";

export default function SettingsPage() {
  const { language } = useLanguage();

  const getLogDate = (date: string) => {
    if (language === "en") {
      return date.replace("Il y a", "").replace("jours", "days ago").replace("À l'instant", "Just now");
    }
    return date;
  };

  const getVoiceName = (name: string) => {
    if (language === "en") {
      if (name.includes("Ma Voix Clone")) return "My Cloned Voice - Podcast";
      if (name.includes("Voix Narrateur")) return "Deep Narrator Voice";
    }
    return name;
  };

  const [activeTab, setActiveTab] = useState("api");
  const [useMock, setUseMock] = useState(true);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Form states
  const [claudeKey, setClaudeKey] = useState("sk-ant-••••••••••••••••");
  const [elevenLabsKey, setElevenLabsKey] = useState("eleven_••••••••••••••••");
  const [replicateKey, setReplicateKey] = useState("r8_••••••••••••••••");
  const [openaiKey, setOpenaiKey] = useState("sk-••••••••••••••••");

  const [voiceProfileName, setVoiceProfileName] = useState("");
  const [voices, setVoices] = useState([
    { id: "v-1", name: "Ma Voix Clone - Podcast", status: "READY", date: "Il y a 3 jours" },
    { id: "v-2", name: "Voix Narrateur Grave", status: "READY", date: "Il y a 5 jours" }
  ]);

  const handleSaveAPI = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg(language === "fr" ? "Clés d'API et préférences enregistrées avec succès." : "API keys and preferences saved successfully.");
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  const handleCloneVoice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!voiceProfileName) return;

    setVoices(prev => [
      ...prev,
      {
        id: `v-${Date.now()}`,
        name: voiceProfileName,
        status: "PROCESSING",
        date: "À l'instant"
      }
    ]);
    setVoiceProfileName("");
    setSelectedFile(null);
    setSuccessMsg(language === "fr" ? "Échantillon audio envoyé pour entraînement vocal." : "Audio sample sent for voice training.");
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  return (
    <div className="flex flex-col gap-8 text-left">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white font-display">
          {language === "fr" ? "Configuration & Réglages" : "Configuration & Settings"}
        </h1>
        <p className="text-xs text-gray-400">{language === "fr" ? "Gérez vos préférences de forge, configurez vos clés API personnelles et entraînez vos modèles vocaux." : "Manage your forge preferences, configure your personal API keys, and train your voice models."}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Navigation tabs (3 cols) */}
        <div className="lg:col-span-3 flex flex-col gap-2">
          {[
            { id: "api", name: language === "fr" ? "Clés d'API & Moteurs" : "API Keys & Engines", icon: Key },
            { id: "voice", name: language === "fr" ? "Clonage de Voix" : "Voice Cloning", icon: Volume2 },
            { id: "profile", name: language === "fr" ? "Profil & Facturation" : "Profile & Billing", icon: User }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-colors duration-150 text-left ${
                  activeTab === tab.id 
                    ? "bg-primary text-white shadow-lg shadow-primary/10" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Right Side: Tab contents (9 cols) */}
        <div className="lg:col-span-9">
          
          {/* Tab 1: API Configuration */}
          {activeTab === "api" && (
            <form onSubmit={handleSaveAPI} className="glass-panel p-6 sm:p-8 rounded-3xl border border-border flex flex-col gap-6">
              <div>
                <h3 className="text-base font-bold text-white font-display">{language === "fr" ? "Clés d'API Personnelles" : "Personal API Keys"}</h3>
                <p className="text-xs text-gray-400 mt-1">
                  {language === "fr" ? "Par défaut, l'application s'exécute en mode simulation (USE_MOCK_AI=true). Vous pouvez désactiver ce mode pour connecter vos propres comptes d'IA et générer du contenu réel." : "By default, the application runs in simulation mode (USE_MOCK_AI=true). You can disable this mode to connect your own AI accounts and generate real content."}
                </p>
              </div>

              <div className="flex items-center justify-between p-4 bg-primary/10 border border-primary/20 rounded-2xl">
                <div className="flex flex-col text-left gap-1">
                  <span className="text-xs font-bold text-white">{language === "fr" ? "Mode Simulation (Sandbox)" : "Simulation Mode (Sandbox)"}</span>
                  <span className="text-[10px] text-gray-400">{language === "fr" ? "Utilise des mockups locaux pour simuler les temps de rendu et économiser vos budgets d'API." : "Uses local mockups to simulate rendering times and save your API budgets."}</span>
                </div>
                <button 
                  type="button"
                  onClick={() => setUseMock(!useMock)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors duration-150 ${
                    useMock ? "bg-secondary text-background hover:bg-secondary-hover" : "bg-white/5 border border-white/10 text-white"
                  }`}
                >
                  {useMock ? (language === "fr" ? "Activé" : "Enabled") : (language === "fr" ? "Désactivé" : "Disabled")}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-gray-300 uppercase">Anthropic Claude API Key</label>
                  <input 
                    type="password" 
                    value={claudeKey} 
                    onChange={(e) => setClaudeKey(e.target.value)}
                    className="bg-background border border-border focus:border-primary rounded-xl p-3 text-xs text-white outline-none" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-gray-300 uppercase">ElevenLabs API Key</label>
                  <input 
                    type="password" 
                    value={elevenLabsKey} 
                    onChange={(e) => setElevenLabsKey(e.target.value)}
                    className="bg-background border border-border focus:border-primary rounded-xl p-3 text-xs text-white outline-none" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-gray-300 uppercase">Replicate (SDXL) API Key</label>
                  <input 
                    type="password" 
                    value={replicateKey} 
                    onChange={(e) => setReplicateKey(e.target.value)}
                    className="bg-background border border-border focus:border-primary rounded-xl p-3 text-xs text-white outline-none" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-gray-300 uppercase">OpenAI (Whisper) API Key</label>
                  <input 
                    type="password" 
                    value={openaiKey} 
                    onChange={(e) => setOpenaiKey(e.target.value)}
                    className="bg-background border border-border focus:border-primary rounded-xl p-3 text-xs text-white outline-none" 
                  />
                </div>
              </div>

              {successMsg && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-xl flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}

              <button 
                type="submit"
                className="w-fit px-6 py-3 bg-primary hover:bg-primary-hover font-bold text-xs text-white rounded-xl shadow-lg shadow-primary/15 transition-all"
              >
                {language === "fr" ? "Enregistrer les réglages" : "Save settings"}
              </button>
            </form>
          )}

          {/* Tab 2: Voice Cloning */}
          {activeTab === "voice" && (
            <div className="flex flex-col gap-6">
              
              {/* Voice list */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-border flex flex-col gap-4">
                <h3 className="text-base font-bold text-white font-display">{language === "fr" ? "Vos Clones Vocaux" : "Your Voice Clones"}</h3>
                <p className="text-xs text-gray-400">
                  {language === "fr" ? "Importez vos propres fichiers audio pour cloner votre voix ou celle de narrateurs professionnels." : "Upload your own audio files to clone your voice or that of professional narrators."}
                </p>

                <div className="flex flex-col gap-2 mt-2">
                  {voices.map(v => (
                    <div key={v.id} className="p-4 bg-background border border-border rounded-2xl flex justify-between items-center text-xs">
                      <div className="flex items-center gap-3">
                        <span className="p-2 bg-primary/20 text-primary rounded-xl">
                          <Volume2 className="w-4 h-4" />
                        </span>
                        <div className="flex flex-col text-left">
                          <span className="font-semibold text-white">{getVoiceName(v.name)}</span>
                          <span className="text-[9px] text-gray-500 mt-0.5">{language === "fr" ? "Créé : " : "Created: "}{getLogDate(v.date)}</span>
                        </div>
                      </div>
                      <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full ${
                        v.status === "READY" 
                          ? "bg-green-500/10 border border-green-500/20 text-green-400" 
                          : "bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 animate-pulse"
                      }`}>
                        {v.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add a new clone profile */}
              <form onSubmit={handleCloneVoice} className="glass-panel p-6 sm:p-8 rounded-3xl border border-border flex flex-col gap-6">
                <h3 className="text-base font-bold text-white font-display">{language === "fr" ? "Créer un nouveau Profil Vocal" : "Create a new Voice Profile"}</h3>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-gray-300 uppercase">{language === "fr" ? "Nom du profil vocal" : "Voice profile name"}</label>
                  <input 
                    type="text" 
                    placeholder={language === "fr" ? "Ex: Mon clone micro studio" : "E.g., My studio mic clone"}
                    value={voiceProfileName}
                    onChange={(e) => setVoiceProfileName(e.target.value)}
                    className="bg-background border border-border focus:border-primary rounded-xl p-3 text-xs text-white outline-none" 
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-gray-300 uppercase">{language === "fr" ? "Échantillon vocal (.mp3 / .wav)" : "Voice sample (.mp3 / .wav)"}</label>
                  
                  <input 
                    type="file"
                    ref={fileInputRef}
                    accept="audio/mp3,audio/wav,audio/mpeg"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setSelectedFile(e.target.files[0]);
                      }
                    }}
                    className="hidden"
                  />

                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="p-6 border border-dashed border-border hover:border-primary rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <Upload className="w-6 h-6 text-gray-400" />
                    {selectedFile ? (
                      <div className="text-center">
                        <span className="text-[10px] font-bold text-secondary block">
                          {selectedFile.name}
                        </span>
                        <span className="text-[8px] text-gray-400 block mt-1">
                          ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                        </span>
                      </div>
                    ) : (
                      <>
                        <span className="text-[10px] font-bold text-white">{language === "fr" ? "Glisser ou cliquer pour choisir un extrait audio" : "Drag or click to choose an audio sample"}</span>
                        <span className="text-[8px] text-gray-500">{language === "fr" ? "Durée recommandée : 1 minute minimum | Max 15 Mo" : "Recommended duration: 1 minute minimum | Max 15 MB"}</span>
                      </>
                    )}
                  </div>
                </div>

                {successMsg && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-xl flex items-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    <span>{successMsg}</span>
                  </div>
                )}

                <button 
                  type="submit"
                  className="w-fit px-6 py-3 bg-secondary hover:bg-secondary-hover font-bold text-xs text-background rounded-xl shadow-lg shadow-secondary/15 transition-all"
                >
                  {language === "fr" ? "Entraîner le clone vocal" : "Train voice clone"}
                </button>
              </form>
            </div>
          )}

          {/* Tab 3: Profile */}
          {activeTab === "profile" && (
            <div className="flex flex-col gap-6">
              
              {/* Profile Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-border flex flex-col gap-6 text-left">
                <div>
                  <h3 className="text-base font-bold text-white font-display">{language === "fr" ? "Votre Profil" : "Your Profile"}</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {language === "fr" ? "Détails de votre compte utilisateur ReelForge AI." : "Details of your ReelForge AI user account."}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-xl font-black font-display">
                    CR
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">{language === "fr" ? "Créateur Sandbox" : "Sandbox Creator"}</span>
                    <span className="text-xs text-gray-500 mt-0.5">creator@reelforge.ai</span>
                  </div>
                </div>

                <div className="h-px bg-border/60 my-2" />

                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-gray-300 uppercase">{language === "fr" ? "Statut d'abonnement" : "Subscription Status"}</span>
                  <div className="p-4 bg-white/5 border border-border rounded-2xl flex justify-between items-center text-xs">
                    <div>
                      <span className="font-semibold text-white">{language === "fr" ? "Plan Actif : Creator Plan" : "Active Plan: Creator Plan"}</span>
                      <p className="text-[9px] text-gray-500 mt-0.5">{language === "fr" ? "Renouvellement automatique le 12 Juillet 2026" : "Automatic renewal on July 12, 2026"}</p>
                    </div>
                    <span className="px-2.5 py-1 bg-primary/10 border border-primary/20 text-secondary rounded font-black text-[9px] uppercase tracking-wider">
                      {language === "fr" ? "ACTIF" : "ACTIVE"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Billing Info Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-border flex flex-col gap-6 text-left">
                <div>
                  <h3 className="text-base font-bold text-white font-display">{language === "fr" ? "Moyens de Paiement & Facturation" : "Payment Methods & Billing"}</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {language === "fr" ? "Gérez vos coordonnées bancaires et téléchargez vos factures passées." : "Manage your bank details and download your past invoices."}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white/5 border border-border rounded-2xl gap-4">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 bg-primary/20 text-primary rounded-xl">
                      <CreditCard className="w-5 h-5" />
                    </span>
                    <div className="flex flex-col text-xs">
                      <span className="font-semibold text-white">Visa •••• 4242</span>
                      <span className="text-[9px] text-gray-500 mt-0.5">{language === "fr" ? "Expire le 12/28" : "Expires 12/28"}</span>
                    </div>
                  </div>
                  <Link 
                    href="/dashboard/billing"
                    className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-xs font-bold rounded-xl shadow-md transition-colors w-full sm:w-auto text-center"
                  >
                    {language === "fr" ? "Modifier" : "Update"}
                  </Link>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold text-gray-300 uppercase">{language === "fr" ? "Dernières Factures" : "Recent Invoices"}</span>
                  <div className="flex flex-col gap-2">
                    {[
                      { id: "inv-06", date: "12 Juin 2026", amount: "49.00 €", file: "Invoice_June_2026.pdf" },
                      { id: "inv-05", date: "12 Mai 2026", amount: "49.00 €", file: "Invoice_May_2026.pdf" }
                    ].map(inv => (
                      <div key={inv.id} className="flex justify-between items-center p-3 bg-white/5 border border-border rounded-xl text-xs">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <div className="flex flex-col">
                            <span className="font-medium text-white">{inv.date}</span>
                            <span className="text-[8px] text-gray-500 mt-0.5">{inv.id.toUpperCase()}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-white">{inv.amount}</span>
                          <button 
                            type="button"
                            onClick={() => alert(language === "fr" ? `Téléchargement de ${inv.file} simulé !` : `Download of ${inv.file} simulated!`)}
                            className="text-[10px] text-primary hover:underline font-bold font-sans"
                          >
                            {language === "fr" ? "Télécharger" : "Download"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center mt-2">
                  <Link 
                    href="/dashboard/billing"
                    className="text-xs text-secondary hover:text-white font-semibold flex items-center gap-1 hover:underline"
                  >
                    {language === "fr" ? "Voir tous les plans de tarification" : "View all pricing plans"} &rarr;
                  </Link>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
