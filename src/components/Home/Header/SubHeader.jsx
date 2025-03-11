import { definitionsPage } from "@/src/data/dataHome";

const SubHeader = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-24">
      {definitionsPage?.map((definitionPage) => (
        <div
          className="p-8 bg-white dark:bg-[#24303f] rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:bg-[#0948730d] hover:bg-opacity-5 dark:hover:bg-[#0948731a] dark:hover:bg-opacity-10"
          key={definitionPage?.title}
        >
          <div className="text-[#094873] text-4xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
            {definitionPage?.icon}
          </div>
          <h4 className="text-xl font-semibold mb-4 text-black dark:text-white">
            {definitionPage?.title}
          </h4>
          <p className="text-body-color dark:text-body-color-dark leading-relaxed">
            {definitionPage?.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default SubHeader;
