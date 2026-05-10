"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { DEMO_USER } from "@/lib/auth";

interface AuthContextType {
  isAuthenticated: boolean;
  user: typeof DEMO_USER | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<typeof DEMO_USER | null>(null);

  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("traveloop_auth");
    if (stored === "true") {
      setIsAuthenticated(true);
      setUser(DEMO_USER);
    }
  }, []);

  const login = (email: string, password: string) => {
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      setIsAuthenticated(true);
      setUser(DEMO_USER);
      localStorage.setItem("traveloop_auth", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("traveloop_auth");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
