import { createContext, useState } from "react";

export const BGContext = createContext();

export function ContextProvider({ children }) {
  const [currentBG, setCurrentBG] = useState("light");

  const toggleTheme = () => {
    setCurrentBG((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <BGContext.Provider value={{ currentBG, toggleTheme }}>
      {children}
    </BGContext.Provider>
  );
}
