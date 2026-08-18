import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Sparkles, GraduationCap, UserCheck, Users, Contact2, CheckCircle2 } from "lucide-react";

export default function Connect() {
  const [searchQuery, setSearchQuery] = useState("");
  const [followingState, setFollowingState] = useState({});

  const toggleFollow = (username) => {
    setFollowingState((prev) => ({ ...prev, [username]: !prev[username] }));
  };

  const featureCards = [
    {
      id: "alumni",
      title: "Alumni Connect",
      icon: "🎓",
      bgGradient: "from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-500",
    },
    {
      id: "discover",
      title: "Discover Students",
      icon: "🔍",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-500",
    },
    {
      id: "connections",
      title: "Build Connections",
      icon: "🤝",
      bgGradient: "from-teal-500/10 to-emerald-500/10",
      iconColor: "text-teal-500",
    },
    {
      id: "profiles",
      title: "View Profiles",
      icon: "📇",
      bgGradient: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-amber-500",
    },
  ];

  const students = [
    {
      rawUsername: "shravan24",
      username: "@shravan24",
      name: "Shravan Kolhe",
      avatarBg: "bg-purple-600",
      avatarContent: "S",
      isEmoji: false,
    },
    {
      rawUsername: "felina22",
      username: "@felina22",
      name: "Felina Mathew",
      avatarBg: "bg-emerald-500",
      avatarContent: "F",
      isEmoji: false,
    },
    {
      rawUsername: "arnav24",
      username: "@arnav24",
      name: "Arnav Telangi",
      avatarBg: "bg-indigo-600",
      avatarContent: "A",
      isEmoji: false,
    },
    {
      rawUsername: "gaurav25",
      username: "@gaurav25",
      name: "Gaurav Patil",
      avatarBg: "bg-teal-600",
      avatarContent: "G",
      isEmoji: false,
    },
    {
      rawUsername: "chirag",
      username: "@chirag",
      name: "Chirag Ferwani",
      avatarBg: "bg-blue-600",
      avatarContent: "C",
      isEmoji: false,
    },
    {
      rawUsername: "aditi23",
      username: "@aditi23",
      name: "Aditi Joshi",
      avatarBg: "bg-rose-500",
      avatarContent: "A",
      isEmoji: false,
    },
    {
      rawUsername: "nitinshinde9834",
      username: "@nitinshinde9834",
      name: "Nitin Shinde",
      avatarBg: "bg-amber-500",
      avatarContent: "N",
      isEmoji: false,
    },
    {
      rawUsername: "kanchan23",
      username: "@kanchan23",
      name: "Kanchan",
      avatarBg: "bg-purple-500",
      avatarContent: "K",
      isEmoji: false,
    },
    {
      rawUsername: "shubhang24",
      username: "@shubhang24",
      name: "Shubhang Doley",
      avatarBg: "bg-cyan-600",
      avatarContent: "S",
      isEmoji: false,
    },
  ];

  const filteredStudents = students.filter(
    (s) =>
      s.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-full px-[2.5%] pt-[35px] pb-16 flex flex-col relative select-none">
      {/* ========================================== */}
      {/* 1. TOP HEADER                              */}
      {/* ========================================== */}
      <div className="w-full h-[85px] flex flex-col justify-center">
        <h1 className="font-heading text-[22px] font-bold text-foreground tracking-tight">
          c/network
        </h1>
        <p className="text-sm md:text-[18px] text-muted-foreground font-normal mt-0.5">
          Discover, connect, and build your campus network.
        </p>
      </div>

      {/* Header Divider */}
      <div className="w-full border-b border-border/60 mb-8" />

      {/* ========================================== */}
      {/* 2. NETWORK CATEGORY CARDS (4 Columns)     */}
      {/* ========================================== */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featureCards.map((card) => (
          <div
            key={card.id}
            className="w-full h-[220px] rounded-2xl bg-card border border-border/80 shadow-sm hover:shadow-md hover:border-border transition-all p-6 flex flex-col items-center justify-between group cursor-pointer"
          >
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${card.bgGradient} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
              {card.icon}
            </div>

            <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors text-center">
              {card.title}
            </h3>
          </div>
        ))}
      </div>

      {/* ========================================== */}
      {/* 3. STUDENTS SECTION HEADING                */}
      {/* ========================================== */}
      <div className="w-full flex items-center justify-between mt-11 mb-8">
        <h2 className="font-heading text-[20px] font-bold text-foreground">
          PCCOE Students & Peers
        </h2>

        {/* Right Search Icon */}
        <div className="relative">
          <button
            onClick={() => {
              const query = prompt("Search student by name or @username:");
              if (query !== null) setSearchQuery(query);
            }}
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
            title="Search Students"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ========================================== */}
      {/* 4. STUDENT GRID (5-Column Layout)          */}
      {/* ========================================== */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
        {filteredStudents.map((st, idx) => {
          const isFollowing = followingState[st.username];
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-3.5 group"
            >
              {/* Circular Avatar Link */}
              <Link
                to={`/dashboard/profile/${st.rawUsername}`}
                className={`w-[120px] h-[120px] rounded-full ${st.avatarBg} text-white font-bold font-secondary flex items-center justify-center shadow-md border-4 border-card transition-transform group-hover:scale-105 shrink-0 cursor-pointer`}
                title={`View ${st.name}'s profile`}
              >
                <span className="text-4xl">{st.avatarContent}</span>
              </Link>

              {/* Username Link */}
              <div className="space-y-0.5">
                <Link
                  to={`/dashboard/profile/${st.rawUsername}`}
                  className="font-heading text-[15px] font-bold text-foreground hover:text-primary tracking-tight transition-colors"
                >
                  {st.username}
                </Link>
                <p className="text-xs text-muted-foreground font-medium truncate max-w-[120px]">
                  {st.name}
                </p>
              </div>

              {/* Follow Button */}
              <button
                onClick={() => toggleFollow(st.username)}
                className={`w-[105px] h-[34px] rounded-full text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer flex items-center justify-center ${
                  isFollowing
                    ? "bg-secondary text-foreground border border-border"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Floating Assistant Button */}
      <button className="fixed bottom-8 right-[23vw] w-14 h-14 rounded-full bg-card border border-border/80 shadow-2xl flex items-center justify-center text-primary hover:scale-110 transition-transform z-40 cursor-pointer">
        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
      </button>
    </div>
  );
}