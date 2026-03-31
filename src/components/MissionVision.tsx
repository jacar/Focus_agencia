import React, { useRef } from 'react';
import camara from '../assets/camara.png';
import clickSound from '../assets/clic.mp3';

export const MissionVision: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleCameraClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <section className="py-24 bg-[#7c60ff] overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 md:px-8">
        {/* Hidden audio element */}
        <audio ref={audioRef} src={clickSound} preload="auto" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          
          {/* Mission Card */}
          <div className="bg-[#131313] rounded-[40px] md:rounded-[50px] p-8 md:p-16 relative flex flex-col gap-6 md:gap-8 group">
            <div className="relative inline-block w-fit">
              <span className="text-white text-lg md:text-3xl font-bold block mb-1 md:mb-2 font-main">Nuestra</span>
              <h2 className="text-[#a18aff] text-5xl md:text-8xl font-black tracking-tight leading-none uppercase font-main">Misión</h2>
              
              {/* Brush Underline - Artistic SVG */}
              <div className="absolute -bottom-4 left-0 w-full opacity-90">
                <svg viewBox="0 0 300 15" className="w-full h-auto text-white fill-current">
                  <path d="M5,10 Q60,2 150,8 T295,10" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            
            <p className="text-white text-base md:text-[1.35rem] leading-[1.6] font-normal mt-4 md:mt-6 font-main text-left md:text-justify">
              Impulsar el crecimiento de marcas, organizaciones y proyectos a través de soluciones integrales en comunicación, diseño y contenido digital, desarrollando estrategias creativas y producción de contenido que fortalezcan la presencia digital y aporten valor a sus objetivos de marca.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#131313] rounded-[40px] md:rounded-[50px] p-8 md:p-16 relative flex flex-col gap-6 md:gap-8 group mt-16 md:mt-0">
            {/* Camera Sticker Asset */}
            <div 
              className="absolute -top-16 -right-2 md:-top-24 md:-right-8 w-32 md:w-48 lg:w-[20rem] z-30 pointer-events-auto animate-float-3d cursor-pointer active:scale-95 transition-transform group/cam"
              onClick={handleCameraClick}
            >
              <div className="relative">
                {/* Visual Invitation (Tooltip) */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] md:text-xs font-bold py-1 px-3 rounded-full opacity-0 group-hover/cam:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                  ¡Haz clic aquí! 📸
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                </div>

                {/* Constant Pulsing Hint for Attention - Now centered on lens */}
                <div className="absolute top-[48%] left-[33%] -translate-x-1/2 -translate-y-1/2 bg-white/40 p-2.5 rounded-full animate-pulse border border-white/60 z-50 pointer-events-none">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>

                {/* Lens Flare Effect */}
                <div className="absolute top-[45%] left-[30%] w-16 h-16 bg-white rounded-full blur-xl opacity-0 animate-lens-flare z-40"></div>
                <div className="absolute top-[48%] left-[33%] w-4 h-4 bg-white rounded-full blur-sm opacity-0 animate-lens-flare z-40"></div>

                {/* Click Flash Effect */}
                <div className="absolute inset-0 bg-white rounded-full opacity-0 group-active/cam:animate-ping pointer-events-none"></div>

                {/* Thick White "Sticker" Glow/Outline */}
                <img 
                  src={camara} 
                  alt="Camera Asset" 
                  className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                  style={{
                    filter: "drop-shadow(3px 3px 0 white) drop-shadow(-3px -3px 0 white) drop-shadow(3px -3px 0 white) drop-shadow(-3px 3px 0 white)"
                  }}
                />
              </div>
            </div>

            <div className="relative inline-block w-fit z-10">
              <span className="text-white text-lg md:text-3xl font-bold block mb-1 md:mb-2 font-main">Nuestra</span>
              <h2 className="text-[#a18aff] text-5xl md:text-8xl font-black tracking-tight leading-none uppercase font-main">Visión</h2>
              
              {/* Brush Underline - Artistic SVG */}
              <div className="absolute -bottom-4 left-0 w-full opacity-90">
                <svg viewBox="0 0 300 15" className="w-full h-auto text-white fill-current">
                  <path d="M5,8 Q70,12 160,5 T295,8" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            
            <p className="text-white text-base md:text-[1.35rem] leading-[1.6] font-normal mt-4 md:mt-6 font-main z-10 text-left md:text-justify">
              Consolidarnos como una agencia creativa reconocida por ofrecer soluciones integrales en diseño y comunicación digital, destacándonos por la calidad creativa de nuestras estrategias y el valor estratégico que aportamos a cada proyecto.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
