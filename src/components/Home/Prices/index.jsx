"use client";

import { prices } from "@/src/data/dataHome";

// External imports
import { motion } from "framer-motion";

// React imports
import Link from "next/link";

const Prices = () => {
  return (
    <section id="prices" className="py-20 dark:bg-primary-1/20">
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
            Nuestros Precios
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {prices?.map((price, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: (index + 1) * 0.1,
                ease: "linear",
              }}
              viewport={{ once: true }}
              className="bg-white dark:bg-primary-4/5 rounded-lg shadow-lg p-10 transform transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-primary-3/20 hover:bg-opacity-5 dark:hover:bg-primary-4/20 dark:hover:bg-opacity-10"
              key={price?.title}
            >
              <h3 className="text-xl font-bold text-primary-9 dark:text-white mb-4">
                {price?.title}
              </h3>

              <div className="text-3xl font-bold text-primary-3 mb-6">
                ${price?.price}
                <span className="text-sm">+IVA</span>
              </div>

              <ul className="space-y-3 mb-8">
                {price?.details?.map((priceDetail) => (
                  <li key={priceDetail} className="flex items-center">
                    <i className="bi bi-check2 text-primary-3 mr-2"></i>{" "}
                    {priceDetail}
                  </li>
                ))}
              </ul>

              <Link
                className="btn btn-primary w-full py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300"
                href="#"
              >
                Ponerse en contacto
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
