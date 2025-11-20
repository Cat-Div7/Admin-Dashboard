import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import { STORAGE_KEY_WELCOME, activityData, statsCards } from "@constants";
import { getUserData } from "@utils";
import styles from "@styles/DahsboardPage.module.css";

function DashboardPage() {
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const user = getUserData();

  useEffect(() => {
    const greeting =
      JSON.parse(localStorage.getItem(STORAGE_KEY_WELCOME)) || false;

    if (greeting) return;

    setTimeout(() => {
      toast.info("Welcome to Admin Dashboard");
      localStorage.setItem(STORAGE_KEY_WELCOME, true);
    }, 1000);
  }, []);

  return (
    <>
      {/*  //TODO fix styling colors */}
      <main className={styles.main}>
        {/* Date Range Selector */}
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Welcome back {user.firstName}!</h1>
            <p style={{ color: "var(--text-secondary)" }}>
              Home /
              <span style={{ color: "var(--text-primary)" }}> Dashboard</span>
            </p>
          </div>
          <div className={styles.segmentedButtons}>
            {["Today", "Last 7 Days", "Last 30 Days"].map((range) => (
              <label key={range} className={styles.segmentLabel}>
                <span>{range}</span>
                <input
                  type="radio"
                  name="date-range-selector"
                  value={range}
                  checked={dateRange === range}
                  onChange={(e) => setDateRange(e.target.value)}
                  className={styles.segmentInput}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className={styles.statsGrid}>
          {statsCards.map((card) => (
            <div key={card.id} className={styles.statsCard}>
              <p className={styles.statsTitle}>{card.title}</p>
              <p className={styles.statsValue}>{card.value}</p>
              <div className={styles.statsChange}>
                <p
                  className={`${styles.changePercent} ${
                    card.isPositive ? styles.positive : styles.negative
                  }`}
                >
                  <span className={styles.arrow}>
                    {card.isPositive ? "↑" : "↓"}
                  </span>
                  {card.change}
                </p>
                <p className={styles.changeComparison}>vs {dateRange}</p>
              </div>
              <div
                className={styles.chartContainer}
                dangerouslySetInnerHTML={{ __html: card.svg }}
              />
            </div>
          ))}
        </div>

        {/* Section Header */}
        <h2 className={styles.sectionHeader}>Recent Activity</h2>

        {/* Activity Table */}
        {/* //TODO Move This and create local data and table */}
        <div className={styles.tableContainer}>
          <div className={styles.scrollArea}>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead className={styles.tableHead}>
                  <tr>
                    <th scope="col">User</th>
                    <th scope="col">Activity</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date</th>
                    <th scope="col">Link</th>
                  </tr>
                </thead>
                <tbody className={styles.tableBody}>
                  {activityData.map((activity) => (
                    <tr key={activity.id}>
                      <td className={styles.userCell}>
                        <img
                          src={activity.avatar}
                          alt={activity.name}
                          className={styles.avatar}
                        />
                        <div>
                          <p className={styles.userName}>{activity.name}</p>
                          <p className={styles.userEmail}>{activity.email}</p>
                        </div>
                      </td>
                      <td>{activity.activity}</td>
                      <td>
                        <span
                          className={`${styles.statusBadge} ${
                            styles[`status${activity.statusColor}`]
                          }`}
                        >
                          {activity.status}
                        </span>
                      </td>
                      <td>{activity.date}</td>
                      <td>
                        <a href="#" className={styles.detailsLink}>
                          Details
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Toaster
        position="top-center"
        richColors
        closeButton
        duration={2500}
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "var(--background)",
          },
        }}
      />
    </>
  );
}

export { DashboardPage };
