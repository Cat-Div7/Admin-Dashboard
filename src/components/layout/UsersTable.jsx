import styles from "@styles/UsersTable.module.css";
import { Pagination } from "@components";
import { activityData } from "@constants";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function UsersTable({ showPagination = false, actionsColumn = false }) {
  const navigate = useNavigate();
  const handleNavigate = (id) => () => navigate(`users/${id}`);

  // Table Panigation State
  const [pagination, setPagination] = useState({
    rowsPerPage: 3,
    currentPage: 1,
  });

  const handlePageChange = (newPage) => {
    setPagination((prev) => ({ ...prev, currentPage: newPage }));
  };

  const handleRowsPerPageChange = (newRows) => {
    setPagination((prev) => ({
      ...prev,
      rowsPerPage: newRows,
      currentPage: 1,
    }));
  };

  const startIndex = (pagination.currentPage - 1) * pagination.rowsPerPage;
  const endIndex = startIndex + pagination.rowsPerPage;
  const displayedUsers = activityData.slice(startIndex, endIndex);

  return (
    <div className={styles.tableContainer}>
      <div className={styles.scrollArea}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th>User</th>
                <th>Activity</th>
                <th>Status</th>
                <th>Date</th>
                <th>Link</th>
                {actionsColumn && <th></th>}
              </tr>
            </thead>

            <tbody className={styles.tableBody}>
              {displayedUsers.map((activity) => (
                <tr key={activity.id} onClick={handleNavigate(activity.id)}>
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
                    <Link
                      to={`users/${activity.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className={styles.detailsLink}
                    >
                      Details
                    </Link>
                  </td>

                  {actionsColumn && <td>...</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showPagination && (
        <Pagination
          currentPage={pagination.currentPage}
          rowsPerPage={pagination.rowsPerPage}
          totalItems={activityData.length}
          onPageChange={handlePageChange}
          onRowsChange={handleRowsPerPageChange}
        />
      )}
    </div>
  );
}

export { UsersTable };
