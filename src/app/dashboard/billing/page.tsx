"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Check, 
  Flame, 
  Clock,
  Loader2,
  X
} from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    price: "19",
    credits: "50",
    desc: "Parfait pour tester la puissance de la forge IA.",
    features: [
      "50 vidéos courtes par mois",
      "Qualité SDXL / Claude 3.5 Sonnet",
      "Voix ElevenLabs standard",
      "Publication manuelle (téléchargement .mp4)"
    ],
    popular: false,
    color: "border-border hover:border-white/20"
  },
  {
    name: "Creator",
    price: "49",
    credits: "150",
    desc: "Idéal pour les créateurs qui publient 2x par jour.",
    features: [
      "150 vidéos courtes par mois",
      "Qualité SDXL & Midjourney intégrée",
      "Voix ElevenLabs premium (120+ voix)",
      "Planification et auto-posting automatique",
      "Support standard"
    ],
    popular: true,
    color: "border-primary bg-primary/5 shadow-xl shadow-primary/5"
  },
  {
    name: "Agency",
    price: "99",
    credits: "400",
    desc: "Pour les agences de contenu qui gèrent plusieurs canaux.",
    features: [
      "400 vidéos courtes par mois",
      "Multi-comptes TikTok / Instagram / YouTube",
      "Clonage de voix (ElevenLabs Voice Cloning)",
      "Auto-ducking audio avancé",
      "Support prioritaire 24/7"
    ],
    popular: false,
    color: "border-secondary/50 hover:border-secondary"
  }
];

const INITIAL_BILLING_HISTORY = [
  { id: "inv-9032", date: "12 Juin 2026", description: "Abonnement Plan Creator (Mensuel)", amount: "49.00 €", status: "Payé" },
  { id: "inv-8721", date: "15 Mai 2026", description: "Recharge 50 Crédits à la carte", amount: "19.00 €", status: "Payé" },
  { id: "inv-8409", date: "12 Mai 2026", description: "Abonnement Plan Creator (Mensuel)", amount: "49.00 €", status: "Payé" }
];

