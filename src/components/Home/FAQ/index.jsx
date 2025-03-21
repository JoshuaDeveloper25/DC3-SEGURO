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
    <section id="faq" className="py-20 bg-white dark:bg-primary-1">
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
            Preguntas Frecuentes
          </motion.h2>
        </div>

        <main className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-primary-1">
              <div className="flex flex-col gap-7.5">
                {faqs?.map((faq, index) => (
                  <IndividualQuestion
                    onToggle={() => handleToggle(index)}
                    isOpen={openIndex === index}
                    key={faq.question}
                    index={index}
                    faq={faq}
                  />
                ))}
              </div>
            </div>
        </main>
      </div>
    </section>
  );
};

export default FAQ;
