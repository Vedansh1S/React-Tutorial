import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
