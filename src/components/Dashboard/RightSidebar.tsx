import React from 'react';
import { Search, ChevronRight } from 'lucide-react';

/* ── Static data ─────────────────────────────────────────────── */
const COMMUNITIES = [
  { emoji: '🏛️', name: 'Higher Studies Club for UPSC / MPSC' },
  { emoji: '⚡', name: 'Google Developer Groups PCCoE' },
  { emoji: '🎓', name: 'Higher Studies Club for CAT / GMAT' },
  { emoji: '💻', name: 'WebSprint Cohort 2026 Developers' },
  { emoji: '🤖', name: 'Robocon PCCOE Sandbox Team' },
  { emoji: '🔬', name: 'IEEE PCCOE Student Chapter' },
  { emoji: '🚀', name: 'E-Cell PCCOE Startup Hub' },
  { emoji: '🎨', name: 'Design & XD UI/UX Guild' },
  { emoji: '🎵', name: 'Art Circle & Cultural Forum' }
];

const FRIENDS = [
  { name: 'C157_Shravan Kolhe', handle: '@shravan24', color: '#6366f1' },
  { name: 'FELINA MATHEW',      handle: '@felina22',  color: '#ec4899' },
  { name: 'Arnav Telangi',      handle: '@arnav24',   color: '#10b981' },
  { name: 'Soham Zagare',       handle: '@soham24',   color: '#f59e0b' },
  { name: 'Priya Deshmukh',     handle: '@priyad25',  color: '#8b5cf6' },
  { name: 'Rohan Patil',        handle: '@rohan_entc',color: '#3b82f6' },
  { name: 'Aarav Sharma',       handle: '@aarav26',   color: '#ef4444' },
  { name: 'Tanmay Kulkarni',    handle: '@tanmay25',  color: '#14b8a6' }
];

const CONNECT = [
  { name: 'C157_Shravan Kolhe', handle: '@shravan24' },
  { name: 'FELINA MATHEW',      handle: '@felina22'  },
  { name: 'Arnav Telangi',      handle: '@arnav24'   },
  { name: 'Shivam Deshmukh',    handle: '@shivam_comp' },
  { name: 'Neha Joshi',         handle: '@neha_council' },
  { name: 'Omkar Patil',        handle: '@omkar_robot' },
  { name: 'Saurabh Joshi',      handle: '@saurabh_it' }
];

const CALENDAR_EVENTS = [
  { title: 'WebSprint Cohort Hackathon', date: 'May 10 • 10:00 AM', tag: 'Hackathon' },
  { title: 'TOC Unit 4 & 5 Doubt Session', date: 'May 12 • 4:00 PM', tag: 'Exam Study' },
  { title: 'IEEE PyTorch ML Workshop', date: 'May 14 • 2:00 PM', tag: 'Workshop' },
  { title: 'Anantya Tech Fest Registration', date: 'May 18 • All Day', tag: 'Fest' },
  { title: 'Mid-Sem Exam Timetable Release', date: 'May 22 • Official', tag: 'Notice' }
];

const HEADSUP = [
  { text: 'Full access will soon require a PCCOE account login.', type: 'important' },
  { text: 'Central Library extended reading room hours: 8 AM to 11 PM during exam week.', type: 'info' },
  { text: 'WiFi maintenance in Building C tomorrow between 2 PM - 3 PM.', type: 'warning' }
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
  <aside
    className="
      w-[20%] min-w-[180px] flex-shrink-0 h-screen
      bg-[#07070A] border-l border-white/[0.06]
      overflow-y-auto overflow-x-hidden
      px-4 pt-4 pb-12
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
      <div className="space-y-2">
        {CALENDAR_EVENTS.map((event, i) => (
          <div key={i} className="bg-[#09090E] border border-white/[0.05] p-2.5 rounded-xl space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-white truncate">{event.title}</span>
              <span className="text-[9px] font-mono text-[#35C1B5] bg-[#35C1B5]/10 px-1.5 py-0.2 rounded">
                {event.tag}
              </span>
            </div>
            <p className="text-[10px] text-gray-500 font-mono">{event.date}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── C/HEADSUP ─────────────────────────────── */}
    <section className="pt-4 border-t border-white/[0.05]">
      <SectionHead
        label="C/HEADSUP"
        right={
          <span className="text-[9px] font-bold text-amber-400 bg-amber-500/10 px-2 py-px rounded-full border border-amber-500/20">
            3 Updates
          </span>
        }
      />
      <div className="space-y-2">
        {HEADSUP.map((item, i) => (
          <div
            key={i}
            className={`p-2.5 rounded-xl text-[11px] leading-relaxed border ${
              item.type === 'important'
                ? 'bg-amber-500/[0.05] border-amber-500/20 text-amber-200/90'
                : item.type === 'warning'
                ? 'bg-red-500/[0.05] border-red-500/20 text-red-200/90'
                : 'bg-blue-500/[0.05] border-blue-500/20 text-blue-200/90'
            }`}
          >
            {item.text}
          </div>
        ))}
      </div>
    </section>

  </aside>
);
