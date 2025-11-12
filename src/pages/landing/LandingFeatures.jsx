// LandingFeatures.jsx
import styles from "@styles/LandingPage.module.css";
import responsive from "@styles/Global.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { featureIcons } from "@utils";

export const featuresData = [
  {
    icon: featureIcons.analytics,
    title: "Insightful Analytics",
    description:
      "Visualize your data with our easy-to-understand charts and dashboards to make smarter decisions.",
  },
  {
    icon: featureIcons.group,
    title: "Effortless User Management",
    description:
      "Onboard, manage, and assign roles to your users with a simple and intuitive interface.",
  },
  {
    icon: featureIcons.tune,
    title: "Customizable Settings",
    description:
      "Tailor the platform to your needs with extensive settings and configuration options.",
  },
];

function LandingFeatures() {
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
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <span className="material-symbols-outlined">
                  <FontAwesomeIcon icon={feature.icon} />
                </span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { LandingFeatures };
