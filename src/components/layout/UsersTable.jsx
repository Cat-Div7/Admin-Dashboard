import styles from "@styles/UsersTable.module.css";
import { Pagination, UsersTools, Loader, ActionsModal } from "@components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UsersContext } from "@context";
import { toast } from "sonner";

function UsersTable({
  showPagination = false,
  actionsColumn = false,
  toolsRow = false,
  path = "",
}) {
  const { users, isLoading, deleteUser } = useContext(UsersContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState(null);
  const [statusFilter, setStatusFilter] = useState(null);

  const [modalState, setModalState] = useState({
    isOpen: false,
    userId: null,
    position: { top: "50%", left: "50%" },
  });

  const navigate = useNavigate();
  const handleNavigate = (id) => () => navigate(`${path}${id}`);

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

  const filteredUsers = users
    .filter(
      (user) =>
        user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((user) => {
      if (!statusFilter) return true;
      const latestStatus = user.activities[0].status;
      return latestStatus === statusFilter || statusFilter === "All";
    })
    .sort((a, b) => {
      if (!dateFilter) return 0;
      const dateA = new Date(a.activities[0].date);
      const dateB = new Date(b.activities[0].date);
      return dateFilter === "newest" ? dateB - dateA : dateA - dateB;
    });

  const startIndex = (pagination.currentPage - 1) * pagination.rowsPerPage;
  const endIndex = startIndex + pagination.rowsPerPage;
  const displayedUsers = filteredUsers.slice(startIndex, endIndex);

  const handleOpenModal = (userId, event) => {
    event.stopPropagation();

    const rect = event.currentTarget.getBoundingClientRect();
    const mouseY = event.clientY;
    const elementMidY = rect.top + rect.height / 2;

    let top, left;

    if (mouseY > elementMidY) {
      top = rect.top + window.scrollY - 40;
      left = rect.left + window.scrollX - 40;
    } else {
      top = rect.bottom + window.scrollY + 40;
      left = rect.right + window.scrollX - 70;
    }

    setModalState({
      isOpen: true,
      userId,
      position: {
        top: `${top}px`,
        left: `${left}px`,
      },
    });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, userId: null, position: {} });
  };

  const handleEdit = () => toast.warning("Edit Option is Just for show");

  const handleDelete = () => {
    deleteUser(modalState.userId);
    toast.success("User deleted successfully");
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {toolsRow && (
        <UsersTools
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onDateFilter={setDateFilter}
          onStatusFilter={setStatusFilter}
          resetPagination={() =>
            setPagination((prev) => ({ ...prev, currentPage: 1 }))
          }
        />
      )}

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
                  {actionsColumn && <th>Actions</th>}
                </tr>
              </thead>

              <tbody className={styles.tableBody}>
                {displayedUsers.length === 0 && (
                  <tr>
                    <td
                      colSpan={actionsColumn ? 6 : 5}
                      className={styles.noData}
                    >
                      No users found.
                    </td>
                  </tr>
                )}
                {displayedUsers.map((user) => {
                  const latestActivity = user.activities[0];

                  return (
                    <tr key={user.id} onClick={handleNavigate(user.id)}>
                      <td className={styles.userCell}>
                        <img
                          src={user.avatar}
                          alt={user.fullName}
                          className={styles.avatar}
                        />
                        <div>
                          <p className={styles.userName}>{user.fullName}</p>
                          <p className={styles.userEmail}>{user.email}</p>
                        </div>
                      </td>

                      <td>{latestActivity.activity}</td>

                      <td>
                        <span
                          className={`${styles.statusBadge} ${
                            styles[`status${latestActivity.statusColor}`]
                          }`}
                        >
                          {latestActivity.status}
                        </span>
                      </td>

                      <td>{latestActivity.date}</td>

                      <td>
                        <Link
                          to={`${path}${user.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className={styles.detailsLink}
                        >
                          Details
                        </Link>
                      </td>

                      {actionsColumn && (
                        <td onClick={(e) => e.stopPropagation()}>
                          <span
                            className={styles.actionDots}
                            onClick={(e) => handleOpenModal(user.id, e)}
                          >
                            ...
                          </span>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {showPagination && (
          <Pagination
            currentPage={pagination.currentPage}
            rowsPerPage={pagination.rowsPerPage}
            totalItems={filteredUsers.length}
            onPageChange={handlePageChange}
            onRowsChange={handleRowsPerPageChange}
          />
        )}

        <ActionsModal
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          onEdit={handleEdit}
          onDelete={handleDelete}
          position={modalState.position}
        />
      </div>
    </>
  );
}

export { UsersTable };
