import styles from "@styles/LandingPage.module.css";
import responsive from "@styles/Global.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@utils";

// constants/socialLinks.js
const socialLinksData = [
  {
    name: "Facebook",
    icon: faFacebookF,
    url: "https://facebook.com/profile.php?id=100046021669278",
  },
  {
    name: "Twitter",
    icon: faTwitter,
    url: "https://twitter.com",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    url: "https://instagram.com/o.mar.dev/",
  },
  {
    name: "LinkedIn",
    icon: faLinkedinIn,
    url: "https://linkedin.com/in/omar-ashraf-132193356/",
  },
  {
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com/Cat-Div7",
  },
];

function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${responsive.container} ${responsive.footContainer}`}>
        <div className={styles.footerContent}>
          <div className={styles.socialLinks}>
            {socialLinksData.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={social.name}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>

          <div className={styles.copyright}>
            <p>
              Created by <span className={styles.footerName}>Omar</span>,
              {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { LandingFooter };
