import React from 'react';
import { UserCheck, UserPlus } from 'lucide-react';
import { SpiderIcon } from '../components/SpiderIcon';

export const FriendsPage: React.FC = () => {
  return (
    <main className="w-[60%] flex-shrink-0 min-w-0 h-screen overflow-y-auto bg-[#050505] relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.028]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M38 30h-4v-4h-4v4h-4v4h4v4h4v-4h4v-4zm-18 0h-4v-4H8v4H4v4h4v4h8v-4h4v-4zm18-18h-4v-4h-4v4h-4v4h4v4h4v-4h4v-4zM20 12h-4V8H8v4H4v4h4v4h8v-4h4v-4z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[680px] px-6 py-6 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.07]">
          <div className="flex items-center gap-2">
            <h1 className="text-[17px] font-bold text-white tracking-tight">c/friends</h1>
            <span className="hidden sm:inline text-[11px] text-gray-600 font-mono">• Connected PCCOE Peers</span>
          </div>
          <div className="text-red-500/25 hover:text-red-500/60 transition-colors cursor-default" title="🕷 Easter egg">
            <SpiderIcon className="w-4 h-4" />
          </div>
        </div>

        <div className="bg-[#0A0A0F] border border-white/[0.08] rounded-2xl p-8 text-center space-y-4 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center mx-auto text-[#6366f1]">
            <UserCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white">Friends</h2>
            <p className="text-xs text-gray-400 max-w-md mx-auto">
              Manage your friend list, see what your batchmates are working on, and start direct chats.
            </p>
          </div>
          <div className="pt-2">
            <button className="inline-flex items-center gap-2 bg-[#6366f1] hover:bg-[#5457e5] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-md">
              <UserPlus className="w-4 h-4" />
              <span>Find Classmates</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
