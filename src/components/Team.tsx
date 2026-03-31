import React from 'react';
import equipoImage from '../assets/equipo.jpg';

export const Team: React.FC = () => {
  return (
    <section className="bg-black overflow-hidden border-t border-white/5">
      <div className="flex flex-col md:flex-row min-h-[500px] lg:min-h-[700px]">
        
        {/* Left Column: Black & White Team Photo */}
        <div className="w-full md:w-1/2 relative bg-[#0a0a0a]">
          <img 
            src={equipoImage} 
            alt="Nuestro Equipo" 
            className="w-full h-full object-cover grayscale brightness-90 contrast-125 saturate-0"
          />
          {/* Subtle noise or gradient could be added here if needed */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-[#131313]/50"></div>
        </div>

        {/* Right Column: Copy on Black Background */}
        <div className="w-full md:w-1/2 bg-[#131313] flex items-center justify-center p-12 md:p-16 lg:p-24">
          <div className="max-w-[540px] flex flex-col items-end">
            
            {/* Title - Bold and Right Aligned -> Centered on Mobile */}
            <h2 className="flex flex-col items-center md:items-end leading-[0.9] mb-8 md:mb-12 w-full">
              <span className="text-white text-4xl lg:text-7xl font-bold tracking-tight uppercase font-main">
                Nuestro
              </span>
              <span className="text-[#a18aff] text-5xl lg:text-9xl font-black tracking-tighter uppercase font-main">
                Equipo
              </span>
            </h2>

            {/* Paragraph - Justified for a clean block look -> Left on Mobile */}
            <p className="text-white text-base md:text-lg lg:text-[1.4rem] leading-[1.7] font-medium text-left md:text-justify font-main opacity-90">
              En Focus Creative contamos con un equipo de profesionales especializados que trabajan de forma integral para construir marcas sólidas y contenido de alto nivel. Cada área se conecta para crear estrategias creativas bien pensadas y ejecutadas con calidad.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
