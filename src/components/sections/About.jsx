const About = () => {
  return (
    <section id="sobre-mi" className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto max-w-4xl bg-[#252547] p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-pink-500 text-center mb-6">Sobre mí</h2>
        <p className="text-cyan-400">
          Soy una persona resolutiva, creativa y proactiva, con gran capacidad para trabajar en equipo. Me encanta aprender cosas nuevas y enfrentarme a desafíos que me permitan crecer profesionalmente.
        </p>
        <p className="text-cyan-400 mt-4">
          Me gusta explorar nuevas tecnologías, crear pequeños proyectos personales y seguir aprendiendo sobre diseño UI/UX para mejorar la experiencia de usuario en mis desarrollos.
        </p>
        <p className="text-cyan-400 mt-4">
          Puedes conocer más de mí en <a href="https://www.linkedin.com/in/roberto-moreno-iglesias" className="text-pink-500">Linkedin</a>.
        </p>
      </div>
    </section>
  );
};

export default About;
