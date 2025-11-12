import styles from "@styles/LandingPage.module.css";
import responsive from "@styles/Global.module.css";
import { Button } from "@components";

function LandingHero() {
  return (
    <section className={styles.landing}>
      <div className={responsive.container}></div>
      <section className={styles.heroSection}>
        <div className={styles.backgroundSvg}>
          <svg
            className={styles.svg}
            preserveAspectRatio="none"
            viewBox="0 0 1440 500"
          >
            <path
              d="M0,128 C240,192 480,128 720,192 C960,256 1200,192 1440,256 L1440,500 L0,500 Z"
              fill="var(--primary)"
            ></path>
          </svg>
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.textBox}>
            <h1 className={styles.heroTitle}>
              Empower Your Workflow with Insightful Data
            </h1>
            <p className={styles.subtitle}>
              The ultimate platform that combines a powerful admin dashboard for
              your data with a beautifully simple blog to share your story. Take
              control, get insights, and grow your audience.
            </p>

            <div className={styles.btnContainer}>
              <Button variant="primary">
                <a href="#features">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export { LandingHero };
