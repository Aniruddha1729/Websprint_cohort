import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  TrendingUp,
  Sun,
  Moon,
  ArrowRight,
  Radio,
  Grid,
  Heart,
  MessageSquare,
  Sparkles,
  MapPin,
  Calendar,
  Gamepad2,
  Code,
  Mail,
  Lock,
  Zap,
} from "lucide-react";
import LiquidEther from "../components/ui/LiquidEther";
import CurvedLoop from "../components/ui/CurvedLoop";
import { useAuth } from "../components/providers/AuthProvider";
import { useTheme } from "../components/providers/ThemeProvider";

function LinkedinIcon(props) {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z"/>
    </svg>
  );
}

export default function Landing() {
  const { bypassLogin } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    bypassLogin("student");
    navigate("/dashboard");
  };

  const barHeights = [55, 30, 50, 80, 35, 100, 50, 85, 55, 110];

  const communityLogos = [
    { name: "ACM", logo: "🎓", opacity: "opacity-60" },
    { name: "LFDT", logo: "⚡", opacity: "opacity-90" },
    { name: "IOT Club", logo: "📡", opacity: "opacity-90" },
    { name: "Geeks For Geeks", logo: "🚀", opacity: "opacity-90" },
    { name: "AMSA", logo: "🔬", opacity: "opacity-75" },
  ];

  const gridFeaturesRow1 = [
    {
      icon: Radio,
      title: "Home Feed",
      color: "text-blue-500",
      desc: "Stay updated with a personalized feed of posts, announcements, and discussions from your subscribed communities and friends across campus.",
    },
    {
      icon: Grid,
      title: "Communities",
      color: "text-purple-500",
      desc: "Discover and join 30+ student-run clubs and organizations at PCCOE — from OWASP and GDGC to Art Circle and NSS.",
    },
    {
      icon: Heart,
      title: "Friends",
      color: "text-blue-500",
      desc: "Build your campus network by adding friends, viewing their activity, and staying connected through shared communities.",
    },
    {
      icon: MessageSquare,
      title: "Connect",
      color: "text-purple-500",
      desc: "Real-time encrypted messaging with end-to-end privacy. Chat one-on-one or in group conversations with fellow students.",
    },
  ];

  const gridFeaturesRow2 = [
    {
      icon: Sparkles,
      title: "HeadsUp",
      color: "text-amber-500",
      desc: "Personalized notifications, recommendations, and campus alerts delivered in real-time to keep you informed.",
    },
    {
      icon: MapPin,
      title: "Campus Map",
      color: "text-emerald-500",
      desc: "Full vector map centered on PCCOE Akurdi campus with active building pins, avatar clusters, and location details.",
    },
    {
      icon: Calendar,
      title: "Academic Calendar",
      color: "text-rose-500",
      desc: "Track examination schedules, red channel results, timetable updates, and key campus deadlines effortlessly.",
    },
    {
      icon: Gamepad2,
      title: "Cohort Arcade",
      color: "text-cyan-500",
      desc: "Quick browser games inside Cohort including interactive Chess against Buddy AI, Tic-Tac-Toe, and Sudoku.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] dark:bg-[#0B0F19] text-foreground font-body select-none relative overflow-x-hidden flex flex-col">
      {/* Top Dark Charcoal Accent Border */}
      <div className="w-full h-[3px] bg-neutral-800 dark:bg-neutral-700" />

      {/* ========================================== */}
      {/* 1. HEADER (88-90px Height, Sticky)          */}
      {/* ========================================== */}
      <header className="w-full h-[90px] px-8 md:px-16 bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between z-50 sticky top-0">
        {/* Left Branding (Logo + Cohort wordmark) */}
        <div className="flex items-center gap-3.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-teal-400 flex items-center justify-center text-white font-bold font-secondary text-base shadow-md">
            C
          </div>
          <span className="font-heading font-extrabold text-2xl md:text-[30px] text-neutral-900 dark:text-white tracking-tight">
            Cohort
          </span>
          <div className="hidden sm:block w-16 h-4 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 blur-xs" />
        </div>

        {/* Right Header Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            title="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <button
            onClick={handleGetStarted}
            className="h-[44px] px-5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-300/80 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white text-xs font-bold flex items-center gap-2.5 shadow-sm transition-all active:scale-95 cursor-pointer shrink-0"
          >
            <svg className="w-4.5 h-4.5 bg-white rounded-full p-0.5 shadow-xs" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>Sign in with Google</span>
          </button>
        </div>
      </header>

      {/* ========================================== */}
      {/* 2. HERO / ANALYTICS SECTION (1920x900)     */}
      {/* ========================================== */}
      <section className="w-full relative flex items-center justify-center py-16 md:py-24 px-8 md:px-16 overflow-hidden min-h-[810px]">
        {/* React Bits LiquidEther Background */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <LiquidEther
            colors={["#4B2CFF", "#14B8A6", "#1E293B"]}
            mouseForce={25}
            cursorSize={120}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
          />
        </div>

        {/* Decorative Monochromatic Sketch Accents */}
        <div className="absolute top-20 left-16 opacity-15 pointer-events-none text-xl font-mono">
          ✦ ✍︎
        </div>
        <div className="absolute bottom-20 left-20 opacity-15 pointer-events-none text-xl font-mono">
          ☁︎ ✨
        </div>
        <div className="absolute top-36 right-16 opacity-15 pointer-events-none text-xl font-mono">
          ⚡︎ ✦
        </div>

        {/* Hero Content Wrapper */}
        <div className="max-w-[1700px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          
          {/* LEFT HERO COLUMN (Headline + Text + Buttons) */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-center">
            {/* Main 3-Line Headline */}
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-[86px] font-extrabold text-[#4B2CFF] dark:text-[#6366F1] tracking-tight leading-[1.0] text-left">
              A Social<br />
              Platform for<br />
              PCCOE
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-xl md:text-[22px] text-neutral-600 dark:text-neutral-300 leading-[1.5] max-w-[580px] text-left font-normal">
              Aggregate discussions, campus navigation, and encrypted messaging in real time. Monitor events and track opportunities—all without juggling multiple logins.
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleGetStarted}
                className="h-[60px] px-8 rounded-[14px] bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-neutral-900 text-lg font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={handleGetStarted}
                className="h-[60px] px-8 rounded-[14px] bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white text-lg font-bold shadow-sm hover:-translate-y-0.5 transition-all duration-300 active:scale-98 cursor-pointer flex items-center justify-center"
              >
                <span>Explore platform</span>
              </button>
            </div>
          </div>

          {/* RIGHT HERO VISUALIZATION (Analytics Browser Card) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[658px] min-h-[554px] p-8 rounded-[28px] bg-white dark:bg-[#0F172A] border border-neutral-200 dark:border-neutral-800 shadow-2xl space-y-6 hover:shadow-[0_25px_50px_-12px_rgba(75,44,255,0.15)] transition-all duration-500 relative group">
              
              {/* 3 Window Dots */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>

              {/* Inner Analytics Panel */}
              <div className="w-full min-h-[422px] p-8 rounded-[16px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-inner flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs md:text-sm font-semibold tracking-wider text-neutral-400 dark:text-neutral-500 uppercase">
                    TOTAL PROJECT VIEWS
                  </span>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Eye className="w-10 h-10 text-neutral-400 dark:text-neutral-500" />
                      <span className="font-heading text-4xl sm:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                        11,719
                      </span>
                    </div>

                    <div className="h-9 px-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1.5 shrink-0">
                      <TrendingUp className="w-4 h-4" />
                      <span>+4.2%</span>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-400 dark:text-neutral-500">
                    Updating in realtime
                  </p>
                </div>

                {/* 10-Bar Chart Visualization */}
                <div className="w-full pt-6 border-t border-neutral-100 dark:border-neutral-800/60">
                  <div className="w-full h-32 flex items-end justify-between gap-2.5 px-2">
                    {barHeights.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-500/20 to-purple-500/40 dark:from-blue-600/30 dark:to-purple-500/60 hover:from-blue-500 hover:to-purple-500 rounded-t-lg transition-all duration-300"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 3. SECTION 2 — CONNECTING COMMUNITIES       */}
      {/* ========================================== */}
      <section className="w-full py-20 px-8 md:px-16 border-t border-neutral-200 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md relative">
        <div className="max-w-[1400px] mx-auto space-y-16 text-center">
          {/* Section Heading (Purple-to-Magenta Gradient) */}
          <h2 className="font-heading text-4xl sm:text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4B2CFF] via-purple-600 to-pink-500 tracking-tight">
            Connecting Communities
          </h2>

          {/* Horizontally Distributed Row of 5 Community Logos */}
          <div className="flex flex-wrap items-center justify-between gap-8 px-4 md:px-12">
            {communityLogos.map((item, idx) => (
              <div
                key={idx}
                onClick={handleGetStarted}
                className={`flex items-center gap-3.5 ${item.opacity} hover:opacity-100 transition-opacity cursor-pointer group hover:scale-105 transition-transform duration-300`}
              >
                <div className="w-[55px] h-[55px] rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300/60 dark:border-neutral-700 flex items-center justify-center text-2xl shadow-sm group-hover:border-purple-500/50">
                  {item.logo}
                </div>
                <span className="font-heading font-bold text-lg text-neutral-700 dark:text-neutral-300 group-hover:text-purple-500">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. SECTION 3 — CURVED LOOP TEXT BANNER     */}
      {/* ========================================== */}
      <section className="w-full border-y border-neutral-200 dark:border-neutral-800 bg-neutral-900 text-white overflow-hidden relative">
        <CurvedLoop
          marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦ CONNECT ✦ DISCOVER ✦ NETWORK ✦ COLLABORATE ✦"
          speed={2}
          curveAmount={400}
          direction="right"
          interactive={true}
          className="fill-white text-white"
        />
      </section>

      {/* ========================================== */}
      {/* 5. SECTION 4 — EXPLORE PLATFORM FEATURES   */}
      {/* ========================================== */}
      <section className="w-full py-24 px-8 md:px-16 relative">
        <div className="max-w-[1375px] mx-auto space-y-16">
          {/* Section Heading & Description */}
          <div className="text-center space-y-4 max-w-[800px] mx-auto">
            <h2 className="font-heading text-4xl sm:text-[52px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 tracking-tight">
              Explore Platform Features
            </h2>
            <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              From encrypted messaging to real-time campus navigation, discover all the tools designed to empower your social experience.
            </p>
          </div>

          {/* 4-COLUMN BORDERED FEATURE GRID */}
          <div className="w-full rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0F172A] overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800">
            
            {/* ROW 1 */}
            {gridFeaturesRow1.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  onClick={handleGetStarted}
                  className="p-8 space-y-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${feat.color}`} />
                    </div>
                    <h3 className={`font-heading text-xl font-bold ${feat.color}`}>
                      {feat.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ROW 2 */}
          <div className="w-full rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0F172A] overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800">
            {gridFeaturesRow2.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  onClick={handleGetStarted}
                  className="p-8 space-y-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${feat.color}`} />
                    </div>
                    <h3 className={`font-heading text-xl font-bold ${feat.color}`}>
                      {feat.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 6. SECTION 5 — INFORMATION / ABOUT        */}
      {/* ========================================== */}
      <section className="w-full py-20 px-8 md:px-16 bg-white/40 dark:bg-neutral-900/30 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-[880px] mx-auto space-y-8 text-left">
          <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 leading-[1.7] font-normal">
            Build comprehensive <strong className="text-neutral-900 dark:text-white font-bold">achievement profiles</strong> showcasing certifications, hackathon wins, and project accomplishments to peers and faculty.
          </p>

          <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 leading-[1.7] font-normal">
            Built with modern technologies including React, Supabase, and real-time WebSocket connections, Cohort delivers a fast, responsive experience across desktop and mobile devices. The platform prioritizes student privacy, data security, and a distraction-free environment designed to enhance — not replace — the on-campus college experience.
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* 7. SECTION 6 — FOOTER                      */}
      {/* ========================================== */}
      <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-950 py-16 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Footer Column 1 — PRODUCT */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-600 dark:text-neutral-400">
              <li><Link to="/dashboard" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/dashboard/connect" className="hover:text-blue-500 transition-colors">Connect</Link></li>
              <li><Link to="/dashboard/map" className="hover:text-blue-500 transition-colors">Maps</Link></li>
              <li><Link to="/dashboard/profile" className="hover:text-blue-500 transition-colors">Student Profile</Link></li>
            </ul>
          </div>

          {/* Thin Vertical Divider 1 */}
          <div className="hidden md:block md:col-span-1 h-full border-r border-neutral-300 dark:border-neutral-800" />

          {/* Footer Column 2 — COMPANY */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-600 dark:text-neutral-400">
              <li><Link to="/dashboard/communities" className="hover:text-purple-500 transition-colors">Communities</Link></li>
              <li><Link to="/dashboard/network" className="hover:text-purple-500 transition-colors">Friends</Link></li>
              <li><Link to="/dashboard/xd" className="hover:text-purple-500 transition-colors">XD Board</Link></li>
              <li><Link to="/dashboard/calendar" className="hover:text-purple-500 transition-colors">Calendar</Link></li>
            </ul>
          </div>

          {/* Thin Vertical Divider 2 */}
          <div className="hidden md:block md:col-span-1 h-full border-r border-neutral-300 dark:border-neutral-800" />

          {/* Footer Social Icons & Copyright */}
          <div className="md:col-span-2 space-y-6 flex flex-col items-start md:items-end justify-between h-full">
            <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
              <a href="https://github.com/chiragferwani" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <Code className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <LinkedinIcon />
              </a>
              <a href="mailto:chiragferwani@gmail.com" className="hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <p className="text-xs text-neutral-500 dark:text-neutral-500">
              &copy; {new Date().getFullYear()} Cohort PCCOE
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}