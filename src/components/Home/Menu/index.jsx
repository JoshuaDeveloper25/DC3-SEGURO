"use client";

import { navLinks } from "@/src/data/dataHome";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

// React imports
import Image from "next/image";
import Link from "next/link";

// Images
import LogoLight from "@/public/logos/logo-light.png";
import LogoDark from "@/public/logos/logo-dark.png";

const Menu = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
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
      className={`flex justify-between shadow-sm bg-white dark:bg-[#24303f] md:px-6 2xl:px-11 p-4 fixed z-50 w-full top-0 transition-transform duration-300 ${
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

      <ThemeToggle />
    </nav>
  );
};

export default Menu;
