import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "ReelForge AI — Automated Face-less Short-Form Video Generator",
  description:
    "Generate and auto-publish viral face-less videos (TikTok, Reels, Shorts) in seconds using AI scriptwriting, clone-voice translation, and SDXL visual rendering.",
  keywords: "reels, tiktok, shorts, automation, faceless videos, AI video generator, video marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const isClerkConfigured = publishableKey && 
    publishableKey !== "pk_test_..." && 
    !publishableKey.includes("placeholder") && 
    !publishableKey.includes("mock-clerk-url") &&
    !publishableKey.startsWith("pk_test_bW9jay");

  const content = (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${syne.variable} font-sans min-h-screen bg-background text-gray-100 antialiased flex flex-col`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );

  if (isClerkConfigured) {
    return (
      <ClerkProvider publishableKey={publishableKey}>
        {content}
      </ClerkProvider>
    );
  }

  return content;
}
