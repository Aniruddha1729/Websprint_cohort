import { useState } from "react";
import {
  Pencil,
  MessageSquare,
  Mail,
  LogOut,
  Camera,
  Users,
  UserCheck,
  UserPlus,
  Zap,
  CheckCircle2,
  Sparkles,
  Share2,
} from "lucide-react";
import { useAuth } from "../../components/providers/AuthProvider";
import { useNavigate } from "react-router-dom";

function LinkedinIcon(props) {
  return (
    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z"/>
    </svg>
  );
}

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("posts");

  const handleSignOut = () => {
    logout();
    navigate("/login");
  };

  const statCards = [
    {
      id: "communities",
      count: 5,
      label: "COMMUNITIES",
      icon: "👥",
      color: "from-blue-500/10 to-indigo-500/10",
    },
    {
      id: "followers",
      count: 0,
      label: "FOLLOWERS",
      icon: "👥",
      color: "from-purple-500/10 to-pink-500/10",
    },
    {
      id: "following",
      count: 3,
      label: "FOLLOWING",
      icon: "🧩",
      color: "from-teal-500/10 to-emerald-500/10",
    },
    {
      id: "flex",
      count: 0,
      label: "FLEX",
      icon: "🚩",
      color: "from-amber-500/10 to-orange-500/10",
    },
  ];

  return (
    <div className="w-full min-h-full pb-16 flex flex-col relative select-none bg-background">
      {/* Decorative Accents */}
      <div className="absolute top-4 left-6 opacity-20 pointer-events-none text-xs font-mono z-30">
        ✦ ✨ ✦
      </div>

      {/* ========================================== */}
      {/* 1. PROFILE COVER / HERO BANNER (~260px)     */}
      {/* ========================================== */}
      <div className="w-full h-[260px] relative overflow-hidden bg-gradient-to-r from-pink-500/30 via-purple-700 to-blue-900">
        {/* Abstract Grainy Aurora Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500/50 via-purple-600/40 to-transparent" />
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl" />
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-blue-500/40 rounded-full blur-3xl" />

        {/* Top-Right COHORT USER Pill Badge */}
        <div className="absolute top-6 right-8 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center gap-2.5 shadow-md">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-bold font-secondary text-xs">
            C
          </div>
          <span className="text-xs font-bold tracking-wider text-white">COHORT USER</span>
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        </div>
      </div>

      {/* ========================================== */}
      {/* 2. PROFILE IDENTITY AREA (Avatar + Info)    */}
      {/* ========================================== */}
      <div className="px-[2.5%] relative flex flex-col md:flex-row items-start md:items-end justify-between gap-6 -mt-16 mb-8">
        {/* Avatar & Username */}
        <div className="flex items-end gap-6">
          {/* Japanese Torii Gate Illustrated Avatar (~150 x 145px) */}
          <div className="relative group shrink-0">
            <div className="w-[150px] h-[145px] rounded-2xl bg-card border-4 border-card shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80"
                alt="Torii Gate Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-Right Blue Camera Button (~42-45px) */}
            <button
              onClick={() => alert("Change profile avatar")}
              className="absolute -bottom-1.5 -right-1.5 w-11 h-11 rounded-full bg-primary border-2 border-card text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
              title="Upload Avatar"
            >
              <Camera className="w-5 h-5" />
            </button>
          </div>

          {/* Username & Tag */}
          <div className="space-y-1 pb-2">
            <h1 className="font-heading text-3xl md:text-[38px] font-bold text-foreground tracking-tight leading-none">
              {user?.name || "046_Shuhbang_Doley"}
            </h1>
            <p className="text-base text-muted-foreground font-medium">
              @shubhang24
            </p>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center gap-2.5 pb-2 shrink-0">
          <button
            onClick={() => alert("Edit Profile")}
            className="w-10 h-10 rounded-xl bg-card border border-border/80 hover:bg-secondary text-foreground flex items-center justify-center shadow-sm transition-all cursor-pointer"
            title="Edit Profile"
          >
            <Pencil className="w-4.5 h-4.5" />
          </button>

          <button
            onClick={() => alert("LinkedIn Profile")}
            className="w-10 h-10 rounded-xl bg-card border border-border/80 hover:bg-secondary text-foreground flex items-center justify-center shadow-sm transition-all cursor-pointer"
            title="LinkedIn Profile"
          >
            <LinkedinIcon />
          </button>

          <button
            onClick={() => navigate("/dashboard/xd")}
            className="w-10 h-10 rounded-xl bg-card border border-border/80 hover:bg-secondary text-foreground flex items-center justify-center shadow-sm transition-all cursor-pointer"
            title="Send Message"
          >
            <MessageSquare className="w-4.5 h-4.5" />
          </button>

          <button
            onClick={() => navigate("/dashboard/contact")}
            className="w-10 h-10 rounded-xl bg-card border border-border/80 hover:bg-secondary text-foreground flex items-center justify-center shadow-sm transition-all cursor-pointer"
            title="Email User"
          >
            <Mail className="w-4.5 h-4.5" />
          </button>

          <button
            onClick={handleSignOut}
            className="h-10 px-4 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 text-xs font-bold border border-red-500/20 flex items-center gap-2 transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign out</span>
          </button>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. PROFILE STATISTICS CARDS (4 Row)       */}
      {/* ========================================== */}
      <div className="px-[2.5%] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {statCards.map((card) => (
          <div
            key={card.id}
            className="h-[220px] rounded-2xl bg-card border border-border/80 shadow-sm p-6 flex flex-col items-center justify-center text-center space-y-3 hover:shadow-md transition-all"
          >
            {/* Illustration */}
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-2xl shadow-inner`}>
              {card.icon}
            </div>

            {/* Large Count Number */}
            <span className="font-heading text-3xl font-bold text-foreground">
              {card.count}
            </span>

            {/* Label */}
            <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              {card.label}
            </span>
          </div>
        ))}
      </div>

      {/* ========================================== */}
      {/* 4. ACTIVITY SECTION                        */}
      {/* ========================================== */}
      <div className="px-[2.5%] w-full space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Activity
          </h2>
          <div className="flex-1 border-b border-border/60" />
        </div>

        {/* Activity Tabs Container */}
        <div className="w-[240px] h-[48px] p-1 rounded-2xl bg-secondary/60 border border-border/70 flex items-center justify-between">
          <button
            onClick={() => setActiveTab("posts")}
            className={`flex-1 h-full rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "posts"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span>Posts</span>
            <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 text-[10px] flex items-center justify-center font-bold">
              0
            </span>
          </button>

          <button
            onClick={() => setActiveTab("replies")}
            className={`flex-1 h-full rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "replies"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span>Replies</span>
            <span className="w-5 h-5 rounded-full bg-secondary text-muted-foreground text-[10px] flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>

        {/* Empty Activity Box */}
        <div className="w-full min-h-[160px] rounded-2xl border-2 border-dashed border-border/60 bg-card/40 flex items-center justify-center p-8 text-center">
          <p className="text-sm font-semibold text-muted-foreground">
            No posts yet.
          </p>
        </div>
      </div>

      {/* ========================================== */}
      {/* 5. FLOATING CHATBOT BUTTON                 */}
      {/* ========================================== */}
      <button className="fixed bottom-8 right-[23vw] w-14 h-14 rounded-full bg-card border border-border/80 shadow-2xl flex items-center justify-center text-primary hover:scale-110 transition-transform z-40 cursor-pointer">
        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
      </button>
    </div>
  );
}