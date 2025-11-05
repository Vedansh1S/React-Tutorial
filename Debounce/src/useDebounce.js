import { useEffect, useState } from "react";
// Step 4: the useDebounce hook is called with the query and delay parameters
export const useDebounce = (query, delay) => {
  const [value, setValue] = useState("");

  // Step 5: the useEffect hook is used to set the value of the debouncedQuery state after 500ms
  // If the query state is updated within 500ms, the timeout is cleared and a new timeout is set
  // This is done to prevent the value of the debouncedQuery state from being updated too frequently
  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(query);
    }, delay);

    return () => clearTimeout(handler);
  }, [query, delay]);

  return value; // Step 6: the value of the debouncedQuery state is returned
};
