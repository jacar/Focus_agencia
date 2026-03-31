import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import img1 from '../assets/1.png';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Parallax del Imagen: Usamos el resorte (smooth) para mantener el "lag" elegante en las personas
  const imageY = useTransform(smoothProgress, [0, 1], ["0%", "60%"]);
  
  // Movimiento del Texto: Usamos scrollYProgress PURO sin retrasos de resorte para que reaccione instantáneamente al subir.
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  
  // Efecto Rápido y Simétrico: Se voltea a vertical y se oculta sin latencia en ambas direcciones
  const textRotate = useTransform(scrollYProgress, [0, 0.25], [0, 90]);
  const textOpacity = useTransform(scrollYProgress, [0.25, 0.6], [1, 0]);
  
  // Aparece gradual cuando se empieza a dar scroll
  const lottieOpacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);

  // Dibujo efecto tiza de la línea inferior al hacer scroll
  const lineProgress = useTransform(smoothProgress, [0, 0.4], [0, 1]);

  return (
    <section ref={containerRef} id="inicio" className="relative w-full h-[100dvh] min-h-[700px] bg-white overflow-hidden pt-12 md:pt-20">
      
      {/* Background/Visual Area - Right aligned image (z-20) */}
      <motion.div 
        style={{ y: imageY }}
        className="absolute bottom-0 right-0 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[45%] h-[60%] md:h-[85%] flex justify-end items-end z-20 pointer-events-none"
      >
        {/* Lottie Animation: Aparece haciendo scroll y se dibuja DETRÁS de las personas */}
        <motion.div 
          style={{ opacity: lottieOpacity }}
          className="absolute inset-0 w-full h-full flex justify-center items-center -z-10 scale-[1.3] md:scale-[1.5]"
        >
          <DotLottieReact
            src="https://lottie.host/b9b925e8-991f-46c6-85eb-0a982ad37603/MHRpMWiPKw.lottie"
            loop
            autoplay
          />
        </motion.div>

        <img
          src={img1}
          alt="Team Focus Creative"
          className="w-full h-full object-contain object-bottom drop-shadow-2xl translate-x-[5%] md:translate-x-0 relative z-10"
        />
      </motion.div>

      {/* Contenedor del Texto */}
      <div className="container mx-auto px-6 h-full relative z-10 w-full">
        {/* Text Area (Soluciona el espacio blanco, bajando el texto un poco más según solicitado) */}
        <div className="w-full absolute top-[15%] sm:top-[18%] md:top-[240px] left-0 z-0 overflow-visible pointer-events-none">
          <motion.div 
            style={{ x: textX, rotate: textRotate, opacity: textOpacity }} 
            className="w-full md:w-[60%] lg:w-[55%] xl:w-[50%] origin-left"
          >
            <h1 className="text-[15vw] sm:text-[14vw] md:text-[12vw] lg:text-[11vw] xl:text-[9.5vw] mb-1 font-title font-black tracking-tighter leading-[0.85] whitespace-nowrap text-[#1A1A1A] pointer-events-auto uppercase">
              AGENCIA DE <br />
              <span className="text-[#8B5CF6]">MARKETING</span>
            </h1>
            <div className="relative inline-block mt-4 md:mt-8 pointer-events-auto">
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] text-[#1A1A1A] font-bold tracking-tight pb-3">
                Crecemos con tu empresa
              </p>
              <svg className="absolute bottom-0 left-0 w-[105%] h-3 md:h-5 text-[#8B5CF6] -ml-[2.5%]" preserveAspectRatio="none" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                  style={{ pathLength: lineProgress }}
                  d="M2 9C70 3 190 -1 298 7" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

