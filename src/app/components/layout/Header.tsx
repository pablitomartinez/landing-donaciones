'use client';
import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Inicio", href: "#home" },
    { label: "Sobre el Proyecto", href: "#about" },
    { label: "Donar", href: "#donate" },
    { label: "Testimonios", href: "#testimonials" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <header className="bg-black shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.amigos.del.animal.jpg"
              alt="Logo Fundación"
              className="h-20 w-auto mr-3"
            />
            <span className="text-xl font-bold text-yellow-300">
              Rescate Peludo
            </span>
          </Link>
        </div>

        {/* Menú de navegación para pantallas grandes */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-yellow-300 hover:text-blue-600 transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botón de donación */}
        <div className="hidden md:block">
          <Link
            href="#donate"
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
          >
            Donar Ahora
          </Link>
        </div>

        {/* Menú móvil - Hamburguesa */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="px-4 pt-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#donate"
              className="block w-full text-center mt-4 px-4 py-2 bg-blue-600 text-white rounded-full"
              onClick={toggleMenu}
            >
              Donar Ahora
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
