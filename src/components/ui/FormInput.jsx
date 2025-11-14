import styles from "@styles/FormInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FormInput({
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  icon,
  toggleIcon,
  onToggle,
  error,
  touched,
  disabled,
  label,
  autoComplete,
}) {
  return (
    <div className={styles.formGroup}>
      {label && <label htmlFor={id}>{label}</label>}
      {/* Wrapper */}
      <div className={styles.inputWrapper}>
        {icon && <FontAwesomeIcon icon={icon} className={styles.inputIcon} />}
        {/* Input */}
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`${styles.input} ${touched && error ? styles.error : ""}`}
          disabled={disabled}
          autoComplete={autoComplete}
        />
        {/* Toggle Button if needed */}
        {toggleIcon && (
          <button
            type="button"
            className={styles.togglePasswordBtn}
            onClick={onToggle}
            disabled={disabled}
            title={toggleIcon.title}
          >
            <FontAwesomeIcon icon={toggleIcon.icon} />
          </button>
        )}
      </div>
      {/* Error Message */}
      {touched && error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
}

export { FormInput };
