const Education = () => {
  return (
    <section id="educacion" className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto max-w-3xl bg-[#252547] p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-pink-500 text-center mb-6">Educación</h2>
        <ul className="text-cyan-400 space-y-4">
          <li>2018 - 2020: IES Dionisio Aguado - Bachillerato Ciencias Sociales</li>
          <li>2022 - 2024: Medac - Desarrollo de aplicaciones multiplataforma</li>
          <li>Certificados:</li>
          <ul className="list-disc ml-8">
            <li>Udemy - Desarrollo web ultra rápido con Astro</li>
            <li>Udemy - JavaScript Moderno Guía Definitiva</li>
          </ul>
        </ul>
      </div>
    </section>
  );
};

export default Education;
