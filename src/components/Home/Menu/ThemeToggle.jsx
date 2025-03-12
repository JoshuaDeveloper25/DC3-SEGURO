"use client";

import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "../../Icons";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme === "dark";
    setIsDarkMode(initialTheme);

    if (initialTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-2">
      <label
        className={`relative m-0 block h-7.5 w-14 rounded-full bg-primary-2/50 dark:bg-primary-10`}
      >
        <input
          className="absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
          onChange={toggleTheme}
          checked={isDarkMode}
          type="checkbox"
        />

        <span
          className={`${
            isDarkMode ? "right-[5px]" : "left-[3px]"
          } absolute top-1/2 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-lg duration-75 ease-linear`}
        >
          {isDarkMode ? (
            <MoonIcon fillColor={"fill-primary-4"} />
          ) : (
            <SunIcon fillColor={"fill-primary-4"} />
          )}
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
