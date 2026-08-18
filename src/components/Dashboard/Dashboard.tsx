import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { MainFeed } from './MainFeed';
import { RightSidebar } from './RightSidebar';
import { SpiderIcon } from '../SpiderIcon';
import { MessageCircle } from 'lucide-react';

interface DashboardProps {
  onLogout?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeNav, setActiveNav] = useState('Home');

  return (
    /**
     * Root shell: full viewport, no scroll.
     * Three children stacked horizontally via flex:
     *   1. Sidebar         – sticky height, hover-expand
     *   2. MainFeed        – flex-1, overflow-y-auto (scrolls independently)
     *   3. RightSidebar    – fixed width, overflow-y-auto (scrolls independently)
     *
     * overflow-hidden on root prevents any global page scroll.
     */
    <div
      className="flex h-screen w-screen overflow-hidden bg-[#050505] text-[#F5F5F5]"
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      {/* 1 ── Left nav sidebar */}
      <Sidebar
        activeItem={activeNav}
        onNavigate={setActiveNav}
        onLogout={onLogout}
      />

      {/* 2 ── Center feed (fills remaining space between sidebars) */}
      <MainFeed />

      {/* 3 ── Right community panel */}
      <RightSidebar />

      {/* ── Decorative easter eggs (pointer-events-none so they never block clicks) */}
      <div className="pointer-events-none fixed top-20 right-[292px] z-10 text-red-500/20 animate-float select-none">
        <SpiderIcon className="w-7 h-7" />
      </div>
      <div className="pointer-events-none fixed bottom-16 left-16 z-10 text-purple-400/15 animate-float-reverse select-none">
        <SpiderIcon className="w-6 h-6" />
      </div>
      <div className="pointer-events-none fixed bottom-3 left-3 z-10 select-none">
        <span className="text-[8px] font-black tracking-[0.22em] text-red-500/15 uppercase font-mono">SPIDERMAN</span>
      </div>

      {/* ── Floating AI assistant button */}
      <button
        className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full
          bg-gradient-to-tr from-[#5227FF] via-[#35C1B5] to-[#FF9FFC] p-[2px]
          shadow-[0_0_20px_rgba(53,193,181,0.40)]
          hover:scale-110 active:scale-95 transition-transform duration-200 group"
        title="Cohort AI Assistant"
      >
        <div className="w-full h-full bg-[#08080F] rounded-full flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-[#35C1B5] group-hover:rotate-12 transition-transform duration-200" />
        </div>
      </button>
    </div>
  );
};
