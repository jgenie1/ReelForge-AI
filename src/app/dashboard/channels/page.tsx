"use client";

import React, { useState } from "react";
import { 
  Radio, 
  Plus, 
  Check, 
  AlertCircle, 
  ExternalLink,
  Shield, 
  Settings,
  Sparkles,
  RefreshCw,
  ToggleLeft,
  ToggleRight,
  Upload,
  Music,
  Instagram,
  Youtube,
  Pin,
  Layers
} from "lucide-react";

interface SocialChannel {
  id: string;
  platform: string;
  accountName: string;
  handle: string;
  connected: boolean;
  status: "active" | "error" | "disconnected";
  followers: string;
  watermark: string | null;
}

const INITIAL_CHANNELS: SocialChannel[] = [
  { id: "ch-1", platform: "TikTok", accountName: "Mythology Clips FR", handle: "@mythology_clips", connected: true, status: "active", followers: "124.5K", watermark: "logo-myth.png" },
  { id: "ch-2", platform: "Instagram", accountName: "Mythology Reels", handle: "@mythology.reels", connected: true, status: "active", followers: "42.1K", watermark: null },
  { id: "ch-3", platform: "YouTube", accountName: "Mythology Shorts", handle: "@mythology_shorts", connected: false, status: "disconnected", followers: "0", watermark: null },
  { id: "ch-4", platform: "Pinterest", accountName: "Idea Pins Forge", handle: "@ideapins_forge", connected: false, status: "disconnected", followers: "0", watermark: null }
];

export default function ChannelsDashboard() {
  const [channels, setChannels] = useState<SocialChannel[]>(INITIAL_CHANNELS);
  const [isConnecting, setIsConnecting] = useState<string | null>(null);

  const handleConnect = (platform: string) => {
    setIsConnecting(platform);
    setTimeout(() => {
      setChannels(prev => prev.map(ch => {
        if (ch.platform === platform) {
          return {
            ...ch,
            connected: true,
            status: "active",
            handle: `@${platform.toLowerCase()}_forge_new`,
            accountName: `${platform} Forge Creator`,
            followers: "120"
          };
        }
        return ch;
      }));
      setIsConnecting(null);
    }, 1500);
  };

  const handleDisconnect = (id: string) => {
    setChannels(prev => prev.map(ch => {
      if (ch.id === id) {
        return {
          ...ch,
          connected: false,
          status: "disconnected",
          handle: "Non connecté",
          followers: "0"
        };
      }
      return ch;
    }));
  };

  return (
    <div className="flex flex-col gap-8 text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white font-display">
            Comptes & Canaux Sociaux
          </h1>
          <p className="text-xs text-gray-400">Associez vos comptes de médias sociaux pour autoriser ReelForge à publier vos clips en automatique.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Section: Active social grid (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {channels.map((channel) => {
              const isActive = channel.connected;
              return (
                <div 
                  key={channel.id} 
                  className={`glass-panel p-6 rounded-3xl border transition-all ${
                    isActive ? "border-primary/40 bg-card/25" : "border-border bg-white/5 opacity-80"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300">
                          {channel.platform === "TikTok" && <Music className="w-3.5 h-3.5" />}
                          {channel.platform === "Instagram" && <Instagram className="w-3.5 h-3.5" />}
                          {channel.platform === "YouTube" && <Youtube className="w-3.5 h-3.5" />}
                          {channel.platform === "Pinterest" && <Pin className="w-3.5 h-3.5" />}
                        </span>
                        <span className="text-xs font-black text-white uppercase tracking-wider">{channel.platform}</span>
                      </div>
                      <h3 className="text-sm font-bold text-white font-display mt-2">{channel.accountName}</h3>
                      <p className="text-[10px] text-gray-400 font-medium">{channel.handle}</p>
                    </div>

                    <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full ${
                      isActive 
                        ? "bg-green-500/10 border border-green-500/20 text-green-400" 
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}>
                      {channel.status}
                    </span>
                  </div>

                  <div className="h-px bg-border/60 my-4" />

                  {isActive ? (
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">Audience :</span>
                        <span className="text-white font-bold">{channel.followers} abonnés</span>
                      </div>
                      
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">Filigrane :</span>
                        <span className="text-secondary font-semibold flex items-center gap-1">
                          {channel.watermark || "Aucun"}
                          <Upload className="w-3 h-3 text-secondary cursor-pointer hover:text-white" />
                        </span>
                      </div>

                      <div className="flex gap-2 mt-2">
                        <button 
                          onClick={() => handleDisconnect(channel.id)}
                          className="flex-1 py-2 text-[10px] font-bold text-red-400 hover:text-red-300 bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 rounded-xl transition-all"
                        >
                          Déconnecter
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3 py-2">
                      <p className="text-[10px] text-gray-400 leading-normal">
                        Associez votre compte {channel.platform} pour lancer les publications programmées.
                      </p>
                      <button 
                        onClick={() => handleConnect(channel.platform)}
                        disabled={isConnecting === channel.platform}
                        className="w-full mt-1 py-2 bg-secondary hover:bg-secondary-hover text-background font-bold text-[10px] rounded-xl flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
                      >
                        {isConnecting === channel.platform ? (
                          <>
                            <RefreshCw className="w-3 h-3 animate-spin" />
                            OAuth en cours...
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            Associer mon compte
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Social settings details panel */}
          <div className="glass-panel p-6 rounded-3xl border border-border flex flex-col gap-4 text-left">
            <h3 className="text-sm font-bold text-white font-display flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-secondary" />
              Sécurité & Autorisations OAuth
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              ReelForge AI utilise des jetons sécurisés OAuth conformes aux politiques officielles de l'API TikTok, Meta Graph API et Google APIs. Nous n'avons jamais accès à vos identifiants ou mots de passe personnels. Vous pouvez révoquer les accès à tout moment depuis vos dashboards sociaux.
            </p>
          </div>
        </div>

        {/* Right Section: Instructions & Watermark defaults (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-3xl border border-border flex flex-col gap-4 text-left">
            <h3 className="text-sm font-bold text-white font-display flex items-center gap-1.5"><Layers className="w-4 h-4 text-secondary" /> Filigrane & Identité de Marque</h3>
            <p className="text-xs text-gray-400 leading-normal">
              Appliquez automatiquement un logo transparent ou un texte de watermark sur toutes les vidéos forgées pour ce canal.
            </p>
            
            <div className="p-4 border border-dashed border-border hover:border-primary rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors bg-white/5">
              <Upload className="w-6 h-6 text-gray-400" />
              <span className="text-[10px] font-bold text-white">Importer le watermark (PNG transparent)</span>
              <span className="text-[8px] text-gray-500">Max 2 Mo | Recommandé : 150x150 pixels</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-border flex flex-col gap-4 text-left">
            <h3 className="text-sm font-bold text-white font-display flex items-center gap-1.5"><Pin className="w-4 h-4 text-secondary" /> Règles d'auto-posting</h3>
            <ul className="flex flex-col gap-3 text-xs text-gray-400">
              <li className="flex gap-2">
                <span className="text-secondary">•</span>
                <span>Chaque vidéo générée est envoyée d'abord comme un brouillon sur votre application mobile TikTok ou publiée directement selon votre choix.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary">•</span>
                <span>Les descriptions et hashtags optimisés par l'IA sont inclus automatiquement dans les posts.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
