import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard/Dashboard';
import { AuthModal } from './components/AuthModal';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleBypassLogin = () => {
    setIsAuthModalOpen(false);
    setCurrentView('dashboard');
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-[#F5F5F5]">
      {currentView === 'landing' ? (
        <>
          <LandingPage
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
            onBypassLogin={handleBypassLogin}
          />
          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
            onLoginSuccess={handleBypassLogin}
          />
        </>
      ) : (
        <Dashboard onLogout={() => setCurrentView('landing')} />
      )}
    </div>
  );
}
