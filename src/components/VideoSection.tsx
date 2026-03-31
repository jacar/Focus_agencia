import React from 'react';
import { Play } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section className="bg-bg py-20 px-4 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Text Block */}
        <div className="text-[4.5vw] sm:text-2xl md:text-3xl lg:text-[38px] font-sans font-bold tracking-tight leading-[1.4] text-center mb-8 w-full flex flex-col items-center">
          <div className="whitespace-nowrap">
            <span className="text-[#8B5CF6]">SOCIAL MEDIA/ </span>
            <span className="text-white">DISEÑO GRÁFICO/ </span>
            <span className="text-[#8B5CF6]">DISEÑO WEB/</span>
          </div>
          <div className="whitespace-nowrap md:mt-2">
            <span className="text-white">META ADS/ </span>
            <span className="text-[#8B5CF6]">ASESORÍAS/ </span>
            <span className="text-white">PRODUCCIÓN AUDIOVISUAL</span>
          </div>
        </div>
        
        {/* Divider matching image */}
        <div className="w-[90%] max-w-[1000px] h-px bg-white mb-16"></div>
        
        {/* Video Placeholder */}
        <div className="w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] bg-white relative flex items-center justify-center cursor-pointer hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-shadow duration-300">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-[#1A1A1A] rounded-full flex items-center justify-center hover:scale-105 transition-transform">
            <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-2" fill="currentColor" />
          </div>
        </div>
      </div>
    </section>
  );
};
