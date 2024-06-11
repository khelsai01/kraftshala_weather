import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ThemeProvider, { ThemePovider } from "./components/ThemeProvider";

function App() {
  const [theme, setTheme] = useState("light");

  const darkTheme = () => {
    setTheme("dark");
  };

  const lightTheme = () => {
    setTheme("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
  }, [theme]);
  return (
    <ThemePovider value={{ theme, darkTheme, lightTheme }}>
      <Navbar />
    </ThemePovider>
  );
}

export default App;
