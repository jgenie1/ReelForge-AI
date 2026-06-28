"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Globe, 
  Video, 
  Layers, 
  BarChart3, 
  Radio, 
  Settings, 
  LogOut, 
  Flame,
  Library,
  Store,
  LayoutDashboard
} from "lucide-react";

const SIDEBAR_ITEMS = [
  { id: "overview", name: "Vue d'ensemble", href: "/dashboard", icon: LayoutDashboard },
  { id: "videos", name: "Générateur Unique", href: "/dashboard/videos", icon: Video },
  { id: "library", name: "Bibliothèque", href: "/dashboard/library", icon: Library },
  { id: "series", name: "Séries Automatiques", href: "/dashboard/series", icon: Layers, badge: "AI" },
  { id: "marketplace", name: "Marketplace", href: "/dashboard/marketplace", icon: Store, badge: "NEW" },
  { id: "analytics", name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { id: "channels", name: "Canaux Sociaux", href: "/dashboard/channels", icon: Radio },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="flex-1 flex min-h-screen bg-background text-gray-100">
      
      {/* 1. SIDEBAR */}
      <aside className="w-64 border-r border-border bg-card/30 backdrop-blur-md flex flex-col justify-between p-6">
        
        {/* Top Section */}
        <div className="flex flex-col gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="ReelForge AI Logo" className="w-8 h-8 rounded-lg border border-primary/20" />
            <span className="font-display font-bold text-lg tracking-tight bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
              {t("app.name")}
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-3 mb-2">
              {t("menu.workspace")}
            </span>

            {SIDEBAR_ITEMS.map((item) => {
              const Icon = item.icon;
              let isActive = false;
              if (item.id === "overview") {
                isActive = pathname === "/dashboard";
              } else if (item.id === "videos") {
                isActive = pathname === "/dashboard/videos";
              } else if (item.id === "library") {
                isActive = pathname === "/dashboard/library" || 
                           pathname.startsWith("/dashboard/library/") || 
                           (pathname.startsWith("/dashboard/videos/") && pathname !== "/dashboard/videos");
              } else {
                isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors duration-150 group ${
                    isActive 
                      ? "bg-primary text-white shadow-lg shadow-primary/15" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400 group-hover:text-primary transition-colors"}`} />
                    <span>{t(`menu.${item.id}`)}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[8px] px-1.5 py-0.5 rounded font-black uppercase ${
                      isActive ? "bg-white text-primary" : "bg-primary/20 text-secondary"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-5">
          {/* Credit meter widget */}
          <div className="bg-white/5 border border-border/80 rounded-2xl p-4 flex flex-col gap-2.5">
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-gray-400 font-medium">{t("menu.credits")}</span>
              <span className="text-secondary font-extrabold flex items-center gap-0.5">
                <Flame className="w-3.5 h-3.5 text-secondary animate-pulse" />
                124 / 150
              </span>
            </div>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <div className="bg-secondary w-[82%] h-full rounded-full" />
            </div>
            <Link 
              href="/dashboard/billing" 
              className="text-[9px] text-center text-primary font-bold hover:text-white hover:underline mt-1"
            >
              {t("menu.recharge")}
            </Link>
          </div>

          <div className="h-px bg-border/60" />

          {/* User Settings & Sign Out */}
          <div className="flex flex-col gap-1 text-xs">
            <Link 
              href="/dashboard/settings" 
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 font-medium"
            >
              <Settings className="w-4 h-4" />
              {t("menu.settings")}
            </Link>
            <Link 
              href="/" 
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/5 font-medium"
            >
              <LogOut className="w-4 h-4" />
              {t("btn.signout")}
            </Link>
          </div>
        </div>

      </aside>

      {/* 2. CENTRAL WORKSPACE CONTENT */}
      <main className="flex-1 flex flex-col min-w-0 bg-background/90 relative overflow-y-auto">
        <header className="h-16 border-b border-border/60 flex items-center justify-between px-8 bg-card/10">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white rounded-xl text-xs font-bold transition-colors duration-150"
            title={language === "fr" ? "Switch to English" : "Passer en Français"}
          >
            <Globe className="w-3.5 h-3.5 text-primary" />
            <span className="uppercase">{language === "fr" ? "EN" : "FR"}</span>
          </button>

          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400 font-medium">
              {process.env.NEXT_PUBLIC_USE_MOCK_AI === "false" ? t("menu.real") : t("menu.sandbox")}
            </span>
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-xs font-black">
              C
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl w-full mx-auto flex-1 flex flex-col">
          {children}
        </div>
      </main>

    </div>
  );
}