export default function BillingHub() {
  const { language } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string>("Creator");
  const [logs, setLogs] = useState(INITIAL_BILLING_HISTORY);
  
  const [credits, setCredits] = useState(124);
  const [maxCredits, setMaxCredits] = useState(150);
  
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);
  const [creditsModalOpen, setCreditsModalOpen] = useState(false);

  // Sync user credits count from stats endpoint
  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const res = await fetch("/api/dashboard/stats");
        if (res.ok) {
          const data = await res.json();
          if (data && data.credits !== undefined) {
            setCredits(data.credits);
            if (data.totalSeries > 0) {
              setSelectedPlan("Agency");
              setMaxCredits(400);
            } else if (data.totalVideos > 20) {
              setSelectedPlan("Creator");
              setMaxCredits(150);
            } else {
              setSelectedPlan("Starter");
              setMaxCredits(50);
            }
          }
        }
      } catch (err) {
        console.error("Error fetching credits on billing page:", err);
      }
    };
    fetchCredits();
  }, []);

  const getPlanDesc = (name: string) => {
    if (language === "en") {
      switch (name) {
        case "Starter": return "Perfect for testing the power of the AI forge.";
        case "Creator": return "Ideal for creators posting twice a day.";
        case "Agency": return "For content agencies managing multiple channels.";
        default: return "";
      }
    }
    return PLANS.find(p => p.name === name)?.desc || "";
  };

  const getPlanFeatures = (name: string) => {
    if (language === "en") {
      switch (name) {
        case "Starter": return [
          "50 short videos per month",
          "SDXL / Claude 3.5 Sonnet quality",
          "Standard ElevenLabs voices",
          "Manual publishing (mp4 download)"
        ];
        case "Creator": return [
          "150 short videos per month",
          "SDXL & Midjourney integrated quality",
          "Premium ElevenLabs voices (120+ voices)",
          "Automatic scheduling and posting",
          "Standard support"
        ];
        case "Agency": return [
          "400 short videos per month",
          "Multi-account TikTok / Instagram / YouTube",
          "Voice cloning (ElevenLabs Voice Cloning)",
          "Advanced audio auto-ducking",
          "Priority support 24/7"
        ];
        default: return [];
      }
    }
    return PLANS.find(p => p.name === name)?.features || [];
  };

  const getLogDescription = (desc: string) => {
    if (language === "en") {
      if (desc.includes("Abonnement Plan Creator")) return "Creator Plan Subscription (Monthly)";
      if (desc.includes("Abonnement Plan Starter")) return "Starter Plan Subscription (Monthly)";
      if (desc.includes("Abonnement Plan Agency")) return "Agency Plan Subscription (Monthly)";
      if (desc.includes("Recharge")) return desc.replace("Recharge", "Top up").replace("Crédits à la carte", "On-demand Credits");
    }
    return desc;
  };

  const getLogDate = (date: string) => {
    if (language === "en") {
      return date.replace("Juin", "June").replace("Mai", "May");
    }
    return date;
  };

  const calculatePrice = (basePrice: string) => {
    const num = Number(basePrice);
    if (billingCycle === "yearly") {
      return Math.round(num * 0.8).toString(); // 20% discount
    }
    return basePrice;
  };

  const handlePlanCheckout = async (planName: string) => {
    if (planName === selectedPlan) return;
    setCheckoutLoading(planName);
    
    // Simulate redirection/processing Stripe session
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const addedCredits = planName === "Agency" ? 400 : planName === "Starter" ? 50 : 150;
    const planPrice = planName === "Agency" ? "99.00 €" : planName === "Starter" ? "19.00 €" : "49.00 €";

    setCredits(addedCredits);
    setMaxCredits(addedCredits);
    setSelectedPlan(planName);

    setLogs(prev => [
      {
        id: `inv-${Math.floor(1000 + Math.random() * 9000)}`,
        date: new Date().toLocaleDateString(language === "fr" ? "fr-FR" : "en-US", { day: "numeric", month: "long", year: "numeric" }),
        description: `Abonnement Plan ${planName} (${billingCycle === "yearly" ? "Annuel" : "Mensuel"})`,
        amount: planPrice,
        status: "Payé"
      },
      ...prev
    ]);

    setSuccessMsg(language === "fr" ? `Abonnement au plan ${planName} activé avec succès (Mode Simulation).` : `Successfully subscribed to ${planName} plan (Simulation Mode).`);
    setCheckoutLoading(null);
    setTimeout(() => setSuccessMsg(null), 4000);
  };

  const handleBuyCredits = async (amount: number, price: string) => {
    setCheckoutLoading("credits");
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setCredits(prev => prev + amount);
    setLogs(prev => [
      {
        id: `inv-${Math.floor(1000 + Math.random() * 9000)}`,
        date: new Date().toLocaleDateString(language === "fr" ? "fr-FR" : "en-US", { day: "numeric", month: "long", year: "numeric" }),
        description: `Recharge ${amount} Crédits à la carte`,
        amount: price,
        status: "Payé"
      },
      ...prev
    ]);

    setSuccessMsg(language === "fr" ? `Recharge de ${amount} crédits effectuée avec succès (Simulation).` : `Successfully topped up ${amount} credits (Simulation).`);
    setCreditsModalOpen(false);
    setCheckoutLoading(null);
    setTimeout(() => setSuccessMsg(null), 4000);
  };

  return (
    <div className="flex flex-col gap-8 text-left font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white font-display">
            {language === "fr" ? "Abonnements & Crédits" : "Subscriptions & Credits"}
          </h1>
          <p className="text-xs text-gray-400">{language === "fr" ? "Gérez votre plan tarifaire et rechargez vos jetons de forge à la demande." : "Manage your pricing plan and top up your forge tokens on demand."}</p>
        </div>

        {/* Toggle billing cycle */}
        <div className="flex gap-2 p-1 bg-white/5 border border-border rounded-xl w-fit text-xs">
          <button 
            onClick={() => setBillingCycle("monthly")}
            className={`px-3.5 py-1.5 font-semibold rounded-lg transition-all ${
              billingCycle === "monthly" ? "bg-primary text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            {language === "fr" ? "Mensuel" : "Monthly"}
          </button>
          <button 
            onClick={() => setBillingCycle("yearly")}
            className={`px-3.5 py-1.5 font-semibold rounded-lg transition-all ${
              billingCycle === "yearly" ? "bg-primary text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            {language === "fr" ? "Annuel (-20%)" : "Yearly (-20%)"}
          </button>
        </div>
      </div>

      {/* Alert Banner */}
      {successMsg && (
        <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-2xl text-xs font-semibold text-green-400">
          {successMsg}
        </div>
      )}

      {/* Credit meter details widget */}
      <div className="glass-panel p-6 rounded-3xl border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <span className="p-3 bg-secondary/20 text-secondary rounded-2xl">
            <Flame className="w-6 h-6 text-secondary animate-pulse" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-white font-display">{language === "fr" ? "Votre Solde de Crédits Actuel" : "Your Current Credit Balance"}</h3>
            <p className="text-xs text-gray-400 mt-1 max-w-md">
              {language === "fr" ? "Chaque vidéo forgée déduit 1 crédit. Votre solde est renouvelé tous les mois selon les termes de votre contrat d'abonnement." : "Each forged video deducts 1 credit. Your balance is renewed monthly according to your subscription terms."}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 flex-shrink-0 w-full sm:w-auto">
          <span className="text-2xl font-black text-white font-display">{credits} / {maxCredits} <span className="text-xs text-gray-500 font-medium">{language === "fr" ? "crédits" : "credits"}</span></span>
          <button 
            onClick={() => setCreditsModalOpen(true)}
            className="px-4 py-2 text-xs font-bold text-background bg-secondary hover:bg-secondary-hover rounded-xl shadow-lg shadow-secondary/10 active:scale-95 transition-all w-full sm:w-auto font-display"
          >
            {language === "fr" ? "Acheter des crédits à la carte" : "Buy credits on demand"}
          </button>
        </div>
      </div>

      {/* Pricing comparison cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PLANS.map((plan) => (
          <div 
            key={plan.name} 
            className={`glass-panel p-6 sm:p-8 rounded-3xl border flex flex-col justify-between relative transition-all ${plan.color}`}
          >
            {plan.popular && (
              <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-primary text-white text-[9px] font-black uppercase tracking-wider rounded-full shadow-md">
                {language === "fr" ? "Recommandé" : "Recommended"}
              </span>
            )}

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-bold text-white font-display">{plan.name}</h3>
                <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">{getPlanDesc(plan.name)}</p>
              </div>

              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-black text-white font-display">{calculatePrice(plan.price)}€</span>
                <span className="text-[10px] text-gray-400 font-semibold">/ {billingCycle === "yearly" ? (language === "fr" ? "an" : "year") : (language === "fr" ? "mois" : "month")}</span>
              </div>

              <div className="p-3 bg-white/5 border border-border rounded-xl mt-1 flex items-center justify-between text-xs">
                <span className="text-gray-400">{language === "fr" ? "Jetons inclus :" : "Tokens included:"}</span>
                <span className="text-secondary font-black flex items-center gap-0.5">
                  <Flame className="w-3.5 h-3.5 text-secondary" />
                  {plan.credits} {language === "fr" ? "crédits" : "credits"}
                </span>
              </div>

              <div className="h-px bg-border/60 my-2" />

              <ul className="flex flex-col gap-3.5 text-xs text-gray-300">
                {getPlanFeatures(plan.name).map((feat, index) => (
                  <li key={index} className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => handlePlanCheckout(plan.name)}
              disabled={checkoutLoading !== null}
              className={`w-full mt-8 py-3.5 font-bold text-xs rounded-xl active:scale-95 transition-all flex items-center justify-center gap-2 font-display ${
                plan.name === selectedPlan 
                  ? "bg-secondary text-background hover:bg-secondary-hover shadow-lg shadow-secondary/10" 
                  : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
              }`}
            >
              {checkoutLoading === plan.name ? (
                <Loader2 className="w-4 h-4 animate-spin text-white" />
              ) : plan.name === selectedPlan ? (
                language === "fr" ? "Plan Actif" : "Active Plan"
              ) : (
                language === "fr" ? `Choisir le plan ${plan.name}` : `Choose the ${plan.name} plan`
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Invoice history */}
      <div className="glass-panel p-6 rounded-3xl border border-border flex flex-col gap-4 text-left">
        <div>
          <h3 className="text-sm font-bold text-white font-display">{language === "fr" ? "Historique des transactions" : "Transaction History"}</h3>
          <p className="text-[10px] text-gray-400 mt-0.5 font-medium">{language === "fr" ? "Reçus et factures d'achats de forfaits ou de crédits." : "Receipts and invoices for subscription plans or credits."}</p>
        </div>

        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-border/80 text-gray-400 font-bold">
                <th className="py-2.5 px-4">{language === "fr" ? "Référence" : "Reference"}</th>
                <th className="py-2.5 px-4">{language === "fr" ? "Date" : "Date"}</th>
                <th className="py-2.5 px-4">{language === "fr" ? "Désignation" : "Description"}</th>
                <th className="py-2.5 px-4">{language === "fr" ? "Montant" : "Amount"}</th>
                <th className="py-2.5 px-4 text-right">{language === "fr" ? "Statut" : "Status"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {logs.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-semibold text-gray-300">{invoice.id}</td>
                  <td className="py-3 px-4 text-gray-400">{getLogDate(invoice.date)}</td>
                  <td className="py-3 px-4 text-white font-semibold">{getLogDescription(invoice.description)}</td>
                  <td className="py-3 px-4 text-white font-bold">{invoice.amount}</td>
                  <td className="py-3 px-4 text-right">
                    <span className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full font-bold text-[9px]">
                      {language === "fr" ? invoice.status : "Paid"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Buy Credits Modal Selector */}
      {creditsModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-panel max-w-md w-full border border-border rounded-3xl p-6 sm:p-8 flex flex-col gap-6 relative animate-scale-up">
            <button 
              onClick={() => setCreditsModalOpen(false)}
              className="absolute right-4 top-4 p-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <h3 className="text-base font-bold text-white font-display flex items-center gap-1.5">
                <Flame className="w-5 h-5 text-secondary animate-pulse" />
                {language === "fr" ? "Recharger des Crédits" : "Top Up Credits"}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {language === "fr" ? "Ajoutez instantanément des jetons à votre balance pour continuer à forger." : "Instantly add tokens to your balance to keep forging."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={() => handleBuyCredits(50, "19.00 €")}
                disabled={checkoutLoading !== null}
                className="p-5 border border-border hover:border-primary rounded-2xl flex flex-col items-center gap-2 cursor-pointer bg-white/5 hover:bg-white/10 active:scale-95 transition-all text-center"
              >
                <span className="text-sm font-black text-white font-display">50 {language === "fr" ? "crédits" : "credits"}</span>
                <span className="text-xs font-bold text-secondary">19.00 €</span>
              </button>

              <button 
                onClick={() => handleBuyCredits(150, "49.00 €")}
                disabled={checkoutLoading !== null}
                className="p-5 border border-border hover:border-primary rounded-2xl flex flex-col items-center gap-2 cursor-pointer bg-white/5 hover:bg-white/10 active:scale-95 transition-all text-center"
              >
                <span className="text-sm font-black text-white font-display">150 {language === "fr" ? "crédits" : "credits"}</span>
                <span className="text-xs font-bold text-secondary">49.00 €</span>
              </button>
            </div>
            
            {checkoutLoading === "credits" && (
              <div className="flex justify-center items-center gap-2 text-xs font-bold text-gray-400">
                <Loader2 className="w-4 h-4 animate-spin text-secondary" />
                {language === "fr" ? "Simulation de la passerelle Stripe..." : "Simulating Stripe Checkout..."}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
