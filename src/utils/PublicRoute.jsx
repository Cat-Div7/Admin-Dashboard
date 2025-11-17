import { Navigate, Outlet } from "react-router-dom";
import { STORAGE_KEY_TOKEN, HOME_PATH } from "@constants";

function PublicRoute() {
  const token = localStorage.getItem(STORAGE_KEY_TOKEN);
  const isAuthenticated = !!token && token.trim() !== "";

  // If user is authenticated, redirect to admin
  if (isAuthenticated) {
    return <Navigate to={HOME_PATH} replace />;
  }

  return <Outlet />;
}

export { PublicRoute };
