import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import oso1 from '../assets/oso1.png';

export const ContactoPage: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textLeftX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const textRightX = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="flex-1 w-full bg-white flex flex-col pt-32 md:pt-40">
      
      {/* Top Hero Section */}
      <section ref={containerRef} className="w-full bg-white relative overflow-visible">
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch min-h-[450px]">
            
            <div className="flex flex-col justify-center max-w-lg z-40 py-16 md:py-24 relative overflow-visible pointer-events-none mt-12 md:pr-10">
              <div className="relative z-10">
                <motion.div style={{ x: textLeftX }} className="w-full">
                  <h1 className="text-[15vw] sm:text-[13vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[6.5vw] font-title font-black leading-[0.85] tracking-tighter text-[#121111] uppercase whitespace-nowrap">
                    IMPULSEMOS
                  </h1>
                </motion.div>
                <motion.div style={{ x: textRightX }} className="w-full -mt-2">
                  <h1 className="text-[15vw] sm:text-[13vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[6.5vw] font-title font-black leading-[0.85] tracking-tighter text-[#8253FF] uppercase whitespace-nowrap">
                    TU MARCA
                  </h1>
                </motion.div>
              </div>
              
              <div className="relative mb-10 mt-4 w-fit">
                 <p className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-bold text-black/80 pl-1">
                   Crecemos con tu empresa
                 </p>
                 {/* Curvy underline decoration */}
                 <svg className="absolute -bottom-4 left-0 w-[120%] h-5 text-[#8253FF]/60" viewBox="0 0 300 15" preserveAspectRatio="none" fill="none">
                    <path d="M5,12 C50,2 200,-2 295,12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                 </svg>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                 <a href="mailto:focuscreativecol@gmail.com" className="bg-[#8253FF] text-white font-bold py-3 px-8 rounded-full shadow-lg text-center w-full sm:w-auto text-base hover:bg-[#6e46d6] transition-colors">
                   focuscreativecol@gmail.com
                 </a>
                 <a href="tel:+573106446955" className="bg-[#8253FF] text-white font-bold py-3 px-8 rounded-full shadow-lg text-center w-full sm:w-auto text-base hover:bg-[#6e46d6] transition-colors">
                   +310 6446955
                 </a>
              </div>
            </div>

            <div className="relative flex justify-center md:justify-end items-start md:items-end h-full z-30 pointer-events-none -mt-20 sm:-mt-24 md:mt-0">
               {/* Image from folder 'oso1.png' - High z-index to stay in front of text (if needed) or behind based on user's previous preference */}
               {/* User now wants text in front, so this is z-30 and text is z-40 */}
               <img 
                 src={oso1} 
                 alt="Focus Contacto" 
                 className="w-[85%] sm:w-[70%] md:w-[110%] max-w-[650px] h-auto object-contain block relative md:-right-24 mx-auto md:mx-0 pointer-events-auto" 
               />
            </div>

          </div>
        </div>
      </section>

      {/* Middle Dark Form Section */}
      <section className="w-full bg-[#1A1A1A] py-24 px-6 z-20 relative">
        <div className="container mx-auto max-w-4xl text-center">
          
          <div className="flex flex-col lg:flex-row justify-center items-center gap-y-4 lg:gap-y-0 lg:gap-x-8 mb-10 px-6 w-full max-w-4xl mx-auto text-center">
            <span className="text-[#8253FF] text-base lg:text-xl font-bold uppercase tracking-wide block w-full lg:w-auto">Social Media</span>
            <span className="hidden lg:block text-white/20">|</span>
            <span className="text-white text-base lg:text-xl font-bold uppercase tracking-wide block w-full lg:w-auto">Diseño Gráfico</span>
            <span className="hidden lg:block text-white/20">|</span>
            <span className="text-[#8253FF] text-base lg:text-xl font-bold uppercase tracking-wide block w-full lg:w-auto">Diseño Web</span>
            <span className="hidden lg:block text-white/20">|</span>
            <span className="text-white text-base lg:text-xl font-bold uppercase tracking-wide block w-full lg:w-auto">Meta Ads</span>
            <span className="hidden lg:block text-white/20">|</span>
            <span className="text-[#8253FF] text-base lg:text-xl font-bold uppercase tracking-wide block w-full lg:w-auto">Asesorías</span>
            <span className="hidden lg:block text-white/20">|</span>
            <span className="text-white text-base lg:text-xl font-bold uppercase tracking-wide block w-full lg:w-auto">Producción Audiovisual</span>
          </div>
          
          <div className="w-2/3 md:w-1/2 h-px bg-white/20 mx-auto mb-10"></div>

          <p className="text-white/90 text-lg md:text-xl mb-12 leading-relaxed max-w-xl mx-auto font-medium">
            Completa el formulario y contáctanos.<br/>
            Es hora de llevar tu marca al siguiente nivel.
          </p>

          <form className="max-w-2xl mx-auto space-y-4 text-left">
            <input 
              type="text" 
              placeholder="Tu nombre" 
              className="w-full bg-white text-black px-6 py-3 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-[#8253FF] transition-all placeholder:text-[#9CA3AF] text-[15px]"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-white text-black px-6 py-3 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-[#8253FF] transition-all placeholder:text-[#9CA3AF] text-[15px]"
            />
            <input 
              type="tel" 
              placeholder="Télefono" 
              className="w-full bg-white text-black px-6 py-3 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-[#8253FF] transition-all placeholder:text-[#9CA3AF] text-[15px]"
            />
            
            {/* Custom static box matching the Figma 'Menú desplegable' visual exactly */}
            <div className="w-full bg-white rounded-[24px] px-6 py-5 flex flex-col items-start min-h-[180px]">
               <p className="text-[#9CA3AF] text-[15px] mb-1">Servicio de interes</p>
               <p className="text-[#9CA3AF] text-[13px] mb-1">*Menú desplegable*</p>
               <div className="flex flex-col text-[#9CA3AF] text-[13px] space-y-0.5 mt-1">
                 <span>Social Media</span>
                 <span>Diseño gráfico</span>
                 <span>Diseño web</span>
                 <span>Meta ADS</span>
                 <span>Asesorías</span>
                 <span>Producción audiovisual</span>
               </div>
            </div>

            <div className="flex justify-center mt-8">
              <button 
                type="submit" 
                className="bg-[#8253FF] text-white font-bold tracking-wide text-base px-24 py-3 rounded-full shadow-[0_4px_14px_rgba(130,83,255,0.4)] hover:bg-[#6e46d6] transition-transform hover:scale-105"
              >
                ENVIAR
              </button>
            </div>
          </form>

        </div>
      </section>

    </main>
  );
};
