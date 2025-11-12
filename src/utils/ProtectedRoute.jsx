import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoute() {
  const token = localStorage.getItem("token");
  const location = useLocation();

  // If there's no token, redirect to login page
  if (!token)
    return <Navigate to="login" relative="path" state={{ from: location }} replace />;

  return <Outlet />;
}

export { ProtectedRoute };
