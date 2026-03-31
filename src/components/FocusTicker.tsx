import React from 'react';
import logoMiniatura from '../assets/logosminiatura.svg';

export const FocusTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#8253FF] py-4 md:py-6 overflow-hidden border-y border-black/10">
      <div className="flex whitespace-nowrap animate-marquee items-center">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex items-center px-4 md:px-6 shrink-0">
            <span className="text-white font-black text-2xl md:text-3xl tracking-widest uppercase mr-4 md:mr-6">
              FOCUS
            </span>
            <img 
              src={logoMiniatura} 
              alt="Focus Creative" 
              className="h-6 md:h-8 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
