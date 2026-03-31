import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';
import logoMiniatura from '../assets/logosminiatura.svg';

// Usamos import.meta.glob para obtener todas las imágenes estáticas de la secuencia
const frameModules = import.meta.glob('../assets/fotograma/*.jpg', { eager: true });

// Extraer las URLs y ordenarlas numéricamente basándonos en el nombre del archivo (ej. animado6_15.jpg)
const frameUrls = Object.entries(frameModules)
  .sort((a, b) => {
    const numA = parseInt(a[0].match(/animado6_(\d+)/)?.[1] || "0");
    const numB = parseInt(b[0].match(/animado6_(\d+)/)?.[1] || "0");
    return numA - numB;
  })
  .map(entry => (entry[1] as { default: string }).default);

export const NosotrosHero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  
  // Guardamos las imágenes de memoria para pintarlas súper rápido sin flicker
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  
  // Scrolling Vertical (Parallax): El fondo de desplaza verticalmente mientras sigue el Sticky
  const parallaxY = useTransform(smoothProgress, [0, 1], ["0%", "-15%"]);

  // Efecto deslizante horizontal del texto (CENTRADOS AL ENTRAR)
  const textLeftX = useTransform(smoothProgress, [0, 1], ["0%", "-40%"]);
  const textRightX = useTransform(smoothProgress, [0, 1], ["0%", "40%"]);

  // Pre-cargar todas las imágenes en bloque de forma resiliente
  useEffect(() => {
    let loadedCount = 0;
    const totalFrames = frameUrls.length;
    const imgObjects: HTMLImageElement[] = new Array(totalFrames);
    
    if (totalFrames === 0) return;

    frameUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        imgObjects[index] = img;
        if (loadedCount === totalFrames) {
          // Filtrar por si acaso alguna quedó undefined por error
          setImages(imgObjects.filter(i => i !== undefined));
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        console.error(`Error cargando fotograma: ${url}`);
        if (loadedCount === totalFrames) {
          setImages(imgObjects.filter(i => i !== undefined));
          setImagesLoaded(true);
        }
      };
    });
    
    return () => { setImages([]) }
  }, []);

  // Pintar el primer frame cuando acaban de cargar
  useEffect(() => {
    if (imagesLoaded && images.length > 0 && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
      }
    }
  }, [imagesLoaded, images]);

  // Dibujar sobre el canvas cuando avanza el scroll de manera DIRECTA sin inercia (Efecto ultra Rápido)
  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    if (!imagesLoaded || images.length === 0 || !canvasRef.current) return;
    
    let frameIndex = Math.floor(latest * (images.length - 1));
    if (frameIndex < 0) frameIndex = 0;
    if (frameIndex >= images.length) frameIndex = images.length - 1;

    const imgToDraw = images[frameIndex];
    if (imgToDraw && imgToDraw.complete) {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      requestRef.current = requestAnimationFrame(() => {
         const ctx = canvas.getContext('2d');
         if (ctx) {
           ctx.drawImage(imgToDraw, 0, 0, canvas.width, canvas.height);
         }
      });
    }
  });

  return (
    <>
      {/* Scroll MUCHO MÁS LARGO para permitir exprimir más fotogramas de la mujer lentamente */}
       <section ref={containerRef} className="w-full relative bg-transparent h-[400vh]" style={{ position: 'relative' }}>
        
        {/* Usamos la regla CSS estricta enviada (.elemento-pegajoso) para blindar el render en Safari y asegurar el z-index superior */}
        <div className="elemento-pegajoso left-0 w-full h-screen overflow-hidden flex flex-col justify-end pb-16 md:pb-20">
          
          {/* Canvas Background: Anclado perfectamente a top-0 (Rostro visible) y sobra espacio abajo (115vh) para soportar la subida */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-[115vh] z-0 bg-black"
            style={{ y: parallaxY }}
          >
            <canvas 
              ref={canvasRef}
              width={1920}
              height={1080}
              className="w-full h-full object-cover object-[center_15%] relative z-10"
              style={{ opacity: imagesLoaded ? 0.9 : 0 }}
            />
            {/* Si no han cargado las imágenes, mostramos un fondo base oscuro */}
            {!imagesLoaded && <div className="absolute inset-0 bg-black z-[-1]" />}
            {/* Gradientes rediseñados - Aseguramos que no tapen completamente al canvas */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 z-20 pointer-events-none"></div>
            <div className="absolute inset-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-black/80 to-transparent z-20 pointer-events-none"></div>
          </motion.div>

          <div className="w-full px-6 md:px-12 relative z-10 mb-12 flex flex-col items-center">
            
            {/* Split Title Animation */}
            <div className="w-full relative z-20 overflow-visible pointer-events-none text-center">
              <motion.div 
                style={{ x: textLeftX }} 
                className="w-full origin-center"
              >
                <h1 className="text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] xl:text-[9.5vw] font-title font-black tracking-tighter leading-[0.85] whitespace-nowrap pointer-events-auto uppercase text-white">
                  ACERCA DE
                </h1>
              </motion.div>

              <motion.div 
                style={{ x: textRightX }} 
                className="w-full origin-center mt-[-1vw]"
              >
                <h1 className="text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] xl:text-[9.5vw] mb-1 font-title font-black tracking-tighter leading-[0.85] whitespace-nowrap pointer-events-auto uppercase text-[#8253FF]">
                  FOCUS CREATIVE
                </h1>
              </motion.div>
            </div>

            {/* Static Subtitle (Fixed based on user request) */}
            <div className="relative inline-block mt-4 md:mt-6 max-w-max pointer-events-auto z-30">
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] text-white font-bold tracking-tight pb-2">
                Nuestra identidad creativa
              </p>
              <svg className="absolute bottom-0 left-0 w-[105%] h-4 text-[#8253FF] -ml-[2.5%]" preserveAspectRatio="none" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 9C70 3 190 -1 298 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>

          </div>

          {/* Bottom Marquee */}
          <div className="absolute bottom-0 left-0 w-full bg-[#8253FF] py-4 md:py-5 overflow-hidden z-30 border-t border-black/10">
            <div className="flex whitespace-nowrap animate-marquee items-center">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="flex items-center px-2 md:px-4 shrink-0">
                  <img 
                    src={logoMiniatura} 
                    alt="Focus Creative" 
                    className="h-8 md:h-12 w-auto object-contain mx-2 md:mx-4"
                  />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};
