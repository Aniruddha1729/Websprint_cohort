import { createContext, useContext, useState, useEffect } from "react";
import { auth, onAuthStateChanged, signOut } from "../../lib/firebase";
import LoginModal from "../auth/LoginModal";

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  loading: true,
  loginWithGoogle: () => {},
  logout: () => {},
  openLoginModal: () => {},
});

const DEFAULT_COHORT_DATA = {
  role: "student",
  department: "Computer Engineering",
  year: "3rd Year (TE)",
  prn: "122B1045",
  verified: true,
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const savedGoogleUser = localStorage.getItem("cohort_google_user");
    const isLoggedIn = localStorage.getItem("cohort_logged_in");

    if (savedGoogleUser || isLoggedIn === "true") {
      let googleUserObj = null;
      if (savedGoogleUser) {
        try {
          googleUserObj = JSON.parse(savedGoogleUser);
        } catch (e) {}
      }

      const currentAvatar =
        localStorage.getItem("cohort_user_avatar") ||
        googleUserObj?.avatar ||
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80";

      setUser({
        name: googleUserObj?.name || "Shubhang Doley",
        email: googleUserObj?.email || "shubhang.doley@pccoe.edu.in",
        avatar: currentAvatar,
        ...DEFAULT_COHORT_DATA,
      });
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
    setLoading(false);
  }, []);

  const loginWithGoogle = (googleUserData) => {
    const avatarUrl = googleUserData.avatar || `https://lh3.googleusercontent.com/a/default-user`;
    const fullUser = {
      name: googleUserData.name || "Cohort Student",
      email: googleUserData.email || "student@pccoe.edu.in",
      avatar: avatarUrl,
      ...DEFAULT_COHORT_DATA,
    };

    localStorage.setItem("cohort_google_user", JSON.stringify(fullUser));
    localStorage.setItem("cohort_user_avatar", avatarUrl);
    localStorage.setItem("cohort_logged_in", "true");

    setUser(fullUser);
    setIsAuthenticated(true);
    setIsLoginModalOpen(false);
  };

  const logout = async () => {
    try {
      if (auth && typeof signOut === "function") {
        await signOut(auth);
      }
    } catch (error) {
      console.error("Error signing out", error);
    }
    localStorage.removeItem("cohort_google_user");
    localStorage.removeItem("cohort_logged_in");
    setUser(null);
    setIsAuthenticated(false);
  };

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        loginWithGoogle,
        logout,
        openLoginModal,
      }}
    >
      {!loading && children}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);