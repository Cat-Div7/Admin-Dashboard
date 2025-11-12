import styles from "@styles/Button.module.css";

function Button({ variant, children, ...rest }) {
  return (
    <button
      className={
        variant === "primary" ? styles.primaryBtn : styles.secondaryBtn
      }
      {...rest}
    >
      {children}
    </button>
  );
}

export { Button };
