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
    likes: 24,
    content: 'TOC solutions are up on Cohort 👀',
    subContent: 'have a look whenever you want... panic studying before the exam is still an option 🙂',
    linkPreview: {
      title: 'drive.google.com › folders › 1TOC_Solutions_PCCOE…',
      url: 'https://drive.google.com',
      domain: 'drive.google.com',
    },
    repliesCount: 4,
    comments: [
      {
        id: 101,
        author: 'SOHAM ZAGARE',
        handle: '@soham24',
        avatarLetter: 'S',
        avatarColor: '#10b981',
        text: 'Cohort goated ngl, saved us for TOC unit 4 proofs!',
        date: '6 May',
      },
      {
        id: 102,
        author: 'Priya Deshmukh',
        handle: '@priyad25',
        avatarLetter: 'P',
        avatarColor: '#ec4899',
        text: 'Are PDA state machine diagrams included in unit 5 folder?',
        date: '6 May',
      }
    ],
  },
  {
    id: 2,
    author: 'Anushka Shinde',
    handle: '@anushkashinde',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80',
    date: '· 4 May',
    likes: 38,
    content: 'Friendly announcement for those still "searching for resources" 😉',
    subContent:
      'The DBMS full question bank answer key + unit-wise PYQ solutions are now live on Cohort. No more sifting through 10 Telegram groups — it\'s all right here.',
    linkPreview: {
      title: 'drive.google.com › folders › 1DBMS_AnswerKey_2026…',
      url: 'https://drive.google.com',
      domain: 'drive.google.com',
    },
    repliesCount: 5,
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
  {
    id: 3,
    author: 'Shivam Deshmukh',
    handle: '@shivam_comp25',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80',
    date: '· 2 May',
    likes: 42,
    content: '🚀 PCCOE WebSprint Cohort 2026 Hackathon Registrations are OPEN!',
    subContent:
      '48-Hour fullstack marathon building high-performance web apps with React, Vite & Three.js shaders. ₹50,000 prize pool up for grabs for PCCOE teams!',
    linkPreview: {
      title: 'websprint.pccoepune.org › register-team-2026',
      url: 'https://pccoepune.org',
      domain: 'websprint.pccoepune.org',
    },
    repliesCount: 8,
    comments: [
      {
        id: 301,
        author: 'Rohan Patil',
        handle: '@rohan_entc',
        avatarLetter: 'R',
        avatarColor: '#6366f1',
        text: 'Can ENTC & Mechanical students form cross-branch teams?',
        date: '2 May',
      },
    ],
  },
  {
    id: 4,
    author: 'Riya Agarwal',
    handle: '@riya_ieee',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80',
    date: '· 28 Apr',
    likes: 29,
    content: 'IEEE PCCOE Machine Learning & PyTorch Workshop this Saturday 🤖',
    subContent:
      'Join us at Computer Dept Innovation Lab (Building C). We will train CNN vision models and deploy PyTorch inference servers live.',
    repliesCount: 3,
    comments: [
      {
        id: 401,
        author: 'Saurabh Joshi',
        handle: '@saurabh_it',
        avatarLetter: 'S',
        avatarColor: '#f59e0b',
        text: 'Will certificates be provided by IEEE Pune Section?',
        date: '28 Apr',
      },
    ],
  },
  {
    id: 5,
    author: 'Omkar Patil',
    handle: '@omkar_robotics',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80',
    date: '· 25 Apr',
    likes: 19,
    content: 'Robotics Workshop in Mechanical Sandbox Tomorrow at 4 PM ⚙️',
    subContent:
      'Hands-on session with ROS2 navigation stack and ESP32 microcontrollers. Free entry for all PCCOE departments!',
    repliesCount: 2,
    comments: [],
  },
  {
    id: 6,
    author: 'Neha Joshi',
    handle: '@neha_council',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80',
    date: '· 20 Apr',
    likes: 56,
    content: 'Campus Reading Room 24x7 Access Proposal Submitted 📚',
    subContent:
      'Student Council officially submitted the petition to PCCOE management for 24x7 Reading Room access during semester end-sem exams.',
    repliesCount: 11,
    comments: [
      {
        id: 601,
        author: 'Kunal Verma',
        handle: '@kunal_cs',
        avatarLetter: 'K',
        avatarColor: '#8b5cf6',
        text: 'Huge win if approved before the mid-May exams!',
        date: '20 Apr',
      },
    ],
  },
  {
    id: 7,
    author: 'Tanmay Kulkarni',
    handle: '@tanmay_placements',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80',
    date: '· 15 Apr',
    likes: 67,
    content: 'PCCOE Campus Placement Statistics 2025-26 Updated 📊',
    subContent:
      'Over 450+ offers generated across Computer, IT, ENTC and Mechanical branches so far! Check Cohort placement portal for breakdown.',
    linkPreview: {
      title: 'pccoe.org › placements › stats-summary-2026',
      url: 'https://pccoepune.org',
      domain: 'pccoepune.org',
    },
    repliesCount: 6,
    comments: [],
  }
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
    <main className="w-[60%] flex-shrink-0 min-w-0 h-screen overflow-y-auto bg-[#050505] relative">

      {/* Subtle repeating icon-grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.028]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M38 30h-4v-4h-4v4h-4v4h4v4h4v-4h4v-4zm-18 0h-4v-4H8v4H4v4h4v4h8v-4h4v-4zm18-18h-4v-4h-4v4h-4v4h4v4h4v-4h4v-4zM20 12h-4V8H8v4H4v4h4v4h8v-4h4v-4z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Scrollable content – centered feed occupying 60% section */}
      <div className="relative z-10 mx-auto w-full max-w-[680px] px-6 py-6 space-y-5">

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
        <div className="h-24" />
      </div>
    </main>
  );
};
