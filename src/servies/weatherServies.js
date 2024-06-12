import { DateTime } from "luxon";

const API_KEY = "432413197bef7b6736e4b0109d136836";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  // console.log(url)
  return fetch(url).then((res) => res.json());
};

const formatToLocalTime = (
  secs,
  offest,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs + offest, { zone: "utc" }).toFormat(format);

const iconUrlFromCode = (icon) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;

const formatCurrent = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details, icon } = weather[0];
  const formatedLocalTime = formatToLocalTime(dt, timezone);

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
    speed,
    details,
    iconUrl: iconUrlFromCode(icon),
    formatedLocalTime,
    dt,
    timezone,
  };
};

const formattForecastWeather = (secs, offest, data) => {
  const hourly = data
    .filter((f) => f.dt > secs)
    .map((d) => ({
      temp: d.main.temp,
      title: formatToLocalTime(d.dt, offest, "hh:mm a"),
      icon: iconUrlFromCode(d.weather[0].icon),
      date: d.dt_txt,
    }))
    .slice(0, 5);

  const daily = data
    .filter((f) => f.dt_txt.slice(-8) === "00:00:00")
    .map((d) => ({
      temp: d.main.temp,
      title: formatToLocalTime(d.dt, offest, "cccc"),
      icon: iconUrlFromCode(d.weather[0].icon),
      date: d.dt_txt,
    }));
  return { hourly, daily };
};
const getFormatedWeatherData = async (searchParams) => {
  const formatedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then((data) => formatCurrent(data));

  const { dt, lat, lon, timezone } = formatedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then((data) => formattForecastWeather(dt, timezone, data.list));

  return { ...formatedCurrentWeather, ...formattedForecastWeather };
};

export default getFormatedWeatherData;
