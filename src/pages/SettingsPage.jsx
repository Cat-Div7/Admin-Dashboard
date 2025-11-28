import { useEffect, useState } from "react";
import { toast } from "sonner";
import styles from "@styles/Settings.module.css";
import { useUser } from "@hooks";
import { STORAGE_KEY_ACCOUNTS } from "@constants";
import { hashPassword, settingIcons } from "@utils";
import { FontIcon } from "@components";

function SettingsPage() {
  const { user, refreshUser } = useUser();

  const [profileCommitted, setProfileCommitted] = useState(user || {});
  const [profileDraft, setProfileDraft] = useState({
    ...(user || {}),
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const hasProfileChanges =
    JSON.stringify(profileDraft) !== JSON.stringify(profileCommitted);

  const handleProfileChange = (e) => {
    const { id, value } = e.target;

    setProfileDraft((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleProfileDiscard = () => {
    setProfileDraft({
      ...profileCommitted,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleProfileSave = () => {
    // ===== VALIDATION =====

    // Full name must include 2+ words
    const nameParts = (profileDraft.fullName || "").trim().split(/\s+/);
    if (nameParts.length < 2 || !profileDraft.fullName.trim()) {
      toast.error("Full name must contain at least two words!");
      return;
    }

    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(profileDraft.email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    // Password fields must not be empty
    if (!profileDraft.currentPassword) {
      toast.error("Please enter your current password!");
      return;
    }

    if (!profileDraft.newPassword) {
      toast.error("Please enter a new password!");
      return;
    }

    if (!profileDraft.confirmPassword) {
      toast.error("Please confirm your new password!");
      return;
    }

    // Hash current password the user typed
    const hashedCurrent = hashPassword(profileDraft.currentPassword);

    // Compare with hashed password stored in user object
    if (hashedCurrent !== (user?.password || "")) {
      toast.error("Current password is incorrect!");
      return;
    }

    // New password length
    if (profileDraft.newPassword.length < 6) {
      toast.error("New password must be at least 6 characters!");
      return;
    }

    // New password must match confirm password
    if (profileDraft.newPassword !== profileDraft.confirmPassword) {
      toast.error("Password and Confirm Password do not match!");
      return;
    }

    // Hash new password before saving
    const hashedNewPassword = hashPassword(profileDraft.newPassword);

    // ===== UPDATE STORAGE =====
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY_ACCOUNTS)) || [];

    const updatedUsers = users.map((u) =>
      u.email === user?.email
        ? {
            ...u,
            fullName: profileDraft.fullName,
            email: profileDraft.email,
            password: hashedNewPassword, // <-- SAVED HASHED
          }
        : u
    );

    localStorage.setItem(STORAGE_KEY_ACCOUNTS, JSON.stringify(updatedUsers));

    refreshUser();

    // Sync committed profile and clear password fields
    setProfileCommitted({
      ...profileDraft,
      password: hashedNewPassword,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    setProfileDraft((prev) => ({
      ...prev,
      password: hashedNewPassword,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));

    toast.success("Profile updated successfully!");
  };

  useEffect(() => {
    if (user) {
      setProfileCommitted(user);
      setProfileDraft({
        ...user,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  }, [user]);

  /* ======== TOGGLES ======== */

  const [toggles, setToggles] = useState({
    twoFactor: false,
    emailNotifications: true,
    pushNotifications: false,
    analyticsSync: true,
    customerSupport: false,
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  /* ------------------------------------------------------ */

  if (!user) {
    return (
      <main>
        <div className={styles.container}>
          <p className={styles.loadingText}>Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Account Settings</h2>
              <p className={styles.cardDescription}>
                Update your profile and security settings.
              </p>
            </div>

            <div className={styles.space}>
              {/* Name + Email */}
              <div className={styles.profileSection}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className={styles.input}
                      value={profileDraft.fullName || ""}
                      onChange={handleProfileChange}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={styles.input}
                      value={profileDraft.email || ""}
                      onChange={handleProfileChange}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className={styles.passwordGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="currentPassword">
                    Current Password
                  </label>
                  <input
                    id="currentPassword"
                    type="password"
                    placeholder="••••••••"
                    className={styles.input}
                    value={profileDraft.currentPassword}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="newPassword">
                    New Password
                  </label>
                  <input
                    id="newPassword"
                    type="password"
                    placeholder="••••••••"
                    className={styles.input}
                    value={profileDraft.newPassword}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="confirmPassword">
                    Confirm New Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className={styles.input}
                    value={profileDraft.confirmPassword}
                    onChange={handleProfileChange}
                  />
                </div>
              </div>

              {/* 2FA Toggle */}
              <div className={styles.toggleSection}>
                <div>
                  <p className={styles.toggleTitle}>
                    Two-Factor Authentication
                  </p>
                  <p className={styles.toggleDescription}>
                    Protect your account with an extra layer of security.
                  </p>
                </div>
                <label className={styles.toggleSwitch}>
                  <input
                    type="checkbox"
                    checked={toggles.twoFactor}
                    onChange={() => handleToggle("twoFactor")}
                  />
                  <span className={styles.toggleSlider}></span>
                </label>
              </div>
            </div>
          </section>

          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Notification Preferences</h2>
              <p className={styles.cardDescription}>
                Choose how you want to be notified.
              </p>
            </div>

            <div className={styles.notificationsList}>
              <div className={styles.notificationItem}>
                <div>
                  <p className={styles.notificationTitle}>
                    Email Notifications
                  </p>
                  <p className={styles.notificationDesc}>
                    New User Signups, Weekly Reports
                  </p>
                </div>
                <label className={styles.toggleSwitch}>
                  <input
                    type="checkbox"
                    checked={toggles.emailNotifications}
                    onChange={() => handleToggle("emailNotifications")}
                  />
                  <span className={styles.toggleSlider}></span>
                </label>
              </div>

              <div className={styles.notificationItem}>
                <div>
                  <p className={styles.notificationTitle}>Push Notifications</p>
                </div>
                <label className={styles.toggleSwitch}>
                  <input
                    type="checkbox"
                    checked={toggles.pushNotifications}
                    onChange={() => handleToggle("pushNotifications")}
                  />
                  <span className={styles.toggleSlider}></span>
                </label>
              </div>
            </div>
          </section>

          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Integrations</h2>
              <p className={styles.cardDescription}>
                Connect your favorite third-party services.
              </p>
            </div>

            <div className={styles.integrationsList}>
              <div className={styles.integrationItem}>
                <div className={styles.integrationLeft}>
                  <div className={styles.integrationIcon}>
                    <FontIcon icon={settingIcons.analytics} />
                  </div>
                  <div>
                    <p className={styles.integrationTitle}>Product Analytics</p>
                    <p className={styles.integrationDesc}>
                      Sync user data for analysis.
                    </p>
                  </div>
                </div>

                <div className={styles.integrationRight}>
                  <button className={styles.settingsLink}>Settings</button>

                  <label className={styles.toggleSwitch}>
                    <input
                      type="checkbox"
                      checked={toggles.analyticsSync}
                      onChange={() => handleToggle("analyticsSync")}
                    />
                    <span className={styles.toggleSlider}></span>
                  </label>
                </div>
              </div>

              <div className={styles.integrationItem}>
                <div className={styles.integrationLeft}>
                  <div className={styles.integrationIcon}>
                    <FontIcon icon={settingIcons.headphone} />
                  </div>
                  <div>
                    <p className={styles.integrationTitle}>Customer Support</p>
                    <p className={styles.integrationDesc}>
                      Manage support tickets.
                    </p>
                  </div>
                </div>

                <label className={styles.toggleSwitch}>
                  <input
                    type="checkbox"
                    checked={toggles.customerSupport}
                    onChange={() => handleToggle("customerSupport")}
                  />
                  <span className={styles.toggleSlider}></span>
                </label>
              </div>
            </div>
          </section>
        </div>

        {hasProfileChanges && (
          <footer className={styles.footer}>
            <button
              className={styles.cancelButton}
              onClick={handleProfileDiscard}
            >
              Discard
            </button>

            <button className={styles.saveButton} onClick={handleProfileSave}>
              Save Profile
            </button>
          </footer>
        )}
      </div>
    </main>
  );
}

export { SettingsPage };
