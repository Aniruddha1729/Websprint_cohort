import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  login: () => {},
  bypassLogin: () => {},
  logout: () => {},
});

const DEFAULT_USER = {
  name: "Alex Johnson",
  email: "alex.johnson22@pccoe.edu.in",
  role: "student",
  department: "Computer Engineering",
  year: "3rd Year (TE)",
  prn: "122B1045",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AlexJohnson",
  verified: true,
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("cohort_user");
      return stored ? JSON.parse(stored) : DEFAULT_USER;
    } catch {
      return DEFAULT_USER;
    }
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem("cohort_authenticated");
    return storedAuth !== null ? JSON.parse(storedAuth) : true;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("cohort_user", JSON.stringify(user));
      localStorage.setItem("cohort_authenticated", JSON.stringify(true));
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("cohort_user");
      localStorage.setItem("cohort_authenticated", JSON.stringify(false));
      setIsAuthenticated(false);
    }
  }, [user]);

  const login = (userData) => {
    setUser({ ...DEFAULT_USER, ...userData });
  };

  const bypassLogin = (role = "student") => {
    const bypassUser = { ...DEFAULT_USER, role };
    setUser(bypassUser);
    return bypassUser;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("cohort_user");
    localStorage.setItem("cohort_authenticated", JSON.stringify(false));
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, bypassLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);