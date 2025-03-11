import { advantages } from "@/src/data/dataHome";

const Advantages = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#24303f]" id="advantages">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Algunos Beneficios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages?.map((advantage) => (
            <div
              className="p-8 bg-white dark:bg-[#24303f] rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-[#0948731a] hover:bg-opacity-5 dark:hover:bg-[#0948731a] dark:hover:bg-opacity-10"
              key={advantage?.title}
            >
              <div className="text-[#094873] text-3xl mb-4">
                {advantage?.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-[#1c2434] dark:text-white">
                {advantage?.title}
              </h4>
              <p>
                {advantage?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
