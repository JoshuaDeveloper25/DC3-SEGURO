// External imports
import { AnimatePresence, motion } from "framer-motion";

// Icons
import { AddIcon, SubtractIcon } from "../../Icons";

const IndividualQuestion = ({ faq, isOpen, onToggle, index }) => {
  return (
    <motion.article
      className="rounded-md border border-primary-2/25 shadow-lg p-4 dark:border-primary-9 dark:shadow-none md:p-6 xl:p-7.5"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: (index + 1) * 0.1,
        ease: "linear",
      }}
      viewport={{ once: true }}
    >
      <button
        className="btn flex w-full items-center justify-between gap-2"
        onClick={onToggle}
        type="button"
      >
        <div>
          <h4 className="text-left sm:text-2xl text-base font-bold text-primary-9 dark:text-white">
            {faq?.question}
          </h4>
        </div>

        <motion.div
          className="flex h-9 w-full max-w-9 items-center justify-center rounded-full border border-primary-3 dark:border-white"
          animate={{ rotate: isOpen ? 0 : 180 }} 
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {!isOpen ? (
            <AddIcon
              fillColor={
                "fill-primary-3 duration-200 ease-in-out dark:fill-white "
              }
            />
          ) : (
            <SubtractIcon
              fillColor={
                "fill-primary-3 duration-200 ease-in-out dark:fill-white "
              }
            />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-5">
              <ul className="list-disc list-inside space-y-2 max-w-[830px] font-medium">
                {faq?.answers?.map((answer) => (
                  <li key={answer}>{answer}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default IndividualQuestion;
