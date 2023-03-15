import { createContext, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const size = useWindowSize();

  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
