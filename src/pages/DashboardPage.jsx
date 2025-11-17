import { useEffect } from "react";
import { toast, Toaster } from "sonner";
import { STORAGE_KEY_WELCOME } from "@constants";

function DashboardPage() {
  useEffect(() => {
    const greeting =
      JSON.parse(localStorage.getItem(STORAGE_KEY_WELCOME)) || false;

    if (greeting) return;

    setTimeout(() => {
      toast.info("Welcome to Admin Dashboard");
      localStorage.setItem(STORAGE_KEY_WELCOME, true);
    }, 1000);
  }, []);

  return (
    <>
      Dashboard
      <Toaster
        position="top-center"
        richColors
        closeButton
        duration={2500}
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "var(--background)",
          },
        }}
      />
    </>
  );
}

export { DashboardPage };
