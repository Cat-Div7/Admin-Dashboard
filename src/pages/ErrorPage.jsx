import { useState, useEffect } from "react";
import styles from "@styles/ErrorPage.module.css";

function ErrorPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const radialValue = `circle 150px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0, 0, 0, 0.8) 100%`;

  return (
    <div className={styles.container}>
      {/* Main Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.subtitle}>
          Sorry, we couldn't find the page you're looking for.
        </p>
        <a href="/home" className={styles.button}>
          Go Home
        </a>
      </div>

      {/* Spotlight Overlay */}
      <div
        className={styles.overlay}
        style={{
          background: `radial-gradient(${radialValue})`,
        }}
      />
    </div>
  );
}

export { ErrorPage };
