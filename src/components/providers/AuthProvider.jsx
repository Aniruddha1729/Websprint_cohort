import { createContext, useContext, useState, useEffect } from "react";
import { auth, onAuthStateChanged, signOut } from "../../lib/firebase";
import LoginModal from "../auth/LoginModal";

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  loading: true,
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
    if (!auth || typeof onAuthStateChanged !== "function") {
      // Local development default user state
      setUser({
        name: "Shubhang Doley",
        email: "shubhang.doley@pccoe.edu.in",
        avatar: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80",
        ...DEFAULT_COHORT_DATA,
      });
      setIsAuthenticated(true);
      setLoading(false);
      return;
    }

    try {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          const userData = {
            name: firebaseUser.displayName || "Cohort User",
            email: firebaseUser.email,
            avatar:
              firebaseUser.photoURL ||
              `https://api.dicebear.com/7.x/avataaars/svg?seed=${firebaseUser.uid}`,
            ...DEFAULT_COHORT_DATA,
          };
          setUser(userData);
          setIsAuthenticated(true);
        } else {
          // Default authenticated student user for local development
          setUser({
            name: "Shubhang Doley",
            email: "shubhang.doley@pccoe.edu.in",
            avatar: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80",
            ...DEFAULT_COHORT_DATA,
          });
          setIsAuthenticated(true);
        }
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (err) {
      console.warn("Auth state observer fallback:", err);
      setUser({
        name: "Shubhang Doley",
        email: "shubhang.doley@pccoe.edu.in",
        avatar: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80",
        ...DEFAULT_COHORT_DATA,
      });
      setIsAuthenticated(true);
      setLoading(false);
    }
  }, []);

  const logout = async () => {
    try {
      if (auth && typeof signOut === "function") {
        await signOut(auth);
      }
    } catch (error) {
      console.error("Error signing out", error);
    }
    setUser(null);
    setIsAuthenticated(false);
  };

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loading, logout, openLoginModal }}
    >
      {!loading && children}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);