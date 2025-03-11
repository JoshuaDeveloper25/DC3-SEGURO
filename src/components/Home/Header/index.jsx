const Header = () => {
  return (
    <header className="container mx-auto px-6 md:px-8 h-svh">
      <div className="flex justify-center items-center min-h-[71%]">
        <div className="max-w-[800px] mx-auto text-center md:space-y-12 space-y-4">
          <h1 className="text-[#094873] text-4xl sm:text-5xl md:text-6xl font-[600]">
            ¡Bienvenidos a DC-3 Seguro!
          </h1>

          <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[600] leading-10 text-[#1c2434] dark:text-white">
            La manera más fácil y rápida de generar tus constancias de
            habilidades (DC-3).
          </h4>

          <div className="flex flex-col items-center justify-center md:text-4xl sm:text-3xl text-2xl font-[600] space-y-4">
            <h3 className="md:py-4 py-0">DC-3 Seguro es:</h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
