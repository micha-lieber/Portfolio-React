import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import { Home } from "./components/index.js";
import { ThemeContext } from "./context/Theme";
import { CursorCtx } from "./context/CursorContext";

function App() {
  const { theme } = useContext(ThemeContext);
  const { setCursorPos } = useContext(CursorCtx);
  const moveHandler = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
    // console.log(cursorPos);
  };

  return (
    <div
      className={`App ${theme === "dark" ? "dark" : ""}`}
      onMouseMove={(e) => moveHandler(e)}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
