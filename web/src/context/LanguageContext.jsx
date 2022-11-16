import { createContext } from "react";


export const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
 
  const value = "working..."



  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export default LanguageContextProvider;