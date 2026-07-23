import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks';
import AppLayout from '@/components/layout/AppLayout';
import LandingPage from '@/pages/LandingPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import AuthCallback from '@/pages/AuthCallback';
import DashboardPage from '@/pages/DashboardPage';
import GroupsPage from '@/pages/GroupsPage';
import AttendancePage from '@/pages/AttendancePage';
import MinistriesPage from '@/pages/MinistriesPage';
import SongsPage from '@/pages/SongsPage';
import AnnouncementsPage from '@/pages/AnnouncementsPage';
import EventsPage from '@/pages/EventsPage';
import PrayerPage from '@/pages/PrayerPage';
import FeedbackPage from '@/pages/FeedbackPage';
import NotificationsPage from '@/pages/NotificationsPage';
import ProfilePage from '@/pages/ProfilePage';
import SettingsPage from '@/pages/SettingsPage';
import AdminDashboard from '@/pages/admin/AdminDashboard';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <LoadingScreen />;
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  const { isAdmin, loading } = useAuth();
  if (loading) return <LoadingScreen />;
  if (!isAdmin) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
}

function LoadingScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-navy-900">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-navy-200 dark:border-navy-700 border-t-gold-500 rounded-full animate-spin" />
        <p className="text-navy-400 text-sm">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  const { user, loading, initialLoad } = useAuth();
  const location = useLocation();
  const isLanding = location.pathname === '/';

  if (initialLoad) return <LoadingScreen />;

  if (location.pathname === '/auth/callback') return <AuthCallback />;

  if (!user) {
    if (isLanding) return <LandingPage />;
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/ministries" element={<MinistriesPage />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/prayer" element={<PrayerPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<AdminRoute><SettingsPage /></AdminRoute>} />
        <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        <Route path="/" element={<RoleRedirect />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}

function RoleRedirect() {
  const { isAdmin, loading } = useAuth();
  if (loading) return <LoadingScreen />;
  return <Navigate to={isAdmin ? '/admin' : '/dashboard'} replace />;
}