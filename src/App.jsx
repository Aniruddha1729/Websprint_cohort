import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Analytics } from "@vercel/analytics/react";

// Providers
import AuthProvider from "./components/providers/AuthProvider";
import ThemeProvider from "./components/providers/ThemeProvider";

// Auth Components
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AuthRoute from "./components/auth/AuthRoute";
import AdminRoute from "./components/auth/AdminRoute";
import NonAdminRoute from "./components/auth/NonAdminRoute";

// Pages
import Landing from "./pages/Landing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

// Dashboard Pages
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Communities from "./pages/dashboard/Communities";
import CommunityDetail from "./pages/dashboard/CommunityDetail";
import XD from "./pages/dashboard/XD";
import CampusMap from "./pages/dashboard/CampusMap";
import Placements from "./pages/dashboard/Placements";
import Connect from "./pages/dashboard/Connect";
import AcademicCalendar from "./pages/dashboard/AcademicCalendar";
import HeadsUp from "./pages/dashboard/HeadsUp";
import ContactUs from "./pages/dashboard/ContactUs";
import Profile from "./pages/dashboard/Profile";
import Arcade from "./pages/dashboard/Arcade";
import Admins from "./pages/dashboard/Admins";

// Components
import Loader from "./components/ui/Loader";
import SpidermanOverlay from "./components/ui/SpidermanOverlay";

const queryClient = new QueryClient();

export default function App() {
  return (
    <GoogleOAuthProvider clientId="87428648402-t48b3kqeogkkdu7ihc9s0orrhhpvf1a8.apps.googleusercontent.com">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <BrowserRouter>
            <AuthProvider>
              <Analytics />
              <SpidermanOverlay />
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                
                <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
                  <Route index element={<DashboardHome />} />
                  <Route path="communities" element={<Communities />} />
                  <Route path="communities/:clubusername" element={<CommunityDetail />} />
                  <Route path="xd" element={<XD />} />
                  <Route path="map" element={<CampusMap />} />
                  <Route path="network" element={<Connect />} />
                  <Route path="connect" element={<Connect />} />
                  <Route path="placements" element={<Placements />} />
                  <Route path="collaborate" element={<Navigate to="/dashboard/connect" replace />} />
                  <Route path="exchange" element={<Navigate to="/dashboard/xd" replace />} />
                  <Route path="calendar" element={<AcademicCalendar />} />
                  <Route path="headsup" element={<HeadsUp />} />
                  <Route path="contact" element={<ContactUs />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="profile/:username" element={<Profile />} />
                  <Route path="arcade" element={<Arcade />} />
                  <Route path="admins" element={<AdminRoute><Admins /></AdminRoute>} />
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}
