"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "fr" | "en";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const TRANSLATIONS = {
  fr: {
    // General
    "app.name": "ReelForge AI",
    "app.description": "Créez des vidéos virales à l'aide de l'IA",
    "btn.connect": "Se connecter",
    "btn.signup": "S'inscrire",
    "btn.signout": "Déconnexion",
    "btn.close": "Fermer",
    "btn.submit": "Soumettre",
    "btn.back": "Retour",
    "btn.continue": "Continuer",
    "btn.use": "Utiliser",
    "btn.buy": "Acheter",
    "btn.download": "Télécharger",
    "btn.regenerate": "Régénérer",
    "btn.publish": "Publier",
    "btn.published": "Publié",
    "btn.sending": "Envoi...",
    "btn.save": "Sauvegarder",

    // Sidebar
    "menu.workspace": "Workspace",
    "menu.overview": "Vue d'ensemble",
    "menu.videos": "Générateur Unique",
    "menu.library": "Bibliothèque",
    "menu.series": "Séries Automatiques",
    "menu.marketplace": "Marketplace",
    "menu.analytics": "Analytics",
    "menu.channels": "Canaux Sociaux",
    "menu.settings": "Configuration",
    "menu.credits": "Solde de Crédits",
    "menu.recharge": "Recharger des crédits",
    "menu.sandbox": "Mode Sandbox",
    "menu.real": "Mode Réel",

    // Dashboard page
    "dash.title": "Tableau de Bord ReelForge",
    "dash.subtitle": "Gérez vos publications automatiques et surveillez vos performances virales.",
    "dash.btn.create": "Créer une Série AI",
    "dash.draft.title": "Vous avez un brouillon de vidéo en attente !",
    "dash.draft.desc": "Une vidéo dans la niche {niche} a été pré-configurée depuis la page d'accueil.",
    "dash.draft.ignore": "Ignorer",
    "dash.draft.complete": "Compléter la génération",
    "dash.metrics.credits.sub": "Crédits restants (Plan Creator)",
    "dash.metrics.videos": "Vidéos Forgées",
    "dash.metrics.videos.sub": "Générées avec succès ce mois-ci",
    "dash.metrics.views": "Vues cumulées",
    "dash.metrics.views.sub": "+24% de croissance organique",
    "dash.metrics.channels": "Canaux Actifs",
    "dash.metrics.channels.sub": "Comptes TikTok/Insta liés",
    "dash.recent.title": "Vidéos Récemment Forgées",
    "dash.recent.update": "Mis à jour en temps réel",
    "dash.recent.style": "Style",
    "dash.recent.pending": "En attente",
    "dash.recent.rendering": "Rendu en cours",
    "dash.recent.completed": "Terminée",
    "dash.recent.failed": "Échec",
    "dash.recent.progress": "Rendu FFmpeg & Remotion",
    "dash.recent.score": "Score",
    "dash.recent.play": "Lire",

    // Library page
    "lib.title": "Bibliothèque de Vidéos",
    "lib.subtitle": "vidéos forgées — classées et prêtes à publier.",
    "lib.btn.new": "Nouvelle Vidéo",
    "lib.search.placeholder": "Rechercher par titre ou niche...",
    "lib.filter.status": "Statut : Tous",
    "lib.filter.niche": "Niche : Toutes",
    "lib.empty": "Aucune vidéo ne correspond à vos filtres.",
    "lib.card.detail": "Voir le détail",
    "lib.card.download": "Télécharger",
    "lib.card.delete": "Supprimer",

    // Series page
    "series.title": "Séries Automatiques",
    "series.subtitle": "Automatisez la génération et la publication de vidéos sur vos réseaux sociaux selon un calendrier récurrent.",
    "series.tab.list": "Mes Séries",
    "series.tab.create": "Nouvelle Série",
    "series.list.empty": "Aucune série active",
    "series.list.empty.desc": "Vous n'avez pas encore configuré de série automatique. Créez votre première série pour générer des vidéos automatiquement.",
    "series.list.active": "Actif",
    "series.list.paused": "En pause",
    "series.list.completed": "Terminé",
    "series.list.interval": "Intervalle",
    "series.list.next": "Prochaine vidéo",
    "series.list.platforms": "Réseaux",
    "series.list.progress": "Vidéos générées",

    // Marketplace page
    "market.title": "Marketplace",
    "market.subtitle": "Téléchargez des modèles vidéo créés par des experts ou publiez les vôtres pour gagner des crédits ReelForge.",
    "market.banner": "Plus de 240+ templates créés par la communauté",
    "market.trends": "Découvrir les tendances",
    "market.tab.explore": "Explorer",
    "market.tab.owned": "Mes Templates",
    "market.tab.sell": "Vendre",
    "market.search": "Rechercher un modèle...",
    "market.free": "Gratuit",
    "market.credits": "Crédits",
    "market.usedby": "Utilisé par {count} créateurs",
    "market.sell.title": "Vendre un Modèle",
    "market.sell.desc": "Soumettez votre fichier de template Remotion ou votre structure d'assets. Gagnez des crédits lorsque d'autres utilisateurs l'adoptent.",
    "market.sell.success": "Soumission réussie !",
    "market.sell.success.desc": "Votre modèle est en cours de validation par notre équipe. Vous recevrez une notification par email dès sa mise en ligne.",
    "market.sell.another": "Soumettre un autre modèle",
    "market.sell.label.name": "Nom du Modèle",
    "market.sell.label.desc": "Description",
    "market.sell.label.cat": "Catégorie",
    "market.sell.label.price": "Prix demandé (Crédits)",
    "market.sell.label.file": "Fichier Preview ou Fichier Config",
    "market.sell.file.drag": "Glissez-déposez vos fichiers",
    "market.sell.file.sub": "Remotion config (.tsx) ou vidéo de démo (.mp4)",
    "market.sell.btn": "Soumettre pour Révision",

    // Video detail page
    "vdetail.breadcrumb.dash": "Dashboard",
    "vdetail.breadcrumb.lib": "Bibliothèque",
    "vdetail.created": "Créée le",
    "vdetail.rendering.warning": "Cette vidéo est en cours de rendu. Certaines fonctionnalités seront actives une fois prête.",
    "vdetail.tab.script": "Script Éditeur",
    "vdetail.tab.subtitles": "Sous-titres Karaoké",
    "vdetail.tab.config": "Configuration IA",
    "vdetail.label.hook": "Hook d'ouverture (0 - 5s)",
    "vdetail.label.narration": "Corps / Narration (5 - 25s)",
    "vdetail.label.cta": "Call to Action (25 - 30s)",
    "vdetail.sub.word": "MOT",
    "vdetail.sub.start": "DÉBUT (S)",
    "vdetail.sub.end": "FIN (S)",
    "vdetail.label.niche": "Niche",
    "vdetail.label.style": "Style Visuel",
    "vdetail.label.voice": "Voix Narrative",
    "vdetail.label.lang": "Langue",
    "vdetail.label.duration": "Durée",
    "vdetail.label.duration.val": "secondes",
    "vdetail.label.status": "Statut de Rendu",
    "vdetail.score.title": "Score de Viralité Estimé",
    "vdetail.score.desc": "Ce score est calculé par notre IA en fonction de la niche, du hook dramatique et du rythme visuel.",
    "vdetail.stats.title": "Statistiques Réelles",
    "vdetail.stats.views": "Vues",
    "vdetail.stats.likes": "Likes",
    "vdetail.stats.shares": "Shares",
    "vdetail.actions.title": "Actions de Publication",
    "vdetail.actions.download": "Télécharger la vidéo MP4",
    "vdetail.actions.regenerate": "Régénérer la vidéo",
    "vdetail.actions.channels": "Canaux Connectés",
    "vdetail.ai.title": "Recommandations IA",
    "vdetail.ai.rec1": "Raccourcissez l'introduction de 0.8 seconde pour maximiser la rétention initiale.",
    "vdetail.ai.rec2": "Ajoutez un effet de zoom arrière sur le mot \"Richat\" pour souligner l'échelle de la formation.",
    "vdetail.ai.rec3": "La voix \"Antonio\" performe mieux dans la catégorie Mystères, conservez-la pour les prochains épisodes.",

    // Landing Page
    "land.title": "Générez des vidéos courtes virales 100% automatisées",
    "land.subtitle": "ReelForge AI écrit les scripts, génère la voix-off, produit les images de fond et intègre les sous-titres karaoké. Publiez automatiquement sur TikTok, Instagram et YouTube Shorts.",
    "land.btn.start": "Commencer Gratuitement",
    "land.btn.demo": "Voir la Démo",
    "land.onboarding.title": "Créez votre première vidéo IA en 60 secondes",
    "land.onboarding.step1": "1. Choisissez votre Niche",
    "land.onboarding.step2": "2. Sélectionnez le Style",
    "land.onboarding.step3": "3. Indiquez le Sujet",
    "land.onboarding.btn.draft": "Créer le Brouillon",
    "land.footer.copyright": "Fait avec passion par des experts du contenu viral.",
    "land.footer.terms": "Conditions",
    "land.footer.security": "Sécurité",
    "land.footer.docs": "API Docs",
  },
  en: {
    // General
    "app.name": "ReelForge AI",
    "app.description": "Create viral videos using AI",
    "btn.connect": "Sign In",
    "btn.signup": "Sign Up",
    "btn.signout": "Sign Out",
    "btn.close": "Close",
    "btn.submit": "Submit",
    "btn.back": "Back",
    "btn.continue": "Continue",
    "btn.use": "Use",
    "btn.buy": "Buy",
    "btn.download": "Download",
    "btn.regenerate": "Regenerate",
    "btn.publish": "Publish",
    "btn.published": "Published",
    "btn.sending": "Sending...",
    "btn.save": "Save",

    // Sidebar
    "menu.workspace": "Workspace",
    "menu.overview": "Overview",
    "menu.videos": "Single Generator",
    "menu.library": "Library",
    "menu.series": "Automated Series",
    "menu.marketplace": "Marketplace",
    "menu.analytics": "Analytics",
    "menu.channels": "Social Channels",
    "menu.settings": "Settings",
    "menu.credits": "Credit Balance",
    "menu.recharge": "Recharge credits",
    "menu.sandbox": "Sandbox Mode",
    "menu.real": "Real Mode",

    // Dashboard page
    "dash.title": "ReelForge Dashboard",
    "dash.subtitle": "Manage your automated publications and monitor your viral performance.",
    "dash.btn.create": "Create AI Series",
    "dash.draft.title": "You have a pending video draft!",
    "dash.draft.desc": "A video in the \"{niche}\" niche was pre-configured from the home page.",
    "dash.draft.ignore": "Ignore",
    "dash.draft.complete": "Complete generation",
    "dash.metrics.credits.sub": "Remaining credits (Creator Plan)",
    "dash.metrics.videos": "Forged Videos",
    "dash.metrics.videos.sub": "Successfully generated this month",
    "dash.metrics.views": "Accumulated Views",
    "dash.metrics.views.sub": "+24% organic growth",
    "dash.metrics.channels": "Active Channels",
    "dash.metrics.channels.sub": "Linked TikTok/Insta accounts",
    "dash.recent.title": "Recently Forged Videos",
    "dash.recent.update": "Updated in real-time",
    "dash.recent.style": "Style",
    "dash.recent.pending": "Pending",
    "dash.recent.rendering": "Rendering",
    "dash.recent.completed": "Completed",
    "dash.recent.failed": "Failed",
    "dash.recent.progress": "FFmpeg & Remotion Render",
    "dash.recent.score": "Score",
    "dash.recent.play": "Play",

    // Library page
    "lib.title": "Video Library",
    "lib.subtitle": "videos forged — sorted and ready to publish.",
    "lib.btn.new": "New Video",
    "lib.search.placeholder": "Search by title or niche...",
    "lib.filter.status": "Status: All",
    "lib.filter.niche": "Niche: All",
    "lib.empty": "No videos match your filters.",
    "lib.card.detail": "View Details",
    "lib.card.download": "Download",
    "lib.card.delete": "Delete",

    // Series page
    "series.title": "Automated Series",
    "series.subtitle": "Automate the generation and publication of videos on your social networks according to a recurring schedule.",
    "series.tab.list": "My Series",
    "series.tab.create": "New Series",
    "series.list.empty": "No active series",
    "series.list.empty.desc": "You haven't configured an automated series yet. Create your first series to generate videos automatically.",
    "series.list.active": "Active",
    "series.list.paused": "Paused",
    "series.list.completed": "Completed",
    "series.list.interval": "Interval",
    "series.list.next": "Next video",
    "series.list.platforms": "Platforms",
    "series.list.progress": "Generated videos",

    // Marketplace page
    "market.title": "Marketplace",
    "market.subtitle": "Download video models created by experts or publish yours to earn ReelForge credits.",
    "market.banner": "Over 240+ templates created by the community",
    "market.trends": "Discover trends",
    "market.tab.explore": "Explore",
    "market.tab.owned": "My Templates",
    "market.tab.sell": "Sell",
    "market.search": "Search a model...",
    "market.free": "Free",
    "market.credits": "Credits",
    "market.usedby": "Used by {count} creators",
    "market.sell.title": "Sell a Model",
    "market.sell.desc": "Submit your Remotion template file or asset structure. Earn credits when other users adopt it.",
    "market.sell.success": "Submission successful!",
    "market.sell.success.desc": "Your model is being validated by our team. You will receive an email notification as soon as it goes online.",
    "market.sell.another": "Submit another model",
    "market.sell.label.name": "Model Name",
    "market.sell.label.desc": "Description",
    "market.sell.label.cat": "Category",
    "market.sell.label.price": "Asked Price (Credits)",
    "market.sell.label.file": "Preview File or Config File",
    "market.sell.file.drag": "Drag & drop your files",
    "market.sell.file.sub": "Remotion config (.tsx) or demo video (.mp4)",
    "market.sell.btn": "Submit for Review",

    // Video detail page
    "vdetail.breadcrumb.dash": "Dashboard",
    "vdetail.breadcrumb.lib": "Library",
    "vdetail.created": "Created on",
    "vdetail.rendering.warning": "This video is currently rendering. Certain features will become active once ready.",
    "vdetail.tab.script": "Script Editor",
    "vdetail.tab.subtitles": "Karaoke Subtitles",
    "vdetail.tab.config": "AI Configuration",
    "vdetail.label.hook": "Opening Hook (0 - 5s)",
    "vdetail.label.narration": "Body / Narration (5 - 25s)",
    "vdetail.label.cta": "Call to Action (25 - 30s)",
    "vdetail.sub.word": "WORD",
    "vdetail.sub.start": "START (S)",
    "vdetail.sub.end": "END (S)",
    "vdetail.label.niche": "Niche",
    "vdetail.label.style": "Visual Style",
    "vdetail.label.voice": "Narrative Voice",
    "vdetail.label.lang": "Language",
    "vdetail.label.duration": "Duration",
    "vdetail.label.duration.val": "seconds",
    "vdetail.label.status": "Render Status",
    "vdetail.score.title": "Estimated Virality Score",
    "vdetail.score.desc": "This score is computed by our AI based on the niche, the opening dramatic hook and visual rhythm.",
    "vdetail.stats.title": "Real Performance Stats",
    "vdetail.stats.views": "Views",
    "vdetail.stats.likes": "Likes",
    "vdetail.stats.shares": "Shares",
    "vdetail.actions.title": "Publishing Actions",
    "vdetail.actions.download": "Download MP4 Video",
    "vdetail.actions.regenerate": "Regenerate Video",
    "vdetail.actions.channels": "Connected Channels",
    "vdetail.ai.title": "AI Recommendations",
    "vdetail.ai.rec1": "Shorten the hook by 0.8s to maximize early retention.",
    "vdetail.ai.rec2": "Add a zoom out effect on the word \"Richat\" to stress the geological scale.",
    "vdetail.ai.rec3": "The \"Antonio\" voice performs 25% better on Mysteries. Keep it for subsequent runs.",

    // Landing Page
    "land.title": "Generate viral short videos 100% automated",
    "land.subtitle": "ReelForge AI writes the script, records the voiceover, renders SDXL background layouts, and adds dynamic karaoke captions. Auto-publish directly on TikTok, Instagram, and YouTube Shorts.",
    "land.btn.start": "Start Free",
    "land.btn.demo": "Watch Demo",
    "land.onboarding.title": "Create your first AI video in 60 seconds",
    "land.onboarding.step1": "1. Pick your Niche",
    "land.onboarding.step2": "2. Select Style",
    "land.onboarding.step3": "3. Define Subject",
    "land.onboarding.btn.draft": "Create Draft",
    "land.footer.copyright": "Made with passion by viral content experts.",
    "land.footer.terms": "Terms of Service",
    "land.footer.security": "Security Policy",
    "land.footer.docs": "API Docs",
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    const stored = localStorage.getItem("reelforge_lang") as Language;
    if (stored === "fr" || stored === "en") {
      setLanguageState(stored);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang: Language = language === "fr" ? "en" : "fr";
    setLanguageState(nextLang);
    localStorage.setItem("reelforge_lang", nextLang);
  };

  const t = (key: string): string => {
    const translationSet = TRANSLATIONS[language];
    return (translationSet as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
