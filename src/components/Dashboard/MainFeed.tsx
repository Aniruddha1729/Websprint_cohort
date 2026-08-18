import React, { useState } from 'react';
import { type PostData } from './PostCard';
import { PostCard } from './PostCard';
import { PostComposer } from './PostComposer';
import { SpiderIcon } from '../SpiderIcon';

const INITIAL_POSTS: PostData[] = [
  {
    id: 1,
    author: 'Vrushabh Hirap',
    handle: '@vrushabhhirap',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
    date: '· 6 May',
    likes: 5,
    content: 'TOC solutions are up on Cohort 👀',
    subContent: 'have a look whenever you want... panic studying before the exam is still an option 🙂',
    linkPreview: {
      title: 'drive.google.com › folders › 1TOC_Solutions_PCCOE…',
      url: 'https://drive.google.com',
      domain: 'drive.google.com',
    },
    repliesCount: 1,
    comments: [
      {
        id: 101,
        author: 'SOHAM ZAGARE',
        handle: '@soham24',
        avatarLetter: 'S',
        avatarColor: '#10b981',
        text: 'Cohort goated ngl',
        date: '6 May',
      },
    ],
  },
  {
    id: 2,
    author: 'Anushka Shinde',
    handle: '@anushkashinde',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80',
    date: '· 4 May',
    likes: 15,
    content: 'Friendly announcement for those still "searching for resources" 😉',
    subContent:
      'The DBMS full question bank answer key + unit-wise PYQ solutions are now live on Cohort. No more sifting through 10 Telegram groups — it\'s all right here.',
    linkPreview: {
      title: 'drive.google.com › folders › 1DBMS_AnswerKey_2026…',
      url: 'https://drive.google.com',
      domain: 'drive.google.com',
    },
    repliesCount: 3,
    comments: [
      {
        id: 201,
        author: 'Aditya Kulkarni',
        handle: '@aditya26',
        avatarLetter: 'A',
        avatarColor: '#35C1B5',
        text: 'Lifesaver for tomorrow morning exam! 🙌',
        date: '4 May',
      },
    ],
  },
];

export const MainFeed: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>(INITIAL_POSTS);

  const handlePost = (content: string) => {
    setPosts(prev => [
      {
        id: Date.now(),
        author: 'Aditya Kulkarni',
        handle: '@aditya26',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80',
        date: '· Just now',
        likes: 0,
        content,
        repliesCount: 0,
        comments: [],
      },
      ...prev,
    ]);
  };

  return (
    /**
     * flex-1 → takes all remaining horizontal space between the two sidebars.
     * h-screen + overflow-y-auto → this column scrolls independently.
     * min-w-0 prevents flex child from overflowing its container.
     * bg-[#050505] is the content background.
     */
    <main className="flex-1 min-w-0 h-screen overflow-y-auto bg-[#050505] relative">

      {/* Subtle repeating icon-grid pattern (absolutely covers this column only) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.028]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M38 30h-4v-4h-4v4h-4v4h4v4h4v-4h4v-4zm-18 0h-4v-4H8v4H4v4h4v4h8v-4h4v-4zm18-18h-4v-4h-4v4h-4v4h4v4h4v-4h4v-4zM20 12h-4V8H8v4H4v4h4v4h8v-4h4v-4z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Scrollable content – centered feed, max 600px wide */}
      <div className="relative z-10 mx-auto w-full max-w-[600px] px-4 py-6 space-y-5">

        {/* Feed header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.07]">
          <div className="flex items-center gap-2">
            <h1 className="text-[17px] font-bold text-white tracking-tight">c/home</h1>
            <span className="hidden sm:inline text-[11px] text-gray-600 font-mono">• PCCOE Central Feed</span>
          </div>
          <div
            className="text-red-500/25 hover:text-red-500/60 transition-colors cursor-default"
            title="🕷 Easter egg"
          >
            <SpiderIcon className="w-4 h-4" />
          </div>
        </div>

        {/* Post composer */}
        <PostComposer onPost={handlePost} />

        {/* Feed posts */}
        <div className="space-y-4">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Bottom breathing room */}
        <div className="h-20" />
      </div>
    </main>
  );
};
