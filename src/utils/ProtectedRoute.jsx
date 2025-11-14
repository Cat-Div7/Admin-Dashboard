import { Navigate, Outlet, useLocation } from "react-router-dom";
import { STORAGE_KEY_TOKEN, LOGIN_PATH } from "@constants";

function ProtectedRoute() {
  const token = localStorage.getItem(STORAGE_KEY_TOKEN);
  const isAuthenticated = !!token && token.trim() !== "";
  const location = useLocation();

  // If user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to={LOGIN_PATH} state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export { ProtectedRoute };
