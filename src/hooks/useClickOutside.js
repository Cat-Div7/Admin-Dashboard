import { useEffect } from "react";

/**
 * Hook for closing the modal when clicking outside it
 * @param {React.RefObject} ref - reference for parent element
 * @param {Function} callback - Calling the function when click outside the element
 */
export function useClickOutside(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
}
