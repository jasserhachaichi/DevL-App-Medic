import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));

  const setToken = (newToken) => {
    setToken_(newToken);
    if (newToken) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + newToken;
      localStorage.setItem("token", newToken);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  };

  const login = async (email, password) => {
/*     try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      setToken(response.data.token);
      return "ok";
    } catch (error) {
      console.error("Login failed:", error);
    } */
  };

  const logout = () => setToken(null);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      login,
      logout,
    }),
    [token]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
