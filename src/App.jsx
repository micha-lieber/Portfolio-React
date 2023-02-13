import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home, Projects } from "./components/index.js";
import { ThemeContext } from "./context/Theme";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme === "dark" ? "dark" : ""}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
