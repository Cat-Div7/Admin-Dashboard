import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { getUserData, avatarIcons } from "@utils";
import { FontIcon } from "@components";
import { LOGIN_PATH, STORAGE_KEY_TOKEN } from "@constants";
import styles from "@styles/AvatarModal.module.css";

const AvatarModal = forwardRef((props, ref) => {
  const { close } = props;
  const navigate = useNavigate();
  const user = getUserData();

  const handleLogout = async () => {
    localStorage.removeItem(STORAGE_KEY_TOKEN);
    toast.warning("Logging out..!");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    navigate(LOGIN_PATH);
  };

  const navigateToSettings = () => {
    navigate("/home/settings");
    close(false);
  };

  return (
    <div ref={ref} className={styles.modal}>
      {/* Avatar Section */}
      <div className={styles.avatarSection}>
        <div className={styles.avatar}>{user.avatarLetter}</div>
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
