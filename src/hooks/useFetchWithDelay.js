import { useEffect, useState } from "react";

export function useFetchWithDelay(fetchFn, delay = 1500) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if element is still mounted to prevent setState after unmount
    let isMounted = true;
    let timeoutId;

    // Self Call Function
    (async () => {
      try {
        const res = await fetchFn();
        isMounted && setData(res);
      } catch (err) {
        console.log(`Error loading data: ${err}`);
      } finally {
        if (isMounted) {
          // Delay before setting isLoading to false
          timeoutId = setTimeout(() => {
            isMounted && setIsLoading(false);
          }, delay);
        }
      }
    })();

    return () => {
      isMounted = false;
      timeoutId && clearTimeout(timeoutId);
    };
  }, [fetchFn, delay]);

  return { data, isLoading };
}
