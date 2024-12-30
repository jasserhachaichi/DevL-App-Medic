import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

export const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();

  return token ? (children || <Outlet />) : <Navigate to="/login" />;
};
