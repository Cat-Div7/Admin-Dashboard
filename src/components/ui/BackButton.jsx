import { useNavigate } from "react-router-dom";
import { navigationIcons } from "@utils";
import { FontIcon } from "@components";
import styles from "@styles/BackButton.module.css";

/**
 * BackButton Component - Navigate back to previous page
 * @param {string} auxClass - Additional CSS classes
 * @param {object} icon - Icon object from fontawesome (default: navigationIcons.arrowLeft)
 */
function BackButton({ auxClass = "", icon = navigationIcons.arrowLeft }) {
  const navigate = useNavigate();

  return (
    <button
      className={`${styles.backBtn} ${auxClass}`}
      onClick={() =>
        window.history.length > 2 ? navigate(-1) : navigate("..")
      }
      title="Go back"
    >
      <FontIcon icon={icon} />
      {/* <span>Back</span> */}
    </button>
  );
}

export { BackButton };
