'use client';
import React from "react";
import Image from "next/image";

const projectSteps = [
  {
    title: "Rescate",
    description:
      "Identificamos y rescatamos perros en situación de calle o abandono.",
    icon: "🐾",
  },
  {
    title: "Rehabilitación",
    description:
      "Proporcionamos atención médica, vacunas y cuidados necesarios.",
    icon: "❤️",
  },
  {
    title: "Adopción",
    description: "Encontramos familias amorosas para cada perro rescatado.",
    icon: "🏡",
  },
];

const AboutProjectSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestro Proyecto de Rescate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabajamos incansablemente para transformar la vida de perros
            callejeros, brindándoles atención, cariño y la oportunidad de
            encontrar un hogar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen y estadísticas */}
          <div className="relative">
            <Image
              src="/perritos.abandonados.png"
              alt="Proyecto de Rescate"
              width={600}
              height={500}
              className="rounded-xl shadow-xl"
            />
            <div className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-blue-600">+50</div>
                <div className="text-sm text-gray-600">
                  Adopciones <br /> Exitosas
                </div>
              </div>
            </div>
          </div>

          {/* Pasos del proyecto */}
          <div>
            {projectSteps.map((step, index) => (
              <div
                key={step.title}
                className="mb-6 p-6 bg-gray-50 rounded-xl transition hover:shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{step.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectSection;
