import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ThemeProvider, { ThemePovider } from "./components/ThemeProvider";
import WeatherDasboard from "./components/WeatherDasboard";

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
      <WeatherDasboard />
    </ThemePovider>
  );
}

export default App;
