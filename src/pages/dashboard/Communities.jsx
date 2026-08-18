import { useState } from "react";
import { Link } from "react-router-dom";
import { SlidersHorizontal, Bell, Users, ChevronDown, Sparkles, CheckCircle2 } from "lucide-react";

export default function Communities() {
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [subscribedCards, setSubscribedCards] = useState({});

  const toggleSubscribe = (id) => {
    setSubscribedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const communityCards = [
    {
      id: "iic",
      name: "Institution's Innovation Council - PCCOE",
      username: "@iicpccoe",
      description: "Institution’s Innovation Council at PCCOE fostering innovation, startups, problem...",
      members: "6 members",
      coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      logo: "💡",
      dept: "SDW",
    },
    {
      id: "isr",
      name: "Institutional Social Responsibility - PCCOE",
      username: "@isrpccoe",
      description: "Institutional Social Responsibility community at PCCOE promoting social...",
      members: "1 members",
      coverImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
      logo: "🤝",
      dept: "SDW",
    },
    {
      id: "irc",
      name: "International Relations Cell - PCCOE",
      username: "@ircpccoe",
      description: "Institutional Research Cell community encouraging research culture, paper...",
      members: "4 members",
      coverImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
      logo: "🌍",
      dept: "SDW",
    },
    {
      id: "nss",
      name: "National Service Scheme - PCCOE",
      username: "@nsspccoe",
      description: "National Service Scheme (NSS) community at PCCOE encouraging social servic...",
      members: "12 members",
      coverImage: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80",
      logo: "🌱",
      dept: "SDW",
    },
    {
      id: "gdg",
      name: "Google Developer Groups On Campus - PCCOE",
      username: "@gdgpccoe",
      description: "Official Google Developer Student Club focused on Android, Web, AI/ML, Cloud...",
      members: "420 members",
      coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      logo: "🌐",
      dept: "Computer",
    },
    {
      id: "owasp",
      name: "OWASP Chapter - PCCOE",
      username: "@owasppccoe",
      description: "Cybersecurity and ethical hacking club conducting CTFs, bug bounty workshops...",
      members: "280 members",
      coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      logo: "🛡️",
      dept: "IT",
    },
  ];

  return (
    <div className="w-full min-h-full px-[2.5%] pt-8 pb-16 flex flex-col relative select-none">
      {/* ========================================== */}
      {/* 1. TOP HEADER & DEPARTMENT FILTER          */}
      {/* ========================================== */}
      <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
        {/* Title + Subtitle */}
        <div className="space-y-1">
          <h1 className="font-heading text-[22px] font-bold text-foreground tracking-tight">
            c/communities
          </h1>
          <p className="text-sm md:text-[17px] text-muted-foreground font-normal">
            Join discussions and connect with your peers.
          </p>
        </div>

        {/* Department Filter Dropdown */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
            <span>Department:</span>
          </div>

          <div className="relative w-[min(340px,30vw)]">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full h-11 pl-4 pr-10 text-xs font-semibold rounded-xl bg-card border border-border/80 text-foreground appearance-none shadow-sm focus:outline-none focus:border-primary transition-all cursor-pointer"
            >
              <option value="All Departments">All Departments</option>
              <option value="SDW">Student Development & Welfare (SDW)</option>
              <option value="Computer">Computer Engineering</option>
              <option value="IT">Information Technology</option>
              <option value="ENTC">E&TC Engineering</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 2. HEADER DIVIDER                          */}
      {/* ========================================== */}
      <div className="w-full border-b border-border/60 my-6" />

      {/* ========================================== */}
      {/* 3. COMMUNITY CATEGORY TITLE + SUBSCRIBE ALL*/}
      {/* ========================================== */}
      <div className="w-full flex items-center justify-between mt-2 mb-6">
        <h2 className="font-heading text-lg md:text-[20px] font-bold text-foreground">
          Student Development and Welfare (SDW)
        </h2>

        <button className="h-10 px-5 rounded-xl bg-card border border-border/80 hover:bg-secondary/70 text-foreground font-semibold text-xs flex items-center gap-2 shadow-sm transition-all cursor-pointer shrink-0">
          <Bell className="w-4 h-4 text-muted-foreground" />
          <span>Subscribe All</span>
        </button>
      </div>

      {/* ========================================== */}
      {/* 4. COMMUNITY GRID (2-Column Responsive)    */}
      {/* ========================================== */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {communityCards.map((card) => {
          const isSubscribed = subscribedCards[card.id];
          return (
            <div
              key={card.id}
              className="w-full h-[330px] rounded-2xl bg-card border border-border/70 shadow-sm hover:shadow-md hover:border-border transition-all flex flex-col overflow-hidden relative group"
            >
              {/* Cover Image Container */}
              <div className="w-full h-[145px] relative overflow-hidden bg-secondary">
                <img
                  src={card.coverImage}
                  alt={card.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlapping Subscribe / Bell Button (Top Right) */}
                <button
                  onClick={() => toggleSubscribe(card.id)}
                  className={`absolute top-3.5 right-3.5 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all cursor-pointer ${
                    isSubscribed
                      ? "bg-primary text-primary-foreground"
                      : "bg-card/90 text-muted-foreground hover:text-foreground backdrop-blur-md"
                  }`}
                  title="Subscribe Community"
                >
                  <Bell className={`w-4.5 h-4.5 ${isSubscribed ? "fill-current" : ""}`} />
                </button>
              </div>

              {/* Overlapping Community Logo Avatar */}
              <div className="absolute top-[115px] left-6 w-[58px] h-[58px] rounded-full bg-card border-2 border-card shadow-md flex items-center justify-center text-xl shrink-0 z-10">
                {card.logo}
              </div>

              {/* Card Text Content Area */}
              <div className="flex-1 p-5 pt-8 flex flex-col justify-between">
                <div className="space-y-1">
                  <Link
                    to={`/dashboard/communities/${card.id}`}
                    className="font-heading text-base font-bold text-foreground hover:text-primary transition-colors line-clamp-1 block"
                  >
                    {card.name}
                  </Link>
                  <p className="text-xs text-muted-foreground font-mono">{card.username}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-1 pt-1">
                    {card.description}
                  </p>
                </div>

                {/* Members Footer */}
                <div className="pt-3 border-t border-border/40 flex items-center gap-2 text-xs text-muted-foreground font-medium">
                  <Users className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>{card.members}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================== */}
      {/* 5. FLOATING ASSISTANT BUTTON                */}
      {/* ========================================== */}
      <button className="fixed bottom-8 right-[23vw] w-14 h-14 rounded-full bg-card border border-border/80 shadow-2xl flex items-center justify-center text-primary hover:scale-110 transition-transform z-40 cursor-pointer">
        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
      </button>
    </div>
  );
}