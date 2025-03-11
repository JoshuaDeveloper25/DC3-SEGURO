// Icons
import { AddIcon, SubtractIcon } from "../../Icons";

const IndividualQuestion = ({ faq, isOpen, onToggle }) => {
  return (
    <article
      className="rounded-md border border-[#e2e8f0] p-4 dark:border-[#2e3a47] dark:shadow-none md:p-6 xl:p-7.5"
      key={faq?.question}
    >
      <button
        className="btn flex w-full items-center justify-between gap-2"
        onClick={onToggle}
        type="button"
      >
        <div>
          <h4 className="text-left sm:text-2xl text-base font-bold text-[#1c2434] dark:text-white">
            {faq?.question}
          </h4>
        </div>

        <div className="flex h-9 w-full max-w-9 items-center justify-center rounded-full border border-[#094873] dark:border-white">
          {!isOpen ? (
            <AddIcon
              fillColor={
                "fill-[#094873] duration-200 ease-in-out dark:fill-white "
              }
            />
          ) : (
            <SubtractIcon
              fillColor={
                "fill-[#094873] duration-200 ease-in-out dark:fill-white "
              }
            />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="mt-5 duration-200 ease-in-out">
          <ul className="list-disc list-inside space-y-2 max-w-[830px] font-medium">
            {faq?.answers?.map((answer) => (
              <li key={answer}>{answer}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

export default IndividualQuestion;
