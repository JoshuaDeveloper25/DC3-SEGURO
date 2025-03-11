import React from "react";

const Advantages = () => {
  return (
    <section
      className="scroll-mt-16 py-20 bg-white dark:bg-boxdark"
      id="beneficios"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Algunos Beneficios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white dark:bg-boxdark rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-primary hover:bg-opacity-5 dark:hover:bg-primary dark:hover:bg-opacity-10">
            <div className="text-primary text-3xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
              <i className="bi-speedometer2"></i>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-black dark:text-white">
              Fácil de usar
            </h4>
            <p className="text-body-color dark:text-body-color-dark">
              Uno de los objetivos principales de DC3 Seguro es que su
              utilización sea lo más simple posible.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-boxdark rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-primary hover:bg-opacity-5 dark:hover:bg-primary dark:hover:bg-opacity-10">
            <div className="text-primary text-3xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
              <i className="bi-file-earmark-text"></i>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-black dark:text-white">
              Olvídate de molestos archivos
            </h4>
            <p className="text-body-color dark:text-body-color-dark">
              ¡Deja atrás los engorrosos archivos de Word y Excel para generar
              tus constancias!
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-boxdark rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-primary hover:bg-opacity-5 dark:hover:bg-primary dark:hover:bg-opacity-10">
            <div className="text-primary text-3xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
              <i className="bi-graph-up"></i>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-black dark:text-white">
              Información histórica
            </h4>
            <p className="text-body-color dark:text-body-color-dark">
              Podrás consultar cualquier constancia de habilidad (DC-3) que
              hayas generado en el ultimo año.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-boxdark rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-primary hover:bg-opacity-5 dark:hover:bg-primary dark:hover:bg-opacity-10">
            <div className="text-primary text-3xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
              <i className="bi-headset"></i>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-black dark:text-white">
              Soporte Técnico
            </h4>
            <p className="text-body-color dark:text-body-color-dark">
              Toda duda será solucionada por uno de nuestros asesores, en un
              mínimo de tiempo.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-boxdark rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-primary hover:bg-opacity-5 dark:hover:bg-primary dark:hover:bg-opacity-10">
            <div className="text-primary text-3xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
              <i className="bi-palette"></i>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-black dark:text-white">
              Personalización
            </h4>
            <p className="text-body-color dark:text-body-color-dark">
              Incluye tu logo, el de la empresa capacitada, firma del instructor
              y código QR.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-boxdark rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-primary hover:bg-opacity-5 dark:hover:bg-primary dark:hover:bg-opacity-10">
            <div className="text-primary text-3xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
              <i className="bi-people-fill"></i>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-black dark:text-white">
              Acompañamiento
            </h4>
            <p className="text-body-color dark:text-body-color-dark">
              Contamos con un periodo de acompañamiento para que la adaptación
              sea fluida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
