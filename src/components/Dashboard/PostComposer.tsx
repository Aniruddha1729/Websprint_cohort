import React, { useState } from 'react';
import { Paperclip, Send } from 'lucide-react';

const USER_AVATAR =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80';

interface PostComposerProps {
  onPost: (content: string) => void;
}

export const PostComposer: React.FC<PostComposerProps> = ({ onPost }) => {
  const [text, setText] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onPost(trimmed);
    setText('');
  };

  return (
    <div className="w-full bg-[#0A0A0F] border border-white/[0.08] rounded-2xl px-4 pt-4 pb-3 shadow-lg hover:border-white/[0.13] transition-colors">
      <form onSubmit={submit}>

        {/* Input row */}
        <div className="flex items-start gap-3 mb-3">
          <img
            src={USER_AVATAR}
            alt="You"
            className="w-8 h-8 rounded-full object-cover border border-white/10 flex-shrink-0 mt-0.5"
          />
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(e); } }}
            placeholder="What's on your mind? Type @ to tag users or communities"
            rows={2}
            className="w-full bg-transparent text-[13px] text-white placeholder-gray-600 focus:outline-none resize-none leading-relaxed"
          />
        </div>

        {/* Action row */}
        <div className="flex items-center justify-between border-t border-white/[0.05] pt-2.5">
          <button
            type="button"
            className="flex items-center gap-1.5 text-[12px] text-gray-500 hover:text-white transition-colors px-1.5 py-1 rounded-lg hover:bg-white/[0.05]"
          >
            <Paperclip className="w-3.5 h-3.5 text-[#35C1B5]" />
            Attach
          </button>

          <div className="flex items-center gap-2">
            {text.trim() && (
              <button
                type="button"
                onClick={() => setText('')}
                className="text-[12px] text-gray-500 hover:text-white px-2.5 py-1 transition-colors"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={!text.trim()}
              className={`flex items-center gap-1.5 text-[12px] font-semibold px-3.5 py-1.5 rounded-full transition-all duration-150 ${
                text.trim()
                  ? 'bg-[#35C1B5] text-white hover:bg-[#2db3a8] shadow-[0_0_12px_rgba(53,193,181,0.35)] hover:scale-105'
                  : 'bg-white/[0.06] text-gray-600 cursor-not-allowed'
              }`}
            >
              <Send className="w-3 h-3" />
              Post
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};
