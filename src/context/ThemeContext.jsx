import { createContext, useCallback } from "react";
import { useStorage } from "@hooks";

const ThemeContext = createContext({
  isDark: false,
  setIsDark: () => {},
});

const STORAGE_KEY_THEME = "themeMode";

function ThemeContextProvider({ children }) {
  const applyTheme = useCallback((mode) => {
    const themeValue = mode ? "dark" : "light";
    document.documentElement.setAttribute("theme-mode", themeValue);
  }, []);

  // State => Context
  const { value: isDark, setValue: setIsDark } = useStorage(
    STORAGE_KEY_THEME,
    false,
    {
      onSave: applyTheme,
      onLoad: applyTheme,
    }
  );

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
