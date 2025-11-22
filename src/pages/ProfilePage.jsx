import styles from "@styles/ProfilePage.module.css";
import { useContext, useEffect, useState } from "react";
import { getUserData } from "@utils";
import { ThemeContext } from "@context";
import { STORAGE_KEY_ACCENT_COLOR } from "@constants";
import Swal from "sweetalert2";

function ProfilePage() {
  const savedAccent =
    localStorage.getItem(STORAGE_KEY_ACCENT_COLOR) || "#6366f1";
  const user = getUserData();
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [accentColor, setAccentColor] = useState(savedAccent);
  const [formData, setFormData] = useState(user);

  const colors = ["#6366f1", "#d946ef", "#f43f5e", "#14b8a6", "#f97316"];

  const hasFormChanges = JSON.stringify(formData) !== JSON.stringify(user);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleDiscard = () => {
    setFormData(user);
  };

  const handleSave = () => {
    // Save logic here
    console.log("Saving:", formData);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--primary", accentColor);
    document.documentElement.style.setProperty(
      "--primary-hover",
      accentColor + "cc"
    );

    localStorage.setItem(STORAGE_KEY_ACCENT_COLOR, accentColor);
  }, [accentColor]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--primary)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      background: "var(--background)",
      didOpen: (modal) => {
        const title = modal.querySelector(".swal2-title");
        const content = modal.querySelector(".swal2-html-container");

        if (title) title.style.color = "var(--text-primary)";
        if (content) content.style.color = "var(--text-secondary)";
      },
    })
      .then((result) => {
        if (result.isConfirmed) {
          return Swal.fire({
            title: "Deleted!",
            text: "Your Account has been deleted.",
            icon: "success",
          });
        }
      })
      .then((result) => {
        if (result && result.isConfirmed) {
          console.log(user.id);
        }
      });
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <p className={styles.title}>
            <span style={{ color: "var(--text-secondary)", fontWeight: "600" }}>
              Home /
              <span style={{ color: "var(--text-primary)" }}> Profile</span>
            </span>
          </p>
          <p className={styles.subtitle}>
            Manage your profile, theme, and account stuff.
          </p>
        </div>
      </header>

      {/* Profile Settings Card */}
      <section className={styles.section}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Profile Settings</h2>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.profileHeader}>
              <div className={styles.profileInfo}>
                <div className={styles.avatar} />
                <div className={styles.profileText}>
                  <p className={styles.userName}>{user.fullName}</p>
                  <p className={styles.userEmail}>{user.email}</p>
                </div>
              </div>
              {hasFormChanges && (
                <div className={styles.buttonGroup}>
                  <button
                    className={styles.buttonSecondary}
                    onClick={handleDiscard}
                  >
                    <span>Discard</span>
                  </button>
                  <button className={styles.buttonPrimary} onClick={handleSave}>
                    <span>Save Changes</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className={styles.cardFields}>
            <div>
              <label className={styles.fieldLabel} htmlFor="fullName">
                Full Name
              </label>
              <input
                className={styles.input}
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className={styles.fieldLabel} htmlFor="email">
                Email Address
              </label>
              <input
                className={styles.input}
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.fullWidth}>
              <label className={styles.fieldLabel} htmlFor="bio">
                Bio
              </label>
              <textarea
                className={styles.textarea}
                id="bio"
                placeholder="Tell us a little about yourself..."
                rows="3"
                value={formData.bio}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Theme & Display Card */}
      <section className={styles.section}>
        <div className={styles.card}>
          <div
            className={`${styles.cardHeader} ${styles.cardHeaderWithButton}`}
          >
            <h2 className={styles.cardTitle}>Theme & Display</h2>
            <button className={styles.buttonPrimary}>
              <span>Save</span>
            </button>
          </div>
          <div className={styles.cardDivide}>
            <div className={styles.settingRow}>
              <div>
                <h3 className={styles.settingTitle}>Appearance</h3>
                <p className={styles.settingDescription}>
                  Customize the look and feel of the dashboard.
                </p>
              </div>
              <div className={styles.themeToggle}>
                <button
                  className={`${styles.themeButton} ${
                    !isDark ? styles.active : ""
                  }`}
                  onClick={() => setIsDark(false)}
                >
                  <span>L</span>
                  Light
                </button>
                <button
                  className={`${styles.themeButton} ${
                    isDark ? styles.active : ""
                  }`}
                  onClick={() => setIsDark(true)}
                >
                  <span>D</span>
                  Dark
                </button>
              </div>
            </div>
            <div className={styles.settingRow}>
              <div>
                <h3 className={styles.settingTitle}>Accent Color</h3>
                <p className={styles.settingDescription}>
                  Choose a color for interactive elements.
                </p>
              </div>
              <div className={styles.colorPicker}>
                {colors.map((color) => (
                  <button
                    key={color}
                    className={`${styles.colorButton} ${
                      accentColor === color ? styles.selectedColor : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setAccentColor(color)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Danger Zone Card */}
      <section className={styles.section}>
        <div className={`${styles.card} ${styles.dangerCard}`}>
          <div className={styles.cardHeaderDanger}>
            <h2 className={styles.cardTitle}>Danger Zone</h2>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.dangerContent}>
              <div>
                <h3 className={styles.settingTitle}>Delete Account</h3>
                <p className={styles.settingDescription}>
                  Permanently delete your account and all associated data. This
                  action cannot be undone.
                </p>
              </div>
              <button className={styles.buttonDanger} onClick={handleDelete}>
                <span>Delete My Account</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { ProfilePage };
