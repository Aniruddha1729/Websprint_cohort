import React, { useState } from 'react';
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

/** Width of the sidebar when collapsed (icon-only) */
const COLLAPSED_W = 52;
/** Width of the sidebar when expanded (icon + label) */
const EXPANDED_W  = 176;

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
  const [expanded, setExpanded] = useState(false);

  return (
    /**
     * The sidebar is NOT position:fixed – it lives inside the flex row of Dashboard.
     * It has a fixed px width that transitions smoothly on hover.
     * overflow-hidden clips the labels while collapsed.
     * flex-shrink-0 prevents the flex row from squishing it.
     */
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      style={{ width: expanded ? EXPANDED_W : COLLAPSED_W }}
      className="
        flex-shrink-0 h-screen
        bg-[#07070A] border-r border-white/[0.06]
        flex flex-col
        transition-[width] duration-200 ease-in-out
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
        <span
          className="font-semibold text-[15px] tracking-tight text-white/90 lowercase whitespace-nowrap
            transition-opacity duration-150"
          style={{ opacity: expanded ? 1 : 0 }}
        >
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
              title={!expanded ? name : undefined}
              className={`
                w-full h-[38px] rounded-lg
                flex items-center gap-2.5
                text-[13px] font-medium
                transition-all duration-150 group relative
                ${expanded ? 'px-2.5' : 'px-0 justify-center'}
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

              {/* Label – fades in when expanded */}
              <span
                className="flex-1 truncate whitespace-nowrap text-left
                  transition-opacity duration-150"
                style={{ opacity: expanded ? 1 : 0 }}
              >
                {name}
              </span>

              {/* Badge – only show when expanded */}
              {badge && expanded && (
                <span className="flex-shrink-0 bg-red-500 text-white text-[9px] font-bold px-1.5 py-px rounded-full leading-tight">
                  {badge}
                </span>
              )}

              {/* Collapsed badge dot */}
              {badge && !expanded && (
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-red-500" />
              )}
            </button>
          );
        })}
      </nav>

      {/* ── Bottom controls ── */}
      <div className="px-2 pb-3 pt-2 border-t border-white/[0.05] flex-shrink-0 space-y-0.5">
        <button
          title={!expanded ? 'Light mode' : undefined}
          className={`
            w-full h-[34px] rounded-lg flex items-center gap-2.5
            text-[12px] text-gray-500 hover:text-white hover:bg-white/[0.06]
            transition-all duration-150
            ${expanded ? 'px-2.5' : 'px-0 justify-center'}
          `}
        >
          <Sun className="flex-shrink-0 w-3.5 h-3.5" />
          <span
            className="whitespace-nowrap transition-opacity duration-150"
            style={{ opacity: expanded ? 1 : 0 }}
          >
            Light mode
          </span>
        </button>

        {onLogout && (
          <button
            onClick={onLogout}
            title={!expanded ? 'Exit' : undefined}
            className={`
              w-full h-[30px] rounded-lg flex items-center gap-2.5
              text-[11px] text-gray-600 hover:text-red-400 hover:bg-red-500/[0.06]
              transition-all duration-150
              ${expanded ? 'px-2.5' : 'px-0 justify-center'}
            `}
          >
            <span className="flex-shrink-0 text-base leading-none">←</span>
            <span
              className="whitespace-nowrap transition-opacity duration-150"
              style={{ opacity: expanded ? 1 : 0 }}
            >
              Exit Dashboard
            </span>
          </button>
        )}
      </div>
    </aside>
  );
};
