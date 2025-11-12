import styles from "@styles/LandingPage.module.css";
import responsive from "@styles/Global.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import { Button } from "@components";

const LOGIN_PATH = "login";
const REGISTER_PATH = "register";

function LandingTopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);

  // Resize Function
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      if (newWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  // Scroll Function
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      if (scrollTop > 0 && !showProgressBar) {
        setShowProgressBar(true);
      } else {
        setShowProgressBar(false);
      }

      const totalScrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / totalScrollableHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      {/* Progress Bar */}
      {showProgressBar && (
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      )}

      <div className={responsive.container}>
        <div className={styles.navContainer}>
          {/* Logo Section */}
          <div className={styles.leftSection}>
            <span className={`${styles.materialSymbols} ${styles.logoIcon}`}>
              <img src={logoImage} alt="logo" />
            </span>
            <h2 className={styles.navTitle}>Admin Dashboard</h2>
          </div>

          {/* Links Section */}
          <nav className={styles.navLinks}>
            <a href="#features" className={styles.link}>
              Features
            </a>
            <a href="#blog" className={styles.link}>
              Blog
            </a>
            <a href="#about" className={styles.link}>
              About
            </a>
          </nav>

          {/* Buttons Section */}
          <div className={styles.buttons}>
            <Button variant="secondary">
              <Link to={LOGIN_PATH}>Login</Link>
            </Button>
            <Button variant="primary">
              <Link to={REGISTER_PATH}>Get Started</Link>
            </Button>

            <div
              className={`${styles.toggleBtn} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Mobile Links */}
          <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
            <a
              href="#features"
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#blog"
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#about"
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { LandingTopNav };
