import styles from "@styles/ProfilePage.module.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useUser } from "@hooks";
import { getUserData } from "@utils";
import { ThemeContext } from "@context";
import {
  STORAGE_KEY_ACCENT_COLOR,
  STORAGE_KEY_ACCOUNTS,
  STORAGE_KEY_USER_ID,
  STORAGE_KEY_TOKEN,
} from "@constants";
import Swal from "sweetalert2";

function ProfilePage() {
  const savedAccent =
    localStorage.getItem(STORAGE_KEY_ACCENT_COLOR) || "#6366f1";
  const { user, refreshUser } = useUser();
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [accentColor, setAccentColor] = useState(savedAccent);
  const [formData, setFormData] = useState(user);
  const navigate = useNavigate();

  // Committed Changes
  const [appearanceData, setAppearanceData] = useState({
    isDark,
    accentColor: savedAccent,
  });

  // Temporary Changes
  const [draftAppearance, setDraftAppearance] = useState({
    isDark,
    accentColor: savedAccent,
  });

  // Synchronize with global ThemeContext changes
  useEffect(() => {
    setDraftAppearance((prev) => ({
      ...prev,
      isDark: isDark,
    }));
  }, [isDark]);

  useEffect(() => {
    setAppearanceData((prev) => ({
      ...prev,
      isDark: isDark,
    }));
  }, [isDark]);

  const colors = ["#6366f1", "#d946ef", "#f43f5e", "#14b8a6", "#f97316"];

  const hasFormChanges = JSON.stringify(formData) !== JSON.stringify(user);
  const hasApperanceChanges =
    JSON.stringify(draftAppearance) !== JSON.stringify(appearanceData);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFormDiscard = () => {
    setFormData(user);
  };

  const handleAppearanceDiscard = () => {
    setDraftAppearance(appearanceData);
  };

  const handleSave = () => {
    // Validations
    const nameParts = formData.fullName.trim().split(/\s+/);
    if (nameParts.length < 2) {
      toast.error("Full name must contain at least two words!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    // Update User Data
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY_ACCOUNTS)) || [];
    const updatedUsers = users.map((u) =>
      u.email === user.email ? { ...u, ...formData } : u
    );

    localStorage.setItem(STORAGE_KEY_ACCOUNTS, JSON.stringify(updatedUsers));

    refreshUser();

    setFormData(getUserData());

    toast.success("Profile updated successfully!");

    setTimeout(() => {
      toast.warning(
        "Data will reflect after refresh in other pages, cuz i'm too lazy to handle it."
      );
    }, 1500);
  };

  const handleAppearanceSave = () => {
    setAppearanceData(draftAppearance);
    setIsDark(draftAppearance.isDark);
    setAccentColor(draftAppearance.accentColor);

    toast.success("Changes saved successfully!");
  };

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
          // Get current user id from localstorage and loop on users array to delete the user
          const users =
            JSON.parse(localStorage.getItem(STORAGE_KEY_ACCOUNTS)) || [];
          const currentUserEmail = user.email;

          const updatedUsers = users.filter(
            (u) => u.email !== currentUserEmail
          );

          localStorage.setItem(
            STORAGE_KEY_ACCOUNTS,
            JSON.stringify(updatedUsers)
          );
          localStorage.removeItem(STORAGE_KEY_USER_ID);
          localStorage.removeItem(STORAGE_KEY_TOKEN);

          navigate("/");
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
                    onClick={handleFormDiscard}
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
            {hasApperanceChanges && (
              <div className={styles.buttonGroup}>
                <button
                  className={styles.buttonSecondary}
                  onClick={handleAppearanceDiscard}
                >
                  <span>Discard</span>
                </button>
                <button
                  className={styles.buttonPrimary}
                  onClick={handleAppearanceSave}
                >
                  <span>Save</span>
                </button>
              </div>
            )}
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
                    !draftAppearance.isDark ? styles.active : ""
                  }`}
                  onClick={() =>
                    setDraftAppearance((prev) => ({
                      ...prev,
                      isDark: false,
                    }))
                  }
                >
                  <span>L</span>
                  Light
                </button>
                <button
                  className={`${styles.themeButton} ${
                    draftAppearance.isDark ? styles.active : ""
                  }`}
                  onClick={() =>
                    setDraftAppearance((prev) => ({
                      ...prev,
                      isDark: true,
                    }))
                  }
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
                      draftAppearance.accentColor === color
                        ? styles.selectedColor
                        : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() =>
                      setDraftAppearance((prev) => ({
                        ...prev,
                        accentColor: color,
                      }))
                    }
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
