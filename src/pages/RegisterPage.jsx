import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { formIcons, generateFakeToken, hashPassword } from "@utils";
import { FormInput, Button, BackButton, Loader } from "@components";
import {
  STORAGE_KEY_ACCOUNTS,
  STORAGE_KEY_USER_ID,
  STORAGE_KEY_TOKEN,
  LOGIN_PATH,
  HOME_PATH,
} from "@constants";
import styles from "@styles/RegisterPage.module.css";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: {
    username: "Username is required",
    email: "Email is required",
    password: "Password is required",
    confirmPassword: "Please confirm your password",
  },
  loading: false,
  touched: {
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  },
};

// Reducer Function
const formReducer = (state, action) => {
  const { type, field, value, errors, loading } = action;

  switch (type) {
    case "SET_FIELD":
      return {
        ...state,
        [field]: value,
        errors: {
          ...state.errors,
          [field]: "",
        },
      };

    case "SET_TOUCHED":
      return {
        ...state,
        touched: {
          ...state.touched,
          [field]: true,
        },
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: errors,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: loading,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

// validateForm
const validateForm = (username, email, password, confirmPassword) => {
  const errors = {};

  // Username Validation check for name if its more than 2 words by split and if its more than 4 just slice(0,4)
  if (!username.trim()) {
    errors.username = "Username is required";
  } else {
    const nameParts = username.trim().split(/\s+/);
    if (nameParts.length < 2) {
      errors.username = "Username must be at least 2 words";
    } else if (nameParts.length > 4) {
      errors.username = "Username must be 4 word or less";
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address";
  }

  // Password validation
  if (!password.trim()) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  // Confirm Password validation
  if (!confirmPassword.trim()) {
    errors.confirmPassword = "Please confirm your password";
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

function RegisterPage() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_FIELD",
      field: name,
      value,
    });
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;
    dispatch({
      type: "SET_TOUCHED",
      field: name,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const errors = validateForm(
      state.username,
      state.email,
      state.password,
      state.confirmPassword
    );

    if (Object.keys(errors).length > 0) {
      dispatch({
        type: "SET_ERRORS",
        errors,
      });
      return;
    }

    // Set loading state
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Check if accounts exist
      const accountsData = localStorage.getItem(STORAGE_KEY_ACCOUNTS) || "[]";

      const accounts = JSON.parse(accountsData);

      // Find user
      const user = accounts.find((acc) => acc.email === state.email);
      if (user) {
        dispatch({
          type: "SET_ERRORS",
          errors: {
            username: "",
            email: "Account already exist",
            password: "",
            confirmPassword: "",
          },
        });
        console.log("Email found");
        return;
      }

      // Create User
      const newAccount = {
        id: crypto.randomUUID(),
        email: state.email.trim(),
        password: await hashPassword(state.password),
        fullName: state.username.trim(),
        firstName: state.username.split(" ")[0],
        lastName: state.username.split(" ")[1],
        createdAt: new Date().toISOString(),
      };

      toast.success("Congrats, User Created Succesfully");

      localStorage.setItem(
        STORAGE_KEY_ACCOUNTS,
        JSON.stringify([newAccount, ...accounts])
      );
      // Save userId
      localStorage.setItem(STORAGE_KEY_USER_ID, JSON.stringify(newAccount.id));

      // Save token
      const fakeToken = generateFakeToken();
      localStorage.setItem(STORAGE_KEY_TOKEN, fakeToken);

      // Reset form
      dispatch({
        type: "RESET",
      });

      // Navigate to admin dashboard
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate(HOME_PATH);
    } catch (error) {
      console.error("Registration error:", error);
      dispatch({
        type: "SET_ERRORS",
        errors: {
          email: "Registration failed. Please try again.",
          password: "",
        },
      });
    } finally {
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
    }
  };

  // Handle Alerts
  const handleFirstAlerts = () => {
    if (!state.touched.username && state.errors.username) {
      toast.warning("Enter your username!");
    } else if (!state.touched.email && state.errors.email) {
      toast.warning("Don't forget your email!");
    } else if (!state.touched.password && state.errors.password) {
      toast.warning("Password can't be empty!");
    } else if (!state.touched.confirmPassword && state.errors.confirmPassword) {
      toast.warning("Confirm your password!");
    }
  };

  // Check for errors
  const hasUsernameError =
    state.touched.username && (state.errors.username || !state.username.trim());
  const hasEmailError =
    state.touched.email && (state.errors.email || !state.email.trim());
  const hasPasswordError =
    state.touched.password && (state.errors.password || !state.password.trim());
  const hasConfirmPasswordError =
    state.touched.confirmPassword &&
    (state.errors.confirmPassword || !state.confirmPassword.trim());

  return (
    <div className={styles.overlay}>
      {/* Balls Animation */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.blob3}></div>

      {/* Form */}
      <div className={styles.formContainer}>
        {/* Go Back Button */}
        <BackButton absoliute={true} />
        {/* Heading */}
        <div className={styles.heading}>
          <h1>Create Account</h1>
          <p>Join the Admin Dashboard</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <FormInput
            id="name"
            name="username"
            type="text"
            label="Full Name"
            placeholder="Enter your full name"
            value={state.username}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            icon={formIcons.user}
            error={hasUsernameError}
            touched={state.touched.username}
            disabled={state.loading}
            autoComplete="username"
          />

          <FormInput
            id="email"
            name="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email address"
            value={state.email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            icon={formIcons.email}
            error={hasEmailError}
            touched={state.touched.email}
            disabled={state.loading}
            autoComplete="email"
          />

          <FormInput
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            placeholder="••••••••"
            value={state.password}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            icon={formIcons.password}
            toggleIcon={{
              icon: showPassword ? formIcons.eyeSlash : formIcons.eyeOpen,
              title: showPassword ? "Hide password" : "Show password",
            }}
            onToggle={() => setShowPassword(!showPassword)}
            error={hasPasswordError}
            touched={state.touched.password}
            disabled={state.loading}
            autoComplete="current-password"
          />
          {/* Password Field */}
          <FormInput
            id="confirmPassword"
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            label="Confirm Password"
            placeholder="••••••••"
            value={state.confirmPassword}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            icon={formIcons.password}
            toggleIcon={{
              icon: showPassword ? formIcons.eyeSlash : formIcons.eyeOpen,
              title: showPassword ? "Hide password" : "Show password",
            }}
            onToggle={() => setShowPassword(!showPassword)}
            error={hasConfirmPasswordError}
            touched={state.touched.confirmPassword}
            disabled={state.loading}
            autoComplete="current-password"
          />
          {/* Submit Button */}
          <Button
            variant="primary"
            auxClass={styles.submitButton}
            disabled={state.loading}
            onClick={handleFirstAlerts}
          >
            {state.loading && <Loader />}
            {state.loading ? (
              <span style={{ marginLeft: "0.25rem" }}>Signing up...</span>
            ) : (
              "Register"
            )}
          </Button>
        </form>

        {/* Footer Text */}
        <div className={styles.footer}>
          Already have an account?{" "}
          <span onClick={() => navigate(LOGIN_PATH)}>Login</span>
        </div>

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
      </div>
    </div>
  );
}

export { RegisterPage };
