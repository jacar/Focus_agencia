import React from 'react';
import osoImage from '../assets/oso.png';
import textoGlobo from '../assets/texto_globo.png';

export const AgencyBrief: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Image with rounded corners and grayscale */}
          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden rounded-[40px] md:rounded-[60px] shadow-2xl">
              <img 
                src={osoImage} 
                alt="Focus Creative Team" 
                className="w-full h-auto object-cover grayscale brightness-110 contrast-110"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-14">
            <div className="space-y-4 md:space-y-6">
              <p className="text-black text-base md:text-lg lg:text-[1.2rem] leading-[1.6] font-normal text-left">
                Somos una agencia creativa enfocada en el <span className="font-bold">desarrollo de soluciones integrales de comunicación y contenido digital</span> para marcas, organizaciones y proyectos con servicios como: desarrollo de estrategias, diseño gráfico, producción de contenido y piezas audiovisuales pensadas para fortalecer la identidad y presencia de cada marca.
              </p>
              <p className="text-black text-base md:text-lg lg:text-[1.2rem] leading-[1.6] font-normal text-left">
                Trabajamos desde la estrategia hasta la ejecución, transformando ideas y objetivos en contenido creativo, claro y bien estructurado. Cada proyecto que realizamos tiene una intención definida y responde a una estrategia.
              </p>
            </div>

            {/* Highlighted Asset: texto_globo.png (Includes pre-rendered text) */}
            <div className="relative mt-4 md:mt-8 flex items-center justify-center w-full">
              <div 
                className="relative w-full max-w-[500px] md:max-w-[850px] transition-all duration-500 hover:scale-[1.05]"
                style={{ transform: 'rotate(-3deg)', transformOrigin: 'center center' }}
              >
                <img 
                  src={textoGlobo} 
                  alt="Focus Creative Vision" 
                  className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-2xl scale-[0.9] md:scale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
