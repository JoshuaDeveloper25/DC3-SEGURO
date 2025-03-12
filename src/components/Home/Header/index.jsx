"use client";

import { appKeys } from "@/src/data/dataHome";

import Typewriter from "./TypeWriter";
import SubHeader from "./SubHeader";

// External imports
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

// React imports
import { useEffect } from "react";

const Header = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <header className="container mx-auto px-6 md:px-8 py-36 mt-24 mb-16">
      <div className="flex justify-center items-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[800px] mx-auto text-center md:space-y-12 space-y-4"
        >
          <h1 className="text-[#094873] text-4xl sm:text-5xl md:text-6xl font-[600]">
            ¡Bienvenidos a Digifill!
          </h1>

          <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[600] leading-10 text-[#1c2434] dark:text-white">
            La manera más fácil y rápida de generar tus constancias de
            habilidades.
          </h4>

          <div className="flex flex-col items-center justify-center md:text-4xl sm:text-3xl text-2xl font-[600] space-y-4">
            <h3 className="md:py-4 py-0">Digifill es:</h3>

            <div className="h-24 flex items-center justify-center">
              <Typewriter phrases={appKeys} delay={100} loop={true} />
            </div>
          </div>
        </motion.div>
      </div>

      <SubHeader />
    </header>
  );
};

export default Header;
