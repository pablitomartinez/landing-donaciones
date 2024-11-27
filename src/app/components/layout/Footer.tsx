'use client';
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: "/icons/facebook.svg",
      href: "https://facebook.com/rescatepeludo",
    },
    {
      name: "Instagram",
      icon: "/icons/instagram.svg",
      href: "https://instagram.com/rescatepeludo",
    },
    {
      name: "Twitter",
      icon: "/icons/tiktok.svg",
      href: "https://twitter.com/rescatepeludo",
    },
  ];

  const quickLinks = [
    { label: "Inicio", href: "#home" },
    { label: "Sobre Nosotros", href: "#about" },
    { label: "Donar", href: "#donate" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Columna de Información */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Rescate Peludo</h3>
          <p className="text-gray-400 mb-4">
            Nuestra misión es rescatar, rehabilitar y encontrar hogares amorosos
            para perros callejeros.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition"
              >
                <img src={social.icon} alt={social.name} className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>

        {/* Columna de Links Rápidos */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Links Rápidos</h4>
          <nav className="space-y-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-400 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Columna de Contacto */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contacto</h4>
          <address className="not-italic text-gray-400">
            <p>Dirección: Calle Ejemplo 123</p>
            <p>Teléfono: +54 9 11 1234-5678</p>
            <p>Email: info@rescatepeludo.org</p>
          </address>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Rescate Peludo. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
