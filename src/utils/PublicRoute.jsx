import { Navigate, Outlet } from "react-router-dom";
import { STORAGE_KEY_TOKEN, ADMIN_PATH } from "@constants";

function PublicRoute() {
  const token = localStorage.getItem(STORAGE_KEY_TOKEN);
  const isAuthenticated = !!token && token.trim() !== "";

  // If user is authenticated, redirect to dashboard
  if (isAuthenticated) {
    console.log(ADMIN_PATH);
    return <Navigate to={ADMIN_PATH} replace />;
  }

  return <Outlet />;
}

export { PublicRoute };
