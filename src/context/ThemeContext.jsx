import { createContext, useCallback } from "react";
import { useStorage } from "@hooks";
import { STORAGE_KEY_THEME_MODE } from "@constants";

const ThemeContext = createContext({
  isDark: false,
  setIsDark: () => {},
});

function ThemeContextProvider({ children }) {
  const applyTheme = useCallback((mode) => {
    const themeValue = mode ? "dark" : "light";
    document.documentElement.setAttribute("theme-mode", themeValue);
  }, []);

  // State => Context
  const { value: isDark, setValue: setIsDark } = useStorage(
    STORAGE_KEY_THEME_MODE,
    false,
    {
      onSave: applyTheme,
      onLoad: applyTheme,
    }
  );

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
