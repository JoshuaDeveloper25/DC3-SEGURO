import { prices } from "@/src/data/dataHome";

// React imports
import Link from "next/link";

const Prices = () => {
  return (
    <section id="prices" className="py-20 bg-gray-50 dark:bg-[#1a222c]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1c2434] dark:text-white mb-4">
            Nuestros Precios
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {prices?.map((price) => (
            <div
              className="bg-white dark:bg-[#24303f] rounded-lg shadow-lg p-10 transform transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-[#0948730d] hover:bg-opacity-5 dark:hover:bg-[#0948731a] dark:hover:bg-opacity-10"
              key={price?.title}
            >
              <h3 className="text-xl font-bold text-[#1c2434] dark:text-white mb-4">
                {price?.title}
              </h3>

              <div className="text-3xl font-bold text-[#094873] mb-6">
                ${price?.price}
                <span className="text-sm">+IVA</span>
              </div>

              <ul className="space-y-3 mb-8">
                {price?.details?.map((priceDetail) => (
                  <li key={priceDetail} className="flex items-center">
                    <i className="bi bi-check2 text-[#094873] mr-2"></i>{" "}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
