import { definitionsApp } from "@/src/data/dataHome";

// External imports
import { motion } from "framer-motion";

const SubHeader = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-24">
      {definitionsApp?.map((definitionApp, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: (index + 1) * 0.1,
            ease: "linear",
          }}
          viewport={{ once: true }}
          className="p-8 bg-white dark:bg-primary-1 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:bg-primary-3/20 hover:bg-opacity-5 dark:hover:bg-primary-4/20 dark:hover:bg-opacity-10"
          key={definitionApp?.title}
        >
          <div className="text-primary-3 text-4xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
            {definitionApp?.icon}
          </div>
          <h4 className="text-xl font-semibold mb-4 text-black dark:text-white">
            {definitionApp?.title}
          </h4>
          <p className="text-body-color dark:text-body-color-dark leading-relaxed">
            {definitionApp?.description}
          </p>
        </motion.div>
      ))}
    </section>
  );
};

export default SubHeader;
