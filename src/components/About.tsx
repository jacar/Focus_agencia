import React from 'react';
import yeralImage from '../assets/yeral.png';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="relative bg-white overflow-visible z-20">
      <div className="container mx-auto max-w-7xl pt-0 pb-0 relative">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-10">
          
          {/* Visual Side (Left) */}
          <div className="relative w-full md:w-1/2 flex items-end justify-center md:justify-start pb-0">
            
            {/* The Image Subject */}
            <div className="relative z-10 w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px] -mt-6 md:-mt-10 lg:-mt-14 pointer-events-none">
              <img 
                src={yeralImage}
                alt="Creative Director"
                className="w-full h-auto object-contain relative z-10"
              />
            </div>
          </div>

          {/* Text Side (Right) */}
          <div className="w-full md:w-1/2 relative z-10 px-6 md:px-0 py-4 md:py-16 flex items-center justify-center md:justify-end">
            <div className="max-w-[500px]">
              <p className="text-[15px] md:text-base lg:text-[17px] leading-[1.8] text-gray-800 font-medium text-center md:text-justify">
                Bienvenidos a <span className="font-extrabold text-black">Focus Creative</span>, una agencia especializada en marketing, publicidad y diseño gráfico, dedicada a transformar la esencia de tu negocio en resultados de alto impacto. Con más de 6 años de trayectoria acompañando a empresas y emprendimientos de diversos sectores, nos enfocamos en construir conexiones reales que lleven tu marca a otro nivel.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
