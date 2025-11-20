import { forwardRef } from "react";
import styles from "@styles/NotificationModal.module.css";

const NotificationModal = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.modal}>
      <div className={styles.content}>No Notifications</div>
    </div>
  );
});

export { NotificationModal };
