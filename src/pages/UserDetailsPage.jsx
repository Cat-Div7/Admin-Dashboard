import { useContext, useState } from "react";
import styles from "@styles/UserDetailsPage.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UsersContext } from "@context";
import { FontIcon } from "@components";
import { userDetailsIcons } from "@utils";
import { BackButton } from "@root/components";
import { toast } from "sonner";

const recentActivities = [
  {
    id: 1,
    type: "login",
    title: "Logged in from",
    detail: "192.168.1.1",
    time: "2 days ago",
    date: "2024-07-26T10:30",
    icon: userDetailsIcons.lock,
  },
  {
    id: 2,
    type: "edit",
    title: "Updated their profile information",
    time: "4 days ago",
    date: "2024-07-24T14:05",
    icon: userDetailsIcons.pin,
  },
  {
    id: 3,
    type: "add",
    title: "Created a new report:",
    link: '"Q2 Sales Performance"',
    time: "8 days ago",
    date: "2024-07-20T09:12",
    icon: userDetailsIcons.plus,
  },
];

function UserDetailsPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const { getUserById, deleteUser } = useContext(UsersContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const user = getUserById(Number(id));

  const handleActionClick = (action) => {
    setModalAction(action);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalAction(null);
  };

  if (!user) {
    return (
      <div className={styles.notFoundWrapper}>
        <div className={styles.notFoundCard}>
          <div className={styles.notFoundIconWrapper}>
            <FontIcon icon={userDetailsIcons.warning} />
          </div>
          <h2>User Not Found</h2>
          <p>The user you’re looking for does not exist or has been removed.</p>
        </div>

        <BackButton absoliute={true} />
      </div>
    );
  }

  const formattedDate = new Date(user?.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className={styles.userProfileContainer}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbSection}>
        <div className={styles.breadcrumbNav}>
          <Link to={".."} className={styles.breadcrumbLink}>
            Users
          </Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>{user.fullName}</span>
        </div>
        <span className={styles.backButton} onClick={() => navigate(-1)}>
          <span>←</span> Back to Users
        </span>
      </div>

      {/* Main Content Grid */}
      <div className={styles.mainGrid}>
        {/* Left Column: Profile Card */}
        <div className={styles.profileCard}>
          <div className={styles.profileImageContainer}>
            <div
              className={styles.profileImage}
              style={{
                backgroundImage: `url(${user.avatar})`,
              }}
            />
            <div
              className={styles.statusIndicator}
              title={user.activities[0].status}
            >
              <span className={styles.statusDot}></span>
            </div>
          </div>

          <h1 className={styles.profileName}>{user.fullName}</h1>
          <p className={styles.profileEmail}>{user.email}</p>

          <div className={styles.roleBadges}>
            <div className={styles.roleBadge}>User</div>
            <div className={styles.roleBadge}>{user.activities[0].status}</div>
          </div>

          <div className={styles.actionButtons}>
            <button
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={() => toast.warning("Edit Profile feature coming soon!")}
            >
              Edit Profile
            </button>
            <button
              className={`${styles.btn} ${styles.suspendBtn}`}
              onClick={() => toast.success("Account Suspendded Successfully!")}
            >
              Suspend Account
            </button>
            <button
              className={`${styles.btn} ${styles.btnDanger}`}
              onClick={() => handleActionClick("Delete User")}
            >
              Delete User
            </button>
          </div>
        </div>

        {/* Right Column: Details and Activity */}
        <div className={styles.detailsSection}>
          {/* User Details Card */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>User Details</h2>
            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <p className={styles.detailLabel}>Account Status</p>
                <p className={styles.detailValue}>
                  <span className={styles.statusDotSmall}></span> Active
                </p>
              </div>
              <div className={styles.detailItem}>
                <p className={styles.detailLabel}>Registration Date</p>
                <p className={styles.detailValue}>{formattedDate}</p>
              </div>
              <div className={styles.detailItem}>
                <p className={styles.detailLabel}>Role</p>
                <p className={styles.detailValue}>User</p>
              </div>
              <div className={styles.detailItem}>
                <p className={styles.detailLabel}>Last Login</p>
                <p className={styles.detailValue}>July 26, 2024 at 10:30 AM</p>
              </div>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Recent Activity</h2>
            <ul className={styles.activityList}>
              {recentActivities.map((activity, index) => (
                <li key={activity.id}>
                  {index < recentActivities.length - 1 && (
                    <div className={styles.activityLine}></div>
                  )}
                  <div className={styles.activityItem}>
                    <div className={styles.activityIcon}>
                      <FontIcon icon={activity.icon} />
                    </div>
                    <div className={styles.activityContent}>
                      <p className={styles.activityText}>
                        {activity.title}
                        {activity.detail && (
                          <span className={styles.activityDetail}>
                            {" "}
                            {activity.detail}
                          </span>
                        )}
                        {activity.link && (
                          <a href="#" className={styles.activityLink}>
                            {activity.link}
                          </a>
                        )}
                      </p>
                      <time className={styles.activityTime}>
                        {activity.time}
                      </time>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Confirm Action</h3>
              <button className={styles.modalClose} onClick={closeModal}>
                ✕
              </button>
            </div>
            <div className={styles.modalBody}>
              <p>Are you sure you want to {modalAction?.toLowerCase()}?</p>
              {modalAction === "Delete User" && (
                <p className={styles.modalWarning}>
                  This action cannot be undone.
                </p>
              )}
            </div>
            <div className={styles.modalFooter}>
              <button
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteUser(user.id);
                  toast.success(`${modalAction} action confirmed!`);
                  closeModal();
                  navigate("../");
                }}
                className={`${styles.btn} ${
                  modalAction === "Delete User"
                    ? styles.btnDanger
                    : styles.btnPrimary
                } ${styles.deleteBtn}`}
              >
                {modalAction}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { UserDetailsPage };
