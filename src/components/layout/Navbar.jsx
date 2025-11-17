import { useContext, useEffect, useState } from "react";
import { topNavIcons } from "@utils";
import styles from "@styles/Navbar.module.css";
import { FontIcon } from "@components";
import { ThemeContext } from "@root/context";
import { useMatches } from "react-router-dom";
import userAvatar from "../../assets/userAvatar.png";

function Navbar() {
  const matches = useMatches();
  const [smallScreen, setSmallScreen] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);

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

  console.log(breadcrumbs);

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
          <button className={styles.iconButton} title="Notifications">
            <FontIcon icon={topNavIcons.bell} />
          </button>
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
          title="User avatar"
          style={{
            backgroundImage: `url(${userAvatar})`,
          }}
        ></div>
      </div>
    </header>
  );
}

export { Navbar };
