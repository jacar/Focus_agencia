import React from 'react';

export const KPIs: React.FC = () => {
  const cards = [
    {
      title: 'Clientes',
      value: '+ 200',
      img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Proyectos',
      value: '+ 1000',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Experiencia',
      value: '+ 5 años',
      img: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <section className="bg-[#121111] py-20 lg:py-32 border-t border-black" id="kpis">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* The 3 Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white flex flex-col">
              
              {/* Top Image area */}
              <div className="w-full aspect-square overflow-hidden bg-gray-200">
                <img 
                  src={card.img} 
                  alt={card.title}
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>

              {/* Text Bottom Area */}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-gray-700 font-medium text-lg lg:text-xl">
                  {card.title}
                </p>
                <h3 className="text-black font-black text-4xl lg:text-5xl mt-1 tracking-tight">
                  {card.value}
                </h3>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner Row */}
        <div className="mt-16 lg:mt-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          
          {/* Left Text */}
          <div className="text-white font-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase leading-[1.2] text-center md:text-left w-full md:w-auto">
            <p>ESTAMOS EN COLOMBIA</p>
            <p className="mt-2">
              Y AHORA TAMBIÉN EN <span className="relative inline-block">
                COSTA RICA
                {/* Wavy Underline SVG */}
                <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-5 text-[#8253FF]" preserveAspectRatio="none" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8C30 1 70 1 100 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </p>
          </div>

          {/* Right Button */}
          <div>
            <button className="bg-[#8253FF] hover:bg-[#6f42e5] text-white font-bold text-lg lg:text-xl px-10 py-4 lg:px-12 lg:py-5 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(130,83,255,0.4)]">
              CONOCE MÁS
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
