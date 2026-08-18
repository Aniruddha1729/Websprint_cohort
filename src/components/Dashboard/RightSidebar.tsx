import React from 'react';
import { Search, ChevronRight } from 'lucide-react';

/* ── Static data ─────────────────────────────────────────────── */
const COMMUNITIES = [
  { emoji: '🏛️', name: 'Higher Studies Club for UPSC / MPSC' },
  { emoji: '⚡', name: 'Google Developer Groups PCCoE' },
  { emoji: '🎓', name: 'Higher Studies Club for CAT / GMAT' },
];
const FRIENDS = [
  { name: 'C157_Shravan Kolhe', handle: '@shravan24', color: '#6366f1' },
  { name: 'FELINA MATHEW',      handle: '@felina22',  color: '#ec4899' },
  { name: 'Arnav Telangi',      handle: '@arnav24',   color: '#10b981' },
];
const CONNECT = [
  { name: 'C157_Shravan Kolhe', handle: '@shravan24' },
  { name: 'FELINA MATHEW',      handle: '@felina22'  },
  { name: 'Arnav Telangi',      handle: '@arnav24'   },
];

/* ── Section heading ────────────────────────────────────────── */
const SectionHead: React.FC<{ label: string; right?: React.ReactNode }> = ({ label, right }) => (
  <div className="flex items-center justify-between mb-2.5">
    <span className="text-[10px] font-bold tracking-[0.12em] text-gray-500 uppercase">{label}</span>
    {right ?? (
      <ChevronRight className="w-3.5 h-3.5 text-gray-600 hover:text-gray-300 cursor-pointer transition-colors" />
    )}
  </div>
);

/* ── RightSidebar ───────────────────────────────────────────── */
export const RightSidebar: React.FC = () => (
  /**
   * flex-shrink-0 + w-[280px] + h-screen + overflow-y-auto
   * This column is a flex child just like the sidebar and main feed.
   * It stays at a fixed width and scrolls its own content independently.
   */
  <aside
    className="
      flex-shrink-0 w-[280px] h-screen
      bg-[#07070A] border-l border-white/[0.06]
      overflow-y-auto overflow-x-hidden
      px-4 pt-4 pb-6
      space-y-0
    "
  >
    {/* Search */}
    <div className="relative mb-5">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 pointer-events-none" />
      <input
        type="text"
        placeholder="Search cohort…"
        className="
          w-full bg-[#0E0E14] border border-white/[0.08] rounded-xl
          py-2 pl-9 pr-12 text-[12px] text-white placeholder-gray-600
          focus:outline-none focus:border-[#35C1B5] transition-colors
        "
      />
      <kbd className="
        absolute right-3 top-1/2 -translate-y-1/2
        text-[9px] font-mono text-gray-500
        bg-white/[0.04] border border-white/[0.08]
        px-1.5 py-0.5 rounded select-none
      ">
        ⌘K
      </kbd>
    </div>

    {/* ── C/COMMUNITIES ─────────────────────────── */}
    <section className="mb-5">
      <SectionHead label="C/COMMUNITIES" />
      <div className="space-y-1.5">
        {COMMUNITIES.map((c, i) => (
          <button
            key={i}
            className="
              w-full flex items-center gap-2.5 p-2 rounded-xl text-left
              bg-[#0B0B10] border border-white/[0.04]
              hover:border-white/[0.11] hover:bg-[#0E0E16]
              transition-all duration-150
            "
          >
            <div className="w-7 h-7 rounded-lg bg-white/[0.05] flex items-center justify-center text-base flex-shrink-0">
              {c.emoji}
            </div>
            <span className="text-[12px] text-gray-300 truncate leading-snug">{c.name}</span>
          </button>
        ))}
      </div>
    </section>

    {/* ── C/FRIENDS ─────────────────────────────── */}
    <section className="mb-5 pt-4 border-t border-white/[0.05]">
      <SectionHead label="C/FRIENDS" />
      <div className="space-y-1">
        {FRIENDS.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-1.5 py-1.5 rounded-xl hover:bg-white/[0.04] cursor-pointer transition-colors"
          >
            <div
              className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-[11px] text-white"
              style={{ backgroundColor: f.color }}
            >
              {f.name[0]}
            </div>
            <div className="min-w-0">
              <p className="text-[12px] font-semibold text-white/90 truncate leading-snug">{f.name}</p>
              <p className="text-[10px] text-gray-500 font-mono truncate">{f.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ── C/CONNECT ─────────────────────────────── */}
    <section className="mb-5 pt-4 border-t border-white/[0.05]">
      <SectionHead label="C/CONNECT" />
      <div className="space-y-1">
        {CONNECT.map((u, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-1.5 py-1.5 rounded-xl hover:bg-white/[0.04] transition-colors"
          >
            <div className="min-w-0 flex-1 mr-2">
              <p className="text-[12px] font-semibold text-white/90 truncate">{u.name}</p>
              <p className="text-[10px] text-gray-500 font-mono truncate">{u.handle}</p>
            </div>
            <button className="
              flex-shrink-0 text-[10px] font-bold text-[#35C1B5]
              bg-[#35C1B5]/[0.10] border border-[#35C1B5]/25
              px-2 py-0.5 rounded-full
              hover:bg-[#35C1B5]/[0.18] transition-colors
            ">
              + Add
            </button>
          </div>
        ))}
      </div>
    </section>

    {/* ── C/CALENDAR ────────────────────────────── */}
    <section className="mb-5 pt-4 border-t border-white/[0.05]">
      <SectionHead label="C/CALENDAR" />
      <p className="text-[12px] text-gray-600 italic pl-1">No upcoming events</p>
    </section>

    {/* ── C/HEADSUP ─────────────────────────────── */}
    <section className="pt-4 border-t border-white/[0.05]">
      <SectionHead
        label="C/HEADSUP"
        right={
          <span className="text-[9px] font-bold text-amber-400 bg-amber-500/10 px-2 py-px rounded-full border border-amber-500/20">
            Important
          </span>
        }
      />
      <div className="bg-amber-500/[0.05] border border-amber-500/20 p-3 rounded-xl">
        <p className="text-[12px] text-amber-200/90 leading-relaxed">
          Full access will soon require a PCCOE account login.
        </p>
      </div>
    </section>
  </aside>
);
