import React from 'react';
import { motion } from 'framer-motion';
import metaImg from '../assets/meta.png';

export const AsesoriasMetaSection: React.FC = () => {
  const asesoriasList = [
    'Cierre de ventas',
    'Plan de mercadeo',
    'Estudio de mercados',
    'Finanzas para emprendedores',
    'Proyecciones empresariales',
    'Estrategias para Redes Sociales',
  ];

  return (
    <section id="asesorias-meta" className="bg-[#111111] w-full py-0">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* COLUMNA IZQUIERDA — ASESORIAS */}
          <div className="flex flex-col">
            {/* Título ASESORIAS */}
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none mb-6 normal-case text-white">
              ASESORIAS
            </h2>

            {/* Texto ASESORIAS */}
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 font-normal text-justify">
              Tener una marca no basta: necesitas conocer a tu público, dominar redes, gestionar tus finanzas y proyectarte. Nuestras asesorías te guían con estrategia y acompañamiento.
            </p>

            {/* Lista + Flecha */}
            <div className="flex items-start gap-4">
              <span className="text-white text-3xl mt-1 flex-shrink-0 font-light hidden md:block">→</span>
              <ul className="space-y-1">
                {asesoriasList.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/80 text-base md:text-lg normal-case">
                    <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                    <span className="font-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUMNA DERECHA — META ADS */}
          <div className="flex flex-col">
            {/* Título META ADS */}
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none mb-6 normal-case text-[#7C3AED]">
              META ADS
            </h2>

            {/* Texto META ADS */}
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 font-normal text-justify">
              En Focus usamos Meta Ads para que tu marca deje de hablarle a todo el mundo y empiece a llegar a quien sí importa. Creamos, optimizamos y analizamos campañas pensadas para atraer, convertir y vender, con estrategia real y decisiones basadas en datos, no en corazonadas.
            </p>

            {/* Imagen + Flecha */}
            <div className="flex items-center gap-6 mt-4">
              <div className="flex-1">
                <motion.img
                  src={metaImg}
                  alt="Meta Ads Focus Creative"
                  className="w-full max-w-[320px] h-auto object-contain cursor-pointer"
                  style={{ transformPerspective: 1000 }}
                  animate={{ y: [-5, 5, -5] }}
                  whileHover={{ rotateY: 180, scale: 1.05 }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotateY: {
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                    scale: {
                      duration: 0.3,
                    }
                  }}
                />
              </div>
              <span className="text-white text-3xl flex-shrink-0 font-light hidden md:block">←</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
