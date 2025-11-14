import styles from "@styles/Button.module.css";
import { memo } from "react";

function Button({ auxClass, variant = "primary", children, ...rest }) {
  const concatedClass = `${
    variant === "secondary" ? styles.secondaryBtn : styles.primaryBtn
  } ${auxClass || ""}`.trim();

  return (
    <button className={concatedClass} {...rest}>
      {children}
    </button>
  );
}

// Custom comparison for memo to prevent unnecessary re-renders
const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.auxClass === nextProps.auxClass &&
    prevProps.variant === nextProps.variant &&
    prevProps.children === nextProps.children &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.type === nextProps.type &&
    prevProps.onClick === nextProps.onClick
  );
};

const MemoButton = memo(Button, areEqual);

export { MemoButton as Button };
