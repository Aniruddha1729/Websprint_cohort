import { useState } from "react";
import { Mail, User, MessageSquare, Send, Sparkles, ShieldCheck, CheckSquare, Square } from "lucide-react";

export default function ContactUs() {
  const [name, setName] = useState("046_Shubhang_Doley");
  const [email, setEmail] = useState("shubhang.doley24@pccoepune.org");
  const [message, setMessage] = useState("");
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);

  const teamMembers = [
    {
      name: "Chirag Ferwani",
      role: "Lead Full-Stack Architect",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ChiragFerwani",
    },
    {
      name: "Shravan Kolhe",
      role: "Frontend & UI/UX Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shravan24",
    },
    {
      name: "Felina Mathew",
      role: "Backend & Systems Lead",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felina22",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isCaptchaChecked) {
      alert("Please verify that you are human by checking the captcha box.");
      return;
    }
    alert("Message sent successfully to Cohort Support!");
    setMessage("");
  };

  return (
    <div className="w-full min-h-full px-[2.5%] pt-[35px] pb-16 flex flex-col relative select-none">
      {/* Decorative Accents */}
      <div className="absolute top-8 left-[45%] opacity-20 pointer-events-none text-xs font-mono">
        ✦ ✨ ✦
      </div>

      {/* ========================================== */}
      {/* 1. PAGE HEADER (~110px Height)             */}
      {/* ========================================== */}
      <div className="w-full h-[85px] flex flex-col justify-center">
        <h1 className="font-heading text-[24px] font-bold text-foreground tracking-tight">
          c/contact
        </h1>
        <p className="text-sm md:text-[18px] text-muted-foreground font-normal mt-1 whitespace-nowrap">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      {/* Header Divider */}
      <div className="w-full border-b border-border/60 mb-8" />

      {/* ========================================== */}
      {/* 2. CONTACT FORM CARD (~780 x 551px)        */}
      {/* ========================================== */}
      <div className="w-full flex justify-center mb-16">
        <div className="w-[min(100%,780px)] min-h-[551px] p-8 rounded-2xl bg-card border border-border/80 shadow-md flex flex-col justify-between space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: NAME + EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  <User className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>NAME</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-[54px] px-4 text-sm font-semibold rounded-xl bg-[#F5F6F8] dark:bg-secondary/60 border border-transparent text-foreground focus:outline-none focus:border-primary transition-all"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>EMAIL</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[54px] px-4 text-sm font-semibold rounded-xl bg-[#F5F6F8] dark:bg-secondary/60 border border-transparent text-foreground focus:outline-none focus:border-primary transition-all"
                  required
                />
              </div>
            </div>

            {/* Row 2: MESSAGE FIELD */}
            <div className="space-y-2 relative">
              <label className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />
                <span>MESSAGE</span>
              </label>
              <div className="relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value.slice(0, 1000))}
                  placeholder="Tell us what's on your mind..."
                  className="w-full h-[146px] p-4 text-sm rounded-xl bg-[#F5F6F8] dark:bg-secondary/60 border border-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none transition-all"
                  required
                />
                <span className="absolute bottom-3 right-4 text-[12px] text-muted-foreground font-mono">
                  {message.length}/1000
                </span>
              </div>
            </div>

            {/* Row 3: HCAPTCHA AREA (~350 x 88px) */}
            <div className="w-full flex justify-center py-2">
              <div
                onClick={() => setIsCaptchaChecked(!isCaptchaChecked)}
                className="w-[350px] h-[88px] p-4 rounded-xl bg-card border border-border/80 shadow-sm flex items-center justify-between cursor-pointer hover:border-border transition-all"
              >
                <div className="flex items-center gap-3">
                  {isCaptchaChecked ? (
                    <CheckSquare className="w-8 h-8 text-emerald-500 shrink-0" />
                  ) : (
                    <Square className="w-8 h-8 text-muted-foreground/50 shrink-0" />
                  )}
                  <span className="text-sm font-bold text-foreground">I am human</span>
                </div>

                <div className="text-right">
                  <div className="flex items-center justify-end gap-1 text-xs font-bold text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 text-teal-500" />
                    <span>hCaptcha</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground/70">Privacy - Terms</p>
                </div>
              </div>
            </div>

            {/* Row 4: SEND MESSAGE BUTTON (~703 x 56px) */}
            <button
              type="submit"
              className="w-full h-[56px] rounded-xl bg-gradient-to-r from-[#91AFE2] to-[#91D6CF] hover:opacity-90 text-white font-bold text-base flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer"
            >
              <Send className="w-5 h-5 text-white" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. MEET THE TEAM SECTION                   */}
      {/* ========================================== */}
      <div className="w-full flex flex-col items-center space-y-6">
        <div className="w-[min(100%,780px)] flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-500" />
          <h2 className="text-xs md:text-[15px] font-bold uppercase tracking-widest text-muted-foreground">
            MEET THE TEAM
          </h2>
        </div>

        {/* 3 Team Cards Row */}
        <div className="w-[min(100%,780px)] grid grid-cols-1 md:grid-cols-3 gap-5">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col items-center text-center space-y-3 hover:shadow-md transition-all"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-16 h-16 rounded-full border-2 border-primary/30 bg-secondary object-cover shadow-sm"
              />
              <div>
                <h4 className="text-sm font-bold text-foreground">{member.name}</h4>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================== */}
      {/* 4. FLOATING CHATBOT BUTTON                 */}
      {/* ========================================== */}
      <button className="fixed bottom-8 right-[23vw] w-14 h-14 rounded-full bg-card border border-border/80 shadow-2xl flex items-center justify-center text-primary hover:scale-110 transition-transform z-40 cursor-pointer">
        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
      </button>
    </div>
  );
}