import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

import useTheme from "./ThemeProvider";
const Navbar = ({ setQuery, setUnits }) => {
  
  const { theme, darkTheme, lightTheme } = useTheme();

  const [city, setCity] = useState('');

  const handleSearchCity = () => {
    if (city !== '') setQuery({ q: city });
    
  }

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({lat:latitude, lon:longitude})
      })
    }
  }
  const toggleTheme = () => {
    if (theme === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <div
      className={`flex justify-around items-center shadow-lg  ${
        theme === "light" ? "bg-white text-black" : "bg-gray-700 text-white"
      }`}
    >
      <div className={`logo  h-16`}>
        {theme === 'dark' ? <img
           src="assets/logoDark.png"
           alt="kraftshala weather"
           className="h-[100%] p-1 cursor-pointer"
         /> :
           <img
           src="assets/logo.png"
           alt="kraftshala weather"
           className="h-[100%] p-1 cursor-pointer"
         />
        }
       
      </div>
      <div className={`search flex flex-row space-x-4`}>
        <div>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="city name or zip code..."
            className={`rounded-full border-1 w-full h-10 font-light p-2 shadow-lg capitalize focus:outline-none placeholder:lowercase placeholder:text-sm placeholder:text-center text-center text-black `}
          />
        </div>
        <div className="flex  space-x-1 sm:space-x-4 items-center">
          <BsSearch
            size={16}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchCity}
          />
          <BiCurrentLocation
            size={16}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleCurrentLocation}
          />
        </div>
        <div className=" hidden sm:flex flex-row w-1/4 items-center justify-center space-x-1">
          <button className="text-2xl font-medium transition ease-out hover:scale-125"
          onClick={()=>setUnits('metric')}>
            °C
          </button>
          <p className="text-xl">|</p>
          <button className="text-2xl font-medium transition ease-out hover:scale-125"
          onClick={()=>setUnits('imperial')}>
            °F
          </button>
        </div>
      </div>
      <div>
        {theme === "light" ? (
          <MdDarkMode
            size={16}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={toggleTheme}
          />
        ) : (
          <MdLightMode
            size={16}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={toggleTheme}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
