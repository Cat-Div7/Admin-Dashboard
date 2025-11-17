import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

function ValidateRoute() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Strict numeric check (only digits)
  const isValidId = typeof id === "string" && /^[0-9]+$/.test(id);

  useEffect(() => {
    !isValidId && navigate(-1);
    return;
  }, [isValidId, navigate]);

  return <Outlet />;
}

export { ValidateRoute };
