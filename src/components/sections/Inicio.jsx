const Inicio = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Contenedor de la imagen con borde cyan */}
        <div className="w-32 h-32 rounded-full border-2 border-cyan-400 mb-8 overflow-hidden">
          <img
            src="src\assets\images\mi-foto.jpg"
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Nombre */}
        <h1 className="text-5xl font-bold text-pink-500 mb-6 tracking-wider">
          Roberto Moreno
        </h1>
  
        {/* Texto descriptivo */}
        <p className="text-xl text-cyan-400 mb-12 tracking-wide">
          Bienvenido a mi portfolio como desarrollador front-end
        </p>
  
        {/* Botón de descarga */}
        <button
          onClick={() => window.open('/assets/CV-Roberto-1910.pdf')}
          className="bg-cyan-400 text-[#0D0D1E] px-8 py-3 rounded-full hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 tracking-wide"
        >
          Descargar mi cv
        </button>
      </div>
    );
  };
  
  export default Inicio;