import { useEffect, useState, useCallback } from "react";

function useStorage(KEY_STORAGE, defaultValue, { onLoad, onSave } = {}) {
  const [value, setValue] = useState(defaultValue);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const save = useCallback(() => {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(value));
  }, [KEY_STORAGE, value]);

  const loadStorage = useCallback(() => {
    try {
      const stored = localStorage.getItem(KEY_STORAGE);
      if (stored && stored != null) {
        const parsed = JSON.parse(stored);
        setValue(parsed);
        onLoad && onLoad(parsed);
      }
    } catch (error) {
      console.error(`Error loading ${KEY_STORAGE}:`, error);
      setError("Failed to fetch");
    } finally {
      setIsLoaded(true);
      setIsLoading(false);
    }
  }, [KEY_STORAGE, onLoad]);

  // Init => Loading
  useEffect(() => {
    loadStorage();
  }, [loadStorage]);

  // Save => changes
  useEffect(() => {
    if (!isLoaded) return;

    save();
    onSave && onSave(value);
  }, [KEY_STORAGE, value, isLoaded, onSave, save]);

  return { value, setValue, isLoading, error };
}

export { useStorage };
