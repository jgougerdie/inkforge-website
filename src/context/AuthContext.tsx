import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "sharpline_reader";

interface AuthState {
  name: string | null;
  isLoggedIn: boolean;
  login: (name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    setName(localStorage.getItem(STORAGE_KEY));
  }, []);

  function login(newName: string) {
    localStorage.setItem(STORAGE_KEY, newName);
    setName(newName);
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY);
    setName(null);
  }

  return (
    <AuthContext.Provider value={{ name, isLoggedIn: name !== null, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
