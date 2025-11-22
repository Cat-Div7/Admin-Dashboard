import { createContext, useEffect } from "react";
import { useStorage } from "@hooks";
import { STORAGE_KEY_COLLAPSE_NAV } from "@constants";

const CollapseContext = createContext({
  isCollapsed: false,
  setIsCollapsed: () => {},
});

function CollapseContextProvider({ children }) {
  const { value: isCollapsed, setValue: setIsCollapsed } = useStorage(
    STORAGE_KEY_COLLAPSE_NAV,
    false
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsCollapsed]);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <CollapseContext.Provider value={{ isCollapsed, toggleCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
}

export { CollapseContext, CollapseContextProvider };
