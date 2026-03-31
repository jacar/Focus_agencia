import React from 'react';
import { ServiciosHero } from '../components/ServiciosHero';

import { SocialMediaSection } from '../components/SocialMediaSection';
import { DisenoGraficoSection } from '../components/DisenoGraficoSection';
import { DisenoWebSection } from '../components/DisenoWebSection';
import { ProduccionAudiovisualSection } from '../components/ProduccionAudiovisualSection';
import { AsesoriasMetaSection } from '../components/AsesoriasMetaSection';
import { ClientesCarousel } from '../components/ClientesCarousel';



export const ServiciosPage: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <ServiciosHero />

      {/* Espacio en blanco de 90px */}
      <div className="h-[90px] bg-white w-full"></div>

      {/* Social Media — diseño pixel-perfect */}
      <SocialMediaSection />

      {/* Espacio de 90px */}
      <div className="h-[90px] bg-white w-full"></div>

      {/* Diseño Gráfico — diseño pixel-perfect */}
      <DisenoGraficoSection />

      {/* Espacio de 90px */}
      <div className="h-[90px] bg-white w-full"></div>

      {/* Clientes Carrusel */}
      <ClientesCarousel />

      {/* Espacio de 90px */}
      <div className="h-[90px] bg-white w-full"></div>

      {/* Diseño Web — diseño pixel-perfect */}
      <DisenoWebSection />

      {/* Espacio de 90px */}
      <div className="h-[90px] bg-white w-full"></div>

      {/* Producción Audiovisual — diseño pixel-perfect */}
      <ProduccionAudiovisualSection />

      {/* Espacio de 90px */}
      <div className="h-[90px] bg-white w-full"></div>

      {/* Asesorías y Meta Ads (Sección Dividida) */}
      <AsesoriasMetaSection />

      {/* Espacio de 90px */}
      <div className="h-[90px] bg-white w-full"></div>

      {/* Botón MÁS INFORMACIÓN (CTA a Contacto) */}
      <div className="bg-white w-full flex justify-center pb-24">
        <a 
          href="/contacto" 
          className="bg-[#7C3AED] hover:bg-[#6D28D9] transition-all hover:scale-105 active:scale-95 text-white font-black text-lg md:text-xl lg:text-2xl px-12 md:px-16 py-4 md:py-5 rounded-full uppercase tracking-wider drop-shadow-xl"
        >
          MÁS INFORMACIÓN
        </a>
      </div>
    </main>
  );
};
