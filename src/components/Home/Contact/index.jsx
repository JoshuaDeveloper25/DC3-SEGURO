"use client";

// External imports
import { motion } from "framer-motion";

// React imports
import Link from "next/link";

const Contact = () => {
  return (
    <section className="py-20 dark:bg-primary-1" id="contact">
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
            className="md:text-4xl text-3xl font-bold text-primary-9 dark:text-white mb-4 font-times-new-roman"
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
            <h4 className="text-lg font-semibold text-primary-9 dark:text-white">
              Correo Electrónico:
            </h4>

            <p className="flex justify-center items-center gap-2">
              <i className="bi bi-envelope text-primary-3 text-2xl"></i>
              digifill@outlook.com
            </p>
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
            <Link
              className="text-lg font-semibold text-primary-9 dark:text-white"
              href="https://wa.me/524427845143"
              target="_blank"
            >
              Telefono Celular &amp; WhatsApp:
            </Link>

            <p className="flex justify-center items-center gap-2">
              <i className="bi bi-phone text-primary-3 text-2xl"></i>
              +52 442 784 5143
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
