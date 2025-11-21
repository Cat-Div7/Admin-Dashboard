import { useContext, useEffect, useRef, useState } from "react";
import { useMatches } from "react-router-dom";
import { topNavIcons } from "@utils";
import { FontIcon, NotificationModal, AvatarModal } from "@components";
import { ThemeContext } from "@context";
import { useClickOutside } from "@hooks";
import userAvatar from "../../assets/userAvatar.png";
import styles from "@styles/Navbar.module.css";
import { BackButton } from "..";

function Navbar() {
  const matches = useMatches();
  const [smallScreen, setSmallScreen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);

  // Refs
  const notificationRef = useRef(null);
  const avatarRef = useRef(null);

  // Context
  const { isDark, toggleTheme } = useContext(ThemeContext);

  useClickOutside(notificationRef, () => setIsNotificationsOpen(false));
  useClickOutside(avatarRef, () => setIsAvatarOpen(false));

  const breadcrumbs = matches
    .filter((match) => match.handle?.breadcrumb)
    .map((match) => {
      const bc = match.handle.breadcrumb;
      const params = match.params;

      if (typeof bc === "function") {
        return bc(params);
      }

      return bc;
    });

  // Scroll Function
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 786) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setSmallScreen]);

  return (
    <header className={styles.header}>
      {smallScreen && <BackButton style={{position: 'absolute'}} />}

      {!smallScreen && (
        <div className={styles.leftSection}>
          <h2 className={styles.title}>
            {breadcrumbs.map((crumb, index) => (
              <span key={index}>
                {crumb}
                {index < breadcrumbs.length - 1 && " / "}
              </span>
            ))}
          </h2>
        </div>
      )}

      <div className={styles.rightSection}>
        <label className={styles.searchLabel}>
          <FontIcon icon={topNavIcons.search} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
          />
        </label>

        <div className={styles.buttonGroup}>
          <button
            className={styles.iconButton}
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            title="Notifications"
          >
            <FontIcon icon={topNavIcons.bell} />
          </button>

          {isNotificationsOpen && <NotificationModal ref={notificationRef} />}

          <button
            className={styles.iconButton}
            title="Toggle Theme"
            onClick={toggleTheme}
          >
            <FontIcon icon={isDark ? topNavIcons.sun : topNavIcons.moon} />
          </button>
        </div>

        <div
          className={styles.avatar}
          onClick={() => setIsAvatarOpen(!isAvatarOpen)}
          title="User avatar"
          style={{
            backgroundImage: `url(${userAvatar})`,
          }}
        ></div>

        {isAvatarOpen && (
          <AvatarModal ref={avatarRef} close={setIsAvatarOpen} />
        )}
      </div>
    </header>
  );
}

export { Navbar };
