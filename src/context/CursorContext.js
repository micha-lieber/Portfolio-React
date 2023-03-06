import { createContext, useState } from "react";

export const CursorCtx = createContext();

export const CursorCtxProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  return (
    <CursorCtx.Provider value={{ cursorPos, setCursorPos }}>
      {children}
    </CursorCtx.Provider>
  );
};
