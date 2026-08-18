import { useState, useEffect, useRef } from "react";
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

function AnimatedCounter({ end = 11719, duration = 1800, suffix = "", prefix = "", decimals = 0 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeOutProgress * end;
            
            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  const displayVal = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toLocaleString("en-US");

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {prefix}{displayVal}{suffix}
    </span>
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
    { name: "ACM", logo: "🎓" },
    { name: "LFDT", logo: "⚡" },
    { name: "IOT Club", logo: "📡" },
    { name: "Geeks For Geeks", logo: "🚀" },
    { name: "AMSA", logo: "🔬" },
    { name: "ENTC", logo: "⚙️" },
    { name: "GDGC", logo: "💻" },
    { name: "OWASP", logo: "🛡️" },
    { name: "NSS", logo: "🤝" },
    { name: "Art Circle", logo: "🎨" },
    { name: "AIMSA", logo: "🤖" },
  ];

  const gridFeaturesRow1 = [
    {
      icon: Radio,
      title: "Home Feed",
      color: "text-primary",
      desc: "Stay updated with a personalized feed of posts, announcements, and discussions from your subscribed communities and friends across campus.",
    },
    {
      icon: Grid,
      title: "Communities",
      color: "text-purple-600 dark:text-purple-400",
      desc: "Discover and join 30+ student-run clubs and organizations at PCCOE — from OWASP and GDGC to Art Circle and NSS.",
    },
    {
      icon: Heart,
      title: "Friends",
      color: "text-primary",
      desc: "Build your campus network by adding friends, viewing their activity, and staying connected through shared communities.",
    },
    {
      icon: MessageSquare,
      title: "Connect",
      color: "text-purple-600 dark:text-purple-400",
      desc: "Real-time encrypted messaging with end-to-end privacy. Chat one-on-one or in group conversations with fellow students.",
    },
  ];

  const gridFeaturesRow2 = [
    {
      icon: Sparkles,
      title: "HeadsUp",
      color: "text-amber-600 dark:text-amber-400",
      desc: "Personalized notifications, recommendations, and campus alerts delivered in real-time to keep you informed.",
    },
    {
      icon: MapPin,
      title: "Campus Map",
      color: "text-emerald-600 dark:text-emerald-400",
      desc: "Full vector map centered on PCCOE Akurdi campus with active building pins, avatar clusters, and location details.",
    },
    {
      icon: Calendar,
      title: "Academic Calendar",
      color: "text-rose-600 dark:text-rose-400",
      desc: "Track examination schedules, red channel results, timetable updates, and key campus deadlines effortlessly.",
    },
    {
      icon: Gamepad2,
      title: "Cohort Arcade",
      color: "text-cyan-600 dark:text-cyan-400",
      desc: "Quick browser games inside Cohort including interactive Chess against Buddy AI, Tic-Tac-Toe, and Sudoku.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-background text-foreground font-body select-none relative overflow-x-hidden flex flex-col">
      {/* Top Accent Border */}
      <div className="w-full h-[3px] bg-neutral-800 dark:bg-neutral-700" />

      {/* ========================================== */}
      {/* 1. HEADER (90px Height, Sticky)            */}
      {/* ========================================== */}
      <header className="w-full h-[90px] px-8 md:px-16 bg-card/90 backdrop-blur-md border-b border-border flex items-center justify-between z-50 sticky top-0 shadow-xs">
        {/* Left Branding */}
        <div className="flex items-center gap-3.5">
          <img
            src="/logo-final.png"
            alt="Cohort Logo"
            className="w-8.5 h-8.5 rounded-full object-cover shadow-md"
          />
          <span className="font-heading font-extrabold text-2xl md:text-[30px] text-foreground tracking-tight">
            Cohort
          </span>
          <div className="hidden sm:block w-16 h-4 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 blur-xs" />
        </div>

        {/* Right Header Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
            title="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-5 h-5 text-foreground" /> : <Sun className="w-5 h-5 text-amber-400" />}
          </button>

          <button
            onClick={handleGetStarted}
            className="h-[44px] px-5 rounded-xl bg-secondary border border-border hover:bg-secondary/80 text-foreground text-xs font-bold flex items-center gap-2.5 shadow-sm transition-all active:scale-95 cursor-pointer shrink-0"
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
      {/* 2. HERO / ANALYTICS SECTION               */}
      {/* ========================================== */}
      <section className="w-full relative flex items-center justify-center py-16 md:py-24 px-8 md:px-16 overflow-hidden min-h-[810px] bg-background">
        {/* React Bits LiquidEther Background */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <LiquidEther
            colors={["#2860c8", "#14b8a6", "#1e293b"]}
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

        {/* Decorative Accents */}
        <div className="absolute top-20 left-16 opacity-20 pointer-events-none text-xl font-mono text-muted-foreground">
          ✦ ✍︎
        </div>
        <div className="absolute bottom-20 left-20 opacity-20 pointer-events-none text-xl font-mono text-muted-foreground">
          ☁︎ ✨
        </div>
        <div className="absolute top-36 right-16 opacity-20 pointer-events-none text-xl font-mono text-muted-foreground">
          ⚡︎ ✦
        </div>

        {/* Hero Content Wrapper */}
        <div className="max-w-[1700px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          
          {/* LEFT HERO COLUMN */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-center">
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-[86px] font-extrabold text-[#4B2CFF] dark:text-[#6366F1] tracking-tight leading-[1.0] text-left">
              A Social<br />
              Platform for<br />
              PCCOE
            </h1>

            <p className="text-base sm:text-xl md:text-[22px] text-muted-foreground leading-[1.5] max-w-[580px] text-left font-normal">
              Aggregate discussions, campus navigation, and encrypted messaging in real time. Monitor events and track opportunities—all without juggling multiple logins.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleGetStarted}
                className="h-[60px] px-8 rounded-[14px] bg-foreground text-background hover:opacity-90 text-lg font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={handleGetStarted}
                className="h-[60px] px-8 rounded-[14px] bg-card border border-border text-foreground hover:bg-secondary text-lg font-bold shadow-sm hover:-translate-y-0.5 transition-all duration-300 active:scale-98 cursor-pointer flex items-center justify-center"
              >
                <span>Explore platform</span>
              </button>
            </div>
          </div>

          {/* RIGHT HERO VISUALIZATION */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[658px] min-h-[554px] p-8 rounded-[28px] bg-card border border-border shadow-2xl space-y-6 hover:shadow-[0_25px_50px_-12px_rgba(75,44,255,0.15)] transition-all duration-500 relative group">
              
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>

              <div className="w-full min-h-[422px] p-8 rounded-[16px] bg-secondary/50 border border-border shadow-inner flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs md:text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                    TOTAL PROJECT VIEWS
                  </span>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Eye className="w-10 h-10 text-muted-foreground" />
                      <span className="font-heading text-4xl sm:text-6xl font-extrabold text-foreground tracking-tight">
                        <AnimatedCounter end={11719} />
                      </span>
                    </div>

                    <div className="h-9 px-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1.5 shrink-0">
                      <TrendingUp className="w-4 h-4" />
                      <span>+4.2%</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Updating in realtime
                  </p>
                </div>

                <div className="w-full pt-6 border-t border-border">
                  <div className="w-full h-32 flex items-end justify-between gap-2.5 px-2">
                    {barHeights.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-500/30 to-purple-500/50 hover:from-blue-600 hover:to-purple-600 rounded-t-lg transition-all duration-300"
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
      <section className="w-full py-20 border-t border-border bg-secondary/30 backdrop-blur-md relative overflow-hidden">
        <div className="max-w-[1700px] mx-auto space-y-12 text-center">
          <h2 className="font-heading text-4xl sm:text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4B2CFF] via-purple-600 to-pink-500 tracking-tight">
            Connecting Communities
          </h2>

          {/* Continuous Infinite Horizontal Marquee Stream */}
          <div className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee-slow flex items-center gap-12 py-4">
              {[...communityLogos, ...communityLogos].map((item, idx) => (
                <div
                  key={idx}
                  onClick={handleGetStarted}
                  className="flex items-center gap-3.5 opacity-75 hover:opacity-100 transition-all cursor-pointer group hover:scale-105 duration-300 shrink-0 px-2"
                >
                  <div className="w-[55px] h-[55px] rounded-full bg-card border border-border flex items-center justify-center text-2xl shadow-sm group-hover:border-primary group-hover:shadow-md group-hover:shadow-primary/20 transition-all">
                    {item.logo}
                  </div>
                  <span className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. SECTION 3 — CURVED LOOP TEXT BANNER     */}
      {/* ========================================== */}
      <section className="w-full border-y border-border bg-secondary text-foreground overflow-hidden relative py-4 px-4 md:px-12 flex items-center justify-center">
        <div className="w-full max-w-[1600px] mx-auto overflow-hidden relative [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)]">
          <CurvedLoop
            marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦ CONNECT ✦ DISCOVER ✦ NETWORK ✦ COLLABORATE ✦"
            speed={2}
            curveAmount={160}
            direction="right"
            interactive={true}
            className="fill-foreground text-foreground"
          />
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. SECTION 4 — EXPLORE PLATFORM FEATURES   */}
      {/* ========================================== */}
      <section className="w-full py-24 px-8 md:px-16 relative bg-background">
        <div className="max-w-[1375px] mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-[800px] mx-auto">
            <h2 className="font-heading text-4xl sm:text-[52px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 tracking-tight">
              Explore Platform Features
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed font-normal">
              From encrypted messaging to real-time campus navigation, discover all the tools designed to empower your social experience.
            </p>
          </div>

          {/* 4-COLUMN BORDERED FEATURE GRID (ROW 1) */}
          <div className="w-full rounded-3xl border border-border bg-card overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
            {gridFeaturesRow1.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  onClick={handleGetStarted}
                  className="p-8 space-y-4 hover:bg-secondary/60 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${feat.color}`} />
                    </div>
                    <h3 className={`font-heading text-xl font-bold ${feat.color}`}>
                      {feat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4-COLUMN BORDERED FEATURE GRID (ROW 2) */}
          <div className="w-full rounded-3xl border border-border bg-card overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
            {gridFeaturesRow2.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  onClick={handleGetStarted}
                  className="p-8 space-y-4 hover:bg-secondary/60 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${feat.color}`} />
                    </div>
                    <h3 className={`font-heading text-xl font-bold ${feat.color}`}>
                      {feat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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
      <section className="w-full py-20 px-8 md:px-16 bg-secondary/40 border-t border-border">
        <div className="max-w-[880px] mx-auto space-y-8 text-left">
          <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            About Cohort PCCOE
          </h3>

          <p className="text-base sm:text-xl text-muted-foreground leading-[1.7] font-normal">
            Cohort is the official student social platform built exclusively for <strong className="text-foreground font-bold">Pimpri Chinchwad College of Engineering (PCCOE), Pune</strong>. Designed and developed by students, for students, it serves as the central hub where over <strong className="text-foreground font-bold">350 active users</strong> connect, collaborate, and stay informed about everything happening on campus.
          </p>

          <p className="text-base sm:text-xl text-muted-foreground leading-[1.7] font-normal">
            Unlike generic social media platforms, Cohort is purpose-built for the college ecosystem. It aggregates more than <strong className="text-foreground font-bold">30 student-run communities and clubs</strong> — including technical organizations like OWASP, Google Developer Groups on Campus (GDGC), ACM, and Geeks for Geeks, as well as creative and social clubs like Art Circle, NSS, and ISR. Students can subscribe to communities, receive real-time post notifications, and participate in discussions without switching between multiple WhatsApp groups or Instagram pages.
          </p>

          <p className="text-base sm:text-xl text-muted-foreground leading-[1.7] font-normal">
            The platform features end-to-end encrypted messaging through the <strong className="text-foreground font-bold">Connect</strong> module, allowing students to chat privately with friends or in groups. The <strong className="text-foreground font-bold">XD (Exchange)</strong> board offers an anonymous space for campus-wide discussions, enabling students to share honest feedback, creative ideas, and study tips freely.
          </p>

          <p className="text-base sm:text-xl text-muted-foreground leading-[1.7] font-normal">
            Cohort also includes an interactive campus map powered by <strong className="text-foreground font-bold">TomTom</strong>, helping new students and visitors navigate PCCOE's sprawling campus. The integrated academic calendar keeps everyone synchronized with exam schedules, holidays, and submission deadlines. Students can build their professional presence through <strong className="text-foreground font-bold">achievement profiles</strong>, showcasing certifications, hackathon wins, and project accomplishments to peers and faculty alike.
          </p>

          <p className="text-base sm:text-xl text-muted-foreground leading-[1.7] font-normal">
            Built with modern technologies including React, Supabase, and real-time WebSocket connections, Cohort delivers a fast, responsive experience across desktop and mobile devices. The platform prioritizes student privacy, data security, and a distraction-free environment designed to enhance — not replace — the on-campus college experience.
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* 7. SECTION 6 — FOOTER                      */}
      {/* ========================================== */}
      <footer className="w-full border-t border-border bg-secondary py-16 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Footer Column 1 */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/dashboard" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/dashboard/connect" className="hover:text-foreground transition-colors">Connect</Link></li>
              <li><Link to="/dashboard/map" className="hover:text-foreground transition-colors">Maps</Link></li>
              <li><Link to="/dashboard/profile" className="hover:text-foreground transition-colors">Student Profile</Link></li>
            </ul>
          </div>

          {/* Thin Divider 1 */}
          <div className="hidden md:block md:col-span-1 h-full border-r border-border" />

          {/* Footer Column 2 */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/dashboard/communities" className="hover:text-foreground transition-colors">Communities</Link></li>
              <li><Link to="/dashboard/network" className="hover:text-foreground transition-colors">Friends</Link></li>
              <li><Link to="/dashboard/xd" className="hover:text-foreground transition-colors">XD Board</Link></li>
              <li><Link to="/dashboard/calendar" className="hover:text-foreground transition-colors">Calendar</Link></li>
            </ul>
          </div>

          {/* Thin Divider 2 */}
          <div className="hidden md:block md:col-span-1 h-full border-r border-border" />

          {/* Footer Social Icons & Copyright */}
          <div className="md:col-span-2 space-y-6 flex flex-col items-start md:items-end justify-between h-full">
            <div className="flex items-center gap-4 text-muted-foreground">
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

            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Cohort PCCOE
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}