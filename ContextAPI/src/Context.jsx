import { createContext, useContext, useState } from "react";

export const BulbContext = createContext();

export const ContextProvider = ({children}) => {
  const [isOn, setIsOn] = useState(true);

  return (
    <BulbContext.Provider value={{ isOn, setIsOn }}>
        {children}
    </BulbContext.Provider>
  );
};

