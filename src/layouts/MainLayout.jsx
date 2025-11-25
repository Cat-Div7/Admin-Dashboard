import { useEffect, useState } from "react";
import { Sidebar, Button, Navbar } from "@components";
import { Outlet } from "react-router-dom";
import {
  CollapseContextProvider,
  ThemeContextProvider,
  UsersContextProvider,
} from "@context";
import styles from "@styles/MainLayout.module.css";
import { sidebarIcons } from "@utils";
import { FontIcon } from "@components";
import { useAccentColor } from "@hooks";

function MainLayout() {
  const [smallScreen, setSmallScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { accentColor, shouldInitializeAccent, saveAccent } = useAccentColor();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 786) {
        setSmallScreen(true);
        setIsOpen(false);
      } else {
        setSmallScreen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setSmallScreen]);

  const toggleNav = () => setIsOpen(!isOpen);

  useEffect(() => {
    shouldInitializeAccent && saveAccent(accentColor);
  }, [shouldInitializeAccent, accentColor, saveAccent]);

  return (
    <ThemeContextProvider>
      <div className={styles.app}>
        {smallScreen && (
          <Button onClick={toggleNav} auxClass={styles.collapseBtn}>
            <FontIcon
              icon={sidebarIcons.dobuleAngle}
              style={isOpen ? {} : { transform: "rotate(180deg)" }}
            />
          </Button>
        )}
        {/* Sidebar Nav */}
        <CollapseContextProvider>
          <aside className={`${styles.sidebar} ${isOpen && styles.dBlock}`}>
            <Sidebar />
          </aside>
        </CollapseContextProvider>
        {/* Main COntent */}
        <div className={styles.contentContainer}>
          <Navbar />
          <UsersContextProvider>
            <main className={styles.mainContent}>
              <Outlet />
            </main>
          </UsersContextProvider>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export { MainLayout };
