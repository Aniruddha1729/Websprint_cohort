import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading, openLoginModal } = useAuth();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      openLoginModal();
    }
  }, [loading, isAuthenticated, openLoginModal]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-background text-foreground">
        <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}