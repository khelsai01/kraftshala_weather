import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import useTheme from "./ThemeProvider";

const TempAndDetails = ({
  weather: {
    details,
    iconUrl,
    temp,
    feels_like,
    speed,
    humidity,
    sunrise,
    sunset,
    temp_max,
    temp_min,
  },
  units,
}) => {
  const { theme } = useTheme();
  const verticalTemp = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real feel",
      value: `${feels_like.toFixed()}${units == "metric" ? "°C" : "°F"}`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()}km/hr`,
    },
  ];
  const horizontalTemp = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}${units == "metric" ? "°C" : "°F"}`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}${units == "metric" ? "°C" : "°F"}`,
    },
  ];

  return (
    <div className="w-[85%] mx-auto">
      <div
        className={`flex items-center justify-center pt-2 text-xl ${
          theme === "dark" ? "text-cyan-300" : "text-white"
        }`}
      >
        <p>{details}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 items-center justify-between py-3">
        <img src={iconUrl} alt="weatherIcon" className="w-20" />
        <p className="text-5xl ">
          {`${temp.toFixed()}${units == "metric" ? "°C" : "°F"}`}{" "}
        </p>

        <div className="flex flex-col space-y-3 items-start shadow-lg p-4 rounded-lg sm:shadow-none sm:p-0">
          {verticalTemp.map((item) => (
            <div
              key={item.id}
              className="flex font-light text-sm items-center justify-center"
            >
              <item.Icon className={`mr-1`} />
              {item.title}
              <span className="font-medium ml-1">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row w-[170px] sm:w-full items-start mx-auto
          sm:items-center justify-center sm:space-x-10 text-sm py-3 shadow-lg p-2 space-y-2 sm:space-y-0 rounded-lg sm:shadow-none sm:p-0"
      >
        {horizontalTemp.map((item) => (
          <div key={item.id} className="flex flex-row items-center">
            <item.Icon size={30} />
            <p className="font-light ml-1">
              {`${item.title} : `}
              <span className="font-medium ml-1">{item.value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetails;
