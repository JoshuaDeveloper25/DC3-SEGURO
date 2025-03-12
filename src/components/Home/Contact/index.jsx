"use client";

// External imports
import { motion } from "framer-motion";

// React imports
import Link from "next/link";

const Contact = () => {
  return (
    <section className="py-20 dark:bg-[#1a222c]" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "linear",
            }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1c2434] dark:text-white mb-4"
          >
            Contacto
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="text-center transform transition-all duration-300 ease-in-out"
          >
            <div className="text-[#094873] text-3xl mb-4">
              <i className="bi bi-envelope"></i>
            </div>

            <h4 className="text-lg font-semibold text-[#1c2434] dark:text-white mb-2">
              Correo Electronico
            </h4>

            <p>digifill@outlook.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="text-center transform transition-all duration-300 ease-in-out"
          >
            <div className="text-[#094873] text-3xl mb-4">
              <i className="bi bi-phone"></i>
            </div>

            <Link
              className="text-lg font-semibold text-[#1c2434] dark:text-white mb-2"
              href="https://wa.me/524427845143"
              target="_blank"
            >
              Telefono Celular &amp; WhatsApp
            </Link>

            <p>+52 442 784 5143</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
