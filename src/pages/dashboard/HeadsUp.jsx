import { useState } from "react";
import { Bell, Check, UserPlus, ExternalLink, Sparkles, User, CheckCircle2 } from "lucide-react";

export default function HeadsUp() {
  const [unreadCount, setUnreadCount] = useState(2);
  const [notifications, setNotifications] = useState([
    {
      id: "n1",
      category: "People",
      time: "1h ago",
      title: "You may know @kanchan23",
      username: "@kanchan23",
      description: "Kanchan Shendage is active on Cohort. Follow to stay updated.",
      read: false,
    },
    {
      id: "n2",
      category: "People",
      time: "1h ago",
      title: "You may know @nitinshinde9834",
      username: "@nitinshinde9834",
      description: "Shinde Nitin is active on Cohort. Follow to stay updated.",
      read: false,
    },
  ]);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    setUnreadCount(0);
  };

  const markRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
    setUnreadCount((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="w-full min-h-full px-[2.5%] pt-[35px] pb-16 flex flex-col relative select-none">
      {/* Decorative Sketch Accents */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none text-xs font-mono">
        ✦ ✨ ✦
      </div>

      {/* ========================================== */}
      {/* 1. HEADSUP HEADER (~105px Height)          */}
      {/* ========================================== */}
      <div className="w-full flex items-center justify-between pb-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center border border-blue-500/20">
              <Bell className="w-4.5 h-4.5" />
            </div>
            <h1 className="font-heading text-[24px] font-bold text-foreground tracking-tight flex items-center gap-3">
              <span>c/headsup</span>
              {unreadCount > 0 && (
                <span className="px-3 py-0.5 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold border border-blue-500/20">
                  {unreadCount} unread
                </span>
              )}
            </h1>
          </div>

          <p className="text-sm md:text-[16px] text-muted-foreground font-normal">
            Your personalized notifications, recommendations, and updates.
          </p>
        </div>

        {/* Mark All Read Action Button */}
        <button
          onClick={markAllRead}
          className="h-10 px-4 rounded-xl bg-card border border-border/80 hover:bg-secondary text-foreground text-xs font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer shrink-0"
        >
          <Check className="w-4 h-4 text-emerald-500" />
          <span>Mark all read</span>
        </button>
      </div>

      {/* Header Divider */}
      <div className="w-full border-b border-border/60 mb-8" />

      {/* ========================================== */}
      {/* 2. NOTIFICATION CONTENT CARDS (~1035 x 185)*/}
      {/* ========================================== */}
      <div className="w-full flex flex-col items-center space-y-[18px]">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`w-[min(100%,1035px)] min-h-[185px] p-6 rounded-2xl bg-card border border-border/80 shadow-sm transition-all flex items-start gap-5 relative group ${
              !n.read ? "border-l-4 border-l-primary shadow-md" : "opacity-90"
            }`}
          >
            {/* Left Icon Container (47 x 47px) */}
            <div className="w-[47px] h-[47px] rounded-xl bg-secondary/80 text-muted-foreground flex items-center justify-center shrink-0 border border-border/50">
              <User className="w-5 h-5" />
            </div>

            {/* Notification Content Area */}
            <div className="flex-1 space-y-2">
              {/* Metadata Row */}
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold border border-blue-500/20">
                  {n.category}
                </span>
                <span className="text-xs text-muted-foreground">{n.time}</span>
                {!n.read && (
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                )}
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-bold text-foreground">
                {n.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {n.description}
              </p>

              {/* Buttons Row */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => alert(`Navigating to ${n.username} profile`)}
                  className="h-8 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 text-white text-xs font-bold hover:opacity-90 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                {!n.read && (
                  <button
                    onClick={() => markRead(n.id)}
                    className="h-8 px-4 rounded-xl bg-card border border-border/80 hover:bg-secondary text-muted-foreground hover:text-foreground text-xs font-semibold transition-all cursor-pointer"
                  >
                    Mark read
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================== */}
      {/* 3. FLOATING CHAT BOT BUTTON                */}
      {/* ========================================== */}
      <button className="fixed bottom-8 right-[23vw] w-14 h-14 rounded-full bg-card border border-border/80 shadow-2xl flex items-center justify-center text-primary hover:scale-110 transition-transform z-40 cursor-pointer">
        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
      </button>
    </div>
  );
}