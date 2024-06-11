import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
export const ThemePovider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
