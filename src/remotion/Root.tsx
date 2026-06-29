import { Composition } from "remotion";
import { VideoTemplate, VideoTemplateProps } from "./VideoTemplate";
import React from "react";

export const RemotionRoot: React.FC = () => {
  const defaultSubtitles = [
    { word: "Bienvenue", start: 0.2, end: 0.8 },
    { word: "sur", start: 0.9, end: 1.1 },
    { word: "ReelForge", start: 1.2, end: 1.8 },
    { word: "AI", start: 1.9, end: 2.3 },
    { word: "la", start: 2.4, end: 2.6 },
    { word: "plateforme", start: 2.7, end: 3.3 },
    { word: "qui", start: 3.4, end: 3.6 },
    { word: "automatise", start: 3.7, end: 4.5 },
    { word: "vos", start: 4.6, end: 4.8 },
    { word: "vidéos", start: 4.9, end: 5.4 },
    { word: "sans", start: 5.5, end: 5.8 },
    { word: "visage.", start: 5.9, end: 6.9 }
  ];

  return (
    <>
      <Composition
        id="ReelForgeTemplate"
        component={VideoTemplate as any}
        durationInFrames={900} // 30 seconds at 30 fps
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          voiceUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          subtitles: defaultSubtitles,
          imageUrls: [
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
          ],
          voiceVolume: 1.0,
          musicVolume: 0.15
        } as VideoTemplateProps}
      />
    </>
  );
};
