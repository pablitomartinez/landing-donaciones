'use client';
import React from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  avatar: string;
  quote: string;
  role: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "María González",
    avatar: "/images/avatars/maria.jpg",
    quote:
      "Adopté a Luna en Rescate Peludo y ha sido la mejor decisión de mi vida. Están comprometidos con el bienestar de cada perro.",
    role: "Adoptante",
  },
  {
    name: "Carlos Rodríguez",
    avatar: "/images/avatars/carlos.jpg",
    quote:
      "Como voluntario, he visto de primera mano el increíble trabajo que hacen para rescatar y rehabilitar perros callejeros.",
    role: "Voluntario",
  },
  {
    name: "Ana Sánchez",
    avatar: "/images/avatars/ana.jpg",
    quote:
      "Mis donaciones ayudan directamente a salvar vidas. Cada contribución marca la diferencia para estos perritos.",
    role: "Donante",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Historias que Inspiran
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce las experiencias de personas que han sido parte de nuestra
            misión de rescate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-xl shadow-md transition hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="italic text-gray-600">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
