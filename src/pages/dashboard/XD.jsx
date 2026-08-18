import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShieldCheck, Send, Sparkles, Lock, ArrowLeft, ExternalLink } from "lucide-react";

export default function XD() {
  const [searchMember, setSearchMember] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({});
  const [inputMsg, setInputMsg] = useState("");

  const members = [
    {
      id: "004",
      name: "004_Aaryan_Bhujang",
      username: "@aaryan23",
      avatarBg: "bg-pink-500",
      avatarContent: "😊",
      isEmoji: true,
    },
    {
      id: "005a",
      name: "005_nisha Dewatwal",
      username: "@nisha24",
      avatarBg: "bg-amber-600",
      avatarContent: "D",
      isEmoji: false,
    },
    {
      id: "005b",
      name: "005_Rudraksh_Charhate",
      username: "@rudraksh23",
      avatarBg: "bg-red-500",
      avatarContent: "😄",
      isEmoji: true,
    },
    {
      id: "007",
      name: "007_Aboli Jadhav",
      username: "@aboli25",
      avatarBg: "bg-blue-600",
      avatarContent: "A",
      isEmoji: false,
    },
    {
      id: "021",
      name: "021-Shreyash_Desai",
      username: "@shreyash23",
      avatarBg: "bg-indigo-900",
      avatarContent: "🌙",
      isEmoji: true,
    },
    {
      id: "025",
      name: "025_Snehal_Patil",
      username: "@snehal24",
      avatarBg: "bg-teal-600",
      avatarContent: "S",
      isEmoji: false,
    },
    {
      id: "032",
      name: "032_Tanmay_Kulkarni",
      username: "@tanmay24",
      avatarBg: "bg-emerald-600",
      avatarContent: "😃",
      isEmoji: true,
    },
  ];

  const filteredMembers = members.filter(
    (m) =>
      m.name.toLowerCase().includes(searchMember.toLowerCase()) ||
      m.username.toLowerCase().includes(searchMember.toLowerCase())
  );

  const handleSendMessage = () => {
    if (!inputMsg.trim() || !selectedUser) return;
    const userMsgs = messages[selectedUser.id] || [];
    setMessages({
      ...messages,
      [selectedUser.id]: [...userMsgs, { text: inputMsg, sender: "me", time: "Just now" }],
    });
    setInputMsg("");
  };

  return (
    <div className="w-full min-h-full px-[2.5%] pt-[35px] pb-12 flex flex-col relative select-none">
      {/* ========================================== */}
      {/* 1. MAIN CONNECT HEADER (~105px Height)     */}
      {/* ========================================== */}
      <div className="w-full h-[80px] flex flex-col justify-center">
        <h1 className="font-heading text-[22px] font-bold text-foreground tracking-tight">
          c/connect
        </h1>
        <p className="text-sm md:text-[18px] text-muted-foreground font-normal mt-0.5">
          Encrypted chats for cohort users.
        </p>
      </div>

      {/* Header Divider */}
      <div className="w-full border-b border-border/60 mb-6" />

      {/* ========================================== */}
      {/* 2. CHAT WORKSPACE (Two-Panel Layout)       */}
      {/* ========================================== */}
      <div className="w-full h-[calc(100vh-250px)] min-h-[520px] flex flex-col md:flex-row gap-5 items-stretch">
        {/* ======================================== */}
        {/* 2A. LEFT USER LIST PANEL (~30% Width)    */}
        {/* ======================================== */}
        <div className="w-full md:w-[30%] h-full rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col overflow-hidden shrink-0">
          {/* User Search Input */}
          <div className="p-4 border-b border-border/40">
            <div className="relative w-[92%] mx-auto">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchMember}
                onChange={(e) => setSearchMember(e.target.value)}
                placeholder="Search"
                className="w-full h-10 pl-10 pr-4 text-xs rounded-full bg-secondary/50 border border-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-border transition-all"
              />
            </div>
          </div>

          {/* User List Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
            {/* RECENTS */}
            <div className="space-y-1.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/70 px-2">
                RECENTS
              </p>
              <p className="text-xs text-muted-foreground/60 px-2 italic">No users</p>
            </div>

            <div className="border-t border-border/30" />

            {/* FOLLOWERS */}
            <div className="space-y-1.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/70 px-2">
                FOLLOWERS
              </p>
              <p className="text-xs text-muted-foreground/60 px-2 italic">No users</p>
            </div>

            <div className="border-t border-border/30" />

            {/* MEMBERS */}
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/70 px-2 mb-2">
                MEMBERS
              </p>

              {filteredMembers.map((m) => {
                const isSelected = selectedUser?.id === m.id;
                return (
                  <div
                    key={m.id}
                    onClick={() => setSelectedUser(m)}
                    className={`w-full h-[88px] p-3 rounded-xl border transition-all flex items-center gap-3 cursor-pointer ${
                      isSelected
                        ? "bg-primary/10 border-primary shadow-sm"
                        : "bg-secondary/20 hover:bg-secondary/60 border-border/40"
                    }`}
                  >
                    {/* Avatar (~54px) */}
                    <div
                      className={`w-[54px] h-[54px] rounded-full ${m.avatarBg} text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-sm`}
                    >
                      {m.avatarContent}
                    </div>

                    {/* Member Name & Username */}
                    <div className="min-w-0 flex-1 space-y-0.5">
                      <p className="text-sm font-bold text-foreground truncate">{m.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{m.username}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ======================================== */}
        {/* 2B. RIGHT CHAT WINDOW PANEL (~70% Width) */}
        {/* ======================================== */}
        <div className="flex-1 h-full rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col overflow-hidden relative">
          {selectedUser ? (
            /* Active Chat View */
            <div className="w-full h-full flex flex-col">
              {/* Active Chat Header */}
              <div className="p-4 border-b border-border/50 bg-secondary/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedUser(null)}
                    className="md:hidden p-1.5 rounded-lg text-muted-foreground hover:bg-secondary"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <Link
                  to={`/dashboard/profile/${selectedUser.username.replace('@', '')}`}
                  className="flex items-center gap-3 group cursor-pointer"
                  title="View full student profile"
                >
                  <div
                    className={`w-9 h-9 rounded-full ${selectedUser.avatarBg} text-white font-bold text-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    {selectedUser.avatarContent}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                      <span>{selectedUser.name}</span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground" />
                    </h3>
                    <p className="text-[11px] text-muted-foreground">{selectedUser.username}</p>
                  </div>
                </Link>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-semibold border border-blue-500/20">
                  <Lock className="w-3.5 h-3.5" />
                  <span>End-to-End Encrypted</span>
                </div>
              </div>

              {/* Chat Messages Area */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                <div className="text-center py-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/80 text-muted-foreground text-[11px] font-medium border border-border">
                    🔒 Messages auto-disappear 30 seconds after read
                  </span>
                </div>

                {(messages[selectedUser.id] || []).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] p-3.5 rounded-2xl text-xs font-medium ${
                        msg.sender === "me"
                          ? "bg-primary text-primary-foreground rounded-br-none shadow-sm"
                          : "bg-secondary text-foreground rounded-bl-none border border-border"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <span className="text-[9px] opacity-75 block text-right mt-1">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input Bar */}
              <div className="p-4 border-t border-border/50 bg-secondary/20">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={inputMsg}
                    onChange={(e) => setInputMsg(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Write an encrypted message..."
                    className="w-full h-11 pl-4 pr-12 text-xs rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="absolute right-2 p-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Empty Chat State (Centered Content) */
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4 my-auto">
              {/* Blue Shield Icon */}
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center border border-blue-500/20 shadow-sm">
                <ShieldCheck className="w-10 h-10" />
              </div>

              {/* Main Text */}
              <h2 className="font-heading text-xl font-bold text-foreground">
                Start a secure conversation
              </h2>

              {/* Description */}
              <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                Pick any cohort user from the left to open an encrypted chat. Messages auto-disappear 30 seconds after read.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. FLOATING ASSISTANT BUTTON               */}
      {/* ========================================== */}
      <button className="fixed bottom-8 right-[23vw] w-14 h-14 rounded-full bg-card border border-border/80 shadow-2xl flex items-center justify-center text-primary hover:scale-110 transition-transform z-40 cursor-pointer">
        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
      </button>
    </div>
  );
}