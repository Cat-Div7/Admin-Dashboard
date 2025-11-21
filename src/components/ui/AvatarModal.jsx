import { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import { useLogout } from "@hooks";
import { getUserData, avatarIcons } from "@utils";
import { FontIcon } from "@components";
import styles from "@styles/AvatarModal.module.css";

const AvatarModal = forwardRef((props, ref) => {
  const { close } = props;
  const [isOnline, setIsOnline] = useState(false);
  const navigate = useNavigate();
  const user = getUserData();

  const handleLogout = useLogout();

  const navigateToSettings = () => {
    navigate("/home/settings");
    close(false);
  };

  useEffect(() => {
    // Set Initial online State
    setIsOnline(window.navigator.onLine);

    // Handlers
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Event Listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div ref={ref} className={styles.modal}>
      {/* Avatar Section */}
      <div className={styles.avatarSection}>
        <div className={styles.avatar}>
          {user.avatarLetter}
          <span
            className={styles.userState}
            style={{
              background: isOnline
                ? "var(--success-color)"
                : "var(--danger-color)",
            }}
          ></span>
        </div>
      </div>

      {/* User Info */}
      <div className={styles.userInfo}>
        <p className={styles.userName}>{user.firstTwoNames}</p>
        <p className={styles.userEmail}>{user.email}</p>
      </div>

      {/* Divider */}
      <div className={styles.divider}></div>

      {/* Menu Items */}
      <div className={styles.menuItem} onClick={navigateToSettings}>
        <FontIcon className={styles.icon} icon={avatarIcons.settings} />
        <span>Settings</span>
      </div>
      <div className={styles.menuItem} onClick={navigateToSettings}>
        <FontIcon className={styles.icon} icon={avatarIcons.password} />
        <span>Change Password</span>
      </div>

      {/* Divider */}
      <div className={styles.divider}></div>

      {/* Logout */}
      <div className={styles.logoutItem} onClick={handleLogout}>
        <FontIcon className={styles.icon} icon={avatarIcons.logout} />
        <span>Logout</span>
      </div>

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
    </div>
  );
});

export { AvatarModal };
