import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { formIcons, generateFakeToken, hashPassword } from "@utils";
import { FormInput, Button, BackButton, Loader } from "@components";
import {
  STORAGE_KEY_ACCOUNTS,
  STORAGE_KEY_USER_ID,
  STORAGE_KEY_TOKEN,
  REGISTER_PATH,
  HOME_PATH,
} from "@constants";
import styles from "@styles/LoginPage.module.css";

const initialState = {
  email: "",
  password: "",
  errors: {
    email: "Email is required",
    password: "Password is required",
  },
  loading: false,
  touched: {
    email: false,
    password: false,
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
const validateForm = (email, password) => {
  const errors = {};

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
  }

  return errors;
};

function LoginPage() {
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
    const errors = validateForm(state.email, state.password);

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
      const accountsData = localStorage.getItem(STORAGE_KEY_ACCOUNTS);

      if (!accountsData || accountsData.length == 0) {
        dispatch({
          type: "SET_ERRORS",
          errors: {
            email: "Account not found",
            password: "",
          },
        });

        toast.warning("No accounts found");
        setTimeout(() => {
          toast.info("Would you like to register..!");
        }, 1000);
        return;
      }

      const accounts = JSON.parse(accountsData);

      // Find user
      const user = accounts.find((acc) => acc.email === state.email);
      if (!user) {
        dispatch({
          type: "SET_ERRORS",
          errors: {
            email: "Email not found",
            password: "",
          },
        });

        setTimeout(() => {
          toast.info("Would you like to register..!");
        }, 1000);

        return;
      }

      // Check password
      const hashedInput = await hashPassword(state.password);
      if (hashedInput !== user.password) {
        dispatch({
          type: "SET_ERRORS",
          errors: {
            email: "",
            password: "Incorrect password",
          },
        });

        return;
      }

      // Save userId
      localStorage.setItem(STORAGE_KEY_USER_ID, JSON.stringify(user.id));

      // Save token
      const fakeToken = generateFakeToken();
      localStorage.setItem(STORAGE_KEY_TOKEN, fakeToken);

      // Reset form
      dispatch({
        type: "RESET",
      });

      // Navigate to admin dashboard
      toast.success("Welcome back!");
      await new Promise((resolve) => setTimeout(resolve, 1500));

      navigate(HOME_PATH);
    } catch {
      dispatch({
        type: "SET_ERRORS",
        errors: {
          email: "Login failed. Please try again.",
          password: "",
        },
      });

      toast.error("Something went wrong...");
    } finally {
      dispatch({
        type: "SET_LOADING",
        loading: false,
      });
    }
  };

  // Handle Alerts
  const handleFirstAlerts = () => {
    if (!state.touched.email && state.errors.email) {
      toast.warning("Don't forget your email!");
    } else if (!state.touched.password && state.errors.password) {
      toast.warning("Password can't be empty!");
    }
  };

  // Check for errors
  const hasEmailError =
    state.touched.email && (state.errors.email || !state.email.trim());
  const hasPasswordError =
    state.touched.password && (state.errors.password || !state.password.trim());

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
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <FormInput
            id="email"
            name="email"
            type="email"
            label="Email Address"
            placeholder="you@example.com"
            value={state.email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            icon={formIcons.email}
            error={hasEmailError}
            touched={state.touched.email}
            disabled={state.loading}
            autoComplete="email"
          />

          {/* Password Field */}
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

          {/* Forgot Password Link */}
          <div className={styles.helpText}>
            <span
              onClick={() =>
                toast.warning("This option is not available for now!")
              }
            >
              Forgot Password?
            </span>
          </div>

          {/* Submit Button */}
          <Button
            variant="primary"
            auxClass={styles.submitButton}
            disabled={state.loading}
            onClick={handleFirstAlerts}
          >
            {state.loading && <Loader />}
            {state.loading ? (
              <span style={{ marginLeft: "0.25rem" }}>Signing in...</span>
            ) : (
              "Login"
            )}
          </Button>
        </form>

        {/* Footer Text */}
        <div className={styles.footer}>
          Don't have an account?{" "}
          <span onClick={() => navigate(REGISTER_PATH)}>Register</span>
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

export { LoginPage };
