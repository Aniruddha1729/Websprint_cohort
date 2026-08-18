import { useState } from "react";
import { Outlet, NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import {
  Home,
  Users,
  UserPlus,
  Handshake,
  MessageSquare,
  MapPin,
  Calendar,
  Gamepad2,
  Bell,
  MessageCircle,
  User,
  Moon,
  Sun,
  Search,
  ArrowRight,
} from "lucide-react";
import { useAuth } from "../../components/providers/AuthProvider";
import { useTheme } from "../../components/providers/ThemeProvider";

export default function DashboardLayout() {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const leftNavItems = [
    { label: "Home", path: "/dashboard", icon: Home, badge: null },
    { label: "Communities", path: "/dashboard/communities", icon: Users, badge: "2" },
    { label: "Friends", path: "/dashboard/connect", icon: Handshake, badge: null },
    { label: "Connect", path: "/dashboard/network", icon: UserPlus, badge: null },
    { label: "XD", path: "/dashboard/xd", icon: MessageSquare, badge: "3" },
    { label: "Map", path: "/dashboard/map", icon: MapPin, badge: null },
    { label: "Calendar", path: "/dashboard/calendar", icon: Calendar, badge: null },
    { label: "Arcade", path: "/dashboard/arcade", icon: Gamepad2, badge: null },
    { label: "HeadsUp", path: "/dashboard/headsup", icon: Bell, badge: null },
    { label: "Contact Us", path: "/dashboard/contact", icon: MessageCircle, badge: null },
    { label: "Profile", path: "/dashboard/profile", icon: User, badge: null },
  ];

  const rightCommunities = [
    { name: "Higher Studies Club for UPSC / MPSC - PCCoE", subtitle: "@upscpccoe", avatar: "🏛️" },
    { name: "Google Developer Groups PCCoE", subtitle: "@gdgpccoe", avatar: "🌐" },
    { name: "Higher Studies Club for CAT / GMAT - PCCoE", subtitle: "@catpccoe", avatar: "📚" },
  ];

  const rightFriends = [
    { name: "C157_Shravan Kolhe", username: "@shravan24", avatarColor: "bg-blue-500" },
    { name: "FELINA MATHEW", username: "@felina22", avatarColor: "bg-purple-500" },
    { name: "Arnav Telangi", username: "@arnav24", avatarColor: "bg-emerald-500" },
  ];

  const rightConnects = [
    { name: "C157_Shravan Kolhe", username: "@shravan24", avatarColor: "bg-amber-500" },
    { name: "FELINA MATHEW", username: "@felina22", avatarColor: "bg-rose-500" },
    { name: "Arnav Telangi", username: "@arnav24", avatarColor: "bg-cyan-500" },
  ];

  return (
    <div className="w-full h-screen overflow-hidden bg-background text-foreground flex flex-row font-body select-none">
      {/* ========================================== */}
      {/* 1. HOVER-EXPANDABLE LEFT SIDEBAR           */}
      {/* ========================================== */}
      <aside className="group/sidebar relative z-40 h-screen w-[5vw] min-w-[64px] max-w-[70px] hover:w-60 hover:max-w-60 transition-all duration-300 ease-in-out border-r border-border/60 bg-card/95 backdrop-blur-md flex flex-col justify-between py-6 shrink-0 shadow-lg hover:shadow-2xl overflow-hidden">
        {/* Top Logo & App Name */}
        <div className="px-3 mb-6 flex items-center gap-3.5 w-full">
          <Link
            to="/"
            className="w-10 h-10 rounded-full shadow-md shrink-0 hover:scale-105 transition-transform overflow-hidden flex items-center justify-center bg-card"
          >
            <img src="/logo-final.png" alt="Cohort Logo" className="w-full h-full object-cover" />
          </Link>
          <div className="opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 whitespace-nowrap overflow-hidden">
            <span className="font-heading font-bold text-base text-foreground leading-none block">Cohort</span>
            <span className="text-[10px] text-muted-foreground font-medium">PCCOE Portal</span>
          </div>
        </div>

        {/* Vertically Stacked Navigation Items */}
        <nav className="flex-1 flex flex-col gap-1.5 overflow-y-auto no-scrollbar px-2.5 w-full">
          {leftNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.label}
                to={item.path}
                end={item.path === "/dashboard"}
                className={({ isActive: linkActive }) =>
                  `relative flex items-center gap-3.5 px-2.5 py-2.5 rounded-xl transition-all w-full overflow-hidden ${
                    linkActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }`
                }
              >
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <Icon className="w-4.5 h-4.5" />
                </div>

                <span className="text-xs font-semibold whitespace-nowrap opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>

                {item.badge && (
                  <span className="absolute top-2 right-2 group-hover/sidebar:static group-hover/sidebar:ml-auto w-4 h-4 bg-red-500 text-white rounded-full text-[9px] font-bold flex items-center justify-center shadow-sm shrink-0">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom Theme Toggle (Dark Mode / Light Mode) */}
        <div className="pt-3 px-2.5 border-t border-border/40 w-full">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3.5 px-2.5 py-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all w-full overflow-hidden cursor-pointer"
            title="Toggle theme"
          >
            <div className="w-5 h-5 flex items-center justify-center shrink-0">
              {theme === "light" ? <Moon className="w-4.5 h-4.5" /> : <Sun className="w-4.5 h-4.5" />}
            </div>
            <span className="text-xs font-semibold whitespace-nowrap opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">
              {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </span>
          </button>
        </div>
      </aside>

      {/* ========================================== */}
      {/* 2. MAIN CONTENT AREA (~74vw)                */}
      {/* ========================================== */}
      <div className="flex-1 h-screen overflow-y-auto bg-background relative flex flex-col min-w-0">
        <main className="flex-1 relative z-10">
          <Outlet />
        </main>
      </div>

      {/* ========================================== */}
      {/* 3. RIGHT SIDEBAR (~21vw)                    */}
      {/* ========================================== */}
      <aside className="w-[21vw] min-w-[280px] max-w-[350px] h-screen border-l border-border/60 bg-card/40 backdrop-blur-md flex flex-col shrink-0 z-30 overflow-y-auto">
        {/* Top Search Bar */}
        <div className="p-4 border-b border-border/40">
          <div className="relative w-[92%] mx-auto">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search cohort..."
              className="w-full h-11 pl-10 pr-12 text-xs rounded-full bg-secondary/60 border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-muted-foreground bg-card px-1.5 py-0.5 rounded border border-border">
              ⌘ K
            </span>
          </div>
        </div>

        {/* Sidebar Content Sections */}
        <div className="p-4 space-y-6">
          {/* C/COMMUNITIES */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold font-heading tracking-wider uppercase text-foreground">
                C/COMMUNITIES
              </span>
              <Link to="/dashboard/communities" className="text-muted-foreground hover:text-primary transition-colors">
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-2">
              {rightCommunities.map((c, i) => (
                <Link
                  key={i}
                  to="/dashboard/communities"
                  className="p-2 rounded-xl hover:bg-secondary/70 flex items-center gap-2.5 transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm shrink-0 border border-border/50">
                    {c.avatar}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                      {c.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground truncate">{c.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-border/50" />

          {/* C/FRIENDS */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold font-heading tracking-wider uppercase text-foreground">
                C/FRIENDS
              </span>
              <Link to="/dashboard/connect" className="text-muted-foreground hover:text-primary transition-colors">
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-2">
              {rightFriends.map((f, i) => (
                <div key={i} className="p-2 rounded-xl hover:bg-secondary/70 flex items-center gap-2.5 transition-all">
                  <div className={`w-8 h-8 rounded-full ${f.avatarColor} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                    {f.name[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-foreground truncate">{f.name}</p>
                    <p className="text-[10px] text-muted-foreground truncate">{f.username}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border/50" />

          {/* C/CONNECT */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold font-heading tracking-wider uppercase text-foreground">
                C/CONNECT
              </span>
              <Link to="/dashboard/network" className="text-muted-foreground hover:text-primary transition-colors">
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-2">
              {rightConnects.map((cn, i) => (
                <div key={i} className="p-2 rounded-xl hover:bg-secondary/70 flex items-center gap-2.5 transition-all">
                  <div className={`w-8 h-8 rounded-full ${cn.avatarColor} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                    {cn.name[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-foreground truncate">{cn.name}</p>
                    <p className="text-[10px] text-muted-foreground truncate">{cn.username}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}