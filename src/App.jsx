import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ThemeProvider, { ThemePovider } from "./components/ThemeProvider";
import WeatherDasboard from "./components/WeatherDasboard";
import getFormatedWeatherData from "./servies/weatherServies";
import Loader from "./Loader/Loader";

function App() {
  const [theme, setTheme] = useState("light");
  const [query, setQuery] = useState({ q: "delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

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

  const getWeather = async () => {
    const data = await getFormatedWeatherData({ ...query, units }).then(
      (data) => {
        setWeather(data);
      }
    );
  };

  useEffect(() => {
    getWeather();
  }, [units, query]);

  return (
    <div
      className={`w-full min-h-screen ${
        theme === "dark" ? "bg-slate-700" : "bg-sky-400"
      }`}
    >
      <ThemePovider value={{ theme, darkTheme, lightTheme }}>
        <Navbar setQuery={setQuery} setUnits={setUnits} />
        {weather ? (
          <WeatherDasboard weather={weather} units={units} />
        ) : (
          <Loader />
        )}
      </ThemePovider>
    </div>
  );
}

export default App;
