import styles from "@styles/LandingPage.module.css";
import responsive from "@styles/Global.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFeatureData } from "@constants";
import { CardSkeleton } from "@root/components";
import { useFetchWithDelay } from "@hooks";

function LandingFeatures() {
  const { data: featuresData, isLoading: isFeaturesLoading } =
    useFetchWithDelay(getFeatureData);

  return (
    <section className={styles.featuresSection} id="features">
      <div className={responsive.container}>
        <div className={styles.featuresHeader}>
          <h2 className={styles.featuresTitle}>
            Powerful Admin Tools at Your Fingertips
          </h2>
          <p className={styles.featuresSubtitle}>
            Manage your application with a suite of professional tools designed
            for efficiency and clarity.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {isFeaturesLoading ? (
            <>
              <CardSkeleton showIcon={true} lines={4} />
              <CardSkeleton showIcon={true} lines={4} />
              <CardSkeleton showIcon={true} lines={4} />
            </>
          ) : (
            featuresData.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <span className="material-symbols-outlined">
                    <FontAwesomeIcon icon={feature.icon} />
                  </span>
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export { LandingFeatures };
