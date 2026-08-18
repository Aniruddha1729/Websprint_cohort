import React, { useState, useEffect } from 'react';
import { Sun, Moon, Eye, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import LiquidEther from '../LiquidEther';
import { SpiderIcon } from './SpiderIcon';

interface LandingPageProps {
  onOpenAuthModal: () => void;
  onBypassLogin: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onOpenAuthModal,
  onBypassLogin,
}) => {
  const [isDark, setIsDark] = useState(true);
  const [views, setViews] = useState(11_565);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const BAR_HEIGHTS = [45, 62, 38, 85, 70, 92, 54, 78, 96, 68, 82, 100, 74, 88];

  useEffect(() => {
    const id = setInterval(() => setViews(v => v + Math.floor(Math.random() * 3) + 1), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#050505] text-[#F5F5F5] overflow-x-hidden selection:bg-[#8067FF] selection:text-white">

      {/* ── Navbar ───────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[64px] bg-[#050505]/80 backdrop-blur-md border-b border-white/[0.07] px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5227FF] to-[#FF9FFC] p-[2px] shadow-[0_0_12px_rgba(128,103,255,0.4)]">
            <div className="w-full h-full bg-[#08080f] rounded-full flex items-center justify-center">
              <span className="text-[#FF9FFC] font-extrabold text-base leading-none">C</span>
            </div>
          </div>
          <span className="font-extrabold text-[18px] text-white tracking-tight">Cohort</span>
          <span className="hidden sm:flex items-center px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#A78BFA] uppercase bg-[#8067FF]/10 border border-[#8067FF]/25 rounded-full">
            PCCOE
          </span>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsDark(d => !d)}
            className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20 transition-all"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onBypassLogin}
            className="flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#111116] border border-white/[0.12] hover:border-white/25 text-white font-semibold text-[13px] px-4 py-2 rounded-xl transition-all hover:scale-[1.02] shadow-md group"
          >
            <svg className="w-4 h-4 group-hover:rotate-6 transition-transform duration-200" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            Sign in with Google
          </button>
        </div>
      </header>

      {/* ── Hero Section ─────────────────────────────────────── */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-16">

        {/* LiquidEther full-screen background */}
        <div className="absolute inset-0 z-0 opacity-65 pointer-events-auto">
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B497CF']}
            mouseForce={22} cursorSize={110}
            isViscous viscous={39} iterationsViscous={36} iterationsPoisson={11}
            resolution={0.5} isBounce={false}
            autoDemo autoSpeed={0.35} autoIntensity={0.6}
            takeoverDuration={0.25} autoResumeDelay={1000} autoRampDuration={0.6}
            color0="#5227FF" color1="#FF9FFC" color2="#B497CF"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Ambient glows */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#8067FF]/15 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#60A5FA]/10 rounded-full blur-[180px] pointer-events-none" />

        {/* Easter eggs */}
        <div className="absolute top-24 left-4 text-red-500/25 animate-float pointer-events-none z-10">
          <SpiderIcon className="w-9 h-9" />
        </div>
        <div className="absolute bottom-16 right-8 text-indigo-400/15 animate-float-reverse pointer-events-none z-10">
          <SpiderIcon className="w-11 h-11" />
        </div>

        {/* Grid: 50/50 */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center py-16">

          {/* LEFT — Text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.10] backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9FFC]" />
              <span className="text-[11px] font-semibold text-gray-300">Official Student Social Platform</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.05] gradient-text-hero">
              A Social<br />
              Platform<br />
              for PCCOE
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
              Aggregate discussions, campus navigation, and encrypted messaging in real time — all without juggling multiple logins.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <button
                onClick={onBypassLogin}
                className="bg-white text-black font-bold px-7 py-3.5 rounded-full hover:bg-gray-100 hover:scale-[1.03] transition-all shadow-[0_0_28px_rgba(255,255,255,0.25)] flex items-center gap-2 text-[14px]"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onBypassLogin}
                className="bg-white/[0.05] border border-white/[0.12] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/[0.10] hover:scale-[1.02] transition-all text-[14px] backdrop-blur-sm"
              >
                Explore platform
              </button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.08] max-w-sm">
              <div>
                <p className="text-2xl font-extrabold text-white">4,800+</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Active Students</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#A78BFA]">120+</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Tech Projects</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#FF9FFC]">100%</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Verified</p>
              </div>
            </div>
          </div>

          {/* RIGHT — macOS Dashboard card */}
          <div
            onClick={onBypassLogin}
            className="
              cursor-pointer w-full bg-[#0A0A0E]/90 border border-white/[0.10]
              rounded-3xl overflow-hidden
              shadow-[0_0_80px_rgba(0,0,0,0.6)]
              backdrop-blur-2xl
              hover:border-[#8067FF]/40 hover:shadow-[0_0_100px_rgba(0,0,0,0.7)]
              transition-all duration-300
            "
          >
            {/* Rainbow top bar */}
            <div className="h-1 bg-gradient-to-r from-[#5227FF] via-[#FF9FFC] to-[#B497CF]" />

            <div className="p-7 md:p-9 space-y-6">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 border-b border-white/[0.07] pb-4">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-auto text-[11px] font-mono text-gray-500">pccoe-cohort.internal/dashboard</span>
              </div>

              {/* Metric */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[0.14em] text-gray-500 uppercase">Total Project Views</span>
                <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  <TrendingUp className="w-3 h-3" /> +4.2%
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <Eye className="w-8 h-8 text-[#A78BFA]" />
                <span className="text-5xl md:text-6xl font-extrabold tracking-tight text-white font-mono">
                  {views.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-gray-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Updating in realtime · Click to open Dashboard
              </div>

              {/* Bar chart */}
              <div className="bg-[#050508]/80 border border-white/[0.06] rounded-2xl p-4">
                <div className="flex items-end justify-between h-36 gap-1.5">
                  {BAR_HEIGHTS.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 h-full flex flex-col justify-end relative group/bar"
                      onMouseEnter={() => setHoveredBar(i)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      {hoveredBar === i && (
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#1a1a24] text-[10px] text-white px-2 py-0.5 rounded border border-white/15 whitespace-nowrap z-30 font-mono shadow-xl">
                          {(h * 125).toLocaleString()}
                        </div>
                      )}
                      <div
                        style={{ height: `${h}%` }}
                        className={`w-full rounded-t-md transition-all duration-200 ${
                          hoveredBar === i
                            ? 'bg-gradient-to-t from-[#8067FF] to-[#FF9FFC] shadow-[0_0_12px_rgba(255,159,252,0.5)]'
                            : 'bg-gradient-to-t from-[#1d1936] to-[#5d47b5] group-hover/bar:from-[#5227FF] group-hover/bar:to-[#A78BFA]'
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-gray-600 mt-2 font-mono">
                  {['00:00','04:00','08:00','12:00','16:00','20:00','24:00'].map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="w-full border-t border-white/[0.07] bg-[#030305] py-10 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-gray-600 text-[11px]">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#8067FF] flex items-center justify-center text-white font-bold text-[10px]">C</div>
            <span className="text-gray-400 font-semibold text-[12px]">Cohort for PCCOE</span>
            <span>• Pimpri Chinchwad College of Engineering</span>
          </div>
          <div className="flex items-center gap-5">
            <button onClick={onBypassLogin} className="hover:text-white transition-colors">Enter Dashboard</button>
            <button onClick={onOpenAuthModal} className="hover:text-white transition-colors">Student Login</button>
          </div>
          <span>© {new Date().getFullYear()} Cohort Platform</span>
        </div>
      </footer>

    </div>
  );
};
