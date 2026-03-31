import React from 'react';
import { NosotrosHero } from '../components/NosotrosHero';

import { AgencyBrief } from '../components/AgencyBrief';
import { MissionVision } from '../components/MissionVision';
import { Team } from '../components/Team';
import { TeamRoles } from '../components/TeamRoles';

export const NosotrosPage: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* NosotrosHero arranca desde top-0, el header flota encima igual que en Home */}
      <div className="bg-[#1A1A1A] relative">
        <NosotrosHero />
      </div>

      {/* Main content area */}
      <div className="mt-0 animate-in fade-in duration-1000 delay-300">
        {/* New Agency Brief section matching the mockup */}
        <AgencyBrief />
        
        {/* Mission and Vision cards on lavender background */}
        <MissionVision />

        {/* Espacio en blanco para separar las secciones de color sólido */}
        <div className="h-10 lg:h-16 bg-white"></div>
        
        {/* Updated cinematic Team section */}
        <Team />

        {/* 270px White Space Between Team and Roles as requested */}
        <div className="h-[60px] bg-white w-full" />

        {/* New Roles Grid section (Black background, brush pills) */}
        <TeamRoles />

        {/* Espacio en blanco y Botón CONOCE NUESTROS SERVICIOS (Sin link) */}
        <div className="bg-white w-full py-20 flex justify-center">
          <button 
            type="button"
            className="bg-[#7C3AED] hover:bg-[#6D28D9] transition-all hover:scale-105 active:scale-95 text-white font-black text-lg md:text-xl lg:text-2xl px-12 md:px-16 py-4 md:py-5 rounded-full uppercase tracking-wider drop-shadow-xl cursor-default pointer-events-none"
          >
            CONOCE NUESTROS SERVICIOS
          </button>
        </div>
      </div>

    </main>
  );
};
