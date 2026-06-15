"use client";

import { 
  AbsoluteFill, 
  Audio, 
  Img, 
  interpolate, 
  spring, 
  useCurrentFrame, 
  useVideoConfig,
  Sequence
} from "remotion";
import React from "react";

export interface SubtitleWord {
  word: string;
  start: number; // in seconds
  end: number; // in seconds
}

export interface VideoTemplateProps {
  imageUrls?: string[];
  voiceUrl: string;
  musicUrl?: string;
  subtitles: SubtitleWord[];
  voiceVolume?: number;
  musicVolume?: number;
}

export const VideoTemplate: React.FC<VideoTemplateProps> = ({
  imageUrls = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
  ],
  voiceUrl,
  musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  subtitles = [],
  voiceVolume = 1.0,
  musicVolume = 0.2
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const durationInSeconds = durationInFrames / fps;
  const imageCount = imageUrls.length;
  const framesPerImage = Math.ceil(durationInFrames / imageCount);

  // Subtitle Synchronization Logic
  const currentTime = frame / fps;
  const activeWordIndex = subtitles.findIndex(
    (w) => currentTime >= w.start && currentTime <= w.end
  );

  return (
    <AbsoluteFill className="bg-black flex flex-col justify-between overflow-hidden">
      
      {/* 1. IMAGE SLIDES WITH GOLDEN PAN/ZOOM (KEN BURNS EFFECT) */}
      <AbsoluteFill className="z-0">
        {imageUrls.map((url, index) => {
          const startFrame = index * framesPerImage;
          const duration = Math.min(framesPerImage, durationInFrames - startFrame);

          if (frame < startFrame || frame >= startFrame + duration) {
            return null;
          }

          // Local frame inside the active slide duration
          const localFrame = frame - startFrame;

          // Pan & Zoom Interpolation: Scale from 1.0 to 1.12 over the slide duration
          const scale = interpolate(
            localFrame,
            [0, duration],
            [1.0, 1.15],
            { extrapolateRight: "clamp" }
          );

          // Subtle opacity transition between slides
          const opacity = interpolate(
            localFrame,
            [0, 15, duration - 15, duration],
            [0, 1, 1, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          return (
            <AbsoluteFill key={index} style={{ opacity }}>
              <Img
                src={url}
                className="w-full h-full object-cover"
                style={{
                  transform: `scale(${scale})`,
                }}
              />
            </AbsoluteFill>
          );
        })}
      </AbsoluteFill>

      {/* Dark vignette overlay for premium text visibility */}
      <AbsoluteFill className="z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.85)_100%)]" />

      {/* 2. DYNAMIC TITLES / BRANDING IN ROOTS */}
      <div className="z-20 p-8 flex items-center justify-between">
        <div className="px-3 py-1 rounded-full border border-cyan-500/30 bg-black/60 backdrop-blur-md text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
          ReelForge AI
        </div>
      </div>

      {/* 3. SUBTITLE / CAPTIONS KARAOKE LAYER (TIKTOK STYLE) */}
      <div className="z-20 flex flex-col items-center justify-center text-center px-8 pb-32">
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 max-w-lg">
          {subtitles.map((w, index) => {
            const isActive = index === activeWordIndex;
            const isPassed = index < activeWordIndex;

            // Highlight animation pop for active word
            let textScale = 1.0;
            if (isActive) {
              const activeFrame = frame - (w.start * fps);
              textScale = spring({
                frame: activeFrame,
                fps,
                config: { damping: 10, stiffness: 100 },
                from: 1.0,
                to: 1.25,
              });
            }

            return (
              <span
                key={index}
                className={`font-display font-black text-xl sm:text-2xl uppercase tracking-wide px-1 rounded transition-colors ${
                  isActive
                    ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/30"
                    : isPassed
                    ? "text-white/80"
                    : "text-white/40"
                }`}
                style={{
                  transform: `scale(${textScale})`,
                  display: "inline-block",
                }}
              >
                {w.word}
              </span>
            );
          })}
        </div>
      </div>

      {/* 4. AUDIO VOICE & MUSIC PLAYERS */}
      <AbsoluteFill className="pointer-events-none">
        {/* Narrator Voice Track */}
        {voiceUrl && (
          <Audio 
            src={voiceUrl} 
            volume={voiceVolume} 
          />
        )}
        {/* Background Music with ducking */}
        {musicUrl && (
          <Audio 
            src={musicUrl} 
            volume={musicVolume} 
          />
        )}
      </AbsoluteFill>

    </AbsoluteFill>
  );
};
