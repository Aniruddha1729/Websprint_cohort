import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Share2,
  Bell,
  Users,
  Info,
  Sparkles,
  CheckCircle2,
  Globe,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";

function InstagramIcon(props) {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z"/>
    </svg>
  );
}

// Stylized Figures Avatar Logo for IIC & Clubs
function StylizedFiguresLogo() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill="#0F172A" />
      {/* Orange Figure */}
      <circle cx="32" cy="36" r="10" fill="#F97316" />
      <path d="M22 64C22 52 30 46 42 46C40 56 34 64 22 64Z" fill="#F97316" />
      {/* Purple Figure */}
      <circle cx="50" cy="28" r="11" fill="#A855F7" />
      <path d="M38 68C38 52 48 42 62 42C60 54 50 68 38 68Z" fill="#A855F7" />
      {/* Blue Figure */}
      <circle cx="68" cy="38" r="10" fill="#3B82F6" />
      <path d="M56 64C56 50 66 48 78 48C74 58 66 64 56 64Z" fill="#3B82F6" />
    </svg>
  );
}

export default function CommunityDetail() {
  const { clubusername } = useParams();
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Registry of PCCOE Clubs & Communities
  const clubsDatabase = {
    iic: {
      name: "Institution's Innovation Council - PCCOE",
      username: "@iicpccoe",
      description:
        "Institution's Innovation Council at PCCOE fostering innovation, startups, problem-solving mindset, and entrepreneurial thinking.",
      members: "6 members",
      instagram: "https://instagram.com/iicpccoe",
      linkedin: "https://linkedin.com/company/iicpccoe",
      coverImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    },
    isr: {
      name: "Institutional Social Responsibility - PCCOE",
      username: "@isrpccoe",
      description:
        "Institutional Social Responsibility community at PCCOE promoting social welfare, community service, and ethical impact.",
      members: "1 members",
      instagram: "https://instagram.com/isrpccoe",
      linkedin: "https://linkedin.com",
      coverImage:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=80",
    },
    gdg: {
      name: "Google Developer Groups On Campus - PCCOE",
      username: "@gdgpccoe",
      description:
        "Official Google Developer Student Club focused on Android, Web, AI/ML, Cloud Technologies, and open-source hackathons.",
      members: "420 members",
      instagram: "https://instagram.com/gdgpccoe",
      linkedin: "https://linkedin.com",
      coverImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    },
    owasp: {
      name: "OWASP Student Chapter - PCCOE",
      username: "@owasppccoe",
      description:
        "Cybersecurity and ethical hacking community conducting Capture The Flag (CTF) challenges, web security, and bug bounty workshops.",
      members: "280 members",
      instagram: "https://instagram.com/owasp_pccoe",
      linkedin: "https://linkedin.com",
      coverImage:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
    },
  };

  // Fallback for any unknown route parameter
  const clubKey = clubusername?.toLowerCase() || "iic";
  const club = clubsDatabase[clubKey] || {
    name: clubusername
      ? `${clubusername.toUpperCase()} Community - PCCOE`
      : "Institution's Innovation Council - PCCOE",
    username: `@${clubKey}pccoe`,
    description:
      "Official student organization at Pimpri Chinchwad College of Engineering (PCCOE) fostering learning, collaboration, and growth.",
    members: "12 members",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: club.name,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Community link copied to clipboard!");
    }
  };

  return (
    <div className="w-full min-h-full pb-20 flex flex-col relative select-none bg-background">
      {/* ========================================== */}
      {/* 1. TOP BANNER HEADER (~15% Height)         */}
      {/* ========================================== */}
      <div className="w-full h-[200px] md:h-[230px] relative overflow-hidden bg-slate-900 group">
        <img
          src={club.coverImage}
          alt={club.name}
          className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
        />
        {/* Sci-Fi Futuristic Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/30 via-purple-600/20 to-transparent" />

        {/* Top-Left Back Navigation Button */}
        <Link
          to="/dashboard/communities"
          className="absolute top-5 left-6 px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Communities</span>
        </Link>
      </div>

      {/* ========================================== */}
      {/* 2. PROFILE HEADER BLOCK (Main Content Area)*/}
      {/* ========================================== */}
      <div className="px-[3%] max-w-[1200px] w-full mx-auto relative flex flex-col gap-6 -mt-16 z-20">
        
        {/* Top Profile Card Container */}
        <div className="p-6 md:p-8 rounded-3xl bg-card border border-border/80 shadow-xl space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Avatar Logo & Title */}
            <div className="flex items-start md:items-center gap-5">
              {/* Square Logo with Stylized Figures */}
              <div className="w-[72px] h-[72px] rounded-2xl bg-slate-950 border-2 border-border shadow-lg flex items-center justify-center shrink-0 overflow-hidden">
                <StylizedFiguresLogo />
              </div>

              <div className="space-y-1">
                <h1 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground tracking-tight leading-snug">
                  {club.name}
                </h1>
                
                {/* Handle & Social Links */}
                <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-muted-foreground font-medium pt-0.5">
                  <span className="font-mono text-primary font-bold">{club.username}</span>
                  <span className="text-muted-foreground/40">•</span>

                  <a
                    href={club.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition-colors flex items-center gap-1"
                    title="Instagram"
                  >
                    <InstagramIcon />
                    <span>Instagram</span>
                  </a>

                  <span className="text-muted-foreground/40">•</span>

                  <a
                    href={club.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors flex items-center gap-1"
                    title="LinkedIn"
                  >
                    <LinkedinIcon />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons (Top-Right of Main Card) */}
            <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
              <button
                onClick={handleShare}
                className="w-11 h-11 rounded-2xl bg-secondary/80 hover:bg-secondary border border-border/80 text-foreground flex items-center justify-center shadow-xs transition-all cursor-pointer"
                title="Share Community"
              >
                <Share2 className="w-4.5 h-4.5" />
              </button>

              <button
                onClick={() => setIsSubscribed(!isSubscribed)}
                className={`h-11 px-6 rounded-2xl font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer ${
                  isSubscribed
                    ? "bg-emerald-500 text-white hover:bg-emerald-600"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <Bell className="w-4 h-4" />
                    <span>+ Subscribe</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Overview Info & Metadata */}
          <div className="space-y-3 pt-2 border-t border-border/60">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-normal">
              {club.description}
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <Users className="w-4 h-4 text-primary" />
              <span>{club.members}</span>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* 3. ADMIN CALLOUT BANNER                     */}
        {/* ========================================== */}
        <div className="p-5 md:p-6 rounded-2xl bg-secondary/60 border border-border/80 shadow-xs flex items-start gap-4">
          <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>

          <div className="space-y-1">
            <h3 className="font-heading text-sm md:text-base font-bold text-foreground">
              Are you a club lead?
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              If you are the official lead for this club, you can get admin access to manage this page.{" "}
              <Link
                to="/dashboard/contact"
                className="text-primary font-semibold hover:underline"
              >
                Contact the developers via the contact form
              </Link>{" "}
              to get started.
            </p>
          </div>
        </div>

        {/* ========================================== */}
        {/* 4. CONTENT FEED SECTION                    */}
        {/* ========================================== */}
        <div className="space-y-4 pt-4">
          <h2 className="font-heading text-xl font-bold text-foreground tracking-tight">
            Recent activity
          </h2>

          {/* Empty State Card */}
          <div className="w-full py-16 px-6 rounded-3xl bg-card border border-border/80 shadow-sm flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-2xl shadow-inner">
              <Sparkles className="w-7 h-7" />
            </div>

            <h3 className="font-heading text-lg md:text-xl font-bold text-foreground">
              Community posts starting soon!
            </h3>

            <p className="text-xs md:text-sm text-muted-foreground max-w-md leading-relaxed">
              Stay tuned for upcoming discussions, events, and announcements from this community.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 5. FLOATING CHATBOT FAB (Bottom Right)      */}
      {/* ========================================== */}
      <Link
        to="/dashboard/contact"
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40 cursor-pointer border border-white/20"
        title="Ask Cohort Assistant"
      >
        <Sparkles className="w-6 h-6 animate-pulse" />
      </Link>
    </div>
  );
}