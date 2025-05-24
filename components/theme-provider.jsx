"use client";
import { createContext, useContext, useEffect } from "react";

// Create a simple context with no theme switching
const ThemeContext = createContext({
  theme: "dark",
});

// Hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  // Apply dark theme on mount
  useEffect(() => {
    // Apply dark mode class to HTML element
    document.documentElement.classList.add("dark");
    document.documentElement.style.backgroundColor = "#121212";
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffffff";
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
}
