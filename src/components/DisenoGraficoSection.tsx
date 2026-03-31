import React from 'react';
import { motion } from 'framer-motion';
import pro2 from '../assets/pro2.png';

export const DisenoGraficoSection: React.FC = () => {
  const items = [
    { name: 'Branding:', desc: 'logo, manual de marca y personalidad completa' },
    { name: 'Papelería:', desc: 'tarjetas, agendas, calendarios' },
    { name: 'Publicidad:', desc: 'volantes, flyers, menús, invitaciones' },
    { name: 'Y más:', desc: 'personajes, packaging, portafolios, stickers.' },
  ];

  return (
    <section id="diseno-grafico" className="bg-white w-full py-0">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT — Imagen (flotando suavemente al igual que pro1) */}
          <div className="flex items-center justify-center order-2 md:order-1">
            <div className="w-full max-w-[550px]">
              <motion.img
                src={pro2}
                alt="Diseño Gráfico Focus Creative"
                className="w-full h-auto object-contain drop-shadow-xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5 // Desfase sutil para que no floten idéntico
                }}
              />
            </div>
          </div>

          {/* RIGHT — Texto */}
          <div className="flex flex-col justify-center order-1 md:order-2">
            {/* Título */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6 normal-case">
              <span className="text-[#111111]">DISEÑO </span>
              <span className="text-[#7C3AED]">GRÁFICO</span>
            </h2>

            {/* Descripción */}
            <p className="text-[#111111]/70 text-base md:text-lg leading-relaxed mb-8 font-normal max-w-md normal-case">
              En Focus damos forma a tu esencia con diseños que se sienten, se notan y se recuerdan. Creamos todo lo que tu marca necesita para verse increíble en todos lados.
            </p>

            {/* Lista + Flecha (Flecha apuntando hacia la izquierda a la imagen) */}
            <div className="flex items-start gap-4">
              {/* Contenedor de flecha rotada o texto */}
              <span className="text-[#111111] text-2xl mt-1 flex-shrink-0 font-light hidden md:block">←</span>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#111111] text-base md:text-lg normal-case leading-tight">
                    <span className="w-2 h-2 rounded-full bg-[#111111] flex-shrink-0 mt-2" />
                    <span>
                      <strong className="font-extrabold">{item.name}</strong> <span className="text-[#111111]/80 font-medium">{item.desc}</span>
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
