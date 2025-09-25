"use client";

// Themes for the application
import React from "react";
import { useTheme } from "next-themes";
// import { Sun } from "../../Icons/Sun";
// import { Moon } from "../../Icons/Moon";
import { useEffect, useState } from "react";

/**
 * ThemeToggleBtn Component
 * A button to toggle between light and dark themes.
 * */
export default function ThemeToggleBtn() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  //Verhindert Hydration-Fehler beim ersten Rendern
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Reder erst nach dem Mount (Client-Side)
  if (!mounted)
    return (
      <button
        className="w-10 h10 roubded-full bg-gray-200 dark:bg-gray-700 animate-pulse"
        aria-label="Theme wird geladen"
      />
    );

  // Theme Toggle Button Funktion
  const toggleTheme = () => {
    console.log(
      `Theme gewechselt von ${theme} zu ${theme === "dark" ? "light" : "dark"}`
    );
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-grau-200 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out border-2 border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md hover:shadow-lg"
      aria-label={`Zu ${theme === "dark" ? "Light" : "Dark"} Mode wechseln`}
    >
      {/* Sun Icon (Light Mode)*/}
      {theme === "light" ? (
        <svg
          className="w-6 h-6 text-blue-300 m-auto"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        // Moon Icon (Dark Mode)
        <svg
          className="w-6 h-6 text-blue-300 m-auto"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
