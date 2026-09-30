# ComponentVerse - Free Cyberpunk Tailwind CSS Components

A collection of free, production-ready animated components built for Next.js and Tailwind CSS. Designed for high-performance telemetry layers, sci-fi interfaces, and futuristic webs.

🔗 Official Website: https://componentverse.space

🚀 Features
⚡ Optimized for Next.js: Copy, paste, and deploy in seconds.
🎨 Tailwind CSS Powered: Fully customizable styles.
👾 Futuristic Aesthetic: High-intensity neon glow, matrix layouts, and glitch effects.

📦 Included Free Components

### ⚡ Neon Glow Card Component (`NeonGlowCard.tsx`)
High-intensity cyan neon glow vectors with reactive data telemetry layers, high-precision tech corners, and an animated telemetry pulse.

Copy this code and deploy it in your project:

```tsx
import React from 'react';

interface NeonGlowCardProps {
  title?: string;
  description?: string;
  tag?: string;
  status?: 'active' | 'standby' | 'offline';
}

export const NeonGlowCard: React.FC<NeonGlowCardProps> = ({
  title = "DATA CORE SYNC",
  description = "Reactive matrix node established. Telemetry streams are operational and encrypted.",
  tag = "NODE // 074",
  status = "active"
}) => {
  
  const statusColors = {
    active: "bg-cyan-400 shadow-[0_0_8px_#22d3ee]",
    standby: "bg-yellow-400 shadow-[0_0_8px_#facc15]",
    offline: "bg-red-500 shadow-[0_0_8px_#ef4444]"
  };

  return (
    <div className="relative group max-w-sm rounded-lg border border-cyan-500/30 bg-slate-950 p-6 font-mono text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
      
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 -z-10 rounded-lg bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:4px_4px] opacity-20"></div>

      {/* Decorative Tech Corners */}
      <div className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-cyan-400"></div>
      <div className="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-cyan-400"></div>
      <div className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-cyan-400"></div>
      <div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-cyan-400"></div>

      {/* Component Header */}
      <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 text-xs tracking-widest text-cyan-500/70">
        <span>{tag}</span>
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${statusColors[status]}`}></span>
          <span className="uppercase text-[10px]">{status}</span>
        </div>
      </div>

      {/* Component Body */}
      <div className="mt-4">
        <h3 className="text-lg font-bold tracking-wider text-cyan-200 group-hover:text-cyan-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-cyan-400/80">
          {description}
        </p>
      </div>

      {/* Component Footer / Telemetry Detail */}
      <div className="mt-5 flex items-center justify-between text-[10px] text-cyan-600">
        <span>SYS.LOC // OUT_REACH</span>
        <span className="animate-pulse">● REC_STREAMING</span>
      </div>
      
    </div>
  );
};

export default NeonGlowCard;
```

💎 Want More? Get All-Access Lifetime!
Unlock our full premium catalog including:
* **Green Rooster Matrix** (Procedural emerald core telemetry layers)
* **Cyber Text Glitch** (Realtime typographic interference)
* **Matrix Text Decoder** (Cyberpunk hover effect)

👉 Explore Premium Components on [ComponentVerse](https://componentverse.space)
