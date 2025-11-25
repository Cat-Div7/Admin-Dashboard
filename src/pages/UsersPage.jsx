import { UsersTable } from "@components";
import styles from "@styles/UsersPage.module.css";

function UsersPage() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Users Management</h1>
        <p style={{ color: "var(--text-secondary)" }}>
          Home /<span style={{ color: "var(--text-primary)" }}> Users</span>
        </p>
      </div>
      <UsersTable showPagination={true} actionsColumn={true} toolsRow={true} />
    </div>
  );
}

export { UsersPage };
