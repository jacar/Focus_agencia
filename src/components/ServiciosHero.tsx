import React from 'react';
import logoMiniatura from '../assets/logosminiatura.svg';
import bgImage from '../assets/headerservicios.png';

export const ServiciosHero: React.FC = () => {
  const rows = [
    [
      { label: 'SOCIAL MEDIA', purple: true },
      { label: 'DISEÑO GRÁFICO', purple: false },
      { label: 'DISEÑO WEB', purple: true },
    ],
    [
      { label: 'META ADS', purple: false },
      { label: 'ASESORÍAS', purple: true },
      { label: 'PRODUCCIÓN AUDIOVISUAL', purple: false },
    ],
  ];

  return (
    <>
      <section className="w-full relative bg-black h-[100dvh]">
        <div className="w-full h-full overflow-hidden flex flex-col">

          {/* Imagen de fondo */}
          <img
            src={bgImage}
            alt="Servicios Focus Creative"
            className="absolute inset-0 w-full h-full object-cover opacity-55"
          />

          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />

          {/* Contenido estático */}
          <div className="relative z-20 w-full h-full flex flex-col justify-center">
            <div className="pl-4 md:pl-12 pt-[120px]">

              {/* Etiqueta superior */}
              <p className="text-white/70 text-sm font-bold uppercase tracking-[0.4em] mb-2">
                NUESTROS
              </p>

              {/* Título grande */}
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] font-black tracking-tighter leading-[0.85] text-[#7C3AED] uppercase mb-6">
                SERVICIOS
              </h1>

              {/* Subtítulos en 2 líneas */}
              <div className="flex flex-col gap-1">
                {rows.map((row, rowIdx) => (
                  <p key={rowIdx} className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
                    {row.map((s, i) => (
                      <span key={i}>
                        <span className={s.purple ? 'text-[#7C3AED]' : 'text-white'}>
                          {s.label}
                        </span>
                        {i < row.length - 1 && (
                          <span className="text-white/40 mx-3">/</span>
                        )}
                      </span>
                    ))}
                  </p>
                ))}
              </div>

            </div>
          </div>

          {/* Marquee inferior violeta */}
          <div className="absolute bottom-0 left-0 w-full bg-[#7C3AED] py-4 md:py-5 overflow-hidden z-30">
            <div className="flex whitespace-nowrap animate-marquee items-center">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="flex items-center px-4 shrink-0">
                  <span className="text-white font-black text-sm uppercase tracking-widest mr-3">FOCUS</span>
                  <img
                    src={logoMiniatura}
                    alt="Focus"
                    className="h-6 w-auto object-contain opacity-80"
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
