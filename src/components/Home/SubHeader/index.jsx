import React from "react";

const SubHeader = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="p-8 bg-white dark:bg-[#24303f] rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:bg-[#0948730d] hover:bg-opacity-5 dark:hover:bg-[#0948731a] dark:hover:bg-opacity-10">
        <div className="text-[#094873] text-4xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
          <i className="bi-graph-up-arrow"></i>
        </div>
        <h4 className="text-xl font-semibold mb-4 text-black dark:text-white">
          Mayor Productividad
        </h4>
        <p className="text-body-color dark:text-body-color-dark leading-relaxed">
          No pierdas tiempo con otras herramientas. Genera de forma rápida tus
          constancias de habilidad (DC-3).
        </p>
      </div>

      <div className="p-8 bg-white dark:bg-[#24303f] rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:bg-[#0948730d] hover:bg-opacity-5 dark:hover:bg-[#0948731a] dark:hover:bg-opacity-10">
        <div className="text-[#094873] text-4xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
          <i className="bi bi-cloud-arrow-up"></i>
        </div>
        <h4 className="text-xl font-semibold mb-4 text-black dark:text-white">
          Plataforma 24/7
        </h4>
        <p className="text-body-color dark:text-body-color-dark leading-relaxed">
          Toda la información relacionada con tus constancias está disponible
          las 24 horas.
        </p>
      </div>

      <div className="p-8 bg-white dark:bg-[#24303f] rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:bg-[#0948730d] hover:bg-opacity-5 dark:hover:bg-[#0948731a] dark:hover:bg-opacity-10">
        <div className="text-[#094873] text-4xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
          <i className="bi-people"></i>
        </div>
        <h4 className="text-xl font-semibold mb-4 text-black dark:text-white">
          Acceso a tus clientes
        </h4>
        <p className="text-body-color dark:text-body-color-dark leading-relaxed">
          Cada empresa tendrá acceso para visualizar sus capacitaciones
          recibidas.
        </p>
      </div>

      <div className="p-8 bg-white dark:bg-[#24303f] rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:bg-[#0948730d] hover:bg-opacity-5 dark:hover:bg-[#0948731a] dark:hover:bg-opacity-10">
        <div className="text-[#094873] text-4xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
          <i className="bi bi-qr-code"></i>
        </div>
        <h4 className="text-xl font-semibold mb-4 text-black dark:text-white">
          Constancias Protegidas
        </h4>
        <p className="text-body-color dark:text-body-color-dark leading-relaxed">
          Cada constancia incluye código único y QR para verificación.
        </p>
      </div>
    </section>
  );
};

export default SubHeader;
