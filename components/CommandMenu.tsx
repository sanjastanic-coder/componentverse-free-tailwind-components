'use client';

import React, { useState, useEffect } from 'react';

export default function GlowingCommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  // Sblocca il menu con la combinazione tasti CMD+K o CTRL+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return (
    <div className="flex flex-col items-center justify-center min-h-[200px] bg-slate-950 rounded-2xl border border-slate-800 p-6 text-center">
      <p className="text-sm text-slate-400 font-mono mb-3">⚡ ComponentVerse Free Module #09 Premium Preview</p>
      <button 
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-cyan-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 active:scale-95 cursor-pointer"
      >
        Press ⌘K or Click to Open Terminal
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden shadow-cyan-500/10">
        
        {/* Neon Glow Border Effect */}
        <div className="absolute inset-0 border border-cyan-500/30 rounded-2xl pointer-events-none animate-pulse" />

        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <span className="text-cyan-400 font-mono text-sm">⚡</span>
          <input 
            type="text" 
            placeholder="Search premium modules, components, docs..." 
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 outline-none font-mono"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => setIsOpen(false)} className="text-xs text-slate-500 hover:text-white font-mono px-2 py-1 bg-slate-800 rounded">ESC</button>
        </div>

        <div className="p-2 max-h-64 overflow-y-auto space-y-1 font-mono">
          <div className="p-3 bg-slate-800/40 border border-slate-700/30 rounded-xl flex items-center justify-between text-xs text-slate-200 hover:bg-cyan-950/30 hover:border-cyan-500/40 transition-all cursor-pointer">
            <span>📦 #01 - 3D Earth Vector Tracking Hero</span>
            <span className="text-xxs px-2 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-400">PRO</span>
          </div>
          <div className="p-3 bg-slate-800/40 border border-slate-700/30 rounded-xl flex items-center justify-between text-xs text-slate-200 hover:bg-cyan-950/30 hover:border-cyan-500/40 transition-all cursor-pointer">
            <span>📊 #04 - Bento Grid Analytics Module</span>
            <span className="text-xxs px-2 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-400">PRO</span>
          </div>
          <div className="p-3 bg-cyan-950/20 border border-cyan-500/30 rounded-xl flex items-center justify-between text-xs text-cyan-400">
            <span>🔥 #09 - Interactive Glowing Command Menu</span>
            <span className="text-xxs px-2 py-0.5 bg-cyan-500 text-slate-950 font-bold rounded">FREE FILE</span>
          </div>
        </div>

        <div className="p-3 bg-slate-950 border-t border-slate-800/60 flex justify-between items-center text-xxs text-slate-500 font-mono">
          <span>Use ↑↓ keys to navigate</span>
          <span>Powered by <a href="https://componentverse.space" target="_blank" className="text-cyan-400 hover:underline">ComponentVerse.space</a></span>
        </div>
      </div>
    </div>
  );
}
