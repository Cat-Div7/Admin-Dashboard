import { useEffect, useRef } from "react";
import styles from "@styles/ActionsModal.module.css";

function ActionsModal({ isOpen, onClose, onEdit, onDelete, position }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop}>
      <div
        ref={modalRef}
        className={styles.modal}
        style={{
          top: position?.top || "50%",
          left: position?.left || "50%",
        }}
      >
        <ul className={styles.menuList}>
          <li>
            <button
              className={`${styles.menuItem} ${styles.menuItemTop}`}
              onClick={() => {
                onEdit?.();
                onClose();
              }}
            >
              Edit
            </button>
          </li>
          <li className={styles.divider}>
            <button
              className={`${styles.menuItem} ${styles.menuItemDanger}`}
              onClick={() => {
                onDelete?.();
                onClose();
              }}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { ActionsModal };
