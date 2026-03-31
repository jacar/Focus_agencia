import React from 'react';
import { motion } from 'framer-motion';
import audiovisualImg from '../assets/audiovisual.png';

export const ProduccionAudiovisualSection: React.FC = () => {
  const items = [
    { name: 'Videos con dron', desc: 'para mostrar tu empresa desde otra perspectiva.' },
    { name: 'Fotografías y video profesionales', desc: 'para resaltar cada detalle.' },
  ];

  return (
    <section id="produccion-audiovisual" className="bg-white w-full py-0">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT — Imagen (flotando suavemente al igual que las anteriores) */}
          <div className="flex items-center justify-center order-2 md:order-1">
            <div className="w-full max-w-[550px] bg-[#F5F5F5] rounded-[32px] p-6 lg:p-10 flex items-center justify-center aspect-[4/3] shadow-lg">
              <motion.img
                src={audiovisualImg}
                alt="Producción Audiovisual Focus Creative"
                className="w-full h-auto object-contain drop-shadow-xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2 // Desfase sutil
                }}
              />
            </div>
          </div>

          {/* RIGHT — Texto */}
          <div className="flex flex-col justify-center order-1 md:order-2">
            {/* Título */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6 normal-case">
              <span className="text-[#111111]">PRODUCCIÓN </span>
              <br className="hidden lg:block" />
              <span className="text-[#7C3AED]">AUDIOVISUAL</span>
            </h2>

            {/* Descripción */}
            <p className="text-[#111111]/70 text-base md:text-lg leading-relaxed mb-8 font-normal max-w-md normal-case">
              Te ayudamos a mostrar lo mejor de tus productos o servicios con fotos y videos de calidad, pensados para conectar con tus clientes y darle a tu empresa una imagen profesional.
            </p>

            {/* Lista + Flecha (apuntando a la izquierda) */}
            <div className="flex items-start gap-4">
              <span className="text-[#111111] text-2xl mt-1 flex-shrink-0 font-light hidden md:block">←</span>
              <ul className="space-y-4">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#111111] text-base md:text-lg normal-case leading-tight">
                    <span className="w-2 h-2 rounded-full bg-[#111111] flex-shrink-0 mt-2" />
                    <span>
                      <strong className="font-extrabold">{item.name}</strong> <span className="font-normal text-[#111111]/80">{item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
