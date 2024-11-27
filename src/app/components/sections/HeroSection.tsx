import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 to-blue-200 py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Rescatando Vidas, Transformando Corazones
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Nuestra misión es rescatar, rehabilitar y encontrar hogares amorosos
            para perros callejeros.
          </p>
          <a
            href="#donate"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 text-lg font-semibold"
          >
            Dona Ahora
          </a>
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/hero.perrito.png"
            alt="Perro rescatado"
            width={600}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
