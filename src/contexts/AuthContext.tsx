import { createContext, useContext, useState } from "react";

interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  patientId?: string | null;
  orderIds?: string[]  | null;
  setPatientInfo: (patientId: string, orderIds: string[]) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("accessToken");
  });

  const [patientId, setPatientId] = useState<string | null>(null);
  const [orderIds, setOrderIds] = useState<string[] | null>(null); 

  const login = (newToken: string) => {
    localStorage.setItem("accessToken", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setToken(null);
  };

  const setPatientInfo = (pId: string, oId: string[]) => {
    setPatientId(pId);
    setOrderIds(oId);
    localStorage.setItem("patientId", pId);
    if (oId) {
      localStorage.setItem("orderIds", oId[0]);
    }
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, patientId, orderIds, setPatientInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
