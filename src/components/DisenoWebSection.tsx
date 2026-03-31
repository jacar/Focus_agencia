import React from 'react';
import { motion } from 'framer-motion';
import disenoWebImg from '../assets/diseñoweb.png';

export const DisenoWebSection: React.FC = () => {
  const items = [
    { name: 'Landing pages', desc: 'que enamoran' },
    { name: 'Tiendas online (E-commerce)', desc: 'que venden de verdad' },
    { name: 'Maquetas', desc: 'que enamoran desde el diseño' },
    { name: 'Apps móviles', desc: 'para que tu marca esté a un clic de distancia.' },
  ];

  return (
    <section id="diseno-web" className="bg-[#111111] w-full py-0">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT — Texto */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            {/* Título */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6 normal-case">
              <span className="text-white">DISEÑO </span>
              <span className="text-[#7C3AED]">WEB</span>
            </h2>

            {/* Descripción */}
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 font-normal max-w-md normal-case">
              ¿Necesitas una página web para mostrarle al mundo lo que haces? ¿O una app que haga más fácil la vida de tus clientes? Cuenta con nosotros. Creamos webs y apps justo como las imaginaste: funcionales y a la medida de tu marca.
            </p>

            {/* List + Arrow */}
            <div className="flex items-start gap-4">
              <span className="text-white text-2xl mt-1 flex-shrink-0 font-light hidden md:block">→</span>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/80 text-base md:text-lg normal-case leading-tight">
                    <span className="w-2 h-2 rounded-full bg-white/80 flex-shrink-0 mt-2" />
                    <span>
                      <strong className="font-extrabold">{item.name}</strong> <span className="font-normal">{item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — Imagen (flotando suavemente al igual que las anteriores) */}
          <div className="flex items-center justify-center order-1 md:order-2">
            <div className="w-full max-w-[550px] bg-[#EAEAEA] rounded-[32px] p-6 lg:p-10 flex items-center justify-center aspect-[4/3] shadow-2xl">
              <motion.img
                src={disenoWebImg}
                alt="Diseño Web Focus Creative"
                className="w-full h-auto object-contain drop-shadow-2xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1 // Desfase sutil
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
