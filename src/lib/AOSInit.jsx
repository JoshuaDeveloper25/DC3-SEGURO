"use client";

// External imports
import "aos/dist/aos.css";
import Aos from "aos";

// React imports
import { useEffect } from "react";

export const AOSInit = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return null;
};
