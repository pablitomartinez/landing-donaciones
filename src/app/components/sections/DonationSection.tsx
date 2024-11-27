'use client';
import React, { useState } from "react";
// import { createPreference } from "../../lib/mercadopago";

const DonationSection: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);

  const handleDonation = async () => {
    try {
      const paymentLink = await createPreference(amount);
      window.location.href = paymentLink;
    } catch (error) {
      console.error("Error procesando donación", error);
    }
  };

  return (
    <section id="donate" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Ayúdanos a Seguir Rescatando Vidas
        </h2>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Monto de la Donación
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Ingresa el monto"
            />
          </div>
          <button
            onClick={handleDonation}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Donar Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
