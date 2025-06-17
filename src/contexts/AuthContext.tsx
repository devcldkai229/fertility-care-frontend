import { createContext, useContext, useState } from "react";

interface AuthContextType {
  token: string | null;
  login: (token: string, userProfileId: string) => void;
  logout: () => void;
  patientId?: string | null;
  userProfileId: string;
  orderIds?: string[] | null;
  isAuthenticated: boolean;
  setPatientInfo: (patientId: string, orderIds: string[]) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("accessToken");
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("accessToken") != null;
  })

  const [userProfileId, setUserProfileId] = useState<string>(() => {
    return localStorage.getItem("userProfileId") ?? "";
  });

  const [patientId, setPatientId] = useState<string | null>(() => {
    return localStorage.getItem("patientId");
  });

  const [orderIds, setOrderIds] = useState<string[] | null>(() => {
    const raw = localStorage.getItem("orderIds");
    return raw ? JSON.parse(raw) : null;
  });

  const login = (newToken: string, userProfileId: string) => {
    localStorage.setItem("accessToken", newToken);
    localStorage.setItem("userProfileId", userProfileId);
    setToken(newToken);
    setUserProfileId(userProfileId);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setPatientId(null);
    setOrderIds(null);
    setUserProfileId("");
    setIsAuthenticated(false);
  };

  const setPatientInfo = (pId: string, oId: string[]) => {
    setPatientId(pId);
    setOrderIds(oId);
    localStorage.setItem("patientId", pId);
    if (oId) {
      localStorage.setItem("orderIds", oId[0]);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        patientId,
        userProfileId,
        orderIds,
        isAuthenticated,
        setPatientInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
