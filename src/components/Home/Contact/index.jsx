// React imports
import Link from "next/link";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#1a222c]" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1c2434] dark:text-white mb-4">
            Contacto
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="text-center transform transition-all duration-300 ease-in-out">
            <div className="text-[#094873] text-3xl mb-4">
              <i className="bi bi-envelope"></i>
            </div>

            <h4 className="text-lg font-semibold text-[#1c2434] dark:text-white mb-2">
              Correo Electronico
            </h4>

            <p>dc3seguro@outlook.com</p>
          </div>

          <div className="text-center transform transition-all duration-300 ease-in-out">
            <div className="text-[#094873] text-3xl mb-4">
              <i className="bi bi-phone"></i>
            </div>

            <Link
              className="text-lg font-semibold text-[#1c2434] dark:text-white mb-2"
              href="https://wa.me/524427845143"
              target="_blank"
            >
              Telefono Celular &amp; WhatsApp
            </Link>

            <p>+52 442 784 5143</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
