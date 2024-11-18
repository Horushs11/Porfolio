import miFoto from '../../assets/images/mi-foto.jpg';

const Inicio = () => {
  return (
    <section id="inicio" className="min-h-screen flex flex-col items-center justify-center text-center">
      <img src={miFoto} alt="Foto de Roberto" className="w-32 h-32 rounded-full mb-4" />
      <h1 className="text-4xl text-pink-500 mb-2">Roberto Moreno</h1>
      <p className="text-cyan-400 mb-4">Bienvenido a mi portafolio como desarrollador front-end</p>
      <a href="/src/assets/CV-Roberto-1910.pdf" download className="bg-cyan-400 text-[#0d0d2b] py-2 px-4 rounded-full hover:bg-pink-500">
        Descargar mi CV
      </a>
    </section>
  );
};

export default Inicio;