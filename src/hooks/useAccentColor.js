import { STORAGE_KEY_ACCENT_COLOR } from "@constants";
import { useEffect, useState } from "react";

const DEFAULT = "#6366f1";

function getSavedAccent() {
  return localStorage.getItem(STORAGE_KEY_ACCENT_COLOR) || null;
}

function saveAccent(color) {
  document.documentElement.style.setProperty("--primary", color);
  document.documentElement.style.setProperty("--primary-hover", color + "cc");
  localStorage.setItem(STORAGE_KEY_ACCENT_COLOR, color);
}

function useAccentColor() {
  const saved = getSavedAccent();
  const [accentColor, setAccentColor] = useState(() => saved || DEFAULT);

  const shouldInitializeAccent = !!saved;

  useEffect(() => {
    saveAccent(accentColor);
  }, [accentColor]);

  return { accentColor, setAccentColor, shouldInitializeAccent, saveAccent };
}

export { useAccentColor };
