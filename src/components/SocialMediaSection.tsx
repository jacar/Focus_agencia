import React from 'react';
import { motion } from 'framer-motion';
import pro1 from '../assets/pro1.png';

export const SocialMediaSection: React.FC = () => {
  const items = [
    'Creación de Contenido',
    'Administración de Redes Sociales',
    'Diseño Gráfico',
    'Copy Writing',
    'Postproducción Audiovisual',
    'Estrategia',
  ];

  return (
    <section id="social-media" className="bg-[#111111] w-full py-0">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT — Texto */}
          <div className="flex flex-col justify-center">
            {/* Título */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6 normal-case">
              <span className="text-white">SOCIAL </span>
              <span className="text-[#7C3AED]">MEDIA</span>
            </h2>

            {/* Descripción */}
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 font-normal max-w-md normal-case">
              Nos encargamos de tus redes: las creamos, cuidamos y hacemos crecer con contenido con tu sello. Cada post tiene estrategia y estilo para llevar tu negocio al siguiente nivel.
            </p>

            {/* Arrow + lista */}
            <div className="flex items-start gap-4">
              <span className="text-white text-2xl mt-1 flex-shrink-0">→</span>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/80 text-base md:text-lg font-medium normal-case">
                    <span className="w-2 h-2 rounded-full bg-white/80 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — Imagen sobre fondo salmón */}
          <div className="flex items-center justify-center">
            <div className="bg-[#F5A882] rounded-[32px] p-6 md:p-8 flex items-center justify-center w-full max-w-[500px] aspect-[1/1]">
              <motion.img
                src={pro1}
                alt="Social Media Focus Creative"
                className="w-full h-full object-contain drop-shadow-2xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
