import React from 'react';
import {
  Home, Users, UserCheck, Zap, Layers, MapPin,
  Calendar, Gamepad2, Bell, BookUser, User, Sun
} from 'lucide-react';

interface NavItem { name: string; icon: React.ElementType; badge?: string }

const NAV: NavItem[] = [
  { name: 'Home',        icon: Home,      },
  { name: 'Communities', icon: Users,     badge: '99+' },
  { name: 'Friends',     icon: UserCheck, },
  { name: 'Connect',     icon: Zap,       },
  { name: 'XD',          icon: Layers,    },
  { name: 'Map',         icon: MapPin,    },
  { name: 'Calendar',    icon: Calendar,  },
  { name: 'Arcade',      icon: Gamepad2,  },
  { name: 'HeadsUp',     icon: Bell,      },
  { name: 'Contacts',    icon: BookUser,  },
  { name: 'Profile',     icon: User,      },
];

interface SidebarProps {
  activeItem?: string;
  onNavigate?: (item: string) => void;
  onLogout?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeItem = 'Home',
  onNavigate,
  onLogout,
}) => {
  return (
    <aside
      className="
        w-[20%] min-w-[180px] max-w-[280px] flex-shrink-0 h-screen
        bg-[#07070A] border-r border-white/[0.06]
        flex flex-col
        overflow-hidden
        z-40
        select-none
      "
    >
      {/* ── Brand ── */}
      <div className="flex items-center gap-2.5 px-3 pt-4 pb-3 mb-1 flex-shrink-0">
        <div
          className="flex-shrink-0 w-[26px] h-[26px] rounded-full
            bg-gradient-to-tr from-[#5227FF] via-[#35C1B5] to-[#FF9FFC]
            p-[2px] shadow-[0_0_10px_rgba(53,193,181,0.45)]"
        >
          <div className="w-full h-full bg-[#050508] rounded-full flex items-center justify-center">
            <span className="text-[#35C1B5] font-extrabold text-[10px] leading-none">c</span>
          </div>
        </div>
        <span className="font-semibold text-[15px] tracking-tight text-white/90 lowercase whitespace-nowrap">
          cohort
        </span>
      </div>

      {/* ── Nav items ── */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2 space-y-0.5">
        {NAV.map(({ name, icon: Icon, badge }) => {
          const active = activeItem === name;
          return (
            <button
              key={name}
              onClick={() => onNavigate?.(name)}
              className={`
                w-full h-[38px] rounded-lg px-2.5
                flex items-center gap-2.5
                text-[13px] font-medium
                transition-all duration-150 group relative
                ${active
                  ? 'bg-[#35C1B5] text-white shadow-[0_0_14px_rgba(53,193,181,0.28)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.06]'}
              `}
            >
              {/* Icon – always visible */}
              <Icon
                className={`flex-shrink-0 w-4 h-4
                  ${active ? 'text-white' : 'text-gray-500 group-hover:text-white/80'}`}
              />

              {/* Label */}
              <span className="flex-1 truncate whitespace-nowrap text-left text-[13px]">
                {name}
              </span>

              {/* Badge */}
              {badge && (
                <span className="flex-shrink-0 bg-red-500 text-white text-[9px] font-bold px-1.5 py-px rounded-full leading-tight">
                  {badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* ── Bottom controls ── */}
      <div className="px-2 pb-3 pt-2 border-t border-white/[0.05] flex-shrink-0 space-y-0.5">
        <button
          className="w-full h-[34px] px-2.5 rounded-lg flex items-center gap-2.5 text-[12px] text-gray-500 hover:text-white hover:bg-white/[0.06] transition-all duration-150"
        >
          <Sun className="flex-shrink-0 w-3.5 h-3.5" />
          <span className="whitespace-nowrap">
            Light mode
          </span>
        </button>

        {onLogout && (
          <button
            onClick={onLogout}
            className="w-full h-[30px] px-2.5 rounded-lg flex items-center gap-2.5 text-[11px] text-gray-600 hover:text-red-400 hover:bg-red-500/[0.06] transition-all duration-150"
          >
            <span className="flex-shrink-0 text-base leading-none">←</span>
            <span className="whitespace-nowrap">
              Exit Dashboard
            </span>
          </button>
        )}
      </div>
    </aside>
  );
};
