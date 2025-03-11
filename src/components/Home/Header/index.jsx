const Header = () => {
  return (
    <header className="container mx-auto px-6 md:px-8 h-svh">
      <div className="flex justify-center items-center min-h-[60%]">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-[#094873] text-4xl sm:text-5xl md:text-6xl font-[600] mb-12">
            ¡Bienvenidos a DC-3 Seguro!
          </h1>

          <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[600] leading-9 text-black dark:text-white">
            La manera más fácil y rápida de generar tus constancias de
            habilidades (DC-3).
          </h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
