import styles from "@styles/LandingPage.module.css";
import responsive from "@styles/Global.module.css";
import { testimonialsData } from "@constants";
import { CardSkeleton } from "@components";
import { useFetchWithDelay } from "@hooks";
import { useCallback } from "react";

function LandingAbout() {
  const fetchAbout = useCallback(
    () => Promise.resolve(testimonialsData.slice(0, 2)),
    []
  );

  const { data: aboutData, isLoading: isAboutLoading } =
    useFetchWithDelay(fetchAbout);

  return (
    <section className={styles.aboutSection} id="about">
      <div className={responsive.container}>
        <div className={styles.aboutHeader}>
          <h2 className={styles.aboutTitle}>What Our Users Say</h2>
          <p className={styles.aboutSubtitle}>
            Trusted by professionals across various industries.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {isAboutLoading ? (
            <>
              <CardSkeleton lines={5} showAvatarImg={true} />
              <CardSkeleton lines={5} showAvatarImg={true} />
            </>
          ) : (
            aboutData?.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <blockquote className={styles.quote}>
                  <p>"{testimonial.quote}"</p>
                </blockquote>
                <figcaption className={styles.author}>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.avatarAlt}
                    className={styles.avatar}
                  />
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{testimonial.name}</div>
                    <div className={styles.authorPosition}>
                      {testimonial.position}
                    </div>
                  </div>
                </figcaption>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export { LandingAbout };
