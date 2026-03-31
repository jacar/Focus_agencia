import React from 'react';
import clientes from '../assets/clientes.png';

export const ClientesCarousel: React.FC = () => {
  return (
    <section className="w-full bg-[#3B2885] py-12 flex items-center justify-center">
      <div className="container mx-auto px-4 flex justify-center">
        <img
          src={clientes}
          alt="Nuestros Clientes"
          className="h-20 md:h-28 lg:h-32 w-auto object-contain"
        />
      </div>
    </section>
  );
};

