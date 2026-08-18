import { useState } from "react";
import {
  Heart,
  MessageSquare,
  Share2,
  Image as ImageIcon,
  Paperclip,
  Link2,
  Smile,
  Send,
  ExternalLink,
  MoreHorizontal,
  Zap,
} from "lucide-react";
import { useAuth } from "../../components/providers/AuthProvider";

export default function DashboardHome() {
  const { user } = useAuth();
  const [postText, setPostText] = useState("");
  const [replyText, setReplyText] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(28);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* ========================================== */}
      {/* CENTER FEED CONTAINER (width: min(60%, 780px)) */}
      {/* ========================================== */}
      <div className="w-[min(60%,780px)] space-y-12">
        {/* ========================================== */}
        {/* 1. CREATE POST CARD (~200px Height)         */}
        {/* ========================================== */}
        <div className="w-full h-[210px] rounded-2xl bg-card border border-border/80 shadow-sm p-5 flex flex-col justify-between transition-all hover:border-border">
          {/* Top Row: Avatar + Placeholder Input */}
          <div className="flex items-start gap-3.5">
            <img
              src={user?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=PccoeStudent"}
              alt={user?.name}
              className="w-10 h-10 rounded-full border border-primary/20 bg-secondary object-cover shrink-0"
            />
            <textarea
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="Share something with PCCOE cohort..."
              className="w-full h-24 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none resize-none pt-1"
            />
          </div>

          {/* Bottom Row: Attachments + Compact Post Button */}
          <div className="pt-3 border-t border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <button className="p-2 rounded-lg hover:bg-secondary hover:text-foreground transition-colors" title="Attach Image">
                <ImageIcon className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg hover:bg-secondary hover:text-foreground transition-colors" title="Attach File">
                <Paperclip className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg hover:bg-secondary hover:text-foreground transition-colors" title="Add Link">
                <Link2 className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg hover:bg-secondary hover:text-foreground transition-colors" title="Emoji">
                <Smile className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => {
                if (postText.trim()) {
                  alert("Post published successfully!");
                  setPostText("");
                }
              }}
              className="px-5 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-md hover:opacity-90 transition-all active:scale-95 cursor-pointer"
            >
              Post
            </button>
          </div>
        </div>

        {/* ========================================== */}
        {/* 2. MAIN POST CARD (~45-50px below create-post) */}
        {/* ========================================== */}
        <div className="w-full rounded-2xl bg-card border border-border/80 shadow-md p-6 space-y-5">
          {/* Post Header: Avatar, Author, Username, Date, Heart */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3.5">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=ChiragFerwani"
                alt="Chirag Ferwani"
                className="w-11 h-11 rounded-full border border-primary/30 bg-secondary object-cover shrink-0"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading text-base font-bold text-foreground">Chirag Ferwani</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">
                    Lead
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  @chirag · <span className="text-muted-foreground/80">Today at 2:15 PM</span>
                </p>
              </div>
            </div>

            <button
              onClick={handleLike}
              className={`p-2 rounded-xl border transition-all ${
                isLiked ? "bg-red-500/10 text-red-500 border-red-500/20" : "bg-secondary/40 text-muted-foreground hover:text-foreground border-border/50"
              }`}
              title="Like Post"
            >
              <Heart className={`w-4.5 h-4.5 ${isLiked ? "fill-current" : ""}`} />
            </button>
          </div>

          {/* Post Text */}
          <div className="space-y-2 text-sm text-foreground/90 leading-relaxed font-normal">
            <p>
              Hey everyone! We have uploaded the official <strong>PCCOE WebSprint 2026 Hackathon</strong> resource pack & starter templates.
            </p>
            <p className="text-muted-foreground text-xs">
              Check out the Google Drive link below for system design references, API documentation, and UI components:
            </p>
          </div>

          {/* Attachment Card: Google Drive Link */}
          <a
            href="https://drive.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-secondary/40 border border-border/70 hover:border-primary/40 hover:bg-secondary/70 transition-all flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-sm">
                🔗
              </div>
              <div>
                <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                  Google Drive Resource Pack
                </h4>
                <p className="text-[11px] text-muted-foreground font-mono">drive.google.com/file/d/1A8k9_pccoe_resources</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
          </a>

          {/* Replies Counter Bar */}
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground pt-1">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span>1 Reply</span>
            <span className="text-muted-foreground/40">•</span>
            <span className="text-xs font-bold text-foreground">{likeCount} Likes</span>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50" />

          {/* Reply Section */}
          <div className="space-y-4">
            {/* Existing Reply Item */}
            <div className="p-3.5 rounded-xl bg-secondary/30 border border-border/40 flex items-start gap-3">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=AnanyaDeshmukh"
                alt="Ananya Deshmukh"
                className="w-8 h-8 rounded-full border border-primary/20 bg-secondary object-cover shrink-0"
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground">Ananya Deshmukh</span>
                  <span className="text-[10px] text-muted-foreground">1 hour ago</span>
                </div>
                <p className="text-xs text-muted-foreground leading-normal">
                  Thanks for sharing Chirag! Is the Three.js canvas template included in the zip file?
                </p>
              </div>
            </div>

            {/* Reply Input Row */}
            <div className="flex items-center gap-3 pt-1">
              <img
                src={user?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=PccoeStudent"}
                alt={user?.name}
                className="w-8 h-8 rounded-full border border-primary/20 bg-secondary object-cover shrink-0"
              />
              <div className="flex-1 relative flex items-center">
                <input
                  type="text"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Write a reply..."
                  className="w-full h-10 pl-3.5 pr-10 text-xs rounded-xl bg-secondary/50 border border-border/70 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
                />
                <button
                  onClick={() => {
                    if (replyText.trim()) {
                      alert("Reply posted!");
                      setReplyText("");
                    }
                  }}
                  className="absolute right-2 p-1.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all cursor-pointer"
                  title="Send Reply"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}