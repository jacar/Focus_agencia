import React from 'react';
import { motion } from 'framer-motion';
import metaImg from '../assets/meta.png';

export const MetaAdsSection: React.FC = () => {
  const items = [
    { name: 'Campañas:', desc: 'en Facebook & Instagram' },
    { name: 'Segmentación:', desc: 'avanzada de audiencias' },
    { name: 'Creación de anuncios:', desc: 'diseño gráfico y copywriting' },
    { name: 'Optimización:', desc: 'A/B Testing continuo' },
    { name: 'Análisis:', desc: 'medición y reportes de rendimiento' },
  ];

  return (
    <section id="meta-ads" className="bg-[#111111] w-full py-0">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT — Texto */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            {/* Título */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6 normal-case">
              <span className="text-white">META </span>
              <span className="text-[#7C3AED]">ADS</span>
            </h2>

            {/* Descripción (Texto justificado según solicitud) */}
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 font-normal max-w-md normal-case text-justify">
              Transformamos tu presupuesto publicitario en resultados medibles. Creamos e implementamos estrategias que generan conversiones reales: atraemos más leads cualificados, impulsamos tus ventas y maximizamos el retorno de tu inversión mes a mes.
            </p>

            {/* List + Arrow */}
            <div className="flex items-start gap-4">
              <ul className="space-y-4">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/80 text-base md:text-lg normal-case leading-tight">
                    <span className="w-2 h-2 rounded-full bg-white/80 flex-shrink-0 mt-2" />
                    <span>
                      <strong className="font-extrabold">{item.name}</strong> <span className="font-normal text-white/60">{item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
              {/* Contenedor de flecha rotada o texto */}
              <span className="text-white text-2xl mt-1 flex-shrink-0 font-light hidden md:block ml-4">→</span>
            </div>
          </div>

          {/* RIGHT — Imagen (flotando suavemente al igual que las anteriores) */}
          <div className="flex items-center justify-center order-1 md:order-2">
            <div className="w-full max-w-[550px] bg-[#EAEAEA] rounded-[32px] p-6 lg:p-10 flex items-center justify-center aspect-[4/3] shadow-2xl">
              <motion.img
                src={metaImg}
                alt="Meta Ads Focus Creative"
                className="w-full h-auto object-contain drop-shadow-2xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6 // Desfase sutil
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
