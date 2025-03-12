"use client";

import IndividualQuestion from "./IndividualQuestion";
import { faqs } from "@/src/data/dataHome";

// External imports/
import { motion } from "framer-motion";

// React imports
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-[#24303f]">
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
            Preguntas Frecuentes
          </motion.h2>
        </div>

        <motion.main
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "linear",
          }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-sm border border-[#e2e8f0] bg-white shadow-lg dark:border-[#2e3a47] dark:bg-[#24303f]">
            <div className="flex flex-col gap-7.5">
              {faqs?.map((faq, index) => (
                <IndividualQuestion
                  onToggle={() => handleToggle(index)}
                  isOpen={openIndex === index}
                  key={faq.question}
                  faq={faq}
                />
              ))}
            </div>
          </div>
        </motion.main>
      </div>
    </section>
  );
};

export default FAQ;
