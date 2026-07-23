import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks';
import { cn, getInitials } from '@/utils';
import {
  LayoutDashboard, Users, ClipboardCheck, Music, Megaphone,
  Calendar, Heart, MessageSquare, Bell, User, Settings,
  Church, Sun, Moon, Monitor, LogOut, Menu, X, Shield,
} from 'lucide-react';
import { useTheme } from '@/hooks';
import { useState } from 'react';

const logoSrc = '/logo.png';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/groups', icon: Users, label: 'Groups' },
  { to: '/attendance', icon: ClipboardCheck, label: 'Attendance' },
  { to: '/ministries', icon: Church, label: 'Ministries' },
  { to: '/songs', icon: Music, label: 'Songs' },
  { to: '/announcements', icon: Megaphone, label: 'Announcements' },
  { to: '/events', icon: Calendar, label: 'Events' },
  { to: '/prayer', icon: Heart, label: 'Prayer' },
  { to: '/feedback', icon: MessageSquare, label: 'Feedback' },
  { to: '/notifications', icon: Bell, label: 'Notifications' },
];

const themeIcons = { light: Sun, dark: Moon, system: Monitor };

export default function AppLayout() {
  const { profile, signOut, role } = useAuth();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ThemeIcon = themeIcons[theme];

  const isAdmin = role === 'admin';

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-navy-50 dark:bg-navy-950">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-navy-900/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-navy-900 border-r border-navy-100 dark:border-navy-800 flex flex-col transition-transform duration-300',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Brand */}
        <div className="flex items-center gap-3 px-5 h-16 border-b border-navy-100 dark:border-navy-800">
          <img src={logoSrc} alt="Amazima School" className="h-8 w-auto" />
          <div>
            <h1 className="text-sm font-bold text-navy-900 dark:text-white">Amazima Chapel</h1>
            <p className="text-[10px] text-navy-400">Hub</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                  isActive
                    ? 'bg-navy-100 dark:bg-navy-800 text-navy-900 dark:text-white'
                    : 'text-navy-500 dark:text-navy-400 hover:bg-navy-50 dark:hover:bg-navy-800/50 hover:text-navy-700 dark:hover:text-white'
                )
              }
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom */}
        <div className="border-t border-navy-100 dark:border-navy-800 p-3 space-y-1">
          {isAdmin && (
            <NavLink
              to="/admin"
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                  isActive
                    ? 'bg-gold-50 dark:bg-gold-900/20 text-gold-700 dark:text-gold-300'
                    : 'text-navy-500 dark:text-navy-400 hover:bg-navy-50 dark:hover:bg-navy-800/50'
                )
              }
            >
              <Shield className="w-4 h-4" />
              Admin
            </NavLink>
          )}
          <NavLink
            to="/profile"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                isActive
                  ? 'bg-navy-100 dark:bg-navy-800 text-navy-900 dark:text-white'
                  : 'text-navy-500 dark:text-navy-400 hover:bg-navy-50 dark:hover:bg-navy-800/50'
              )
            }
          >
            <User className="w-4 h-4" />
            Profile
          </NavLink>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light')}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium text-navy-500 dark:text-navy-400 hover:bg-navy-50 dark:hover:bg-navy-800/50 transition-colors cursor-pointer"
          >
            <ThemeIcon className="w-4 h-4" />
            {theme === 'system' ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}
          </button>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="flex items-center justify-between h-16 px-6 bg-white dark:bg-navy-900 border-b border-navy-100 dark:border-navy-800">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg text-navy-500 hover:bg-navy-100 dark:hover:bg-navy-800 cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 ml-auto">
            <div className="text-right">
              <p className="text-sm font-medium text-navy-900 dark:text-white">
                {profile?.first_name} {profile?.last_name}
              </p>
              <p className="text-xs text-navy-400 capitalize">{profile?.role?.replace('_', ' ')}</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gold-500 flex items-center justify-center text-white text-xs font-bold">
              {profile ? getInitials(profile.first_name, profile.last_name) : '?'}
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
