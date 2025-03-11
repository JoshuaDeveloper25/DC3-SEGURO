"use client";

// React imports
import { useState, useEffect } from "react";

// Icons
import { MoonIcon, SunIcon } from "../../Icons";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center gap-2">
      <div>
        <label className="relative m-0 block h-7.5 w-14 rounded-full bg-stroke">
          <input
            className="absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
            onChange={toggleTheme}
            checked={isDarkMode}
            type="checkbox"
          />

          <span
            className={`${
              isDarkMode ? "right-[3px]" : "left-[3px]"
            } absolute top-1/2 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-sm duration-75 ease-linear`}
          >
            {isDarkMode ? (
              <MoonIcon fillColor={"fill-[#969AA1]"} />
            ) : (
              <SunIcon fillColor={"fill-[#969AA1]"} />
            )}
          </span>
        </label>
      </div>
    </div>
  );
};

export default ThemeToggle;
