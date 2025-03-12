"use client";

import { navLinks } from "@/src/data/dataHome";
import ThemeToggle from "./ThemeToggle";

// External imports
import { motion, AnimatePresence } from "framer-motion";

// React imports
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import LogoLight from "@/public/logos/logo-light.png";
import LogoDark from "@/public/logos/logo-dark.png";

const Menu = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [openHamMenu, setOpenHamMenu] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`flex justify-between shadow-sm bg-white dark:bg-primary-1 md:px-6 2xl:px-11 p-4 py-0 fixed z-50 w-full top-0 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div>
        <Image
          className="w-32 hidden dark:block"
          src={LogoDark}
          alt="Logo Dark"
        />

        <Image className="w-32 dark:hidden" src={LogoLight} alt="Logo Light" />
      </div>
      <ul className="md:flex hidden items-center gap-8">
        {navLinks?.map((navLink) => (
          <li className={navLink?.styles} key={navLink?.link}>
            <Link href={navLink?.link}>{navLink?.text}</Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center gap-6">
        <ThemeToggle />

        <div className="md:hidden block">
          <button
            onClick={() => setOpenHamMenu(!openHamMenu)}
            className="btn"
            type="button"
          >
            {openHamMenu ? (
              <i className="bi bi-x-lg text-4xl"></i>
            ) : (
              <i className="bi bi-list text-4xl"></i>
            )}
          </button>
        </div>
      </div>

      {/* HAM BURGUER DISPLAY */}
      <AnimatePresence>
        {openHamMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-primary-1 shadow-lg"
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              {navLinks?.map((navLink) => (
                <li className={navLink?.styles} key={navLink?.link}>
                  <Link
                    href={navLink?.link}
                    onClick={() => setOpenHamMenu(false)}
                  >
                    {navLink?.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Menu;
