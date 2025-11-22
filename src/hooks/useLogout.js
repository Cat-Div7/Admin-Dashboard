import { useNavigate } from "react-router-dom";
import { STORAGE_KEY_TOKEN, STORAGE_KEY_WELCOME, LOGIN_PATH } from "@constants";
import { toast } from "sonner";

export function useLogout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem(STORAGE_KEY_TOKEN);
    localStorage.removeItem(STORAGE_KEY_WELCOME);
    toast.warning("Logging out..!");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    navigate(LOGIN_PATH);
  };

  return handleLogout;
}
