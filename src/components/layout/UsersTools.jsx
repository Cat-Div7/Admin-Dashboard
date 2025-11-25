import { toolsIcons } from "@utils";
import styles from "@styles/UsersTools.module.css";
import { FontIcon } from "@components";
import { useState } from "react";

function UsersTools({
  searchTerm,
  setSearchTerm,
  onDateFilter,
  onStatusFilter,
  resetPagination,
}) {
  const [isDateModalOpen, setDateModalOpen] = useState(false);
  const [isStatusModalOpen, setStatusModalOpen] = useState(false);

  const toggleDateModal = () => setDateModalOpen(!isDateModalOpen);
  const toggleStatusModal = () => setStatusModalOpen(!isStatusModalOpen);

  const handleDateSelect = (option) => {
    onDateFilter(option);
    setDateModalOpen(false);
  };

  const handleStatusSelect = (status) => {
    onStatusFilter(status);
    setStatusModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchWrapper}>
        <label className={styles.label}>
          <div className={styles.inputContainer}>
            <div className={styles.iconLeft}>
              <FontIcon icon={toolsIcons.search} />
            </div>
            <input
              type="text"
              className={styles.input}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or email..."
            />
          </div>
        </label>
      </div>

      <div className={styles.buttonsWrapper}>
        <button
          className={
            styles.button + " " + (isDateModalOpen ? styles.active : "")
          }
          onClick={() => {
            toggleDateModal();
            setStatusModalOpen(false);
          }}
        >
          <span className={styles.buttonIcon}>
            <FontIcon icon={toolsIcons.filter} />
          </span>
          <span className={styles.buttonText}>Filter by Date</span>
          <span className={styles.buttonArrow}>
            <FontIcon
              icon={toolsIcons.arrowDown}
              style={{
                transform: isDateModalOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </span>

          {isDateModalOpen && (
            <div className={styles.modal}>
              <ul>
                <li onClick={() => handleDateSelect("newest")}>Newest</li>
                <li onClick={() => handleDateSelect("oldest")}>Oldest</li>
              </ul>
            </div>
          )}
        </button>

        <button
          className={
            styles.button + " " + (isStatusModalOpen ? styles.active : "")
          }
          onClick={() => {
            toggleStatusModal();
            setDateModalOpen(false);
          }}
        >
          <span className={styles.buttonIcon}>⇅</span>
          <span className={styles.buttonText}>Filter by Status</span>
          <span className={styles.buttonArrow}>
            <FontIcon
              icon={toolsIcons.arrowDown}
              style={{
                transform: isStatusModalOpen
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            />
          </span>

          {isStatusModalOpen && (
            <div className={styles.modal}>
              <ul>
                <li
                  onClick={() => {
                    handleStatusSelect("All");
                    resetPagination();
                  }}
                >
                  All
                </li>
                <li
                  onClick={() => {
                    handleStatusSelect("Successful");
                    resetPagination();
                  }}
                >
                  Successful
                </li>
                <li
                  onClick={() => {
                    handleStatusSelect("Completed");
                    resetPagination();
                  }}
                >
                  Completed
                </li>
                <li
                  onClick={() => {
                    handleStatusSelect("Pending");
                    resetPagination();
                  }}
                >
                  Pending
                </li>
                <li
                  onClick={() => {
                    handleStatusSelect("In Progress");
                    resetPagination();
                  }}
                >
                  In Progress
                </li>
                <li
                  onClick={() => {
                    handleStatusSelect("Failed");
                    resetPagination();
                  }}
                >
                  Failed
                </li>
              </ul>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export { UsersTools };
