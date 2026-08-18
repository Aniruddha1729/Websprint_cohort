import React, { useState } from 'react';
import { Heart, ExternalLink, MessageSquare, Send } from 'lucide-react';

/* ── Types ──────────────────────────────────────────────────── */
export interface CommentData {
  id: number;
  author: string;
  handle: string;
  text: string;
  date: string;
  avatar?: string;
  avatarLetter?: string;
  avatarColor?: string;
}

export interface PostData {
  id: number;
  author: string;
  avatar: string;
  handle: string;
  date: string;
  likes: number;
  content: string;
  subContent?: string;
  linkPreview?: { title: string; url: string; domain: string };
  repliesCount: number;
  comments: CommentData[];
}

const ME_AVATAR =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80';

/* ── Comment ────────────────────────────────────────────────── */
const Comment: React.FC<{ c: CommentData }> = ({ c }) => (
  <div className="flex gap-2.5">
    {c.avatar ? (
      <img src={c.avatar} alt={c.author} className="w-6 h-6 rounded-full object-cover border border-white/10 flex-shrink-0 mt-0.5" />
    ) : (
      <div
        className="w-6 h-6 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center font-bold text-[11px] text-white"
        style={{ backgroundColor: c.avatarColor ?? '#10b981' }}
      >
        {c.avatarLetter ?? c.author[0]}
      </div>
    )}
    <div className="flex-1 bg-[#0D0D14] border border-white/[0.06] rounded-xl px-3 py-2">
      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
        <span className="text-[12px] font-bold text-white">{c.author}</span>
        <span className="text-[10px] text-gray-500 font-mono">{c.handle}</span>
        <span className="text-[10px] text-gray-600 ml-auto">{c.date}</span>
      </div>
      <p className="text-[12px] text-gray-300 leading-relaxed">{c.text}</p>
    </div>
  </div>
);

/* ── PostCard ───────────────────────────────────────────────── */
export const PostCard: React.FC<{ post: PostData }> = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState<CommentData[]>(post.comments);
  const [reply, setReply] = useState('');
  const [showReply, setShowReply] = useState(false);

  const toggleLike = () => {
    setLiked(v => !v);
    setLikes(v => v + (liked ? -1 : 1));
  };

  const submitReply = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = reply.trim();
    if (!trimmed) return;
    setComments(prev => [
      ...prev,
      {
        id: Date.now(),
        author: 'Aditya Kulkarni',
        handle: '@aditya26',
        text: trimmed,
        date: 'Just now',
        avatar: ME_AVATAR,
      },
    ]);
    setReply('');
    setShowReply(false);
  };

  return (
    <div className="w-full bg-[#0A0A0F] border border-white/[0.08] rounded-2xl p-5 shadow-lg hover:border-white/[0.13] transition-all duration-150 space-y-3.5">

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <img src={post.avatar} alt={post.author} className="w-9 h-9 rounded-full object-cover border border-white/10 flex-shrink-0" />
          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[13px] font-bold text-white">{post.author}</span>
              <span className="text-[11px] text-gray-500 font-mono">{post.handle}</span>
              <span className="text-[11px] text-gray-600">{post.date}</span>
            </div>
          </div>
        </div>

        {/* Like button */}
        <button
          onClick={toggleLike}
          className={`flex items-center gap-1 text-[12px] font-semibold px-2 py-1 rounded-full transition-all flex-shrink-0 ${
            liked
              ? 'text-red-400 bg-red-500/10 border border-red-500/20'
              : 'text-gray-500 hover:text-red-400 hover:bg-red-500/[0.07]'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-current' : ''}`} />
          {likes}
        </button>
      </div>

      {/* Content */}
      <div className="space-y-1.5">
        <p className="text-[13px] text-white font-medium leading-relaxed">{post.content}</p>
        {post.subContent && (
          <p className="text-[12px] text-gray-400 leading-relaxed">{post.subContent}</p>
        )}
      </div>

      {/* Link preview */}
      {post.linkPreview && (
        <a
          href={post.linkPreview.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-[#060609] border border-white/[0.07] rounded-xl p-3 hover:border-[#35C1B5]/30 hover:bg-[#08080D] transition-all group"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:scale-105 transition-transform">
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-mono text-gray-300 truncate">{post.linkPreview.title}</p>
            <p className="text-[10px] text-gray-600 truncate">{post.linkPreview.domain}</p>
          </div>
        </a>
      )}

      {/* Actions row */}
      <div className="flex items-center gap-2 pt-0.5">
        <button
          onClick={() => setShowReply(v => !v)}
          className="flex items-center gap-1.5 text-[11px] text-blue-400/80 border border-blue-400/20 bg-blue-400/[0.07] px-2.5 py-1 rounded-lg hover:bg-blue-400/[0.13] transition-all font-mono"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          {comments.length} {comments.length === 1 ? 'Reply' : 'Replies'}
        </button>
      </div>

      {/* Comments */}
      {comments.length > 0 && (
        <div className="space-y-2.5 pt-1 border-t border-white/[0.05]">
          {comments.map(c => <Comment key={c.id} c={c} />)}
        </div>
      )}

      {/* Reply composer */}
      {showReply && (
        <form onSubmit={submitReply} className="flex items-center gap-2 pt-1">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#35C1B5] to-[#8067FF] p-[1.5px] flex-shrink-0">
            <img src={ME_AVATAR} alt="me" className="w-full h-full rounded-full object-cover" />
          </div>
          <div className="flex-1 relative flex items-center">
            <input
              type="text"
              value={reply}
              onChange={e => setReply(e.target.value)}
              placeholder="Write a reply… Type @ to tag someone"
              autoFocus
              className="w-full bg-[#060609] border border-white/[0.08] rounded-full py-1.5 pl-3.5 pr-9 text-[12px] text-white placeholder-gray-600 focus:outline-none focus:border-[#35C1B5] transition-colors"
            />
            <button
              type="submit"
              disabled={!reply.trim()}
              className={`absolute right-1.5 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                reply.trim() ? 'bg-[#35C1B5] text-white hover:scale-110' : 'text-gray-700'
              }`}
            >
              <Send className="w-3 h-3" />
            </button>
          </div>
        </form>
      )}

    </div>
  );
};
