import { Navigate, Outlet } from "react-router-dom";

function PublicRoute() {
  const token = localStorage.getItem("token");

  // If there's a token, redirect to dashboard
  if (token) 
    return <Navigate to="admin" relative="path" replace />;
  
  return <Outlet />;
}

export { PublicRoute };
