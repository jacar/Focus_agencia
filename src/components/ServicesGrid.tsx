import React from 'react';
import { Share2, PenTool, Globe } from 'lucide-react';

// Import local images from the newly consolidated folder
import imgSocial from '../assets/imagenes/1.png';
import imgDesign from '../assets/imagenes/2.jpg';
import imgWeb from '../assets/imagenes/3.png';

interface ServiceCardProps {
  title: string;
  icon: React.ElementType;
  items: string[];
  image: string;
  reverse?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon: Icon, items, image, reverse = false }) => (
  <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-10 md:py-16 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className={`md:col-span-6 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#7C3AED] rounded-full flex items-center justify-center text-white shadow-lg">
          <Icon size={20} />
        </div>
        <h3 className="text-3xl md:text-5xl font-black tracking-tightest text-black uppercase">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-center gap-3 text-lg font-bold text-black/60 capitalize tracking-wide">
            <div className="w-2 h-2 bg-[#7C3AED] rounded-full"></div>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className={`md:col-span-6 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
      <div className="relative aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl group border-l-8 border-[#7C3AED]">
        <img src={image} alt={title} className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
      </div>
    </div>
  </div>
);

export const ServicesGrid: React.FC = () => {
  return (
    <section id="servicios" className="bg-white py-24">
      <div className="container overflow-visible">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-black leading-none">
            NUESTROS <span className="text-[#7C3AED]">SERVICIOS</span>
          </h2>
          <p className="text-xl font-bold text-black/40 mt-6 tracking-widest uppercase">Soluciones integrales para tu marca</p>
          <div className="w-20 h-2 bg-[#7C3AED] mx-auto mt-6 rounded-full"></div>
        </div>

        <ServiceCard 
          title="SOCIAL MEDIA"
          icon={Share2}
          items={["Creación de Contenido", "Administración de Redes", "Diseño Gráfico Viral", "Copy Writing Estratégico"]}
          image={imgSocial}
        />

        <ServiceCard 
          title="DISEÑO GRÁFICO"
          icon={PenTool}
          items={["Branding & Logotipos", "Manual Corporativo", "Piezas Publicitarias", "Retoque Fotográfico Profesional"]}
          image={imgDesign}
          reverse
        />

        <ServiceCard 
          title="DESARROLLO WEB"
          icon={Globe}
          items={["Landing Pages de Conversión", "Sitios Web Informativos", "E-commerce Premium", "Optimización UX/UI"]}
          image={imgWeb}
        />
      </div>
    </section>
  );
};
